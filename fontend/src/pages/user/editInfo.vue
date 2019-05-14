<template>
  <div class="user">
    <el-card class="card">
      <h2 style="margin-bottom:20px; font-weight:600">个人设置</h2>
      <el-tabs
        v-model="activeName"
        type="card"
      >
        <el-tab-pane
          label="基本设置"
          name="first"
        >
          <el-form
            :model="userData"
            :rules="userRules"
            ref="userDataForm"
            label-width="100px"
            class="userDataForm"
          >
            <el-form-item label="更换头像:">
              <el-upload
                class="avatar-uploader"
                action="/api/upload"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
              >
                <img
                  v-if="userData.avatar"
                  :src="userData.avatar"
                  class="avatar"
                >
                <i
                  v-else
                  class="el-icon-plus avatar-uploader-icon"
                ></i>
              </el-upload>

            </el-form-item>
            <el-form-item
              label="昵称:"
              prop="username"
            >
              <el-input
                v-model="userData.username"
                size="small"
              >

              </el-input>
            </el-form-item>
            <el-form-item
              label="个人介绍:"
              prop="signature"
            >
              <el-input
                v-model="userData.signature"
                type="textarea"
                :rows="2"
                size="small"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button size="small" @click="updataUser">
                保存
              </el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane
          label="绑定设置"
          name="second"
        >
          <p>绑定后可点亮相应图标</p>
          <el-card class="node">
            <el-row :gutter="20">
              <el-col :span="2">
                <span
                  class="iconfont icon-baidu1"
                  style="color:#140adc"
                ></span>
              </el-col>
              <el-col :span="18">
                <h3>百度贴吧</h3>
                <p>账号未绑定</p>
              </el-col>
              <el-col :span="4">
                <el-button
                  size="small"
                  style="margin-top:13px;"
                > 点击绑定</el-button>
              </el-col>
            </el-row>

          </el-card>
          <el-card class="node">

            <el-row :gutter="20">
              <el-col :span="2">
                <span
                  class="iconfont icon-CN_bilibiliB"
                  style="color:#d4237a"
                ></span>
              </el-col>
              <el-col :span="18">
                <h3>B站账号</h3>
                <p>账号未绑定</p>
              </el-col>
              <el-col :span="4">
                <el-button
                  size="small"
                  style="margin-top:13px;"
                > 点击绑定</el-button>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="node">

            <el-row :gutter="20">
              <el-col :span="2">
                <span
                  class="iconfont icon-weibo"
                  style="color:#d81e06"
                ></span>
              </el-col>
              <el-col :span="18">
                <h3>微博账号</h3>
                <p>账号未绑定</p>
              </el-col>
              <el-col :span="4">
                <el-button
                  size="small"
                  style="margin-top:13px;"
                > 点击绑定</el-button>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="node">
            <el-row :gutter="20">
              <el-col :span="2">
                <span
                  class="iconfont icon-music1"
                  style="color:#1afa29"
                ></span>
              </el-col>
              <el-col :span="18">
                <h3>5sing账号</h3>
                <p>账号未绑定</p>
              </el-col>
              <el-col :span="4">
                <el-button
                  size="small"
                  style="margin-top:13px;"
                > 点击绑定</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-tab-pane>
        <el-tab-pane
          label="安全设置"
          name="third"
        >
          <h2>修改密码</h2>
          <el-form
            :model="userSecurity"
            :rules="securityRules"
            ref="userSecurityForm"
            label-width="80px"
            class="userDataForm"
          >

            <el-form-item
              label="旧密码:"
              prop="oldPass"
            >
              <el-input
                v-model="userSecurity.oldPass"
                size="small"
              >

              </el-input>
            </el-form-item>
            <el-form-item
              label="新密码:"
              prop="newPass"
            >
              <el-input
                v-model="userSecurity.newPass"
                size="small"
              ></el-input>
            </el-form-item>
            <el-form-item>

              <el-button size="small">
                保存
              </el-button>
            </el-form-item>
          </el-form>

          <h2>更换手机</h2>

          <el-form
            :model="userPhone"
            :rules="phoneRules"
            ref="userPhoneForm"
            label-width="80px"
            class="userDataForm"
          >

            <el-form-item
              label="旧手机:"
              prop="oldPhone"
            >
              <el-input
                v-model="userPhone.oldPhone"
                size="small"
              >

              </el-input>
            </el-form-item>
            <el-form-item
              label="新手机:"
              prop="newPhone"
            >
              <el-input
                v-model="userPhone.newPhone"
                size="small"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                placeholder="短信验证码"
                v-model="userPhone.sms"
                class="input-with-select"
              >
                <el-button
                  slot="append"
                  :disabled="smsFlag"
                  @click.stop="getSMS"
                > {{SMStext}}</el-button>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button size="small" @click="updataPhone">
                保存
              </el-button>
            </el-form-item>
              <p
              class="errmsg"
              v-if='loginTipMsg.length > 0'
            >{{ loginTipMsg }}</p>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
