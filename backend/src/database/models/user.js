const Sequelize = require('sequelize');
const database = require('../database');

const User = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    image: {
        type: Sequelize.BLOB('long'),
        allowNull: true
    },
    pdf: {
        type: Sequelize.BLOB('long'),
        allowNull: true
    }
});

module.exports = User;

