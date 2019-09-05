'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'tasks',
      'duration',
      {type: Sequelize.INTEGER, after: "cause_id"},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'tasks',
      'duration'
    );
  }
};
