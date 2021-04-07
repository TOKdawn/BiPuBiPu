<template>
  <div style="min-width:1024px;">

    <Head :activeIndex="headData"></Head>
    <router-view style="margin-top:60px;"></router-view>
    <Foot></Foot>
  </div>
</template>
<script>
import Head from './layout/header'
import Foot from './layout/footer'
export default {
  data () {
    return {
      headData: '10'
    }
  },
  components: {
    Head,
    Foot
  },
  created () {
    switch (this.$route.name) {
      case 'volumelist':
        this.headData = '2'
        break
      case 'articleList':
        this.headData = '3'
        break
      case 'translator':
        this.headData = '4'
        break
      case 'about':
        this.headData = '5'
        break
      case 'download':
        this.headData = '6'
        break
      default :
        this.headData = '10'
    }
  }
}
</script>
<style lang="scss" scoped>
@import "src/assets/style.scss";
</style>
