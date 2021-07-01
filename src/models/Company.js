const { Model, DataTypes } = require('sequelize')

class Employee extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            cnpj: DataTypes.STRING,
            addressId: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}

module.exports = Employee