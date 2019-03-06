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
  async searchWord(){
    const{
      keyword
    } = this.ctx.params;
    const response = await this.scoreService.searchWord(keyword);
    return response
  }
  async getSMS(){
    const{
      phone
    } = this.ctx.request.body;
    this.ctx.helper.applySMS(phone);
  }
  async checkUserInfo(){
    console.log(this.ctx.session)
    if(this.ctx.session.user){
      this.ctx.helper.successRes('success',this.ctx.session.user)
    } else{
      this.ctx.helper.createRes(403, '用户未登录 QAQ');
    }
  }
}

module.exports = SystemController;