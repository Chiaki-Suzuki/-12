<template>
  <main>
    <section id="price01">
      <h2>ご宿泊料金</h2>
      <table class="pc">
        <tr>
          <th>期間</th>
          <th>区分</th>
          <th>１泊２食付</th>
          <th>１泊夕食付</th>
          <th>１泊朝食付</th>
          <th>１泊素泊まり</th>
          <th>アメマスパック<br>&#040;夕食付&#041;※３</th>
        </tr>
        <tr>
          <th rowspan="2">オンシーズン<br>&#040;4&#047;1&#045;9&#047;30&#041;</th>
          <td class="td_p">大人&#040;中学生<br>以上&#041;※１</td>
          <td>&yen;9&#130;760</td>
          <td>&yen;8&#130;680</td>
          <td>&yen;7&#130;060</td>
          <td>&yen;5&#130;000</td>
          <td>&#045;</td>
        </tr>
        <tr>
          <td class="td_p">子供&#040;小学生&#041;<br>※２</td>
          <td>&yen;8&#130;640</td>
          <td>&yen;7&#130;560</td>
          <td>&yen;6&#130;480</td>
          <td>&yen;4&#130;860</td>
          <td>&#045;</td>
        </tr>
        <tr>
          <th rowspan="2">オフシーズン<br>&#040;10&#047;1&#045;3&#047;31&#041;</th>
          <td class="td_p">大人&#040;中学生<br>以上&#041;※１</td>
          <td>&yen;8&#130;680</td>
          <td>&yen;7&#130;816</td>
          <td>&yen;6&#130;520</td>
          <td>&yen;4&#130;900</td>
          <td>&yen;5&#130;000</td>
        </tr>
        <tr>
          <td class="td_p">子供&#040;小学生&#041;<br>※２</td>
          <td>&yen;7&#130;560</td>
          <td>&yen;6&#130;480</td>
          <td>&yen;5&#130;400</td>
          <td>&yen;4&#130;320</td>
          <td>&#045;</td>
        </tr>
      </table>
      <p class="price_p pc">※１　大人料金&#040;中学生以上&#041;は、入湯税40円、消費税込みの料金です。<br>※２　子供料金&#040;小学生&#041;は、入湯税は頂いておりません。消費税込みの料金です。<br>※３　アメマスダービーにご参加されている方に限ります。<br>※４　宿泊されるお客様に限り、２４時間ご入浴いただけます。<br>※５　その他料金もございますので、お気軽にお電話にてお問い合わせ下さいませ。</p>
      <table class="sp">
        <tr>
          <th>期間</th>
          <th>区分</th>
          <th>１泊２食付</th>
          <th>１泊夕食付</th>
          <th>１泊朝食付</th>
          <th>１泊素泊まり</th>
        </tr>
        <tr>
          <th rowspan="2">4&#047;1&#045;9&#047;30</th>
          <td class="td_p">大人<br>※１</td>
          <td>9&#130;760</td>
          <td>8&#130;680</td>
          <td>7&#130;060</td>
          <td>5&#130;000</td>
        </tr>
        <tr>
          <td class="td_p">子供<br>※２</td>
          <td>8&#130;640</td>
          <td>7&#130;560</td>
          <td>6&#130;480</td>
          <td>4&#130;860</td>
        </tr>
        <tr>
          <th rowspan="2">10&#047;1&#045;3&#047;31</th>
          <td class="td_p">大人<br>※１</td>
          <td>8&#130;680</td>
          <td>7&#130;816</td>
          <td>6&#130;520</td>
          <td>4&#130;900</td>
        </tr>
        <tr>
          <td class="td_p">子供<br>※２</td>
          <td>7&#130;560</td>
          <td>6&#130;480</td>
          <td>5&#130;400</td>
          <td>4&#130;320</td>
        </tr>
      </table>
      <p class="price_p sp">※１　大人料金&#040;中学生以上&#041;は、入湯税40円、消費税込みの料金です。<br>※２　子供料金&#040;小学生&#041;は、入湯税は頂いておりません。消費税込みの料金です。<br>※３　アメマスダービーにご参加されている方限定のプランもございます。<br>※４　宿泊されるお客様に限り、２４時間ご入浴いただけます。<br>※５　その他料金もございますので、お気軽にお電話にてお問い合わせ下さいませ。</p>
      <!-- ご宿泊料金シミュレーション -->
      <Simulation></Simulation>
      <!-- ご宿泊料金シミュレーション ここまで -->
      <img src="../assets/images/price_img01.jpg" alt="宮内温泉の写真">
      <img src="../assets/images/price_img02.jpg" alt="アメマスダービーの写真">
    </section>
    <section id="price02">
      <h2>日帰り入浴料金</h2>
      <table>
        <tr>
          <th>大人&#040;中学生以上&#041;</th>
          <td>&yen;500</td>
        </tr>
        <tr>
          <th>子供&#040;小学生&#041;</th>
          <td>&yen;300</td>
        </tr>
        <tr>
          <th>幼児</th>
          <td>無料</td>
        </tr>
        <tr>
          <th>利用時間</th>
          <td>9&#058;00&#045;21&#058;00</td>
        </tr>
      </table>
      <p class="price_p">※シャンプー、リンス、石鹸完備<br>※浴場にタオルの備え付けはございません。<br>ご持参くださいますよう、お願いいたします。</p>
      <img src="../assets/images/spa_img99.jpg" alt="温泉の写真" class="img100">
    </section>
    <Contact></Contact>
    <div id="pageTop"><a href="#"><img src="../assets/images/pagetop.png" alt="トップへ戻るボタン" class="pagetop"></a></div>
  </main>
</template>

<script>
import Simulation from '../components/Simulation.vue'
import Contact from '../components/Contact.vue'

export default {
  name: 'Main',
  components: {
    Simulation,
    Contact
  }
}
</script>

<style>
</style>
