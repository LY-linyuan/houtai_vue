<template>
  <div style="text-align: left; font-size: 12px; display: flex">
    <div style="flex: 1; font-size: 20px">
      <span :class="collapseBtnClass" style="cursor: pointer" @click="collapse"></span>
      <el-breadcrumb separator="/" style="display: inline-block; margin-right: 10px">
        <el-breadcrumb-item :to="'/manage/home'">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="'/manage/user'">用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-dropdown style="width: 70px; cursor: pointer">
      <span>王小虎</span> <i class="el-icon-arrow-down" style="margin-left: 5px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    collapseBtnClass: String,
    collapse: Function,
    pathName: String
  },

  data() {
    return {
      paths: []
    }
  }
}
</script>

<style scoped>

</style>