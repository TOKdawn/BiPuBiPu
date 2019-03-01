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
    this.status = status;
    this.ctx.body = text;
  },
  successRes(text, data) {
    this.status = 200
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
    this.ctx.session.maxAge = 1000 * 60 * 10;
    this.ctx.body = {
      status: 0,
      message: 'success',
      data: Captcha.data.replace(/"/g, "'")
    }
  },
  async checkCaptcha(captcha) {
    if (this.ctx.session.catcha + '' == captcha) {
      return true //验证失败
    } else {
      return true //验证失败
    }
  },
  async applySMS(phone) {
    const smsOptions = {
      "ext": "",
      "extend": "",
      "params": [
        "验证码",
        "1234",
        "1"
      ],
      "sig": "ecab4881ee80ad3d76bb1da68387428ca752eb885e52621a3129dcf4d9bc4fd4",
      "sign": "腾讯云",
      "tel": {
        "mobile": "",
        "nationcode": "86"
      },
      "time": 1457336869,
      "tpl_id": 19
    }
    const sms =  parseInt(Math.random()*(9999-1000+1)+1000,10)  
    const strMobile = phone; //tel 的 mobile 字段的内容
    const strAppKey = "	6cd5a907422525162a450801eac5c94e"; //sdkappid 对应的 appkey，需要业务方高度保密
    const strTime = (Date.now()+'').substring(0, 10); //UNIX 时间戳
    const sig = crypto.createHash('SHA256').update('appkey='+strAppKey+'&random='+sms+'&time='+strTime+'&mobile='+strMobile).digest('hex');
    // console.log(sms,sig,strAppKey,strMobile,strTime)
    smsOptions.time = strTime
    smsOptions.params[1] = sms
    smsOptions.tel.mobile = phone
    smsOptions.sig = sig
    let str = "https://yun.tim.qq.com/v5/tlssmssvr/sendsms?sdkappid=1400189769&random="+sms
    const ctx = this.ctx;
    const result = await ctx.curl(str, {
      // 必须指定 method
      method: 'POST',
      // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
      contentType: 'json',
      data: smsOptions,
      // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
      dataType: 'json',
    });
    Console.log(result.data);
},
  async checkSMS(sms){
  if(sms) {
    return true //验证失败
  } else{
    return true //验证失败
  }

}
  // async checktoken (ctx, next) {
  //   if (ctx.request.header['authorization']) {
  //     let token = ctx.request.header['authorization'].split(' ')[1];
  //     console.log(token)
  //     let decoded;
  //     //解码token
  //     try {
  //       decoded = jwt.verify(token, '加签时定义的盐值');
  //     } catch (error) {
  //       if (error.name == 'TokenExpiredError') {
  //         console.log('时间到期')
  //         //重新发放令牌
  //         token = jwt.sign({
  //           user_id: 1,
  //           user_name: '张三'
  //         }, 'sinner77', {
  //           expiresIn: '60s' //过期时间设置为60妙。那么decode这个token的时候得到的过期时间为 : 创建token的时间 +　设置的值
  //         });
  //         ctx.cookies.set('token', token, {
  //           maxAge: 60 * 1000,
  //           httpOnly: false,
  //           overwrite: true,
  //           signed: false
  //         });
  //       } else {
  //         ctx.status = 401;
  //         ctx.body = {
  //           message: 'token失效'
  //         }
  //         return;
  //       }
  //     }
  //     //重置cookie时间
  //     ctx.cookies.set('token', token, {
  //       maxAge: 60 * 1000,
  //       httpOnly: false,
  //       overwrite: true,
  //       signed: false
  //     });
  //     await next();
  //   } else {
  //     ctx.status = 401;
  //     ctx.body = {
  //       message: '没有token'
  //     }
  //     return;
  //   }
  // }
};