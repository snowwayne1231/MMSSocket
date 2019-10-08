'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('data_transfer_dailies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATEONLY
      },
      num_bj: {
        type: Sequelize.INTEGER
      },
      num_sh: {
        type: Sequelize.INTEGER
      },
      num_gd: {
        type: Sequelize.INTEGER
      },
      num_seg_a: {
        type: Sequelize.INTEGER
      },
      num_seg_b: {
        type: Sequelize.INTEGER
      },
      num_eq: {
        type: Sequelize.INTEGER
      },
      data_bj: {
        type: Sequelize.INTEGER
      },
      data_sh: {
        type: Sequelize.INTEGER
      },
      data_gd: {
        type: Sequelize.INTEGER
      },
      data_ct: {
        type: Sequelize.INTEGER
      },
      data_cu: {
        type: Sequelize.INTEGER
      },
      data_cm: {
        type: Sequelize.INTEGER
      },
      dnsapi_pc: {
        type: Sequelize.INTEGER
      },
      dnsapi_h5: {
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
    return queryInterface.dropTable('data_transfer_dailies');
  }
};