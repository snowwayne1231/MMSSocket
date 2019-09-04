'use strict';
module.exports = (sequelize, DataTypes) => {
  const hashtag = sequelize.define('hashtag', {
    type_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  hashtag.associate = function(models) {
    models.hashtag.hasOne(models.type, {foreignKey: 'id',sourceKey: 'type_id'});
  };
  return hashtag;
};