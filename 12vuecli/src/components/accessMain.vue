<template>
  <main>
    <section id="access01">
      <h3>お車でお越しの場合</h3>
      <p>道央道黒松内ＪＣＴから黒松内新道、<br> 道道２６５号・９号、<br>国道２２９号、<br>道道８３６号線へ&#040;島牧美利河線&#041;<br>６５ｋｍ</p>
      <img src="../assets/images/access_img01.jpg" alt="道の駅">
    </section>
    <section id="access02">
      <h3>電車、バスでお越しの場合</h3>
      <h4>電車&#040;ＪＲ&#041;</h4>
      <p>札幌駅から特急で長万部駅で下車。<br>普通列車に乗り換え、黒松内駅で下車。<br>約３時間３０分</p>
      <h4>バス</h4>
      <p>黒松内駅前から寿都行き「ニセコバス」に乗車。<br>寿都から栄浜行き又は、原歌行きのバスに乗り換え。 <br>島牧村役場で下車。<br>※無料送迎を行っております。事前にご連絡いただきましたら、島牧村役場前までお迎えに参ります。</p>
      <img src="../assets/images/access_img02.jpg" alt="黒松内駅">
    </section>

    <div id="map" style="width: 100%; height: 300px;">
    <!--このdiv内に地図を表示させる。サイズなどはcssで調整してね-->
    </div>
    <div id="pageTop"><a href="#"><img src="../assets/images/pagetop.png" alt="トップへ戻るボタン" class="pagetop"></a></div>
  </main>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style>
/*-------------------------
  pc
-------------------------*/
@media screen and (min-width:768px){
/* 交通アクセス */
#access_header{
  width: 100%;
  background-image: url(../assets/images/access_header_bg_pc.png);
  background-repeat: no-repeat;
  background-size: cover;
}

#access01,
#access02{
  overflow: hidden;
  zoom: 1;
  margin: 4em auto;
}

#access01 h3,
#access02 h3,
#access02 h4,
#access01 p,
#access02 p{
  width: 47%;
  margin: 0 3% 0 10%;
  float: left;
}

#access01 p,
#access02 p{
  font-size: 1.15em;
}

#access01 img{
  width: 30%;
  margin: -2em 10% 0 0;
  float: right;
}

#access02 img{
  width: 30%;
  margin: -10.5em 10% 0 0;
  float: right;
}

#g_map{
  width: 100%;
  height: 400px;
  margin: 0 auto;
}
}
</style>
