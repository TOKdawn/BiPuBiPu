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
          <h1>{{scoreData.name}} - {{scoreData.alias}}</h1>
          <div
            class="uploader"
            @click="$router.push({ name: 'user', params: { uid: author.id } })"
          >@{{author.name}}</div>
          <ul>

            <li
              @click="jump(scoreData.provider_url)"
              style="cursor: pointer; "
            >扒谱人: @{{scoreData.provider}}</li>
            <li style="width: 400px">更多信息: {{scoreData.addtion}}</li>
            <li>上传时间: {{scoreData.created_at.slice(0,10)}}</li>
            <li>调性: {{Scale1[scoreData.tonality]}} </li>

          </ul>

          <el-row style="margn-top:25px;">
            <el-button
              type="primary"
              size="small"
              v-if="!collentor && !owned"
              icon="el-icon-star-off"
              @click="addCollect "
            >收藏乐谱</el-button>
            <el-button
              type="danger"
              size="small"
              v-if="collentor && !owned"
              icon="el-icon-star-off"
              @click="deleteCollect"
            >取消收藏</el-button>
            <el-button
              type="success"
              size="small"
              icon="el-icon-plus"
              v-if="this.userId !== ''"
              plain
              @click="dialogVisible = true"
            >加至谱册</el-button>
            <el-button
              size="small"
              type="danger"
              v-if="owned"
              icon="el-icon-delete"
              plain
              @click="deleteScore"
            >删除乐谱</el-button>

            <el-button
              size="small"
              icon="el-icon-download"
              @click="handleDownload"
              plain
            >下载乐谱</el-button>
          </el-row>
        </div>
        <div class="score-context">
          <div class="context">
            <div class="avatar">
              <img
                :src="scoreData.image_url"
                alt=""
                style="width:100%;height:100%; z-index:1;"
              >
            </div>
            <!-- <div class="translator-button-one">
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
            </div> -->
            <div class="score-type">
              <p
                :class="{ 'without': !scoreData.other_img}"
                @click="showImg"
              >图片简谱</p>
              <p
                :class="{ 'without': !scoreData.other_url}"
                @click="jump(scoreData.other_url)"
              >乐谱来源</p>
            </div>
            <el-card
              class="box-card"
              
              v-show="flag"
            >
            <div  style="white-space: pre-line; font-size:17px; line-height:2.5;">
              {{scoreData.score_text}}
            </div>
            </el-card>
            <el-card
              class="box-card"
              style="white-space: pre-line"
              v-show="!flag"
            >
              <img
                :src="scoreData.other_img"
                alt=""
              >
              {{scoreData.other_img}}
            </el-card>
          </div>
          <div class="info">
            <div>
              <h2>
                简介
              </h2>
              {{scoreData.description}}
              <p>
              </p>
            </div>
            <!-- <div>
              <h2>
                收藏此谱的热门谱册
              </h2>
            </div> -->
            <div>
              <h2>
                相关演奏视频
              </h2>
              <a
                :href="scoreData.performs"
                style="color:rgb(242, 103, 98) "
              >{{scoreData.performs}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-dialog
      title="请选择谱册"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <div
        v-for="item in myVolumeList"
        :key="item.id"
        @click="addVolume(item.id)"
        class="node"
      >
        <img
          :src="item.photo"
          alt=""
        >
        <p>{{item.name}}</p>
      </div>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <!-- <el-button type="primary" @click="dialogVisible = false">确 定</el-button> -->
      </span>
    </el-dialog>

  </div>
</template>
<script>
import store from 'vux/store.js'
import { Score, Volume, User } from 'common/urls'
export default {
  data () {
    return {
      scoreData: {
        image_url:
          'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/185998-102.jpg',
        name: '',
        addtion: '',
        tonality: '未命名专辑',
        created_at: '2018-12-18',
        uploader: 'TOKdawn',
        alias: '',
        description: '',
        score_text: ``,
        other_url: '',
        other_img:
          'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/185998-102.jpg',
        provider: '',
        provider_url: ''
      },
      Scale1: ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
      author: {
        id: '',
        name: ''
      },
      flag: true,
      collentor: false,
      ScoreCollector: [],
      myVolumeList: [],
      dialogVisible: false
    }
  },
  methods: {
    handleDownload () {
      var element = document.createElement('a')
      element.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,' +
          encodeURIComponent(this.scoreData.score_text)
      )
      element.setAttribute('download', `${this.scoreData.name}.txt`)

      element.style.display = 'none'
      document.body.appendChild(element)

      element.click()

      document.body.removeChild(element)
    },
    jump (url) {
      if (url === '') {
        return
      }
      window.location.href = url
    },
    addCollect () {
      if (this.userId === '') {
        this.$message.error('请先登录')
        return
      } else {
        this.$confirm('你将会收藏此乐谱, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$http({
              method: 'get',
              url: Score.addCollectionScore + this.$route.params.sid
            })
              .then(res => {
                if (res.status === 200) {
                  this.$message({
                    showClose: true,
                    duration: 2000,
                    message: '收藏成功',
                    type: 'success'
                  })
                  location.reload()
                } else {
                  this.$message({
                    showClose: true,
                    duration: 2000,
                    message: res.data.message,
                    type: 'error'
                  })
                }
              })
              .catch(res => {
                this.$message({
                  showClose: true,
                  duration: 2000,
                  message: '拉取信息失败',
                  type: 'error'
                })
              })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
      }
    },
    deleteCollect () {
      this.$confirm('你将不再收藏此乐谱, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$http({
            method: 'delete',
            url: Score.deleteCollectionScore + this.$route.params.sid
          })
            .then(res => {
              if (res.status === 200) {
                this.$message({
                  showClose: true,
                  duration: 2000,
                  message: '取消成功',
                  type: 'success'
                })
                location.reload()
              } else {
                this.$message({
                  showClose: true,
                  duration: 2000,
                  message: res.data.message,
                  type: 'error'
                })
              }
            })
            .catch(res => {
              this.$message({
                showClose: true,
                duration: 2000,
                message: '拉取信息失败',
                type: 'error'
              })
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    showImg () {
      if (!this.scoreData.other_img) {
      } else {
        this.flag = !this.flag
      }
    },
    deleteScore () {
      this.$confirm('你将会删除此乐谱, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$http({
            method: 'delete',
            url: Score.deleteScore + this.$route.params.sid
          })
            .then(res => {
              if (res.status === 200) {
                this.$message({
                  showClose: true,
                  duration: 2000,
                  message: '删除成功',
                  type: 'success'
                })
                this.$router.push(`/page/user/${this.userId}`)
              } else {
                this.$message({
                  showClose: true,
                  duration: 2000,
                  message: res.data.message,
                  type: 'error'
                })
              }
            })
            .catch(res => {
              this.$message({
                showClose: true,
                duration: 2000,
                message: '拉取信息失败',
                type: 'error'
              })
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    addVolume (id) {
      // console.log('aaa', id + '')
      this.$http({
        method: 'post',
        url: Volume.addVolumeScore + id,
        data: {
          sid: this.$route.params.sid
        }
      })
        .then(res => {
          if (res.status === 200) {
            this.$message({
              showClose: true,
              duration: 2000,
              message: '添加成功',
              type: 'success'
            })
          } else {
            this.$message({
              showClose: true,
              duration: 2000,
              message: res.data.message,
              type: 'error'
            })
          }
        })
        .catch(res => {
          this.$message({
            showClose: true,
            duration: 2000,
            message: '请求失败',
            type: 'error'
          })
        })
    }
  },
  created () {
    this.userId = store.getters.id
    this.$http({
      method: 'get',
      url: Score.getScoreInfo + this.$route.params.sid
    })
      .then(res => {
        if (res.status === 200) {
          this.scoreData = res.data.data
          // console.log(this.scoreData, this.$route.params)
        } else {
          this.$message({
            showClose: true,
            duration: 2000,
            message: res.data.message,
            type: 'error'
          })
        }
      })
      .catch(res => {
        this.$message({
          showClose: true,
          duration: 2000,
          message: '请求失败',
          type: 'error'
        })
      })
    this.$http({
      method: 'get',
      url: Score.getScoreAuthor + this.$route.params.sid
    })
      .then(res => {
        if (res.status === 200) {
          // console.log(res.data)
          this.author = res.data.data[0]
        } else {
          this.$message({
            showClose: true,
            duration: 2000,
            message: res.data.message,
            type: 'error'
          })
        }
      })
      .catch(res => {
        this.$message({
          showClose: true,
          duration: 2000,
          message: '请求失败',
          type: 'error'
        })
      })
    this.$http({
      method: 'get',
      url: Score.getScoreCollector + this.$route.params.sid
    })
      .then(res => {
        if (res.status === 200) {
          this.ScoreCollector = res.data.data
          // console.log('coll', res.data)
          this.ScoreCollector.forEach(item => {
            // console.log('sssss', item.id - 0 === this.userId - 0, item.id, this.userId)
            if (item.id - 0 === this.userId - 0) {
              this.collentor = true
            }
          })
        } else {
          this.$message({
            showClose: true,
            duration: 2000,
            message: res.data.message,
            type: 'error'
          })
        }
      })
      .catch(res => {
        this.$message({
          showClose: true,
          duration: 2000,
          message: '请求失败',
          type: 'error'
        })
      })

    if (this.userId !== '') {
      this.$http({
        method: 'get',
        url: User.getMyCreate + this.userId
      })
        .then(res => {
          if (res.status === 200) {
            // console.log('注册成功', res.data.data)
            this.myVolumeList = this.myVolumeList.concat(res.data.data)
          } else {
            this.$message({
              showClose: true,
              duration: 2000,
              message: res.message,
              type: 'error'
            })
          }
        })
        .catch(res => {
          this.$message({
            showClose: true,
            duration: 2000,
            message: '拉取信息失败',
            type: 'error'
          })
        })
    }
  },
  computed: {
    owned: function () {
      return this.author.id - 0 === this.userId - 0 && this.author.id !== ''
    },
    download () {
      return (
        'data:text/plain;charset=utf-8,' +
        encodeURIComponent(this.scoreData.score_text)
      )
    }
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
      width: 650px;
      overflow: hidden;
      padding-top: 5px;
      padding-bottom: 15px;
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
    p {
      width: 450px;
      overflow: hidden;
      font-size: $--FontSizeM;
      line-height: $--FontSizeL;
    }
  }
  .score-context {
    padding-right: 343px;
    .context {
      // background-color: aqua;
      float: left;
      width: 100%;
      padding-bottom: 20px;
      // height: 200px;
      .avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        z-index: 1;
        display: block;
        cursor: pointer;
      }
      .box-card {
        margin: -50px 0px 0px 50px;
        z-index: 10;
        display: block;
        position: relative;
      }
      .score-type {
        position: absolute;
        transform: rotate(90deg) rotateX(180deg) rotateY(180deg);
        margin-top: 70px;
        margin-left: -40px;
        font-size: 18px;
        p {
          display: inline-block;
          color: #d52484;
          
          font-weight: 500;
          padding: 0 2px;
          cursor: pointer;
          &:hover {
            text-shadow: 0 0 1px, 0 0 2px;
          }
        }
      }
      .without {
        color: transparent !important;
        cursor: default !important;
      }
      .translator-button-one {
        position: absolute;
        // position: relative;
        padding-top: 20px;
        color: antiquewhite;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background: #d52484;
        text-align: center;
        margin: -94px 0px 0px 101px;
      }

      .translator-button-two {
        position: absolute;
        // position: relative;
        padding-top: 15px;
        color: antiquewhite;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #d52484;
        text-align: center;
        margin: -89px 0px 0px 191px;
      }
      .translator-button-thr {
        position: absolute;
        // position: relative;
        padding-top: 10px;
        color: antiquewhite;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: #d52484;
        text-align: center;
        margin: -84px 0px 0px 271px;
      }
      .translator-button-fou {
        position: absolute;
        // position: relative;
        padding-top: 5px;
        color: antiquewhite;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #d52484;
        text-align: center;
        margin: -79px 0px 0px 341px;
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
  .node {
    p {
      height: 60px;
      line-height: 60px;
      // background-color: #d52484;
      cursor: pointer;
      border-radius: 5px;
      padding-left: 65px;
      translate: all 0.5s;
      margin: 3px 0px;
      font-size: 16px;
      &:hover {
        background-color: #eee;
      }
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      position: absolute;
      margin-top: 10px;
      margin-left: 10px;
    }
  }
}
</style>
