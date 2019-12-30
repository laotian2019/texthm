// 对axios进行一个封装
import axios from 'axios'
import router from '../router' // 路由实例对象引入
import { Message } from 'element-ui'// 引入提示对象
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 赋值黑马头条的默认地址
// 请求拦截器
axios.interceptors.request.use(function (config) {
  // 执行请求Ok时
  // config 时axios的所有配置
  let token = window.localStorage.getItem('user-token') // 获取token
  config.headers.Authorization = `Bearer ${token}` // 统一注入token
  return config // 返回单的config 就会作为  新的请求选项去进行请求
}, function () {
  // 执行请求失败
})
// 响应拦截
axios.interceptors.response.use(function (response) {
  // 成功时执行
  return response.data ? response.data : {} // 解决当data不再时 then中读取的数据报错问题
}, function (error) {
  // 回调函数 所有的失败 都会进入到第二个回调函数
  // 失败时执行 不是200 201/204的时候 失败
  // 获取状态码=>根据状态码进行相应的提示和操作
  let status = error.response.status // 获取状态码，根据状态码提示
  // let configurl = error.request.url// 请求地址
  let message = '' // 提示信息
  switch (status) {
    case 400:
      message = '手机号或者验证码错误'
      break
    case 403:
      // 请求地址 + 状态码一起来判断
      // message = 'refresh_token未携带已过期'
      router.push('/login')
      break
    case 401:
      router.push('/login')
      break
    case 507:
      message = '服务器数据库异常'
      break
    case 404:
      message = '手机号不正确'
      break
    default:
      break
  }
  Message({ type: 'warning', message }) // 提示消息
})
export default axios
