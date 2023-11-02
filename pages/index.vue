<template>
  <div>
    <main class='font-roboto'>
      <!-- Poster -->
      <Container :padding="'px-1 md:px-4 2xl:px-10'">
        <!-- Poster -->
        <div class='my-4'>
          <div v-if='isLoaded' class='poster bg-poster bg-cover bg-center' :style='bgBanner'></div>
          <!-- Poster skeleton -->
          <div v-else class='poster-skeleton skeleton w-full bg-gray-100 '></div>
        </div>
      </Container>
      <Container :padding="'px-1 md:px-4 2xl:px-10'">
        <p v-if="categories.length > 0"
           class='text-gray-700 sm:text-2xl text-xl font-medium mt-5 mb-2 text-center uppercase'>
          shop by category
        </p>
        <!-- Categories -->
        <div
          v-if='isLoaded'
          class='grid md:grid-cols-3 grid-cols-2 md:gap-3.5 gap-2 2xl:w-10/12 w-full my-4 mx-auto'
        >
          <a v-for='(category, index) in categories' :key='index' :href='`/wholesale?tags=${category.tags}`'>
            <div
              class='categories relative rounded overflow-hidden cursor-pointer'
            >
              <img v-lazy='category.image' alt='category' class='w-full'/>
              <button
                class='absolute lg:block hidden top-3/4 left-1/2 transform -translate-x-1/2 rounded-full bg-dark-purple text-white font-medium shadow-lg border border-orange py-2 px-6 categoryName'
              >
                {{ category.name }}
              </button>
            </div>
            <p class='lg:hidden block text-center sm:text-base text-sm my-2'>
              {{ category.name }}
            </p>
          </a>
        </div>
        <!-- Category skeleton -->
        <div v-else class='grid md:grid-cols-3 grid-cols-2 md:gap-3.5 gap-2 2xl:w-10/12 w-full my-4 mx-auto'>
          <div v-for='(category, index) in categories' :key='index'
               class='category-skeleton skeleton w-full bg-gray-100 rounded'>
          </div>
        </div>
        <!-- Trending Products -->

        <!-- Featured Products -->
        <FeaturedProducts v-if='featuredProducts.length > 0' :featuredProducts='featuredProducts'/>
        <!--        <HomeCollections/>-->
        <!-- New Arrivals -->
        <NewArrivals v-if='newArrivals.length > 0' :newArrivals='newArrivals'/>

        <!-- Top Sale OFF -->
        <!--        <TopSale />-->
      </Container>

      <Container :padding="'px-4 xl:px-10 '">
        <!-- Home About Us -->
        <div class='my-8' v-if="$store.state.store.customHome">
          <span v-html="$store.state.store.customHome"></span>
        </div>
      </Container>

      <Container :padding="'px-4 xl:px-10 '">
        <!-- Services -->
        <div class='my-8'>
          <div class=" lg:bg-skin bg-white lg:rounded-xl rounded-md lg:shadow-none shadow">
            <div
              class='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-x-0 gap-x-2 '
            >
              <div
                v-for='(service, idx) in services'
                :key='idx'
                class='flex lg:flex-col lg:items-center items-start gap-1 lg:border-none border-b py-5 sm:px-7 px-3'
              >
                <img :src='service.image' class='lg:h-16 smh-12 h-10'/>
                <div
                  class='flex flex-col lg:items-center items-start gap-1 lg:ml-0 ml-3'
                >
                  <h2
                    class='text-footer-purple hover:text-orange font-medium transition-all duration-300 ease-in-out cursor-pointer'
                  >
                    {{ service.title }}
                  </h2>
                  <p class='text-sm transform scale-95 lg:text-center h-10'>
                    {{ service.detail }}
                  </p>

                </div>
                <div
                  class='lg:hidden h-full flex items-end transform -rotate-90 ml-auto sm:pb-4 pb-7'
                >
                <span
                  class='h-0.5 sm:w-3 w-2.5 bg-black transform rotate-45 -mr-0.5'
                ></span>
                  <span
                    class='h-0.5 sm:w-3 w-2.5 bg-black transform -rotate-45 -ml-0.5'
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  </div>
</template>

