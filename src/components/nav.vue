<template>
  <div id="nav">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

        <el-menu-item index="1">
          <a href="../index/index.html">首页</a>
        </el-menu-item>

        <el-menu-item index="2">
          <a href="../about/index.html">关于</a>
        </el-menu-item>

        <el-menu-item index="3">
          <a href="../mental_equip/index.html">心理设备</a>
        </el-menu-item>

        <el-menu-item index="4">高端心理</el-menu-item>
    </el-menu>
    <ul>
      <li v-for="item in navList">
          {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
      data(){
        return {
          navList: ["首页", "关于", ]
        }
      }
  }
</script>

<style>
a {
  text-decoration: "none";
}
</style>
