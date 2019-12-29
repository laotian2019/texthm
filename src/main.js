import Vue from 'vue'
import App from './App.vue'
import './permission'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less' // 引入初始化样式
import axios from './utils/request' // 引入自己封装的axios
import Component from './components/index' // 引入组件对象

Vue.prototype.$axios = axios// 赋值全局对象
Vue.config.productionTip = false
Vue.use(ElementUI)// 全局注册
Vue.use(Component)// 注册全局组件
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
