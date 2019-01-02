'use strict';
// 注意创建以及卸载顺序,先按照被依赖的再安装依赖别人的,先卸载依赖别人的,再卸载被依赖的
module.exports = {
  async up(queryInterface, Sequelize) {
    const {
      STRING,
      INTEGER,
      ARRAY,
      DATE,
    } = Sequelize;
    await queryInterface.createTable('Tag',{
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
    })
    await queryInterface.createTable('Score', {
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
      score_text:{//内容本体
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
      carrier:{ //传谱人
        type:STRING,
        allowNull:true,
      },
      // sid: {
      //   type: INTEGER,
      //   allowNull: false,
      // },
      performs:{//B站作品
        type: INTEGER,
        allowNull: false,
      },
      songs:{ //网易云音乐
        type: INTEGER,
        allowNull: false,
      },
      created_at: DATE,
      updated_at: DATE,
    });
    await queryInterface.createTable('User', {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      avatar: {
        type: STRING(200),
        allowNull: true,
      },
      email: {
        type: STRING(50),
        allowNull: false,
      },
      name: {
        type: STRING(10),
        allowNull: false,
        defaultValue: 'undefined',
      },
      password: {
        type: STRING(100),
        allowNull: false,
      },
      signature: {
        type: STRING(50),
        allowNull: true,
        defaultValue: 'undefined',
      },
      role: { //
        type: INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      created_at: DATE,
      updated_at: DATE,
    });

    await queryInterface.createTable('Comment', {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      volume_id: {
        type: INTEGER,
        allowNull: false,
      },
      uid: {
        type: INTEGER,
        allowNull: false,
      },
      text: {
        type: STRING(300),
        allowNull: false,
        defaultValue: 'undefined',
      },
      status: { // -1已删除 0不可编辑 1可编辑 2回收站
        type: INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      created_at: DATE,
      updated_at: DATE,
    });
    await queryInterface.createTable('Volume', {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      photo: {
        type: STRING(200),
        allowNull: true,
      },
      title: {
        type: STRING(50),
        allowNull: false,
        defaultValue: 'undefined',
      },
      describe: {
        type: STRING(300),
        allowNull: true,
        defaultValue: 'undefined',
      },
      visits: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      status: { // -1已删除 0不可编辑 1可编辑 2回收站
        type: INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      created_at: DATE,
      updated_at: DATE,
    });
    await queryInterface.createTable('ownVolume', {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      vid: { // 数组外键,用于查评论表
        type: INTEGER({
          references: {
            model: 'Volume', // 对应外键表
            key: 'id', // 对应字段
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
          },
          allowNull: true,
        }),
      },
      uid: { // 数组外键,用于查评论表
        type: INTEGER({
          references: {
            model: 'User', // 对应外键表
            key: 'id', // 对应字段
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
          },
          allowNull: true,
        }),
      },
    });
    await queryInterface.createTable('collectionVolume', {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      vid: { // 数组外键,用于查评论表
        type: INTEGER({
          references: {
            model: 'Volume', // 对应外键表
            key: 'id', // 对应字段
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
          },
          allowNull: true,
        }),
      },
      uid: { // 数组外键,用于查评论表
        type: INTEGER({
          references: {
            model: 'User', // 对应外键表
            key: 'id', // 对应字段
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
          },
          allowNull: true,
        }),
      },
      created_at: DATE,
      updated_at: DATE,
    });


    await queryInterface.createTable('userStar', {
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
    })

    await queryInterface.createTable('scoreVolume', {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      sid: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      vid: { // 数组外键,用于查评论表
        type: INTEGER({
          references: {
            model: 'Volume', // 对应外键表
            key: 'id', // 对应字段
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
          },
          allowNull: true,
        }),
      },
    });
    await queryInterface.createTable('subComment', {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      comment_id: {
        type: INTEGER,
        allowNull: false,
      },
      targetid: {
        type: INTEGER,
        allowNull: true,
      },
      uid: {
        type: INTEGER,
        allowNull: false,
      },
      text: {
        type: STRING(300),
        allowNull: false,
        defaultValue: 'undefined',
      },
      status: { // -1已删除 0不可编辑 1可编辑 2回收站
        type: INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      created_at: {
        type: DATE,
        allowNull: true,
      },
      updated_at: {
        type: DATE,
        allowNull: true,
      },

    }, {
      createAt: 'created_at',
      updateAt: 'updated_at',

    });
    await queryInterface.createTable('Authorization', {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      provider: { //第三方
        type: STRING(20),
        allowNull: false,

      },
      token: {
        type: STRING(200),
        allowNull: false,
      },
      uid: { // 数组外键,用于查评论表
        type: INTEGER({
          references: {
            model: 'User', // 对应外键表
            key: 'id', // 对应字段
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
          },
          allowNull: false,
        }),
      },

    }, {
      createAt: 'created_at',
      updateAt: 'updated_at',

    });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  async down(queryInterface) {
    await queryInterface.dropTable('scoreVolume');
    await queryInterface.dropTable('collectionVolume');
    await queryInterface.dropTable('ownVolume');
    await queryInterface.dropTable('Volume');
    await queryInterface.dropTable('Comment');
    await queryInterface.dropTable('User');
    await queryInterface.dropTable('Score');
    await queryInterface.dropTable('subComment');
    await queryInterface.dropTable('Authorization')
    await queryInterface.dropTable('userStar')
    await queryInterface.dropTable('Tag')
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  },
};