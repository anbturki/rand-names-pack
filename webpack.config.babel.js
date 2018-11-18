const path = require('path');

const context = path.join(__dirname, 'src');

module.exports = {
  context,
  entry: './index',
  output: {
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'randomNamesPack',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel'], include: context},
      {test: /\.json$/, loaders: ['json'], include: context},
    ],
  },
};
