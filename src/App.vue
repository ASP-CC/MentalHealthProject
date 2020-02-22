<template>
  <div id="App">
  <!--导航栏及轮播图-->
   <pageHead id="head"></pageHead>

   <!--主体-->
    <div id="app">
      <router-view></router-view>
      <transition :name="transitionName">
        <router-view name="about"></router-view>
        <router-view name="equip"></router-view>
      </transition>
    </div>


  <!--页脚-->

  </div>
</template>

<script>
 import pageHead from './components/Header'
 export default {
  name: "app",
  data(){
    return {
      transitionName: "",
    }
  },
  components: {
    pageHead,
  },
  watch: {
    $route(to, from) {
      if(to.meta.index > from.meta.index){
        this.transitionName = "slide-left";
      } else if (to.meta.index < from.meta.index) {
        this.transitionName = "slide-right";
      }
    },
  },
 }
</script>

<style scoped>

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>



