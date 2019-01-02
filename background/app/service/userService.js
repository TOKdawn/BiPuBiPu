'use strict';
// app/service/user.js
const Service = require('egg').Service;
class UserService extends Service {
  constructor(ctx) {
    super(ctx);
    this.CollectionVolume = this.ctx.model.CollectionVolume;
    this.User = this.ctx.model.User;
    this.Volume = this.ctx.model.Volume;
    this.Auhtor = this.ctx.model.Authorization;
  }

  async getInfo(uid) {
    if (!uid) return {
      error: true,
      message: 'uid is not exist'
    };
    // console.log(this.ctx.model);
    const user = await this.User.findOne({
      where: {
        id: uid,
      },
    });
    // console.log(user);
    return user;
  }

  async checkEmail(email) {
    const data = await this.User.findOne({
      where:{
        email:email
      }
    });
    if(data){
      return true
    } else {
      return false
    }
  }

  async getUserCollection(uid, offset, pagesize, owned) {
    // this.Volume.belongsTo(this.CollectionVolume, { foreignKey: 'vid', sourceKey: 'id' });
    const tablename = !owned ? 'collectionVolume' : 'ownVolume';
    const data = await this.Volume.findAll({
      // attributes: ['vid', 'uid'],
      where: {
        id: {
          $in: this.app.Sequelize.literal(
            `(SELECT vid FROM "${tablename}" WHERE uid = ${uid})`
          ),
        },
      },
      limit: pagesize,
      offset,
    });
    // console.log(data)
    return data;
  }

  async addCollectionVolume(uid, vid) {
    const data = await this.CollectionVolume.findOrCreate({
      where: {
        uid,
        vid,
      },
    });
    return data;
  }

  async deleteCollectionVolume(uid, vid) {
    // const Op = this.app.Sequelize.Op
    const data = await this.CollectionVolume.destroy({
      where: {
        uid,
        vid,
      },
    });
    // console.log(data);
    return data;
  }

  async checkEmail(email){
    const data = await this.User.findOne({
      where: {
        email
      }
    })
    if(data !== ''){
      return true //有重复邮箱
    }else{
      return false//无重复邮箱
    }
  }

  async Register(username, email, password) {
    var crypto = require('crypto');
    var md5 = crypto.createHash('md5');
    var cryptostr = md5.update(password+'').digest('hex');
    const data = await this.User.create({
      name: username,
      avatar: 'http://bipu.oss-cn-beijing.aliyuncs.com/egg-multipart-test/akari.jpg',
      signature: '这个人很懒,啥也没写╮(╯_╰)╭',
      password: cryptostr,
      email: email
    });
    return data;
  }
  
  async Login(email,password){
    var crypto = require('crypto');
    var md5 = crypto.createHash('md5');
    var cryptostr = md5.update(password).digest('hex');
    const data = await this.User.findOne({
      where:{
      email: email,
      password: cryptostr
      }
    })
    // console.log(data)
    return data;
  }

  async gitRegister(user) {
    const t = await this.ctx.model.transaction();
    try {
      const data = await this.User.create({
        name: user.name,
        avatar: user.photo,
        signature: user.profile._json.bio
      });
      // console.log(data);
      const author = await this.Auhtor.create({
        uid: data.get('id'),
        provider: user.provider,
        token: user.id,
      })
      await t.commit();
      return data;
    } catch (err) {
      await t.rollback();
      console.log(err);
      return err;
    }
  }
  async weiboRegister(user) {
    const t = await this.ctx.model.transaction();
    try {
      const data = await this.User.create({
        name: user.name,
        avatar: user.photo,
        signature: user.profile._json.bio
      });
      // console.log(data);
      const author = await this.Auhtor.create({
        uid: data.get('id'),
        provider: user.provider,
        token: user.id,
      })
      await t.commit();
      return data;
    } catch (err) {
      await t.rollback();
      console.log(err);
      return err;
    }
  }

}

module.exports = UserService;