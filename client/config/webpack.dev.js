
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = {
  name: 'development',
  host: 'localhost',
  port: 8080
};

process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = webpackMerge(commonConfig, {
  debug: true,
  devtool: 'cheap-module-eval-source-map',

   output: {
    path: helpers.root('dist'),
    publicPath: "http://" + ENV.host + ":" + ENV.port + "/",
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({ name: ['main', 'polyfills'] }),

    new HtmlWebpackPlugin({ template: 'client/src/index.html', chunksSortMode: 'none' }),

    new webpack.DefinePlugin({
      'ENV': JSON.stringify(ENV.name),
      'process.env': {
        'ENV': JSON.stringify(ENV.name),
        'NODE_ENV': JSON.stringify(ENV.name)
      }
    })
  ],

  devServer: {
    contentBase: helpers.root('src'),
    port: ENV.port,
    host: ENV.host,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 200,
      poll: 1000
    }
  }
});

