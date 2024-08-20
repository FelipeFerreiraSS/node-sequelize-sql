const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const dotenv = require('dotenv');
dotenv.config();

const User = require('../models/User')
const Address = require('../models/Address')
const Tech = require('../models/Tech')

const connection = new Sequelize(process.env.DATABASE_URL)

User.init(connection)
Address.init(connection)
Tech.init(connection)

User.associate(connection.models)
Address.associate(connection.models)
Tech.associate(connection.models)

module.exports = connection