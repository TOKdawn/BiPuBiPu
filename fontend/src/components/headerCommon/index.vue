<template>
  <header>
    <div class="logo">
    </div>
    <div class="user">
    </div>
  </header>
</template>
<script type="text/javascript">

export default {
  data () {
    return {
      userName: '',
      defaultOpeneds: 1212
    }
  },
  created () {

  },
  computed: {

  },
  methods: {
    handleOpen (key, keyPath) {
      // window.localStorage.setItem(openedLocalKey, key);
      //
    },
    handleClose (key, keyPath) {
      // window.localStorage.setItem(openedLocalKey, '');
      //
    },
    handleCommand (command) {
      if (command === 'out') {
        // alert('退出');
        location.href = '/logout.go'
        // this.$message('click on item ' + command);
      }
    }
  }
}

</script>
<style lang="scss" scoped>


</style>
