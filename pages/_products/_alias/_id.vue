<template>
  <div>
    <main class="font-roboto bg-primary">
      <Container :padding="'px-1 md:px-4 2xl:px-10 py-3'">
        <div class="flex flex-col md:flex-row bg-white rounded p-2">

          <div class="w-full md:w-3/5">
            <delay-hydration>
              <div>
                <GalleryImages
                  :title="productIam.title"
                  :images="galleryImages"
                  :init-index="indexImage"
                  @onIndex="indexImage = $event"
                />
              </div>
            </delay-hydration>
          </div>

          <div
            class="w-full md:w-2/5 px-0 md:px-3"
            itemprop="offers"
            itemscope
            itemtype="https://schema.org/Offer"
          >
            <meta itemprop="name" :content="productIam.title"/>
            <meta itemprop="url" :content="seoUrl"/>
            <meta itemprop="priceCurrency" content="USD"/>
            <meta
              itemprop="availability"
              itemtype="https://schema.org/ItemAvailability"
              content="https://schema.org/InStock"
            />
            <h1 class="text-dark-purple text-2xl product-detail-title">{{ productIam.title }}</h1>
            <div class="my-2">
              <span itemprop="price" class="text-3xl text-maroon product-detail-price"
              >${{ price | number('0,0.00') }}</span
              >
            </div>
            <delay-hydration>
              <SkuShopify
                v-if="!isRenderMockup"
                class="mb-3"
                :options="productDetail.options"
                :variants="productDetail.variants"
                :designs="designs"
                :select-variant="variantSelect"
                @onChangeVariant="onChangeVariant"
              />

              <SkuMockup
                v-else
                :styles="stylesData"
                :json-data="productDetail.json_data"
                :init-data="{
                selectPrint: selectPrint,
                selectStyle: selectStyle,
                selectSize: selectSize,
                selectColor: selectColor,
              }"
                @onChangeStyle="onChangeStyle"
                @onSelectPrint="onSelectPrint"
                @onSelectColor="onSelectColor"
                @onSelectSize="onSelectSize"
              />
            </delay-hydration>
            <div v-if="isShowCustomProduct" class="my-2">
              <span
              >Custom Text <i class="text-sm">(Optional)</i>: {{ customText }}
              </span>
              <input
                v-model="customText"
                type="text"
                name="customText"
                placeholder="Custom Text"
                class="input w-full rounded-none"
              />
            </div>
            <div v-if="isShowCustomProduct" class="my-2">
              <span
              >Custom Image <i class="text-sm">(Optional: png, jpg, gif)</i>:
                <a
                  v-if="customImage"
                  :href="customImage"
                  target="_blank"
                  class="uppercase underline ml-3 font-bold text-sm text-green-400"
                >View Image</a
                >
              </span>
              <input
                id="fileCustomImage"
                accept="image/*"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="file"
                @change="onChangeCustomImage"
              />
            </div>
            <div class="flex flex-row justify-between mb-3 border-t pt-5">
              <div class="flex flex-row items-center">
                <button
                  aria-label="Decrease quantity"
                  class="border border-gray-800 rounded-full w-10 h-10 flex justify-center items-center hover:border-dark-purple product-detail-minus-btn"
                  @click="quantity--"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <div class="text-xl mx-3">{{ quantity }}</div>
                <button
                  aria-label="Increase quantity"
                  class="border border-gray-800 rounded-full w-10 h-10 flex justify-center items-center hover:border-dark-purple product-detail-plus-btn"
                  @click="quantity++"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
              <div class='flex'>
                <label
                  v-if="isShowBtnSizeGuide"
                  for="size-guide-modal"
                  class="flex flex-row items-center font-bold"
                >
                  <img src="@/assets/img/3d-printer.svg" class="w-6 ml-3" alt="size guide icon"/>
                  <span class='ml-1'>Size Guide </span></label

                >
              </div>
            </div>
            <div class='mt-5'>
              <button
                class="text-white flex justify-center bg-green-light rounded w-full  py-3 text-xl flex flex-row hover:opacity-80 addToCartBtn"
                @click="onAddToCart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Add To Cart
              </button>
            </div>
            <div class='border-t mt-5 py-3'>

              <span v-if="$store.state.store.customFeatureProduct"
                    v-html='$store.state.store.customFeatureProduct'></span>
                  <nuxt-img format="webp" v-else class='object-fill w-full' loading="lazy" src='/img/trust_badge.png'
                            alt="trust payment logo"/>
            </div>
          </div>
        </div>
        <div v-if="similarProducts && similarProducts.length > 0"
             class="my-5 p-5 bg-white rounded border-t border-green-light">
          <h3 class="uppercase font-bold">similar products</h3>
          <delay-hydration>
            <div>
              <SimilarProducts :products="similarProducts"/>
            </div>
          </delay-hydration>
        </div>
        <div class="my-3 bg-white rounded border-t border-green-light" v-lazy-container="{ selector: 'img' }">
          <div class="p-3 bg-gray-200">
            <button class="font-bold  flex text-xl items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-6 h-6 mr-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
              </svg>

              <strong class="uppercase">description</strong></button>
          </div>
            <div>
              <div v-if="isShowShortContent" class="p-3">
                <div v-if="productDetail.shortContent" v-html="renderContent(productDetail.shortContent)"></div>
                <div v-else v-html="productIam.shortContent"></div>
              </div>
              <Features
                :html-body="renderContent(productDetail.body_html)"
                :product-id="productDetail.productId"
              />
            </div>
        </div>
        <div class="my-2 p-3 bg-white rounded border-t border-gray-300"
             v-if='moreLikeProducts && moreLikeProducts.length > 0'>
          <h3 class='text-gray-700 text-lg  font-medium my-2 uppercase'>related products</h3>
          <delay-hydration>
            <div
              class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-2 my-3"
            >
              <Products
                v-for="(product, idx) in moreLikeProducts"
                :key="idx"
                :product="product"
              />
            </div>
          </delay-hydration>
        </div>

        <input id='size-guide-modal' type='checkbox' class='modal-toggle'>
        <label class='modal' for='size-guide-modal'>
          <label class='modal-box w-11/12 max-w-3xl relative'>
            <label for='size-guide-modal' class='btn btn-xs  btn-circle absolute right-2 top-2'>✕</label>
            <SizeGuide v-if="isShowDefaultSizeGuide"/>
            <div v-else class="flex justify-center m-3 p-3">
              <div class="w-full" v-html="productDetail.sizeGuide"></div>
            </div>
          </label>
        </label>

      </Container>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import GalleryImages from '@/components/pages/detail/GalleryImages.vue'
