module.exports = {
    configureWebpack: {
      externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'axios': 'axios',
        'element-ui': 'Element',
        'qs': 'Qs'
      }
    }
  }