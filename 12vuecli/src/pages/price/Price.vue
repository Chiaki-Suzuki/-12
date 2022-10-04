<template>
  <div id="app">
    <contentHeader
      :id="id"
      :title="title">
    </contentHeader>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import contentHeader from '../../components/contentHeader.vue'
import Main from '../../components/priceMain.vue'
import Footer from '../../components/Footer.vue'

export default {
  name: 'Price',
  components: {
    contentHeader,
    Main,
    Footer,
  },
  data: ()=> {
    return {
      id: 'price_header',
      title: '料金'
    }
  }
}
</script>

<style>
/*-------------------------
  pc
-------------------------*/
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
}
</style>
