// import Vue from 'vue'
import VueRouter from 'vue-router'
import store from 'vux/store'

const commit = store.commit

// Vue.use(VueRouter)
// component: resolve => require(['pages/home'], resolve),
const routes = require('./routers')
const router = new VueRouter({
  base: '/',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    from.name ? next({ name: from.name }) : next('/')
  } else {
    next()
  }
})

router.afterEach(route => {
  setTimeout(function () {
    commit('PAGE_LOADING', false)
  }, 200)
})

export default router
