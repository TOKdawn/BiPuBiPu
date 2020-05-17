<template>
<div>

  <p>当前处理的字段</p>
  <el-input
    type="textarea"
    :rows="23"
    placeholder="请注意换行节奏间距"
    v-model="scoreData.score_text"
  >
  </el-input>
  <el-button
    type="primary"
    size="small"
    @click="submit"
  >提交</el-button>
</div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
