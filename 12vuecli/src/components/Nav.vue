<template>
  <div class="nav_box">
    <nav class="pc">
      <ul>
        <li class="nav00"><a href="/"><img src="../assets/images/nav00.png" alt="ナビ画像"></a></li>
        <li class="nav22"><a href="/spa"><img src="../assets/images/nav_pc01.png" alt="ナビ画像"></a></li>
        <li class="nav33"><a href="/room"><img src="../assets/images/nav_pc02.png" alt="ナビ画像"></a></li>
        <li class="nav22"><a href="/dining"><img src="../assets/images/nav_pc03.png" alt="ナビ画像"></a></li>
        <li class="nav22"><a href="/price"><img src="../assets/images/nav_pc04.png" alt="ナビ画像"></a></li>
        <li class="nav66"><a href="/access"><img src="../assets/images/nav_pc05.png" alt="ナビ画像"></a></li>
      </ul>
    </nav>
    <div class="drawer drawer--right sp">
			<button type="button" class="drawer-toggle drawer-hamburger">
				<span class="sr-only">toggle navigation</span>
				<span class="drawer-hamburger-icon"></span>
			</button>
      <nav class="drawer-nav">
        <ul class="drawer-menu">
          <li><a href="/">宮内温泉旅館</a></li>
          <li><a href="/spa">温泉</a></li>
          <li><a href="/room">ご宿泊</a></li>
          <li><a href="/dining">料理</a></li>
          <li><a href="/price">料金</a></li>
          <li><a href="/access">交通アクセス</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<style>
/*-------------------------
  pc
-------------------------*/
@media screen and (min-width:768px){
/* ナビ */
nav{
  margin-top: 0;
  background-image: url(../assets/images/nav_bg_pc.png);
  background-repeat: repeat;
  position: fixed;
  width: 100%;
  z-index: 99;
}

nav ul{
  width: 90%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}

nav li{
  display: inline-block;
  *display: inline;
  *zoom: 1;
  margin: 0;
  padding: 0.5em 1.4% 0;
}

nav li:hover{
  background-color: rgba(255,255,255,0.3);
}

.nav00{
  width: 27%;
  margin-right: 14%;
}

.nav22{
  width: 5.3%;
}

.nav33{
  width: 7.5%;
}

.nav66{
  width: 14.5%;
}

nav a{
  text-decoration: none;
}

nav img{
  width: 100%;
}

#selected{
  border-bottom: solid 2px rgba(255,255,255,0.6);
}
}
</style>
