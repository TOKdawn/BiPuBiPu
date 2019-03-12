<template>
  <div class="upload">
    <el-card
      shadow="always"
      class="card"
    >
      <el-form
        :model="scoreData"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item
              label="曲名"
              prop="title"
            >
              <el-input v-model="scoreData.title"></el-input>
            </el-form-item>
            <el-form-item
              label="翻译名"
              prop="otherName"
            >
              <el-input v-model="scoreData.otherName"></el-input>
            </el-form-item>
            <el-form-item
              label="专辑"
              prop="otherName"
            >
              <el-input v-model="scoreData.tags"></el-input>
            </el-form-item>
            <el-form-item
              label="标签"
              prop="otherName"
            >
              <el-input v-model="scoreData.otherName"></el-input>
            </el-form-item>
            <el-form-item
              label="简介"
              prop="otherName"
            >
              <el-input v-model="scoreData.otherName"></el-input>
            </el-form-item>
            <el-form-item
              label="头像上传"
              prop="otherName"
            >
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img
                  v-if="imageUrl"
                  :src="imageUrl"
                  class="avatar"
                >
                <i
                  v-else
                  class="el-icon-plus avatar-uploader-icon"
                ></i>
              </el-upload>
            </el-form-item>
                <el-button type="primary" class="submit" size="small">提交</el-button>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="谱子内容:"
              prop="context"
            >
              <el-input
                type="textarea"
                :rows="22"
                placeholder="请输入内容"
                v-model="scoreData.score_text"
              >
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      scoreData: {
        image_url: 'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/185998-102.jpg',
        title: '雪之花 雪の华',
        author: 'dawn',
        authorId: '12333',
        album: '未命名专辑',
        update: '2018-12-18',
        uploader: 'TOKdawn',
        otherName: '花花花花',
        tags: [
          {
            tagName: '东方'
          }
        ],
        score_text: `
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
      },
      imageUrl: '',
      rules: {},
      value: ''

    }
  },
  created () {},
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
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
    .submit{
      margin-top: -30px;
      margin-left:20px;
      float: right;
    }
  }
}
</style>
