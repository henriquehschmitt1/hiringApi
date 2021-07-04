import Companies from "../models/Companies"
import Employees from "../models/Employees"
import CompanyEmployees from "../models/CompanyEmployees"
import Validate from "../utils/validate"

export class AssignController {
    async companyEmployee(req: any, res: any) {
        const { companyId, employeeId } = req.body
        try {
            Validate.isId(companyId, employeeId)

            const company = await Companies.findByPk(companyId)
            const employee = await Employees.findByPk(employeeId)

            Validate.areValidResults(company, employee)

            const companyEmployee = await CompanyEmployees.create({ companyId: company.dataValues.id, employeeId: employee.dataValues.id })

            res.json({ companyEmployee })
        } catch (error) {
            res.json({ error })
        }
    }
}