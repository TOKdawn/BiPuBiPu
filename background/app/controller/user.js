'use strict';
const Controller = require('egg').Controller;
const DEFAULTOFFSET = 0;
const DEFAULTVOLUMEPAGESIZE = 10;


class UserController extends Controller {
  // UserController 由框架负责实例化以及构造时传参
  constructor(ctx) { // UserController 构造函数;
    super(ctx);
    this.userService = ctx.service.userService;
    // this.ctx.session.uid = 123; // 测试用
  }

  async getMyInfo() {
    const uid = this.ctx.session.user.id;
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
  async updateInfo() {
    const uid = this.ctx.session.user.id;
    uid || this.ctx.helper.createRes(203, 'User not login QAQ');
    const {
      name,
      signature,
      avatar
    } = this.ctx.request.body;
    const response = await this.userService.updateInfo(uid,name,signature,avatar);
    this.ctx.helper.successRes('sucess',response);
  }

  async thirdParty() {
    const uid = this.ctx.session.user.id;
    uid || this.ctx.helper.createRes(203, 'User not login QAQ');
    const {
      data
    } = this.ctx.request.body;
    const {
      type
    } = this.ctx.params;
    switch(type){
      case 'bili': 
      const response = await this.userService.updateBili(uid,data);
      this.ctx.helper.successRes('sucess',response);
      break;
      case 'weibo': 
      const response = await this.userService.updateWeibo(uid,data);
      this.ctx.helper.successRes('sucess',response);
      break;
      case 'fivesong': 
      const response = await this.userService.updateFivesong(uid,data);
      this.ctx.helper.successRes('sucess',response);
      break;
      case 'tieba': 
      const response = await this.userService.updatetieba(uid,data);
      this.ctx.helper.successRes('sucess',response);
      break;
    }
  }

  async getUpdateNum(){
    const {
      uid
    } = this.ctx.params;
    if (uid === 'own'){
      const id = this.ctx.session.user.id;
      id || this.ctx.helper.createRes(203, 'User not login QAQ');
    } else{
      const id = uid
    }
    const response = await this.userService.getUpdateNum(uid);
    this.ctx.helper.successRes('sucess',response);
  }

  async getCreateNum(){
    const {
      uid
    } = this.ctx.params;
    if (uid === 'own'){
      const id = this.ctx.session.user.id;
      id || this.ctx.helper.createRes(203, 'User not login QAQ');
    } else{
      const id = uid
    }
    const response = await this.userService.getCreateNum(uid);
    this.ctx.helper.successRes('sucess',response);
  }


  async getFocusNum(){
    const {
      uid
    } = this.ctx.params;
    if (uid === 'own'){
      const id = this.ctx.session.user.id;
      id || this.ctx.helper.createRes(203, 'User not login QAQ');
    } else{
      const id = uid
    }
    const response = await this.userService.getFocusNum(uid);
    this.ctx.helper.successRes('sucess',response);
  }




  async getUserCollection() {
    const {
      uid
    } = this.ctx.params;
    const {
      offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE, owned = false
    } = this.ctx.query;
    if (this.ctx.session.user.id) {
      this.ctx.helper.createRes(403, 'permission denied ಠ益ಠ');
    }
    const response = await this.userService.getUserCollection(uid, offset, pagesize, owned);
    this.ctx.helper.successRes('sucess',response);
  }

  async getMyCollection() {
    // 获取session里的uid
    const uid = this.ctx.session.user.id;
    if (uid) {
      const {
        offset, pagesize, owned 
      } = this.ctx.query;
      const response = await this.userService.getUserCollection(uid, offset, pagesize, owned);
      this.ctx.helper.successRes('sucess',response);
    } else{
      this.ctx.helper.createRes(404, 'User not find 凸(⊙▂⊙✖ )');
    }

  }


  async getMyLike() {
    const uid = this.ctx.session.user.id;
    if (uid) {
      const {
        offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE
      } = this.ctx.query;
      const response = await this.userService.getMyLike(uid, offset, pagesize);
      this.ctx.helper.successRes('sucess',response);
    } else{
      this.ctx.helper.createRes(404, 'User not find 凸(⊙▂⊙✖ )');
    }
  }
  async getMyStar() {
    const uid = this.ctx.session.user.id;
    if (uid) {
      
      const {
        offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE
      } = this.ctx.query;
      const response = await this.userService.getMyStar(uid, offset, pagesize);
      this.ctx.helper.successRes('sucess',response);
    }else{
      this.ctx.helper.createRes(404, 'User not find 凸(⊙▂⊙✖ )');
    }
  }
  async getMyUpload() {
    const uid = this.ctx.session.user.id;
    if (uid) {

      const {
        offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE
      } = this.ctx.query;
      const response = await this.userService.getMyUpload(uid, offset, pagesize);
      this.ctx.helper.successRes('sucess',response);
    } else{
      this.ctx.helper.createRes(404, 'User not find 凸(⊙▂⊙✖ )');
    }
  }
  async getMyCreate() {
    const uid = this.ctx.session.user.id;
    if (uid) {
 
      const {
        offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE
      } = this.ctx.query;
      const response = await this.userService.getMyCreate(uid, offset, pagesize);
      this.ctx.helper.successRes('sucess',response);
    }else{
      this.ctx.helper.createRes(404, 'User not find 凸(⊙▂⊙✖ )');
    }
  }
  
  

  
  async changephone() {
    const {
      phone,
      password
    } = this.ctx.request.body;
    const uid = this.ctx.session.user.id;
    uid || this.ctx.helper.createRes(203, 'User not login QAQ');
    if(await this.userService.checkPhone(phone)){
      this.ctx.helper.createRes(400, '此电话已被使用 凸(⊙▂⊙✖ )');
    }else {
      const response = await this.userService.changephone(phone, password, uid);
      // console.log( this.response)
      if(response == null){
        this.ctx.helper.createRes(202, '用户名或密码错误(ﾟДﾟ;)')
      }else{
        this.ctx.session.user = response
        this.ctx.helper.successRes('更改手机登录',response)
      }
    }

  }

  async changepassword() {
    const {
      newpassword,
      password,
    } = this.ctx.request.body;

    const uid = this.ctx.session.user.id;
    uid || this.ctx.helper.createRes(203, 'User not login QAQ');
    
      const response = await this.userService.changepassword(newpassword, password, uid);
      // console.log( this.response)
      if(response == null){
        this.ctx.helper.createRes(202, '密码错误(ﾟДﾟ;)')
      }else{
        this.ctx.session.user = response
        this.ctx.helper.successRes('更改密码登录',response)
      }
    
  }

  async remakespassword() {
    const {
      // username,
      phone,
      password,
      // captcha,
      sms
    } = this.ctx.request.body;

 if(await this.ctx.helper.checkSMS(sms)){
      this.ctx.helper.createRes(400, '短信验证码错误');
    }else  if( !await this.userService.checkPhone(phone)){
      this.ctx.helper.createRes(400, '此电话未注册 凸(⊙▂⊙✖ )');
    }else{
      const response = await this.userService.remakespassword( phone, password);
      this.ctx.helper.successRes('sucess',response); 
    }
    
  }



  async login() {
    const {
      phone,
      password,
      captcha
    } = this.ctx.request.body;
    if( await this.ctx.helper.checkCaptcha(captcha)){
      // console.log('res',this.ctx.helper.checkCaptcha(captcha))
      this.ctx.helper.createRes(202, '验证码错误 凸(⊙▂⊙✖ )');
    }else if(!(await this.userService.checkPhone(phone))){
      this.ctx.helper.createRes(202, '此电话号未注册 凸(⊙▂⊙✖ )');
    }else{
      const response = await this.userService.Login(phone, password);
      // console.log( this.response)
      if(response == null){
        this.ctx.helper.createRes(202, '用户名或密码错误(ﾟДﾟ;)')
      }else{
        this.ctx.session.user = response
        this.ctx.helper.successRes('成功登录',response)
      }
     
    }
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
      // console.log('注册成功',this.ctx.session, '返回信息',response.dataValues)
      this.ctx.session.user = response.dataValues;
      this.ctx.helper.successRes('sucess',response); 
    }
  }

