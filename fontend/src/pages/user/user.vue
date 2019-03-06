<template>
  <div class="user">
    <el-card class="card">
      <div class="user-info">
        <el-row :gutter="20">
          <el-col
            :span="6"
            class="img-bar"
          >
            <img
              :src="userData.avatar"
              alt=""
              style="width:180px; height:180px;"
            >
            <div class="img-info" @click="jump(1)">更换头像</div>
          </el-col>
          <el-col :span="6">

          </el-col>
        </el-row>
      </div>
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
      }
    }
  },
  components: {},
  methods: {
    jump (type) {
      switch (type) {
        case 1:
          this.router.push()
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
    .user-info {
      .img-bar {
        height: 180px;
        &:hover{
          .img-info{
            display:block;
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
    }
  }
}
</style>
<style >
.user .card .el-card__body {
  padding: 0px !important;
}
</style>
