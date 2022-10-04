const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// 複数ページ対応
module.exports = {
  pages: {
    top: {
      entry: './src/pages/top/main.js', // エントリーポイントとなるjs
      template: 'public/index.html', // テンプレートのHTML
      filename: 'index.html', // build時に出力されるファイル名
      publicPath: './'
    },
    spa: {
      entry: './src/pages/spa/main.js',
      template: 'public/spa.html',
      filename: 'spa.html',
      publicPath: './'
    },
    room: {
      entry: './src/pages/room/main.js',
      template: 'public/room.html',
      filename: 'room.html',
      publicPath: './'
    },
    dining: {
      entry: './src/pages/dining/main.js',
      template: 'public/dining.html',
      filename: 'dining.html',
      publicPath: './'
    },
    price: {
      entry: './src/pages/price/main.js',
      template: 'public/price.html',
      filename: 'price.html',
      publicPath: './'
    },
    access: {
      entry: './src/pages/access/main.js',
      template: 'public/access.html',
      filename: 'access.html',
      publicPath: './'
    }
  },
};
// ビルド
// module.exports = {
//   publicPath: './'
// }
