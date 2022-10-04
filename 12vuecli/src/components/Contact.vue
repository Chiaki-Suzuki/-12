<template>
  <section id="contact">
    <h2>ご予約・お問い合わせ</h2>
    <p>ご予約・お問い合わせはお電話で承ります。</p>
    <p class="contact_tel">ＴＥＬ：０１３６&#045;７５&#045;６３２０</p>
  </section>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style>
/*-------------------------
  pc
-------------------------*/
@media screen and (min-width:768px){
/* お問い合わせ */
#contact{
  text-align: center;
}

.contact_tel{
  margin-bottom: 4em;
}
}
/*-------------------------
  sp
-------------------------*/
@media screen and (max-width:767px){
/* お問い合わせ */
.contact_tel{
  margin-bottom: 3em;
}
}
</style>
