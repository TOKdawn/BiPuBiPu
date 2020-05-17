<template>
<div class="footer">
  <div class="logo">
    <img src="https://bipu.oss-cn-beijing.aliyuncs.com/website/justice_eternal.png" alt="logo">
  </div>
  <div class="info">
    <h2>BipuBipu曲谱站</h2>
       <div>QQ群:690514210  &nbsp; B站账号:<a href="https://space.bilibili.com/1596911?from=search&seid=5311097110335751132" style="color:rgb(210, 239, 89); font-weight: 500">@哔谱哔谱</a></div>
    <p>Made with ❤️by  <a href="http://dawninshadow.com/">TOKdawn</a> </p>
    <div>Copyright 2018-2020 BipuBipu </div>
    <div>黔ICP备17010756号 | 贵公网安备52011102002222号</div>
  </div>
  <div>

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
  box-shadow: 0 -1px 3px rgba(26, 26, 26, 0.1);
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
      margin-top: -15px;
    }
    p{
      font-size: $--basicFontSize;
      a{
        margin-left: 5px;
        color: $--footTextColor;
        text-decoration: underline;
      }
      margin-bottom: 3px;
    }
  }
}

</style>
