const path = require('path');
// vue.config.js
module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  publicPath: '/',
  outputDir: 'dist',
  chainWebpack: (config) => {
    config.resolve.symlinks(true) //热更新
  },
  //
  configureWebpack: (config) => {
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        extensions: ['.js','.vue', '.json'], //请求本地json
        alias: /*别名配置 */{
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/common'),
        }
      }
    });
  },
  // webpack-dev-server 相关配置
  devServer: {
    host: '0.0.0.0',
    port: 8081,
    https: false,
    hotOnly: false,
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/api': {
        target: "http://localhost:8080",
        ws: false, //是否代理 websockets
        changeOrigin: true, //允许websockets跨域
        pathRewrite: {
          '/api': ''
        }
      }
    },
    // 代理转发配置，用于调试环境
    disableHostCheck: true,
  },
};




