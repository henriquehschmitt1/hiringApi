const { Model, DataTypes } = require('sequelize')

class Addresses extends Model {
    static init(sequelize: any) {
        super.init({
            zipCode: DataTypes.STRING,
            street: DataTypes.STRING,
            city: DataTypes.STRING,
            state: DataTypes.STRING,
            additionalAddressData: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

export = Addresses