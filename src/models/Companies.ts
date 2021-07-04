const { Model, DataTypes } = require('sequelize')

class Companies extends Model {
    static init(sequelize: any) {
        super.init({
            name: DataTypes.STRING,
            cnpj: DataTypes.STRING,
            addressId: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}

export = Companies