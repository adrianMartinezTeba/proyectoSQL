'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
    Product.belongsTo(models.Category),
    Product.belongsToMany(models.Order,{
      through:models.Orderproduct
    })
    }
  }
  Product.init({
    name:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor introduce el nombre",
        },
      },
    },
    price:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor introduce tu nombre",
        },
      },
    },
    CategoryId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor introduce tu nombre",
        },
      },
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};