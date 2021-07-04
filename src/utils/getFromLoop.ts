export = {
    getCompanyEmployeeIds(companyEmployee: any) {
        let arrayId = []
        for (let employeeId of companyEmployee) {
            arrayId.push(employeeId.dataValues.employeeId)
        }
        return arrayId
    },

    getEmployeeCompaniesIds(companyEmployee: any) {
        let arrayId = []
        for (let companyId of companyEmployee) {
            arrayId.push(companyId.dataValues.companyId)
        }
        return arrayId
    },

    getEmployees(employees: any) {
        let employeeArray = []
        for (let employee of employees) {
            employeeArray.push(employee.name)
        }
        return employeeArray
    },

    getCompanies(companies: any) {
        let companyArray = []
        for (let company of companies) {
            companyArray.push(company.name)
        }
        return companyArray
    }
}