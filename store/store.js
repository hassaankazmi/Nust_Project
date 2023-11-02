export const state = () => ({
  storeId: "",
  topBarText: '',
  storeName: '',
  email: '',
  phone: '',
  address: '',
  logo: '',
  iam: '',
  bingSiteVerification: '',
  googleSiteVerification: '',
  googleTagId: '',
  stripePublicKey: '',
  paypalEnv: '',
  paypalClientId: '',
  costOverShipping: 0,
  ggConversionId: '',
  ggConversionLabel: '',
  adRollAdvId: '',
  adRollPixId: '',
  isCustomPayment: false,
  customPaymentDomain: '',
  customMeta: '',
  customDescProduct: '',
  linkCustomCss: '',
  domain: '',
  banner: '',
  category1: '',
  category2: '',
  category3: '',
  category4: '',
  category5: '',
  category6: '',
  trendingKeywords: '',
  menus: '',
  saleOffTabs: '',
  pinTrackId: '',
  ggAnalyticsId: '',
  pinUsername: '',
  favicon: '',
  storeDiscount: 0,
  homeAboutUs: '',
  homeAboutUsImage: '',
  spreadShop: '',
  isFakeCheckout: false,
  isTrustedStripe: false,
  isTrustedPayPal: false,
  isShowSpreadShop: false,
  isHideCollection: false,
  isAccessDirectData: false,
  customHome: '',
  customFeatureProduct: ''
})
export const mutations = {
  saveStoreConfig(
    state,
    {
      storeId,
      topBarText,
      storeName,
      email,
      phone,
      address,
      logo,
      iam,
      bingSiteVerification,
      googleSiteVerification,
      googleTagId,
      stripePublicKey,
      paypalEnv,
      paypalClientId,
      costOverShipping,
      ggConversionId,
      ggConversionLabel,
      adRollAdvId,
      adRollPixId,
      isCustomPayment,
      customPaymentDomain,
      customMeta,
      customDescProduct,
      linkCustomCss,
      domain,
      banner,
      category1,
      category2,
      category3,
      category4,
      category5,
      category6,
      trendingKeywords,
      menus,
      saleOffTabs,
      pinTrackId,
      ggAnalyticsId,
      pinUsername,
      favicon,
      storeDiscount,
      homeAboutUs,
      homeAboutUsImage,
      spreadShop,
      isFakeCheckout,
      isTrustedStripe,
      isTrustedPayPal,
      isShowSpreadShop,
      isHideCollection,
      isAccessDirectData,
      customHome,
      customFeatureProduct
    }
  ) {
    state.storeId = storeId
    state.topBarText = topBarText
    state.storeName = storeName
    state.email = email
    state.phone = phone
    state.address = address
    state.logo = logo
    state.iam = iam
    state.bingSiteVerification = bingSiteVerification
    state.googleSiteVerification = googleSiteVerification
    state.googleTagId = googleTagId
    state.stripePublicKey = stripePublicKey
    state.paypalEnv = paypalEnv
    state.paypalClientId = paypalClientId
    state.costOverShipping = costOverShipping
    state.ggConversionId = ggConversionId
    state.ggConversionLabel = ggConversionLabel
    state.adRollAdvId = adRollAdvId
    state.adRollPixId = adRollPixId
    state.isCustomPayment = isCustomPayment
    state.customPaymentDomain = customPaymentDomain
    state.customMeta = customMeta
    state.customDescProduct = customDescProduct
    state.linkCustomCss = linkCustomCss
    state.domain = domain
    state.banner = banner
    state.category1 = category1
    state.category2 = category2
    state.category3 = category3
    state.category4 = category4
    state.category5 = category5
    state.category6 = category6
    state.trendingKeywords = trendingKeywords
    state.menus = menus
    state.saleOffTabs = saleOffTabs
    state.pinTrackId = pinTrackId
    state.ggAnalyticsId = ggAnalyticsId
    state.pinUsername = pinUsername
    state.favicon = favicon
    state.storeDiscount = storeDiscount
    state.homeAboutUs = homeAboutUs
    state.homeAboutUsImage = homeAboutUsImage
    state.spreadShop = spreadShop
    state.isFakeCheckout = isFakeCheckout
    state.isTrustedStripe = isTrustedStripe
    state.isTrustedPayPal = isTrustedPayPal
    state.isShowSpreadShop = isShowSpreadShop
    state.isHideCollection = isHideCollection
    state.isAccessDirectData = isAccessDirectData
    state.customHome = customHome
    state.customFeatureProduct = customFeatureProduct

  }
}

export const getters = {
  getCategories: (state) => {
    const categories = []
    if(state.category1.name){
      categories.push(state.category1)
    }
    if(state.category2.name){
      categories.push(state.category2)
    }
    if(state.category3.name){
      categories.push(state.category3)
    }
    if(state.category4.name){
      categories.push(state.category4)
    }
    if(state.category5.name){
      categories.push(state.category5)
    }
    if(state.category6.name){
      categories.push(state.category6)
    }
    return categories
  }
}
