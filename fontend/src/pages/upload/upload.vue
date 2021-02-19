<template>
  <div class="upload">
    <el-card
      shadow="always"
      class="card"
    >
      <h2>曲谱发布</h2>
      <!-- <el-form
        :model="scoreData"
        :rules="rules1"
        ref="ruleForm"
        label-width="100px"
      > -->
      <el-tabs v-model="activeName">
        <el-tab-pane
          label="基本信息"
          name="first"
          style="min-height:580px; position: relative;"
        >
          <el-form
            :model="scoreData"
            :rules="rules1"
            ref="ruleForm1"
            label-width="100px"
          >
            <el-row>
              <el-col :span="8">
                <el-form-item
                  label="曲名:"
                  prop="name"
                >
                  <el-input v-model="scoreData.name"></el-input>
                </el-form-item>
                <el-form-item>
                  <div>
                    必须是规范的原名<br>
                    例如<br>
                    鳥の詩 True<br>
                    鸟之诗 False<br>
                    鸟の詩 False<br>
                  </div>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item
                  label="别名:"
                  prop="alias"
                >
                  <el-input v-model="scoreData.alias"></el-input>
                </el-form-item>
                <el-form-item>
                  <div>
                    曲谱的通俗叫法,如翻译名俗称等<br>
                    例如<br>
                    鸟之诗 True<br>
                    极乐净土 True<br>
                    未闻花名op False<br>
                  </div>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item
                  label="附加信息"
                  prop="addtion"
                >
                  <el-input v-model="scoreData.addtion"></el-input>
                </el-form-item>
                <el-form-item>
                  <div>
                    曲谱的出处或者相关信息<br>
                    例如<br>
                    四月是你的谎言主题曲 True<br>
                    未闻花名op True<br>
                    极乐净土 False
                  </div>
                </el-form-item>
              </el-col>
            </el-row>
            <div class="footer">
              <el-button
                type="primary"
                size="small"
                @click="jump1"
              >下一步</el-button>
            </div>
          </el-form>
        </el-tab-pane>
        <el-tab-pane
          label="曲谱正文"
          name="second"
          style="min-height:580px; position: relative;"
        >
          <el-form
            :model="scoreData"
            :rules="rules2"
            ref="ruleForm2"
            label-width="100px"
          >
            <el-row>
              <el-col :span="12">
                <el-form-item
                  label="曲谱图像:"
                  prop="image_url"
                >
                  <el-upload
                    class="avatar-uploader"
<<<<<<< HEAD
                    action="/api/upload"
