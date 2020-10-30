const Sequelize = require('sequelize');
const database = require('../databaseInit');

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
        type: Sequelize.STRING(255).BINARY,
        allowNull: true
    },
    pdf: {
        type: Sequelize.STRING(255).BINARY,
        allowNull: true
    }
});

module.exports = User;

