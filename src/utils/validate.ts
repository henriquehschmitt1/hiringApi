export = {

    exists(param, paramName) {
        if (!param) {
            throw {
                status: 400,
                errorMessage: `Param ${paramName} does not exists`
            }
        }
    },

    checkLength(param, length) {
        if (param.length !== length) {
            throw {
                status: 400,
                errorMessage: `Param ${param} does not meet the correct length ${length}`
            }
        }
    },

    existsCompanyParams(name, cnpj, zipCode, street, city, state, additionalAddressData) {
        this.exists(name, 'name')
        this.exists(cnpj, 'cnpj')
        this.exists(zipCode, 'zipCode')
        this.exists(street, 'street')
        this.exists(city, 'city')
        this.exists(state, 'state')
        this.exists(additionalAddressData, 'additionalAddressData')
    },

    isValidCompany(name, cnpj, zipCode, street, city, state, additionalAddressData) {
        try {
            this.existsCompanyParams(name, cnpj, zipCode, street, city, state, additionalAddressData)
            this.checkLength(cnpj, 14)
            this.checkLength(zipCode, 8)
            //validar cpf e cnpj
        } catch (error) {
            console.log(error)
        }
    },

    validateCnpj(cnpj) {

    },

    validateCpf(cpf) {


    }
}