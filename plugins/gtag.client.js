export default ({store}, inject) => {

  // Create gtag function & define gtag deps (window.dataLayer array)
  window.dataLayer = window.dataLayer || []

  function gtag() {
    // eslint-disable-next-line no-undef
    dataLayer.push(arguments)
  }

  gtag('js', new Date())
  // Config with gtagId & send initial page view
  gtag('config', store.state.store.googleTagId, {send_page_view: true})
  if(store.state.store.ggConversionId){
    gtag('config', store.state.store.ggConversionId)
  }

  // Inject gtag function
  inject('gtag', gtag)
}
