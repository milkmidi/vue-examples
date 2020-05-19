const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const Webpack = require('webpack');
const chokidar = require('chokidar');
const fs = require('fs');

const DEV_MODE = process.env.NODE_ENV === 'development';
console.log(`DEV_MODE:${DEV_MODE}`);


global.importi18nJSON = (lang) => {
  const jsonPath = path.resolve(__dirname, `./src/locales/${lang}.json`);
  return JSON.parse(fs.readFileSync(jsonPath));
};

const createPugHtmlLoaderOptions = (customData = {}) => {
  const options = {
    data: {
      ...customData,
    },
    pretty: true,
    globals: [],
  };
  return JSON.stringify(options);
};

module.exports = {
  context: path.resolve('src'),
  mode: process.env.NODE_ENV,
  entry: {
    index: './index.js',
  },
  devtool: DEV_MODE ? 'inline-source-map' : false,
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
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
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
              data: {
                // 這裡能傳變數給 pug
                // 但如果想要傳不同的參數給不同的 pug 要換寫法
              },
              globals: [],
            },
          },
        ],
        include: path.resolve('src/html'),
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new Webpack.DefinePlugin({}),
    new HtmlWebpackPlugin({
      // template: './html/index.pug',
      template: `!!html-loader!pug-html-loader?${createPugHtmlLoaderOptions({ LANG: 'zh-tw' })}!src/html/index.pug`,
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      // template: './html/index.pug',
      template: `!!html-loader!pug-html-loader?${createPugHtmlLoaderOptions({ LANG: 'en' })}!src/html/index.pug`,
      filename: 'en/index.html',
    }),
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
};
