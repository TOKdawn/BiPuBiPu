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
              @click="jump(1)"
            >更换头像</div>
          </el-col>
          <el-col :span="18">
            <div class="header">

              <h2>{{userData.username}}</h2>
              <el-button
                @click="jump(2)"
                type="primary"
                size="small"
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
          <h3>收藏的音乐</h3>
          <p> 查看更多>> </p>
        </div>
        <el-table
          ref="userCollection"
          :data="userCollection"
          highlight-current-row
          style="width: 100%"
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

        </el-table>
      </div>
      <div class="creat">
        <div class="title">
          <h3>收藏的谱册 </h3>
          <p @click="dialogVisible = true" style="  cursor: pointer;"> 新建谱册+ </p>
        </div>
        <div class="otherScoreListDiv">
          <div
            class="copies"
            v-for="(item,index) in myVolumeList"
            :key="index"
          >
            <img
              :src="item.img"
              alt=""
            >
            <h1> {{item.title}}</h1>
            <p> {{item.describe}}}</p>
            <div>收藏数:{{item.star}}</div>
          </div>
        </div>
      </div>
    </el-card>
    <el-dialog
      title="创建谱册"
      :visible.sync="dialogVisible"
      width="30%"
    >
  <el-form :model="volumeForm" :rules="volumerules" ref="volumeForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="谱册名称" prop="title">
    <el-input v-model="volumeForm.title"></el-input>
  </el-form-item>
    <el-form-item label="谱册描述" prop="describe">
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
        username: '未命名用户',
        avatar:
          'http://bipu.oss-cn-beijing.aliyuncs.com/egg-multipart-test/akari.jpg',
        signature: '这个人很懒,啥也没写╮(╯_╰)╭',
        phone: 18700000000
      },
      createNum: 0,
      focusNum: 0,
      uploadNum: 0,
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
      ],
      myVolumeList: [
        {
          img:
            'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/186139-102.jpg',
          title: '东ass方啊实打实大所大所大所大叔大婶大所大所大所大所谱册',
          star: '100',
          describe: '一个谱册的介绍',
          list: [
            {
              title: '谱子1',
              id: '121'
            },
            {
              title: '谱子2',
              id: '122'
            },
            {
              title: '谱子3',
              id: '123'
            },
            {
              title: '谱子4',
              id: '124'
            },
            {
              title: '谱子5',
              id: '125'
            }
          ]
        },
        {
          img:
            'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/186146-102.jpg',
          title: '东方谱册',
          star: '100',
          describe: '一个谱册的介绍',
          list: [
            {
              title: '谱子1',
              id: '121'
            },
            {
              title: '谱子2',
              id: '122'
            },
            {
              title: '谱子3',
              id: '123'
            },
            {
              title: '谱子4',
              id: '124'
            },
            {
              title: '谱子5',
              id: '125'
            }
          ]
        },
        {
          img:
            'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/186139-102.jpg',
          title: '东方谱册',
          star: '100',
          describe: '一个谱册的介绍',
          list: [
            {
              title: '谱子1',
              id: '121'
            },
            {
              title: '谱子2',
              id: '122'
            },
            {
              title: '谱子3',
              id: '123'
            },
            {
              title: '谱子4',
              id: '124'
            },
            {
              title: '谱子5',
              id: '125'
            }
          ]
        },
        {
          img:
            'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/185998-102.jpg',
          title: '东ass方啊实打实大所大所大所大叔大婶大所大所大所大所谱册',
          star: '100',
          describe: '一个谱册的介绍',
          list: [
            {
              title: '谱子1',
              id: '121'
            },
            {
              title: '谱子2',
              id: '122'
            },
            {
              title: '谱子3',
              id: '123'
            },
            {
              title: '谱子4',
              id: '124'
            },
            {
              title: '谱子5',
              id: '125'
            }
          ]
        }
      ],
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
      console.log(`page/editInfo/${store.getters.phone}`)
      switch (type) {
        case 1:
          this.$router.push(`/page/uploadimg/${store.getters.phone}`)
          break
        case 2:
          this.$router.push(`/page/editInfo/${store.getters.phone}`)
      }
    },
    createVolume () {
      this.$refs['volumeForm'].validate((valid) => {
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
            } else {
              this.$message({
                showClose: true,
                duration: 2000,
                message: res.data.message,
                type: 'error'
              })
            }
          }).catch(res => {
            console.log(res)
            this.$message({
              showClose: true,
              duration: 2000,
              message: '发送请求失败',
              type: 'error'
            })
          })
        } else {
          return false
        }
      })
    },
    getVolume () {
      this.$http({
        method: 'get',
        url: User.getMyCollection
      }).then(res => {
        // console.log(res)
        this.myVolumeList = res.data.data
      }).catch(res => {
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
        url: User.getMyLike
      }).then(res => {
        console.log(res)
      }).catch(res => {
        this.$message({
          showClose: true,
          duration: 2000,
          message: '拉取信息失败',
          type: 'error'
        })
      })
    },
    getUpload () {
      this.$
    }

  },
  created () {
    this.getVolume()
    this.userData.username = store.getters.username
    this.userData.avatar = store.getters.avatar
    this.userData.signature = store.getters.signature
    this.userData.phone = store.getters.phone
    this.userData.id = store.getters.id
    this.$http({
      method: 'get',
      url: User.getUpdateNum + this.userData.id
    }).then(res => {
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
    }).catch(res => {
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
      url: User.getCreateNum + this.userData.id
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
      url: User.getFocusNum + this.userData.id
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
