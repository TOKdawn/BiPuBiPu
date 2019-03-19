<template>
  <div class="score">
    <div class="main-context">
      <div>
        <img
          :src="scoreData.image_url"
          alt=""
          style="width:250px; height:250px; float:left;"
        >
        <div class="score-info">
          <h1>{{scoreData.name}}-{{scoreData.addtion}}</h1>
          <div class="uploader">@{{scoreData.author}}</div>
          <ul>
            <li>简介: {{scoreData.album}}</li>

          </ul>
          <el-row style="margin-top:15px;">
            <el-button
              type="primary"
              size="small"
              icon="el-icon-star-off"
            >收藏谱册</el-button>
            <el-button
              type="success"
              size="small"
              plain
              @click="$router.push({ name: 'editVolume',  params: { vid: '123' }})"
            >修改信息</el-button>
            <el-button
              size="small"
              plain
            >删除谱册</el-button>
          </el-row>
        </div>
        <div class="score-context">
          <div class="collection">
            <div class="title">
              <h3>谱子列表</h3>
              <p>
                <el-switch
                  v-model="value3"
                  inactive-text="删除谱子"
                >
                </el-switch>
              </p>
            </div>
            <el-table
              ref="userCollection"
              :data="userCollection"
              highlight-current-row
              style="width: 100%; margin-bottom:30px;"
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
              <el-table-column
                label="操作"
                width="120"
              >

              </el-table-column>
            </el-table>
            <div class="movie_comment">
              <el-row>
                <el-col :span="18">
                  <!-- <h1>507 评论</h1> -->
                  <!-- <p class="movie_page"> 共34页 &nbsp; <span style="color:#128dca"> 1</span> &nbsp; 2 &nbsp; 3 &nbsp; 4 &nbsp; ... &nbsp; 34 &nbsp;下一页</p> -->

                  <el-row>
                    <el-col
                      :span="4"
                      class="comment_head"
                    > <img
                        src="./userhead1.png"
                        alt=""
                      ></el-col>
                    <el-col :span="16">
                      <el-input
                        class="comment_main"
                        type="textarea"
                        placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。"
                      ></el-input>

                    </el-col>
                    <el-col :span="4">
                      <el-button
                        type="info"
                        class="comment_enter"
                        size="small"
                      >发送评论</el-button> </el-col>
                  </el-row>

                  <el-row>
                    <el-col
                      :span="4"
                      class="comment_head"
                    > <img
                        src="./hedda2.png"
                        alt=""
                      ></el-col>
                    <el-col
                      :span="20"
                      class="comment_say"
                    >
                      <h1> 阴影中的曙光</h1>
                      <p> Vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。</p>
                      <el-row class="comm_info">
                        <el-col :span="5">#1</el-col>
                        <el-col :span="10">2019-03-24 20:23</el-col>
                        <el-col :span="5"> 回复</el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
                <!-- <el-col span="5" class="dadsad"> <img src="./show.png" alt="" class="movie_showss"></el-col> -->
              </el-row>
            </div>
          </div>
          <div class="info">
            <div>
              <h2>
                收藏此歌单的人
              </h2>
              <p>
              </p>
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
        image_url:
          'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/185998-102.jpg',
        name: '示例谱册',
        addtion: '',
        author: 'dawn',
        authorId: '12333',
        album:
          '这里是谱册简介这里是谱册简介这里是谱册简介这里是谱册简介这里是谱册简介这里是谱册简介这里是谱册简介这里是谱册简介这里是谱册简介这里是谱册简介',
        update: '2018-12-18',
        uploader: 'TOKdawn',
        otherName: '花花花花',
        tagList: [
          {
            tagName: '东方'
          }
        ],
        context: '',
        otherLink: 'www.baidu.com'
      },
      value3: '',
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
      ]
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
    .uploader {
      font-size: $--FontSizeL;
      color: $--linkBlue;
      cursor: pointer;
    }
    ul {
      width: 450px;
      overflow: hidden;
      padding-top: 5px;
      font-size: $--FontSizeM;
      line-height: $--FontSizeL;
      li {
        float: left;
        line-height: 27px;
        width: 450px;
        margin-right: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    p {
      width: 450px;
      overflow: hidden;
      font-size: $--FontSizeM;
      line-height: $--FontSizeL;
    }
  }
  .score-context {
    padding-right: 343px;
    .title {
      height: 38px;
      border-bottom: 3px solid #ec908c;
      color: #666;
      margin-top: 20px;
      h3 {
        font-size: 22px;
        font-weight: 600;
        line-height: 38px;
      }
      p {
        float: right;
        margin-top: -26px;
      }
    }
    .collection {
      float: left;
      float: left;
      width: 100%;
      padding-bottom: 20px;
      .comment_head img {
        margin: 10px 0px;
        height: 80px;
        border-radius: 40px;
      }
      .comment_main {
        margin: 20px 0px 40px 0px;
        line-height: 24px;
      }
      .comment_enter {
        margin: 20px 0px 20px 30px;
        height: 54px;
      }
      .comment_say {
        border-top: 2px #eee solid;
      }
      .comment_head_min img {
        width: 50px;
      }
      .comment_say {
        padding: 10px 0px;
      }
      .comment_say h1 {
        font-size: 16px;
        margin-bottom: 5px;
      }
      .comment_say p {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 10px;
      }
      .comm_info {
        color: #666;
        font-weight: 400;
        font-size: 13px;
        cursor: pointer;
        margin-bottom: 6px;
      }
      .comm_info i {
        font-size: 18px;
        margin-right: 3px;
      }
      .comment_say_min {
        padding: 10px 0px 5px 0px;
      }
      .comment_say_min h1 {
        display: inline-block;
        width: 110px;
        font-size: 13px;
      }
      .comment_say_min p {
        display: inline-block;
      }
    }
    .info {
      float: right;
      position: relative;
      width: 290px;
      margin-right: -343px;
      padding-bottom: 20px;
      h2 {
        font-size: $--FontSizeL;
        line-height: 46px;
      }
    }
  }
}
</style>
