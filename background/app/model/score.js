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
      type: STRING,
      allowNull: false,
    },
    alias:{ //别名
      type: STRING,
      allowNull: true,
    },
    addtion:{ //简介
      type: STRING,
      allowNull: true,
    },
    image_url: { //图片
      type: STRING,
      allowNull: false,
    },
    tonality: {
      type: Number,
      allowNull: false,
    },
    score_text:{//内容本体
      type: STRING,
      allowNull: false,
    },
    description:{
      type: STRING,
      allowNull: false,
    },
    source_url:{//原谱地址
      type:STRING,
      allowNull:true,
    },
    provider:{//扒谱人
      type:STRING,
      allowNull:true,
    },
    provider_url:{ //扒谱人url
      type:STRING,
      allowNull:true,
    },
    performs:{//B站作品
      type: INTEGER,
      allowNull: false,
    },
    songs:{ //网易云音乐
      type: INTEGER,
      allowNull: false,
    },
    other_url:{
      type:STRING,
      allowNull:true,
    },
    other_img:{
      type:STRING,
      allowNull:true,
    }
  }, {
    timestamps: true,
    freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
  });

  return ScoreModel;
};