export = {

    exists(param: any, paramName: string) {
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

    isId(companyId: number, employeeId: number) {
        this.exists(companyId, 'companyId')
        this.exists(employeeId, 'employeeId')
        if (!(Number.isInteger(companyId) && Number.isInteger(employeeId))) {
            throw {
                status: 400,
                errorMessage: `One of the ids is not an Integer`
            }
        }
    },

    areValidResults(company: object, employee: object) {
        if (!(company && employee)) {
            throw {
                status: 400,
                errorMessage: `One of the ids does not exists`
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

    existsEmployeeParams(name: string, cpf: string, email: string, zipCode: string, street: string, city: string, state: string, additionalAddressData: string) {
        this.exists(name, 'name')
        this.exists(cpf, 'cpf')
        this.exists(email, 'email')
        this.exists(zipCode, 'zipCode')
        this.exists(street, 'street')
        this.exists(city, 'city')
        this.exists(state, 'state')
        this.exists(additionalAddressData, 'additionalAddressData')
    },

    isValidCompany(name: string, cnpj: string, zipCode: string, street: string, city: string, state: string, additionalAddressData: string) {
        this.existsCompanyParams(name, cnpj, zipCode, street, city, state, additionalAddressData)
        this.checkLength(cnpj, 14)
        //validar cnpj
        this.checkLength(zipCode, 8)
    },

    isValidEmployee(name: string, cpf: string, email: string, zipCode: string, street: string, city: string, state: string, additionalAddressData: string) {
        this.existsEmployeeParams(name, cpf, email, zipCode, street, city, state, additionalAddressData)
        this.checkLength(cpf, 11)
        //validar cpf
        this.checkLength(zipCode, 8)
    },

    validateCnpj(cnpj: any) {

    },

    validateCpf(cpf: any) {


    }
}