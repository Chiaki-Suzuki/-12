<template>
  <div class="simulation">
    <h2>ご宿泊料金シミュレーション</h2>
    <p class="simu_text">ご希望の条件を選択してください。</p>
    <table>
        <tr>
            <th>ご宿泊日</th>
            <td>
                <input type="date"
                :min="minDate"
                v-model="date"
                @change="selectTerms">
            </td>
        </tr>
        <tr>
            <th>人数</th>
            <td>
                大人：<select v-model="adult" @change="selectTerms">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select> 人　<br class="pc_off">
                子ども：<select v-model="child" @change="selectTerms">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select> 人
            </td>
        </tr>
        <tr>
            <th>ご宿泊形態</th>
            <td>
                <label><input type="radio" name="type" value="0" v-model="type" @change="selectTerms">１泊２食付</label>
                <label><input type="radio" name="type" value="1" v-model="type" @change="selectTerms">１泊夕食付</label><br class="pc_off">
                <label><input type="radio" name="type" value="2" v-model="type" @change="selectTerms">１泊朝食付</label>
                <label><input type="radio" name="type" value="3" v-model="type" @change="selectTerms">１泊素泊まり</label>
            </td>
        </tr>
        <tr>
            <th>オプション</th>
            <td>
                <label for="option" :class="{disa: disabled}"><input type="checkbox" id="option" v-model="option" @change="selectTerms" :disabled="disabled"> アメマスパック</label>
            </td>
        </tr>
    </table>
    <p class="sum_box">合計<span>{{ total | number_format }}</span>円</p>
  </div>
</template>

<script>
export default {
  name: 'Simulation',
  data: () => {
    return {
      date: '',
      minDate: '',
      adult: 0,
      child: 0,
      type: '0',
      option: false,
      disabled: false,
      total: 0
    }
  },
  created: function () {
    // 翌日以降からしか選択できないように
    let dt = new Date();
    dt.setDate(dt.getDate() + 1);
    this.minDate = this.formatDate(dt);
  },
  filters: {
    number_format: function (val) {
      return val.toLocaleString();
    }
  },
  methods: {
    // 日付フォーマット
    formatDate: function (dt) {
      let y = dt.getFullYear();
      let m = ('00' + (dt.getMonth() + 1)).slice(-2);
      let d = ('00' + dt.getDate()).slice(-2);
      let result = y + '-' + m + '-' + d
      return result
    },
    selectTerms: function () {
      // 宿泊予定日の月を取得
      let dt = new Date(this.date)
      let seasonMonth = dt.getMonth() + 1

      // オフシーズン(10/1-3/31)
      if (seasonMonth < 4 || seasonMonth > 9) {
        // アメマスパック選択可能に
        this.disabled = false;
        // 料金計算
        let typePrice = this.offSeasonType(this.type);
        let optionPrice = this.optionFunc();
        // 合計
        this.total = (typePrice[0] * this.adult) + (typePrice[1] * this.child) + (optionPrice * this.adult)
      }
      // オンシーズン(4/1-9/30)
      else if (seasonMonth >= 4 || seasonMonth <= 9) {
        // アメマスパックチェックを外して選択不可に
        this.option = false;
        this.disabled = true;
        // 料金計算
        let typePrice = this.onSeasonType(this.type);
        // 合計
        this.total = (typePrice[0] * this.adult) + (typePrice[1] * this.child)
      }
    },
    // オンシーズン 宿泊プラン料金
    onSeasonType: function (type) {
      // １泊２食付
      if (type === "0") {
        return [8680, 7560]
      }
      // １泊夕食付
      else if (type === "1") {
        return [7816, 6480]
      }
      // １泊朝食付
      else if (type === "2") {
        return [6520, 5400]
      }
      // １泊素泊まり
      else if (type === "3") {
        return [4900, 4320]
      }
    },
    // オフシーズン 宿泊プラン料金
    offSeasonType: function (type) {
      // １泊２食付
      if (type === "0") {
        return [9760, 8640]
      }
      // １泊夕食付
      else if (type === "1") {
        return [8680, 7560]
      }
      // １泊朝食付
      else if (type === "2") {
        return [7060, 6480]
      }
      // １泊素泊まり
      else if (type === "3") {
        return [5000, 4860]
      }
    },
    // オフシーズン オプション料金
    optionFunc: function () {
      if (this.option) {
        return 5000
      } else {
        return 0
      }
    }
  }
}
</script>

<style>
/*-------------------------
  pc
-------------------------*/
@media screen and (min-width:768px){
/* 料金シミュレーション */
.simulation h2::before {
  content: '';
  display: block;
  height: 50px;
  background: url("../assets/images/simu_title.jpg") 50% 50% / contain no-repeat;
  margin: 0 auto 10px;
}

.simu_text {
  text-align: center;
  margin: -50px 0 50px;
}

.simulation table {
  margin: 0 auto 40px;
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
  cursor: pointer;
}
.simulation table td label.disa {
  color: #aaa;
  cursor: initial;
}
.simulation table td label:first-of-type {
  margin: 0;
}

.simulation input[type="date"],
.simulation select {
  padding: 5px;
  border: 1px solid #aaa;
  border-radius: 3px;
}

.simulation .sum_box {
  text-align: center;
  width: 40%;
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

.pc_off {
  display: none;
}
}
/*-------------------------
  sp
-------------------------*/
@media screen and (max-width:767px){
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
  background: url("../assets/images/simu_title.jpg") 50% 50% / contain no-repeat;
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
}
</style>
