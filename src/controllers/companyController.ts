import Addresses from "../models/Addresses"
import Companies from "../models/Companies"
import Validate from "../utils/validate"

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

    }

}
