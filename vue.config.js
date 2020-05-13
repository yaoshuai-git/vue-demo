const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: './', // 基本路径,打包时加上.
  outputDir: 'dist', // 输出文件目录
  indexPath:'index.html',//指定生成的index.html的输出路径
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // webpack配置
  chainWebpack: (config) => {
    config.resolve.symlinks(true)
    config.resolve.alias // 添加别名
            .set('@', resolve('src'))
            .set('@a', resolve('src/assets'))
            .set('@c', resolve('src/components'))
            .set('@v', resolve('src/views'))
            .set('@store', resolve('src/store'));
  },
  configureWebpack: (config) => {
    // if (process.env.VUE_APP_MODE === 'production') {
    //   // 为生产环境修改配置...
    //   config.mode = 'production'
    // } else {
    //     // 为开发环境修改配置...
    //     config.mode = 'development'
    // }
    // Object.assign(config, {
    //   // 开发生产共同配置
    //   resolve: {
    //     alias: {
    //       '@': path.resolve(__dirname, './src'),
    //       '@c': path.resolve(__dirname, './src/components'),
    //       '@p': path.resolve(__dirname, './src/views')
    //     } // 别名配置
    //   }
    // })
  },
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  // css相关配置
  css: {
    // extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {
      css: {}, // 这里的选项会传递给 css-loader
      postcss: {
        plugins: [
          // 把px单位换算成rem单位
          require('postcss-pxtorem')({
            rootValue: 32, // 换算的基数(设计图750的根字体为32)
            // selectorBlackList: ['.van-'], // 要忽略的选择器并保留为px。
            propList: ['*'], // 可以从px更改为rem的属性。
            minPixelValue: 1 // 设置要替换的最小像素值。
          }),
          require('autoprefixer')
        ]
        // plugins: [
        //   require('autoprefixer')
        // ]
      } // 这里的选项会传递给 postcss-loader
    }, // css预设器配置项 详见https://cli.vuejs.org/zh/config/#css-loaderoptions
    // modules: false, // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  },
  // parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  pwa: {}, // PWA 插件相关配置 see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  // webpack-dev-server 相关配置
  devServer: {
    // open: true, // 自动打开浏览器
    // host: '0.0.0.0', // 允许外部ip访问
    // port: 8022, // 端口
    // https: false, // 启用https
    overlay: {
      warnings: true,
      errors: true
    }, // 错误、警告在页面弹出
    // proxy: {//反向代理
        // [process.env.VUE_APP_MODE]: {
        //     target: `http://cs.ep.eichong.com:2482/api`,
        //     changeOrigin: true,
        //     pathRewrite: {//看后台是否有，决定是否重写
        //         ["^" + process.env.VUE_APP_API_URL]: ""
        //     }
        // }
  },
  // 第三方插件配置
  pluginOptions: {}
}