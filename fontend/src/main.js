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
import Qs from 'qs'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.baseURL = 'http://127.0.0.1:7003'
Vue.prototype.$http = axios
Vue.prototype.$qs = Qs
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(mavonEditor)
// const commit = store.commit
Vue.prototype.Utils = Utils
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.role === 0) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})
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
