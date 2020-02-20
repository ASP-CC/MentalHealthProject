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
        <el-menu-item v-for="item in navList" :index="++count" :style="[listStyleObj]">
            <template v-for="site,name in item">
                <a :href="site" :style="[archStyleObj]">{{ name }}</a>
            </template>
        </el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        {"首页": "../index/index.html"},
        {"心理设备": "../about/index.html"},
        {"关于": "../mental_equip/index.html"},
      ],
      listStyleObj: {
        "height": "auto",
        "padding": 0,
      },
      archStyleObj: {
        "text-decoration": "none",
        "font-size": "1.4em",
        "padding": "1.5em 1.2em",
      },
      activeIndex: '1',
      activeIndex2: '1',
      count: 0,
    }
  }
}
</script>

<style scoped>
</style>