import SkuShopify from '~/components/pages/detail/SkuShopify'
import Features from '~/components/pages/detail/Features'
import SkuMockup from '~/components/pages/detail/SkuMockup'
import Products from '~/components/pages/home/Products.vue'
import {GENERATED_JSON} from '~/common/Constants'
import SizeGuide from '~/components/pages/detail/SizeGuide'
import SimilarProducts from "~/components/pages/detail/SimilarProducts";

export default {
  name: 'ProductDetail',
  components: {
    GalleryImages,
    SkuShopify,
    Features,
    SkuMockup,
    Products,
    SizeGuide,
    SimilarProducts
  },
  async asyncData({
                    $axios,
                    $productApi,
                    $product3rdApi,
                    $serverApi,
                    $cacheFetch,
                    store,
                    params,
                    query,
                    req,
                    error,
                  }) {
    try {
      let host = req.headers.host
      if (host.startsWith('www.')) {
        host = host.substring(4, host.length)
      }
      const {data: productIam} = await $serverApi
        .get(
          `/v3/check-product-in-iam/${store.state.store.iam}/${params.id}`
        )
      if ('status' in productIam && !productIam.status) {
        return error({statusCode: 404, message: `Product not found ID: ${params.id}`})
      }
      let productId = params.id;
      if ('updateProductId' in productIam && productIam.updateProductId && productIam.updateProductId.length >= 5) {
        productId = productIam.updateProductId
      }
      let productDetail = null
      let respDetail = null
      let relateProducts = []
      if ("productKey" in productIam && productIam.productKey) {
        const respDetailStr = await $cacheFetch(
          {key: productIam.productKey, expire: 300},
          () => {
            return $serverApi
              .get('/v3/get-m-product-type/' + productIam.productKey)
              .then((resp) => {
                return JSON.stringify(resp.data)
              })
          })
        productDetail = JSON.parse(respDetailStr)
        const addImage = {
          id: 'Design 1',
          src: productIam.imageUrl
        };
        if (productDetail.images) {
          productDetail.images.unshift(addImage)
        } else {
          productDetail.images = [
            addImage
          ]
        }
        productDetail.json_data = "generated"
      } else if (productIam.isRemoteData) {
        respDetail = await $product3rdApi
          .get('/v3/get-product-detail/' + productId)
        productDetail = respDetail.data
      } else {
        respDetail = await $serverApi
          .get('/v3/get-product-detail/' + productId)
        productDetail = respDetail.data
      }
      if (!productDetail.body_html || productDetail.body_html.length <= 50) {
        if (store.state.store.customDescProduct && store.state.store.customDescProduct.length > 50) {
          productDetail.body_html = store.state.store.customDescProduct
        }
      }
      if ("releatedIds" in productIam && productIam.releatedIds && productIam.releatedIds.length > 0) {
        const releatedIds = productIam.releatedIds;
        const relateProductIdsStr = await $cacheFetch(
          {
            key: `rl-${productId}`,
            expire: 200,
          },
          () => {
            return $serverApi.get(`/v3/get-related-product-by-ids/${store.state.store.iam}`, {
              params: {
                ids: releatedIds.join(',')
              }
            }).then((resp) => {
              return JSON.stringify(resp.data)
            })
          }
        )
        relateProducts = JSON.parse(relateProductIdsStr)
        relateProducts.sort((a, b) => releatedIds.indexOf(a.productId) - releatedIds.indexOf(b.productId));

      }
      if (productDetail.json_data === GENERATED_JSON) {
        let variantSelect = productDetail.variants[0]
        if (query.variant) {
          const variantId = Number.parseInt(query.variant)
          const index = productDetail.variants.findIndex((variant) => {
            return variant.id === variantId
          })
          if (index >= 0) {
            variantSelect = productDetail.variants[index]
          }
        }
        return {
          productDetail,
          variantSelect,
          productIam,
          relateProducts
        }
      } else {
        const stylesStr = await $cacheFetch(
          {
            key: 'gearment-styles',
            expire: parseInt(process.env.CACHE_STYLES),
          },
          () => {
            return $serverApi.get('/v3/greament/products').then((resp) => {
              return JSON.stringify(resp.data)
            })
          }
        )
        const stylesData = JSON.parse(stylesStr)
        let selectStyle = null
        if (query.styleId) {
          selectStyle = Vue._.find(stylesData, (style) => {
            return style.styleId === query.styleId
          })
        }
        if (!selectStyle) {
          selectStyle = stylesData[0]
        }
        let selectPrint = null
        if (query.print) {
          selectPrint = Vue._.find(selectStyle.print, (print) => {
            return print === query.print
          })
        }
        if (!selectPrint) {
          selectPrint = selectStyle.print[0]
        }
        let selectColor = null
        if (query.color) {
          selectColor = Vue._.find(selectStyle.colors, (color) => {
            return color.code === query.color
          })
        }
        if (!selectColor) {
          selectColor = selectStyle.colors[0]
        }

        let selectSize = null
        if (query.size) {
          selectSize = Vue._.find(selectColor.sizes, (size) => {
            return size === query.size
          })
        }
        if (!selectSize) {
          if (selectColor.sizes.length >= 3) {
            selectSize = selectColor.sizes[2]
          } else {
            selectSize = selectColor.sizes[0]
          }
        }
        return {
          productDetail,
          stylesData,
          selectPrint,
          selectStyle,
          selectColor,
          selectSize,
          productIam,
          relateProducts
        }
      }
    } catch (e) {
      error({statusCode: 404, message: `Post not found|${e.stack}|${params.id}`})
    }
  },
  data: () => ({
    variantSelect: null,
    customText: '',
    customImage: '',
    quantity: 1,
    indexImage: 0,
    fbLink: '',
    twitterLink: '',
    pinLink: '',
    imageServer: process.env.CLOUDFRONT_IMAGE_API
  }),
  head() {
    return {
      title: this.productIam.title,
      meta: this.metas,
      link: [
        {
          rel: 'canonical',
          href: this.seoUrl,
        },
      ],
    }
  },
  computed: {
    metas() {
      const records = []
      if (!this.productIam) {
        return []
      }
      let metaDesc = `Get your product ${this.productIam.title}`
      if (this.productIam.metaDesc) {
        metaDesc = this.productIam.metaDesc
      }
      records.push({
        hid: 'description',
        name: 'description',
        content: metaDesc
      })
      records.push({
        hid: 'og:price:amount',
        property: 'og:price:amount',
        content: this.productIam.price
      })
      records.push({
        hid: 'og:image',
        property: 'og:image',
        content: this.productIam.imageUrl
      })

      records.push(
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'product'
        }
      )
      records.push(
        {
          hid: 'og:price:currency',
          property: 'og:price:currency',
          content: 'USD'
        }
      )
      records.push(
        {
          hid: 'product:price:currency',
          property: 'product:price:currency',
          content: 'USD'
        }
      )
      records.push(
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.$store.state.store.storeName
        }
      )
      records.push(
        {
          hid: 'og:availability',
          property: 'og:availability',
          content: 'instock'
        }
      )
      return records
    },
    designs() {
      if (this.productIam.designs && this.productIam.designs.length > 0) {
        const results = [
          {
            id: 'Design 1',
            src: this.productIam.imageUrl,
            small_img: this.productIam.imageUrl
          }
        ]
        return results.concat(this.productIam.designs)
      }
      return []
    },
    isShowShortContent() {
      if (this.productIam.shortContent || this.productDetail.shortContent) {
        return true
      }
      return false
    },
    isShowBtnSizeGuide() {
      if ("sizeGuide" in this.productDetail && !this.productDetail.sizeGuide) {
        return false
      }
      return true
    },
    isShowDefaultSizeGuide() {
      if (this.productDetail.sizeGuide) {
        return false
      }
      return true
    },
    isShowCustomProduct() {
      if (
        !this.isRenderMockup &&
        this.productIam &&
        this.productIam.title &&
        (this.productIam.title.toLowerCase().includes('personalized') ||
          this.productIam.title.toLowerCase().includes('custom'))
      ) {
        return true
      }
      return false
    },
    similarProducts() {
      if (this.relateProducts && this.relateProducts.length > 0) {
        return this.relateProducts.slice(0, 10)
      }
      return []
    },
    moreLikeProducts() {
      if (this.relateProducts && this.relateProducts.length > 0) {
        return this.relateProducts.slice(10)
      }
      return []
    },
    seoUrl() {
      return `https://${this.$store.state.store.domain}${this.$route.path}`
    },
    variantId() {
      if (!this.isRenderMockup) {
        return this.variantSelect.id.toString()
      } else {
        const _variantId =
          this.productDetail.productId +
          "-" +
          this.selectStyle.styleId +
          "-" +
          this.selectColor.code +
          "-" +
          this.selectSize.name +
          "-" +
          this.selectPrint;
        return _variantId;
      }
    },
    galleryImages() {
      const items = []
      if (this.isRenderMockup) {
        const bucketName = this.productDetail.bucketName
        const serverImage = this.imageServer
        const productId = this.productDetail.productId
        this._.forEach(this.selectStyle.colors, (color) => {
          const styleId = this.selectStyle.styleId
          const colorSelect = color.code
          const rect = this.selectStyle.rect[this.selectPrint]
          const printLocation = this.selectPrint.toUpperCase()
          const bgImage = `${styleId}-${colorSelect}-${rect}-${printLocation}`
          const s3ImageLink = `${process.env.S3_BUCKET_LINK}/api/images/${bucketName}/${productId}/${bgImage}/large.jpg`
          if (
            this.productDetail.gen_images &&
            this.productDetail.gen_images.includes(s3ImageLink)
          ) {
            items.push({
              id: `${styleId}-${colorSelect}`,
              src: s3ImageLink,
            })
          } else {
            items.push({
              id: `${styleId}-${colorSelect}`,
              src: `${serverImage}/images/${bucketName}/${productId}/${bgImage}/large.jpg`,
            })
          }
        })
      } else {
        this._.forEach(this.productDetail.images, (item) => {
          items.push(item)
        })
        if (this.designs.length > 0) {
          this._.forEach(this.designs, (item) => {
            items.push(item)
          })
        }
      }
      return items
    },
    price() {
      let value = 0;
      if (!this.isRenderMockup) {
        value = this.variantSelect.price
      } else {
        value = this.selectStyle.price + this.selectSize.price
      }
      if (this.productIam.changePrice > 0) {
        value = value * this.productIam.changePrice;
      }
      if (this.$store.state.store.storeDiscount) {
        value = value + this.$store.state.store.storeDiscount;
      }

      return value
    },
    activeImage() {
      const url = this.galleryImages[this.indexImage]
      return url
    },
    isRenderMockup() {
      return this.productDetail.json_data !== GENERATED_JSON
    },
  },
  watch: {
    quantity(value) {
      if (value <= 1) {
        this.quantity = 1
      } else if (
        value >= 5 &&
        this.productIam &&
        this.productIam.title.toLowerCase().includes('binax')
      ) {
        this.quantity = 5
      } else if (value >= 7) {
        this.quantity = 7
      } else {
        this.quantity = value
      }
    },
  },
  mounted() {
    this.initView()
  },
  methods: {
    renderContent(content) {
      if (content) {
        content = content.replace(/<img([^>]*)src=/gi, '<img$1data-src=');
        content = content.replace(/TITLE/g, this.productIam.title);
        return content
      }
      return null
    },
    initView() {
      const item = {
        productId: this.productIam.productId,
        title: this.productIam.title,
        imageUrl: this.activeImage.src,
        price: this.price,
        rateNum: this.productDetail.rateNum,
        soldNum: this.productDetail.soldNum,
        styleId: this.productDetail.styleId,
        color: this.productDetail.color,
      }
      this.$store.commit('view/addProductView', item)
      this.$tracking.onViewItem({
        id: this.productDetail.productId,
        name: this.productIam.title,
        price: this.price,
      })
    },
    onAddToCart() {
      this.storeOnCart()
      document.querySelector('#cart-drawer').checked = true
    },
    storeOnCart() {
      const properties = []
      if (!this.isRenderMockup) {
        if (this.productDetail.variants.length > 1) {
          for (let i = 0; i < this.productDetail.options.length; i++) {
            properties.push({
              name: this.productDetail.options[i],
              value: this.variantSelect.options[i],
            })
          }
        }
      } else {
        properties.push({
          name: 'Style',
          value: this.selectStyle.name,
        })
        properties.push({
          name: 'Print Location',
          value: this.selectPrint,
        })
        properties.push({
          name: 'Color',
          value: this.selectColor.name,
        })
        properties.push({
          name: 'Size',
          value: this.selectSize.name,
        })
      }
      if (this.customText.trim().length > 0) {
        properties.push({
          name: 'Custom_Text',
          value: this.customText,
        })
      }
      if (this.customImage.trim().length > 0) {
        properties.push({
          name: 'Custom_Image',
          value: this.customImage,
        })
      }

      const item = {
        id: this.productIam.productId + '_' + this.variantId,
        productId: this.productIam.productId,
        title: this.productIam.title,
        alias: this.productDetail.alias,
        image: this.activeImage.src,
        price: this.price,
        variantId: this.variantId,
        properties,
        quantity: this.quantity,
        path: this.$route.path,
        updateProductId: this.productIam.updateProductId,
      }
      this.$store.commit('cart/addToCart', item)
      this.$tracking.onAddToCart({
        id: this.productDetail.productId,
        name: item.title,
        price: item.price,
        quantity: item.quantity,
      })
    },
    onChangeCustomImage(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      const file = files[0]
      const formData = new FormData()
      formData.append('custom_file', file)
      formData.append('custom_file_ajax', true)
      this.$nuxt.$loading.start()
      axios
        .post('https://img.bizticket.net/upload.php', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((resp) => {
          this.customImage = resp.data.file_url
          this.$nuxt.$loading.finish()
        })
        .catch(() => {
          this.$nuxt.$loading.finish()
        })
    },
    onChangeVariant(variant) {
      this.variantSelect = variant
      const index = this._.findIndex(this.galleryImages, (image) => {
        if (this.variantSelect.selectDesign && this.variantSelect.selectDesign.length > 0) {
          return image.id.toString() === this.variantSelect.selectDesign
        } else {
          return (
            this.variantSelect.image_id &&
            image.id.toString() === this.variantSelect.image_id.toString()
          )
        }
      })
      if (index >= 0) {
        this.indexImage = index
      }
      this.$router.replace({
        query: {
          variant: this.variantSelect.id,
        },
      })
    },
    getPathMockupImage() {
      const bucketName = this.productDetail.bucketName
      const productId = this.productDetail.productId
      const styleId = this.selectStyle.styleId
      const colorSelect = this.selectColor.code
      const rect = this.selectStyle.rect[this.selectPrint]
      const printLocation = this.selectPrint.toUpperCase()
      const bgImage = `${styleId}-${colorSelect}-${rect}-${printLocation}`
      const imageUrl = `/images/${bucketName}/${productId}/${bgImage}/large.jpg`
      return imageUrl
    },
    onBindMainImage() {
      const index = this._.findIndex(this.galleryImages, (item) => {
        return item.src.endsWith(this.getPathMockupImage())
      })
      if (index >= 0) {
        this.indexImage = index
        this.$router.replace({
          query: {
            styleId: this.selectStyle.styleId,
            print: this.selectPrint,
            color: this.selectColor.code,
          },
        })
      }
    },
    onSelectPrint(value) {
      this.selectPrint = value
      this.onBindMainImage()
    },
    onSelectSize(value) {
      this.selectSize = value
    },
    onSelectColor(value) {
      this.selectColor = value
      this.onBindMainImage()
    },
    onChangeStyle(value) {
      this.selectStyle = value
    }
  },
}
</script>

<style scoped></style>
