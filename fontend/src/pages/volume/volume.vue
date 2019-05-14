<template>
  <div class="score">
    <div class="main-context">
      <div>
        <img
          :src="volumeData.image_url"
          alt=""
          style="width:250px; height:250px; float:left;"
        >
        <div class="score-info">
          <h1>{{volumeData.name}}</h1>
          <div class="uploader" @click="$router.push({ name: 'user', params: { uid: author.id } })">@{{author.name}}</div>
          <ul>
            <li>简介: {{volumeData.describe}}</li>

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
              ref="volumeList"
              :data="volumeList"
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
            <!-- <div class="movie_comment">
              <el-row>
                <el-col :span="18">

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

              </el-row>
            </div> -->
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
import store from 'vux/store.js'
import {Volume} from 'common/urls'
export default {
  data () {
    return {
      volumeData: {
        describe: '',
        photo: '',
        name: ''
      },
      author: {

      },
      VolumeCollector: {

      },
      userId: '',
      userRole: '',
      owned: 'false',
      value3: '',
      volumeList: []
    }
  },
  created () {
    this.userRole = store.getters.role
    this.userId = store.getters.phone
    this.$http({
      method: 'get',
      url: Volume.getVolumeInfo + this.$route.params.vid
    }).then(res => {
      if (res.status === 200) {
        console.log(res.data)
        this.volumeData = res.data.data
      } else {
        this.$message({
          showClose: true,
          duration: 2000,
          message: res.data.message,
          type: 'error'
        })
      }
    }).catch((res) => {
      this.$message({
        showClose: true,
        duration: 2000,
        message: '请求失败',
        type: 'error'
      })
    })

    this.$http({
      method: 'get',
      url: Volume.getVolumeAuthor + this.$route.params.vid
    }).then(res => {
      if (res.status === 200) {
        console.log(res.data)
        this.author = res.data.data[0]
      } else {
        this.$message({
          showClose: true,
          duration: 2000,
          message: res.data.message,
          type: 'error'
        })
      }
    }).catch((res) => {
      this.$message({
        showClose: true,
        duration: 2000,
        message: '请求失败',
        type: 'error'
      })
    })

    this.$http({
      method: 'get',
      url: Volume.getVolumeCollector + this.$route.params.vid
    }).then(res => {
      if (res.status === 200) {
        console.log(res.data)
        this.VolumeCollector = res.data.data
      } else {
        this.$message({
          showClose: true,
          duration: 2000,
          message: res.data.message,
          type: 'error'
        })
      }
    }).catch((res) => {
      this.$message({
        showClose: true,
        duration: 2000,
        message: '请求失败',
        type: 'error'
      })
    })
  }
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
