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

    isValidCnpj(cnpj: string) {
        this.exists(cnpj, 'cnpj')
        this.validateCnpj(cnpj)
    },

    isValidCpf(cpf: string) {
        this.exists(cpf, 'cpf')
        this.validateCpf(cpf)
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
        this.isValidCnpj(cnpj)
        this.exists(zipCode, 'zipCode')
        this.exists(street, 'street')
        this.exists(city, 'city')
        this.exists(state, 'state')
        this.exists(additionalAddressData, 'additionalAddressData')
    },

    existsEmployeeParams(name: string, cpf: string, email: string, zipCode: string, street: string, city: string, state: string, additionalAddressData: string) {
        this.exists(name, 'name')
        this.isValidCpf(cpf)
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
        this.checkLength(zipCode, 8)
    },

    isValidEmployee(name: string, cpf: string, email: string, zipCode: string, street: string, city: string, state: string, additionalAddressData: string) {
        this.existsEmployeeParams(name, cpf, email, zipCode, street, city, state, additionalAddressData)
        this.checkLength(cpf, 11)
        this.checkLength(zipCode, 8)
    },

    validateCnpj(cnpj: any) {
        const firstDV = this.getCnpjDigit(cnpj, 5, 13)
        const secondDV = this.getCnpjDigit(cnpj, 6, 12)
        console.log(firstDV, secondDV)
        if (!(firstDV === cnpj.charAt(12) && secondDV === cnpj.charAt(13))) {
            throw {
                status: 400,
                errorMessage: `Invalid CNPJ`
            }
        }
    },

    validateCpf(cpf: any) {
        const firstDV = this.getCpfDigit(cpf, 10, 9)
        const secondDV = this.getCpfDigit(cpf, 11, 10)
        if (!(firstDV === cpf.charAt(9) && secondDV === cpf.charAt(10))) {
            throw {
                status: 400,
                errorMessage: `Invalid CPF`
            }
        }
    },
    getCpfDigit(digits: string, weight: number, digitQtt: number) {
        let digit, sum, result, num
        sum = 0

        for (let i = 0; i < digitQtt; i++) {
            num = parseInt(digits.charAt(i))
            sum = sum + (num * weight)
            weight--
        }

        result = 11 - (sum % 11)

        if (result > 9) {
            digit = '0'
        }
        else {
            digit = result.toString()
        }

        return digit
    },

    getCnpjDigit(digits: string, weight: number, digitQtt: number) {
        let digit, sum, result, num
        sum = 0

        for (let i = 0; i < digitQtt; i++) {
            num = parseInt(digits.charAt(i))
            sum = sum + (num * weight)
            weight++
            if (weight > 9) {
                weight = 2
            }
        }

        result = 11 - (sum % 11)

        if (result > 9) {
            digit = '0'
        }
        else {
            digit = result.toString()
        }

        return digit
    }
}