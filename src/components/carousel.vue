<template>
    <div id="carousel">
    <el-carousel :interval="4000" arrow="always" height="500px">
        <el-carousel-item v-for="img in carouImg">
        <router-link :to="img['link']">
            <img :src="img['url']" class="image" />
        </router-link>
        </el-carousel-item>
    </el-carousel>
    </div>
</template>

<script>
export default {
    name: "carousel",
    data(){
        return {
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
  .image {
  width: 100%;
  height: 500px;
}
  #carousel {
    padding-top: 12%;
  }
</style>