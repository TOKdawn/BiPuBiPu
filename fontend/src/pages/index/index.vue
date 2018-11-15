<template>
  <div class="index">
    <header>
      <div class="banner">
        <div class="navbox">
          <div class="container">
            <div class="nav">
              <div class="item">
                <a href='/about/about/'>
                  <div class="butn"><i class="el-icon-edit"></i>
                    <p>概况</p>
                  </div>
                </a>
                <div class="dropdown">
                  
                </div>
              </div>
              <div class="item">
                <a href="http://news.neusoft.edu.cn/">
                  <div class="butn"><i class="el-icon-delete"></i>
                    <p>新闻</p>
                  </div>
                </a>
              </div>
              <div class="item">
                <a href="/schools&departments/">
                  <div class="butn"><i class="el-icon-edit"></i>
                    <p>院系</p>
                  </div>
                </a>
                <div class="dropdown">
                  
                </div>
              </div>
              <div class="item">
                <a href="/2016/1025/6947.shtml">
                  <div class="butn"><i class="el-icon-edit"></i>
                    <p>部门</p>
                  </div>
                </a>
              </div>
              <div class="item">
                <a href="/adademics/">
                  <div class="butn"><i class="el-icon-edit"></i>
                    <p>人才培养</p>
                  </div>
                </a>
                <div class="dropdown">
                </div>
              </div>
              <div class="item">
                <a href="/admissions&employmen/">
                  <div class="butn"><i class="el-icon-edit"></i>
                    <p>招生就业</p>
                  </div>
                </a>
                <div class="dropdown">

                </div>
              </div>
              <div class="item">
                <a href="#">
                  <div class="butn"><i class="el-icon-edit"></i>
                    <p>校园生活</p>
                  </div>
                </a>
                <div class="dropdown">

                </div>
              </div>
              <div class="item">
                <a href="#">
                  <div class="butn"><i class="icon-paper-plane"></i>
                    <p>公共服务</p>
                  </div>
                </a>
                <div class="dropdown">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
// import {mapState} from 'vuex'
// import { getEnumData, ttTempManage } from 'common/urls'
// import { URL, API_SUCCESS } from 'common/urls'
export default {
  data () {
    return {}
  },
  created () {},
  mounted () {},

  filters: {},
  methods: {},
  components: {}
}
</script>
<style lang="scss" scoped>
$--bannerImg: url("./banner.jpg");
.index {
  // border: 5px solid #ccc;
  .container {
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }
  header {
    .banner {
      width: 100%;
      height: 600px;
      background: $--bannerImg 0 0 /100% auto no-repeat;
      position: relative;
    }
    .navbox {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 6000;
      width: 100%;
      text-align: right;
      height: 130px;
      .nav {
        display: inline-block;
        .item {
          float: left;
          text-align: center;
          &:hover {
            .butn {
              opacity: 1;
              margin: 0px;
              &::after {
                height: 130px;
              }
            }
            .dropdown {
              height: 220px;
              opacity: 1;
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
              opacity: 0.8;
              transition: 0.5s all;
              z-index: -1;
              height: 0;
            }
            i {
              width: 35px;
              font-size: 35px;
              text-align: center;
              color: #fff;
            }
            p {
              padding-top: 15px;
              color: rgba(255, 255, 255, 1);
              font-size: 12px;
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
            z-index: 7777;
            overflow: hidden;
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
      }
    }
    .button_bar {
      width: 100%;
      height: 15vh;
      background-color: rgba(250, 80, 54, 0.9);
      // rgba(255, 111, 67, 0.9);
      font-size: 16px;
      z-index: 888;
      .dropdown {
        position: fixed;
        left: 0;
        width: 100vw;
        transform: translateY(-100%);
        height: 0;
        z-index: 7777;
        overflow: hidden;
        transition: 0.5s all 0.2s;
        color: #fff;
        background-color: rgba(255, 255, 255, 0.9);
        opacity: 0;
      }
      .home_button {
        opacity: 1;
        transition: 0.3s all;
        height: 15vh;
        cursor: pointer;
        position: relative;
        box-sizing: border-box;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          opacity: 1;
          transition: 0.5s all;
          z-index: -1;
          height: 0;
        }
        &:hover:after {
          height: 100%;
        }
        &:hover {
          .dropdown {
            height: 450px;
            opacity: 1;
            &:hover {
              background-color: #fff;
            }
          }
        }
        .item {
          top: 50%;
          text-align: center;
          position: relative;
          transform: translateY(-50%);
          color: #fff;
          font-size: 1.1em;
        }
        i {
          font-size: 1.2em;
        }
      }
    }
  }
}
</style>
