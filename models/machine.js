'use strict';
module.exports = (sequelize, DataTypes) => {
  const machine = sequelize.define('machine', {
    host_id: DataTypes.INTEGER,
    city_id: DataTypes.INTEGER,
    supplier_id: DataTypes.INTEGER,
    number: DataTypes.STRING,
    type_id: DataTypes.INTEGER,
    bandwidth: DataTypes.FLOAT
  }, {});
  machine.associate = function(models) {
    models.machine.hasOne(models.host, {foreignKey: 'id',sourceKey: 'host_id'});
    models.machine.hasOne(models.city, {foreignKey: 'id',sourceKey: 'city_id'});
    models.machine.hasOne(models.supplier, {foreignKey: 'id',sourceKey: 'supplier_id'});
    models.machine.hasOne(models.type, {foreignKey: 'id',sourceKey: 'type_id'});
  };
  return machine;
};