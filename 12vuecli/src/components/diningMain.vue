<template>
  <main>
    <section id="dining01">
      <p class="p01">季節ごとの料理と<br>温泉水で育てた自家米ゆめぴりかをご用意しております。</p>
      <div class="flexslider sp">
        <ul class="slides">
          <li><img src="../assets/images/dining_img01.jpg" alt="料理一例の写真"></li>
          <li><img src="../assets/images/dining_img02.jpg" alt="料理一例の写真"></li>
          <li><img src="../assets/images/dining_img03.jpg" alt="料理一例の写真"></li>
        </ul>
      </div>
      <img src="../assets/images/dining_img01.jpg" alt="料理一例の写真" class="pc">
      <img src="../assets/images/dining_img02.jpg" alt="料理一例の写真" class="pc">
      <img src="../assets/images/dining_img03.jpg" alt="料理一例の写真" class="pc">
      <p class="dining_p">&#040;料理一例&#041;</p>
    </section>
    <section id="dining02">
      <h2>自慢の自家米</h2>
      <p class="p01">自家米は当館の前にある水田で温泉水を使用して育てています。<br>味は、ほど良い粘りと豊かな甘み。<br>地下水で研ぐことにより、やわらかく、より美味しく炊き上げております。</p>
      <div class="rice">
        <div class="rice_txt01">
          <h3>2015&#046;5&#046;2　&#045;田んぼに植える前の苗&#045;</h3>
          <p>一番気の抜けない時！！<br>ハウス内の温度に、一番気を遣います。<br>ここで失敗すると、お米が食べられなくなります。。。<br>やってはいけないけど、あまりにもキレイな苗なので<br>苗の上を寝転がってみたくなりますね！？</p>
        </div>
        <img src="../assets/images/rice_img01.jpg" alt="自家米の写真" class="rice_img">
      </div>
      <div class="rice">
        <div class="rice_txt02">
          <h3>2015&#046;6&#046;28　&#045;田植え&#045;</h3>
          <p>田植えが終わると。。キレイな緑です！</p>
        </div>
        <img src="../assets/images/rice_img02.jpg" alt="自家米の写真" class="rice_img">
        <img src="../assets/images/rice_img03.jpg" alt="自家米の写真" class="rice_img">
      </div>
      <div class="rice">
        <div class="rice_txt03">
          <h3>2015&#046;7&#046;20 &#045;成長&#045;</h3>
          <p>米の苗は、順調に成長を続けています。</p>
        </div>
        <img src="../assets/images/rice_img04.jpg" alt="自家米の写真" class="rice_img">
      </div>
      <div class="rice">
        <div class="rice_txt04">
          <h3>2015&#046;8&#046;30 &#045;さらに成長&#045;</h3>
          <p>黄金色になってきました。</p>
        </div>
        <img src="../assets/images/rice_img05.jpg" alt="自家米の写真" class="rice_img">
      </div>
      <div class="rice">
        <div class="rice_txt05">
          <h3>2015&#046;9&#046;21 &#045;稲刈り&#045;</h3>
          <p>稲刈りの途中♪<br>雨が続きなかなか稲刈りが完了できませんが、おいしい新米が出来上がりましたよ&#040;&#032;&#042;´艸｀&#041;<br>ぜひ、宿泊にいらしてくださいませぇ～&#040;&#094;&#094;♪</p>
        </div>
        <img src="../assets/images/rice_img06.jpg" alt="自家米の写真" class="rice_img">
        <img src="../assets/images/rice_img07.jpg" alt="自家米の写真" class="rice_img">
      </div>
    </section>
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
/* 料理 */
#dining_header{
  width: 100%;
  background-image: url(../assets/images/dining_header_bg_pc.png);
  background-repeat: no-repeat;
  background-size: cover;
}

#dining01{
  margin-bottom: 5em;
}

#dining01 img{
  width: 32.5%;
  margin: 0;
}

.dining_p{
  text-align: center;
  margin: 0;
}

.rice{
  overflow: hidden;
  zoom: 1;
  margin: 0 auto 3em;
}

.rice_txt01,
.rice_txt02,
.rice_txt03,
.rice_txt04,
.rice_txt05{
  width: 35%;
  margin: 0 3% 0 10%;
  float: left;
}

.rice h3{
  margin: 0 auto;
}

.rice p{
  font-size: 1.15em;
  margin: 1em auto 0;
}

.rice_img{
  width: 41%;
  float: right;
}

.rice img{
  margin: 0 10% 2em 0;
}
}
</style>
