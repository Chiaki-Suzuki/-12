<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Main from '../../components/topMain.vue'
import Footer from '../../components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
@media screen and (min-width:768px){
/* width100%画像 */
.img100{
  width:100%;
  margin: 0;
}

/* トップへ戻るボタン */
#pageTop{
  position: fixed;
  zoom:0.6;
  right: 40px;
  bottom: 10px;
  opacity: 0.7;
}

#pageTop img{
  *display: inline;
  -ms-display: inline;
  *zoom: 0.6;
  -ms-zoom: 0.6;
  -moz-transform-origin: 0 0;
  -moz-transform: scale(0.6);
}

#pageTop img:not(:target){
	-ms-zoom: 1;
}

/* FireFox */
@-moz-document url-prefix() {
  h1{
    margin: 0 50%;
  }
  p,
  .p01,
  dl{
    line-height: 150%;
  }
}

}
/*-------------------------
  sp
-------------------------*/
@media screen and (max-width:767px){

/* 各ページ共通 */
body{
  margin: 0;
  font-family: serif;
}

.pc{
  display: none;
}

header{
  overflow: hidden;
  zoom: 1;
}

h1{
  writing-mode: vertical-rl;
  width: auto;
  height: 7.5em;
  color: #FFFFFF;
  font-weight: lighter;
  font-size: 1.7em;
  background-color: rgba(0,0,0,0.3);
  margin: -1em auto 0;
  text-align: center;
}

h2{
  width: 90%;
  font-size: 1.5em;
  margin: 1.5em auto 0.5em;
}

h3{
  width: 90%;
  margin: 0 auto;
  font-size: 1.3em;
}

h4{
  width: 90%;
  margin: 0 auto;
  font-size: 1.2em;
  font-weight: bold;
}

p{
  width: 90%;
  margin: 0 auto;
  font-size: 0.9em;
}

.p01{
  width: 90%;
  margin: 2em auto;
  font-size: 1em;
}

img{
  border-style: none;
}

/* ナビ */
.drawer-nav{
	max-width:820px;
	margin:0 auto;
	font-size:1.5em;
}

.drawer-nav ul li{
	margin:1.5em auto;
  text-align: center;
}

.drawer-nav a{
	color:#ffffff;
	text-decoration:none;
	position:relative;
}

#selected{
  border-bottom: solid 2px #ffffff;
}

/* お問い合わせ */
.contact_tel{
  margin-bottom: 3em;
}

/* width100%画像 */
.img100{
  width:100%;
  margin: 0;
}

/* トップへ戻るボタン */
#pageTop{
  position: fixed;
  zoom:0.6;
  right: 40px;
  bottom: 10px;
  opacity: 0.7;
}

/* SNSボタン */
.sns_btn{
  position: relative;
}

.fb_btn{
  position: absolute;
  width: 9%;
  top: 1em;
  left: 1em;
}

.insta_btn{
  position: absolute;
  width: 9%;
  top: 1em;
  left: 3.5em;
}

/* フッター */
footer{
  overflow: hidden;
  zoom: 1;
  margin: auto;
  text-align: center;
  font-size: 1em;
  background-image: url(../../assets/images/footer_bg.jpg);
}

.footer{
  width: 45%;
  margin: auto;
}

.footer img{
  display: inline-block;
  width: 15%;
  margin: 0.2em 0 0 1em;
  float: left;
  opacity: 0.4;
}

.footer_gu{
  font-size: 1.2em;
  margin: 1em auto 0.3em;
}

.footer_yu{
  font-size: 0.5em;
  margin:0 auto;
}

.footer_add{
  font-size: 0.7em;
  margin:0 auto;
}

.footer_tel{
  font-size: 1em;
  margin:0 auto 0.5em;
}

.footer_sm{
  font-size: 0.8em;
  margin: 0 auto;
}

/* トップページ */
#index_header{
  width: 100%;
  background-image: url(../../assets/images/index_header_bg_sp.jpg);
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

/* 温泉 */
#spa_header{
  width: 100%;
  background-image: url(../../assets/images/spa_header_bg_sp.png);
  background-repeat: no-repeat;
  background-size: cover;
}

#spa02,
#spa03{
  overflow: hidden;
  zoom: 1;
}

.spa_img01{
  display: none;
}

#spa02 dl{
  overflow: hidden;
  zoom: 1;
}

#spa02 dl{
  font-size: 1em;
  width: 90%;
  margin: auto;
}

#spa02 dt{
  float: left;
}

#spa02 p{
  margin: 1em auto;
}

.spa_img02{
  margin: 1.5em auto 0;
  padding: 0;
}

