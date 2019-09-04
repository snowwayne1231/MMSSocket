'use strict';
module.exports = (sequelize, DataTypes) => {
  const data_machine_daily = sequelize.define('data_machine_daily', {
    date: DataTypes.DATE,
    machine_id: DataTypes.INTEGER,
    data: DataTypes.FLOAT,
    num_ag: DataTypes.INTEGER,
    num_h5: DataTypes.INTEGER,
    num_app: DataTypes.INTEGER
  }, {});
  data_machine_daily.associate = function(models) {
    models.data_machine_daily.hasOne(models.machine, {foreignKey: 'id',sourceKey: 'machine_id'});
  };
  return data_machine_daily;
};