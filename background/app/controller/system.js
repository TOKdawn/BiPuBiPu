'use strict';
const Controller = require('egg').Controller;
// const DEFAULTOFFSET = 0;
// const DEFAULTVOLUMEPAGESIZE = 10;
// const DEFAULTSCOREPAGESIZE = 20;

class SystemController extends Controller {
    // UserController 由框架负责实例化以及构造时传参
  constructor(ctx) { // UserController 构造函数;
    super(ctx);
    this.scoreService = ctx.service.scoreService;
      // this.ctx.session.uid = 123; // 测试用
  }

  async getCatcha(){
    this.ctx.helper.applyCatcha();
  }

  async searchUser(){
    const{
      keyword
    } = this.ctx.params;
    const {
      offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE,
    } = this.ctx.query;
    const response = await this.scoreService.searchUser(keyword,offset,pagesize);
    return response
  }

  async searchScore(){
    const{
      keyword
    } = this.ctx.params;
    const {
      offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE,
    } = this.ctx.query;
    const response = await this.scoreService.searchScore(keyword,offset,pagesize);
    return response
  }

  async searchVolume(){
    const{
      keyword
    } = this.ctx.params;
    const {
      offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE, 
    } = this.ctx.query;
    const response = await this.scoreService.searchVolume(keyword,offset,pagesize);
    return response
  }


  async getSMS(){
    const{
      phone
    } = this.ctx.request.body;
    this.ctx.helper.applySMS(phone);
    this.ctx.helper.successRes('success',{})
  }

  async checkUserInfo(){
    // console.log(this.ctx.session)
    if(this.ctx.session.user){
      this.ctx.helper.successRes('success',this.ctx.session.user)
    } else{
      this.ctx.helper.createRes(403, '用户未登录 QAQ');
    }
  }
}

module.exports = SystemController;