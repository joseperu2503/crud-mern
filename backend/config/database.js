const { Sequelize } = require('sequelize');
require('dotenv').config()
const { setupModels } = require("../db/models/index.js");

const db = new Sequelize(
    process.env.DB_DATABASE, 
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_CONNECTION
    }
)

setupModels(db)
// db.sync()

module.exports = db