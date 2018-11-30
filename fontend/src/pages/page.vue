<template>
<div style="min-width:1024px;">
  <Head></Head>
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

    }
  },
  components: {
    Head,
    Foot
  }
}
</script>
<style lang="scss" scoped>
@import "src/assets/style.scss";

</style>
