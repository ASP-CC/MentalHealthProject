import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//引入Element-ui 组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//引入项目头部内容(根)组件
import App from './App'

import router from './router/index'

Vue.config.productionTip = false
//使用Element UI组件
Vue.use(ElementUI)
new Vue({
  //定义Vue绑定的根元素
  el: "#App",
  //用<App/>代替根元素
  template: '<App/>',
  //声明<App/>组件，使上面的<App/>元素生效
  components: { App },
  //将上面声明的路由器传递到跟 Vue 实例
  router,
}).$mount('#App')


// new Vue({
//   router,
//   render: h => h(header)
// }).$mount('#header')






