import Addresses from "../models/Addresses"
import Companies from "../models/Companies"
import CompanyEmployees from "../models/CompanyEmployees"
import Employees from "../models/Employees"
import Validate from "../utils/validate"
import FromLoop from "../utils/fromLoop"

export class EmployeeController {

    async createEmployee(req: any, res: any) {
        const { name, cpf, email, zipCode, street, city, state, additionalAddressData } = req.body
        try {
            Validate.isValidEmployee(name, cpf, email, zipCode, street, city, state, additionalAddressData)

            const address = await Addresses.create({ zipCode, street, city, state, additionalAddressData })
            const employee = await Employees.create({ name, cpf, email, addressId: address.dataValues.id })

            res.json({ employee, address })
        } catch (error) {
            res.json({ error })
        }
    }

    async getEmployee(req: any, res: any) {
        const { cpf } = req.query
        try {
            Validate.isValidCpf(cpf)

            const employee = await Employees.findOne({
                where: {
                    cpf
                }
            })

            const companyEmployee = await CompanyEmployees.findAll({
                where: {
                    employeeId: employee.dataValues.id
                }
            })

            const companyIds = FromLoop.getEmployeeCompaniesIds(companyEmployee)

            const companies = await Companies.findAll({
                where: {
                    id: companyIds
                }
            })

            const companyArray = FromLoop.getCompanies(companies)

            res.json({ employeeName: employee.dataValues.name, companies: companyArray })
        } catch (error) {
            res.json({ error })
        }
    }

    async updateEmployee(req: any, res: any) {
        const { employeeId, zipCode, street, city, state, additionalAddressData } = req.body
        try {
            Validate.isValidUpdate(employeeId, 'employeeId', zipCode, street, city, state, additionalAddressData)

            const employee = await Employees.findByPk(employeeId)

            Validate.isValidResult(employee, employeeId)

            const address = await Addresses.create({ zipCode, street, city, state, additionalAddressData })

            employee.addressId = address.dataValues.id

            const updatedEmployee = await employee.save()

            res.json({ updatedEmployee })
        } catch (error) {
            res.json({ error })
        }
    }

    async deleteEmployee(req: any, res: any) {
        const { employeeId } = req.query
        try {
            Validate.exists(employeeId, 'employeeId')

            const employee = await Employees.destroy({
                where: {
                    id: employeeId
                }
            })

            const companiesEmployees = await CompanyEmployees.findAll({
                where: {
                    employeeId
                }
            })

            if (companiesEmployees) {
                await FromLoop.deleteCompanyEmployeesByEmployeeId(companiesEmployees, employeeId)
            }

            res.json({ company: employee })
        } catch (error) {
            res.json({ error })
        }
    }

}