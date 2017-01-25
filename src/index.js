import Vue from 'vue'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import './theme/index.css'
import App from './App.vue'

import Home from './views/Home.vue'
import Wall from './views/Wall.vue'

Vue.use(Element)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path: '/wall', component: Wall}
  ]
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')