  async logout() {
    this.ctx.session.user = {}
    this.ctx.helper.successRes('sucess',this.ctx.session);
  }

  async addCollectionVolume() {
    const {
      vid
    } = this.ctx.request.body;
    const uid = this.ctx.session.user.id;
    if(uid){

      const response = await this.userService.addCollectionVolume(uid, vid);
      if (!response[response.length - 1]) { // check is new record
        this.ctx.helper.createRes(412, ' volume has been collected Orz');
      } else {
        this.ctx.helper.createRes(200, 'collection success QwQ');
      }
    } else{
      this.ctx.helper.createRes(404, 'User not find 凸(⊙▂⊙✖ )');
    }
  }

  async deleteCollectionVolume() {
    const {
      vid
    } = this.ctx.params;
    const uid = this.ctx.session.user.id;
    if(uid){

      const response = await this.userService.deleteCollectionVolume(uid, vid);
      if (response) {
        this.ctx.helper.createRes(200, 'Delete success QwQ');
  
      } else {
        this.ctx.helper.createRes(409, 'Delete err Orz  ');
  
      }
      this.ctx.helper.successRes('sucess',response);
    } else{
      this.ctx.helper.createRes(404, 'User not find 凸(⊙▂⊙✖ )');
    }
  }
  
  async addStarUser() {
    const {
      uid
    } = this.ctx.request.body;
    if(this.ctx.session.user){
      this.ctx.helper.createRes(203, '用户登录失效或权限不足')
    } else{
      const response = await this.userService.addStarUser(uid,this.ctx.session.user.id)
      this.ctx.body = response
    }
  }

  async deleteStarUser() {
    const {
      uid
    } = this.ctx.request.params;
    if(this.ctx.session.user){
      this.ctx.helper.createRes(203, '用户登录失效或权限不足')
    } else{
      const response = await this.userService.deleteStarUser(uid,this.ctx.session.user.id)
      this.ctx.body = response
    }
  }

  async addLikeScore() {
    const {
      sid
    } = this.ctx.request.body;
    if(this.ctx.session.user){
      this.ctx.helper.createRes(203, '用户登录失效或权限不足')
    } else{
      const response = await this.userService.addLikeScore(sid,this.ctx.session.user.id)
      this.ctx.body = response
    }
  }

  async deleteLikeScore() {
    const {
      sid
    } = this.ctx.request.params;
    if(this.ctx.session.user){
      this.ctx.helper.createRes(203, '用户登录失效或权限不足')
    } else{
      const response = await this.userService.deleteLikeScore(sid,this.ctx.session.user.id)
      this.ctx.body = response
    }
  }
}

module.exports = UserController;