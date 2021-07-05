const { Model, DataTypes } = require('sequelize')

class Employees extends Model {
    static init(sequelize: any) {
        super.init({
            name: DataTypes.STRING,
            cpf: DataTypes.STRING,
            email: DataTypes.STRING,
            addressId: DataTypes.INTEGER
        }, {
            sequelize,
            paranoid: true
        })
    }
}

export = Employees