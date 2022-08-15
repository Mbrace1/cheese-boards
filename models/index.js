// export all model files here and db
//  also add table relationships
const {Board} = require('./Board')
const {Cheese} = require('./Cheese')
const {User} = require('./User')
const {db} = require('../db');

module.exports = {db, Board, User, Cheese}