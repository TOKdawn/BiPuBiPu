<template>
  <div class="user">
    <el-card class="card">
      <h2 style="margin-bottom:20px; font-weight:600">个人设置</h2>
      <el-tabs
        v-model="activeName"
        type="card"
        @tab-click="handleClick"
      >
        <el-tab-pane
          label="基本设置"
          name="first"
        >
          <el-form
            :model="userData"
            :rules="rules"
            ref="userDataForm"
            label-width="80px"
            class="userDataForm"
          >
            <el-form-item label="更换头像:">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
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
        >角色管理</el-tab-pane>

      </el-tabs>
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
      activeName: 'first'
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
