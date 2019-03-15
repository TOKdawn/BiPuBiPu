'use strict';
const Controller = require('egg').Controller;
// const DEFAULTOFFSET = 0;
// const DEFAULTVOLUMEPAGESIZE = 10;
// const DEFAULTSCOREPAGESIZE = 20;

class ScoreController extends Controller {
  // UserController 由框架负责实例化以及构造时传参
  constructor(ctx) { // UserController 构造函数;
    super(ctx);
    this.scoreService = ctx.service.scoreService;
    // this.ctx.session.uid = 123; // 测试用
  }
  async getScore() {
    const {
      sid
    } = this.ctx.request.body;
    const response = await this.scoreService.getScore(sid);
    return response
  }
  async upload() {
    const {
      scoreData
    } = this.ctx.request.body;
    if (this.ctx.session.user.role < 15) {
      this.ctx.helper.createRes(203, '用户登录失效或权限不足')
    } else {
      if (scoreData.image_url) {
        scoreData.image_url = 'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/score.jpg'
      }
      const response = await this.scoreService.uploadScore(scoreData,this.ctx.session.user.id)
      
    }

  }

}

module.exports = ScoreController;