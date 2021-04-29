'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('purchaseOrders', {
       id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
       userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
       createdAt: Sequelize.DATE,
       updatedAt: Sequelize.DATE,
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.droptable('purchaseOrders');
  }
};
