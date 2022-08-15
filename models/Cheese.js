const {db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

const Cheese = db.define('cheese', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

module.exports = {Cheese}