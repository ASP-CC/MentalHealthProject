import Vue from 'vue'
import Nav from '../components/nav'
import router from '../router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Nav)
}).$mount('#nav')
