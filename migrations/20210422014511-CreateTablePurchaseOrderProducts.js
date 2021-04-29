'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('purchaseOrdersProducts', {
       /* id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }, */
       purchaseOrderId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'purchaseOrders',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true /*Revisar con Noe */
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true /*Revisar con Noe */
      },
      quantity: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.droptable('purchaseOrders');
  }
};