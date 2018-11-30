<template>
  <div class="scoreList">
    <el-radio-group
      v-model="radio3"
      size="small"
      style="margin:20px 0px 15px 0px;"
    >
      <el-radio-button label="推荐"></el-radio-button>
      <el-radio-button label="最新"></el-radio-button>
      <el-radio-button label="全部"></el-radio-button>
    </el-radio-group>
    <div
      class="myScoreList"
      v-if="login"
    >
      <h2>我的谱册</h2>
      <div class="line"></div>
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
    <div :class="{ 'allSocreList': !login, 'otherSocreList':login }">
      <h2>全部谱册</h2>
      <div class="line"></div>
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
  </div>
</template>
<script>
export default {
  data () {
    return {
      myScoreList: [
        {
          img:
            'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/185998-102.jpg',
          title: '东方谱册',
          star: '100',
          describe: '一个谱册的介绍',
          list: [
            {
              title: '谱子1',
              id: '121'
            },
            {
              title: '谱子2',
              id: '122'
            },
            {
              title: '谱子3',
              id: '123'
            },
            {
              title: '谱子4',
              id: '124'
            },
            {
              title: '谱子5',
              id: '125'
            }
          ]
        },
        {
          img:
            'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/186146-102.jpg',
          title: '东方谱册',
          star: '100',
          describe: '一个谱册的介绍',
          list: [
            {
              title: '谱子1',
              id: '121'
            },
            {
              title: '谱子2',
              id: '122'
            },
            {
              title: '谱子3',
              id: '123'
            },
            {
              title: '谱子4',
              id: '124'
            },
            {
              title: '谱子5',
              id: '125'
            }
          ]
        },
        {
          img:
            'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/186139-102.jpg',
          title: '东方谱册',
          star: '100',
          describe: '一个谱册的介绍',
          list: [
            {
              title: '谱子1',
              id: '121'
            },
            {
              title: '谱子2',
              id: '122'
            },
            {
              title: '谱子3',
              id: '123'
            },
            {
              title: '谱子4',
              id: '124'
            },
            {
              title: '谱子5',
              id: '125'
            }
          ]
        },
        {
          img:
            'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/186036-102.jpg',
          title: '东方谱册',
          star: '100',
          describe: '一个谱册的介绍',
          list: [
            {
              title: '谱子1',
              id: '121'
            },
            {
              title: '谱子2',
              id: '122'
            },
            {
              title: '谱子3',
              id: '123'
            },
            {
              title: '谱子4',
              id: '124'
            },
            {
              title: '谱子5',
              id: '125'
            }
          ]
        },
        {
          img:
            'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/185998-102.jpg',
          title: '东方谱册',
          star: '100',
          describe: '一个谱册的介绍',
          list: [
            {
              title: '谱子1',
              id: '121'
            },
            {
              title: '谱子2',
              id: '122'
            },
            {
              title: '谱子3',
              id: '123'
            },
            {
              title: '谱子4',
              id: '124'
            },
            {
              title: '谱子5',
              id: '125'
            }
          ]
        },
        {
          img:
            'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/186026-102.jpg',
          title: '东方谱册',
          star: '100',
          describe: '一个谱册的介绍',
          list: [
            {
              title: '谱子1',
              id: '121'
            },
            {
              title: '谱子2',
              id: '122'
            },
            {
              title: '谱子3',
              id: '123'
            },
            {
              title: '谱子4',
              id: '124'
            },
            {
              title: '谱子5',
              id: '125'
            }
          ]
        }
      ],
      login: true,
      radio3: '全部'
    }
  },
  components: {}
}
</script>
<style lang="scss" scoped>
@import "src/assets/style.scss";
.scoreList {
  padding: 0px 6%;
  min-width: 1024px;
  overflow: hidden;
  .otherSocreList {
    width: 100%;
    height: 600px;
    padding-right: 20%;
  }
  .allSocreList {
    width: 100%;
    height: 600px;
  }
  .myScoreList {
    width: 20%;
    height: 600px;
    float: right;
    margin-top: 67px;
    text-align: right;
    h2 {
      border-bottom: $--activeColor 2px solid;
    }
    .line {
      background-color: $--activeColor;
    }
  }
  h2 {
    border-bottom: $--basicColor 2px solid;
    display: inline;
    font-size: $--FontSizeL;
    font-weight: 500px;
    padding-bottom: 3px;
    color: #444;
  }
  .line {
    width: 100%;
    height: 1px;
    background-color: $--basicColor;
  }
  .copies{
    display: inline-block;
    width: 20%;

  }
}
</style>
