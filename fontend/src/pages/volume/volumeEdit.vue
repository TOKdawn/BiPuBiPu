<template>
  <div class="user">
    <el-card class="card">
      <h2 style="margin-bottom:20px; font-weight:600">谱册设置</h2>

      <el-form
        :model="volumeData"
        :rules="rules"
        ref="volumeDataForm"
        label-width="100px"
        class="userDataForm"
      >
        <el-form-item label="更换封面:">
          <el-upload
            class="avatar-uploader"
            action="/upload"
            :show-file-list="false"
             :on-success="handleAvatarSuccess"
          >
            <img
              v-if="volumeData.photo"
              :src="volumeData.photo"
              class="avatar"
            >
            <i
              v-else
              class="el-icon-plus avatar-uploader-icon"
            ></i>
          </el-upload>

        </el-form-item>
        <el-form-item
          label="谱册名:"
          prop="name"
        >
          <el-input
            v-model="volumeData.name"
            size="small"
          >
          </el-input>
        </el-form-item>
        <el-form-item
          label="谱册介绍:"
          prop="describe"
        >
          <el-input
            v-model="volumeData.describe"
            type="textarea"
            :rows="2"
            size="small"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="small" @click="updata">
            保存
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
<<<<<<< HEAD
// import store from 'vux/store.js'
=======
import store from 'vux/store.js'
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
import {Volume} from 'common/urls'
export default {
  data () {
    return {
      volumeData: {
        describe: '',
        photo: '',
        name: '',
        id: ''
      },
      rules: {
        name: [
            { required: true, message: '请输入谱册名', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
        ],
        describe: [
            { required: true, message: '请输入谱册描述', trigger: 'blur' },
            { min: 3, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
        ]
      },
      activeName: 'first',
      SMStext: '获取短信验证码',
      smsFlag: '',
      res_sms: ''
    }
  },
  components: {},
  methods: {
    handleAvatarSuccess (res, file) {
      this.volumeData.photo = res.url
    },
    updata () {
      this.$refs['volumeDataForm'].validate((valid) => {
        if (valid) {
          this.$http({
            method: 'put',
            url: Volume.editVolume + this.$route.params.vid,
            data: {
              photo: this.volumeData.photo,
              name: this.volumeData.name,
              describe: this.volumeData.describe
            }
          }).then(res => {
            if (res.status === 200) {
              this.$message({
                showClose: true,
                duration: 2000,
                message: '更新信息成功',
                type: 'secuss'
              })
              this.$router.push(`/page/volume/${this.$route.params.vid}`)
            } else {
              this.$message({
                showClose: true,
                duration: 2000,
                message: res.data.message,
                type: 'error'
              })
            }
          }).catch(() => {
            this.$message({
              showClose: true,
              duration: 2000,
              message: '注册失败',
              type: 'error'
            })
          })
        } else {
<<<<<<< HEAD
          console.log('error submit!!')
=======
        //   console.log('error submit!!')
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
          return false
        }
      })
    }
  },
  created () {
    this.$http({
      method: 'get',
<<<<<<< HEAD
=======
      url: Volume.getVolumeAuthor + this.$route.params.vid
    })
      .then(res => {
        if (res.status === 200) {
        //   console.log(res.data)
          if (res.data.data[0].id !== store.getters.id) {
            this.$router.push(`/403`)
          }
        } else {
          this.$message({
            showClose: true,
            duration: 2000,
            message: res.data.message,
            type: 'error'
          })
          this.$router.push(`/403`)
        }
      })
      .catch(res => {
        this.$message({
          showClose: true,
          duration: 2000,
          message: '请求失败',
          type: 'error'
        })
        this.$router.push(`/403`)
      })
    this.$http({
      method: 'get',
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
      url: Volume.getVolumeInfo + this.$route.params.vid
    }).then(res => {
      if (res.status === 200) {
        this.volumeData = res.data.data
      } else {
        this.$message({
          showClose: true,
          duration: 2000,
          message: res.data.message,
          type: 'error'
        })
      }
    })
    .catch((res) => {
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
.user {
  .card {
    width: 980px;
    margin: 0px auto 0px auto;
    padding: 40px;
    min-height: 720px;
    .userDataForm {
      width: 350px;
    }
    .img-bar {
      height: 180px;
      &:hover {
        .img-info {
          display: block;
        }
      }
      img {
        z-index: 1;
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
    .node {
      height: 83px;
      margin-top: 40px;
      padding-top: 12px;
      background: #f8f8f8;
      padding-left: 30px;
      border: 1px solid #dfdfdf;
      color: #666;
      span {
        font-size: 38px;
      }
      h3 {
        margin-top: 3px;
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    border: 1px solid red;
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>
<style >
.user .card .el-card__body {
  padding: 0px !important;
}
</style>