import store from 'vux/store.js'
import {User} from 'common/urls'
export default {
  data () {
    return {
      userData: {
        username: '未命名用户',
        avatar:
          'http://bipu.oss-cn-beijing.aliyuncs.com/egg-multipart-test/akari.jpg',
        signature: '这个人很懒,啥也没写╮(╯_╰)╭',
        phone: 18700000000
      },
      userSecurity: {
        oldPass: '',
        newPass: ''
      },
      userPhone: {
        oldPhone: '',
        newPhone: '',
        sms: ''
      },
      userThree: {
        bili: '',
        weibo: '',
        fivesong: '',
        tieba: ''
      },
      activeName: 'first',
      SMStext: '获取短信验证码',
      userRules: {
        username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
        ],
        signature: [
            { required: true, message: '请输入个人介绍', trigger: 'blur' },
            { min: 3, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
        ]
      },
      securityRules: {
        oldPass: [
            { required: true, message: '请输入旧密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        newPass: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      },
      phoneRules: {
        oldPhone: [
       { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        newPhone: [
       { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
        ]
      },
      smsFlag: '',
      res_sms: '',
      loginTipMsg: ''
    }
  },
  components: {},
  created () {
    this.userData.username = store.getters.username
    this.userData.avatar = store.getters.avatar
    this.userData.signature = store.getters.signature
    this.userData.phone = store.getters.phone
  },
  methods: {
    jump (type) {
      switch (type) {
      }
    },
    getSMS () {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
      if (!myreg.test(this.res_phone)) {
        this.loginTipMsg = '请输入正确格式的手机号'
        return false
      }
      this.smsFlag = true
      this.SMStext = '重新发送(60)'
      let TIME_COUNT = 60
      this.$http({
        method: 'post',
        url: '',
        data: {
          phone: this.res_phone
        }
      })
      .then(res => {
        if (res.status === 200) {
          console.log(res.data.data)
        }
      })
      .catch(() => {
        // this.$message({
        //   showClose: true,
        //   duration: 2000,
        //   message: '获取短信失败',
        //   type: 'error'
        // })
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
    handleAvatarSuccess (res, file) {
      this.userData.avatar = res.url
    },
    updataPhone () {
      let isCheck = this.checkEmailAndPwd(this.userPhone.oldPass, this.userPhone.newPhone, this.userPhone.sms)
      if (!isCheck) {
        return
      }
      this.$http({
        method: 'post',
        url: User.changephone,
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
    checkEmailAndPwd (oldPhone, newPhone, sms) {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
      if (oldPhone === '' || newPhone === '' || sms === '') {
        this.loginTipMsg = '新旧手机及验证码不能为空！'
        return false
      } else if (!myreg.test(oldPhone) && !myreg.test(newPhone)) {
        this.loginTipMsg = '请输入正确格式的手机号'
        return false
      } else {
        this.loginTipMsg = ''
        return true
      }
    },
    updataUser () {
      this.$refs['userDataForm'].validate((valid) => {
        if (valid) {
          this.$http({
            method: 'post',
            url: User.updateInfo,
            data: {
              avatar: this.userData.avatar,
              name: this.userData.username,
              signature: this.userData.signature
            }
          }).then(res => {
            if (res.status === 200) {
              store.commit('uploadUserData', {
                avatar: this.userData.avatar,
                name: this.userData.username,
                signature: this.userData.signature
              })
              this.$message({
                showClose: true,
                duration: 2000,
                message: '更新信息成功',
                type: 'secuss'
              })
            } else {
              this.$message({
                showClose: true,
                duration: 2000,
                message: res.data.message,
                type: 'error'
              })
            }
          }).catch(() => {
            this.$message({
              showClose: true,
              duration: 2000,
              message: '注册失败',
              type: 'error'
            })
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }

}
</script>
<style lang="scss" scoped>
@import "src/assets/style.scss";
.user {
  .card {
    width: 980px;
    margin: 0px auto 0px auto;
    padding: 40px;
    min-height: 720px;
    .userDataForm {
      width: 350px;
    }
    .img-bar {
      height: 180px;
      &:hover {
        .img-info {
          display: block;
        }
      }
      img {
        z-index: 1;
      }
      .img-info {
        cursor: pointer;
        height: 23px;
        display: none;
        background-color: rgba(66, 66, 66, 0.5);
        color: #fff;
        text-align: center;
        font-size: 14px;
        line-height: 23px;
        margin-top: -27px;
        z-index: 2;
        width: 180px;
        position: relative;
        &:hover {
          color: $--basicColor;
        }
      }
    }
    .node {
      height: 83px;
      margin-top: 40px;
      padding-top: 12px;
      background: #f8f8f8;
      padding-left: 30px;
      border: 1px solid #dfdfdf;
      color: #666;
      span {
        font-size: 38px;
      }
      h3 {
        margin-top: 3px;
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    border: 1px solid red;
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>
<style >
.user .card .el-card__body {
  padding: 0px !important;
}
</style>
