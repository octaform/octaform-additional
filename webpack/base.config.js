const Package = require('../package.json');
const path = require('path');
const webpack = require('webpack');
const glob = require('glob');

const files = glob.sync('./src/*.js');
const entryList = files.reduce((acc, file) => {
  const pattern = /^(.*\/)?(?:$|(.+?)(?:(\.[^.]*$)|$))/g;
  const name = pattern.exec(file);
  return Object.assign(acc, {
    [name[2]]: file,
  });
}, {});

module.exports = {
  entry: entryList,
  output: {
    library: Package.alias,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
    }],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['index'],
    }),
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
    ])
  ],
};
