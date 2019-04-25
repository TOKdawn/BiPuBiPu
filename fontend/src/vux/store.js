import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: '' || localStorage.getItem('id'),
    username: '' || localStorage.getItem('username'),
    avatar: '' || localStorage.getItem('avatar'),
    role: '' || localStorage.getItem('role'),
    signature: '' || localStorage.getItem('signature'),
    phone: '' || localStorage.getItem('phone'),
    activahead: 1
  },
  getters: {
    role: (state) => state.role,
    username: (state) => state.username,
    avatar: (state) => state.avatar,
    signature: (state) => state.signature,
    phone: (state) => state.phone,
    id: (state) => state.id
  },
  mutations: {
    uploadUserData (state, userData) {
      console.log(userData)
      state.role = userData.role
      state.username = userData.name
      state.avatar = userData.avatar
      state.signature = userData.signature
      state.phone = userData.email
      state.id = userData.id
      localStorage.setItem('role', userData.role)
      localStorage.setItem('username', userData.name)
      localStorage.setItem('avatar', userData.avatar)
      localStorage.setItem('signature', userData.signature)
      localStorage.setItem('phone', userData.email)
      localStorage.setItem('id', userData.id)
    },
    logout (state) {
      state.username = ''
      state.avatar = ''
      state.role = ''
      state.signature = ''
      state.phone = ''
      state.id = ''
      localStorage.setItem('role', 0)
      localStorage.setItem('username', '未命名用户')
      localStorage.setItem('avatar', 'http://bipu.oss-cn-beijing.aliyuncs.com/egg-multipart-test/akari.jpg')
      localStorage.setItem('signature', '这个人很懒,啥也没写╮(╯_╰)╭')
      localStorage.setItem('phone', '000')
      localStorage.setItem('id', '')
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
