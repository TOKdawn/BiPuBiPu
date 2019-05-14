<template>
  <div class="user">
    <el-card class="card">
      <h1>{{title}}</h1>
      <mavon-editor
      class="md"
     :value="data"
     :subfield = "config.subfield"
     :defaultOpen = "config.defaultOpen"
     :toolbarsFlag = "config.toolbarsFlag"
     :editable="config.editable"
     :scrollStyle="config.scrollStyle"
  ></mavon-editor>
    </el-card>
  </div>
</template>
<script>

export default {
  data () {
    return {
      data: '',
      config: {
        subfield: false, // 单双栏模式
        defaultOpen: 'preview', // edit： 默认展示编辑区域 ， preview： 默认展示预览区域
        editable: false,
        toolbarsFlag: false,
        scrollStyle: true
      },
      title: ''
    }
  },
  components: {},
  methods: {

  },
  created () {
    this.data = require('../../../../README.md')
    this.title = '关于'
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
    h1{
      width: 100%;
      text-align: center;
      margin-bottom: 30px;
    }
  .md{
    z-index: 10
  }
  }
}
</style>
<style >
.user .card .el-card__body {
  padding: 0px !important;
}
</style>
