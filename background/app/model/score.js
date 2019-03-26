// 谱子信息表
'use strict';

module.exports = app => {
  const {
    STRING,
    INTEGER,
  } = app.Sequelize;
  const ScoreModel = app.model.define('Score', {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { //标题
      type: STRING(30),
      allowNull: false,
    },
    alias:{ //别名
      type: STRING(30),
      allowNull: true,
    },
    addtion:{ //简介
      type: STRING(30),
      allowNull: true,
    },
    image_url: { //图片
      type: STRING(300),
      allowNull: false,
    },
    tonality: {
      type: STRING(30),
      allowNull: true,
    },
    score_text:{//内容本体
      type: STRING(3000),
      allowNull: false,
    },
    description:{
      type: STRING(3000),
      allowNull: true,
    },
    source_url:{//原谱地址
      type:STRING(300),
      allowNull:true,
    },
    provider:{//扒谱人
      type:STRING(30),
      allowNull:true,
    },
    provider_url:{ //扒谱人url
      type:STRING(300),
      allowNull:true,
    },
    performs:{//B站作品
      type: STRING(300),
      allowNull: true,
    },
    songs:{ //网易云音乐
      type: STRING(300),
      allowNull: true,
    },
    other_url:{
      type:STRING(300),
      allowNull:true,
    },
    other_img:{
      type:STRING(300),
      allowNull:true,
    }
  }, {
    timestamps: true,
    freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
  });

  return ScoreModel;
};