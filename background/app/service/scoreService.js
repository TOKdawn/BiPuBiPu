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
    this.userUpload = this.ctx.model.UserUpload;
    this.ScoreVolume = this.ctx.model.ScoreVolume
    this.userStar = this.ctx.model.UserStar;
    
  }
  // async searchWord(sid) {
  //   const score = await this.Score.findOne({
  //     where: {
  //       id: sid
  //     }
  //   })
  //   return score;
  // }
  async uploadScore(scoreData, uid) {
    const t = await this.ctx.model.transaction();
    try {
      const data = await this.Score.create({
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
      await this.ScoreVolume.create({
        vid: 1,
        sid: data.get('id'),
      })
      await t.commit();
      return data;
    } catch (err) {
      console.error(err)
      await t.rollback();
      return false;
    }
  }
  
  async getScoreAuthor(sid){
    const data = await this.User.findAll({
      where: {
        id: {
          $in: this.app.Sequelize.literal(
            `(SELECT uid FROM "userUpload" WHERE sid = ${sid})`
          ),
        },
      }
    })
    return data;
  }
  async getScoreCollector(sid, offset, pagesize) {
    const data = await this.User.findAll({
      where: {
        id: {
          $in: this.app.Sequelize.literal(
            `(SELECT uid FROM "userStar" WHERE sid = ${sid})`
          ),
        },
      },
      limit: pagesize,
      offset,
    });
    return data;
  }
  async addCollectionVolume(vid, uid) {
    //  const t = await this.ctx.model.transaction();
    const volume = await this.Volume.findOne({
      where: {
        id: vid
      }
    });
    if (volume == null) {
      return false
    } else {
      const data = await this.CollectionVolume.findOrCreate({
        where: {
          vid,
          uid
        }
      })
      await this.Volume.increment(['visits'], {
        by: 1,
        where: {
          id: vid
        }
      })
      return data;
    }

  }

  async addCollectionScore(sid, uid) {
    //  const t = await this.ctx.model.transaction();
    const Score = await this.Score.findOne({
      where: {
        id: sid
      }
    });
    if (Score == null) {
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

  async getScoreInfo(sid) {
    const score = await this.Score.findOne({
      where: {
        id: sid,
      },
    });
    return score;
  }
  async deleteCollectionVolume(vid,uid) {
    const volume = await this.Volume.findOne({
      where: {
        id:vid
      }
    });
    if (volume == null) {
      return false
    } else {
      const data = await this.CollectionVolume.destroy({
        where: {
          vid,
          uid
        }
      })
      await this.Volume.decrement(['visits'], {
        by: 1,
        where: {
          id: vid
        }
      })
      return data;
    }
  }
  async deleteCollectionScore(sid,uid) {
    const Score = await this.Score.findOne({
      where: {
        id:sid
      }
    });
    if (volume == null) {
      return false
    } else {
      const data = await this.CollectionScore.destroy({
        where: {
          sid,
          uid
        }
      })
 
      return data;
    }
  }
  async deleteScore(sid, uid) {
    const t = await this.ctx.model.transaction();
    console.log('ssssss',sid)
    try {
      const dele = await this.userUpload.destroy({
        where: {
          uid,
          sid,
        },
      });
      await this.userStar.destroy({
        where: {
          sid,
        },
      });
      await this.Score.destroy( {
        where: {
          id: sid,
        },
      });
      await t.commit();
      return dele;
    } catch (err) {
      await t.rollback();
      return err;
    }
  }


  async getScore(sid){
    const data = await this.Score.findOne({
      where: {
        id:sid
      }
    })
    return data
  }
  async getAllScore(offset, pagesize){
    const data = await this.Volume.findAll({
      // attributes: ['vid', 'uid'],
      limit: pagesize,
      offset,
    });
    return data;
  }
}

module.exports = ScoreService;