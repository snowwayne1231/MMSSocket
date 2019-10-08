'use strict';
module.exports = (sequelize, DataTypes) => {
  const task_processing = sequelize.define('task_processing', {
    task_id: DataTypes.INTEGER,
    content: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    result: DataTypes.INTEGER,
    result_date: DataTypes.DATEONLY,
    operator_id: DataTypes.INTEGER
  }, {});
  task_processing.associate = function(models) {
    models.task_processing.hasOne(models.task, {foreignKey: 'id',sourceKey: 'task_id'});
    models.task_processing.hasOne(models.operator, {foreignKey: 'id',sourceKey: 'operator_id'});
  };
  return task_processing;
};