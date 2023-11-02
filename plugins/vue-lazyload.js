 import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

// with options
Vue.use(VueLazyload, {
  lazyComponent: true,
  preLoad: 1.3,
  error: require('~/assets/img/gray-bg.png'),
  loading: require('~/assets/img/gray-bg.png'),
  attempt: 1,
  // listenEvents: ['scroll', 'wheel', 'mousewheel']
})
