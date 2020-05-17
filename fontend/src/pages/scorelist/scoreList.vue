<template>
  <div class="scoreList">

    <div class="conText">
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
        class="tabTitle"
      >
        <el-tab-pane
          label="曲谱"
          name="first"
        >
          <el-table
            ref="userCollection"
            :data="userCollection"
            highlight-current-row
            style="width: 100%; margin-bottom:20px;"
          >
            <el-table-column
              type="index"
              width="50"
            >
            </el-table-column>
            <el-table-column
              property="name"
              label="谱名"
<<<<<<< HEAD
              width="120"
=======
              width="140"
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
            >
            </el-table-column>
            <el-table-column
              property="addtion"
              label="别名"
            >
            </el-table-column>

          </el-table>
        </el-tab-pane>
        <el-tab-pane
          label="谱册"
          name="second"
        >
          <div class="otherScoreListDiv">
            <div
              class="copies"
              v-for="(item,index) in myScoreList"
              :key="index"
            >
              <img
                :src="item.img"
                alt=""
              >
              <h1> {{item.title}}</h1>
              <p> {{item.describe}}}</p>
              <div>收藏数:{{item.star}}</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane
          label="用户"
          name="third"
        >
  
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
      activeName: 'first',
      searchText: ''

    }
  },
  components: {
    Search
  },
  created () {
<<<<<<< HEAD
    console.log('aabbbdddaa')
    console.log(this.$route.params.searchtext)
=======
    // console.log('aabbbdddaa')
    // console.log(this.$route.params.searchtext)
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
    this.searchText = this.$route.params.searchtext
  },
  methods: {
    handleClick () {},
    querySearchAsync () {},
    handleSelect () {
      // console.log('aaaa')
      this.$router.push(`/page/scoreList/${this.searchText}`)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "src/assets/style.scss";
.scoreList {
  .bannder {
    height: 200px;
    width: 100%;
    background: url("./bg.jpg") 0% 85% /100% auto no-repeat;
    text-align: center;
    .bg {
      width: 100%;
      height: 100%;
      background: #333;
      opacity: 0.7;
      padding-top: 60px;
      i {
        display: inline-block;
        font-weight: 600;
        line-height: 60px;
        font-size: 28px;
        margin-left: -34px;
        color: $--basicColor;
        padding-top: 2px;
        z-index: 60;
        position: relative;
        cursor: pointer;
        &:hover {
          color: $--activeColor;
        }
      }
    }
  }
  .conText {
    max-width: 1200px;
    min-width: 760px;
    left: 0;
    right: 0;
    margin: 0px auto;
    .tabTitle {
      margin-top: 10px;
    }
    .otherScoreListDiv {
      max-height: 1120px;
      overflow: auto;
      padding-bottom: 30px;
    }
    .copies {
      display: inline-block;
      text-align: center;
      margin-top: 20px;
      width: 25%;
      img {
        width: 150px;
        height: 150px;
        cursor: pointer;
      }
      h1 {
        font-size: $--basicFontSize;
        line-height: $--basicFontSize;
        font-weight: 500;
        overflow: hidden;
        height: 33px;
        padding: 0px 20px;
        color: $--darkFontColor;
        cursor: pointer;
        transition: all 0.4s;
        &:hover {
          color: $--activeColor;
        }
      }
      p {
        font-size: $--FontSizeM;
        line-height: $--FontSizeM;
        font-weight: 400;
        overflow: hidden;
        height: 40px;
        padding: 0px 15px;
        color: $--middleFontColor;
        margin-top: 5px;
      }
    }
  }
}
</style>

<style>
.scoreList input {
  width: 400px !important;
  background-color: transparent !important;
  color: #fff !important;
  font-size: 14px;
  margin-top: -12px;
  padding: 0px 30px 0px 5px !important;
  height: 60px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-radius: 0px;
}
.scoreList input:hover {
  border-color: #f29a58;
}
.scoreList input:focus {
  border-color: rgb(242, 103, 98);
}
</style>
