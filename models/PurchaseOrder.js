const { Sequelize } = require('sequelize');
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('purchaseOrders', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: {
      type: Sequelize.INTEGER,
      references: {
            model: 'users',
            key: 'id',
      },
      onDelete: 'CASCADE',
    },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  hooks: {
    beforeCreate: function (purchaseOrder, options, fn) {
      purchaseOrder.createdAt = new Date();
      purchaseOrder.updatedAt = new Date();
      //fn(null, purchaseOrder);
    },
    beforeUpdate: function (purchaseOrder, options, fn) {
      purchaseOrder.updatedAt = new Date();
      //fn(null, purchaseOrder);
    },
  },
});