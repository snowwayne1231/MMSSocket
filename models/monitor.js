'use strict';
module.exports = (sequelize, DataTypes) => {
  const monitor = sequelize.define('monitor', {
    type_id: DataTypes.INTEGER,
    key: DataTypes.STRING,
    key_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  monitor.associate = function(models) {
    models.monitor.hasOne(models.type, {foreignKey: 'id',sourceKey: 'type_id'});
    // models.machine.hasOne(models.key, {foreignKey: 'id',sourceKey: 'key_id'});
  };
  return monitor;
};