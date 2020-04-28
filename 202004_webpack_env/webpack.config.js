/* eslint no-param-reassign:0 */
const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const launchEditorMiddleware = require('launch-editor-middleware');

const DEV_MODE = process.env.NODE_ENV === 'development';
console.log(`DEV_MODE:${DEV_MODE}`);

const envConfig = require('./config');


const webpackConfig = {
  context: path.resolve('src'),
  mode: process.env.NODE_ENV,
  entry: {
    app: './app.js',
  },
  devtool: DEV_MODE ? 'inline-source-map' : false,
  output: {
    path: path.resolve('dist'),
    filename: DEV_MODE ? '[name].js' : '[name].[chunkhash].js',
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules'), // 這個不能刪喔, 啾咪
    ],
    alias: {
      '@': path.resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          { loader: 'babel-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: [
          { loader: 'vue-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: [{
              loader: 'pug-plain-loader',
              options: {
                data: {
                  DEV_MODE,
                },
              },
            }],
          },
          {
            use: [
              {
                loader: 'html-loader',
              },
              {
                loader: 'pug-html-loader',
                options: {
                  data: {
                    DEV_MODE,
                    ...envConfig, // 這邊是 pug 吃的
                  },
                },
              },
            ],
          },
        ],
        include: path.resolve('src'),
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // 這裡給 sass 吃的
              // 這樣就會自動在每隻 sass 加入這段 code, 就不用再打 @import
              prependData: `
                @import '~css/_mixins/_mixin.scss';
                $DEV_MODE: ${DEV_MODE};
              `,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: '[path][name].[ext]?[hash:7]',
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'html/index.pug',
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({ // 這邊是給 JS 吃的
      'process.env': {
        DEV_MODE,
        // MY_STRING: '我要傳變數過去', // 不能這樣寫，因為 compiler 後會錯
        MY_STRING: JSON.stringify('我要傳變數過去'), // 要 stringify 才會正確
        // 如果是非 boolean , number 的型別，都要 stringify
        ...Object.keys(envConfig).reduce((o, key) => {
          const value = envConfig[key];
          o[key] = ['boolean', 'number'].indexOf(typeof value) !== -1
            ? value
            : JSON.stringify(value);
          return o;
        }, {}),
      },
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 100,
      minChunks: 1,
      automaticNameDelimiter: '-',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  devServer: {
    before(app) {
      app.use('/__open-in-editor', launchEditorMiddleware(null, 'src', () => console.log(
        'To specify an editor, specify the EDITOR env variable or '
          + 'add "editor" field to your Vue project config.\n',
      )));
    },
    historyApiFallback: true,
    port: 3000,
    hot: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    contentBase: './src',
    stats: 'minimal',
    host: '0.0.0.0',
    disableHostCheck: true,
  },
};

module.exports = webpackConfig;
