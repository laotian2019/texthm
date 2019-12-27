import LayoutAside from './home/layout-aside'
import LayoutHeader from './home/layout-header'
export default {
  install (vue) {
    vue.component('layout-aside', LayoutAside)// 全局注册
    vue.component('layout-header', LayoutHeader)
  }
}
