<template>
<!--考虑到之后还有很多地方需要对产品进行展示，干脆做成模板-->
  <div class="equip">
    <p class="item">{{ static["title"] }}</p>
    <p class="itemEng">{{ static["titleEng"] }}</p>
    <div class="equip_content" >
      <div :class="['content', {round:static['isRound']}]" v-for="item in static['stat']">
        <p>{{ item["seriName"] }}</p>
        <router-link :to="item['linkAdd']" class="imgLink">
          <img :src="item['imgSrc']" width="250" height="200">
        </router-link>
        <router-link :to="item['linkAdd']">更多</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //name: 'equip',
  props: ["equip"],
  data(){
    return {
      static: {},
    };
  },
  mounted: function() {
    this.static = this.equip
  }
  
      
      // static: {
      //     //是否采用圆角边框
      //     isRound: true,
      //     //产品大纲名称
      //     title: "设备展示",
      //     //产品大纲英文名称
      //     titleEng: "Equipment Exhibition",
      //     //产品数据
      //     stat:[
      //       {
      //         //系列名称
      //         seriName: "心理测评系列",
      //         //图片路径
      //         imgSrc: require("../assets/img/python.jpg"),
      //         //更多信息所指路径
      //         linkAdd: "/",
      //       },
      //       {
      //         seriName: "心理沙盘系列",
      //         imgSrc: require("../assets/img/python.jpg"),
      //         linkAdd: "/",
      //       }
      //     ],
      // },
    
    
  }

</script>

<style scoped>
.equip {
  margin-top: 10%;
}
.item , .itemEng{
  text-align: center;
}
p.item {
  font-size: 2em;
}
p.itemEng {
  font-size: .8em;
  font-style: italic;
  color: gray;
}
.equip_content {
  display: flex;
  align-items: center;
  padding: 5% 10% 10%;
  flex-wrap: wrap;
}
.round {
  border-radius: 20px;
}
.content {
  padding: 4% 3% 8% 3%;
  transition: all .8s;
  position: relative;
  margin-right: 5%;
}
.content > p {
  text-align: center;
  margin-bottom: 10%;
}
.content:hover {
  box-shadow: 0px 10px 17px grey;
  transform: translateY(-20px);
}
.content > img {
  transition: all .8s;
}
.content > img:hover {
  transform: scale(1.05);
}
.content > a:not(.imgLink) {
  position: absolute;
  bottom: 7%;
  padding: 2% 5%;
  font-size: 1.5em;
  font-family: "宋体";
  font-weight: bold;
  color: #fff;
  background-color: #ffb466;
  border-radius: 40px;
  text-decoration: none;
  transform: translateX(-50%);
  left: 50%;
  transition: all .8s;
  box-shadow: 0px 5px 5px grey;
  transition: all .5s;
}
.content > a:not(.imgLink):hover {
  background-color: rgb(252, 123, 3);
  box-shadow: 0px 40px 10px grey;
  bottom: 12%;
}



</style>
