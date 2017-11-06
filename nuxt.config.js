module.exports = {
  head: {
    title: 'Nuxt SSR - Firebase Auth',
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
  loading: { color: '#3f51b5' },
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
    analyze: true
  },
  modules: [
    // '@nuxtjs/pwa'
  ],
  router: {
    // middleware: 'router-auth'
  },
  plugins: [
    {src: '~/plugins/vuetify.js', ssr: true },
    {src: '~/plugins/firebase-client-init.js', ssr: false },
    {src: '~/plugins/auth-cookie.js', ssr: false }
  ],
  serverMiddleware: [
      '~/serverMiddleware/validateFirebaseIdToken'
  ],
  css: [
    { src: '~/assets/css/main.css', lang: 'css'},
    { src: '~/assets/css/app.styl', lang: 'styl'}
  ],
  vendor: [
  ]
}
