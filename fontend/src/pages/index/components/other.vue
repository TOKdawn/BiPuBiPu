<template>
  <div class="other">
    <div class="threeBar">
      <div class="title">
        月刊<span>/</span>
        <router-link to="/index">More</router-link>
      </div>
      <div class="weekly" v-for="(item, index) in weeklyData" :key="index">
        <div class="date">
          <p>{{item.day}}</p>
          <p>{{item.year}}</p>
        </div>
        <h2>{{item.title}}</h2>
      </div>
    </div>
    <div class="threeBar">
      <div class="title">
        排行<span>/</span>
        <router-link to="/index">More</router-link>
      </div>
    </div>
    <div class="threeBar">
      <div class="title">
        待定<span>/</span>
        <router-link to="/index">More</router-link>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      weeklyData: [{
        title: '哔谱哔谱口琴月排行榜#哔谱哔谱口琴月排行榜哔谱哔谱口琴月排行榜哔谱哔谱口琴月排行榜1',
        day: '28',
        year: '2018 11',
        router: '/index'
      }, {
        title: '哔谱哔谱口琴月排行榜#1',
        day: '28',
        year: '2018 11',
        router: '/index'
      }, {
        title: '哔谱哔谱口琴月排行榜#1',
        day: '28',
        year: '2018 11',
        router: '/index'
      }, {
        title: '哔谱哔谱口琴月排行榜#1',
        day: '28',
        year: '2018 11',
        router: '/index'
      }]
    }
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
.other {
  width: 100%;
  padding: 50px 10%;
  position: relative;
  background-color: #f5f5f6;
  vertical-align: top;
  display: flex;
  flex-wrap: wrap;
  .weekly{
    margin-bottom: 25px;
    .date{
      padding: 8px 5px;
      background-color: $--darkColor;
      width: 65px;
      float: left;
      text-align: center;
      p{
        font-size: $--FontSizeXL;
        color: #f5f5f6;
      }
      p+p{
        font-size: $--FontSizeM
      }
    }
    h2{
      width: 100%;
      // background-color: aqua;
      height: 73px;
      padding: 0px 20px 0px 80px;
      font-size: $--basicFontSize;
      font-weight: 500;
      transition: all .5s;
      cursor: pointer;
      &:hover {
        color: $--activeColor;

      }
    }
  }
}
</style>
