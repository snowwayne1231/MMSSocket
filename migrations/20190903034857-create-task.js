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
        type: Sequelize.DATE
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
        type: Sequelize.DATE
      },
      cmplt_user_id: {
        type: Sequelize.INTEGER
      },
      cause_id: {
        type: Sequelize.INTEGER
      },
      number_processing: {
        type: Sequelize.INTEGER
      },
      created_user_id: {
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