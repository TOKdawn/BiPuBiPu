<template>
  <div class="score">
    <div class="main-context">
      <div>
        <img
          :src="scoreData.img"
          alt=""
          style="width:250px; height:250px; float:left;"
        >
        <div class="score-info">
          <h1>{{scoreData.name}}-{{scoreData.addtion}}</h1>
          <div class="uploader">@{{scoreData.author}}</div>
          <ul>
            <li>专辑: {{scoreData.album}}</li>
            <li>作者: {{scoreData.uploader}}</li>
            <li>上传时间: {{scoreData.update}}</li>
            <li>别名: {{scoreData.otherName}}</li>
          </ul>
          <p>标签:</p>
          <el-row style="margin-top:15px;">
            <el-button type="primary" size="small" icon="el-icon-star-off">收藏曲谱</el-button>
            <el-button type="success" size="small" icon="el-icon-plus" plain>加至歌单</el-button>
            <el-button  size="small" plain icon="el-icon-more-outline">更多功能</el-button>
          </el-row>
        </div>
        <div class="score-context">
          <div class="context">
            <div class="avatar">
              <img :src="scoreData.img" alt="" style="width:100%;height:100%; z-index:1;">
            </div>
            <div class="translator-button-one">
              升一调
            </div>
            <div class="translator-button-two">
              降一调
            </div>
            <div class="translator-button-thr">
              转BD
            </div>
            <div class="translator-button-fou">
              转数字
            </div>
            <div class="score-type">
              <p>图片简谱</p>
              <p>外链线谱</p>
            </div>
            <el-card class="box-card">
              (#4)(#4) #2#1#2#4#1<br>
              (#4)(#4)(#5)(7)(7)(#5)(#4)<br>
              (7)#1#2#1#2#5#4#2<br>
              #2#23#2#1(7)#2#1 (#4)(#4) #2#1#2#4#1<br>
              (#4)(#4)(#5)(7)(7)(#5)(#4)<br>
              (7)#1#2#1#2#5#4#2<br>
              #2#23#2#1(7)(7) (#5)(7)#4 3#2#1#1(7)(#6)(7)<br>
              (#5)(7)#4#5#43#2#1#2<br>
              (#5)(#5)#5#67#6#5#4#4<br>
              #56#5#43#2(7)(7)<br>
              (#5)(7)#55#5#6 #2#27#67#67 #67#6 #5#4#5[#2][#2]<br>
              #67[#1]#6#5#5#4#4<br>
              #23#4#433#5#4#2#1(7)<br>
              (#5)(7)#433#5#55#5#6 #2#27#67#67 #67#6 #5#4#5[#2][#2]<br>
              #67[#1]#6#5#5#4#4[#1]7<br>
              #23#4#433#4#2#1(7) (7)#5#57#67[#1]#6#4#2#4#5<br>
              #43#23#23#2#1(7)#1(7)#1#4#2<br>
              (7)#5#57#67[#1]#6#4#4[#1]7#67<br>
              #5#67#67#67#5#677[#1][#1][#2][3][#2] #2#27#67#67 #67#6 #5#4#5[#2][#2]<br>
              #67[#1]#6#5#5#4#4<br>
              #23#4#433#5#4#2#1(7)<br>
              (#5)(7)#433#5#55#5#6 #2#27#67#67 #67#6 #5#4#5[#2][#2]<br>
              #67[#1]#6#5#5#4#4[#1]7<br>
              #23#4#433#5#4#2#1(7)<br>
              (#5)(7)#433#5#55#5#6 #2#27#67#67 #67#6 #5#4#5[#4][3]<br>
              #67[#1]#6#5#5#4#4[#1]#67<br>
              #23#4#433#5#4#2#1(7)<br>
              (#5)(7)#433#5#477<br>
              #1#23#23#4#2#1(7) (#6)(#4)<br>
            </el-card>
          </div>
          <div class="info">
            <div>
              <h2>
                简介
              </h2>
              <p>
              </p>
            </div>
            <div>
              <h2>
                收藏此谱的热门谱册
              </h2>
            </div>
            <div>
              <h2>
                相关演奏视频
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      scoreData: {
        image_url: 'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/185998-102.jpg',
        name: '雪之花 雪の华',
        addtion: '',
        author: 'dawn',
        authorId: '12333',
        album: '未命名专辑',
        update: '2018-12-18',
        uploader: 'TOKdawn',
        otherName: '花花花花',
        tagList: [
          {
            tagName: '东方'
          }
        ],
        context: `谱子示例
        (#4)(#4) #2#1#2#4#1
        (#4)(#4)(#5)(7)(7)(#5)(#4)
        (7)#1#2#1#2#5#4#2
        #2#23#2#1(7)#2#1 (#4)(#4) #2#1#2#4#1
        (#4)(#4)(#5)(7)(7)(#5)(#4)
        (7)#1#2#1#2#5#4#2
        #2#23#2#1(7)(7) (#5)(7)#4 3#2#1#1(7)(#6)(7)
        (#5)(7)#4#5#43#2#1#2
        (#5)(#5)#5#67#6#5#4#4
        #56#5#43#2(7)(7)
        (#5)(7)#55#5#6 #2#27#67#67 #67#6 #5#4#5[#2][#2]
        #67[#1]#6#5#5#4#4
        #23#4#433#5#4#2#1(7)
        (#5)(7)#433#5#55#5#6 #2#27#67#67 #67#6 #5#4#5[#2][#2]
        #67[#1]#6#5#5#4#4[#1]7
        #23#4#433#4#2#1(7) (7)#5#57#67[#1]#6#4#2#4#5
        #43#23#23#2#1(7)#1(7)#1#4#2
        (7)#5#57#67[#1]#6#4#4[#1]7#67
        #5#67#67#67#5#677[#1][#1][#2][3][#2] #2#27#67#67 #67#6 #5#4#5[#2][#2]
        #67[#1]#6#5#5#4#4
        #23#4#433#5#4#2#1(7)
        (#5)(7)#433#5#55#5#6 #2#27#67#67 #67#6 #5#4#5[#2][#2]
        #67[#1]#6#5#5#4#4[#1]7
        #23#4#433#5#4#2#1(7)
        (#5)(7)#433#5#55#5#6 #2#27#67#67 #67#6 #5#4#5[#4][3]
        #67[#1]#6#5#5#4#4[#1]#67
        #23#4#433#5#4#2#1(7)
        (#5)(7)#433#5#477
        #1#23#23#4#2#1(7) (#6)(#4)`,
        otherLink: 'www.baidu.com'
      }
    }
  },
  created () {}
}
</script>
<style lang="scss" scoped>
@import "src/assets/style.scss";
.score {
  background: linear-gradient(rgb(258, 238, 215), #ffffff);
  .score-info {
    position: relative;
    height: 250px;
    margin-top: 40px;
    margin-bottom: 35px;
    padding-left: 305px;
    h1 {
      font-size: $--FontSizeXXL;
      padding-top: 15px;
    }
    .uploader{
      font-size: $--FontSizeL;
      color: $--linkBlue;
      cursor: pointer;
    }
    ul{
      width: 450px;
      overflow: hidden;
      padding-top: 5px;
      font-size: $--FontSizeM;
      line-height: $--FontSizeL;
      li {
        float: left;
        line-height: 27px;
        width: 200px;
        margin-right: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    p{
      width: 450px;
      overflow: hidden;
      font-size: $--FontSizeM;
      line-height: $--FontSizeL;
    }
  }
  .score-context{
    padding-right: 343px;
    .context{
      // background-color: aqua;
      float: left;
      width: 100%;
      padding-bottom: 20px;
      // height: 200px;
      .avatar{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        z-index: 1;
        display: block;
        cursor: pointer;
      }
      .box-card{
        margin: -50px 0px 0px 50px;
        z-index: 10;
        display: block;
        position: relative;
      }
      .score-type{
        position:absolute;
        transform:rotate(90deg) rotateX(180deg) rotateY(180deg);
        margin-top: 70px;
        margin-left: -40px;
        font-size: 18px;
        p{
          display: inline-block;
          color: #d52484;
          transition: 1s;
          font-weight: 500;
          padding: 0 2px;
          cursor: pointer;
          &:hover{
            text-shadow: 0 0 1px, 0 0 2px;
         }
        }
      }
      .translator-button-one{
        position: absolute;
        // position: relative;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background: #d52484;
        text-align: center;
        margin: -94px 0px 0px 101px;
      }
      .translator-button-two{
        position: absolute;
        // position: relative;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #d52484;
        text-align: center;
        margin: -89px 0px 0px 191px;
      }
      .translator-button-thr{
        position: absolute;
        // position: relative;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: #d52484;
        text-align: center;
        margin: -84px 0px 0px 271px;
      }
      .translator-button-fou{
        position: absolute;
        // position: relative;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #d52484;
        text-align: center;
        margin: -79px 0px 0px 341px;
      }

    }
    .info{
      float: right;
      position: relative;
      width: 290px;
      margin-right: -343px;
      padding-bottom: 20px;
      h2{
        font-size: $--FontSizeL;
        line-height: 46px;
      }
    }
  }
}
</style>
