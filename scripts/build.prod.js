const merge = require('webpack-merge');
const webpackBase = require('./build.base');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(webpackBase, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js$/,
        include: /\.min\.js$/,
        exclude: /node_modules/,
        sourceMap: false,
        extractComments: false,
        uglifyOptions: {
          warnings: false,
          compress: true,
          mangle: true,
          toplevel: true,
        },
      }),
    ],
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
  ],
});
