'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATEONLY
      },
      hashtag_id: {
        type: Sequelize.INTEGER
      },
      monitor_id: {
        type: Sequelize.INTEGER
      },
      jira_ticket: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      cmplt_date: {
        type: Sequelize.DATEONLY
      },
      operator_id_cmplt: {
        type: Sequelize.INTEGER
      },
      cause_id: {
        type: Sequelize.INTEGER
      },
      number_processing: {
        type: Sequelize.INTEGER
      },
      operator_id_created: {
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
    return queryInterface.dropTable('tasks');
  }
};