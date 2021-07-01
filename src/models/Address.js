const { Model, DataTypes } = require('sequelize')

class Address extends Model {
    static init(sequelize) {
        super.init({
            zipCode: DataTypes.STRING,
            street: DataTypes.STRING,
            city: DataTypes.STRING,
            state: DataTypes.STRING,
            additionalAddressData: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Address