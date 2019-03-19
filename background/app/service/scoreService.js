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
    this.Score = this.ctx.model.Score;
    this.userUpload = this.ctx.userUpload;
  }
  async searchWord(keyword){
    
  }
  async uploadScore(scoreData , uid){
    const t = await this.ctx.model.transaction();
    try {
      const data = await this.Score.create( {
        name: scoreData.name,
        alias: scoreData.alias,
        addtion: scoreData.addtion,
        image_url: scoreData.image_url,
        tonality: scoreData.tonality,
        score_text: scoreData.score_text,
        description: scoreData.description,
        source_url: scoreData.source_url,
        provider: scoreData.provider,
        provider_url: scoreData.provider_url,
        performs: scoreData.performs,
        songs: scoreData.songs,
        other_url: scoreData.other_url,
        other_img: scoreData.other_img,
      });
      await this.userUpload.create({
        uid,
        sid: data.get('id'),
      })
      await t.commit();
      return data;
    } catch (err) {
      await t.rollback();
      return err;
    }
  }
 
}

module.exports = ScoreService;