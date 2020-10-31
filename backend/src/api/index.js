const express = require('express');
const app = express();
const bp = require('body-parser');

const doMigrations = require('../database/migrations');


app.use(bp.urlencoded({
    extended: true
}));
app.use(bp.json());

doMigrations();

const routes = express.Router();
require('./users')(routes);
app.use('/api', routes);

module.exports = app;