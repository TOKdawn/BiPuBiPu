<template>
  <div class="main-context">
    <!-- <el-radio-group
      v-model="radio3"
      size="small"
      style="margin:20px 0px 15px 0px;"
    >
      <el-radio-button label="推荐"></el-radio-button>
      <el-radio-button label="最新"></el-radio-button>
      <el-radio-button label="全部"></el-radio-button>
    </el-radio-group> -->
    <!-- <div
      class="myScoreList"
      v-if="login"
    >
      <h2>我的谱册</h2>
      <div class="line"></div>
      <div class="myScoreListDiv">
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
    </div> -->
    <div :class="{ 'allSocreList': !login, 'otherSocreList':login }">
      <h2>全部谱册</h2>
      <div class="line"></div>
      <div class="otherScoreListDiv">
        <div
          class="copies"
          v-for="(item,index) in allScoreList"
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
    </div>
    <!-- <el-pagination
      background
      layout="prev, pager, next"
      :total="50"
      class="pagination"
    >
    </el-pagination> -->
  </div>
</template>
<script>
import { Volume } from 'common/urls'
export default {
  data () {
    return {
      myScoreList: [],
      allScoreList: [],
      login: false,
      radio3: '全部',
      DEFAULTOFFSET: '',
      DEFAULTVOLUMEPAGESIZE: ''
    }
  },
  mounted () {
    this.$http({
      method: 'get',
      url: Volume.getVolumeList
    })
      .then(res => {
        if (res.status === 200) {
          this.allScoreList.splice(0, 0, ...res.data.data)
        //   console.log(res.data.data)
        } else {
          this.$message({
            showClose: true,
            duration: 2000,
            message: res.data.message,
            type: 'error'
          })
        }
      })
      .catch(res => {
        this.$message({
          showClose: true,
          duration: 2000,
          message: '请求失败',
          type: 'error'
        })
      })
  },
  components: {}
}
</script>
<style lang="scss" scoped>
@import "src/assets/style.scss";
.main-context {
  .otherSocreList {
    width: 100%;
    padding-right: 20%;
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
  }
  .allSocreList {
    width: 100%;
    min-height: 600px;
    // padding-right: 20%;
    margin-bottom: 100px;
     .copies {
      width: 20%;
    }

  }
  .pagination {
    height: 33px;
    text-align: center;
    position: absolute;
    left: 30%;
    margin-top: -60px;
  }
  .myScoreList {
    width: 20%;
    float: right;
    margin-top: 67px;
    text-align: right;
    height: 1200px;
    .myScoreListDiv {
      min-height: 600px;
      max-height: 1120px;
      overflow: auto;
    }
    h2 {
      border-bottom: $--activeColor 2px solid;
    }
    .line {
      background-color: $--activeColor;
    }
    .copies {
      width: 100%;
    }
  }
  .copies {
    display: inline-block;
    text-align: center;
    margin-top: 20px;
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
      padding: 0px 15px;
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
  h2 {
    border-bottom: $--basicColor 2px solid;
    display: inline;
    font-size: $--FontSizeL;
    font-weight: 500;
    padding-bottom: 3px;
    color: #444;
  }
  .line {
    width: 100%;
    height: 1px;
    margin-top: 2px;
    background-color: $--basicColor;
  }
}
</style>
