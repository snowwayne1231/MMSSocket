'use strict';
module.exports = (sequelize, DataTypes) => {
  const operator = sequelize.define('operator', {
    name: DataTypes.STRING
  }, {});
  operator.associate = function(models) {
    // associations can be defined here
  };
  return operator;
};