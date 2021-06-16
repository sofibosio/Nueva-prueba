'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      // belongsTo
      Product.belongsTo(models.Brand);

      // belongsTo
      Product.belongsTo(models.User);

      // belongsToMany
      Product.belongsToMany(models.Color, {
        as: 'colors',
        through: 'colorProduct',
      });

      // belongsToMany
      Product.belongsToMany(models.Category, {
        as: 'categories',
        through: 'CategoryProduct',

      });




    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    image: DataTypes.STRING,
    keywords: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};