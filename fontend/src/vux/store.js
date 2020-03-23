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
    role: (state) => { return state.role || localStorage.getItem('role') },
    username: (state) => state.username,
    avatar: (state) => state.avatar,
    signature: (state) => state.signature,
    phone: (state) => state.phone,
    id: (state) => { return state.id || localStorage.getItem('id') }
  },
  mutations: {
    uploadUserData (state, userData) {
    //   console.log(userData)
      state.role = userData.role || state.role
      state.username = userData.name || state.username
      state.avatar = userData.avatar || state.avatar
      state.signature = userData.signature || state.signature
      state.phone = userData.email || state.phone
      state.id = userData.id || userData.id
      localStorage.setItem('role', state.role)
      localStorage.setItem('username', state.username)
      localStorage.setItem('avatar', state.avatar)
      localStorage.setItem('signature', state.signature)
      localStorage.setItem('phone', state.phone)
      localStorage.setItem('id', state.id)
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
