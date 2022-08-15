const {db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

const User = db.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

module.exports = {User}