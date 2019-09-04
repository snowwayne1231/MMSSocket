'use strict';
module.exports = (sequelize, DataTypes) => {
  const cause = sequelize.define('cause', {
    type_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  cause.associate = function(models) {
    // associations can be defined here
    models.cause.hasOne(models.type, {foreignKey: 'id',sourceKey: 'type_id'});
  };
  return cause;
};