<template>
  <div class="user">
    <el-card class="card">

    </el-card>
  </div>
</template>
<script>
import store from 'vux/store.js'
export default {
  data () {
    return {
      userData: {
        username: '未命名用户',
        avatar:
          'http://bipu.oss-cn-beijing.aliyuncs.com/egg-multipart-test/akari.jpg',
        signature: '这个人很懒,啥也没写╮(╯_╰)╭',
        phone: 18700000000
      }
    }
  },
  components: {},
  methods: {
    jump (type) {
      switch (type) {
        case 1:
          this.router.push()
      }
    }
  },
  created () {
    this.userData = store.state
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

  }
}
</style>
<style >
.user .card .el-card__body {
  padding: 0px !important;
}
</style>
