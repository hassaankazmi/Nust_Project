<template>
  <div class="2xl:w-10/12 w-full mx-auto">
    <h5 class="text-gray-700 sm:text-2xl text-xl font-medium mt-5 mb-2">
      Top Sale OFF
    </h5>
    <div class="w-full overflow-x-scroll scrollbar-none">
      <div class="sale-products-box flex items-center mt-4">
        <div
          v-for="(product, index) in topSale"
          :key="index"
          :class="index === viewTopSale && 'selected-sale'"
          class="sale-products px-5 py-2 text-gray-700 font-medium cursor-pointer"
          @click="viewTopSale = index"
        >
          {{ product.name }}
        </div>
      </div>
    </div>
    <div class="relative mb-5">
      <div v-for="(sale, index) in topSale" :key="index">
        <div v-if="index === viewTopSale">
          <VueSlickCarousel :ref="viewTopSale" v-bind="productsOptions">
            <div
              v-for="(product, ind) in sale.products"
              :key="ind"
              class="mt-5"
            >
              <Products :product="product" />
            </div>
          </VueSlickCarousel>
          <button
            class="absolute border flex justify-center items-center top-1/2 right-2 transform -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md -mb-2"
            @click="$refs[viewTopSale][0].next()"
          >
            <div class="flex transform -rotate-90">
              <span
                class="h-px w-2.5 bg-black transform rotate-45 -mr-px"
              ></span>
              <span
                class="h-px w-2.5 bg-black transform -rotate-45 -ml-0.5"
              ></span>
            </div>
          </button>
          <button
            class="absolute border flex justify-center items-center top-1/2 left-2 transform -translate-y-1/2 h-10 w-10 shadow-md rounded-full bg-white -mb-2"
            @click="$refs[viewTopSale][0].prev()"
          >
            <div class="flex transform rotate-90">
              <span
                class="h-px w-2.5 bg-black transform rotate-45 -mr-px"
              ></span>
              <span
                class="h-px w-2.5 bg-black transform -rotate-45 -ml-0.5"
              ></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Products from '@/components/pages/home/Products.vue'

export default {
  components: {
    Products,
  },
  data: () => ({
    // Slider Options
    productsOptions: {
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: false,
      rows: 2,
      infinite: false,
      swipe: true,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    },
    // Component Data
    topSale: [],
    viewTopSale: 0,
  }),
}
</script>

<style lang="scss" scoped>
.sale-products-box {
  width: max-content;
  .sale-products {
    border-bottom: 3px solid rgb(240, 240, 240);
    transition: all 0.3s ease-in-out;
    &:hover {
      border-bottom: 3px solid rgb(211, 211, 211);
    }
  }
  .selected-sale {
    border-bottom: 3px solid #ff7300;
    z-index: 10;
    &:hover {
      border-bottom: 3px solid #ff7300;
    }
  }
}

</style>
