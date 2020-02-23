<template>
    <div>
        <equip :equip="static"></equip>
    </div>
</template>

<script>
import equip from '../components/equip_module'
export default {
    components:{
        equip,
    },
    data(){
        return {
            //equip组件数据
            static: {
                //是否采用圆角边框
                isRound: true,
                //产品大纲名称
                title: "设备展示",
                //产品大纲英文名称
                titleEng: "Equipment Exhibition",
                //产品数据
                stat:[
                    {
                    //系列名称
                    seriName: "心理测评系列",
                    //图片路径
                    imgSrc: require("../assets/img/python.jpg"),
                    //更多信息所指路径
                    linkAdd: "/",
                    },
                    {
                    seriName: "心理沙盘系列",
                    imgSrc: require("../assets/img/python.jpg"),
                    linkAdd: "/",
                    },
                    {
                    seriName: "心理沙盘系列",
                    imgSrc: require("../assets/img/python.jpg"),
                    linkAdd: "/",
                    },
                ],
            },
        };
    },
    
}
</script>

<style>

</style>