#spa03{
  margin: 0 auto 3em;
}
#spa03 h3{
  margin: 0 auto 0.5em;
}

.spa03_txt img{
  display: block;
  width: 90%;
  margin: 0 auto 0.5em;
}

/* ご宿泊 */
#room_header{
  width: 100%;
  background-image: url(../../assets/images/room_header_bg_sp.png);
  background-repeat: no-repeat;
  background-size: cover;
}

#room01{
  overflow: hidden;
  zoom: 1;
  margin: 0 auto 1em;
}

#room01 img{
  display: block;
  width: 90%;
  margin: 0 auto;
}

.roomA p,
.roomB p{
  margin: 0 auto 2em;
  text-align: center;
}

#room01>img{
  display: none;
}

#room02{
  margin: 0 auto;
}

#room02 img{
  display: block;
  width: 40%;
  margin: 0 auto 0.5em;
}

#room02 h3{
  text-align: center;
}

.amenities,
.water{
  margin-bottom: 3em;
}

/* 料理 */
#dining_header{
  width: 100%;
  background-image: url(../../assets/images/dining_header_bg_sp.png);
  background-repeat: no-repeat;
  background-size: cover;
}

#dining01{
  margin-bottom: 2em;
}

.dining_p{
  text-align: center;
  margin: -2em auto 0;
}

#dining02>p{
  margin: 0 auto 2em;
}

.rice{
  overflow: hidden;
  zoom: 1;
  margin: 0 auto 1em;
}

.rice h3{
  font-size: 1.15em;
  margin: 0 auto;
}

.rice p{
  font-size: 0.8em;
  margin: 0 auto 0.5em;
}

.rice img{
  display: block;
  width: 60%;
  margin: 0 auto 1em;
}

/* 料金 */
#price_header{
  width: 100%;
  background-image: url(../../assets/images/price_header_bg_sp.png);
  background-repeat: no-repeat;
  background-size: cover;
}

#price01 p,
#price02 p{
  font-size: 0.9em;
}

#price01 img{
  display: block;
  width: 60%;
  margin: 1em auto;
}

#price02 p{
  margin-bottom: 2em;
}

table{
  border-collapse: collapse;
  border: 0.5px solid #000000;
  table-layout: fixed;
  margin: 1em auto;
  text-align: center;
}

#price01 table{
  width: 95%;
}

#price02 table{
  width: 80%;
}

table th,
table td{
  border:0.5px solid #000000;
  padding: 0.1em 0;
}

table th{
  background-color: #808080;
  color: #FFFFFF;
}

table td{
  font-size: 1.2em;
}

.td_p{
  font-size: 0.9em;
}

#price02 img{
  display: none;
}

#price03{
  text-align: center;
  margin: 3em 0;
}

/* 料金シミュレーション */
.simulation {
  margin-bottom: 40px;
}

.simulation h2 {
  text-align: center;
}

.simulation h2::before {
  content: '';
  display: block;
  height: 50px;
  background: url("../../assets/images/simu_title.jpg") 50% 50% / contain no-repeat;
  margin: 0 auto 10px;
}

.simu_text {
  text-align: center;
}

.simulation table {
  margin: 20px auto;
}

.simulation table th {
  width: 25%;
}

.simulation table td {
  text-align: left;
  padding: 10px;
  font-size: 16px;
}

.simulation table td label {
  margin: 0 0 0 10px;
}
.simulation table td label:nth-of-type(2n-1) {
  margin: 0;
}

.simulation input[type="date"],
.simulation select {
  padding: 5px;
  border: 1px solid #aaa;
  border-radius: 3px;
}

.simulation select:first-of-type {
  margin: 0 0 5px 0;
}

.simulation .sum_box {
  text-align: center;
  width: 80%;
  margin: 0 auto;
  font-size: 20px !important;
  border-bottom: 1px solid;
}

.simulation .sum_box span {
  display: inline-block;
  font-size: 30px;
  font-weight: bold;
  margin: 0 5px 0 10px;
  color: #da4040;
}

/* 交通アクセス */
#access_header{
  width: 100%;
  background-image: url(../../assets/images/access_header_bg_sp.png);
  background-repeat: no-repeat;
  background-size: cover;
}

#access01,
#access02{
  overflow: hidden;
  zoom: 1;
  margin: 2em auto;
}

#access01 p,
#access02 p{
  font-size: 1em;
}

#access01 img,
#access02 img{
  display: block;
  width: 60%;
  margin: 1em auto 0;
}

#g_map{
  width: 100%;
  height: 350px;
  margin: 0 auto;
}

}
</style>
