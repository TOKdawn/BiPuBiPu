'use strict';
// app/service/user.js
const Service = require('egg').Service;
class ScoreService extends Service {
  constructor(ctx) {
    super(ctx);
    this.CollectionVolume = this.ctx.model.CollectionVolume;
    this.User = this.ctx.model.User;
    this.Volume = this.ctx.model.Volume;
    this.Auhtor = this.ctx.model.Authorization;
  }
  async searchWord(keyword){
    
  }
 
}

module.exports = ScoreService;