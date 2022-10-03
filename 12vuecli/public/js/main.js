let app = new Vue({
  el: '#app',
  data: {
    date: '',
    minDate: '',
    adult: 0,
    child: 0,
    type: '0',
    option: false,
    disabled: false,
    total: 0
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
})
