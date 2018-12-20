<template>
  <div class="head">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect">
      <el-menu-item index="1" @click="$router.push({ path: `/index` })">主页</el-menu-item>
      <el-menu-item index="2" @click="$router.push({ path: `/page/scorelist` })">谱册</el-menu-item>
      <el-menu-item
        index="3"
        disabled
      >周刊</el-menu-item>
      <el-menu-item index="4"><a
          href="https://www.ele.me"
          target="_blank"
        >转谱</a></el-menu-item>
      <el-menu-item index="5">关于</el-menu-item>
      <el-menu-item index="6">下载</el-menu-item>
    </el-menu>
    <Search style="margin-top:-2px; margin-left:100px;"></Search>
    <div
      v-if="false"
      class="avatar"
    >
      <img
        src="./Akkarin.jpg"
        alt=""
      >
    </div>
    <el-popover
      placement="bottom"
      width="100"
      trigger="hover"
      v-if="true"
      class="avatar"
    >
      <ul>
        <li>
          个人中心
        </li>
        <li>
          注销
        </li>
      </ul>
      <img
        src="./justice_eternal.png"
        alt=""
        slot="reference"
      >
    </el-popover>
  </div>
</template>
<script>
import Search from '../search/search'
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    }
  },
  components: {
    Search
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
  }
}
</style>
