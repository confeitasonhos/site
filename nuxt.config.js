const webpack = require('webpack')

module.exports = {
  env: {
    APP_NAME: 'Confeita Sonhos'
  },

  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    extendRoutes (routes, resolve) {
      routes.push({
        name: '404',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
      routes.push({
        name: 'home',
        path: '/',
        component: resolve(__dirname, 'pages/index.vue')
      })
      routes.push({
        name: 'portfolio',
        path: '/portfolio',
        component: resolve(__dirname, 'pages/portfolio.vue')
      })
      routes.push({
        name: 'quem-somos',
        path: '/quem-somos',
        component: resolve(__dirname, 'pages/quem-somos.vue')
      })
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'confeita-sonhos-site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: '//confeitasonhos.com.br/' },
      { property: 'og:title', content: 'Confeita Sonhos - Betim' },
      { name: 'description', property: 'og:description', content: 'Tutoriais e confeitaria de bolos para eventos, aniversários, casamentos, dentre outros.' },
      { property: 'og:image', content: '//confeitasonhos.com.br/images/logo-fb.png' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '950' },
      { property: 'og:image:height', content: '950' },
      { name: 'author', content: 'Bruno Salgado' },
      { name: 'robots', content: 'index,follow' }
    ],
    link: [
      { rel: 'stylesheet', href: '//fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#b92f34' },

  css: [
    'materialize-css/dist/css/materialize.min.css',
    'font-awesome/css/font-awesome.min.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    vendor: [
      'jquery',
      'materialize-css'
    ],

    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  }
}
