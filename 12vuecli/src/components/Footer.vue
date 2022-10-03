<template>
  <div class="footer_box">
    <div class="sns_btn">
      <img src="../assets/images/fb_btn.png" alt="facebookボタン" class="fb_btn">
      <img src="../assets/images/insta_btn.png" alt="instaglamボタン" class="insta_btn">
    </div>
    <footer>
      <div class="footer">
        <img src="../assets/images/footer_img.png" alt="温泉マーク">
        <p class="footer_gu">宮内温泉旅館</p>
        <p class="footer_yu">&#12306;048&#045;0621</p>
        <p class="footer_add">北海道島牧郡島牧村字泊431</p>
        <p class="footer_tel">TEL:0136-75-6320</p>
        <p class="footer_sm"><small>Copyright 2017 宮内温泉旅館</small></p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
/*-------------------------
  pc
-------------------------*/
@media screen and (min-width:768px){
/* SNSボタン */
.sns_btn{
  position: relative;
}

.fb_btn{
  position: absolute;
  top: 1em;
  left: 1em;
}

.insta_btn{
  position: absolute;
  top: 1em;
  left: 4em;
}

/* フッター */
footer{
  overflow: hidden;
  zoom: 1;
  margin: auto;
  text-align: center;
  font-size: 1em;
  background-image: url(../assets/images/footer_bg.jpg);
}

.footer{
  width: 210px;
  margin: auto;
}

.footer img{
  display: inline-block;
  width: 12%;
  *display: inline;
  *zoom: 1;
  margin: 0.3em 0 0 1em;
  *margin: 1em 0 0;
  float: left;
}

.footer_gu{
  font-size: 1.4em;
  margin: 1.5em 1em 0.3em auto;
}

.footer_yu{
  font-size: 0.8em;
  margin:0 auto;
}

.footer_add{
  font-size: 1em;
  margin:0 auto;
}

.footer_tel{
  font-size: 1.3em;
  margin:0 auto;
}

.footer_sm{
  font-size: 1em;
  margin: 20px auto 0;
}
}
</style>
