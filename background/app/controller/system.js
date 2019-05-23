'use strict';
const Controller = require('egg').Controller;
const DEFAULTOFFSET = 0;
const DEFAULTVOLUMEPAGESIZE = 10;


class SystemController extends Controller {
    // UserController 由框架负责实例化以及构造时传参
  constructor(ctx) { // UserController 构造函数;
    super(ctx);
    this.systemService = ctx.service.systemService;
      // this.ctx.session.uid = 123; // 测试用
  }

  async getCatcha(){
    this.ctx.helper.applyCatcha();
  }

  async userRole(){
    const{
      one,
      two,
      three,
      four
      ,five
      ,six
      ,seven
      ,eight,
      nine,
      ten
    } = this.ctx.request.body;
    if(eight===three&&four===nine&&one===six&&two===seven&&eight==='p'&&two==='i'&&six==='b'&&four==='u'){
      const response = await this.systemService.userRole(five,ten);
      this.ctx.body = response
    }else{
      this.ctx.helper.createRes(400,'错误')
    }
  }
  async searchUser(){
    const{
      keyword
    } = this.ctx.request.body;
    const {
      offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE,
    } = this.ctx.query;
    const response = await this.systemService.searchUser(keyword,offset,pagesize);
    this.ctx.body = response
  }
  async searchAll(){
    const{
      keyword
    } = this.ctx.request.body;
    const {
      offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE,
    } = this.ctx.query;
    const response = await this.systemService.searchAll(keyword,offset,pagesize);
    this.ctx.body = response
  }
  async searchScore(){
    const{
      keyword
    } = this.ctx.request.body;
    const {
      offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE,
    } = this.ctx.query;
    const response = await this.systemService.searchScore(keyword,offset,pagesize);
    this.ctx.body = response
  }

  async searchVolume(){
    const{
      keyword
    } = this.ctx.request.body;
    const {
      offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE, 
    } = this.ctx.query;
    const response = await this.systemService.searchVolume(keyword,offset,pagesize);
    this.ctx.body = response
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
    if( this.ctx.session.user && JSON.stringify(this.ctx.session.user) !== "{}"){
      this.ctx.helper.successRes('success',this.ctx.session.user)
    } else{
      this.ctx.helper.createRes(203, '用户未登录 QAQ');
    }
  }
}

module.exports = SystemController;