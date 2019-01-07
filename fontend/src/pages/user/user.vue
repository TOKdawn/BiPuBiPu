<template>
<div class="user">
  <el-card class="card">
    <el-container>
      <el-aside class="left" style="width:150px;">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1" @click="menuData = 1">
        <i class="el-icon-menu"></i>
        <span slot="title">个人中心</span>
      </el-menu-item>
      <el-menu-item index="2" @click="menuData = 2">
        <i class="el-icon-document"></i>
        <span slot="title">修改信息</span>
      </el-menu-item>
      <el-menu-item index="3" @click="menuData = 3">
        <i class="el-icon-setting"></i>
        <span slot="title">账号安全</span>
      </el-menu-item>
    </el-menu></el-aside>
      <el-main class="right">
        <div v-show="menuData == 1" class="personalCenter">
          <div >
            <img :src="img" alt="" class="avatar">
            <div class="info">
              <p>{{name}}</p>
            </div>
            <div class="collection">
              12321
            </div>
          </div>
        </div>
        <div v-show=" menuData == 2">
          <h2>我的信息</h2>
          <el-form ref="userData" :model="userData" label-width="80px">
            <el-form-item label="昵称">
              <el-input v-model="userData.email" size="small"></el-input>
            </el-form-item>
            <el-form-item label="用户名">
              <el-input v-model="userData.name" size="small"></el-input>
            </el-form-item>
             <el-form-item label="签名">
               <el-input type="textarea" v-model="userData.signature"></el-input>
            </el-form-item>
              <el-button>保存</el-button>
          </el-form>
        </div>
        <div v-show=" menuData == 3">
          3333
        </div>

      </el-main>
    </el-container>
  </el-card>
</div>
</template>
<script>

export default {
  data () {
    return {
      menuData: 1,
      img: 'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/185998-102.jpg',
      name: 'TOKDawn',
      userData: {
        name: '222',
        email: '1118746442232'
      }
    }
  },
  components: {

  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
@import "src/assets/style.scss";
.user{
  margin-top: 90px !important;
  .card{
    width: 1024px;
    margin: 0px auto 50px auto;
    height: 500px;
    .left{
      background-color: #545c64;
      height: 500px;
      .el-menu-vertical-demo{
        border: 0px;
      }
    }
    .right{
      background-color: #fff;
        .avatar{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        float: left;;
      }
      .info{
        // background-color: aqua;
        width: 100%;
        padding-left: 90px;
        height: 100px;
        p{
          font-size: $--FontSizeL;
          color: rgb(242,103,98);
        }
      }
      .collection{

      }
      .personalCenter{
        padding: 15px;
      }
    }
  }
}
</style>
<style >
  .user .card .el-card__body{
    padding: 0px !important;
  }
</style>
