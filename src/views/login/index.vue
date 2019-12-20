<template>
  <div class="login">
      <!-- el-card放置卡片组件 -->
      <el-card class="login-card">

          <!-- 卡片里面放置图片 -->
    <div class="title">
        <img src="../../assets/img/logo_index.png" alt="">
    </div>

    <!-- el-form登录表单 表单容器 -->
    <el-form style="margin-top:20px">
        <!-- item表单域 -->
        <el-form-item>
            <!-- 放置具体的组件 -->
            <el-input placeHolder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
            <!-- 表单域 -->
            <el-input style="width:66%" placeHolder="请输入验证码"></el-input>
            <el-button style="float:right" plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
            <el-checkbox>我以同意用户协议和隐私条款</el-checkbox>
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
