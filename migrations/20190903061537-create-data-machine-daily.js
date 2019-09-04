'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('data_machine_dailies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      machine_id: {
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.FLOAT
      },
      num_ag: {
        type: Sequelize.INTEGER
      },
      num_h5: {
        type: Sequelize.INTEGER
      },
      num_app: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('data_machine_dailies');
  }
};