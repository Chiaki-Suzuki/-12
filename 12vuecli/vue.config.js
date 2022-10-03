const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// 複数ページ対応
module.exports = {
  pages: {
    top: {
      entry: 'src/pages/top/main.js', // エントリーポイントとなるjs
      template: 'public/index.html', // テンプレートのHTML
      filename: 'index.html', // build時に出力されるファイル名
    },
    price: {
      entry: 'src/pages/price/main.js',
      template: 'public/price.html',
      filename: 'price.html',
    },
  },
};
