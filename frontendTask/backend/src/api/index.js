const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


const routes = express.Router();
require('./notes')(routes)
app.use('/api', routes);

const frontendDir = path.join(
    __dirname,
    "../../../frontend/dist",
);


if (fs.existsSync(frontendDir)){
    app.use('/', express.static(frontendDir));

    app.get('*', function(request, response) {
        response.sendFile(
            path.resolve(frontendDir, 'index.html'),
        );
    });
}

module.exports = app;