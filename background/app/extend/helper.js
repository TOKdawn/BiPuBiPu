'use strict';
// app/extend/helper.js
const svgCaptcha = require('svg-captcha');
const crypto=require('crypto');
var http = require('http');
var querystring = require('querystring');
// const jwt = require('jsonwebtoken');
module.exports = {
  createRes(status, text) {
    // this 是 helper 对象，在其中可以调用其他 helper 方法
    // this.ctx => context 对象
    // this.app => application 对象
    // console.log('错误码',status)
    let Res = {
      message: text,
      data: text
    }
    this.ctx.body = Res;
    this.ctx.status = status;
  },
  successRes(text, data) {
    this.ctx.status = 200
    let Res = {
      message: text,
      data: data
    }
    this.ctx.body = Res
  },
  async getIssue(number) {
    const result = await this.ctx.curl(`https://api.github.com/repos/zytx121/je/issues/${number}`, {
      method: 'GET',
      dataType: 'json',
    });
    return result.data;
  },
  async applyCatcha() { //申请验证码
    const options = {
      width: 100,
      height: 40,
      fontSize: 50,
      color: true,
      noise: 2
    }
    const Captcha = svgCaptcha.createMathExpr(options);
    this.ctx.session.catcha = Captcha.text;
    this.ctx.session.maxAge = 1000 * 60 * 120;
    this.ctx.body = {
      status: 0,
      message: 'success',
      data: Captcha.data.replace(/"/g, "'")
    }
  },
  async checkCaptcha(captcha) {
    if (this.ctx.session.catcha + '' === captcha +'') {
      // console.log('验证svg',this.ctx.session.catcha, captcha)
      return false //验证成功
    } else {
      return true //验证失败
    }
  },
  async applySMS(phone) {
    const smsOptions = {
      "ext": "",
      "extend": "",
      "params": [
        "1234",
        "5"
      ],
      "sig": "ecab4881ee80ad3d76bb1da68387428ca752eb885e52621a3129dcf4d9bc4fd4",
      "sign": "腾讯云",
      "tel": {
        "mobile": "",
        "nationcode": "86"
      },
      "time": 1457336869,
      "tpl_id": 285795
    }
    const sms =  parseInt(Math.random()*(9999-1000+1)+1000,10)  
    this.ctx.session.usersms = sms;   
    const strMobile = phone; //tel 的 mobile 字段的内容
    const strAppKey = "6cd5a907422525162a450801eac5c94e"; //sdkappid 对应的 appkey，需要业务方高度保密
    const strTime = (Date.now()+'').substring(0, 10); //UNIX 时间戳
    const sig = crypto.createHash('SHA256').update('appkey='+strAppKey+'&random='+sms+'&time='+strTime+'&mobile='+strMobile).digest('hex');
    smsOptions.time = strTime
    smsOptions.params[0] = sms.toString()
    smsOptions.tel.mobile = phone
    smsOptions.sig = sig
    let str = "https://yun.tim.qq.com/v5/tlssmssvr/sendsms?sdkappid=1400189769&random="+sms
    const ctx = this.ctx;
    const result = await ctx.curl(str, {
      method: 'POST',
      contentType: 'json',
      data: smsOptions,
      dataType: 'json',
    });
    this.ctx.body = {
      status: 200,
      message: 'success',
      data: result.data
    }
},
  async checkSMS(sms){
    // console.log( '验证', this.ctx.session,sms)
  if(this.ctx.session.usersms + '' == sms) {
    // console.log( '短信成功')
    return false //验证成功
  } else{
    // console.log( '短信失败')
    return true //验证失败
  }

}
 
};