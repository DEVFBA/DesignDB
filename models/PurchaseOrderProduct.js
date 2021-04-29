const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => sequelize.define('purchaseOrderProducts', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  content: DataTypes.TEXT,
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
    onDelete: 'CASCADE',
    },
  productId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'products',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  quantity: DataTypes.INTEGER,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  hooks: {
    beforeCreate: function (purchaseOrder, options, fn) {
      purchaseOrder.createdAt = new Date();
      purchaseOrder.updatedAt = new Date();
      //fn(null, review);
    },
    beforeUpdate: function (purchaseOrder, options, fn) {
      purchaseOrder.updatedAt = new Date();
      //fn(null, review);
    },
  },
});