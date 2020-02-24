<template>
  <div class="high-tec">
    <p class="high-item">高科技心理设备</p>
    <p class="high-itemEng">High-Techn</p>
    <p class="high-tec-bar">-</p>
    <div class="high-content">
        <div class="high-child-content">
            <div class="img-content">
                <img src="../assets/img/python.jpg" width="100%" />
            </div>
            <div>
                Paragraph
            </div>
        </div>

        <div class="high-child-content">
            <div class="img-content">
                <img src="../assets/img/python.jpg" width="100%" />
            </div>
            <div>
                Paragraph
            </div>
        </div>

        <div class="high-child-content">
            <div class="img-content">
                <img src="../assets/img/python.jpg" width="100%" />
            </div>
            <div>
                Paragraph
            </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.high-tec {
    margin-top: 10%;
    position: relative;
}

.high-item , .high-itemEng {
    text-align: center;
}

/* .high-tec-bar {
    position: absolute;
    top: 47px;
    width: 1100px;
    transform: translateX(-50%);
    left: 50%;
    background: url('../assets/img/navbg.png') no-repeat;
    color: white;
} */

p.high-item {
  font-size: 2em;
}
p.high-itemEng {
  font-size: .8em;
  font-style: italic;
  color: gray;
  width: 1100px;
  margin: auto;
  background: url('../assets/img/navbg.png') no-repeat center;
}

.high-content {
    padding: 5% 10% 10% 5%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.high-child-content {
    position: relative;
    margin-right: 8%;
    margin-top: 9%;
    width: 40%;
}
.img-content {
    transform-origin: bottom center;
    transition: all .6s ease-out;
    border-radius: 10px;
    overflow: hidden;
}
.img-content + div {
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0);
    transform: rotateX(90deg);
    transform-origin: top center;
    transition: all .6s ease-in;
    color: white;
}
.high-child-content:hover .img-content{
    transform: rotateX(90deg);
}
.high-child-content:hover .img-content + div {
    transform: rotateX(0);
}
</style>