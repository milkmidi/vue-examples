const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const Webpack = require('webpack');
const chokidar = require('chokidar');

const DEV_MODE = process.env.NODE_ENV === 'development';
console.log(`DEV_MODE:${DEV_MODE}`);

module.exports = {
  context: path.resolve('src'),
  mode: process.env.NODE_ENV,
  entry: {
    'milkmidi-components': './componentEntry.js',
  },
  devtool: DEV_MODE ? 'inline-source-map' : false,
  output: {
    path: path.resolve('dist'),
    filename: `[name]-1.0.0${DEV_MODE ? '' : '.min'}.js`,
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules'),
    ],
    alias: {
      '@': path.resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          { loader: 'vue-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new Webpack.DefinePlugin({}),
    ...DEV_MODE
      ? [
        new HtmlWebpackPlugin({
          template: './html/index.html',
          filename: 'index.html',
          inject: 'head',
        }),
      ]
      : [],
  ],
  devServer: {
    before(app, server) {
      // hot reload for html, pug
      chokidar.watch('src/html/**/*').on('all', () => {
        server.sockWrite(server.sockets, 'content-changed');
      });
    },
    historyApiFallback: true,
    port: 3000,
    hot: true,
    host: '0.0.0.0',
  },
  // 打包時，要排除哪些第三方套件包
  /*
    如果不加
    import Vue from 'vue';
    就會把整個 Vue 的 Source 都打包裡你的程式，會肥滋滋的
    因為我們用了 cdnjs ，所以不需要再打包
    */
  // https://webpack.js.org/configuration/externals/#externals
  // https://ithelp.ithome.com.tw/articles/10187554
  externals: {
    vue: 'Vue',
  },
};
