const {User} = require('./user')
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User),
      Order.belongsToMany(models.Product,{
        through:models.Orderproduct
      })
    }
  }
  Order.init({
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};