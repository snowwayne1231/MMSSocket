'use strict';
module.exports = (sequelize, DataTypes) => {
  const host = sequelize.define('host', {
    name: DataTypes.STRING,
    code: DataTypes.STRING
  }, {});
  host.associate = function(models) {
    // associations can be defined here
  };
  return host;
};