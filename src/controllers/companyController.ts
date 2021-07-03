import Address from "../models/Address"
import Company from "../models/Company"
export class CompanyController {

    async createCompany(req: any, res: any) {
        const { name, cnpj, zipCode, street, city, state, additionalAddressData } = req.body
        try {
            console.log("dsa123das12d1sa2")
        } catch (error) {
            console.log(error)
        }
    }

    async getCompany(req: any, res: any) {

    }

}
