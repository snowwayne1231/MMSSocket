'use strict';
module.exports = (sequelize, DataTypes) => {
  const data_transfer_daily = sequelize.define('data_transfer_daily', {
    date: DataTypes.DATE,
    num_bj: DataTypes.INTEGER,
    num_sh: DataTypes.INTEGER,
    num_gd: DataTypes.INTEGER,
    num_seg_a: DataTypes.INTEGER,
    num_seg_b: DataTypes.INTEGER,
    num_eq: DataTypes.INTEGER,
    data_bj: DataTypes.INTEGER,
    data_sh: DataTypes.INTEGER,
    data_gd: DataTypes.INTEGER,
    data_ct: DataTypes.INTEGER,
    data_cu: DataTypes.INTEGER,
    data_cm: DataTypes.INTEGER,
    dnsapi_pc: DataTypes.INTEGER,
    dnsapi_h5: DataTypes.INTEGER
  }, {});
  data_transfer_daily.associate = function(models) {
    // models.data_machine_daily.hasOne(models.machine, {foreignKey: 'id',sourceKey: 'machine_id'});
  };
  return data_transfer_daily;
};