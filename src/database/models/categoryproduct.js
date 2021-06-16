'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Category.belongsToMany(models.Product, {
        as: 'products',
        through: 'CategoryProduct',
        
      });

    }
  };
  CategoryProduct.init({
    productId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CategoryProduct',
  });
  return CategoryProduct;
};