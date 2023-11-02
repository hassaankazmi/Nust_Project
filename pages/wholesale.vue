<template>
  <div>
    <main class="font-roboto">
      <Container :padding="'px-1 md:px-4 2xl:px-10'">
        <div class="flex flex-col my-5" v-if="products.length > 0">
          <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-2 my-5"
          >
            <Products
              v-for="(product, idx) in products"
              :key="idx"
              :product="product"
              :is-trending="true"
            />
          </div>
          <div class="w-full flex flex-row-reverse">
            <Paginate
              :click-handler="onChangePage"
              :page-count="totals"
              :prev-text="'Prev'"
              :next-text="'Next'"
              :container-class="'inline-flex'"
              page-class="h-10 px-5 flex justify-center items-center"
              page-link-class="page-link-class"
              prev-link-class="h-10 px-5 flex justify-center items-center"
              next-link-class="h-10 px-5 flex justify-center items-center"
              active-class="text-white bg-dark-purple"
            >
            </Paginate>
          </div>
        </div>
        <div v-else>
          <h2
            class="my-20 text-center w-full font-bold uppercase text-2xl text-dark-purple"
          >
            No Data
          </h2>
        </div>
      </Container>
    </main>
  </div>
</template>

<script>
import Products from '@/components/pages/home/Products.vue'
import Paginate from '@/components/common/Paginate.vue'

export default {
  name: 'wholesale',
  components: {
    Products,
    Paginate,
  },
  head() {
    return {
      title: 'Wholesale'
    }
  },
  async asyncData({ $axios, $productApi, store, app, params, query, error }) {
    try {
      let activePage = parseInt(query.page)
      if (!activePage) {
        activePage = 1
      }
      let words = ''
      if (query.keyword) {
        words = query.keyword
      }
      let tags = null
      if (query.tags) {
        tags = query.tags
      }
      let pTypes = null;
      if(query.pTypes){
        pTypes = query.pTypes
      }

      const { data } = await $productApi.get(
        `/v3/search-product-in-iam/${store.state.store.iam}/search`,
        {
          params: {
            keyword: words,
            tags,
            product_type: pTypes,
            limit: 20,
            offset: activePage - 1,
          },
        }
      )
      return {
        products: data,
        count: 20,
        offset: 0,
        currentPage: activePage,
        tags,
        pTypes
      }
    } catch (err) {
      error({statusCode: 404, message: `Wholesale|Post not found|${err.stack}`})
    }
  },
  data() {
    return {
      currentPage: 0,
      products: [],
      limit: 20,
    }
  },
  computed: {
    totals() {
      return Math.ceil(this.count / this.limit)
    },
  },
  mounted() {
    this.onCountProduct()
  },
  methods: {
    onCountProduct() {
      this.$productApi
        .get(
          `/v3/search-product-in-iam/${this.$store.state.store.iam}/search-count`,
          {
            params: {
              keyword: this.$route.query.keyword,
              tags: this.tags,
              product_type: this.pTypes,
            },
          }
        )
        .then((resp) => {
          this.count = resp.data.count
        })
        .catch(() => {})
    },
    onChangePage(num) {
      let keyword = this.$route.query.keyword
      this.currentPage = num
      if (!keyword) {
        keyword = ''
      }
      let tag = this.$route.query.tag
      if (!tag) {
        tag = ''
      }
      this.$nuxt.$loading.start()
      this.$productApi
        .get(
          `/v3/search-product-in-iam/${this.$store.state.store.iam}/search`,
          {
            params: {
              keyword: this.$route.query.keyword,
              tags: this.tags,
              product_type: this.pTypes,
              offset: this.currentPage - 1,
            },
          }
        )
        .then((resp) => {
          this.products = resp.data
          this.$nuxt.$loading.finish()
          this.$router.replace({
            query: {
              page: this.currentPage,
              tags: this.tags,
              product_type: this.pTypes,
              keyword: this.$route.query.keyword
            },
          });
        })
        .catch(() => {
          this.$nuxt.$loading.finish()
        })
    },
  },
}
</script>
