import redirectSSL from 'redirect-ssl'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Online Store',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: '~/components/common/loading.vue',
  env: {
    API_URL: process.env.API_URL,
    PRODUCT_API_URL: process.env.PRODUCT_API_URL,
    PRODUCT_3RD_API_URL: process.env.PRODUCT_3RD_API_URL,
    SERVER_API_URL: process.env.SERVER_API_URL,
    CLOUDFRONT_IMAGE_API: process.env.CLOUDFRONT_IMAGE_API,
    REDIS_HOST: process.env.REDIS_HOST,
    CACHE_HOME_PAGE: process.env.CACHE_HOME_PAGE,
    CACHE_PRODUCT_PAGE: process.env.CACHE_PRODUCT_PAGE,
    CACHE_INFO_STORE: process.env.CACHE_INFO_STORE,
    GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID,
    DISABLE_CACHE: process.env.DISABLE_CACHE,
    CRAWL_DELAY: process.env.CRAWL_DELAY,
    ADWORD_TRACKING_ID: process.env.ADWORD_TRACKING_ID,
    FACEBOOK_PIXEL_ID: process.env.FACEBOOK_PIXEL_ID,
    IS_ESTORE: process.env.IS_ESTORE,
    S3_BUCKET_LINK: process.env.S3_BUCKET_LINK,
    ONLY_SHIRT_SYS: process.env.ONLY_SHIRT_SYS,
    BUILD_ENV: process.env.BUILD_ENV,
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
    '~/assets/css/quill.snow.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios.js',
    '~/plugins/gtag.client.js',
    '~/plugins/pin.client.js',
    '@/plugins/vue-lodash.js',
    '@/plugins/vue2-filters.js',
    '~/plugins/custom-filter.js',
    '~/plugins/product-api.js',
    '~/plugins/product-3rd-api.js',
    '~/plugins/ecomTracking.client.js',
    '~/plugins/stripe-card-element.client.js',
    '~/plugins/vee-validate.js',
    '~/plugins/server-api.js',
    { src: '~/plugins/global-components.js', ssr: true },
    { src: '~/plugins/vue-slick-carousel.js' },
    { src: '~/plugins/vue-lazyload.js', mode: 'client' },
    '~/plugins/tele.client.js',
    '~/plugins/persisted-shipping-state.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    '@nuxtjs/pwa',
    'nuxt-delay-hydration'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/robots',
    [
      'nuxt-perfect-cache',
      {
        disable: process.env.DISABLE_CACHE === "YES",
        appendHost: false,
        ignoreConnectionErrors: true,
        prefix: 'r-',
        url: process.env.REDIS_HOST,
        getCacheData(route, context) {
          return false
        }
      }
    ],
    '@nuxt/image',
  ],
  delayHydration: {
    mode: 'init',
    debug: process.env.BUILD_ENV === 'development'
  },
  image: {
    // Options
  },
  toast: {
    position: 'top-center',
    duration: 2000,
    theme: 'bubble',
    register: []
  },
  robots: [
    {
      'UserAgent': 'Pinterestbot',
      'Disallow': ['/checkout', '/confirm', '/cart', '/wholesale', '/shop'],
      'Allow': '/',
      'CrawlDelay': "0.2"
    }
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL
  },
  serverMiddleware: [
    redirectSSL.create({
      enabled: process.env.BUILD_ENV === 'production'
    })
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    optimization: {
      splitChunks: {
        maxSize: 300000
      }
    }
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  },
  pwa: {
    icon: false // disables the icon module
  }
}
