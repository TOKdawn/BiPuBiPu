<template>
  <div class="articleList">
    <div
      class="card"
      v-for="(item,index) in pageIndex[page]"
      :key="index"
    >
      <h2 class="title" @click="jump(item)">{{allDate[item].title}}</h2>

      <p class="moreInfo">Time: {{allDate[item].time}} &nbsp; Uploader: DawninShadow</p>
    </div>
    <div class=" page ">
      <div class="prev" v-show="prevFlag" @click.stop="prev()">上一页</div>
      <div class="next" v-show="nextFlag" @click.stop="next()">下一页</div>
    </div>
  </div>

</template>

<script>
import { articleDate } from './artucle.js'
export default {
  data () {
    return {
      page: 0,
      pageIndex: [
        ['bapu', 'vcYueli', 'fuyin', 'kouqin', 'xiangdao', 'kunshu'],
        ['rumen']
      ],
      allDate: '',
      prevFlag: false,
      nextFlag: true

    }
  },
  created () {
    this.allDate = articleDate
  },
  methods: {
    jump (keyword) {
      this.$router.push({name: 'article', params: { Atitle: keyword }})
    },
    prev () {
      this.page--
      if (this.page === 0) {
        this.prevFlag = false
        this.nextFlag = true
      }
    },
    next () {
      this.page++
      if (this.page === 1) {
        this.prevFlag = true
        this.nextFlag = false
      }
    }

  }
}
</script>
<style scoped lang="scss" >
.articleList {
  color: #5a5a5a;
  padding: 40px 6% 0px 6%;
  .card {
    background: #fff;
    padding: 45px 55px;
    margin-bottom: 40px;
    .moreInfo {
      color: #aaa;
      padding: 15px 0px 0px 5px;
    }
    .title {
      color: #648691;
      font-size: 26px;
      font-weight: normal;
      margin-bottom: 0.8em;
      display: inline-block;
      position: relative;
      cursor: pointer;
      &:hover {
        color: #444;
      }
      &:hover::after {
        left: 0;
        width: 100%;
        -webkit-transition: width 350ms;
        -moz-transition: width 350ms;
        transition: width 350ms;
      }
      &::after {
        content: "";
        position: absolute;
        border-bottom: 1px solid #444;
        bottom: -5px;
        left: 100%;
        width: 0;
        -webkit-transition: width 350ms, left 350ms;
        -moz-transition: width 350ms, left 350ms;
        transition: width 350ms, left 350ms;
      }
    }
  }
  .page {
    padding: 0 !important;
    background: #fff;

    margin-bottom: 40px;
    &::after {
      content: "";
      display: block;
      height: 0;
      visibility: hidden;
      clear: both;
    }
    .next {
      display: inline-block;
      float: right;
      padding: 25px 55px;
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover {
        background: #00bdff;
        color: #fff;
        text-decoration: none;
      }
    }
    .prev {
      display: inline-block;
      float: left;
      padding: 25px 55px;
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover {
        background: #00bdff;
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>
