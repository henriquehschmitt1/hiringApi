const Sequelize = require('sequelize')
const dbConfig = require('../config/database')


import Addresses from "../models/Addresses"
import Companies from "../models/Companies"
import Employee from "../models/Employees"
import CompanyEmployee from "../models/CompanyEmployee"


const connection = new Sequelize(dbConfig)

Addresses.init(connection)
Companies.init(connection)
Employee.init(connection)
CompanyEmployee.init(connection)

export = connection
