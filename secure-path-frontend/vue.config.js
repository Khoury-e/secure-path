const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@colors': path.resolve(__dirname, 'src/assets/palette.scss')
      }
    }
  }
};