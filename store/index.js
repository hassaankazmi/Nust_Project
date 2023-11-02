export const actions = {
  async nuxtServerInit({ commit, dispatch }, { $cacheFetch, $serverApi, $productApi, req }) {
    let host = req.headers.host;
    if (host.startsWith('www.')) {
      host = host.substring(4, host.length);
    }
    if (req.url !== '/' && req.url !== '/checkout') {
      const data = await $cacheFetch({ key: `db-info-${host}`, expire: parseInt(process.env.CACHE_INFO_STORE) }, () => {
        return $serverApi.$get(`/v3/get-m-store-info-by-domain/${host}`)
      })
      data.domain = host
      commit('store/saveStoreConfig', data)
    } else {
      const { data } = await $serverApi.get(`/v3/get-m-store-info-by-domain/${host}`)
      data.domain = host
      commit('store/saveStoreConfig', data)
    }

    const cartItems = this.$cookies.get('cart', { parseJSON: true });
    if (cartItems && cartItems.length > 0) {
      commit('cart/initCart', cartItems);
    }

    const viewProducts = this.$cookies.get('views', { parseJSON: true });
    if (viewProducts && viewProducts.length > 0) {
      commit('view/initProductView', viewProducts);
    }

  }
}

export const mutations = {}
