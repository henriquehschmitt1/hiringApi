import express from 'express'
import { CompanyController } from '../controllers/companyController'
import { EmployeeController } from '../controllers/employeeController'
import { AssignController } from '../controllers/assignController'

const companyController = new CompanyController()
const employeeController = new EmployeeController()
const assignController = new AssignController()

const router = express.Router()

router.post('/company', companyController.createCompany)

router.post('/employee', employeeController.createEmployee)

router.post('/assign', assignController.companyEmployee)

//3 posts, cadastrar empregado, empresa e um no outro
//2 gets, ao fazer get para empresa mostrar todos os funcionarios associados.
// ao fazer get para empregado, mostrar todos os funcionarios associados.

export = router
