// import Vue from 'vue'
import Vue from 'vue'

export const state = () => ({
  products: []
})

export const mutations = {
  addProductView(
    state,
    {
      productId,
      title,
      slug,
      imageUrl,
      price,
      styleId,
      color
    }
  ) {
    const index = Vue._.findIndex(state.products, (item) => {
      return item.productId === productId
    })
    const order = {
      productId,
      title,
      slug,
      imageUrl,
      price,
      styleId,
      color
    }
    if (index < 0 ) {
      state.products.push(order)
      if(state.products.length > 25){
        state.products.shift()
      }
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 3);
      const cookieParams = state.products;
      this.$cookies.set('views', cookieParams, {
        path: '/',
        expires: expirationDate
      });
    }

  },
  initProductView(state, payload) {
    state.products = payload
  }
}

export const getters = {
  getProductViewed: (state) => (id) => {
    const results = []
    Vue._.forEachRight(state.products, item => {
      if (item.productId !== id) {
        results.push(item)
      }
    })
    return results
  }
}

export const actions = {}
