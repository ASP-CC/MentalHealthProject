import Vue from 'vue'
import VueRouter from 'vue-router'
import about from '../views/About'
import equip from '../components/equip'
Vue.use(VueRouter)
//定义路由表
const routes = [
  {
    path: '/',
    //component: () => import('../App'),
    meta: {
      index: 1,
    },
    components: {
    }
  },
  {
    path: '/about',
    meta: {
      index: 2,
    },
    components:{
      about: about,
    },
  },
  {
    path: '/mental_equip',
    meta: {
      index: 3,
    },
    components:{
      equip: equip,
    },
  },
]
const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router

// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
//
// Vue.use(VueRouter)
//
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]
//
// const router = new VueRouter({
//   routes
// })
//
// export default router
