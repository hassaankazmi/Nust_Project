import { showError } from '@/common/AppUtils.js'

export default function ({$axios, store, req}, inject) {
  let host = ''
  const api = $axios.create({
    headers: {
      common: {
        'Content-Type': 'application/json'
      }
    }
  })

  if (process.client) {
    host = window.location.host
  } else {
    host = req.headers.host
  }
  if (host.startsWith('www.')) {
    host = host.substring(4, host.length);
  }
  $axios.setHeader('IAM', host);
  $axios.setHeader('cookie', null);

  api.onRequest((config) => {
  })
  api.onError((error) => {
    showError(error.response.data.message)
    return Promise.reject(error)
  })

  api.setBaseURL(process.env.PRODUCT_3RD_API_URL)
  inject('product3rdApi', api)
}
