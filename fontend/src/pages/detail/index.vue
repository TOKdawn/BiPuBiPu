<template>
    <div class="detail">
		<h1>
			我是detail页面
			&#12288;<router-link to="/index" style="float:right;">index>></router-link>
		</h1>
        detail页参数是：{{id}} <br /><br />
		{{data1}}<br /><br />
		<button @click="actionMethod">普通调用action</button>
        <button @click="method1('这里是传参')">将action映射为method1</button>
        <button @click="RESET_DATA('这里是传参')">将action映射在methods里</button>
		
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// import store from 'vux/store'

export default {
  data () {
    return {
      id: this.$route.params.id,
      newArr: [1]
    }
  },
  created () {

  },
  computed: {
    // mapState
    // 方式一
    ...mapState({
      name1: 'name', // 等同于 `state => state.name`
      name2: state => {
        return state.name
      },
      data1: 'data',
      data2: state => {
        return state.data
      },
      // 自定义state属性
      countPlusLocalState (state) {
        return state.name + this.localName
      }
    }),
    // 方式二
    ...mapState([
      'name' // 映射 this.name 为 store.state.name
    ]),

    // 混合mapGetters
    // 方式一
    ...mapGetters({
      getter1: 'user',
      getter2: 'data'
    }),
    // 方式二
    ...mapGetters(['user', 'data'])
  },
  methods: {

    // 普通调法 ： this.$store.commit('increment')
    // 将Mutations里面的方法映射到该实例中
    // 方式一
    ...mapMutations({
      method1: 'RESET_DATA',
      method2: 'SET_DATA',
      setUserName: 'SET_USER_NAME'
    }),
    // 方式二
    ...mapMutations([
      'SET_USER_NAME',
      'PUSH_USER_DATA',
      'RESET_DATA',
      'SET_DATA'
    ]),

    // 普通调法 ： this.$store.dispatch('addDATA')
    // 将Actions里面的方法映射到该实例中
    // 方式一
    ...mapActions({
      addDATA: 'ADD_DATA',
      resetData: 'RESET_DATA'
    }),
    // 方式二
    ...mapActions([
      'RESET_DATA',
      'ADD_DATA'
    ]),

    actionMethod () {
      this.$store.dispatch('RESET_DATA', ['1,2,3'])
    }

  },
  mounted () {

  },
  components: {

  }
}
</script>
<style lang="scss" scoped>
	.detail{
        border: 5px solid #ccc;
		padding: 30px;
    }
	button{
		height: 30px;
		margin: 10px 20px 10px 0;
		border-radius: 3px;
		padding: 0 10px;
	}
</style>
