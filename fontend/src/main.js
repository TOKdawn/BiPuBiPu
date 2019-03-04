import Vue from 'vue'
import router from './router'
import store from 'vux/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import './assets/main.scss'
import App from './App'
import Utils from 'common/utils'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.baseURL = 'http://127.0.0.1:7003'
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(ElementUI)
// const commit = store.commit
Vue.prototype.Utils = Utils

let vRouter = new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  }
})
Vue.use({
  vRouter
})
