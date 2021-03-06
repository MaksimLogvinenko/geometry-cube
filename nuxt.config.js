
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  generate: {
    fallback: true
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  webfontloader: {
    google: {
      families: [
        "Montserrat:300,400,500,600,700,900&display=swap",
        "Roboto:400;900&display=swap"
      ]
    }
  },
  loading: '~/components/LoadingBar.vue',
  /*
  ** Global CSS
  */
  css: [
    "@/assets/scss/main.scss",
    'swiper/css/swiper.min.css'
  ],
  modules: [
    "@nuxtjs/style-resources",
    "nuxt-webfontloader",
  ],
  styleResources: {
    scss: ["@/assets/scss/_mixins.scss", "@/assets/scss/_variables.scss"]
  },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: "plugins/swiper", ssr: false },
    { src: "plugins/vue-gallery.js", mode: "client" },
    { src: "plugins/vue-lazyload.js" },
    { src: "plugins/vue-lazytube.js" },
    { src: "plugins/vuelidate.js" },
    { src: "~/plugins/i18n.js"}
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    /* other modules */
   ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
}
