<template>
  <div id="nav">
      <ul>
        <li style="padding:.8% 0 0 10%;margin-right:10%;"><img src="../assets/img/python.jpg" width="80" /></li>
        <li v-for="item in navList">
          <template v-for="site,name in item">
            <a :href="site">{{ name }}</a>
          </template>
        </li>
      </ul>
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
  a {
  text-decoration: none;
  display: block;
  padding: 2em 1.5em;
  font-size: 1.2em;
  transition: all .5s;
  color: black;
  border-radius: 20px;
}
  a:hover {
  background-color: orange;
  color: white;
}
</style>
