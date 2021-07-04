export = {
    getCompanyEmployeeIds(companyEmployee: any) {
        let arrayId = []
        for (let employeeId of companyEmployee) {
            arrayId.push(employeeId.dataValues.employeeId)
        }
        return arrayId
    },

    getEmployees(employees: any) {
        let employeeArray = []
        for (let employee of employees) {
            employeeArray.push(employee.name)
        }
        return employeeArray
    }
}