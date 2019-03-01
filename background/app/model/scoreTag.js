//  用户创建谱册表
'use strict';
module.exports = app => {
  const {
    INTEGER,
  } = app.Sequelize;
  const scoreTagModel = app.model.define('scoreTag', {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    sid: {
      type: INTEGER,
      allowNull: false,
    },
    tid: {
      type: INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'scoreTag', // 设置表名
  });
  return scoreTagModel;
};