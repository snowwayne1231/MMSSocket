'use strict';
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define('task', {
    date: DataTypes.DATE,
    hashtag_id: DataTypes.INTEGER,
    monitor_id: DataTypes.INTEGER,
    jira_ticket: DataTypes.STRING,
    content: DataTypes.TEXT,
    cmplt_date: DataTypes.DATE,
    cmplt_user_id: DataTypes.INTEGER,
    cause_id: DataTypes.INTEGER,
    number_processing: DataTypes.INTEGER,
    created_user_id: DataTypes.INTEGER
  }, {});
  task.associate = function(models) {
    models.task.hasOne(models.hashtag, {foreignKey: 'id',sourceKey: 'hashtag_id'});
    models.task.hasOne(models.monitor, {foreignKey: 'id',sourceKey: 'monitor_id'});
    models.task.hasOne(models.cause, {foreignKey: 'id',sourceKey: 'cause_id'});
    models.task.hasOne(models.operator, {foreignKey: 'id',sourceKey: 'created_user_id'});
    models.task.hasOne(models.operator, {foreignKey: 'id',sourceKey: 'cmplt_user_id'});
  };
  return task;
};