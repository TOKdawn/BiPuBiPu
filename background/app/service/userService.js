'use strict';
// app/service/user.js
const Service = require('egg').Service;
class UserService extends Service {
  constructor(ctx) {
    super(ctx);
    this.CollectionVolume = this.ctx.model.CollectionVolume;
    this.User = this.ctx.model.User;
    this.Volume = this.ctx.model.Volume;
    this.Score = this.ctx.model.Score;
    this.Auhtor = this.ctx.model.Authorization;
    this.userFocus = this.ctx.model.UserFocus;
    this.userUpload = this.ctx.model.UserUpload;
    this.ownVolume = this.ctx.model.OwnVolume;
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

  async checkPhone(phone) {
    var crypto = require('crypto');
    var hasPhone = crypto.createHash('md5').update(phone+'dawn').digest('hex');
    const data = await this.User.findOne({
      where:{
        email:hasPhone
      }
    });
    // console.log( '检查电话结果',data)
    if(data){
      return true 
    } else {
      return false
    }
  }

  async getUserCollection(uid, offset, pagesize, owned) {
    // this.Volume.belongsTo(this.CollectionVolume, { foreignKey: 'vid', sourceKey: 'id' });
    // const tablename = !owned ? 'collectionVolume' : 'ownVolume';
    const tablename = 'collectionVolume'
    const data = await this.Volume.findAll({
      // attributes: ['vid', 'uid'],
      where: {
        id: {
          $in: this.app.Sequelize.literal(
            `(SELECT vid FROM "${tablename}" WHERE uid = ${uid})`
          ),
        },
          status: 1
        
      },
      limit: pagesize,
      offset,
    });
    // console.log('dddd',data)
    return data;
  }

  async getMyLike(uid, offset, pagesize){
    const data = await this.User.findAll({
      where: {
        id: {
          $in: this.app.Sequelize.literal(
            `(SELECT otherid FROM "userFocus" WHERE uid = ${uid})`
          ),
        },
      },
      limit: pagesize,
      offset,
    })
    return data;
  }

  async getMyUpload(uid, offset, pagesize){
    const data = await this.Score.findAll({
      where: {
        id: {
          $in: this.app.Sequelize.literal(
            `(SELECT sid FROM "userUpload" WHERE uid = ${uid})`
          ),
        },
      },
      limit: pagesize,
      offset,
    })
    return data;
  }

  async getMyCreate(uid, offset, pagesize){
    const data = await this.Volume.findAll({
      where: {
        id: {
          $in: this.app.Sequelize.literal(
            `(SELECT vid FROM "ownVolume" WHERE uid = ${uid})`
          ),
        },
        status: 1
      },
      limit: pagesize,
      offset,
    })
    return data;
  }

  async getMyStar(uid, offset, pagesize){
    const data = await this.Score.findAll({
      where: {
        id: {
          $in: this.app.Sequelize.literal(
            `(SELECT sid FROM "userStar" WHERE uid = ${uid})`
          ),
        },
      },
      limit: pagesize,
      offset,
    })
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

  async addLikeScore(uid,sid) {
    const score = await this.Score.findOne({
      where: {
        id: sid
      }
    });
    if (score == null) {
      return false
    } else {
      const data = await this.userStar.findOrCreate({
        where: {
          sid,
          uid
        }
      })
      return data;
    }
  }

  async deleteLikeScore(sid,uid) {
    const score = await this.Score.findOne({
      where: {
        sid
      }
    });
    if (score == null) {
      return false
    } else {
      const data = await this.userStar.destroy({
        where: {
          sid,
          uid
        }
      })
      return data;
    }
  }

  async addStarUser(otherId,uid) {
    const User = await this.User.findOne({
      where: {
        id: otherId
      }
    });
    if (User == null) {
      return false
    } else {
      const data = await this.userFocus.findOrCreate({
        where: {
          otherid: otherId,
          uid
        }
      })
      return data;
    }
  }

  async deleteStarUser(otherId,uid) {
    const User = await this.User.findOne({
      where: {
        id: otherId
      }
    });
    if (User == null) {
      return false
    } else {
      const data = await this.userFocus.destroy({
        where: {
          otherid: otherId,
          uid
        }
      })
      return data;
    }
  }

  async Register(username, phone, password) {
    var crypto = require('crypto');

    var cryptostr = crypto.createHash('md5').update(password+'dawn').digest('hex');
    var hasPhone = crypto.createHash('md5').update(phone+'dawn').digest('hex');
    const data = await this.User.create({
      name: username,
      avatar: 'http://bipu.oss-cn-beijing.aliyuncs.com/egg-multipart-test/akari.jpg',
      signature: '这个人很懒,啥也没写╮(╯_╰)╭',
      password: cryptostr,
      role: 10,
      email: hasPhone
    });
    return data;
  }

  async remakespassword( phone, password) {
    var crypto = require('crypto');
    var cryptostr = crypto.createHash('md5').update(password+'dawn').digest('hex');
    var hasPhone = crypto.createHash('md5').update(phone+'dawn').digest('hex');
    const data = await this.User.update({
      password: cryptostr
    },{
      where:{
        email: hasPhone
      }
    });
    return data;
  }
  
  async changepassword(newpassword, password, uid){
    var crypto = require('crypto');
    var cryptostr = crypto.createHash('md5').update(password+'dawn').digest('hex');
    var newpassword = crypto.createHash('md5').update(newpassword+'dawn').digest('hex');
    const data = await this.User.update({
      password: newpassword
    },{
      where:{
        id: uid,
        password: cryptostr
      }
    });
    return data;
  }

  
  async Login(email,password){
    var crypto = require('crypto');
    // var md5 = crypto.createHash('md5');
    var hasPhone = crypto.createHash('md5').update(email+'dawn').digest('hex');
    var cryptostr = crypto.createHash('md5').update(password+'dawn').digest('hex');
    const data = await this.User.findOne({
      where:{
      email: hasPhone,
      password: cryptostr
      }
    })
    // console.log(data)
    return data;
  }

  async changephone(email,password,uid){
    var crypto = require('crypto');
    // var md5 = crypto.createHash('md5');
    var hasPhone = crypto.createHash('md5').update(email+'dawn').digest('hex');
    var cryptostr = crypto.createHash('md5').update(password+'dawn').digest('hex');
    const data = await this.User.update({
      email:hasPhone
    },{
      where:{
      id: uid,
      password: cryptostr
      }
    })
    // console.log(data)
    return data;
  }



  async updateInfo(uid,name,signature,avatar) {
    const data = await this.User.update({
      name,
      signature,
      avatar
    },{
      where:{
        id:uid
      }
    })
    return data;
  }

  async updateBili(uid,data){
    const data = await this.User.update({
      bilibili:data
    },{
      where:{
        id:uid
      }
    })
    return data;
  }

  async updateWeibo(uid,data){
    const data = await this.User.update({
      weibo:data
    },{
      where:{
        id:uid
      }
    })
    return data;
  }
  async updateFivesong(uid,data){
    const data = await this.User.update({
      fivesong:data
    },{
      where:{
        id:uid
      }
    })
    return data;
  } 
   async updatetieba(uid,data){
    const data = await this.User.update({
      tieba:data
    },{
      where:{
        id:uid
      }
    })
    return data;
  }
  async getUpdateNum(uid){
    const data = await this.userUpload.count({
      where:{
        uid:uid
      }
    })
    return data;
  }
  async getCreateNum(uid){
    const data = await this.ownVolume.count({
      where:{
        uid:uid
      }
    })
    return data;
  }
  async getFocusNum(uid){
    const data = await this.userFocus.count({
      where:{
        uid:uid
      }
    })
    return data;
  }

}

module.exports = UserService;