module.exports = {
  head: {
    title: 'Nuxt Firebae Auth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  mode: 'spa',
  loading: { color: '#3B8070' },
  build: {
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    },
    extractCSS: true,
    analyze: {
      analyzerMode: 'static'
    }
  },
  modules: [
    '@nuxtjs/pwa'
  ],
  router: {
    middleware: 'router-auth'
  },
  plugins: [
    {src: '~/plugins/vuetify.js'},
    '~/plugins/fireauth.js'
  ],
  css: [
    { src: '~/assets/css/main.css', lang: 'css'},
    { src: '~/assets/css/app.styl', lang: 'styl'}
  ],
  vendor: [
    'firebase'
  ]
}
