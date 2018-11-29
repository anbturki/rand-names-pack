const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const context = path.join(__dirname, 'src');

module.exports = {
  mode: 'development',
  context,
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    library: 'randNamsePack',
    libraryTarget: 'umd',
    filename: 'index.umd.js',
    globalObject: 'this',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        include: context,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: 'names.js',
      to: '../dist',
    }]),
  ],
};
