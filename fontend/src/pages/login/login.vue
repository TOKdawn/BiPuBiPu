<template>
  <div class="login-container">
    <div id="scrollbg">
      <div id="color"></div>
      <ul id="bg">
        <img src="./40.png">
        <img src="./80.png">
        <img src="./70.png">
        <img src="./20.png">
        <img src="./10.png">
        <img src="./30.png">
        <img src="./60.png">
        <img src="./130.png">
        <img src="./120.png">
        <img src="./160.png">
        <img src="./20.png">
        <img src="./10.png">
        <img src="./140.png">
        <img src="./50.png">
        <img src="./90.png">
        <img src="./30.png">
      </ul>
    </div>

    <Head></Head>
    <div
      class="login-bg"
      v-show="loginSwitch==='login'"
    >
      <div class="login-box clear">
        <div class="aside fl">
          <h3 class="title">
            <p>登录</p>
          </h3>
        </div>
        <div class="content fl">
          <div class="form-wrap">
            <div class="type">
              <span>用户登录</span>
            </div>
            <div>
              <div class="input-item">
                <input
                  placeholder="账号"
                  v-model="user_num"
                >
                <i class="icon-envelope-alt"></i>
              </div>
              <div class="input-item">
                <input
                  v-if="!isShowPwd"
                  type="password"
                  placeholder="密码"
                  v-model="user_pwd"
                  @keyup.enter="btnLogin"
                >
                <input
                  v-else
                  type="text"
                  placeholder="密码"
                  v-model="user_pwd"
                  @keyup.enter="btnLogin"
                >
                <i
                  :class="[isShowPwd ? 'el-icon-star-off':'el-icon-star-on']"
                  @click.stop="showPassword"
                ></i>
              </div>
              <div class="input-item">
                <input
                  placeholder="验证码"
                  v-model="user_catcha"
                  class="catcha-input"
                >
                <div class="catcha">
                  <div v-html="svg"></div>
                  <p @click.stop="getCatcha">看不清,换一张</p>
                </div>
              </div>
              <div
                style="float:right;  cursor: pointer;"
                @click="forget()"
              >
                忘记密码
              </div>
              <div>
                <el-button
                  round
                  @click.stop="btnLogin()"
                >登录</el-button>
                <el-button
                  round
                  @click.stop="typeSwitch('register')"
                >注册</el-button>
              </div>
            </div>
            <p
              class="errmsg"
              v-if='loginTipMsg.length > 0'
            >{{ loginTipMsg }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="login-bg"
      v-show="loginSwitch==='register'"
    >
      <div class="login-box clear">
        <div class="aside fl">
          <p class="disclaimer" style="text-align: left;">
            您将注册成为pipubipu会员，请您阅读以下内容，对您有帮助：<br>

            （1）、禁止讨论违法国家法律法规的内容，本站只做口琴交流，国家的事情请勿在本站发布讨论。<br>

            （2）、禁止在本站侮辱他人或者捏造事实诽谤他人的，或者进行其他恶意攻击的，侵害他人合法权益的。<br>

            （3）、请勿以任何方式对本站进行各种破坏行为的，如：CC攻击、DDOS、网站入侵、盗取会员账号煽动破坏、散布广告等；<br>

            （4）、严禁用党和国家领导人的名字作昵称，严禁用党和国家领导人的头像作为个人头像；<br>

            （5）、严禁使用低俗、不文明的文字或字母作为用户名。<br>

            （6）、阅读论坛指引帖：《新人必看文章》，了解论坛相关情况。<br>

            （7）、阅读论坛《总版规》与各个版块规定，防止违规。<br>
              
            （8）、本站琴谱只做学习交流用,禁止用作商业行为。<br>

            （9）、以上各项最终解释权归本站所有。<br>
          </p>
        </div>
        <div class="content fl">
          <div class="form-wrap">
            <div class="type">
              <span>注册新用户</span>
                       
            </div>
            <div>
              <div class="input-item">
                <input
                  placeholder="手机:"
                  v-model="res_phone"
                >
                <i class="icon-envelope-alt"></i>
              </div>
              <div class="input-item">
                <input
                  v-if="!isShowPwd"
                  type="password"
                  placeholder="密码"
                  v-model="res_pwd"
                  @keyup.enter="register"
                >
                <input
                  v-else
                  type="text"
                  placeholder="密码"
                  v-model="res_pwd"
                  @keyup.enter="register"
                >
                <i
                  :class="[isShowPwd ? 'el-icon-star-off':'el-icon-star-on']"
                  @click.stop="showPassword"
                ></i>
              </div>
              <div class="input-item">
                <el-input
                  placeholder="短信验证码"
                  v-model="res_sms"
                  class="input-with-select"
                >
                  <el-button
                    slot="append"
                    :disabled="smsFlag"
                    @click.stop="getSMS"
                  > {{SMStext}}</el-button>
                </el-input>
              </div>
              <div>
                <el-button
                  round
                  @click.stop="register"
                >注册</el-button>
                <p style="float:right; color:red; margin: 9px 57px 0px 0px;">点击即代表你已阅读并同意用户使用协议</p>
              </div>
            </div>
            <p
              class="errmsg"
              v-if='loginTipMsg.length > 0'
            >{{ loginTipMsg }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from '../layout/header'
import {Login} from 'common/urls'
import store from 'vux/store.js'
export default {
  name: 'VLOGIN',
  data () {
    return {
      user_num: '',
      user_pwd: '',
      user_catcha: '',
      img:
        'https://mc.qcloudimg.com/static/img/d9d167216e715474d67ee8031a436d39/image.png',
      isShowPwd: false,
      loginTipMsg: '',
      loginSwitch: 'login',
      res_phone: '',
      res_pwd: '',
      res_sms: '',
      smsFlag: false,
      svg: '2322',
      SMStext: '获取短信验证码'
    }
  },
  methods: {
    showPassword () {
      this.isShowPwd = !this.isShowPwd
    },

    btnLogin () {
      let isCheck = this.checkEmailAndPwd(this.user_num, this.user_pwd)
      if (!isCheck) {
        return
      }
      this.$http({
        method: 'post',
        url: Login.login,
        data: {
          phone: this.user_num,
          password: this.user_pwd,
          captcha: this.user_catcha
        }
      }).then(res => {
        if (res.status === 200) {
          console.log('登录成功', res.data)
          store.commit('uploadUserData', res.data.data)
          this.$router.push('/')
        } else {
          this.$message({
            showClose: true,
            duration: 2000,
            message: res.data.message,
            type: 'error'
          })
        }
      })
      .catch((res) => {
        console.log(res)
        this.$message({
          showClose: true,
          duration: 2000,
          message: '登录失败',
          type: 'error'
        })
      })
    },
    forget () {
      console.log('sss')
      this.$router.push('/forget')
    },
    register () {
      let isCheck = this.checkEmailAndPwd(this.res_phone, this.res_pwd, this.res_sms)
      if (!isCheck) {
        return
      }
      this.$http({
        method: 'post',
        url: Login.register,
        data: {
          sms: this.res_sms,
          phone: this.res_phone,
          password: this.res_pwd
        }
      }).then(res => {
        if (res.status === 200) {
          // console.log('注册成功', res.data.data)
          store.commit('uploadUserData', res.data.data)
          this.$router.push('/')
        } else {
          this.$message({
            showClose: true,
            duration: 2000,
            message: res.message,
            type: 'error'
          })
        }
      })
      .catch(() => {
        this.$message({
          showClose: true,
          duration: 2000,
          message: '注册失败',
          type: 'error'
        })
      })
    },
    typeSwitch (type) {
      this.loginSwitch = type
    },
    getCatcha () {
      this.$http({
        method: 'get',
        url: Login.getCatcha
      })
        .then(res => {
          if (res.status === 200) {
            this.svg = res.data.data
          }
        })
        .catch(() => {
          this.$message({
            showClose: true,
            duration: 2000,
            message: '获取验证码失败',
            type: 'error'
          })
        })
    },
    getSMS () {
      var myreg = /^[1][3,6,4,5,7,8,9][0-9]{9}$/
      if (!myreg.test(this.res_phone)) {
        this.loginTipMsg = '请输入正确格式的手机号'
        return false
      }
      this.smsFlag = true
      this.SMStext = '重新发送(60)'
      let TIME_COUNT = 60
      this.$http({
        method: 'post',
        url: Login.getSMS,
        data: {
          phone: this.res_phone
        }
      }).then(res => {
        if (res.status === 200) {
          console.log(res.data.data)
        }
      }).catch(() => {
        this.$message({
          showClose: true,
          duration: 2000,
          message: '获取短信失败',
          type: 'error'
        })
      })
      let _this = this
      this.count = TIME_COUNT
      let timer = setInterval(() => {
        if (this.count > 0 && this.count <= TIME_COUNT) {
          this.count--
          _this.smsFlag = true
          _this.SMStext = '重新发送(' + this.count + ')'
        } else {
          clearInterval(timer)
          _this.smsFlag = false
          _this.SMStext = '获取短信验证码'
        }
      }, 1000)
      // }
    },
    checkEmailAndPwd (email, pwd, catcha) {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
      if (email === '' || pwd === '' || catcha === '') {
        this.loginTipMsg = '账号及密码或验证码不能为空！'
        return false
      } else if (!myreg.test(email)) {
        this.loginTipMsg = '请输入正确格式的手机号'
        return false
      } else if (pwd.length < 6 && pwd.length > 16) {
        this.loginTipMsg = '密码长度需大于6位且小于16位'
        return false
      } else {
        this.loginTipMsg = ''
        return true
      }
    }
    // weibo () {
    //   this.$http({
    //     method: 'get',
    //     url: 'http://172.0.0.1:7003/passport/weibo'
    //   }).then(() => {})
    // }
  },
  created () {
    this.getCatcha()
  },
  components: {
    Head
  }
}
</script>

<style lang="scss" scoped>
/*变量 begin*/
// 字体
$base-font-size: 100% !default;
$base-line-height: 2;
$font-size-xs: 1.2rem !default;
$font-size-sm: 1.4rem !default;
$font-size-default: 1.6rem !default;
$font-size-lg: 1.8rem !default;
$font-size-xl: 2rem !default;
$font-size-xxl: 2.4rem !default; // 颜色
$color-black: #101213;
$color-light-black: #31383e;
$color-gray: #a9afb2;
$color-light-gray: #d3d4d8;
$color-blue: #018fe5;
$line-color: #e1e1e1;
$color-orange: #e56c69;
$color-red: #ff0000;
$bg-gray: #f0f0f2;
$bg-yellow: #fdf9cd;
/*变量 end*/
a {
  text-decoration: none;
}
/*浮动 begin*/
.clear::after {
  clear: both;
  content: "";
  zoom: 1;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
// 界面样式
.login-container {
  $--gradient-Y: #018ee5e2;
  $--gradient-X: #84c3e1;

  #scrollbg {
    z-index: -1;
    background-color: rgb(2, 2, 2);
    height: 100vh;
    width: 100%;
    overflow: hidden;
    position: absolute;
  }
  #color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #e8edec;
    // background: linear-gradient(to bottom, #252525 0%, #386B76 100%);
    background: linear-gradient(
      to bottom,
      $--gradient-X 0%,
      $--gradient-Y 100%
    );
    background-attachment: fixed;
    overflow: hidden;
  }

  @keyframes square {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    100% {
      -webkit-transform: translateY(-1500px) rotate(600deg);
      transform: translateY(-1500px) rotate(600deg);
    }
  }

  @keyframes square {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    100% {
      -webkit-transform: translateY(-1200px) rotate(600deg);
      transform: translateY(-1200px) rotate(600deg);
    }
  }

  #bg {
    height: 110%;
    overflow: hidden;
  }

  #bg img {
    overflow: hidden;
    position: absolute;
    list-style: none;
    display: block;
    opacity: 0.15;
    bottom: -160px;
    -webkit-animation: square 45s infinite;
    animation: square 45s infinite;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
    border-right: 50px solid transparent;
    left: -200px;
    -webkit-filter: drop-shadow(200px 0px 0 #ffccbc);
    filter: drop-shadow(200px 0px 0 #ffccbc);
  }

  #bg img:nth-child(1) {
    left: 10%;
  }

  #bg img:nth-child(2) {
    left: 20%;
    opacity: 0.25;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-duration: 20s;
    animation-duration: 20s;
  }

  #bg img:nth-child(3) {
    left: 75%;
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
  }

  #bg img:nth-child(4) {
    left: 40%;
    opacity: 0.25;
    -webkit-animation-duration: 35s;
    animation-duration: 35s;
  }

  #bg img:nth-child(4) {
    left: 40%;
    opacity: 0.25;
    -webkit-animation-duration: 38s;
    animation-duration: 38s;
  }

  #bg img:nth-child(13) {
    left: 70%;
  }

  #bg img:nth-child(6) {
    left: 80%;
    opacity: 0.2;
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
    -webkit-animation-duration: 40s;
    animation-duration: 40s;
  }

  #bg img:nth-child(7) {
    left: 32%;
    -webkit-animation-delay: 27s;
    animation-delay: 27s;
  }

  #bg img:nth-child(8) {
    left: 55%;
    -webkit-animation-delay: 15s;
    animation-delay: 15s;
    -webkit-animation-duration: 40s;
    animation-duration: 40s;
  }

  #bg img:nth-child(9) {
    left: 25%;
    opacity: 0.3;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-duration: 30s;
    animation-duration: 30s;
  }

  #bg img:nth-child(10) {
    left: 63%;
    -webkit-animation-delay: 11s;
    animation-delay: 11s;
  }

  #bg img:nth-child(11) {
    left: 31%;
    -webkit-animation-delay: 14s;
    animation-delay: 14s;
  }

  #bg img:nth-child(12) {
    left: 50%;
    opacity: 0.2;
    -webkit-animation-delay: 30s;
    animation-delay: 30s;
  }

  #bg img:nth-child(13) {
    left: 40%;
    opacity: 0.25;
    -webkit-animation-duration: 28s;
    animation-duration: 28s;
  }

  #bg img:nth-child(14) {
    left: 65%;
    -webkit-animation-delay: 19s;
    animation-delay: 19s;
  }

  #bg img:nth-child(15) {
    left: 30%;
    opacity: 0.2;
    -webkit-animation-delay: 13s;
    animation-delay: 13s;
  }

  #bg img:nth-child(16) {
    left: 12%;
    -webkit-animation-delay: 7s;
  }

  #inner {
    position: relative;
  }
  .login-bg {
    background-color: rgba(39, 65, 82, 0.8);
    height: 100%;
    .login-box {
      width: 70rem;
      height: 35rem;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      background: #fff;
      border-radius: 0.4rem;
      overflow: hidden;
      box-shadow: 0.3rem 0.3rem 1rem 0 #333;
      .aside {
        width: 30rem; // background: rgba(255, 255, 255, 0.473);
        background: #018fe5;
        height: 100%;
        text-align: center;
        color: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        .title {
          img {
            height: 100%;
            width: 98%;
          }
        }
        .disclaimer {
          padding: 50px;
          height: 100%;
        }
      }
      .content {
        height: 70%;
        padding: 5rem;
        .form-wrap {
          margin: 10% 0;
        }
        .type {
          margin-bottom: 2.5rem;
          font-size: 1.6rem;
          cursor: pointer;
          padding: 0 5px;
          color: #a9afb2;
        }
        .active {
          color: $color-blue;
        }
        span {
          padding: 0 5px;
        }
        .input-item {
          margin-bottom: 2rem;
          width: 25rem;
          position: relative;
          .catcha-input {
            width: 70%;
            display: inline-block;
          }
          .catcha {
            width: 100px;
            height: 100%;

            float: right;
            margin-top: -20px;
            p {
              cursor: pointer;
              font-size: 12px;
              margin-left: 8px;
              &:hover {
                color: #018ee5e2;
              }
            }
          }
          button {
            color: #018ee5e2;
          }
        }
        input {
          border: none;
          border-bottom: 1px solid #eee;
          padding: 10px;
          width: 100%;
        }
        input:focus {
          outline: none;
        }
        i {
          position: absolute;
          right: 0;
          top: 10px;
        }
      }
    }
  }
  .errmsg {
    font-size: "12px";
    color: $color-red;
  }
}
</style>

