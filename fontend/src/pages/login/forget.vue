<template>
  <div class="login-container">

    <Head></Head>
          <div class="form-wrap">
            <div class="type">
              <h2 style="margin: 10px 0px 20px 20px;">重制密码</h2>    
            </div>
           
              <el-form   label-width="80px">
              <el-form-item label="手机号:">
                <el-input
                  placeholder="手机"
                  v-model="res_phone"
                ></el-input>
                <i class="icon-envelope-alt"></i>
              </el-form-item>
             <el-form-item label="新密码:">
                
                <el-input
                   v-if="!isShowPwd"
                  type="text"
                  placeholder="新密码"
                  v-model="res_pwd"
                  @keyup.enter="updatePass"
                ></el-input>
           
           </el-form-item>
              <el-form-item label="验证码:">
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
            </el-form-item>
              <div>
                <el-button
                  round
                  @click.stop="updatePass"
                >重制</el-button>
              </div>
              </el-form>           
            <p
              class="errmsg"
              v-if='loginTipMsg.length > 0'
            >{{ loginTipMsg }}</p>
          </div>
  </div>
</template>

<script>
import Head from '../layout/header'
import {Login} from 'common/urls'

export default {
  name: 'VLOGIN',
  data () {
    return {
      user_num: '',
      user_pwd: '',
      user_catcha: '',
      img: 'https://mc.qcloudimg.com/static/img/d9d167216e715474d67ee8031a436d39/image.png',
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

    forget () {
      this.$router.push('/index')
    },
    updatePass () {
      let isCheck = this.checkEmailAndPwd(this.res_phone, this.res_pwd, this.res_sms)
      if (!isCheck) {
        return
      }
      this.$http({
        method: 'post',
        url: Login.updatePass,
        data: {
          sms: this.res_sms,
          phone: this.res_phone,
          password: this.res_pwd
        }
      }).then(res => {
        if (res.status === 200) {
        //   console.log('更改成功', res.data.data)
          // store.commit('uploadUserData', res.data.data)
          this.$router.push('/')
        }
      })
      .catch(() => {
        this.$message({
          showClose: true,
          duration: 2000,
          message: '更改失败',
          type: 'error'
        })
      })
    },

    getSMS () {
      var myreg = /^[1][3,4,6,9,5,7,8][0-9]{9}$/
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
        //   console.log(res.data.data)
        }
      }).catch(() => {

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
      var myreg = /^[1][3,4,5,6,9,7,8][0-9]{9}$/
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

  },
  created () {

  },
  components: {
    Head
  }
}
</script>

<style lang="scss" scoped>
 .form-wrap{
   width: 400px;
   height: 300px;
   margin: 80px auto 0px auto;
   left: 0px;
   right: 0px;
   position:absolute;
 }

</style>

