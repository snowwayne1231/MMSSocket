'use strict';
module.exports = (sequelize, DataTypes) => {
  const city = sequelize.define('city', {
    area_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    code: DataTypes.STRING
  }, {});
  city.associate = function(models) {
    
    // models.city.belongsTo(models.area, { foreignKey: 'id' });
    models.city.hasOne(models.area, {foreignKey: 'id',sourceKey: 'area_id'});
  };
  return city;
};