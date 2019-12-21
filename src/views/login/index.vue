<template>
<!-- 测试git hub -->
  <div class="login">

      <!-- el-card放置卡片组件 -->
      <el-card class="login-card">

          <!-- 卡片里面放置图片 -->
    <div class="title">
        <img src="../../assets/img/logo_index.png" alt="">
    </div>

    <!-- el-form登录表单 表单容器 需要绑定model属性 rules属性绑定验证规则对象-->
    <el-form ref="myForm" style="margin-top:30px" :model="loginForm" :rules="loginRules">
        <!-- item表单域  prop=>校验的字段名-->
        <el-form-item prop="mobile">
            <!-- 放置具体的组件 -->
            <el-input v-model="loginForm.mobile" placeHolder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
            <!-- 表单域  model需要双向绑定数据对象-->
            <el-input v-model="loginForm.code" style="width:66%" placeHolder="请输入验证码"></el-input>
            <el-button style="float:right" plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
            <el-checkbox v-model="loginForm.check">我以同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
        <!-- 注册点击事件！！！！要不然没有自动校验 -->
            <el-button @click='submitLogin' type="primary" style="width:100%">登录</el-button>
        </el-form-item>
    </el-form>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
    // 定义一个表单数据对象
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: false // 是否勾选
      },
      loginRules: {
        // 验证规则，登录表单的 key校验的(字段名称 )：value(数组)
        mobile: [{ required: true, message: '请输入您的手机号' }, {
          pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号'
        }],
        code: [{ required: true, message: '请输入验证码' }, {
          pattern: /^\d{6}$/, message: '验证码格式不正确'
        }],
        check: [{ validator: function (rule, value, callback) {
          // value指的是我们校验字段的值
          if (value) { // 校验通过 放过去
            callback()
          } else { // 校验不通过提示信息
            callback(new Error('您必须勾选'))
          }
        } }]
      }
    }
  },
  methods: {// 提交登录表单
    submitLogin () {
      // el-form实例
      this.$refs.myForm.validate(function (isOk) {
        if (isOk) {
          console.log('前端校验成功，发送用户名和密码去后端校验')
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
    .login{
        background-image: url('../../assets/img/login_bg.jpg');
        background-size: cover;//自适应背景
        height: 100vh; //vh图片铺满
        display:flex;
        justify-content: center;//左右居中
        align-items: center;//上下居中
        .login-card{
        height: 350px;
        width: 440px;
        .title{
            text-align: center;
            img {
                height: 44px;
            }
        }
        }
    }
</style>
