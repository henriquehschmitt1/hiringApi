const { Model, DataTypes } = require('sequelize')

class CompanyEmployee extends Model {
    static init(sequelize) {
        super.init({
            companyId: DataTypes.INTEGER,
            employeeId: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}

module.exports = CompanyEmployee