=======
                    action="/upload"
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess1"
                  >
                    <img
                      v-if="img1"
                      :src="img1"
                      class="avatar"
                    >
                    <i
                      v-else
                      class="el-icon-plus avatar-uploader-icon"
                    ></i>
                  </el-upload>
                </el-form-item>
                <el-form-item
                  label="曲谱描述:"
                  prop="description"
                >
                  <el-input
                    type="textarea"
                    :rows="13"
                    placeholder="非必填项,可以随便写点什么"
                    v-model="scoreData.description"
                  >
                  </el-input>

                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  label="谱册内容:"
                  prop="score_text"
                >
                  <el-input
                    type="textarea"
                    :rows="23"
                    placeholder="请注意换行节奏间距"
                    v-model="scoreData.score_text"
                  >
                  </el-input>

                </el-form-item>
              </el-col>
            </el-row>
            <div class="footer">
              <el-row>
                <el-button
                  type="primary"
                  size="small"
                  @click="activeName = 'first'"
                >上一步</el-button>
                <el-button
                  type="primary"
                  size="small"
                  @click="jump2"
                >下一步</el-button>
              </el-row>
            </div>
          </el-form>
        </el-tab-pane>
        <el-tab-pane
          label="版权信息"
          name="third"
          style="min-height:580px; position: relative;"
        >
          <el-form
            :model="scoreData"
            :rules="rules3"
            ref="ruleForm3"
            label-width="100px"
          >
            <el-row>
              <el-col :span="24">
                <el-form-item
                  label="扒谱人:"
                  prop="provider"
                >
                  <el-input v-model="scoreData.provider"></el-input>

                  <p>非必填项</p>
                </el-form-item>
                <el-form-item
                  label="扒谱人链接:"
                  prop="provider_url"
                >
                  <el-input v-model="scoreData.provider_url"></el-input>

                  <p>非必填项,一般情况下为百度用户信息主页链接</p>
                </el-form-item>
                <el-form-item
                  label="第三方链接:"
                  prop="other_url"
                >
                  <el-input v-model="scoreData.other_url"></el-input>

                  <p>非必填项,可选填搬运地址,或者第三放乐谱站的链接</p>
                </el-form-item>

              </el-col>

            </el-row>
            <div class="footer">
              <el-row>
                <el-button
                  type="primary"
                  size="small"
                  @click="activeName = 'second'"
                >上一步</el-button>
                <el-button
                  type="primary"
                  size="small"
                  @click="jump3"
                >下一步</el-button>
              </el-row>
            </div>
          </el-form>
        </el-tab-pane>
        <el-tab-pane
          label="其他信息"
          name="fourth"
          style="min-height:580px; position: relative;"
        >
          <el-form
            :model="scoreData"
            :rules="rules4"
            ref="ruleForm4"
            label-width="100px"
          >
            <el-row>
              <el-col :span="8">
                <el-form-item
                  label="图像简谱:"
                  prop="other_img"
                >
                  <el-upload
                    class="avatar-uploader"
                    action="/upload"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                  >
                    <img
                      v-if="img2"
                      :src="img2"
                      class="avatar"
                    >
                    <i
                      v-else
                      class="el-icon-plus avatar-uploader-icon"
                    ></i>
                  </el-upload>
                  <br>
                  图片形式的简谱或五线谱可以在此上传<br>尽量采用3*4的比例
                </el-form-item>
                <el-form-item
                  label="乐谱调性:"
                  prop="tonality"
                >
                  <el-select
                    v-model="scoreData.tonality"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in Scale1"
                      :key="item.value"
                      :label="item.text"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="14">
                <el-form-item
                  label="网易云友链:"
                  prop="songs"
                >
                  <el-input v-model="scoreData.songs"></el-input>
<<<<<<< HEAD

=======
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
                  <p>非必填项,网易云音乐相关歌曲的链接</p>
                </el-form-item>
                <el-form-item
                  label="B站友链:"
                  prop="performs"
                >
                  <el-input v-model="scoreData.performs"></el-input>
<<<<<<< HEAD

=======
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
                  <p>非必填项,B站相关表演视频链接</p>
                </el-form-item>
              </el-col>
            </el-row>
            <div class="footer">
              <el-row>
                <el-button
                  type="primary"
                  size="small"
                  @click="activeName = 'third'"
                >上一步</el-button>
                <el-button
                  type="success"
                  size="small"
                  icon="el-icon-success"
                  @click="submit"
                >提交</el-button>
<<<<<<< HEAD

=======
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
              </el-row>
            </div>
          </el-form>
        </el-tab-pane>
      </el-tabs>
      <!-- </el-form> -->
      <img
<<<<<<< HEAD
        src="../../assets/img/molisha.png"
=======
        src="https://bipu.oss-cn-beijing.aliyuncs.com/website/molisha.png"
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
        title="帮助"
        alt="help"
        class="help"
      >
    </el-card>
  </div>
