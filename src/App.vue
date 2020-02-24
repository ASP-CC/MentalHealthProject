<template>
  <div id="App">
    <!--导航栏及轮播图-->
    <pageHead id="head" :navList=navList></pageHead>
    <carousel id="carousel"></carousel>
    <router-view></router-view>
    <!--主体-->
    <div id="app">
      <transition :name="transitionName">
        <router-view name="about"></router-view>
        <router-view name="equip"></router-view>

                
      </transition>
    </div>
    <router-view name="high_tec"></router-view>
    <router-view name="displayer"></router-view>
    <router-view name="classic_btn"></router-view>
    <keep-alive>
      <router-view name="article"></router-view>
    </keep-alive>

    
  <!--页脚-->

  </div>
</template>

<script>
 import pageHead from './components/Header'
 import carousel from './components/carousel'

 export default {
  name: "app",
  data(){
    return {
      transitionName: "",
      //Header组件数据
      navList: [
        {"首页": '/'},
        {"心理设备": '/mental_equip'},
        {"关于": '/about'},
        {"试验": '/test'},
      ],
    }
  },
  components: {
    pageHead,
    carousel,
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



