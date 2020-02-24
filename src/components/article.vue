<template>
    <div id="article">
        <div id="pre_bg" ref="pre_bg" @click="cancelPre()"></div>
        <div ref="pre_arti" id="pre_arti">
            <p></p>
            <hr />
            <div></div>
        </div>
        <div style="width:100%;">
            <h1>文章写录</h1>
            <div class="arti_cont">
                <span class="title" ref="title">title</span>
                <label>标题<span class="flo_quo">：</span></label>
                <el-input
                    style="width:80%;"
                    type="text"
                    clearable
                    v-model="title"
                    id="title_in"
                    @focus="titMove()"
                    @blur="titDown()"
                    >
                </el-input>
            </div>
            <div class="arti_cont">
                <span class="title" ref="article">article</span>
                <label>文章内容<span class="flo_quo">：</span></label>
                <el-input
                    style="width:80%;"
                    type="textarea"
                    :autosize="{ minRows: 10}"
                    @focus="artMove()"
                    @blur="artDown()"
                    v-model="article">
                    </el-input>
            </div>
            <div id="btn_group">
                <a class="sub_btn" @click="submit()">提交</a>
                <a class="sub_btn" @click="pre()">预览</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: "",
            article: "",
        }
    },
    methods: {
        //控制输入框内初始化的文字随focus事件移动
        titMove: function() {
            this.$refs.title.style.top = "-12px";
            this.$refs.title.style.opacity = "1";
        },
        titDown: function() {
            if("" === this.title) {
                this.$refs.title.style.top = "9px";
                this.$refs.title.style.opacity = ".5";
            }
        },
        artMove: function() {
            this.$refs.article.style.top = "-12px";
            this.$refs.article.style.opacity = "1";
        },
        artDown: function() {
            if("" === this.article) {
                this.$refs.article.style.top = "9px";
                this.$refs.article.style.opacity = ".5";
            }
        },
        pre: function() {
            let article = this.$refs.pre_arti.children;
            let bg = this.$refs.pre_bg;
            this.$refs.pre_arti.style.visibility = "visible";
            bg.style.visibility = "visible";
            this.$refs.pre_arti.style.transform = "translate(-50%, 0)";
            article[0].innerHTML = this.title;
            article[2].innerHTML = this.article;
        },
        cancelPre: function() {
            let article = this.$refs.pre_arti.children;
            let bg = this.$refs.pre_bg;
            this.$refs.pre_arti.style.visibility = "hidden";
            bg.style.visibility = "hidden";
            this.$refs.pre_arti.style.transform = "translate(-50%, -200%)";
        },
        submit: function() {
            this.$confirm("请确定是否提交文章？",{
                confirmButtonText: "确定",
                cancelButtenText: "取消",
                center: true,
            }).then(() => {
                this.$message({
                    type: "success",
                    message: "提交成功",
                });
            }).catch(() => {
                this.$message({
                    type: "info",
                    message:  "取消提交",
                });
            });
        }
    },
}
</script>

<style>

#article {
    margin: 20% 10% 5% 10%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

#article  h1 {
    width: 100%;
    text-align: center;
    margin: 5% 0;
}

.arti_cont {
    width: 100%;
    margin-bottom: 3%;
    position: relative;
}

.title {
    position: absolute;
    top: 9px;
    left: 11.5%; 
    z-index: 1;
    color: rgb(64,158,255);
    background-color: white;
    opacity: .5;
    transition: all .3s;
}

label {
    width: 10%;
    font-size: 1.1em;
    padding-top: 7px; 
    float: left;
}

.flo_quo {
    float: right;
}

#btn_group {
    margin-right: 15%;
    overflow: hidden;
}

.sub_btn {
    float: right;
    margin-left: 12px;
    padding: 5px 20px;
    color: black;
    cursor: pointer;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
    font-weight: 400;
}

.sub_btn:nth-child(1) {
    background-color: rgb(101,84,192);
    color: white;
}

.sub_btn:nth-child(2) {
    background-color: rgb(235,236,240);
}

.sub_btn:nth-child(1):hover {
    background-color: rgb(135,119,217);
}

.sub_btn:nth-child(2):hover {
    background-color: rgb(223,225,230);
}

.sub_btn:nth-child(1):active {
    background-color: rgb(101,84,192);
}

.sub_btn:nth-child(2):active {
    background-color: rgb(193,199,208);
}

#pre_bg {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgb(132,143,160);
    opacity: .5;
    visibility: hidden;
    transition: all .3;
}

#pre_arti {
    position: fixed;
    z-index: 110;
    width: 600px;
    margin:30px auto;
    background-color: white;
    color: black;
    box-shadow: 0 3px 9px rgba(0,0,0,.5);
    transform: translate(-50%, -200%);
    left: 50%;
    top: 10%;
    max-height: 70%;
    white-space: pre-wrap;
    overflow: auto;
    border-radius: 6px;
    visibility: hidden;
    transition: all .5s ease-out;
}

#pre_arti > p {
    font-size: 18px;
    padding: 15px;
    text-align: center;
}
#pre_arti > div {
    padding: 15px;
}
</style>