<template>
  <div>
    <main class="font-roboto bg-primary">
      <Container :padding="'px-1 md:px-4 2xl:px-10 py-3'">
        <div class="flex flex-col md:flex-row bg-white rounded p-2">

          <div class="w-full md:w-3/5">
            <delay-hydration>
              <div>
                <GalleryImages
                  :title="productDetail.title"
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
            <meta itemprop="name" :content="productDetail.title"/>
            <meta itemprop="url" :content="seoUrl"/>
            <meta itemprop="priceCurrency" content="USD"/>
            <meta
              itemprop="availability"
              itemtype="https://schema.org/ItemAvailability"
              content="https://schema.org/InStock"
            />
            <h1 class="text-dark-purple text-2xl product-detail-title">{{ productDetail.title }}</h1>
            <div class="my-2">
              <span itemprop="price" class="text-3xl text-maroon product-detail-price"
              >${{ price | number('0,0.00') }}</span
              >
            </div>
            <delay-hydration>
              <SkuShopify
                class="mb-3"
                :options="productDetail.options"
                :variants="productDetail.variants"
                :designs="designs"
                :select-variant="variantSelect"
                @onChangeVariant="onChangeVariant"
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
                  for="size-guide-modal"
                  class="flex flex-row items-center font-bold"
                >
                  <img src="@/assets/img/3d-printer.svg" class="w-6 ml-3" alt="size guide icon"/>
                  <span class='ml-1'>Size Guide </span></label>
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
              <div v-else v-html="productDetail.shortContent"></div>
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
            <delay-hydration>
              <SizeGuide/>
            </delay-hydration>
          </label>
        </label>

      </Container>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import GalleryImages from '~/components/pages/detail/GalleryImages.vue'
import SkuShopify from '~/components/pages/detail/SkuShopify'
import Features from '~/components/pages/detail/Features'
import Products from '~/components/pages/home/Products.vue'
import SimilarProducts from "~/components/pages/detail/SimilarProducts";
import SizeGuide from '~/components/pages/detail/SizeGuide'

export default {
  name: 'ProductDetail',
  components: {
    GalleryImages,
    SkuShopify,
    Features,
    Products,
    SimilarProducts,
    SizeGuide
  },
  async asyncData({
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
      const {data: productDetail} = await $serverApi
        .get(
          `/v3/get-iam-product-detail-by-alias/${store.state.store.iam}/${params.slug}`
        )
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
      if (productDetail && "product_type" in productDetail && productDetail.product_type && productDetail.product_type.length > 0
        && (!("body_html" in productDetail) || !productDetail.body_html || productDetail.body_html.length < 50)
      ) {
        try {
          const key = `${store.state.store.iam}_${productDetail.product_type}`.toLowerCase()
          const respDescStr = await $cacheFetch(
            {key: `m_desc_${key}`, expire: 300},
            () => {
              return $serverApi
                .get(`/v3/get_product-description-by-key/${key}`)
                .then(({data}) => {
                  return data.content
                })
            })
          if (respDescStr) {
            productDetail.body_html = respDescStr
          }
        } catch (e) {

        }
      }
      return {
        productDetail,
        variantSelect
      }

    } catch (e) {
      console.error(e)
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
  }),
  head() {
    return {
      title: this.productDetail.title,
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
      let metaDesc = `Get your product ${this.productDetail.title}`
      if (this.productDetail.metaDesc) {
        metaDesc = this.productDetail.metaDesc
      }
      records.push({
        hid: 'description',
        name: 'description',
        content: metaDesc
      })
      records.push({
        hid: 'og:price:amount',
        property: 'og:price:amount',
        content: this.productDetail.price
      })
      records.push({
        hid: 'og:image',
        property: 'og:image',
        content: this.productDetail.imageUrl
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
          hid: 'og:url ',
          property: 'og:url ',
          content: this.seoUrl
        }
      )
      records.push(
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.productDetail.title
        }
      )
      records.push(
        {
          hid: 'og:description',
          property: 'og:description',
          content: metaDesc
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

      return []
    },
    isShowShortContent() {
      return false
    },
    similarProducts() {
      if (this.productDetail.releates && this.productDetail.releates.length > 0) {
        return this.productDetail.releates.slice(0, 10)
      }
      return []
    },
    moreLikeProducts() {
      if (this.productDetail.releates && this.productDetail.releates.length > 0) {
        return this.productDetail.releates.slice(10)
      }
      return []
    },
    seoUrl() {
      return `https://${this.$store.state.store.domain}${this.$route.path}`
    },
    variantId() {
      return this.variantSelect.id.toString()
    },
    galleryImages() {
      const items = []
      this._.forEach(this.productDetail.images, (item) => {
        items.push(item)
      })
      return items
    },
    price() {
      return this.variantSelect.price
    },
    activeImage() {
      const url = this.galleryImages[this.indexImage]
      return url
    },
    isShowCustomProduct() {
      if (
        this.productDetail.title &&
        (this.productDetail.title.toLowerCase().includes('personalized') ||
          this.productDetail.title.toLowerCase().includes('custom'))
      ) {
        return true
      }
      return false
    },

  },
  watch: {
    quantity(value) {
      if (value <= 1) {
        this.quantity = 1
      } else if (
        value >= 5
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
        content = content.replace(/TITLE/g, this.productDetail.title);
        return content
      }
      return null
    },
    initView() {
      const item = {
        productId: this.productDetail.productId,
        title: this.productDetail.title,
        slug: this.productDetail.slug,
        imageUrl: this.activeImage.src,
        price: this.price,

      }
      this.$store.commit('view/addProductView', item)
      this.$tracking.onViewItem({
        id: this.productDetail.productId,
        name: this.productDetail.title,
        price: this.price,
      })
    },
    onAddToCart() {
      this.storeOnCart()
      document.querySelector('#cart-drawer').checked = true
    },
    storeOnCart() {
      const properties = []
      if (this.productDetail.variants.length > 1) {
        for (let i = 0; i < this.productDetail.options.length; i++) {
          properties.push({
            name: this.productDetail.options[i],
            value: this.variantSelect.options[i],
          })
        }
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
        id: this.productDetail.productId + '_' + this.variantId,
        productId: this.productDetail.productId,
        title: this.productDetail.title,
        slug: this.productDetail.slug,
        image: this.activeImage.src,
        price: this.price,
        variantId: this.variantId,
        properties,
        quantity: this.quantity,
        path: this.$route.path
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
    }
  },
}
</script>

<style scoped></style>
