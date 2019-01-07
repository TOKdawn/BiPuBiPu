'use strict';
const Controller = require('egg').Controller;
// const DEFAULTOFFSET = 0;
// const DEFAULTVOLUMEPAGESIZE = 10;
// const DEFAULTSCOREPAGESIZE = 20;

class TagController extends Controller {
    // UserController 由框架负责实例化以及构造时传参
  constructor(ctx) { // UserController 构造函数;
      super(ctx);
      this.TagService = ctx.service.tagService;
      // this.ctx.session.uid = 123; // 测试用
  }

  async upLoadTag(){
    const {
      type,
      tag
    } = this.ctx.request.body;
    const response = await this.TagService.upLoadTag(tag);
    if(response){
      this.ctx.helper.successRes('sucess',response);
    }else{
      this.ctx.helper.createRes(400,'创建失败');
    }
  }

  async allTag(){
    const response = await this.TagService.allTag();
    this.ctx.helper.successRes('sucess',response);
  }

  async addTag(){
    const response = await this.TagService.addTag();
    console.log('addTag'+response);
  }

  async searchTag(){
    const {
      keyword
    } = this.ctx.request.body;
    const response = await this.TagService.searchTag(keyword);

  }
  
}

module.exports = TagController;