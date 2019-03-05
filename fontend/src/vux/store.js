import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '未命名用户',
    avatar: 'http://bipu.oss-cn-beijing.aliyuncs.com/egg-multipart-test/akari.jpg',
    role: 0,
    signature: '这个人很懒,啥也没写╮(╯_╰)╭',
    phone: 18700000000

  },
  getters: {
    user: state => {
      return '我是来自getter的数据：' + state.name
    },
    data1: state => {
      return '我是来自getter的数据：' + state.data
    }
  },
  mutations: {
    uploadUserData (state, userData) {
      console.log(userData)
      state.role = userData.role
      state.username = userData.name
      state.avatar = userData.avatar
      state.signature = userData.signature
      state.phone = userData.email
    },
    logout (state) {
      state = {
        username: '未命名用户',
        avatar: 'http://bipu.oss-cn-beijing.aliyuncs.com/egg-multipart-test/akari.jpg',
        role: 0,
        signature: '这个人很懒,啥也没写╮(╯_╰)╭',
        phone: 18700000000
      }
    },
    SET_USER_RULE (state, newrule) {
      state.name = newrule
    },
    PUSH_USER_DATA (state, str) {
      state.data.push(str)
    },
    RESET_DATA (state, msg) {
      state.data = []
    },
    SET_DATA (state, data) {
      state.data = data
    },
    UPDATE_ACCOUNTS (state, accounts) {
      state.chat.accounts = accounts || []
    },
    PAGE_LOADING (state, status) {
      state.page_loading = status
    },
    DATA_LOADING (state, status) {
      state.date_loading = status
    },
    AUTH_LOGIN (state, status) {
      state.auth_login = status
    },
    USER_DATA (state, status) {
      state.user_data = status || {}
    }
  },
  actions: {
    RESET_DATA (context, pars) {
    // 模拟异步
      setTimeout(() => {
        context.commit('RESET_DATA', pars)
      }, 500)
    },
    ADD_DATA ({ commit }, pars) {
      setTimeout(() => {
        commit('SET_DATA', pars)
      }, 500)
    }
  }
})
