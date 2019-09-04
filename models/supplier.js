'use strict';
module.exports = (sequelize, DataTypes) => {
  const supplier = sequelize.define('supplier', {
    name: DataTypes.STRING,
    code: DataTypes.STRING
  }, {});
  supplier.associate = function(models) {
    // associations can be defined here
  };
  return supplier;
};