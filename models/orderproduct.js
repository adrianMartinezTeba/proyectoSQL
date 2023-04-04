'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orderproduct extends Model {
    static associate(models) {
      // define association here
    }
  }
  Orderproduct.init({
    OrderId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orderproduct',
  });
  return Orderproduct;
};