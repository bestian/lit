const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    workboxOptions: {
      exclude: [/\.gitkeep/],
      skipWaiting: true
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/lit/'
  : '/'
})
