<template>
  <div class="score">
    <div class="title">
      曲谱<span>/</span>
      <router-link to="/index">More</router-link>
    </div>
    <div class="left">
      <el-carousel
        indicator-position="outside"
        class="carousel"
        height="400px">
        <el-carousel-item
          v-for="(item, index) in scoreListCarousel"
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
    <div class="right">sssssssssss </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      scoreListCarousel: [
        {
          img:
            'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/185971-102.jpg',
          title: '新手谱册推荐',
          describe:
            '这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述',
          router: '/index'
        },
        {
          img:
            'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/185979-102.jpg',
          title: '新手谱册推荐',
          describe:
            '这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述',
          router: '/index'
        },
        {
          img:
            'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/185981-102.jpg',
          title: '新手谱册推荐',
          describe:
            '这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述',
          router: '/index'
        }
      ]
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
.score {
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
}
</style>
