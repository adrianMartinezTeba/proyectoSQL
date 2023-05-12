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
        notEmpty: {
          msg: "Por favor introduce el nombre",
        },
      },
    },
    price:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Por favor introduce el precio",
        }
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: "Por favor introduce una desccripción del producto",
        }
    },
    CategoryId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Por favor introduce la categoria",
        },
      },
    }
  }, },{
    sequelize,
    modelName: 'Product',
  });
  return Product;
};