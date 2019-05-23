<template>
  <div class="searchRes">
    <div class="bannder">
      <div class="bg">
 
      </div>
    </div>
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
            :data="scoreData"
            highlight-current-row
            style="width: 100%; margin-bottom:20px; table-layout: fixed;"
              height="500"
              @cell-click="scoreJump"
          >
            <el-table-column
              type="index"
              width="50"
            >
            </el-table-column>
            <el-table-column
              property="name"
              label="谱名"
              width="120"
            >
            </el-table-column>
            <el-table-column
              property="alias"
              label="别名"
                width="120"
            >
            </el-table-column>
         <el-table-column
              property="addtion"
              label="更多信息"
                width="240"
            >
            </el-table-column>
                     <el-table-column
              property="FREEDOM54"
              label="扒谱人"
                width="120"
            >
            </el-table-column>
              <el-table-column
              property="score_text"
              label="预览"
            >
            <template slot-scope="scope">
                  {{ scope.row.score_text.slice(0,70) }}
              </template>
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
          v-for="(item,index) in volumeData"
          :key="index"
        >
          <img
            :src="item.photo"
            @click="$router.push(`/page/volume/${item.id}`)"
            alt=""
          >
          <h1 @click="$router.push(`/page/volume/${item.id}`)"> {{item.name}}</h1>
          <p> {{item.describe}}</p>
          <div>收藏数:{{item.visits}}</div>
        </div>
      </div>
        </el-tab-pane>
        <!-- <el-tab-pane
          label="用户"
          name="third"
        >
          <div style="height:800px; width:100%; text-align:center; padding-top:50px;">
            暂无数据
          </div>
        </el-tab-pane> -->
      </el-tabs>
    </div>
  </div>
</template>
<script>
// import Search from '../search/search'
import {systemUrl} from 'common/urls'
export default {
  data () {
    return {
      activeName: 'first',
      searchText: '',
      userData: [],
      scoreData: [],
      volumeData: []

    }
  },
  components: {
    // Search
  },
  created () {
    this.searchText = this.$route.params.searchtext
    this.getScore()
    this.getVolume()
  },
  methods: {
    rowClass () {
      return {
        'height': '30px;',
        'background-color': 'red'
      }
    },
    handleClick (tab, event) {
      console.log(tab.name, event)
    },
    scoreJump (row, column, cell, event) {
      console.log(row)
      this.$router.push(`/page/score/${row.id}`)
    },
    volumeJump (row, column, cell, event) {
      this.$router.push(`/page/volume/${row.id}`)
    },
    userJump (row, column, cell, event) {
      this.$router.push(`/page/user/${row.id}`)
    },
    querySearchAsync (row, column, cell, event) {
      console.log(row)
    },
    handleSelect () {
      // console.log('aaaa')
      this.$router.push(`/page/searchres/${this.searchText}`)
    },
    getScore () {
      this.$http({
        method: 'post',
        url: systemUrl.getScore,
        data: {
          keyword: this.searchText
        }
      }).then(res => {
        if (res.status === 200) {
          console.log('拉取成功：', res.data)
          this.scoreData.splice(0, this.scoreData.length, ...res.data)
        } else {
          this.$message({
            showClose: true,
            duration: 2000,
            message: res.data.message,
            type: 'error'
          })
        }
      })
      .catch((res) => {
        this.$message({
          showClose: true,
          duration: 2000,
          message: '请求失败',
          type: 'error'
        })
      })
    },
    getVolume () {
      this.$http({
        method: 'post',
        url: systemUrl.getVolume,
        data: {
          keyword: this.searchText
        }
      }).then(res => {
        if (res.status === 200) {
          console.log('拉取成功：', res.data)
          this.volumeData.splice(0, this.volumeData.length, ...res.data)
        } else {
          this.$message({
            showClose: true,
            duration: 2000,
            message: res.data.message,
            type: 'error'
          })
        }
      })
      .catch((res) => {
        this.$message({
          showClose: true,
          duration: 2000,
          message: '请求失败',
          type: 'error'
        })
      })
    },
    getUser () {
      this.$http({
        method: 'post',
        url: systemUrl.getUser,
        data: {
          keyword: this.searchText
        }
      }).then(res => {
        if (res.status === 200) {
          console.log('拉取成功：', res.data)
          this.scoreData.splice(0, this.userData.length, ...res.data)
        } else {
          this.$message({
            showClose: true,
            duration: 2000,
            message: res.data.message,
            type: 'error'
          })
        }
      })
      .catch((res) => {
        this.$message({
          showClose: true,
          duration: 2000,
          message: '请求失败',
          type: 'error'
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "src/assets/style.scss";
.searchRes {
  .bannder {
    height: 200px;
    width: 100%;
    background: url("./bg.jpg") 0% 78% /100% auto no-repeat;
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
    .otherScoreListDiv {
      min-height: 600px;
      max-height: 1120px;
      overflow: auto;
    }
        .copies {
      width: 20%;
    }
    .block {
      background-color: transparent;
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
.searchRes input {
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
.searchRes input:hover {
  border-color: #f29a58;
}
.searchRes input:focus {
  border-color: rgb(242, 103, 98);
}
.el-table__header tr,
  .el-table__header th {
    padding: 0;
    height: 40px;
}
.el-table__body tr,
  .el-table__body td {
    padding: 0;
    height: 40px;
}
</style>
