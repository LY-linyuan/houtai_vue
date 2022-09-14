<template>
  <el-container style="min-height: 100%; ">
    <el-aside :width="sideWidth + 'px'" style="background-color: rgb(238, 241, 246); box-shadow: 2px 0 6px rgb(0 21 41 / 35%); height: 100%;">
        <Aside :is-collapse="isCollapse" :loginTextShow="loginTextShow" />
    </el-aside>

    <el-container>
      <el-header style="text-align: left; font-size: 12px; border-bottom: 1px solid #ccc; line-height: 60px; display: flex">
          <Header :collapseBtnClass="collapseBtnClass" :collapse="collapse"></Header>
      </el-header>

      <el-main>
<!--  表示当前页面的子路由会在  <router-view>  来展示      -->
          <router-view></router-view>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>

import Aside from "@/views/Aside";
import Header from "@/views/Header";

export default {
  name: 'HomeView',
  data() {
    return {

      collapseBtnClass: 'el-icon-s-fold',
      isCollapse: false,
      sideWidth: 200,
      loginTextShow: true
    }
  },


  components: {
    Aside,
    Header
  },

  methods: {
    collapse() {  // 点击收缩按钮触发
      this.isCollapse = !this.isCollapse
      if (this.isCollapse) {
        this.sideWidth = 64
        this.collapseBtnClass = 'el-icon-s-unfold'
        this.LoginTextShow = false
      } else {
        this.sideWidth = 200
        this.collapseBtnClass = 'el-icon-s-fold'
        this.LoginTextShow = true
      }
    },


  }
};
</script>
