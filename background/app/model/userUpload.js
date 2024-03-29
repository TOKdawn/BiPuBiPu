// 用户上传
'use strict';
module.exports = app => {
  const {
    INTEGER,
  } = app.Sequelize;
  const userUploadModel = app.model.define('userUpload', {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    uid: {
      type: INTEGER,
      allowNull: false,

    },
    sid: {
      type: INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
  });

  return userUploadModel;
};