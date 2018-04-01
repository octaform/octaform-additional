const ENV = (JSON.stringify(process.env.NODE_ENV || 'dev'));
const Package = require('./package.json');
const path = require('path');
const webpack = require('webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');
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
  devtool: 'inline-source-map',
  entry: entryList,
  output: {
    library: Package.name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        'babel-loader',
      ],
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['index'],
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: false,
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(Package.version),
      'process.env.NODE_ENV': ENV,
    }),
  ],
};
