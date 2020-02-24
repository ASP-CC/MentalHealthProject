<template>
  <div class="classic_btn">
      <router-link to="/">Contact Us</router-link>
  </div>
</template>

<script>
export default {
    
}
</script>
<style scoped src="../assets/font/font_family.css"></style>
<style scoped>
.classic_btn {
    display: flex;
    justify-content: center;
}
.classic_btn > a {
    text-decoration: none;
    width: 400px;
    height: 100px;
    background-color: #f3f0f1;
    position: relative;
    border-radius: 32px;
    text-align: center;
    cursor: pointer;
    line-height: 100px;
    font-family: "Montserrat", sans-serif;
    font-size: 32px;
    font-weight: semibold;
    box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
                6px 6px 10px rgba(0, 0, 0, 0.2);
    color: #6f6cde;
}
.classic_btn > a:hover {
    opacity: 0.3;
    box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
                6px 6px 10px rgba(0, 0, 0, 0.2);
}
.classic_btn > a:active {
    opacity: 1;
    box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
                inset 8px 8px 16px rgba(0, 0, 0, 0.1);
    color: #79e3b6;
}
</style>