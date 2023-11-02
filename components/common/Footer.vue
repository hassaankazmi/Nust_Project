<template>
  <div>
    <Container :padding="'px-1 md:px-4 2xl:px-10'">
      <delay-hydration>
      <div>
      <YourViewedProducts />
      </div>
      </delay-hydration>
    </Container>
    <div class='bg-footer-purple font-roboto pt-10 bgFooter'>

      <Container>
        <div class='flex flex-col gap-5 md:flex-row md:justify-between sm:px-5 px-0'>
          <div class='lg:col-span-1 md:col-span-2 lg:pr-2 lg:pl-0 md:pl-12'>
            <p class='text-gray-400 font-semibold uppercase textHeadFooter'>PAGES</p>
            <ul class='flex flex-col gap-2 text-white text-sm mt-5'>

              <li
                class='hover:text-light-purple transition-all duration-200 ease-linear cursor-pointer'
              >
                <a href='/about-us' class="textLinkFooter">
                  About Us
                </a>

              </li>
              <li
                class='hover:text-light-purple transition-all duration-200 ease-linear cursor-pointer'
              >
                <a href='/contact-us' class="textLinkFooter">
                  Contact Us
                </a>

              </li>
              <li
                class='hover:text-light-purple transition-all duration-200 ease-linear cursor-pointer'
              >
                <a href='/faq' class="textLinkFooter">
                  FAQ & Help Center
                </a>

              </li>
              <li
                class='hover:text-light-purple transition-all duration-200 ease-linear cursor-pointer'
              >
                <a href='/track-order' class="textLinkFooter">Order Tracking</a>
              </li>
              <li
                class='hover:text-light-purple transition-all duration-200 ease-linear cursor-pointer'
              >
                <a href='/wholesale' class="textLinkFooter">All Products</a>
              </li>
            </ul>
          </div>
          <div class='lg:col-span-1 md:col-span-2 lg:pl-0 md:pl-12'>
            <ul class='flex flex-col gap-2 text-white text-sm md:mt-11'>
              <li
                class='hover:text-light-purple transition-all duration-200 ease-linear cursor-pointer'
              >
                <a href='/terms-of-service' class="textLinkFooter">
                  Terms of Service
                </a>

              </li>
              <li
                class='hover:text-light-purple transition-all duration-200 ease-linear cursor-pointer'
              >
                <a href='/privacy-policy' class="textLinkFooter">Privacy Policy</a>
              </li>

              <li
                class='hover:text-light-purple transition-all duration-200 ease-linear cursor-pointer'
              >
                <a href='/shipping-policy' class="textLinkFooter">
                  Shipping Policy
                </a>
              </li>
              <li
                class='hover:text-light-purple transition-all duration-200 ease-linear cursor-pointer'
              >
                <a href='/refund-policy' class="textLinkFooter">
                  Refund & Return Policy
                </a>
              </li>


            </ul>
          </div>
          <div class='md:col-span-2 '>
            <p class='text-gray-400 font-semibold textHeadFooter uppercase'>CONTACT US</p>

            <ul class='flex flex-col gap-2 text-white text-sm mt-5'>
              <li
                class='hover:text-light-purple transition-all duration-200 ease-linear cursor-pointer textLinkFooter'
              >
                <span >Address:</span>
                {{ $store.state.store.address }}
              </li>
              <li
                class='hover:text-light-purple transition-all duration-200 ease-linear cursor-pointer textLinkFooter'
              >
                <a :href="'mailto:' + $store.state.store.email"><span >Email:</span>
                {{ $store.state.store.email }}
                </a>
              </li>
              <li v-if="$store.state.store.phone != ''"
                class='hover:text-light-purple transition-all duration-200 ease-linear cursor-pointer textLinkFooter'
              >
                <a :href="'tel:' + $store.state.store.phone">
                <span >Phone:</span>
                {{ $store.state.store.phone }}
                </a>
              </li>


              <li
                class='hover:text-light-purple transition-all duration-200 ease-linear cursor-pointer textLinkFooter'
              >
                <span >Hours:</span>
                Mon - Fri: 9am - 5pm (ET).<br> We will respond to you in the next 2 business days.
              </li>
            </ul>

          </div>
        </div>
      </Container>
      <hr class='mt-4 mb-4 border border-gray-800' />
      <Container>
        <div class="flex items-center justify-between pb-4">
          <!-- <h1 class="text-white font-medium text-lg">Read Our Reviews</h1> -->
          <div class='font-light text-white textHeadFooter'>
            © {{ $store.state.store.storeName }}. All Rights Reserved
          </div>
          <div class='flex gap-2'>
            <img
              src='@/assets/img/american-express.svg'
              alt='american express'
              class='w-8 sm:w-12'
            />
            <img
              src='@/assets/img/mastercard.svg'
              alt='mastercard'
              class='w-8 sm:w-12'
            />
            <img
              src='@/assets/img/visa.svg'
              alt='visa'
              class='w-8 sm:w-12'
            />
            <img
              src='@/assets/img/paypal.svg'
              alt='paypal'
              class='w-8 sm:w-12'
            />
          </div>
        </div>

      </Container>
    </div>
  </div>
</template>

<script>
import YourViewedProducts from '~/components/pages/common/YourViewedProducts'

export default {
  components: {
    YourViewedProducts
  }
}
</script>

<style lang='scss' scoped>
#logo-img {
  filter: brightness(300%) grayscale(100%);
}
</style>
