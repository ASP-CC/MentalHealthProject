import Vue from 'vue'
//引入Element-ui 组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入根组件
import App from './App'
//引入路由配置
import router from './router/index'

Vue.config.productionTip = false
//使用Element UI组件
Vue.use(ElementUI)
//挂载
new Vue({
  // //定义Vue绑定的根元素
  // el: "#App",
  // //用<App/>代替根元素
  // template: '<App/>',
  // //声明<App/>组件，使上面的<App/>元素生效
  // components: { App },
  // //将上面声明的路由器传递到跟 Vue 实例
  router,
  render: h => h(App),
}).$mount('#app')


// new Vue({
//   router,
//   render: h => h(header)
// }).$mount('#header')






