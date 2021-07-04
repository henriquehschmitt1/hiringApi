import Addresses from "../models/Addresses"
import Companies from "../models/Companies"
import CompanyEmployees from "../models/CompanyEmployees"
import Employees from "../models/Employees"
import Validate from "../utils/validate"
import GetFromLoop from "../utils/getFromLoop"

export class CompanyController {

    async createCompany(req: any, res: any) {
        const { name, cnpj, zipCode, street, city, state, additionalAddressData } = req.body
        try {
            Validate.isValidCompany(name, cnpj, zipCode, street, city, state, additionalAddressData)

            const address = await Addresses.create({ zipCode, street, city, state, additionalAddressData })
            const company = await Companies.create({ name, cnpj, addressId: address.dataValues.id })

            res.json({ company, address })
        } catch (error) {
            res.json({ error })
        }
    }

    async getCompany(req: any, res: any) {
        const { cnpj } = req.query
        try {
            Validate.isValidCnpj(cnpj)

            const company = await Companies.findOne({
                where: {
                    cnpj
                }
            })


            const companyEmployee = await CompanyEmployees.findAll({
                where: {
                    companyId: company.dataValues.id
                }
            })

            const employeeIds = GetFromLoop.getCompanyEmployeeIds(companyEmployee)

            const employees = await Employees.findAll({
                where: {
                    id: employeeIds
                }
            })

            const employeeArray = GetFromLoop.getEmployees(employees)

            res.json({ companyName: company.dataValues.name, employees: employeeArray })
        } catch (error) {
            res.json({ error })
        }
    }

}
