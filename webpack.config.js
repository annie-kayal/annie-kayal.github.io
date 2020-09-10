const HTMLWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')


module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'http://localhost:8001/',
    globalObject: 'this'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: { loader: 'babel-loader' } },
      { test: /\.html$/, use: { loader: 'html-loader' } },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
      { test: /\.s(a|c)ss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  },
  devServer: {
    contentBase: path.resolve('src'),
    hot: true,
    open: true,
    port: 8001,
    watchContentBase: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebPackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}