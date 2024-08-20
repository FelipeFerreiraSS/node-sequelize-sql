const { Model, DataTypes } = require("sequelize");

class Tech extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'techs',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    })
  }

  static associate(models) {
    this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'user_techs', as: 'users'})
  }
}

module.exports = Tech