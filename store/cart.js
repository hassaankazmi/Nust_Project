import Vue from 'vue'

export const state = () => ({
  products: []
})

export const mutations = {
  addToCart(
    state,
    {
      id,
      productId,
      title,
      alias,
      image,
      price,
      variantId,
      properties,
      quantity,
      shipping,
      path,
      updateProductId
    }
  ) {
    const index = Vue._.findIndex(state.products, (item) => {
      return item.id === id
    })
    const order = {
      id,
      productId,
      title,
      alias,
      image,
      price,
      variantId,
      properties,
      quantity,
      shipping,
      path,
      updateProductId,
      dateTime: new Date()
    }
    if (index < 0) {
      state.products.push(order)
    } else {
      Vue.set(state.products, index, order)
    }
    const cookieParams = state.products
    this.$cookies.set('cart', cookieParams, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
  },

  quantityPlus(state, { id }) {
    const product = Vue._.find(state.products, (item) => {
      return item.id === id
    })
    if (product !== undefined && product.quantity < 7) {
      if (product.title.toLowerCase().includes('binax') && product.quantity >= 5) {
      } else {
        Vue.set(product, 'quantity', product.quantity + 1)
      }
    }
    const cookieParams = state.products
    this.$cookies.set('cart', cookieParams, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
  },
  quantityMinus(state, { id }) {
    const product = Vue._.find(state.products, (item) => {
      return item.id === id
    })
    if (product !== undefined) {
      if (product.quantity > 1) {
        Vue.set(product, 'quantity', product.quantity - 1)
      }
    }
    const cookieParams = state.products
    this.$cookies.set('cart', cookieParams, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
  },
  removeCartItem(state, { id }) {
    const index = Vue._.findIndex(state.products, (item) => {
      return item.id === id
    })
    if (index >= 0) {
      Vue.delete(state.products, index)
    }
    const cookieParams = state.products
    this.$cookies.set('cart', cookieParams, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
  },

  removeCartByProductID(state, { ids }) {
    Vue._.forEach(ids, (id) => {
      const index = Vue._.findIndex(state.products, (item) => {
        return item.id === id
      })
      if (index >= 0) {
        Vue.delete(state.products, index)
      }
    })

    const cookieParams = state.products
    this.$cookies.set('cart', cookieParams, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
  },
  initCart(state, payload) {
    state.products = payload
  },
  clearCart(state) {
    state.products = []
    this.$cookies.set('cart', [], {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
  }
}

export const getters = {
  cartSize: (state) => {
    return state.products.length
  },
  countItems: (state) => {
    let count = 0
    Vue._.forEach(state.products, (item) => {
      count += item.quantity
    })
    return count
  },
  getCartProductToBuy: (state) => (ids) => {
    const items = []
    Vue._.forEach(ids, (id) => {
      const product = Vue._.find(state.products, (item) => {
        return item.id === id
      })
      if (product !== undefined) {
        items.push(product)
      }
    })
    return items
  },
  getProductToBuy: (state) => (ids) => {
    const items = []
    Vue._.forEach(ids, (id) => {
      const product = Vue._.find(state.products, (item) => {
        return item.id === id
      })
      if (product !== undefined) {
        items.push({
          productId: product.productId,
          quantity: product.quantity,
          variantId: product.variantId,
          image: product.image
        })
      }
    })
    return items
  },
  getProductIds: (state) => {
    const arrs = state.products.map((p) => p.productId)
    return arrs
  },
  getProductCartByProductId: (state) => (id) => {
    const product = Vue._.find(state.products, (item) => {
      return item.id === id
    })
    return product
  },
  getProductsCart: (state) => {
    const items = []
    Vue._.forEachRight(state.products, (item) => {
      items.push(item)
    })
    return items
  },
  subTotal: (state) => {
    let totals = 0
    Vue._.forEachRight(state.products, (item) => {
      totals += item.price * item.quantity
    })
    return Vue._.round(totals, 2)
  },
  getCarts: (state) =>{
    const productRequest = [];
    Vue._.forEach(state.products, (product) => {
      const text = [];
      Vue._.forEach(product.properties, (prop) => {
        text.push(prop.name + ": " + prop.value);
      });
      const displayProperties = Vue._.join(text, " ,");
      const item = {
        productId: product.productId,
        quantity: product.quantity,
        variantId: product.variantId,
        image: product.image,
        properties: displayProperties,
        price: product.price,
        title: product.title,
        updateProductId: product.updateProductId
      };
      productRequest.push(item);
    });
    return productRequest
  }
}

export const actions = {
  onSaveCartProductStore({ state }) {
    const productRequest = []
    Vue._.forEach(state.products, (product) => {
      const text = []
      Vue._.forEach(product.properties, (prop) => {
        text.push(prop.name + ': ' + prop.value)
      })
      const displayProperties = Vue._.join(text, ' ,')
      const item = {
        productId: product.productId,
        quantity: product.quantity,
        variantId: product.variantId,
        image: product.image,
        properties: displayProperties,
        price: product.price,
        title: product.title
      }
      productRequest.push(item)
    })

    return this.$axios.$post('/products/cart-store/save', {
      'products': productRequest
    })
  }
}
