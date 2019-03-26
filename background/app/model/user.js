// {app_root}/app/model/user.js
//    用户表
'use strict';
module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
    } = app.Sequelize;
    const UserModel = app.model.define('User', {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email:{
          type: STRING(30),
          allowNull: false,
        },
        avatar: {
            type: STRING(200),
            allowNull: true,
        },
        name: {
            type: STRING(20),
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
            defaultValue: 0, //1登录 ,0未登录,2管理员
        },

        bilibili:{
          type: STRING(200),
          allowNull: true,
          defaultValue: '',
        },
        weibo:{
          type: STRING(200),
          allowNull: true,
          defaultValue: '',
        },
        fivesong:{
          type: STRING(200),
          allowNull: true,
          defaultValue: '',
        },
        tieba:{
          type: STRING(200),
          allowNull: true,
          defaultValue: '',
        },
        other:{
          type: STRING(200),
          allowNull: true,
          defaultValue: '',
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
        timestamps: true,
        freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });

    return UserModel;
};