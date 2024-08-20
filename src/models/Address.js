const { Model, DataTypes } = require("sequelize");

class Address extends Model {
  static init(sequelize) {
    super.init({
      zipcode: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,
    }, {
      sequelize,
      tableName: 'addresses',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }
}

module.exports = Address