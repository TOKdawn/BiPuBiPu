'use strict';
// app/service/user.js
const Service = require('egg').Service;
class TagService extends Service {
  constructor(ctx) {
    super(ctx);
    this.CollectionVolume = this.ctx.model.CollectionVolume;
    this.User = this.ctx.model.User;
    this.Volume = this.ctx.model.Volume;
    this.Auhtor = this.ctx.model.Authorization;
    this.Tag = this.ctx.model.Tag;
  }
  async upLoadTag(tag){
    const data = await this.Tag.findOrCreate({
      where:{
        content: tag
      }
    })
    if(data){
      return true;
    }else{
      return false;
    }
  }

  async allTag(){
    const data = await this.Tag.findAll();
    return data;
  }

  async addTag(tid,sid){
    const data = await this.Tag.findOrCreate({
      where:{
        tid:tid-0,
        sid:sid-0
      }
    })
    return data;
  }
 
}

module.exports = TagService;