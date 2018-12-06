<template>
<div class="searchRes">
  <div class="bannder">   
    <Search ></Search>
  </div>
  <div class="conText">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="tabTitle">
    <el-tab-pane label="曲谱" name="first">曲谱</el-tab-pane>
    <el-tab-pane label="谱册" name="second">谱册</el-tab-pane>
    <el-tab-pane label="用户" name="third">用dd户</el-tab-pane>
  </el-tabs>
  </div>
</div>
</template>
<script>
import Search from '../search/search'
export default {
  data () {
    return {
      activeName: ''
    }
  },
  components: {
    Search
  },
  created () {
    console.log('aaaaaaaaaaaa')
    console.log(this.$route.params.searchtext)
  },
  methods: {
    handleClick () {

    }
  }
}
</script>
<style lang="scss" scoped>
@import "src/assets/style.scss";
  .searchRes {
    .bannder{
      height: 200px;
      width: 100%;
      background:url('./bg.jpg') 0% 85% /100% auto no-repeat;
      text-align: center;
      input{
        // background-color: #fff;
        color: #fff !important;
        width: 400px !important;
      }
      div{
        width: 100%;
        height: 100%;
        background: #333;
        opacity: .7;
        padding-top: 50px;
      }
    }
    .conText{
      max-width: 1200px;
      min-width: 760px;
      left: 0;
      right: 0;
      margin: 0px auto;
      .tabTitle{
        margin-top: 10px;
      }
    }

  }
</style>
