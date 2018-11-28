<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script type="text/javascript">
import store from 'vux/store'
import { mapState } from 'vuex'
import { pageLoading, dataLoading } from 'components'
const storeState = store.state
export default {
  data () {
    return {

    }
  },
  components: {
    pageLoading,
    dataLoading
  },
  mounted () {

  },
  computed: {
    ...mapState({
      myname: state => {
        return state.name
      },
      myData: state => {
        return state.data
      }
    }),
    ...mapState(['name', 'data'])
  },
  methods: {
    setNameOrData () {
      this.$store.commit('SET_USER_NAME', 'hello')
      console.info(storeState.data)
      this.$store.commit('PUSH_USER_DATA', new Date().getTime()) // this.$store.commit('PUSH_USER_DATA',storeState.str.split(',').reverse().join(','));
    }
  }
}

</script>
<style lang="scss" scope>
@import "./assets/main.scss";
.btn {
    height: 30px;
    display: block;
    margin: 50px auto;
    border-radius: 3px;
    padding: 0 10px;
}
</style>
