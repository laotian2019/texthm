<template>
  <!-- 头部组件 -->
  <el-row class="layout-header" type="flex" align="middle" justify="space-between">
      <!-- 左侧 -->
      <el-col class="left" :span="6">
          <!-- 左侧图标 -->
          <i class="el-icon-s-unfold"></i>
          <span class="title">江苏传智播客教育股份科技有限公司</span>
          </el-col>
      <!-- 右侧 -->
      <el-col class="right" :span="4">
        <el-row type="flex" justify="end" align="middle">
        <img src="../../assets/img/avatar.jpg" alt="">
        <!-- 下拉菜单 -->
        <el-dropdown>
        <span>倾倾倾</span>
        <!-- 下拉菜单 具名插槽 -->
        <el-dropdown-menu slot="dropdown">
            <!-- 下拉内容 -->
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>Git地址</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
        </el-row>
          </el-col>
  </el-row>
</template>

<script>

</script>

<style lang="less" scoped>
    .layout-header{
        height: 60px;
        .left{
            padding-top:8px;
            font-size: 17px;
            .title{
                margin-left: 4px;
                color: #2c3e50;
                font-size: 14px;
            }
        }
        .right{
            img{
                height: 40px;
                width: 40px;
                border-radius: 50%;
                margin-right: 10px;
            }
        }
    }
</style>
