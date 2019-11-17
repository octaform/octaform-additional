const Package = require('../package.json');
const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const npmConfig = require('./build.npm');
const banner = require('./banner');

const files = glob.sync('./src/*.js');
const entryList = files.reduce((acc, file) => {
  const pattern = /^(.*\/)?(?:$|(.+?)(?:(\.[^.]*$)|$))/g;
  const name = pattern.exec(file);
  return Object.assign(acc, {
    [name[2]]: file,
  });
}, {});

module.exports = {
  entry: {
    ...entryList,
    [`${Package.name}.min`]: Package.main
  },
  output: {
    library: Package.name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
    }],
  },
  plugins: [
    new GenerateJsonPlugin('package.json', npmConfig.package),
    new webpack.BannerPlugin({
      banner: banner(),
      raw: true,
    }),
    new CopyWebpackPlugin([
      './LICENSE',
      './README.md',
    ]),
  ],
};
