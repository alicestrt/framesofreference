const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  configureWebpack: { plugins: [ new CopyPlugin([ { from: 'media', to: 'media' } ]), ] }
}
