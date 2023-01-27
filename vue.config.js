const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(svg)(\?.*)?$/,
          use: [
            {
              loader: 'svg-inline-loader',
              options: {
                limit: 10000,
                name: 'assets/img/[name].[hash:7].[ext]'
              }
            }
          ]
        }
      ]
    }
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .test(() => false)
      .use('file-loader')
  }
}