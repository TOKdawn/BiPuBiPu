<template>
  <div class="user">
    <el-card class="card">
      <div class="user-info">
        <el-row :gutter="20">
          <el-col
            :span="6"
            class="img-bar"
          >
            <img
              :src="userData.avatar"
              alt=""
              style="width:180px; height:180px;"
            >
            <div
              class="img-info"
              @click="jump(2)"
               v-if="userId===$route.params.uid"
            >更换头像</div>
          </el-col>
          <el-col :span="18">
            <div class="header">
              <h2>{{userData.name}}</h2>
              <el-button
                @click="jump(2)"
                type="primary"
                size="small"
                v-if="userId===$route.params.uid"
              >
                编辑个人资料
              </el-button>
            </div>
            <div class="more-info">
              <ul style="height:56px;">
                <li style="padding-left:0px">
                  <p>{{uploadNum}}</p>
                  已发布谱子
                </li>
                <li style="border-left: 1px solid #ddd; border-right: 1px solid #ddd;">
                  <p>
                    {{createNum}}
                  </p>
                  已创建谱册
                </li>
                <li>
                  <p>
                    {{focusNum}}
                  </p>
                  已关注的人
                </li>
              </ul>
              <br />
              <div>
                个人简介: {{userData.signature}}
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="collection">
        <div class="title">
          <h3>收藏的乐谱</h3>
          <p> 查看更多>> </p>
        </div>
        <el-table
          :data="userCollection"
          highlight-current-row
          style="width: 100%; margin-bottom:20px; table-layout: fixed; cursor: pointer;"
          height="500"
          @cell-click="scoreJump"
        >
          <el-table-column
            type="index"
            width="50"
          >
          </el-table-column>
          <el-table-column
            property="name"
            label="谱名"
<<<<<<< HEAD
            width="120"
=======
            width="160"
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
          >
          </el-table-column>
          <el-table-column
            property="alias"
            label="别名"
<<<<<<< HEAD
            width="120"
=======
            width="180"
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
          >
          </el-table-column>
          <el-table-column
            property="addtion"
            label="更多信息"
<<<<<<< HEAD
            width="240"
=======
            width="160"
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
          >
          </el-table-column>
          <el-table-column
            property="provider"
            label="扒谱人"
            width="120"
          >
          </el-table-column>
          <el-table-column
            property="score_text"
            label="预览"
          >
            <template slot-scope="scope">
<<<<<<< HEAD
              {{ scope.row.score_text.slice(0,30) }}
=======
              {{ scope.row.score_text.slice(0,25) }}
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="creat">
        <div class="title">
          <h3>收藏的谱册 </h3>
          <p
            @click="dialogVisible = true"
            style="  cursor: pointer;"
          > 新建谱册+ </p>
        </div>
        <div class="otherScoreListDiv">
          <div
            class="copies"
            v-for="(item,index) in myVolumeList"
            :key="index"
          >
            <img
              :src="item.photo"
              @click="$router.push(`/page/volume/${item.id}`)"
              alt=""
            >
            <h1 @click="$router.push(`/page/volume/${item.id}`)"> {{item.name}}</h1>
            <p> {{item.describe}}</p>
            <div>收藏数:{{item.visits}}</div>
          </div>
        </div>
      </div>
    </el-card>
    <el-dialog
      title="创建谱册"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-form
        :model="volumeForm"
        :rules="volumerules"
        ref="volumeForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="谱册名称"
          prop="title"
        >
          <el-input v-model="volumeForm.title"></el-input>
        </el-form-item>
        <el-form-item
          label="谱册描述"
          prop="describe"
        >
          <el-input v-model="volumeForm.describe"></el-input>
        </el-form-item>
      </el-form>

      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="createVolume"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import store from 'vux/store.js'
