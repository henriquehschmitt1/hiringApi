import Addresses from "../models/Addresses"
import Companies from "../models/Companies"
import CompanyEmployees from "../models/CompanyEmployees"
import Employees from "../models/Employees"
import Validate from "../utils/validate"
import FromLoop from "../utils/fromLoop"

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

            const employeeIds = FromLoop.getCompanyEmployeeIds(companyEmployee)

            const employees = await Employees.findAll({
                where: {
                    id: employeeIds
                }
            })

            const employeeArray = FromLoop.getEmployees(employees)

            res.json({ companyName: company.dataValues.name, employees: employeeArray })
        } catch (error) {
            res.json({ error })
        }
    }

    async updateCompany(req: any, res: any) {
        const { companyId, zipCode, street, city, state, additionalAddressData } = req.body
        try {
            Validate.isValidCompanyUpdate(companyId, zipCode, street, city, state, additionalAddressData)

            const company = await Companies.findByPk(companyId)

            Validate.isValidResult(company, companyId)

            const address = await Addresses.create({ zipCode, street, city, state, additionalAddressData })

            company.addressId = address.dataValues.id

            const updatedCompany = await company.save()

            res.json({ updatedCompany })
        } catch (error) {
            res.json({ error })
        }
    }

    async deleteCompany(req: any, res: any) {
        const { companyId } = req.query
        try {
            Validate.exists(companyId, 'companyId')

            const company = await Companies.destroy({
                where: {
                    id: companyId
                }
            })

            const companiesEmployees = await CompanyEmployees.findAll({
                where: {
                    companyId
                }
            })

            if (companiesEmployees) {
                await FromLoop.deleteCompanyEmployees(companiesEmployees, companyId)
            }

            res.json({ company })
        } catch (error) {
            res.json({ error })
        }
    }

}
