// 对axios进行一个封装
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 赋值黑马头条的默认地址
// 请求拦截器
axios.interceptors.request.use(function (config) {
  // 执行请求Ok时
  // config 时axios的所有配置
  let token = window.localStorage.getItem('user-token') // 获取token
  config.headers.Authorization = `Bearer ${token}` // 统一注入token
  return config // 返回单的config 就会作为新的请求选项去进行请求
}, function () {
  // 执行请求失败
})
// 响应拦截
axios.interceptors.response.use(function (response) {
  // 成功时执行
  return response.data
}, function () {
  // 失败时执行 不是200 201/204的时候 失败
})
export default axios
