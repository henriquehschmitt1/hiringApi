import Addresses from "../models/Addresses"
import Employees from "../models/Employees"
import Validate from "../utils/validate"

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

}