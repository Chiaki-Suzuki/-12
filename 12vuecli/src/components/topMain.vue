<template>
  <main>
    <section id="index01">
      <p class="p01">北海道南西部、日本海に面した島牧村。<br>静かな山の中、泊川のほとりに佇む一軒宿が<br>宮内&#040;ぐうない&#041;温泉旅館です。</p>
      <div class="flexslider sp">
        <ul class="slides">
          <li><img src="../assets/images/index_img01.jpg" alt="泊川" class="index_img01"></li>
          <li><img src="../assets/images/index_img02.jpg" alt="大平山" class="index_img02"></li>
          <li><img src="../assets/images/index_img03.jpg" alt="茂津多岬灯台" class="index_img02"></li>
          <li><img src="../assets/images/index_img04.jpg" alt="元町神社" class="index_img02"></li>
        </ul>
      </div>
      <img src="../assets/images/index_img01.jpg" alt="泊川" class="index_img01 pc">
      <img src="../assets/images/index_img02.jpg" alt="大平山" class="index_img02 pc">
      <img src="../assets/images/index_img03.jpg" alt="茂津多岬灯台" class="index_img02 pc">
      <img src="../assets/images/index_img04.jpg" alt="元町神社" class="index_img02 pc">
    </section>
    <section id="index02">
      <p class="p01">大自然に囲まれた癒しの空間で<br>ごゆっくりお過ごしください。</p>
      <img src="../assets/images/index_img05.jpg" alt="宮内温泉旅館の外観">
    </section>
    <Contact></Contact>
    <div id="pageTop"><a href="#"><img src="../assets/images/pagetop.png" alt="トップへ戻るボタン" class="pagetop"></a></div>
  </main>
</template>

<script>
import Contact from '../components/Contact.vue'

export default {
  name: 'Main',
  components: {
    Contact
  }
}
</script>

<style>
/*-------------------------
  pc
-------------------------*/
@media screen and (min-width:768px){
/* トップページ */
.bg-slider{
	width: 100%;
  background-repeat: no-repeat;
	background-position:center center;
	background-size: cover;
}

#index_header h1{
  height: 18em;
}

main{
  width: 100%;
}

.index_img01{
  width: 68%;
  margin: 0;
  padding: 0;
}

.index_img02{
  width: 32.5%;
  margin: 7em 0 0;
}

#index02{
  margin: 5em 0 0;
}

#index02 img{
  display: block;
  width: 50%;
  margin: 5em auto 6em;
}
}
/*-------------------------
  sp
-------------------------*/
@media screen and (max-width:767px){
/* トップページ */
#index_header{
  width: 100%;
  background-image: url(../assets/images/index_header_bg_sp.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

#index_header h1{
  height: 15em;
}

main{
  width: 100%;
}

.index_img01,
.index_img02{
  margin: 0 auto;
  padding: 0;
}

#index02 img{
  display: block;
  width: 90%;
  margin: 0 auto;
}
}
</style>
