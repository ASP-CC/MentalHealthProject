<template>
  <div id="carousel">
    <el-carousel :interval="4000" type="card" height="500px">
      <el-carousel-item v-for="img in carouImg">
        <img :src="img" class="image" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  data(){
    return {
      carouImg: [
        require("../assets/img/python.jpg"),
        require("../assets/img/python.jpg"),
        require("../assets/img/python.jpg"),
        require("../assets/img/python.jpg"),
      ]
    }
  }
}
</script>

<style scoped>
.image {
  width: 80%;
}
</style>
