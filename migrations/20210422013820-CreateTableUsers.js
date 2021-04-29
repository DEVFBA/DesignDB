'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: Sequelize.TEXT,
      role: Sequelize.TEXT,
      email: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true  // Revisar con Noe como lo resuelve
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.droptable('users');
  }
};
