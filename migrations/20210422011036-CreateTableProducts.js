'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('products', {
       id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
       name: Sequelize.STRING,
       description: Sequelize.TEXT,
       price: Sequelize.FLOAT,
       image: Sequelize.STRING,
       createdAt: Sequelize.DATE,
       updatedAt: Sequelize.DATE,
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.droptable('products');
  }
};