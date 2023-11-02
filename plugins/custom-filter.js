import Vue from 'vue'
import { slug } from '@/common/AppUtils.js'

Vue.filter('alias', function (item) {
  if (!item) return ''
  if(item.slug){
    return `/product/${item.slug}`
  }
  let params = ''
  if (item.styleId) {
    params += '&styleId=' + item.styleId
  }
  if (item.color) {
    params += '&color=' + item.color
  }
  if (params.length > 0) {
    params = params.substring(1)
    return '/products/' + slug(item.title) + '/' + item.productId + '?' + params
  } else {
    return '/products/' + slug(item.title) + '/' + item.productId
  }
});
Vue.filter('skuDisplay', function (properties) {
  const text = []
  properties.forEach((prop)=>{
    if(prop.name === 'Custom_Image'){
      text.push(prop.name + `: <a target='_blank' class='text-dark-purple underline font-bold' href="${prop.value}">view</a>`  )
    } else {
      text.push(prop.name + ': ' + prop.value)
    }

  })
  return text.join(' / ')
})

Vue.filter('rate', function (num) {
   return parseInt(num * 100/5)+"%"
})

Vue.filter('smallImage', function (imageUrl) {
  return imageUrl.replace('/large.jpg', '/small.jpg')
});
