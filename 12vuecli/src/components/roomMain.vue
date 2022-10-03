<template>
  <main>
    <section id="room01">
      <p class="p01">昭和を感じさせる和室。昔懐かしい作りです。<br>初めて来てもどこか懐かしく、癒される空間です。</p>
      <div class="roomA">
        <img src="../assets/images/room_img01.jpg" alt="和室の写真">
        <p>和室６部屋</p>
      </div>
      <div class="roomB">
        <img src="../assets/images/room_img02.jpg" alt="入口の写真">
        <p>旅館入口</p>
      </div>
      <img src="../assets/images/spa_img88.jpg" alt="宮内温泉の写真" class="img100">
    </section>
    <section id="room02">
      <div class="amenities">
        <img src="../assets/images/room_img03.jpg" alt="アメニティの写真">
        <h3>アメニティ</h3>
        <p>シャンプー、リンス、石鹸、浴衣、歯ブラシ、バスタオル、フェイスタオル、ドライヤー貸し出し&#040;受付へお申し出下さい&#041;</p>
      </div>
      <div class="water">
        <img src="../assets/images/room_img04.jpg" alt="昭和の水筒の写真">
        <h3>当館のお水</h3>
        <p>当館の蛇口から出るお水とお湯は全て<br>地下水と温泉水でございます。<br>コーヒーや紅茶を淹れると<br>いつもとは違った味わいをお楽しみいただけます。<br>お持ち帰り自由ですので、ぜひご自宅でお試しください。</p>
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
/* ご宿泊 */
#room_header{
  width: 100%;
  background-image: url(../assets/images/room_header_bg_pc.png);
  background-repeat: no-repeat;
  background-size: cover;
}

#room01,
#room02{
  overflow: hidden;
  zoom: 1;
}

#room01 img{
  width: 100%;
}

.roomA{
  width: 40%;
  margin: 0 2% 0 8%;
  float: left;
}

.roomB{
  width: 40%;
  margin: 0 8% 0 2%;
  float: right;
}

.roomA p,
.roomB p{
  margin: 0 auto 2em;
  text-align: center;
}

.amenities{
  width: 40%;
  margin: 0 2% 0 8%;
  float: left;
}

.water{
  width: 40%;
  margin: 0 8% 5em 2%;
  float: right;
}

#room02 img{
  width: 100%;
  margin: 5em auto 0;
}

#room02 h3{
  text-align: center;
}
}
</style>
