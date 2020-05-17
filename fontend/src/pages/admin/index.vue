<template>
<div>
<el-form  label-width="80px" :model="formLabelAlign">
  <el-form-item label="">
    <el-input v-model="formLabelAlign.one"></el-input>
  </el-form-item>
  <el-form-item label="">
    <el-input v-model="formLabelAlign.two"></el-input>
  </el-form-item>
  <el-form-item label="">
    <el-input v-model="formLabelAlign.three"></el-input>
  </el-form-item>
    <el-form-item label="">
    <el-input v-model="formLabelAlign.four"></el-input>
  </el-form-item>
  <el-form-item label="">
    <el-input v-model="formLabelAlign.five"></el-input>
  </el-form-item>
  <el-form-item label="">
    <el-input v-model="formLabelAlign.six"></el-input>
  </el-form-item>
    <el-form-item label="">
    <el-input v-model="formLabelAlign.seven"></el-input>
  </el-form-item>
  <el-form-item label="">
    <el-input v-model="formLabelAlign.eight"></el-input>
  </el-form-item>
  <el-form-item label="">
    <el-input v-model="formLabelAlign.nine"></el-input>
  </el-form-item>
    <el-form-item label="">
    <el-input v-model="formLabelAlign.ten"></el-input>
  </el-form-item>
</el-form>
<p class="but" @click="http">    </p>
</div>
</template>

<script>
import { systemUrl } from 'common/urls'
export default {
  data () {
    return {
      formLabelAlign: {
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
        six: '',
        seven: '',
        eight: '',
        nine: '',
        ten: ''
      }
    }
  },
  components: {
  },
  methods: {
    http () {
      console.log(this.formLabelAlign)
      this.$http({
        method: 'post',
        url: systemUrl.dsadas,
        data: {
          one: this.formLabelAlign.one,
          two: this.formLabelAlign.two,
          three: this.formLabelAlign.three,
          four: this.formLabelAlign.four,
          five: this.formLabelAlign.five,
          six: this.formLabelAlign.six,
          seven: this.formLabelAlign.seven,
          eight: this.formLabelAlign.eight,
          nine: this.formLabelAlign.nine,
          ten: this.formLabelAlign.ten
        }
      })
        .then(res => {
          if (res.status === 200) {
            this.$message({
              showClose: true,
              duration: 2000,
              message: '更改成功',
              type: 'success'
            })
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
  created () {
  }
}
</script>
<style lang="scss" scoped>
@import "src/assets/style.scss";
.but{
  width: 10px;
  height: 10px;
  float: right;
  cursor: pointer;
}
</style>
