<template>
  <!-- 放置一个容器 -->
  <el-container>
    <!-- 左右布局 -->
    <el-aside style="background-color:#353b4e;height:100vh;width:230px">
      <!-- 放置左侧组件 -->
      <layout-aside>左侧导航1231231</layout-aside>
    </el-aside>
    <!-- 再放置一个container -->
    <el-container>
      <!-- 上下布局 -->
      <el-header>
        头部
        </el-header>
      <!-- 主要区域 -->
      <el-main>
        主要区域
        </el-main>
    </el-container>
  </el-container>
</template>

<script>
import layoutAside from '../../components/home/layout-aside' // 引入局部
export default {
  components: {
    'layout-aside': layoutAside
  }
}
</script>

<style>
</style>
