import internal from "stream"

export = {

    exists(param: string, paramName: string) {
        if (!param) {
            throw {
                status: 400,
                errorMessage: `Param ${paramName} does not exists`
            }
        }
    },

    checkLength(param: string, length: number) {
        if (param.length !== length) {
            throw {
                status: 400,
                errorMessage: `Param ${param} does not meet the correct length ${length}, current length ${param.length}`
            }
        }
    },

    existsCompanyParams(name: string, cnpj: string, zipCode: string, street: string, city: string, state: string, additionalAddressData: string) {
        this.exists(name, 'name')
        this.exists(cnpj, 'cnpj')
        this.exists(zipCode, 'zipCode')
        this.exists(street, 'street')
        this.exists(city, 'city')
        this.exists(state, 'state')
        this.exists(additionalAddressData, 'additionalAddressData')
    },

    isValidCompany(name: string, cnpj: string, zipCode: string, street: string, city: string, state: string, additionalAddressData: string) {
        this.existsCompanyParams(name, cnpj, zipCode, street, city, state, additionalAddressData)
        this.checkLength(cnpj, 14)
        this.checkLength(zipCode, 8)
        //validar cpf e cnpj, criar os metodos abaixo
    },

    validateCnpj(cnpj: any) {

    },

    validateCpf(cpf: any) {


    }
}