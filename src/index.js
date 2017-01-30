import Vue from 'vue'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App.vue'
import Home from './views/Home.vue'
import Wall from './views/Wall.vue'
import Share from './views/Share.vue'

Vue.use(Element)
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home, meta: { scrollToTop: true }},
  {path: '/wall', component: Wall},
  {path: '/share', component: Share},
  {path: '*', redirect: '/'}
]
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
  scrollBehavior
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')