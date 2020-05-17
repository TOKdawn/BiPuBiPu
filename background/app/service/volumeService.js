'use strict';
// app/service/user.js
const Service = require('egg').Service;
// const Github = require('../extend/application');
class VolumeService extends Service {
  constructor(ctx) {
    super(ctx);
    this.CollectionVolume = this.ctx.model.CollectionVolume;
    this.User = this.ctx.model.User;
    this.Volume = this.ctx.model.Volume;
    this.Comment = this.ctx.model.Comment;
    this.OwnVolume = this.ctx.model.OwnVolume;
    this.ScoreVolume = this.ctx.model.ScoreVolume;
    this.SubComment = this.ctx.model.SubComment;
    this.Score = this.ctx.model.Score;
  }

  async createVolume(title, describe,img, uid) {
    // console.log(this.app.model.sequelize)
    const t = await this.ctx.model.transaction();
    try {
      const data = await this.Volume.create({
        name:title,
        describe,
        photo:img,
        visits:1
      });
      // console.log(data.get('id'));
      await this.OwnVolume.create({
        uid,
        vid: data.get('id'),
      });
      await this.CollectionVolume.create({
        uid,
        vid: data.get('id'),
      });
      await t.commit();
      return data;
    } catch (err) {
      await t.rollback();
      return err;
    }
  }
  async getVolumeType(vid, uid){

    const author = await this.OwnVolume.findOne({
      where:{
        uid,
        vid,
      }
    })
    const collector = await this.CollectionVolume.findOne({
      where:{
        uid,
        vid,
      }
    })
    // console.log(author, collector)
    if(author){
      return 'author'
    }else if(collector){
      return 'collector'
    }else {
      return 'visitor'
    }
  }
  async editVolume(id, name, describe, photo) {
    const data = await this.Volume.update({
      name,
      describe,
      photo,
    }, {
      where: {
        id,
      },
    });
    return data;
  }

  async deleteVolume(vid, uid) {
    const t = await this.ctx.model.transaction();
    try {
      const dele = await this.OwnVolume.destroy({
        where: {
          uid,
          vid,
        },
      });
      await this.CollectionVolume.destroy({
        where: {
          vid,
        },
      });
      await this.Volume.destroy({
        where: {
          id: vid,
        },
      });
      await t.commit();
      return dele;
    } catch (err) {
      await t.rollback();
      return err;
    }
  }

  async getVolumeInfo(vid) {
    const volume = await this.Volume.findOne({
      where: {
        id: vid,
      },
    });
    return volume;
  }

  async getVolumeAuthor(vid){
    const data = await this.User.findAll({
      where: {
        id: {
          $in: this.app.Sequelize.literal(
            `(SELECT uid FROM "ownVolume" WHERE vid = ${vid})`
          ),
        },
      }
   
    })
    return data;
  }
  async getVolumeCollector(vid, offset, pagesize) {

    const data = await this.User.findAll({
 
      where: {
        id: {
          $in: this.app.Sequelize.literal(
            `(SELECT uid FROM "collectionVolume" WHERE vid = ${vid})`
          ),
        },
      },
      limit: pagesize,
      offset,
    });
    return data;
  }
  
  
  async addVolumeScore(vid, sid) {
    const t = await this.ctx.model.transaction();
    const data = await this.ScoreVolume.findOrCreate({
      where: {
        sid,
        vid,
      },
    });
    return data;
  }

  async deleteVolumeScore(vid, sid) {
    const data = await this.ScoreVolume.destroy({
      where: {
        vid,
        sid,
      },
    });
    // console.log(data);
    return data;
  }

  async getVolumeScore(vid, offset, pagesize) {
    const data = await this.ScoreVolume.findAll({
      // attributes: ['vid', 'uid'],
      where: {
        vid,
      },
      limit: pagesize,
      offset,
    });
    // console.log(data)
    let tiem;
    const result = [];
    for (tiem in data) {
      // const temp = await this.ctx.helper.getIssue(data[tiem].get('sid'));
      // result.push(temp); //issues 获取
      const score = await this.Score.findOne({
        where: {
          id: data[tiem].get('sid')
        }
      });
      result.push(score);
    }
    return result;
  }

  async addCommentToComment(id, text, uid, targetid) {
    const data = await this.SubComment.create({
      targetid,
      uid,
      text,
      comment_id: id
    });
    return data;
  }

  async addCommentToVolume(id, text, uid) {

    // console.log(uid, id, text)
    const data = await this.Comment.create({
      volume_id: id,
      uid,
      text,
    });
    return data;
  }

  async getVolumeList(offset, pagesize, role) {
    // console.log(role)
    if (role == 'normal'); //目前只有常规查询;
    const data = await this.Volume.findAll({
      // attributes: ['vid', 'uid'],
      where: {
        status: 1
      },
      order: [
        'visits'
      ],
      limit: pagesize,
      offset,
    });
    return data;
  }

  async getComment(vid) {
    this.Volume.hasMany(this.Comment);
    this.Comment.hasMany(this.SubComment)
    const data = await this.Volume.findOne({
      include: [{
        model: this.Comment,
        all: true,
        require: false,
        include: {
          model: this.SubComment,
          all: true,
          require: false
        }
      }],
      where: {
        id: vid
      }
    })
    return data;
  }

  async delectComment(cid) {
    await this.Comment.update({
      status: 2,
    }, {
      where: {
        id: cid,
      },
    });
  }

  async delectSubcomment(cid) {
    await this.SubComment.update({
      status: 2,
    }, {
      where: {
        id: cid,
      },
    });
  }
  
  async findOwner(vid) {
    const data = await this.OwnVolume.findOne({
      where: {
        vid
      }
    })
    return data;
  }
}

module.exports = VolumeService;