const path = require('path');

module.exports = { 
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: './dist',
    port: 8080,
    hot: true
  },
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'main.js'
  }
  };