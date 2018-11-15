import Vue from 'vue'
import router from './router'
import store from 'vux/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import './assets/main.scss'
import App from './App'
import Utils from 'common/utils'

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
