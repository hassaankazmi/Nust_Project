<template>
  <div v-if="isShowPyStore">
    <Header/>
    <Nuxt/>
    <Footer/>
  </div>
  <div v-else id="myShop" ref="beforeNuxt">
    <a :href='spreadShopUrl'></a>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import {initScripts3rd} from '~/common/AppUtils'

export default {
  components: {
    Header,
    Footer
  },
  head() {
    return {
      __dangerouslyDisableSanitizers: ["script"],
      script: this.jsScripts,
      link: this.cssLinks,
      meta: [
        {
          hid: 'msvalidate.01',
          name: 'msvalidate.01',
          content: this.$store.state.store.bingSiteVerification
        },
        {
          hid: 'google-site-verification',
          name: 'google-site-verification',
          content: this.$store.state.store.googleSiteVerification
        }
      ]
    };
  },
  methods: {},
  computed: {
    cssLinks() {
      const records = []
      if (this.$store.state.store.favicon) {
        records.push({
          hid: 'icon',
          rel: 'icon',
          type: 'image/x-icon',
          href: this.$store.state.store.favicon
        })
      }
      return records
    },
    jsScripts() {
      const records = initScripts3rd(this.$store.state.store, this.$route.path)
      if (!this.isShowPyStore> 0) {
        records.push({
          innerHTML: `var spread_shop_config={shopName: '${this.nameSpreadShop}',locale:'us_US',prefix:'https://${this.nameSpreadShop}.myspreadshop.com',baseId:'myShop'};`

        })
        records.push({
          type: "text/javascript",
          src: `https://${this.nameSpreadShop}.myspreadshop.com/shopfiles/shopclient/shopclient.nocache.js`
        })
      }
      return records
    },
    isShowPyStore() {
      if (this.$store.state.store.isShowSpreadShop && this.$store.state.store.spreadShop && this.$store.state.store.spreadShop.length > 0) {
        if (this.$route.name === "index") {
          if (this.$store.state.store.spreadShop.endsWith("|ACTIVE") && (!this.$route.hash || !this.$route.hash.includes("#!"))) {
            return true
          } else {
            return false
          }
        } else {
          return true
        }
      } else {
        return true
      }
    },
    nameSpreadShop() {
      try {
        if (this.$store.state.store.spreadShop && this.$store.state.store.spreadShop.length > 0) {
          return (this.$store.state.store.spreadShop.split("|")[0]).trim()
        }
      } catch (e) {
      }
      return null
    },
    spreadShopUrl() {
      return `https://${this.nameSpreadShop}.myspreadshop.com`
    }
  }

}
</script>

<style>
svg[display="none"] {
  display: none !important;
}
div[style*="background-color: red"] {
  display: none !important;
}
</style>
