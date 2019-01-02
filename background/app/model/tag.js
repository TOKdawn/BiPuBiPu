// 谱子信息表
'use strict';

module.exports = app => {
  const {
    STRING,
    INTEGER,
  } = app.Sequelize;
  const TagModel = app.model.define('Tag', {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: INTEGER,
      allowNull: false,
    }
  }, {
    timestamps: false,
    freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
  });

  return TagModel;
};