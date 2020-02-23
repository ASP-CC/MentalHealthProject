<template>
  <div id="pageHead">
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
    
  </div>
</template>

<script>
export default {
  name: "pageHead",
  props: ["navList"],
  data () {
    return {

      // navList: [
      //   {"首页": '/'},
      //   {"心理设备": '/mental_equip'},
      //   {"关于": '/about'},
      // ],


      listStyleObj: {
        "height": "auto",
        "padding": 0,
      },
      archStyleObj: {
        "text-decoration": "none",
        "font-size": "1.4em",
        "padding": "1.5em 1.2em",
      },
      
      
    }
  },

}

</script>

<style scoped>
  #nav {
  z-index: 100;
  position: fixed;
  width: 100%;
  transition: box-shadow .5s;
}
  #nav:hover {
    box-shadow: rgb(198, 198, 198) 0px 0px 20px;
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
  a:not(#img):hover {
  background-color: orange;
  color: white;
}

</style>
