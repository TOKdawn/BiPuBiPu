<template>
  <div class="score">
    <div class="title">
      谱册<span>/</span>
      <router-link to="/page/volumeList">More</router-link>
    </div>
    <div>
      <div style="display: flex; flex-wrap: wrap;">
        <div
          class="threeBar"
          v-for="(item, index) in nodeData"
          :key="index">
          <div class="node">
            <img
              :src="item.img"
              :alt="item.title"
              class="img">
            <h2> {{item.title}}</h2>
            <p>{{item.describe}}</p>
            <ul>
              <li
                v-for="(subItem, subIndex) in item.list"
                :key="subIndex">
                {{subItem.title}}
              </li>
            </ul>
            <div class="hide"></div>
            <div class="star">{{item.star}}</div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>
<script>
import { Score } from 'common/urls'
export default {
  data () {
    return {
      nodeData: [
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
        }
      ]
    }
  },
  methods: {

  },
  created () {
    this.$http({
      method: 'get',
      url: Score.getAllScore
    })
  }

}
</script>
<style lang="scss" scoped>
@import "src/assets/style.scss";
.title {
  font-size: $--FontSizeXXXL;
  font-weight: 700;
  letter-spacing: 0.2em;
  margin-bottom: 30px;
  color: $--darkFontColor;
  span {
    color: $--shallowFontColor;
    font-weight: 400;
    font-size: $--FontSizeXXL;
    margin-left: 5px;
  }
  a {
    font-size: $--FontSizeL;
    margin-left: 5px;
    color: $--shallowFontColor;
    font-weight: 400;
    transition: all 0.4s;
    &:hover {
      color: $--activeColor;
    }
  }
}
.score {
  width: 100%;
  padding: 50px 10%;
  position: relative;
  // height: 700px;
  background-color: $--scoreListBgColor;
  .threeBar {
    padding: 0px 15px 0px 65px;
    .node {
      cursor: pointer;
      margin-bottom: 60px;
      height: 150px;
      width: 100%;
      background-color: $--scoreListColor;
      padding-left: 65px;
      &:hover {
        background-color: $--scoreListActiveColor;
        .hide {
          background-color: $--scoreListActiveColor;
        }
      }
      img {
        position: absolute;
        margin: 25px 0px 0px -115px;
        width: 100px;
        height: 100px;
      }
      h2 {
        padding-top: 15px;
        font-size: $--basicFontSize;
        font-weight: 600;
      }
      p {
        font-size: $--FontSizeXXM;
      }
      ul {
        margin-top: 10px;
        height: 60px;
        overflow: auto;
        z-index: 1;
      }
      .star {
        float: right;
        margin-top: -147px;
        margin-right: 15px;
        font-size: $--FontSizeXXL;
        font-weight: 600;
      }
      .hide {
        background-color: $--scoreListColor;
        float: right;
        display: block;
        position: relative;
        width: 20px;
        height: 60px;
        margin-top: -60px;
        z-index: 2;
      }
    }
  }
}
</style>
