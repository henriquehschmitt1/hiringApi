const { Model, DataTypes } = require('sequelize')

class CompanyEmployees extends Model {
    static init(sequelize: any) {
        super.init({
            companyId: DataTypes.INTEGER,
            employeeId: DataTypes.INTEGER
        }, {
            sequelize,
            paranoid: true
        })
    }
}

export = CompanyEmployees