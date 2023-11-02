
export default function({ $axios, req, redirect, store, app }) {
  $axios.setHeader('Content-Type', 'application/json')
  let host = ''
  if (process.client) {
    host = window.location.host
  } else {
    host = req.headers.host
  }
  if(host.startsWith('www.')){
    host = host.substring(4, host.length);
  }
  $axios.setHeader('IAM', host)
  $axios.setHeader('cookie', null)
  $axios.onRequest((config) => {})
  $axios.onError((error) => {
    return Promise.reject(error)
  })
}
