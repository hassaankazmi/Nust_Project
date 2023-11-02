<template>
  <div>
    <main class='font-roboto'>
      <Container :padding="'px-1 md:px-4 2xl:px-10'">
        <h1 v-if='productType' class='text-center text-3xl my-9 font-bold capitalize'>Best Buy {{ keyword }} - {{ productType }}</h1>
        <h1 v-else class='text-center text-3xl my-9 font-bold capitalize'>Best Buy {{ keyword }}</h1>
        <div class='flex flex-wrap my-3'>
          <div class='form-control mr-5 flex flex-row text-sm' v-for='(type, idx) in productTypes' :key='idx'>
            <label class='label cursor-pointer'>
              <input type='radio' name='radio-6' class='radio radio-sm checked:bg-red-500' :value='type.value' v-model='productType'
                     @click='onChooseProductType(type.value)' />
              <h2 class='label-text ml-3'>{{ type.name }}</h2>
            </label>
          </div>
        </div>

        <div v-if='products' class='flex flex-col my-5'>
          <div
            class='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-2 my-5'
          >
            <Products
              v-for='(product, idx) in products'
              :key='idx'
              :product='product'
              :is-trending='true'
            />
          </div>
          <div class='w-full flex flex-row-reverse text-sm'>
            <Paginate
              :click-handler='onChangePage'
              :page-count='totals'
              :value='currentPage'
              :prev-text="'Prev'"
              :next-text="'Next'"
              :container-class="'inline-flex'"
              page-class='h-10 px-5 flex justify-center items-center'
              page-link-class='page-link-class'
              prev-link-class='h-10 px-5 flex justify-center items-center'
              next-link-class='h-10 px-5 flex justify-center items-center'
              active-class='text-white bg-dark-purple'
            >
            </Paginate>
          </div>
        </div>
        <div v-else>
          <h2
            class='my-20 text-center w-full font-bold uppercase text-2xl text-dark-purple'
          >
            No Data
          </h2>
        </div>
        <div>
          <span v-html='body_html'></span>
        </div>
        <div class='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-2 my-3'>
          <div v-for='(name, i) in tags' :key='i' class='bg-dark-purple rounded-lg text-white text-center px-3 py-2'>
            <a :href='`/wholesale?keyword=${name}`'
            > {{ name }}</a>
          </div>
        </div>
      </Container>
    </main>
  </div>
</template>

<script>
import Products from '@/components/pages/home/Products.vue'
import Paginate from '@/components/common/Paginate.vue'
import { detectKeywords } from '@/common/AppUtils.js'

export default {
  name: 'Collections',
  components: {
    Products,
    Paginate
  },
  async asyncData({ $axios, $productApi, store, app, params, query, error }) {
    try {
      const limit = 20
      const p = detectKeywords(params.keyword)
      let productType = ''
      if (query.product) {
        productType = query.product
      }
      const alias = p.keyword
      const page = p.page
      const resp = await $productApi.get(`/v3/get-collection-info/${alias}`)
      const { data } = await $productApi.get(`/v3/search-product-in-iam/${store.state.store.iam}/search`, {
        params: {
          keyword: '',
          limit,
          offset: page - 1,
          tags: resp.data.keyword,
          product_type: productType
        }
      })
      return {
        products: data,
        offset: page - 1,
        limit,
        currentPage: page,
        seo_title: resp.data.seo_title,
        seo_keyword: resp.data.seo_keyword,
        seo_description: resp.data.seo_description,
        keyword: resp.data.keyword,
        replaceOld: resp.data.replaceOld,
        body_html: resp.data.body_html,
        tags: resp.data.tags,
        type_summary: resp.data.type_summary,
        productType
      }
    } catch (err) {
      console.log(err)
      error({statusCode: 404, message: `Keyword|${JSON.stringify(params)}|q=${JSON.stringify(query)}|Error|${err.stack}`})
    }
  },
  data() {
    return {
      currentPage: 0,
      products: [],
      count: 0
    }
  },
  head() {
    return {
      title: this.seo_title,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.seo_keyword
        },
        {
          hid: 'description',
          name: 'description',
          content: this.seo_description
        }
      ]
    }
  },
  computed: {
    totals() {
      return Math.ceil(this.count / this.limit)
    },
    productTypes() {
      const results = [{
        'name': 'All',
        'value': ''
      }]
      if (this.type_summary) {
        this.type_summary.forEach(item => {
          results.push({
            'name': item.name,
            'value': item.name
          })
        })
      }
      return results
    }
  },
  mounted() {
    this.onCountProduct()
  },
  methods: {
    onChooseProductType(type) {
      const keyword = this.$route.params.keyword
      const p = detectKeywords(keyword)
      const alias =  p.keyword
      this.$router.replace({
        params: { keyword: alias }, query: {
          product: type
        }
      })
      this.productType = type;
      this.onLoadProducts();
      this.onCountProduct();
    },
    onLoadProducts(){
      this.$nuxt.$loading.start()
      this.$productApi
        .get(
          `/v3/search-product-in-iam/${this.$store.state.store.iam}/search`,
          {
            params: {
              tags: this.keyword,
              product_type: this.productType
            }
          }
        )
        .then((resp) => {
          this.products = resp.data;
          this.$nuxt.$loading.finish()
        })
        .catch(() => {
          this.$nuxt.$loading.finish()
        })
    },
    onCountProduct() {
      this.$productApi
        .get(
          `/v3/search-product-in-iam/${this.$store.state.store.iam}/search-count`,
          {
            params: {
              tags: this.keyword,
              product_type: this.productType
            }
          }
        )
        .then((resp) => {
          this.count = resp.data.count
        })
        .catch(() => {
        })
    },
    onChangePage(num) {
      const keyword = this.$route.params.keyword
      const p = detectKeywords(keyword)
      const tag = p.keyword
      let alias = tag
      if (num > 1) {
        alias = `${tag}-${num}`
      }
      this.$router.replace({
        params: { keyword: alias }, query: {
          product: this.productType
        }
      })
    }
  }
}
</script>
