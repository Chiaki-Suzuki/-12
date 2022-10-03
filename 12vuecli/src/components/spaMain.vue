<template>
  <main>
    <section id="spa01">
      <p class="p01">江戸時代の１８５０年代に発見された、北海道では古い温泉です。<br>お湯は、無色透明で赤い湯花が浴槽の底に沈んでいます。<br>キシキシとした肌ざわりです。</p>
      <img src="../assets/images/spa_img99.jpg" alt="宮内温泉の写真" class="img100">
    </section>
    <section id="spa02">
      <h2>泉質・効能</h2>
      <img src="../assets/images/spa_img01.jpg" alt="宮内温泉の湯口" class="spa_img01">
      <dl>
        <dt>泉　　質：</dt>
        <dd>ナトリウム・炭酸水素塩・硫酸塩泉</dd>
        <dt>分　　類：</dt>
        <dd>中性低張性高温泉</dd>
        <dt>源泉温度：</dt>
        <dd>４８.８度</dd>
        <dt>効　　能：</dt>
        <dd>リウマチ性疾患、慢性消化器病、やけど、高血圧症、皮膚病、疲労回復、健康増進</dd>
      </dl>
      <p>時間が許す限り、入浴と休憩を交互に行うとより効果的です。のんびりと日々の疲れを癒してくださいませ。</p>
    </section>
    <div class="flexslider">
      <ul class="slides">
        <li><img src="../assets/images/spa_img02.jpg" alt="温泉の入り口" class="spa_img02"></li>
        <li><img src="../assets/images/spa_img03.jpg" alt="宮内温泉" class="spa_img02"></li>
        <li><img src="../assets/images/spa_img04.jpg" alt="露天風呂" class="spa_img02"></li>
      </ul>
    </div>
    <article id="spa03">
      <div class="spa03_txt">
        <h3>象の花子が湯治した温泉</h3>
        <img src="../assets/images/hanako.jpg" alt="象の花子の写真" class="sp">
        <p>宮内温泉は１９７１&#040;昭和４６&#041;年、象の花子が湯治に来たことで知られます。<br>花子は開園当時の旭山動物園にいましたが、クル病にかかり歩行が困難になってきたため湯治に訪れました。<br>旅館の前に建てたプレハブ「花子のおやど」には大浴槽と寝室があり5年間ほど暮らしました。<br>病状がよくなってきた頃、暖かい土地で治療することになり１９７６&#040;昭和５１&#041;年、本州へ向けて旅立ちました。</p>
      </div>
      <img src="../assets/images/hanako.jpg" alt="象の花子の写真" class="pc">
    </article>
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
/* 温泉 */
#spa_header{
  width: 100%;
  background-image: url(../assets/images/spa_header_bg_pc.png);
  background-repeat: no-repeat;
  background-size: cover;
}

#spa02,
#spa03{
  overflow: hidden;
  zoom: 1;
}

#spa02{
  margin: 0 auto;
}

.spa_img01{
  display: block;
  float: left;
  margin: 0 0 0 5%;
  width: 40%;
}

#spa02 dl{
  overflow: hidden;
  zoom: 1;
}

#spa02 dl{
  font-size: 1.2em;
  width:47%;
  margin: 0 5% 2em 3%;
  float: right;
}

#spa02 dt{
  float: left;
}

#spa02 p{
  font-size: 1.2em;
  width:47%;
  margin: 0 5% 0 3%;
  float: right;
}

.spa_img02{
  width: 32.5%;
  margin: 6em 0 0;
  padding: 0;
}

#spa03{
  margin: 5em auto 4em;
}

.spa03_txt{
  width:57%;
  margin: 0 2% 0 5%;
  float: left;
}

#spa03 h3{
  margin: 0 auto 1em;
}

#spa03 p{
  font-size: 1.1em;
}

#spa03>img{
  display: block;
  width:30%;
  margin: 0 6% 0 0;
  float: right;
}
}
</style>
