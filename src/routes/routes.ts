import express from 'express'
import { CompanyController } from '../controllers/companyController'
import { EmployeeController } from '../controllers/employeeController'
import { AssignController } from '../controllers/assignController'
import { CepController } from '../controllers/cepController'

const companyController = new CompanyController()
const employeeController = new EmployeeController()
const assignController = new AssignController()
const cepController = new CepController()

const router = express.Router()

router.post('/company', companyController.createCompany)
router.get('/company', companyController.getCompany)
router.put('/company', companyController.updateCompany)
router.delete('/company', companyController.deleteCompany)

router.post('/employee', employeeController.createEmployee)
router.get('/employee', employeeController.getEmployee)
router.put('/employee', employeeController.updateEmployee)
router.delete('/employee', employeeController.deleteEmployee)

router.post('/assign', assignController.companyEmployee)
router.delete('/assign', assignController.unassign)

router.get('/cep', cepController.getCep)

export = router
