import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './route'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition;
    }
    if (to.hash) {
      return { selector: to.hash }
    }
  }
})

router.beforeEach((to, from, next) => {
  console.log('Global route guards')
  next()
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


// Mỗi thành phần trong Web tương ứng mỗi Component -> Tương ứng với 1 file *.vue