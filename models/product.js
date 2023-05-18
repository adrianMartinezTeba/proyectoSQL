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
    img:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    trailer:{
      type: DataTypes.STRING,
      allowNull: false,
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