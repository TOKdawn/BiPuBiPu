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

}

module.exports = ScoreController;