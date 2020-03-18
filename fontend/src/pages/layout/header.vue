<template>
  <div class="head">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect">
      <el-menu-item index="1" @click="$router.push({ path: `/index` })">主页</el-menu-item>
      <el-menu-item index="2" @click="$router.push({ name: `volumelist` })">谱册</el-menu-item>
      <el-menu-item index="3"  @click="$router.push({name:'articleList' })">文章</el-menu-item>
      <el-menu-item index="4" @click="$router.push({ name: 'translator' })">转谱</el-menu-item>
      <el-menu-item index="5" @click="$router.push({ name: 'about' })">关于</el-menu-item>
      <el-menu-item index="6" @click="$router.push({ name: 'download' })">下载</el-menu-item>
    </el-menu>
    <Search style="margin-top:-2px; right:170px; position:absolute"></Search>
    <div
      v-if="!logoutFlag"
      class="avatar"
      @click="$router.push('/login')"
    >
      <img
        src="https://bipu.oss-cn-beijing.aliyuncs.com/website/Akkarin.jpg"
        alt=""
      >
    </div>
    <el-popover
      placement="bottom"
      width="100"
      trigger="hover"
      v-if="logoutFlag"
      class="avatar"
    >
      <ul class="more-info" >
        <li style=" height:25px; line-height: 25px; cursor: pointer;" @click="$router.push(`/page/user/${userId}`)">
          个人中心
        </li>
        <li style=" height:25px; line-height: 25px;  cursor: pointer;" @click="logout()">
          注销
        </li>
      </ul>
      <img
        :src="img"
        alt=""
        slot="reference"
      >
    </el-popover>
  </div>
</template>
<script>
import Search from '../search/search'
import store from 'vux/store.js'
import {User} from 'common/urls'
export default {
  props: {
    activeIndex: {
      type: String,
      default: '1'
    }
  },
  data () {
    return {
      logoutFlag: false,
      userRole: 0,
      userId: 123,
      img: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    },
    logout () {
      this.$http({
        methods: 'get',
        url: User.logout
      }).then(res => {
        if (res.status === 200) {
          store.commit('logout')
          this.$router.push('/index')
        }
      })
    }
  },
  components: {
    Search
  },
  created () {
    this.userRole = store.getters.role
    this.userId = store.getters.id
    this.img = store.getters.avatar
    console.log('header:', this.userRole, this.userId)
    if (this.userRole > 0) {
      this.logoutFlag = true
    } else {
      this.logoutFlag = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import "src/assets/style.scss";
.head {
  top:0px;
  position:fixed;
  width: 100%;
  display: flex;
  min-width: 1024px;
  height: 60px;
  background: linear-gradient(180deg, #fbf4da82, #fbf3d9);
  background-color: antiquewhite;
  padding: 0px 5%;
  z-index:100;
  // min-width: 1024px;
  text-align: right;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  .el-menu-demo {
    background-color: transparent;
  }
  .el-menu-item.is-active {
    border-bottom-color: $--activeColor;
  }
  .el-menu-item:hover {
    border-bottom-color: $--scoreListBgColor;
  }
  .avatar {
    flex: 1 1 auto;
    &:focus {
      outline: none;
    }
    img {
      margin-top: 5px;
      width: 50px;
      height: 50px;
      cursor: pointer;
      border-radius: 50%;
    }
    .more-info{
      li{
        height:20px;
        line-height: 20px;
        background-color: aqua;
        cursor: pointer;
        &:hover{
          background-color: aqua;
        }
      }
    }
  }
}
</style>
