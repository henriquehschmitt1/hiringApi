const Sequelize = require('sequelize')
const dbConfig = require('../config/database')


import Addresses from "../models/Addresses"
import Companies from "../models/Companies"
import Employee from "../models/Employees"
import CompanyEmployees from "../models/CompanyEmployees"


const connection = new Sequelize(dbConfig)

Addresses.init(connection)
Companies.init(connection)
Employee.init(connection)
CompanyEmployees.init(connection)

export = connection
