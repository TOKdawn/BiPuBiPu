<template>
  <div class="information">
    <div class="title">
      资讯<span>/</span>
      <router-link to="/index">More</router-link>
    </div>
    <div class="left">
      <el-carousel
        indicator-position="outside"
        class="carousel"
        height="400px">
        <el-carousel-item
          v-for="(item, index) in informationCarousel"
          :key="index">
          <div class="carouselImg"><img
              :src="item.img"
              style="width: 100%; height: auto;"
              @click="$router.push(item.router)"
            ></div>
          <h2 @click="$router.push(item.router)">{{item.title}}</h2>
          <p @click="$router.push(item.router)">{{item.describe}}</p>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="right">
      <div style="display: flex;flex-wrap: wrap;">
        <div class="articles" v-for="(item,index) in articlesData" :key="index"> 
          <div class="line"></div>
          <h2 @click="$router.push({name: 'article', params: { Atitle: item.router }})">{{item.title}}</h2>
          <p>{{item.time}} / {{item.author}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      informationCarousel: [
        {
          img:
            'http://bipu.oss-cn-beijing.aliyuncs.com/egg-multipart-test/186950-102.jpg',
          title: '新手曲目推荐',
          describe:
            '来加入口琴大家庭吧',
          router: '/page/volume/13'
        },
        {
          img:
            'http://bipu.oss-cn-beijing.aliyuncs.com/egg-multipart-test/185894-102.jpg',
          title: '全部乐谱',
          describe:
            '传说这里是王的宝库，最古老的用户，把一切谱子都存在这里',
          router: '/page/volume/1'
        },
        {
          img:
            'http://bipu.oss-cn-beijing.aliyuncs.com/egg-multipart-test/187506-102.jpg',
          title: 'Key社',
          describe:
            '自古Key社出神作',
          router: '/page/volume/12'
        }
      ],
      articlesData: [{
        title: '【哔谱实验室】机器能够学会扒谱吗？',
        router: 'bapu',
        time: '2019-3-11',
        author: 'TOKdawn'
      }, {
        title: 'VCの扒谱、乐理教学',
        router: 'vcYueli',
        time: '2019-3-11',
        author: 'TOKdawn'
      }, {
        title: '新手向导，咱肯定不是无聊才写这些的喵~~~！',
        router: 'xiangdao',
        time: '2019-3-11',
        author: 'TOKdawn'
      }, {
        title: '昆叔教你修按键',
        router: 'kunshu',
        time: '2019-3-11',
        author: 'TOKdawn'
      }, {
        title: '复音口琴acg向指南',
        router: 'fuyin',
        time: '2019-3-11',
        author: 'TOKdawn'
      }, {
        title: '我一路走过来的二年口琴生涯总结',
        router: 'kouqin',
        time: '2019-3-11',
        author: 'TOKdawn'
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
.information {
  padding: 50px 10%;
  position: relative;
  background-color: #fff;
  .carousel {
    font-weight: 400;
    cursor: pointer;
    .carouselImg {
      height: 80%;
      overflow: hidden;
    }
    h2 {
      font-size: $--FontSizeL;
      font-weight: 450;
      color: $--darkFontColor;
      line-height: $--FontSizeXXXL;
      margin-top: 5px;
      transition: all 0.4s;
      &:hover {
        color: $--activeColor;
      }
    }
    p {
      font-size: $--FontSizeM;
      color: $--shallowFontColor;
    }
  }
  .articles{
    flex: 1 1 50%;
    padding: 20px 20px 50px 0px;
    &:hover{
      .line {
        width: 60%;
      }
      h2{
        color: $--activeColor;
      }
    }
    .line {
      width: 35%;
      height: 2px;
      background-color: $--darkColor;
      margin-top: -20px;
      display: block;
      transition: all .3s;
    }
    h2 {
      margin-top: 20px;
      font-size: $--basicFontSize;
      height: 44px;
      font-weight: 500;
      color:$--darkFontColor;
      transition: all .5s;
      cursor: pointer;
    }
    p{
      font-size: $--FontSizeM;
      margin-top:10px;
      font-weight:400;
      color: $--shallowFontColor;
    }

  }
}
</style>
