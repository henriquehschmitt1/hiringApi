import express from 'express'
import { CompanyController } from '../controllers/companyController'
import { EmployeeController } from '../controllers/employeeController'
import { AssignController } from '../controllers/assignController'

const companyController = new CompanyController()
const employeeController = new EmployeeController()
const assignController = new AssignController()

const router = express.Router()

router.post('/company', companyController.createCompany)
router.get('/company', companyController.getCompany)

router.post('/employee', employeeController.createEmployee)
router.get('/employee', employeeController.getEmployee)

router.post('/assign', assignController.companyEmployee)

export = router
