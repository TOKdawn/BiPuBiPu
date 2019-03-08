<template>
  <div class="searchRes">
    <div class="bannder">
      <div class="bg">

        <el-autocomplete
          v-model="searchText"
          :fetch-suggestions="querySearchAsync"
          placeholder="你又想要什么奇怪的谱子"
          @select="handleSelect"
          class="search-input"
        >
        </el-autocomplete>
        <i
          slot="prefix"
          class=" el-icon-search"
          @click="handleSelect()"
        ></i>
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
              width="120"
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
        <div style="height:800px; width:100%; text-align:center; padding-top:50px;">
          暂无数据
        </div>

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
      searchText: '',
      userCollection: [
        {
          id: 2,
          photo: null,
          name: '鳥の詩',
          addtion: '《AIR》片头曲',
          status: 1,
          visits: 0,
          created_at: '2018-07-11T09:14:04.137Z',
          updated_at: '2018-07-11T09:14:04.137Z'
        },
        {
          id: 3,
          photo: null,
          name: '鳥の詩222',
          addtion: '《AIR》片头曲',
          status: 1,
          visits: 0,
          created_at: '2018-08-06T07:10:53.202Z',
          updated_at: '2018-08-06T07:10:53.202Z'
        },
        {
          id: 4,
          photo: null,
          name: '鳥の詩333',
          addtion: '《AIR》片头曲',
          status: 1,
          visits: 0,
          created_at: '2018-08-06T07:10:57.168Z',
          updated_at: '2018-08-06T07:10:57.168Z'
        },
        {
          id: 1,
          photo: null,
          name: '鳥の詩444',
          addtion: '《AIR》片头曲',
          status: 1,
          visits: 1,
          created_at: '2018-07-11T09:13:53.001Z',
          updated_at: '2018-07-11T09:15:02.142Z'
        },
        {
          id: 4,
          photo: null,
          name: '鳥の詩333',
          addtion: '《AIR》片头曲',
          status: 1,
          visits: 0,
          created_at: '2018-08-06T07:10:57.168Z',
          updated_at: '2018-08-06T07:10:57.168Z'
        },
        {
          id: 1,
          photo: null,
          name: '鳥の詩444',
          addtion: '《AIR》片头曲',
          status: 1,
          visits: 1,
          created_at: '2018-07-11T09:13:53.001Z',
          updated_at: '2018-07-11T09:15:02.142Z'
        }
      ],
      myScoreList: [
        {
          img:
            'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/186139-102.jpg',
          title: '东ass方啊实打实大所大所大所大叔大婶大所大所大所大所谱册',
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
        }, {
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
        }, {
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
            'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/185998-102.jpg',
          title: '东ass方啊实打实大所大所大所大叔大婶大所大所大所大所谱册',
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
  components: {
    Search
  },
  created () {
    console.log('aabbbdddaa')
    console.log(this.$route.params.searchtext)
    this.searchText = this.$route.params.searchtext
  },
  methods: {
    handleClick () {},
    querySearchAsync () {},
    handleSelect () {
      // console.log('aaaa')
      this.$router.push(`/page/searchres/${this.searchText}`)
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
  border-color: #F29a58;
}
.searchRes input:focus {
  border-color: rgb(242, 103, 98);
}
</style>
