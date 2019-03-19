<template>
  <div class="user">
    <el-card class="card">
      <h2 style="margin-bottom:20px; font-weight:600">谱册设置</h2>

      <el-form
        :model="userData"
        :rules="rules"
        ref="userDataForm"
        label-width="80px"
        class="userDataForm"
      >
        <el-form-item label="更换封面:">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
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
          label="谱册名:"
          prop="username"
        >
          <el-input
            v-model="userData.username"
            size="small"
          >
          </el-input>
        </el-form-item>
        <el-form-item
          label="谱册介绍:"
          prop="username"
        >
          <el-input
            v-model="userData.username"
            type="textarea"
            :rows="2"
            size="small"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="small">
            保存
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import store from 'vux/store.js'
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
      activeName: 'first',
      SMStext: '获取短信验证码',
      rules: {},
      smsFlag: '',
      res_sms: ''
    }
  },
  components: {},
  methods: {
    jump (type) {
      switch (type) {
      }
    }
  },
  created () {
    this.userData.username = store.getters.username
    this.userData.avatar = store.getters.avatar
    this.userData.signature = store.getters.signature
    this.userData.phone = store.getters.phone
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
