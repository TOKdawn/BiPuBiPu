<template>
  <div class="index">
    <div class="banner">
      <div class="navbox">
        <div class="container">
          <div class="title-info">
            <p>一个兴趣使然的口琴小站</p>
            <p>A station in the interest of the harmonica</p>
          </div>
          <div class="nav">
            <div class="item">
              <a href=''>
                <div class="butn"><i class="iconfont icon-zhuye"></i>
                  <p>主页</p>
                </div>
              </a>
            </div>
            <div class="item">
              <router-link :to="{ name: 'scorelist'}">
                <div class="butn"><i class="iconfont icon-shu"></i>
                  <p>谱册</p>
                </div>
              </router-link>
            </div>
            <div class="item">
              <router-link :to="{ name:'articleList'} ">
                <div class="butn"><i class="iconfont icon-shujia1"></i>
                  <p>文章</p>
                </div>
              </router-link>
              <!-- <div class="dropdown">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6"></el-col>
                  <el-col :span="6"></el-col>
                  <el-col :span="6"></el-col>
                </el-row>
              </div> -->
            </div>
            <div class="item">
              <router-link :to="{ name: 'translator'}">
                <div class="butn"><i class="iconfont icon-suiji"></i>
                  <p>转谱</p>
                </div>
              </router-link>
            </div>
            <div class="item">
              <router-link :to="{ name: 'volume',  params: { vid: '123' }}">
                <div class="butn"><i class="iconfont icon-guanyu"></i>
                  <p>关于</p>
                </div>
              </router-link>
            </div>
            <div class="item">
              <div
                class="butn"
                @click="jump(6)"
              ><i class="iconfont icon-xiazai"></i>
                <p>下载</p>
              </div>
            </div>
            <div class="item">
              <router-link
                :to="{ name: 'login'}"
                v-show="userRole == 0"
              >
                <div class="butn"><i class="iconfont icon-denglu"></i>
                  <p>登录</p>
                </div>
              </router-link>
              <div
                class="butn"
                @click="jump(7)"
                v-show="userRole !== 0"
              ><i class="iconfont icon-denglu"></i>
                <p>个人中心</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top:500px; z-index:10; postion:relative; ">
      <div class="searchBar">
        <p
          class="upload"
          @click=" $router.push({name: 'upload'})"
        >发布曲谱 ＼_(･ω･`)ｺｺ</p>
        <Search></Search>
      </div>
      <Information></Information>
      <ScoreList></ScoreList>
      <Other></Other>
      <Foot></Foot>
    </div>
  </div>
</template>
<script>
// import {mapState} from 'vuex'
// import { getEnumData, ttTempManage } from 'common/urls'
// import { URL, API_SUCCESS } from 'common/urls'
import Search from '../search/search'
import Information from './components/information'
import ScoreList from './components/scoreList'
import Other from './components/other'
import Foot from '../layout/footer'
import store from 'vux/store.js'
import { System } from 'common/urls'
export default {
  data () {
    return {
      userRole: 0,
      userId: 123
    }
  },
  created () {
    this.$http({
      method: 'get',
      url: System.checkUser
    })
      .then(res => {
        if (res.status === 200) {
          console.log('用户已登录', res.data)
          store.commit('uploadUserData', res.data.data)
          this.userRole = store.getters.role
          this.userId = store.getters.phone
        }
      })
      .catch(() => {
        store.commit('logout')
      })
    console.log(store.state)
  },
  methods: {
    jump (type) {
      switch (type) {
        case 7:
          this.$router.push({ name: 'user', params: { uid: this.userId } })
          break
        case 6:
          this.$router.push({ name: 'score', params: { scoreid: 123 } })
          break
      }
    }
  },
  filters: {},
  components: {
    Search,
    Information,
    ScoreList,
    Other,
    Foot
  }
}
</script>
<style lang="scss" scoped>
@import "src/assets/style.scss";
.index {
  // min-width: 1200px;
  width: 100%;
  .container {
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }
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
  .banner {
    width: 100%;
    height: 500px;
    background: $--bannerImg 0 0 /100% auto no-repeat;
    position: fixed;
    top: 0px;
    z-index: 0;
    .navbox {
      box-sizing: border-box;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 6;
      width: 100%;
      text-align: right;
      height: 130px;
      background-color: rgba(0, 0, 0, 0.4);
      padding: 0px 10%;
      .title-info {
        float: left;
        text-align: left;
        p {
          font-size: $--FontSizeXXL;
          color: #fff;
          margin-top: 30px;
        }
        p + p {
          font-size: 18px;
          margin-top: 4px;
        }
      }
      .nav {
        display: inline-block;
        opacity: 1;
        margin-top: 1px;
        .item {
          float: left;
          text-align: center;
          transition: all 0.4s;
          &:hover {
            .butn {
              opacity: 1;
              margin: 0px;
              cursor: pointer;
              &::after {
                height: 130px;
              }
            }
            .dropdown {
              height: 220px;
              opacity: 1;
              transition: all 0.4s;
              &:hover {
                background-color: rgba(0, 0, 0, 0.7);
              }
            }
          }
          .butn {
            position: relative;
            box-sizing: border-box;
            padding: 30px 0;
            width: 80px;
            opacity: 0.8;
            transition: 0.3s all;
            &::after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              width: 80px;
              height: 0;
              background-color: #1f8dd6;
              opacity: 0.9;
              transition: 0.5s all;
              z-index: -1;
              height: 0;
            }
            i {
              width: 35px;
              font-size: $--FontSizeXL;
              text-align: center;
              color: #fff;
            }
            p {
              padding-top: 15px;
              color: rgba(255, 255, 255, 1);
              font-size: $--FontSizeXM;
              font-weight: bolder;
            }
          }
          .dropdown {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            transform: translateY(-100%);
            height: 0;
            z-index: 7;
            transition: 0.5s all 0.2s;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.4);
            opacity: 0;
            // height: 220px;
          }
        }
        .item:nth-child(1) .butn::after {
          background-color: #f44336;
        }
        .item:nth-child(2) .butn::after {
          background-color: #9c27b0;
        }
        .item:nth-child(3) .butn::after {
          background-color: #448aff;
        }
        .item:nth-child(4) .butn::after {
          background-color: #00bcd4;
        }
        .item:nth-child(5) .butn::after {
          background-color: #4caf50;
        }
        .item:nth-child(6) .butn::after {
          background-color: #cddc39;
        }
        .item:nth-child(7) .butn::after {
          background-color: #795548;
        }
      }
    }
  }
  .searchBar {
    background-color: #f5f5f6;
    width: 100%;
    padding: 0px 12%;
    text-align: right;
    position: relative;

    .upload {
      float: left;
      line-height: 62px;
      font-weight: 600;
      font-size: 18px;
      color: $--activeColor;
      cursor: pointer;
    }
  }
}
</style>
<style >
.index .searchBar input {
  background-color: transparent !important;
}
</style>
