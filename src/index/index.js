import Vue from 'vue'
//引入导航栏组件
import Nav from '../components/nav'
//引入轮播图组件
import Carousel from '../components/carouse'
import router from '../router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//使用Element UI组件
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(Nav)
}).$mount('#nav')

new Vue({
  router,
  render: h => h(Carousel)
}).$mount('#carousel')
