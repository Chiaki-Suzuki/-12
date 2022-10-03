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
</style>