<script>
import FeaturedProducts from '@/components/pages/home/FeaturedProducts.vue'
import NewArrivals from '@/components/pages/home/NewArrivals.vue'

export default {
  components: {
    FeaturedProducts,
    NewArrivals,
  },
  head() {
    return {
      title: this.$store.state.store.storeName
    }
  },
  async asyncData({$axios, $productApi, store, $cacheFetch, req, error, params}) {
    try {
      let host = req.headers.host;
      if (host.startsWith('www.')) {
        host = host.substring(4, host.length);
      }
      const dataTrendingProducts = await $cacheFetch(
        {key: `${host}-home-trending-products`, expire: parseInt(process.env.CACHE_HOME_PAGE)},
        () => {
          return $productApi.$get(`/v3/get-product-home-page/isTrendingProduct/${host}`).then((resp) => {
            return JSON.stringify(resp)
          })
        }
      )
      const trendingProducts = JSON.parse(dataTrendingProducts)
      const dataNewArrivalsProducts = await $cacheFetch(
        {key: `${host}-home-new-arrivals`, expire: parseInt(process.env.CACHE_HOME_PAGE)},
        () => {
          return $productApi.$get(`/v3/get-product-home-page/isNewArrivals/${host}`).then((resp) => {
            return JSON.stringify(resp)
          })
        }
      )
      const newArrivals = JSON.parse(dataNewArrivalsProducts)

      const dataFeaturedProducts = await $cacheFetch(
        {key: `${host}-home-featured-products`, expire: parseInt(process.env.CACHE_HOME_PAGE)},
        () => {
          return $productApi.$get(`/v3/get-product-home-page/isFeaturedProducts/${host}`).then((resp) => {
            return JSON.stringify(resp)
          })
        }
      )
      const featuredProducts = JSON.parse(dataFeaturedProducts)

      return {
        trendingProducts,
        newArrivals,
        featuredProducts,
      }
    } catch (err) {
      error({statusCode: 404, message: `Home|Post not found|${err.stack}`})
    }
  },
  data: () => ({
    services: [
      {
        id: 1,
        title: 'Worldwide Shipping',
        detail: 'Available as Standard or Express delivery',
        action: 'Learn More',
        image: require('@/assets/img/shipping.svg')
      },
      {
        id: 2,
        title: 'Secure Payments',
        detail: 'Secure payment with 256-bit SSL Encryption',
        action: 'Learn More',
        image: require('@/assets/img/secure.svg')
      },
      {
        id: 3,
        title: 'Free Return',
        detail: 'Exchange or money back guarantee for all orders',
        action: 'Learn More',
        image: require('@/assets/img/free-return.svg')
      },
      {
        id: 4,
        title: 'Local Support',
        detail: '24/7 Dedicated support',
        action: 'Submit a request',
        image: require('@/assets/img/support.svg')
      }
    ],

    isLoaded: false
  }),
  computed: {
    categories() {
      if (this.$store.state.store.isHideCollection) {
        return []
      }
      return this.$store.getters['store/getCategories']
    },
    bgBanner() {
      return {
        backgroundImage: `url(${this.$store.state.store.banner})`
      }
    }
  },
  mounted() {
    this.isLoaded = true
  }
}
</script>

<style lang='scss' scoped>
.poster {
  height: calc(100vw / 2);
  max-height: 25.5rem;
}

.poster-skeleton {
  height: 400px;
}

.categories {
  img {
    transition: all 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.25);
  }
}

.category-skeleton {
  height: 300px;
}

// skeleton animation
.skeleton {
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 30%;
    background: linear-gradient(to right, #F3F4F6, rgb(250, 253, 255), #F3F4F6);
    animation: gradient .9s infinite;

  }
}

@keyframes gradient {
  0% {
    transform: translateX(-20%)
  }
  100% {
    transform: translateX(330%)
  }
}

@media screen and (max-width: 1280px) {
  .poster-skeleton {
    height: calc(100vw / 3);
  }
  .category-skeleton {
    height: 30vw;
  }
}

@media screen and (max-width: 767px) {
  .poster-skeleton {
    height: 55vw;
  }
  .category-skeleton {
    height: 40vw;
  }
}
</style>
