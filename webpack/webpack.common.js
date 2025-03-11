const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const rootDir = path.resolve(__dirname, '..');
const srcDir = path.resolve(rootDir, 'src');

module.exports = {
  // entry: path.resolve(srcDir, 'index.tsx'),
  entry: './src/index.tsx',
  output: {
    clean: true,
    // CleanPlugin: { cleanStaleWebpackAssets: false },
    // filename: 'main.[hash].js',
    filename: 'main.js',
    path: path.resolve(rootDir, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx', '.json'],
    alias: {
      '@components': path.resolve(srcDir, 'components'),
      '@public': path.resolve(srcDir, 'public'),
      '@config': path.resolve(srcDir, 'config'),
      '@types': path.resolve(srcDir, 'types'),
    },
    modules: [
      rootDir,
      srcDir,
      'node_modules',
    ],

  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.json$/,
        type: 'javascript/auto',
        use: ['json-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    // new CopyPlugin({
    //   patterns: [
    //     { from: 'public', to: 'public' },
    //   ],
    // }),
  ],
};