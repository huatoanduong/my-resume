const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const JsonMinimizerPlugin = require('json-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new JsonMinimizerPlugin(),
    ],
    runtimeChunk: 'single',
    splitChunks: {
      maxSize: 250000,
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          // chunks: 'all',
          maxSize: 10000,
          reuseExistingChunk: true,
          idHint: 'vendors',
        },
      },
    },
  },
});