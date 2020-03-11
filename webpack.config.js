var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var webpackDevServer = require('webpack-dev-server');
var webpack = require('webpack')

var baseConfig = {
  entry: {
    index: ['./src/index.js'],
    example: ['./example/index.js']
  },
  output: {
    path: __dirname + '/dist',
    filename: "[name].js"
  },
  mode: 'development',
  devtool: "source-map",
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        // loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: './example/index.html' }
    ], {})
  ]
};

const port = 8888
const host = '0.0.0.0'

const devServerOptions = {
  inline: true,
  disableHostCheck: true,
  hot: true,
  // open: true ,
  // @NOTE 开启HMR 必须在配置中指定host
  // 否则会报错
  host: '0.0.0.0',
  stats: {
    colors: true
  },
};

webpackDevServer.addDevServerEntrypoints(baseConfig, devServerOptions);
const compiler = webpack(baseConfig);
const server = new webpackDevServer(compiler, devServerOptions);
// @UPDATED listen前两个参数 port host必须传
server.listen(port, host, () => {
  console.log(`Project is running at http://${host}:${port}/`);
});