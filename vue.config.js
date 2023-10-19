const { defineConfig } = require('@vue/cli-service')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack(config) {
    // monaco-editor 编辑器
    config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
      {
        // Languages are loaded on demand at runtime
        languages: ['json', 'javascript', 'html', 'xml', 'go', 'typescript']
      }
    ])
  }
})
