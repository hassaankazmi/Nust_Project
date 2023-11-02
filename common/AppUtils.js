import Vue from 'vue'

export function showError(msg) {
  Vue.prototype.$toast.error(msg)
}

export function validateEmail(email) {
  return /.+@.+\..+/.test(email)
}

export function isEmpty(str) {
  return !str || str.length === 0
}

export function slug(str) {
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  const from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;'
  const to = 'aaaaaeeeeeiiiiooooouuuunc------'
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return str
}


export function metaContentCustom(customTag) {
  if (customTag) {
    const tags = customTag.split('|')
    if (tags && tags.length > 1) {
      return tags[1]
    }

  }
  return ''
}

export function seoProduct(product, storeName) {
  if (!product) {
    return []
  }
  const metas = []
  if ("description" in product && product.description) {
    metas.push({
      hid: 'description',
      property: 'description',
      content: product.description
    })
  } else {
    metas.push({
      hid: 'description',
      property: 'description',
      content: product.title
    })
  }
  metas.push({
    hid: 'og:price:amount',
    property: 'og:price:amount',
    content: product.price
  })
  metas.push({
    hid: 'product:price:amount',
    property: 'product:price:amount',
    content: product.price
  })
  metas.push({
    hid: 'og:image',
    property: 'og:image',
    content: product.imageUrl
  })
  metas.push({
    hid: 'og:image:secure_url',
    property: 'og:image:secure_url',
    content: product.imageUrl
  })
  metas.push(
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'product'
    }
  )
  metas.push(
    {
      hid: 'og:price:currency',
      property: 'og:price:currency',
      content: 'USD'
    }
  )
  metas.push(
    {
      hid: 'product:price:currency',
      property: 'product:price:currency',
      content: 'USD'
    }
  )


  metas.push(
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: `${storeName}`
    }
  )

  metas.push(
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: product.title
    }
  )
  metas.push(
    {
      hid: 'og:title',
      property: 'og:title',
      content: product.title
    }
  )
  metas.push(
    {
      hid: 'og:availability',
      property: 'og:availability',
      content: 'instock'
    }
  )
  return metas
}

export function initScripts3rd(store, path) {
  const scripts = []
  if (store.googleTagId) {
    scripts.push({src: `https://www.googletagmanager.com/gtag/js?id=${store.googleTagId}`, async: true})
  }
  return scripts
}

export function detectKeywords(alias) {
  const params = {
    keyword: alias,
    page: 1
  }
  try {
    const index = alias.lastIndexOf('-')
    if (index >= 0) {
      const num = alias.substring(index + 1, alias.length)
      if (parseInt(num)) {
        params.page = parseInt(num)
        params.keyword = alias.substring(0, index)
      }
    }
  } catch (e) {
  }
  return params
}
