'use strict';
const Controller = require('egg').Controller;
const DEFAULTOFFSET = 0;
const DEFAULTVOLUMEPAGESIZE = 10;
const DEFAULTSCOREPAGESIZE = 20;

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
    this.ctx.body = response
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
  async getVolumeType(){
    const {
      sid
    } = this.ctx.params;
    const uid = this.ctx.session.user.id
    const response = await this.scoreService.getScoreType(sid, uid);
    if (response === 'author') {
      this.ctx.helper.successRes('success', { type :'author'});
    } else if (response === 'collector') {
      this.ctx.helper.successRes('success', { type :'collector'});
    } else {
      this.ctx.helper.successRes('success',{type: 'visitor'})
    }
  }
  async getScoreAuthor(){
    const {
      sid
    } = this.ctx.params;
    const response = await this.scoreService.getScoreAuthor(sid);
    this.ctx.helper.successRes('sucess', response);
  }
  async getScoreCollector(){
    const {
      sid
    } = this.ctx.params;
    const {
      offset = DEFAULTOFFSET, pagesize = DEFAULTSCOREPAGESIZE
    } = this.ctx.query;
    const response = await this.scoreService.getScoreCollector(sid,offset,pagesize);
    this.ctx.helper.successRes('sucess', response);
  }
  async addCollectionVolume() {
    const {
      vid
    } = this.ctx.params;
    if(!this.ctx.session.user){
      this.ctx.helper.createRes(203, '用户登录失效或权限不足')
    } else{
      const response = await this.scoreService.addCollectionVolume(vid,this.ctx.session.user.id)
      if (!response){
        this.ctx.helper.createRes(203, '数据库交互错误')
      }else{
        this.ctx.body = response
      }
    }
  }
  async addCollectionScore() {
    const {
      sid
    } = this.ctx.params;
    if(!this.ctx.session.user){
      this.ctx.helper.createRes(203, '用户登录失效或权限不足')
    } else{
      const response = await this.scoreService.addCollectionScore(sid,this.ctx.session.user.id)
      if (!response){
        this.ctx.helper.createRes(203, '数据库交互错误')
      }else{
        this.ctx.body = response
      }
    }
  }
  async getScoreInfo() {
    const {
      sid
    } = this.ctx.params;
    const response = await this.scoreService.getScoreInfo(sid);
    this.ctx.helper.successRes('sucess', response);
  }

  async deleteCollectionVolume() {
    const {
      vid
    } = this.ctx.params;
    if(!this.ctx.session.user){
      this.ctx.helper.createRes(203, '用户登录失效或权限不足')
    } else{
      const response = await this.scoreService.deleteCollectionVolume(vid,this.ctx.session.user.id)
      this.ctx.body = response
    }
  }
  async deleteScore() {
    const {
      sid
    } = this.ctx.params;
    const uid = this.ctx.session.user.id;
    const response = await this.scoreService.deleteScore(sid, uid);
    if (response) {
      this.ctx.helper.createRes(200, 'Delete success QwQ');
    } else {
      this.ctx.helper.createRes(409, 'Delete err Orz  ');
    }
  }

  async deleteCollectionScore() {
    const {
      sid
    } = this.ctx.params;
    if(!this.ctx.session.user){
      this.ctx.helper.createRes(203, '用户登录失效或权限不足')
    } else{
      const response = await this.scoreService.deleteCollectionScore(sid,this.ctx.session.user.id)
      this.ctx.body = response
    }
  }



  async getAllScore(){
    const {
      offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE
    } = this.ctx.query;
    const response = await this.scoreService.getAllScore(offset, pagesize);
    this.ctx.body = response
  }
  
}

module.exports = ScoreController;