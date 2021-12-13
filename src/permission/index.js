// 权限拦截 导航守卫
import router from '../router'
// 全局的前置守卫
router.beforeEach(function (to, from, next) {
  // 判断拦截地址111
  if (to.path.startsWith('/home')) {
    // 进行权限判断 判断有无token 如果有token就放过 如果没有 回到登录页面
    let token = window.localStorage.getItem('user-token')
    if (token) {
      // 直接放过
      next()
    } else {
      next('/login')// 跳转到登录页面
    }
  } else {
    next()// 直接放行
  }
})
