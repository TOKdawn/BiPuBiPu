import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '未命名用户',
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    rule: 0,
    page_loading: false,
    date_loading: false,
    auth_login: false,
    user_data: {}
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
    SET_USER_NAME (state, newname) {
      state.name = newname
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
