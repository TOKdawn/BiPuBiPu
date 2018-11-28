<template>
<div class="footer">
  <div class="logo">
    <img src="./justice_eternal.png" alt="logo">
  </div>
  <div class="info">
    <h2>BipuBipu曲谱站</h2>
    <p>Made with ❤️by  <a href="http://dawninshadow.com/">TOKdawn</a></p>
    <div>Copyright 2018-2019 BipuBipu @哔谱哔谱</div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
@import "src/assets/style.scss";
.footer{
  background: linear-gradient(180deg,#Ec908c 0,#f29a58);
  padding: 70px 10%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  .logo{
    text-align: center;
    img{
      width: 100px;
      height: 100px;
    }
  }
  .info{
    margin-left: 50px;
    color: $--footTextColor;
    h2{
      font-size: $--FontSizeXXXL;
    }
    p{
      font-size: $--basicFontSize;
      a{
        margin-left: 5px;
        color: $--footTextColor;
        text-decoration: underline;
      }
      margin-bottom: 5px;
      
    }
  }
}

</style>
