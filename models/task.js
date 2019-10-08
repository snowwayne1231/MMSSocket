'use strict';
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define('task', {
    date: DataTypes.DATE,
    hashtag_id: DataTypes.INTEGER,
    monitor_id: DataTypes.INTEGER,
    jira_ticket: DataTypes.STRING,
    content: DataTypes.TEXT,
    cmplt_date: DataTypes.DATE,
    operator_id_cmplt: DataTypes.INTEGER,
    cause_id: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    number_processing: DataTypes.INTEGER,
    operator_id_created: DataTypes.INTEGER
  }, {});
  task.associate = function(models) {
    models.task.hasOne(models.hashtag, {foreignKey: 'id',sourceKey: 'hashtag_id'});
    models.task.hasOne(models.monitor, {foreignKey: 'id',sourceKey: 'monitor_id'});
    models.task.hasOne(models.cause, {foreignKey: 'id',sourceKey: 'cause_id'});
    models.task.hasOne(models.operator, {foreignKey: 'id',sourceKey: 'operator_id_created'});
    models.task.hasOne(models.operator, {foreignKey: 'id',sourceKey: 'operator_id_cmplt'});
    models.task.hasMany(models.task_processing, {foreignKey: 'task_id',sourceKey: 'id'});
  };
  return task;
};