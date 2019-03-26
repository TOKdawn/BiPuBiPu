'use strict';

const Service = require('egg').Service;
class systemService extends Service {
  constructor(ctx) {
    super(ctx);
    this.CollectionVolume = this.ctx.model.CollectionVolume;
    this.User = this.ctx.model.User;
    this.Volume = this.ctx.model.Volume;
    this.Auhtor = this.ctx.model.Authorization;
    this.Score = this.ctx.model.Score;
    this.userUpload = this.ctx.model.userUpload;
    this.collectionVolume = this.ctx.model.collectionVolume;
    this.userStar = this.ctx.model.userStar;
    this.userFocus = this.ctx.model.userFocus;
  }
  async searchUser(keyword,offset,pagesize){
    const data =  await this.User.findAll({
      where: {
        $or:[{
          name: {
            $like: `%${keyword}%`
          }
        },{
          id: {
            $like: `%${keyword}%`
          }
        }]
      },
      limit: pagesize,
      offset,
    })
    return data
  }

  async searchScore(keyword,offset,pagesize){
    const data =  await this.Score.findAll({
      where: {
        $or:[{
          name: {
            $like: `%${keyword}%`
          }
        },{
          alias: {
            $like: `%${keyword}%`
          }
        },{
          addtion: {
            $like: `%${keyword}%`
          }
        }]
      },
      limit: pagesize,
      offset,
    })
    return data
  }

  async searchVolume(keyword,offset,pagesize){
    const data =  await this.Volume.findAll({
      where: {
        $or:[{
          title: {
            $like: `%${keyword}%`
          }
        }]
      },
      limit: pagesize,
      offset,
    })
    return data
  }

}

module.exports = systemService;