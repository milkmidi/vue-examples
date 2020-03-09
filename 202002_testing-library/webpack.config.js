const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEV_MODE = process.env.NODE_ENV === 'development';
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

module.exports = {
  mode: process.env.NODE_ENV,
  context: path.resolve('src'),
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
      path.resolve('node_modules'),
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
          {
            loader: 'vue-loader',
            // https://forum.vuejs.org/t/how-to-remove-attributes-from-tags-inside-vue-components/24138/9
            options: {
              compilerOptions: {
                modules: [
                  {
                    preTransformNode(astEl) {
                      const attribute = 'data-testid';
                      if (process.env.NODE_ENV === 'production') {
                        const { attrsMap, attrsList } = astEl;
                        if (attrsMap[attribute]) {
                          delete attrsMap[attribute];
                          const index = attrsList.findIndex((x) => x.name === attribute);
                          attrsList.splice(index, 1);
                        }
                      }
                      return astEl;
                    },
                  },
                ],
              },
            },

          },
        ],
        exclude: /node_modules/,
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
              prependData: `
                  $DEV_MODE:${DEV_MODE};
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
      template: 'html/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        DEV_MODE,
      },
    }),
  ],
  devServer: {
    before(app) {
      app.get('/api/data', (req, res) => {
        const mockData = ['Vue', 'React', 'Angular', 'jQuery'];
        res.json(mockData);
      });
    },
    port: 3000,
    hot: true,
    stats: 'minimal'
  },
  optimization: {
    // https://webpack.js.org/plugins/split-chunks-plugin/#optimizationsplitchunks
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          // https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkscachegroupscachegroupenforce
          enforce: true,
        },
      },
    },
  },
};
