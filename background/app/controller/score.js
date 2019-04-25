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
    } = this.ctx.params;
    const response = await this.scoreService.getScore(sid);
    return response
  }

  async upload() {
    const {
      scoreData
    } = this.ctx.request.body;
   if( !this.ctx.session.user) {
      this.ctx.helper.createRes(203, '用户登录失效或权限不足')
    } else {
      if (!scoreData.image_url) {
        scoreData.image_url = 'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/score.jpg'
      }
      const response = await this.scoreService.uploadScore(scoreData,this.ctx.session.user.id)
      // console.log('res',response)
      if(response){
        this.ctx.helper.successRes('sucess', response);
      } else{
        this.ctx.helper.createRes(204, '数据库操作错误')
      }
    }
  }

  async addCollectionVolume() {
    const {
      vid
    } = this.ctx.request.body;
    if(this.ctx.session.user){
      this.ctx.helper.createRes(203, '用户登录失效或权限不足')
    } else{
      const response = await this.scoreService.addCollectionVolume(vid,this.ctx.session.user.id)
      if (!response){
        this.ctx.helper.createRes(203, '数据库交互错误')
      }else{
        return response
      }
    }
  }

  async deleteCollectionVolume() {
    const {
      vid
    } = this.ctx.request.params;
    if(this.ctx.session.user){
      this.ctx.helper.createRes(203, '用户登录失效或权限不足')
    } else{
      const response = await this.scoreService.deleteCollectionVolume(vid,this.ctx.session.user.id)
      return response
    }
  }



  async getAllScore(){
    const response = await this.scoreService.getAllScore(offset, pagesize);
    return response
  }
  
}

module.exports = ScoreController;