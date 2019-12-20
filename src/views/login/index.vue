<template>

  <div class="login">

      <!-- el-card放置卡片组件 -->
      <el-card class="login-card">

          <!-- 卡片里面放置图片 -->
    <div class="title">
        <img src="../../assets/img/logo_index.png" alt="">
    </div>

    <!-- el-form登录表单 表单容器 需要绑定model属性 rules属性绑定验证规则对象-->
    <el-form style="margin-top:30px" :model="loginForm" :rules="loginRules">
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
            <el-button type="primary" style="width:100%">同意</el-button>
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
        code: [{ required: true, message: '请输入' }]
      }
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
