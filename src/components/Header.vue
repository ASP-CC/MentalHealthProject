<template>
  <div id="myheader">
  <div id="nav">
      <ul>
        <li style="padding:.8% 0 0 10%;margin-right:10%;">
          <router-link id="img" to="/">
             <img src="../assets/img/python.jpg" width="80" />
          </router-link>
        </li>
        <li v-for="item in navList">
          <template v-for="site,name in item">
            <router-link :to="site">{{ name }}</router-link>
          </template>
        </li>
      </ul>
  </div>
  <div id="carousel">
    <el-carousel :interval="4000" arrow="always" height="500px">
      <el-carousel-item v-for="img in carouImg">
         <router-link :to="img['link']" class="carousel_link">
            <img :src="img['url']" class="image" />
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>
</template>

<script>
export default {
  name: "pageHead",
  data () {
    return {
      navList: [
        {"首页": '/'},
        {"心理设备": '/mental_equip'},
        {"关于": '/about'},
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
      carouImg: [
        {"url": require("../assets/img/python.jpg"), "link": "/"},
        {"url": require("../assets/img/python.jpg"), "link": "/"},
        {"url": require("../assets/img/python.jpg"), "link": "/"},
        {"url": require("../assets/img/python.jpg"), "link": "/"},
        {"url": require("../assets/img/python.jpg"), "link": "/"},
      ],
    }
  }
}
</script>

<style scoped>
  #nav {
  margin-bottom: 3%;
}
  ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
  width: 100%;
  background-color: white;
  overflow: hidden;
}
  li {
  float: left;
  overflow: hidden;
}
  a:not(#img) {
  text-decoration: none;
  display: block;
  padding: 2em 1.5em;
  font-size: 1.2em;
  transition: all .5s;
  color: black;
  border-radius: 20px;
}
  a:not(#img):not(.carousel_link):hover {
  background-color: orange;
  color: white;
}
  .image {
  width: 100%;
  height: 500px;
}
</style>