import { User, Volume } from 'common/urls'
export default {
  data () {
    return {
      userData: {
        name: '未命名用户',
        avatar:
          'http://bipu.oss-cn-beijing.aliyuncs.com/egg-multipart-test/akari.jpg',
        signature: '这个人很懒,啥也没写╮(╯_╰)╭',
        phone: 18700000000
      },
      createNum: 0,
      focusNum: 0,
      uploadNum: 0,
      userCollection: [],
      myVolumeList: [],
      dialogVisible: false,
      volumeForm: {
        title: '未命名谱册',
        describe: '这个人很懒什么都没写'
      },
      volumerules: {
        title: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { max: 20, message: '长度不要超过20个字符', trigger: 'blur' }
        ]
      }
    }
  },
  components: {},
  methods: {
    jump (type) {
      // console.log(`page/editInfo/${store.getters.id}`)
      switch (type) {
        case 1:
          this.$router.push(`/page/uploadimg/${store.getters.id}`)
          break
        case 2:
          this.$router.push(`/page/editInfo/${store.getters.id}`)
      }
    },
    createVolume () {
      this.$refs['volumeForm'].validate(valid => {
        if (valid) {
          this.$http({
            method: 'post',
            url: Volume.createVolume,
            data: {
              title: this.volumeForm.title,
              describe: this.volumeForm.describe
            }
          }).then(res => {
            if (res.status === 200) {
              this.dialogVisible = false
              this.myVolumeList.splice(0, this.myVolumeList.length, [])
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
          // .catch(res => {
          //   console.log(res)
          //   this.$message({
          //     showClose: true,
          //     duration: 2000,
          //     message: '发送请求失败',
          //     type: 'error'
          //   })
          // })
        } else {
          return false
        }
      })
    },
    getVolume () {
      this.$http({
        method: 'get',
        url: User.getMyCollection + this.$route.params.uid
      })
        .then(res => {
          if (res.status === 200) {
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
    },
    getScore () {
      this.$http({
        method: 'get',
        url: User.getMyLike + this.$route.params.uid
      })
        .then(res => {
          if (res.status === 200) {
            // console.log('注册成功', res.data.data)
            this.userCollection = this.userCollection.concat(res.data.data)
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
    },
    getUpload () {
      this.$http({
        method: 'get',
        url: User.getMyUpload + this.$route.params.uid
      })
        .then(res => {
          if (res.status === 200) {
            // console.log('注册成功', res.data.data)
            this.userCollection = this.userCollection.concat(res.data.data)
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
    },
    getCreate () {
      this.$http({
        method: 'get',
        url: User.getMyCreate + this.$route.params.uid
      })
        .then(res => {
          if (res.status === 200) {
            // console.log('注册成功', res.data.data)
            this.myVolumeList = this.myVolumeList.concat(res.data.data)
            console.log('创建', this.myVolumeList)
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
    },
    scoreJump (row, column, cell, event) {
      this.$router.push(`/page/score/${row.id}`)
    }
  },
  created () {
    this.userId = store.getters.id
    this.$http({
      method: 'get',
      url: User.getInfo + this.$route.params.uid
    })
      .then(res => {
        if (res.status === 200) {
          // console.log('getUpdateNum', res)
          this.userData = res.data.data
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
        console.log(res)
        this.$message({
          showClose: true,
          duration: 2000,
          message: '拉取信息失败',
          type: 'error'
        })
      })
    this.getVolume()
    this.getScore()
    this.getUpload()
    // this.getCreate()
    this.$http({
      method: 'get',
      url: User.getUpdateNum + this.$route.params.uid
    })
      .then(res => {
        if (res.status === 200) {
          // console.log('getUpdateNum', res)
          this.uploadNum = res.data.data
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
        console.log(res)
        this.$message({
          showClose: true,
          duration: 2000,
          message: '拉取信息失败',
          type: 'error'
        })
      })

    this.$http({
      method: 'get',
      url: User.getCreateNum + this.$route.params.uid
    })
      .then(res => {
        if (res.status === 200) {
          // console.log('getCreateNum', res)
          this.createNum = res.data.data
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
        console.log(res)
        this.$message({
          showClose: true,
          duration: 2000,
          message: '拉取信息失败',
          type: 'error'
        })
      })

    this.$http({
      method: 'get',
      url: User.getFocusNum + this.$route.params.uid
    })
      .then(res => {
        if (res.status === 200) {
          // console.log('getFocusNum', res)
          this.focusNum = res.data.data
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
        console.log(res)
        this.$message({
          showClose: true,
          duration: 2000,
          message: '拉取信息失败',
          type: 'error'
        })
      })
  }
}
</script>
<style lang="scss" scoped>
@import "src/assets/style.scss";
.user {
  .card {
    width: 980px;
    margin: 0px auto 0px auto;
    padding: 40px;
    .user-info {
      .img-bar {
        height: 180px;
        &:hover {
          .img-info {
            display: block;
          }
        }
        img {
          z-index: 1;
          border: 1px solid #ddd;
        }
        .img-info {
          cursor: pointer;
          height: 23px;
          display: none;
          background-color: rgba(66, 66, 66, 0.5);
          color: #fff;
          text-align: center;
          font-size: 14px;
          line-height: 23px;
          margin-top: -27px;
          z-index: 2;
          width: 180px;
          position: relative;
          &:hover {
            color: $--basicColor;
          }
        }
      }
      .header {
        border-bottom: 1px solid #ddd;
        h2 {
          font-size: $--FontSizeXL;
          height: 30px;
          line-height: 30px;
          margin-bottom: 12px;
        }
        button {
          float: right;
          margin-top: -45px;
        }
      }
      .more-info {
        ul {
          padding: 7px 0px;
          color: #666;
          
          li {
            float: left;
            padding: 0 40px 0 20px;
            p {
              cursor: pointer;
              font-size: 24px;
              font-weight: 600;
            }
          }
        }
      }
    }
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
    .otherScoreListDiv {
      max-height: 1120px;
      overflow: auto;
    }
    .copies {
      display: inline-block;
      text-align: center;
      margin-top: 20px;
      width: 25%;
      img {
        width: 150px;
        height: 150px;
        cursor: pointer;
      }
      h1 {
        font-size: $--basicFontSize;
        line-height: $--basicFontSize;
        font-weight: 500;
        overflow: hidden;
        height: 33px;
        padding: 0px 15px;
        color: $--darkFontColor;
        cursor: pointer;
        transition: all 0.4s;
        &:hover {
          color: $--activeColor;
        }
      }
      p {
        font-size: $--FontSizeM;
        line-height: $--FontSizeM;
        font-weight: 400;
        overflow: hidden;
        height: 40px;
        padding: 0px 15px;
        color: $--middleFontColor;
        margin-top: 5px;
      }
    }
  }
}
</style>
<style >
.user .card .el-card__body {
  padding: 0px !important;
}
</style>
