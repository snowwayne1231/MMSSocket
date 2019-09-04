'use strict';
module.exports = (sequelize, DataTypes) => {
  const area = sequelize.define('area', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    sort_number: DataTypes.INTEGER
  }, {});
  area.associate = function(models) {
    // models.area.hasOne(models.city, {foreignKey: 'area_id',sourceKey: 'id'});
  };
  return area;
};