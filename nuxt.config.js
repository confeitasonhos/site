const webpack = require('webpack')

module.exports = {
  env: {
    APP_NAME: 'Confeita Sonhos'
  },

  modules: [
    ['@nuxtjs/pwa', { icon: false }],
  ],

  manifest: {
    "lang": "pt-BR",
    "orientation": "portrait",
    "name": "Confeita Sonhos",
    "short_name": "Confeita Sonhos",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#f2e4d7",
    "description": "Tutoriais e confeitaria de bolos para eventos, aniversários, casamentos, dentre outros.",
    "icons": [
      {
        "src": "/images/icons/48x48.png",
        "sizes": "48x48",
        "type": "image/png"
      }, {
        "src": "/images/icons/72x72.png",
        "sizes": "72x72",
        "type": "image/png"
      }, {
        "src": "/images/icons/96x96.png",
        "sizes": "96x96",
        "type": "image/png"
      }, {
        "src": "/images/icons/144x144.png",
        "sizes": "144x144",
        "type": "image/png"
      }, {
        "src": "/images/icons/168x168.png",
        "sizes": "168x168",
        "type": "image/png"
      }, {
        "src": "/images/icons/192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      }
    ],
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
      { name: 'robots', content: 'index,follow' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Confeita Sonhos' },
    ],
    link: [
      { rel: 'stylesheet', href: '//fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/58x58.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/180x180.png' },
      { rel: 'apple-touch-icon', sizes: '167x167', href: '/167x167.png' }
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
