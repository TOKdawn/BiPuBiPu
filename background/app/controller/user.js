'use strict';
const Controller = require('egg').Controller;
const DEFAULTOFFSET = 0;
const DEFAULTVOLUMEPAGESIZE = 10;
// const DEFAULTSCOREPAGESIZE = 20;

class UserController extends Controller {
  // UserController 由框架负责实例化以及构造时传参
  constructor(ctx) { // UserController 构造函数;
    super(ctx);
    this.userService = ctx.service.userService;
    // this.ctx.session.uid = 123; // 测试用
  }

  async getMyInfo() {
    const uid = this.ctx.user.id;
    uid || this.ctx.helper.createRes(403, 'User not login QAQ');
    const response = await this.userService.getInfo(uid);
    if (response) {
      this.ctx.helper.successRes('sucess',response);
    } else {
      this.ctx.helper.createRes(404, 'User is not found QAQ');
    }
  }

  async getInfo() {
    const {
      uid
    } = this.ctx.params; // 等价于 const uid = this.ctx.params.uid;
    const response = await this.userService.getInfo(uid);
    if (response) {
      this.ctx.helper.successRes('sucess',response);
    } else {
      this.ctx.helper.createRes(404, 'User is not found QAQ');
    }
  }

  async getUserCollection() {
    const {
      uid
    } = this.ctx.params;
    const {
      offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE, owned = false
    } = this.ctx.query;
    if (this.ctx.user.id) {
      this.ctx.helper.createRes(403, 'permission denied ಠ益ಠ');
    }
    const response = await this.userService.getUserCollection(uid, offset, pagesize, owned);
    this.ctx.helper.successRes('sucess',response);
  }

  async getMyCollection() {
    // 获取session里的uid
    const uid = this.ctx.user.id;
    if (uid) {
      this.ctx.helper.createRes(404, 'User not find 凸(⊙▂⊙✖ )');
    }
    const {
      offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE, owned = false,
    } = this.ctx.query;
    const response = await this.userService.getUserCollection(uid, offset, pagesize, owned);
    this.ctx.helper.successRes('sucess',response);
  }

  // async checkPhone() {
  //   const {phone}= this.ctx.params;
  //   const response = await this.userService.checkPhone(phone);
  //   if (response) {
  //     this.ctx.helper.createRes(400,'此电话已经被使用')
  //   } else {
  //     this.ctx.helper.successRes('此电话未被使用')     
  //   }
  // }
  
  async changephone() {

  }

  async remakespassword() {
    
  }

  async changepassword() {
    
  }

  async login() {
    const {
      phone,
      password,
      captcha
    } = this.ctx.request.body;
    if(this.ctx.header.checkCaptcha(captcha)){
      this.ctx.helper.createRes(400, '验证码错误 凸(⊙▂⊙✖ )');
    }
    if(!(await this.userService.checkPhone(phone))){
      this.ctx.helper.createRes(400, '此电话号未注册 凸(⊙▂⊙✖ )');
    }
    const response = await this.userService.Login(phone, password);
    if(response == null){
      this.ctx.helper.createRes(400, '用户名或密码错误(ﾟДﾟ;)')
    }
    console.log(this.response)
    this.ctx.helper.successRes('成功登录',response)
  }

  async register() {
    const {
      // username,
      phone,
      password,
      // captcha,
      sms
    } = this.ctx.request.body;
    let username = '用户'+ phone

    if(await this.userService.checkPhone(phone)){
      this.ctx.helper.createRes(400, '此电话已被使用 凸(⊙▂⊙✖ )');
    }else if(await this.ctx.helper.checkSMS(sms)){
      this.ctx.helper.createRes(400, '短信验证码错误');
    }else{
      const response = await this.userService.Register(username, phone, password);
      console.log('注册成功',this.ctx.session, '返回信息',response.dataValues)
      this.ctx.session.user = response.dataValues;
      this.ctx.helper.successRes('sucess',response);
    }
  }

  async logout() {
    this.ctx.logout();
    this.ctx.helper.successRes('sucess',this.ctx.session);
  }

  async addCollectionVolume() {
    const {
      vid
    } = this.ctx.request.body;
    const uid = this.ctx.user.id;
    const response = await this.userService.addCollectionVolume(uid, vid);
    if (!response[response.length - 1]) { // check is new record
      this.ctx.helper.createRes(412, ' volume has been collected Orz');
    } else {
      this.ctx.helper.createRes(200, 'collection success QwQ');
    }
  }

  async deleteCollectionVolume() {
    const {
      vid
    } = this.ctx.params;
    const uid = this.ctx.user.id;
    const response = await this.userService.deleteCollectionVolume(uid, vid);
    if (response) {
      this.ctx.helper.createRes(200, 'Delete success QwQ');

    } else {
      this.ctx.helper.createRes(409, 'Delete err Orz  ');

    }
    this.ctx.helper.successRes('sucess',response);
  }

}

module.exports = UserController;