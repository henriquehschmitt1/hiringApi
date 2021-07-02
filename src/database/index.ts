import Address from "../models/Address"
import Company from "../models/Company"
import Employee from "../models/Company"
import CompanyEmployee from "../models/CompanyEmployee"

const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const connection = new Sequelize(dbConfig)

Address.init(connection)
Company.init(connection)
Employee.init(connection)
CompanyEmployee.init(connection)

export = connection
