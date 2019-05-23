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
  async searchAll(keyword,offset,pagesize){
    const t = await this.ctx.model.transaction();
    try {
      const user =  await this.User.findAll({
        where: {
          $or:[{
            name: {
              $like: `%${keyword}%`
            }
          }]
        },
        limit: pagesize,
        offset,
      })
  
      const score =  await this.Score.findAll({
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
      const volume =  await this.Volume.findAll({
        where: {
          $or:[{
            name: {
              $like: `%${keyword}%`
            }
          }],
          $and:{
            status: 1
          }
        },
        limit: pagesize,
        offset,
      })
      let data = {
        user: user,
        volume: volume,
        score: score
      }
      await t.commit();
      return data;
    } catch (err) {
      await t.rollback();
      return err;
    }
  }
  async searchUser(keyword,offset,pagesize){
    const data =  await this.User.findAll({
      where: {
        $or:[{
          name: {
            $like: `%${keyword}%`
          }
        }],
 
      },
      limit: pagesize,
      offset,
    })
    console.log('user:',data)
    return data
  }

  async searchScore(keyword,offset,pagesize){
    const data =  await this.Score.findAll({
      where: {
        name: keyword,
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
  async userRole(five,ten){
    const data = await this.User.update({
      role : five-0,
    }, {
      where: {
        id: ten,
      },
    });
    return data
  }
  async searchVolume(keyword,offset,pagesize){
    const data =  await this.Volume.findAll({
      where: {
   
        $or:[{
          name: {
            $like: `%${keyword}%`
          }
        }],
        $and:{
          status: 1
        }
      },
      limit: pagesize,
      offset,
    })
    return data
  }

}

module.exports = systemService;