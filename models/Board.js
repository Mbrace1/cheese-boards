const {db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

const Board = db.define('board', {
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})

module.exports = {Board}