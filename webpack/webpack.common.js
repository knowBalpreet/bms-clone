const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  entry: ['@babel/polyfill', './src/index.tsx'],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
      loaders.JSLoader,
      loaders.htmlLoader,
      loaders.CSSLoader,
      loaders.LessLoader,
      loaders.SVGLoader,
      loaders.ESLintLoader,
      loaders.TSLintLoader,
      loaders.FONTLoader,
      loaders.TSLoader,
    ],
  },
  plugins: [
    // plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin,
    plugins.HtmlWebPackPlugin,
    plugins.CleanWebpackPlugin,
  ],
};
