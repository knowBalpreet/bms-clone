const plugins = require('./plugins');

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  plugins: [plugins.BrotliPlugin, plugins.CompressionPlugin],
};
