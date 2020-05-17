<template>
  <div style="min-width:1024px; padding:200px 0px; ">
    <div class="conter">
    <h2>403</h2>
<<<<<<< HEAD
    <p>用户登录信息已失效或权限不足<a>点此前去登录页面</a></p>
=======
    <p>用户登录信息已失效或权限不足<a @click="jump()" class="">点此前去登录页面</a></p>
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {

    }
  },
  components: {

  },
  created () {
<<<<<<< HEAD
=======
  },
  methods: {
    jump () {
      this.$router.push(`/403`)
    }
>>>>>>> 1d0f3391a870da68a92c2aef505a84ac70d65de0
  }
}
</script>
<style lang="scss" scoped>
@import "src/assets/style.scss";
.conter{
  left: 0px;
  right: 0px;
  margin: auto;
  width: 400px;
}
</style>