</template>
<script>
import { Upload } from 'common/urls'
<<<<<<< HEAD
=======
import store from 'vux/store.js'
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
export default {
  data () {
    return {
      scoreData: {
        name: '', // 谱名
        alias: '', // 别名
        addtion: '', // 附加信息
        image_url: '', // 头像链接
        score_text: '', // 主体内容
        description: '', // 曲谱描述
        provider: '', // 扒谱人
        provider_url: '', // 扒谱人链接
        performs: '', // B站友链
        songs: '', // 网易云友链
        other_url: '', // 第三方谱站友链
        other_img: '', // 图像简谱
        tonality: '' // 乐谱调性
        // uploader: {
        //   name: '', // 上传者姓名
        //   id: '' // 上传者id
        // }
      },
<<<<<<< HEAD
      img1: '',
      img2: '',
=======
      img1: '', // 曲谱头像
      img2: '', // 图像简谱
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
      activeName: 'first',
      rules: {},
      value: '',
      value2: '',
      Scale1: [
        {
          text: 'A',
          value: '0'
        },
        {
          text: 'A#',
          value: '1'
        },
        {
          text: 'B',
          value: '2'
        },
        {
          text: 'C',
          value: '3'
        },
        {
          text: 'C#',
          value: '4'
        },
        {
          text: 'D',
          value: '5'
        },
        {
          text: 'D#',
          value: '6'
        },
        {
          text: 'E',
          value: '7'
        },
        {
          text: 'F',
          value: '8'
        },
        {
          text: 'F#',
          value: '9'
        },
        {
          text: 'G',
          value: '10'
        },
        {
          text: 'G#',
          value: '11'
        }
      ],
      rules1: {
        name: [
          { required: true, message: '请输入乐谱名称', trigger: 'blur' },
          { max: 30, message: '长度不能超过30个字符', trigger: 'blur' }
        ],
        alias: { max: 30, message: '长度不能超过30个字符', trigger: 'blur' },
        addtion: { max: 30, message: '长度不能超过30个字符', trigger: 'blur' }
      },
      rules2: {
        score_text: [
          { required: true, message: '请输入曲谱正文', trigger: 'blur' }
        ]
      },
      rules3: {
        provider: [
          { max: 10, message: '长度不能超过10个字符', trigger: 'blur' }
        ],
        provider_url: [
          { max: 100, message: '长度不能超过100个字符', trigger: 'blur' }
        ],
        other_url: [
          { max: 100, message: '长度不能超过100个字符', trigger: 'blur' }
        ]
      },
      rules4: {
        songs: [
          { max: 100, message: '长度不能超过100个字符', trigger: 'blur' }
        ],
        performs: [
          { max: 100, message: '长度不能超过100个字符', trigger: 'blur' }
        ]
      }
    }
  },
<<<<<<< HEAD
  created () {},
=======
  created () {
    if (store.getters.role !== 2) {
      this.$router.push(`/403`)
    }
  },
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
  methods: {
    handleAvatarSuccess (res, file) {
      this.scoreData.other_img = res.url
      this.img2 = URL.createObjectURL(file.raw)
    },
    handleAvatarSuccess1 (res, file) {
      this.scoreData.image_url = res.url
      this.img1 = URL.createObjectURL(file.raw)
    },
    jump1 () {
      this.$refs['ruleForm1'].validate((valid) => {
        if (valid) {
          this.activeName = 'second'
        } else {
<<<<<<< HEAD
          console.log('error submit!!')
=======
        //   console.log('error submit!!')
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
          return false
        }
      })
    },
    jump2 () {
      this.$refs['ruleForm2'].validate((valid) => {
        if (valid) {
          this.activeName = 'third'
        } else {
<<<<<<< HEAD
          console.log('error submit!!')
=======
        //   console.log('error submit!!')
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
          return false
        }
      })
    },
    jump3 () {
      this.$refs['ruleForm3'].validate((valid) => {
        if (valid) {
          this.activeName = 'fourth'
        } else {
<<<<<<< HEAD
          console.log('error submit!!')
=======
        //   console.log('error submit!!')
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
          return false
        }
      })
    },
    submit () {
    //   console.log(this.scoreData)
      this.$confirm('即将进行乐谱上传,请确认填写的信息无误', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http({
          method: 'post',
          url: Upload.uploadScore,
          data: {
            scoreData: this.scoreData
          }
        }).then(res => {
          if (res.status === 200) {
            this.$message({
              type: 'success',
              duration: 2000,
              message: '上传成功!'
            })
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
            message: '请求失败',
            type: 'error'
          })
        })
      }).catch(() => {
      })
    }
  }

}
</script>
<style lang="scss" scoped>
@import "src/assets/style.scss";
.upload {
  background: linear-gradient(rgb(258, 238, 215), #ffffff);
  padding: 30px 0px;
  .card {
    width: 85%;
    left: 0;
    right: 0;
    margin: auto;
    .avatar-uploader .el-upload {
      border: 1px solid red;
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
      border-radius: 6px;
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
    .submit {
      margin-top: -30px;
      margin-left: 20px;
      float: right;
    }
    .footer {
      position: absolute;
      width: 100%;
      text-align: center;
      bottom: 20px;
      button {
        margin: 0px 30px;
      }
    }
  }
  .help {
    position: absolute;
    width: 80px;
    margin-top: -200px;
    margin-left: -101px;
    cursor: pointer;
    transform: all 0.5s;
    &:hover {
      margin-top: -203px;
    }
  }
}
</style>
