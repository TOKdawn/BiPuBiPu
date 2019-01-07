<template>
<div class="searchRes">
  <div class="bannder">   
    <Search ></Search>
  </div>
  <div class="conText">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="tabTitle">
    <el-tab-pane label="曲谱" name="first">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">

          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">

          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">

          </el-table-column>
        </el-table>
    </el-tab-pane>
    <el-tab-pane label="谱册" name="second">
      <h1 @click="$router.push({ name: 'score', params: { scoreid : '123' }})">123</h1>
      <h1 @click="$router.push({ name: 'score', params: { scoreid : '456' }})">456</h1>
    </el-tab-pane>
    <el-tab-pane label="用户" name="third">
      <h1 @click="$router.push({ name: 'user', params: { uid : '456' }})">用户甲</h1>
    </el-tab-pane>
  </el-tabs>
  </div>
</div>
</template>
<script>
import Search from '../search/search'
export default {
  data () {
    return {
      activeName: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
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
