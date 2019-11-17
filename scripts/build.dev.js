const CircularDependencyPlugin = require('circular-dependency-plugin');
const merge = require('webpack-merge');
const webpackBase = require('./build.base');

module.exports = merge(webpackBase, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        'eslint-loader',
      ],
    }],
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: false,
    })
  ],
});
