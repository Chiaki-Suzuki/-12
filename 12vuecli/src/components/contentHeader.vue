<template>
  <header :id="id">
    <Nav></Nav>
    <div class="bg-slider">
      <div class="h1center">
        <h1>{{ title }}</h1>
      </div>
    </div>
  </header>
</template>

<script>
import Nav from '../components/Nav.vue'

export default {
  name: 'contentHeader',
  components: {
    Nav
  },
  props: ['id', 'title']
}
</script>

<style>
/*-------------------------
  pc
-------------------------*/
@media screen and (min-width:768px){
/* 各ページ共通 */
body{
  margin: 0;
  font-family: serif;
}

.sp,
.drawer-nav{
  display: none;
}

header{
  overflow: hidden;
  zoom: 1;
}

h1{
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  color: #FFFFFF;
  font-weight: lighter;
  background-color: rgba(0,0,0,0.3);
  width: auto;
  height: 10em;
  margin: 0 auto;
  *margin: 1em 50% 0;
  *padding-top:2em;
  text-align: center;
  *width: 1em;/* IE7縦書き */
  *float: right;/* IE7縦書き */
  *filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0,StartColorStr=#4C000000,EndColorStr=#4C000000);/* IE7以下 */
}

h1:not(:target){
	filter: none;
	-ms-filter: none;
}

h2{
  text-align: center;
  font-size: 2em;
  font-weight: lighter;
  margin: 2em auto;
}

h3{
  font-size: 1.5em;
}

p{
  font-size: 1.3em;
}

.p01{
  text-align: center;
  margin: 4em auto;
}

img{
  border-style: none;
}
}
</style>
