<template>
  <div class='2xl:w-10/12 w-full mx-auto'>
    <div  class='relative mb-5'>
      <VueSlickCarousel ref='refProducts' v-bind='productsOptions'>
        <div v-for='(product, idx) in products' :key='idx' class='mt-5'>
          <Products :product='product'  />
        </div>
      </VueSlickCarousel>
      <button
        aria-label="Next product similar"
        class='absolute border flex justify-center items-center top-1/2 right-2 transform -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md -mt-4'
        @click='$refs.refProducts.next()'
      >
        <div class='flex transform -rotate-90'>
          <span class='h-px w-2.5 bg-black transform rotate-45 -mr-px'></span>
          <span class='h-px w-2.5 bg-black transform -rotate-45 -ml-0.5'></span>
        </div>
      </button>
      <button
        aria-label="Prev product similar"
        class='absolute border flex justify-center items-center top-1/2 left-2 transform -translate-y-1/2 h-10 w-10 shadow-md rounded-full bg-white -mt-4'
        @click='$refs.refProducts.prev()'
      >
        <div class='flex transform rotate-90'>
          <span class='h-px w-2.5 bg-black transform rotate-45 -mr-px'></span>
          <span class='h-px w-2.5 bg-black transform -rotate-45 -ml-0.5'></span>
        </div>
      </button>
    </div>

  </div>
</template>

<script>
import Products from '@/components/pages/home/Products.vue'

export default {
  components: {
    Products
  },
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    // Slider options
    productsOptions: {
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: false,
      rows: 1,
      infinite: false,
      swipe: true,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    }
  })
}
</script>

<style lang='scss'>

</style>
