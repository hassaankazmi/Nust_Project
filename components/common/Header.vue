<template>
  <div class='border-b border-opacity-80 font-roboto lg:pb-0 md:pb-5 pb-2'>
    <div v-if='$store.state.store.topBarText'
         class='top-sale md:block hidden bg-primary text-center text-sm p-3 text-orange topBarNotify x-top-bar'>
      {{ $store.state.store.topBarText }}
    </div>
    <div v-if='$store.state.store.topBarText'
         class='top-sale md:hidden block bg-white text-orange text-center text-sm overflow-x-scroll scrollbar-none pt-2 px-3 x-top-bar'>
      <span class='w-max flex justify-center mx-auto'>
        {{ $store.state.store.topBarText }}
      </span>
    </div>
    <Container class="x-header">
      <div class='md:pt-5 pt-2'>
        <div class='flex justify-between items-center gap-5'>
          <div class='flex gap-2 items-center flex-shrink-0'>
            <div
              class='lg:hidden flex flex-col sm:gap-1.5 gap-1 cursor-pointer'
              @click='mobileMenu = true'
            >
              <span class='flex-shrink-0 h-0.5 sm:w-6 w-4 bg-black'></span>
              <span class='flex-shrink-0 h-0.5 sm:w-6 w-5 bg-black'></span>
              <span class='flex-shrink-0 h-0.5 sm:w-6 w-3.5 bg-black'></span>
            </div>
            <a href='/'>
              <img v-if='$store.state.store.logo'
                   :src='$store.state.store.logo'
                   alt='logo'
                   class='lg:w-40 sm:w-32 w-28'
              />
              <img v-else
                   src='@/assets/img/logo.svg'
                   alt='logo'
                   class='lg:w-40 sm:w-32 w-28'
              />
            </a>
          </div>
          <div
            :class="
              isSearching
                ? 'shadow-purple-outline z-50 bg-white'
                : 'z-auto lg:shadow-none shadow-gray-outline lg:bg-primary bg-white '
            "
            class='relative hidden md:flex items-center rounded-full lg:border-none transition-all duration-300 ease-in-out w-full pr-4'
            @click='isSearching = true'
          >
            <input
              type='text'
              v-model='keyword'
              v-on:keyup.enter='onSearch'
              placeholder='Search designs and products'
              class='w-full bg-transparent placeholder-gray-700 outline-none py-2.5 px-4'
            />
<!--            <img-->
<!--              @click='onSearch'-->
<!--              src='@/assets/img/header/search.png'-->
<!--              alt='search'-->
<!--              class='w-6'-->
<!--            />-->
            <svg @click='onSearch' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <!-- Search Results -->
          </div>
          <div class="hidden md:flex flex-col font-bold">
            <div v-if="$store.state.store.phone">
              <div class="flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-4 h-3">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                </svg>

                <a :href="'mailto:' + $store.state.store.email" class="ml-1">
                  {{ $store.state.store.email }}</a>
              </div>
              <div class="flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-4 h-3">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                </svg>
                <a :href="'tel:' + $store.state.store.phone" class=" ml-1 text-sm">
                  {{ $store.state.store.phone }}</a>
              </div>
            </div>
            <div class="flex flex-row items-center" v-else>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
              </svg>

              <a :href="'mailto:' + $store.state.store.email" class="ml-1 text-lg">
                {{ $store.state.store.email }}</a>
            </div>

          </div>
          <div class='flex items-center sm:gap-3 gap-1.5 flex-shrink-0'>
            <div class='md:hidden cursor-pointer pr-2.5'>
<!--              <img-->
<!--                src='@/assets/img/header/search.png'-->
<!--                alt='search'-->
<!--                class='sm:w-6 w-4'-->
<!--                @click='openMobileSearch = !openMobileSearch'-->
<!--              />-->
              <svg @click='openMobileSearch = !openMobileSearch' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>

            </div>
            <div class='flex items-center justify-center h-full sm:p-2 p-1'>
              <!--  -->
              <div class='drawer drawer-end z-30'>
                <input
                  id='cart-drawer'
                  type='checkbox'
                  class='border-none drawer-toggle'
                />
                <div
                  class='flex flex-col items-start justify-center drawer-content shadow-none'
                >
                  <label for='cart-drawer' class='z-20 overflow-hidden'
                  >
                    <div class='relative'>

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  mr-2.5 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>

                      <span
                        class='absolute  top-0 right-0 bg-blue-light leading-none rounded-lg text-white px-1 py-0.5 text-center numCart'
                        style='font-size: 12px'>
                        {{
                          $store.getters['cart/cartSize']
                        }}
                      </span>
                    </div>

                  </label>
                </div>
                <div class='drawer-side bg-white p-4 shadow-none'>
                  <label
                    for='cart-drawer'
                    class='fixed top-0 left-0 h-full w-full drawer-overlay z-10'
                  ></label>
                  <div
                    class='bg-white fixed top-0 right-0 h-full w-80 overflow-y-scroll scrollbar-none p-4'
                  >
                    <div
                      class='flex justify-between items-center border-b pb-2'
                    >
                      <h2 class='uppercase font-semibold text-dark-purple'>Shopping Cart</h2>
                      <label for='cart-drawer' class='cursor-pointer'>
                        <div
                          class='uppercase flex items-center gap-2 text-gray-400 text-xs cursor-pointer'
                        >
                          Close
                          <!-- arrow icon -->
                          <div class='flex justify-center items-center'>
                            <span class='bg-gray-400 h-px w-3 -mr-px'></span>
                            <div
                              class='flex justify-center items-center transform -rotate-90 -ml-1.5'
                            >
                              <p
                                class='bg-gray-400 h-px w-1.5 transform rotate-45 -mr-px'
                              ></p>
                              <p
                                class='bg-gray-400 h-px w-1.5 transform -rotate-45 -ml-px'
                              ></p>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div
                      v-for="item in $store.getters['cart/getProductsCart']"
                      :key='item.id'
                      class='flex items-center gap-2 py-3 border-b'
                    >
                      <div class='avatar'>
                        <div class='w-24 rounded'>
                          <img :src='item.image' :alt="item.title"/>
                        </div>
                      </div>
                      <!--                      <img-->
                      <!--                        :src="item.image"-->
                      <!--                        alt="cart-item"-->
                      <!--                        class="w-1/4 flex-shrink-0"-->
                      <!--                      />-->
                      <div class='w-3/4'>
                        <div class='flex justify-between'>
                          <h2 class='font-medium text-sm'>
                            {{ item.title }}
                          </h2>
                          <!-- x icon -->
                          <div
                            @click="
                            $store.commit('cart/removeCartItem', {
                              id: item.id,
                            })
                          "
                            class='h-5 w-5 rounded-full border-2 flex-shrink-0 flex justify-center items-center cursor-pointer mt-2'
                          >
                            <span
                              class='h-0.5 w-2.5 bg-black transform rotate-45 -mr-1'
                            ></span>
                            <span
                              class='h-0.5 w-2.5 bg-black transform -rotate-45 -ml-1.5'
                            ></span>
                          </div>
                        </div>
                        <div class='my-2.5'>
                          <span class='text-xs text-gray-400' v-html='$options.filters.skuDisplay(item.properties)'>
                          </span>

                        </div>
                        <div class='text-gray-400 text-sm'>
                          {{ item.quantity }} X
                          <span class='font-medium text-gray-600'>
                            ${{ item.price | number('0,0.00') }}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      class='py-3 flex justify-between text-sm border-b px-1'
                    >
                      <div>Subtotal:</div>
                      <div>${{
                          $store.getters['cart/subTotal'] | number('0,0.00')
                        }}
                      </div>
                    </div>
                    <div class='flex flex-col items-center gap-3'>
                      <a
                        href='/cart'
                        class='border-b-2 border-blue-700 pb-px w-max mx-auto text-sm mt-4'
                      >View Cart</a
                      >
                      <button
                        @click='onNavCheckout'
                        class='btn-active btn-md uppercase text-sm text-white font-normal rounded w-full bg-dark-purple'
                      >
                        Go to checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!--  -->
            </div>
          </div>
          <!-- Close Search Results -->
          <transition name='fade'>
            <div
              v-if='isSearching'
              class='md:block hidden fixed top-0 left-0 h-full w-full bg-footer-purple bg-opacity-40 z-40'
              @click='isSearching = false'
            ></div>
          </transition>
        </div>

        <!-- Menu -->
        <nav class='relative lg:block hidden mt-4'>
          <ul class='flex items-center'>
            <li class="x-item-menu">
              <p
                class='main py-2.5 px-4 transition-all duration-300 ease-in-out font-medium text-dark-purple cursor-pointer hover:text-orange'
              >
                <a href='/' class="headerText">
                  Home
                </a>


              </p>
            </li>
            <li v-for='(list, index) in menu' :key='index' class='relative x-item-menu'>
              <p
                class='main py-2.5 px-4 transition-all duration-300 ease-in-out font-medium text-dark-purple cursor-pointer hover:text-orange'
              >
                <a v-if='list.subMenu && list.subMenu.length > 0'>{{ list.name }}</a>
                <a v-else :href='list.path' class="headerText">{{ list.name }}</a>
              </p>
              <!-- sub-menu -->
              <div
                v-if='list.subMenu'
                class='child-list absolute top-full left-1/2 transform -translate-x-1/2 w-52 pt-4 z-10'
              >
                <div class='shadow-rounded rounded'>
                  <ul class='bg-white rounded font-medium z-10'>
                    <li
                      v-for='(subList, idx) in list.subMenu'
                      :key='idx'
                      class='relative flex items-center hover:bg-lighter-gray transition-all duration-200 ease-linear justify-between z-10'
                    >
                      <p
                        class='transition-all duration-200 ease-linear px-4 py-2.5 cursor-pointer text-dark-purple hover:text-orange w-full'
                      >
                        <a :href='list.path'>
                          {{ subList.name }}
                        </a>
                      </p>
                      <!-- arrow icon -->
                      <div
                        v-if='subList.subMenu'
                        class='flex transform -rotate-90 flex-shrink-0 mr-4'
                      >
                        <span
                          class='h-px sm:w-2 w-1.5 bg-black transform rotate-45 sm:-mr-px'
                        ></span>
                        <span
                          class='h-px sm:w-2 w-1.5 bg-black transform -rotate-45 -ml-0.5'
                        ></span>
                      </div>

                      <ul
                        v-if='subList.subMenu'
                        class='absolute top-0 left-full bg-white shadow-rounded rounded w-52'
                      >
                        <li
                          v-for='(innerSubMenu, id) in subList.subMenu'
                          :key='id'
                          class='hover:bg-lighter-gray transition-all duration-200 ease-linear px-4 py-2.5 cursor-pointer text-dark-purple hover:text-orange'
                        >
                          {{ innerSubMenu.name }}
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div
                    class='absolute top-2.5 left-1/2 transform -translate-x-1/2 rotate-45 h-3.5 w-3.5 bg-white -mt-px'
                  ></div>
                </div>
              </div>
            </li>

            <li>
              <p
                class='main py-2.5 px-4 transition-all duration-300 ease-in-out font-medium text-dark-purple cursor-pointer hover:text-orange'
              >
                <a href='/track-order' class="headerText">
                  Track Order
                </a>


              </p>
            </li>
            <li>
              <p
                class='main py-2.5 px-4 transition-all duration-300 ease-in-out font-medium text-dark-purple cursor-pointer hover:text-orange'
              >
                <a href='/shipping-policy' class="headerText">
                  Shipping Policy
                </a>


              </p>
            </li>
            <li>
              <p
                class='main py-2.5 px-4 transition-all duration-300 ease-in-out font-medium text-dark-purple cursor-pointer hover:text-orange'
              >
                <a href='/refund-policy' class="headerText">
                  Refund & Return Policy
                </a>


              </p>
            </li>
            <li>
              <p
                class='main py-2.5 px-4 transition-all duration-300 ease-in-out font-medium text-dark-purple cursor-pointer hover:text-orange'
              >
                <a href='/contact-us' class="headerText">
                  Contact Us
                </a>

              </p>
            </li>
          </ul>
        </nav>

        <!-- Mobile menu -->
        <div
          v-if='mobileMenu'
          class='lg:hidden block fixed top-0 left-0 h-full w-full bg-black bg-opacity-40 transition-all duration-200 ease-in-out z-30'
          @click='
            ;(mobileMenu = false),
              (mobileSubMenu = null),
              (mobileInnerSubMenu = null)
          '
        >
          <div
            class='fixed left-80 transform top-7 text-white flex justify-center items-center cursor-pointer'
          >
            <span class='h-0.5 w-6 bg-white transform -rotate-45'></span>
            <span
              class='h-0.5 w-6 bg-white transform rotate-45 -translate-x-full'
            ></span>
          </div>
        </div>
        <!--  -->
        <nav>
          <!-- main menu -->
          <div
            :class="mobileMenu ? 'translate-x-0' : '-translate-x-full'"
            class='mobile-nav lg:hidden block fixed top-0 left-0 h-full bg-white transform transition-all duration-200 ease-in-out z-40'
          >
            <div class='bg-primary p-4'>
              <a href='/'>
                <img v-if='$store.state.store.logo'
                     :src='$store.state.store.logo'
                     alt='logo'
                     class='lg:w-40 sm:w-32 w-28'
                />
                <img v-else
                     src='@/assets/img/logo.svg'
                     alt='logo'
                     class='lg:w-40 sm:w-32 w-28'
                />
              </a>
            </div>
            <ul>
              <li>
                <div class='group flex items-center justify-between border-t cursor-pointer'>
                  <p
                    class='py-2 px-4 transition-all duration-300 ease-in-out cursor-pointer font-medium text-dark-purple group-hover:text-orange'
                  >
                    <a href='/' class="headerText">Home</a>
                  </p>
                </div>
              </li>
              <li v-for='(list, index) in menu' :key='index'>
                <div
                  class='group flex items-center justify-between border-t cursor-pointer'
                  @click='openSubMenu(index)'
                >
                  <p
                    class='py-2 px-4 transition-all duration-300 ease-in-out cursor-pointer font-medium text-dark-purple group-hover:text-orange'
                  >

                    <a v-if='list.subMenu'>
                      {{ list.name }}
                    </a>
                    <a v-else :href='list.path' class="headerText">
                      {{ list.name }}
                    </a>
                  </p>
                  <!-- arrow icon -->
                  <div
                    v-if='list.subMenu'
                    class='flex sm:ml-2 ml-1.5 mr-4 transform -rotate-90'
                  >
                    <span
                      class='h-px w-2.5 bg-black transform rotate-45 -mr-px'
                    ></span>
                    <span
                      class='h-px w-2.5 bg-black transform -rotate-45 -ml-0.5'
                    ></span>
                  </div>
                </div>
              </li>
              <li>
                <div class='group flex items-center justify-between border-t cursor-pointer'>
                  <p
                    class='py-2 px-4 transition-all duration-300 ease-in-out cursor-pointer font-medium text-dark-purple group-hover:text-orange'
                  >
                    <a href='/track-order' class="headerText">Track Order</a>
                  </p>
                </div>
              </li>
              <li>
                <div class='group flex items-center justify-between border-t cursor-pointer'>
                  <p
                    class='py-2 px-4 transition-all duration-300 ease-in-out cursor-pointer font-medium text-dark-purple group-hover:text-orange'
                  >
                    <a href='/terms-of-service' class="headerText">
                      Terms Of Service</a>
                  </p>
                </div>
              </li>
              <li>
                <div class='group flex items-center justify-between border-t cursor-pointer'>
                  <p
                    class='py-2 px-4 transition-all duration-300 ease-in-out cursor-pointer font-medium text-dark-purple group-hover:text-orange'
                  >
                    <a href='/privacy-policy' class="headerText">
                      Privacy Policy</a>
                  </p>
                </div>
              </li>
              <li>
                <div class='group flex items-center justify-between border-t cursor-pointer'>
                  <p
                    class='py-2 px-4 transition-all duration-300 ease-in-out cursor-pointer font-medium text-dark-purple group-hover:text-orange'
                  >
                    <a href='/shipping-policy' class="headerText">
                      Shipping & Delivery</a>
                  </p>
                </div>
              </li>
              <li>
                <div class='group flex items-center justify-between border-t cursor-pointer'>
                  <p
                    class='py-2 px-4 transition-all duration-300 ease-in-out cursor-pointer font-medium text-dark-purple group-hover:text-orange'
                  >
                    <a href='/refund-policy' class="headerText">
                      Return & Refund</a>
                  </p>
                </div>
              </li>
              <li>
                <div class='group flex items-center justify-between border-t cursor-pointer'>
                  <p
                    class='py-2 px-4 transition-all duration-300 ease-in-out cursor-pointer font-medium text-dark-purple group-hover:text-orange'
                  >
                    <a href='/faq' class="headerText">
                      Faq & Help Center</a>
                  </p>
                </div>
              </li>
              <li>
                <div class='group flex items-center justify-between border-t cursor-pointer'>
                  <p
                    class='py-2 px-4 transition-all duration-300 ease-in-out cursor-pointer font-medium text-dark-purple group-hover:text-orange'
                  >
                    <a href='/about-us' class="headerText">
                      About Us</a>
                  </p>
                </div>
              </li>
              <li>
                <div class='group flex items-center justify-between border-t cursor-pointer'>
                  <p
                    class='py-2 px-4 transition-all duration-300 ease-in-out cursor-pointer font-medium text-dark-purple group-hover:text-orange'
                  >
                    <a href='/contact-us' class="headerText">
                      Contact Us</a>
                  </p>
                </div>
              </li>
              <li>
                <div class='group flex items-center justify-between border-t cursor-pointer'>
                  <p
                    class='py-2 px-4 transition-all duration-300 ease-in-out cursor-pointer font-medium text-dark-purple group-hover:text-orange flex flex-row items-center'
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                    </svg>

                    <a :href="'mailto:' + $store.state.store.email" class="headerText ml-1">
                      {{ $store.state.store.email }}</a>
                  </p>
                </div>
              </li>
              <li v-if="$store.state.store.phone">
                <div class='group flex items-center justify-between border-t cursor-pointer'>
                  <p
                    class='py-2 px-4 transition-all duration-300 ease-in-out cursor-pointer font-medium text-dark-purple group-hover:text-orange flex flex-row items-center'
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                    <a :href="'tel:' + $store.state.store.phone" class="headerText ml-1">
                      {{ $store.state.store.phone }}</a>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <!-- sub-menu -->
          <div
            :class="mobileSubMenu !== null ? 'translate-x-0' : '-translate-x-full'"
            class='mobile-nav lg:hidden block fixed top-0 left-0 h-full bg-white transform transition-all duration-300 ease-in-out z-50'
          >
            <div
              v-if='mobileSubMenu !== null'
              :class='menu[mobileSubMenu].color'
              class='flex items-center gap-2 p-4 cursor-pointer'
              @click='mobileSubMenu = null'
            >
              <div
                class='flex justify-center items-center sm:ml-2 ml-1.5 transform rotate-90 bg-white h-8 w-8 rounded-full'
              >
                <span
                  class='h-px w-2.5 bg-black transform rotate-45 -mr-px'
                ></span>
                <span
                  class='h-px w-2.5 bg-black transform -rotate-45 -ml-0.5'
                ></span>
              </div>
              <h2 v-if='mobileSubMenu !== null'
                  class='text-dark-purple group-hover:text-orange font-medium transition-all duration-200 ease-linear'>
                {{ menu[mobileSubMenu].name }}
              </h2>
            </div>
            <!-- selected sub-menu -->
            <ul v-if='mobileSubMenu !== null'>
              <li
                v-for='(child, id) in menu[mobileSubMenu].subMenu'
                :key='id'
                class='group py-3 px-4 border-t flex items-center cursor-pointer justify-between'
                @click='openInnerSubMenu(id)'
              >
                <p
                  class='text-dark-purple group-hover:text-orange font-medium transition-all duration-200 ease-linear'
                >
                  <a :href='child.path'>
                    {{ child.name }}
                  </a>
                </p>
                <!-- arrow icon -->
                <div v-if='child.subMenu' class='flex transform -rotate-90'>
                  <span
                    class='h-px w-2.5 bg-black transform rotate-45 -mr-px'
                  ></span>
                  <span
                    class='h-px w-2.5 bg-black transform -rotate-45 -ml-0.5'
                  ></span>
                </div>
              </li>
            </ul>
          </div>

          <!-- Inner sub-menu -->
          <div
            :class="mobileInnerSubMenu ? 'translate-x-0' : '-translate-x-full'"
            class='mobile-nav lg:hidden block fixed top-0 left-0 h-full bg-white transform transition-all duration-300 ease-in-out z-50'
          >
            <div
              v-if='mobileSubMenu'
              :class='menu[mobileSubMenu].color'
              class='flex items-center gap-2 p-4 cursor-pointer'
              @click='mobileInnerSubMenu = null'
            >
              <div
                class='flex justify-center items-center sm:ml-2 ml-1.5 transform rotate-90 bg-white h-8 w-8 rounded-full'
              >
                <span
                  class='h-px w-2.5 bg-black transform rotate-45 -mr-px'
                ></span>
                <span
                  class='h-px w-2.5 bg-black transform -rotate-45 -ml-0.5'
                ></span>
              </div>
              <h2 v-if='mobileInnerSubMenu' class='font-medium text-white'>
                {{ menu[mobileSubMenu].subMenu[mobileInnerSubMenu].name }}
              </h2>
            </div>
            <!-- selected sub-menu -->
            <ul v-if='mobileInnerSubMenu'>
              <li
                v-for='(main, idx) in menu[mobileSubMenu].subMenu[
                  mobileInnerSubMenu
                ].subMenu'
                :key='idx'
                class='text-dark-purple py-3 px-4 border-t hover:text-orange cursor-pointer transition-all duration-200 ease-linear'
              >
                {{ main.name }}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Container>

    <!-- Bottom Menu -->
<!--    <div-->
<!--      class='md:hidden grid grid-cols-5 bg-white fixed bottom-0 left-0 w-full shadow-rounded pt-3 pb-2 z-20'-->
<!--    >-->
<!--      <a class='bottom-nav group flex flex-col items-center cursor-pointer' href='/'>-->
<!--        <img src='@/assets/img/header/home.png' class='sm:h-7 h-5 transition-all duration-200 ease-linear'/>-->
<!--        <p-->
<!--          class='mt-1.5 sm:text-sm text-xs group-hover:text-orange transition-all duration-200 ease-linear transform sm:scale-100 scale-90 uppercase'-->
<!--        >-->
<!--          Shop Now-->
<!--        </p>-->
<!--      </a>-->
<!--      <a class='bottom-nav group flex flex-col items-center cursor-pointer' href='/cart'>-->
<!--        <img src='@/assets/img/header/cart.png' class='sm:h-7 h-5 transition-all duration-200 ease-linear'/>-->
<!--        <p-->
<!--          class='mt-1.5 sm:text-sm text-xs group-hover:text-orange transition-all duration-200 ease-linear transform sm:scale-100 scale-90 uppercase'-->
<!--        >-->
<!--          My Cart-->
<!--        </p>-->
<!--      </a>-->
<!--      <a class='bottom-nav group flex flex-col items-center cursor-pointer' href='/wholesale'>-->
<!--        <img-->
<!--          src='@/assets/img/header/product.png'-->
<!--          class='sm:h-7 h-5 transform -rotate-90 transition-all duration-200 ease-linear'-->
<!--        />-->
<!--        <p-->
<!--          class='mt-1.5 sm:text-sm text-xs group-hover:text-orange transition-all duration-200 ease-linear transform sm:scale-100 scale-90 uppercase'-->
<!--        >-->
<!--          Products-->
<!--        </p>-->
<!--      </a>-->
<!--      <div class='bottom-nav group flex flex-col items-center cursor-pointer'>-->
<!--        <img src='@/assets/img/header/heart.png' class='sm:h-7 h-5 transition-all duration-200 ease-linear'/>-->
<!--        <p-->
<!--          class='mt-1.5 sm:text-sm text-xs group-hover:text-orange transition-all duration-200 ease-linear transform sm:scale-100 scale-90 uppercase'-->
<!--        >-->
<!--          Wishlist-->
<!--        </p>-->
<!--      </div>-->
<!--      <a-->
<!--        class='bottom-nav group flex flex-col items-center cursor-pointer' href='/track-order'-->
<!--        @click='openMobileSearch = !openMobileSearch'-->
<!--      >-->
<!--        <img src='@/assets/img/header/search.png' class='sm:h-7 h-5 transition-all duration-200 ease-linear'/>-->
<!--        <p-->
<!--          class='mt-1.5 sm:text-sm text-xs group-hover:text-orange transition-all duration-200 ease-linear transform sm:scale-100 scale-90 uppercase'-->
<!--        >-->
<!--          tracking-->
<!--        </p>-->
<!--      </a>-->
<!--    </div>-->

    <!-- Mobile search section -->
    <transition name='fade'>
      <div
        v-if='openMobileSearch'
        class='md:hidden block fixed top-0 left-0 h-auto w-full bg-white py-4 overflow-y-scroll scrollbar-none z-50'
      >
        <Container>
          <div class='relative flex items-center gap-3 pb-3'>
            <div
              :class="
                isSearching ? 'shadow-purple-outline' : 'shadow-gray-outline'
              "
              class='flex items-center rounded-full transition-all duration-300 ease-in-out w-full pr-4'
            >
              <input
                type='text'
                v-model='keyword'
                v-on:keyup.enter='onSearch'
                placeholder='Search designs and products'
                class='w-full bg-transparent outline-none py-2.5 px-4'
                @focus='isSearching = true'
                @blur='isSearching = false'
              />
              <img
                @click='onSearch'
                src='@/assets/img/header/search.png'
                alt='search'
                class='w-6 cursor-pointer'
              />
            </div>
            <!-- x icon -->
            <div
              class='flex justify-center items-center cursor-pointer  h-5 w-5 rounded-full flex-shrink-0'
              @click='openMobileSearch = !openMobileSearch'
            >
              <span
                class='h-0.5 w-5 bg-gray-400 transform -rotate-45 -mr-2.5'
              ></span>
              <span
                class='h-0.5 w-5 bg-gray-400 transform rotate-45 -ml-2.5'
              ></span>
            </div>
            <!-- Search Results -->
          </div>
        </Container>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  data: () => ({
    isSearching: false,
    openMobileSearch: false,
    keyword: '',
    // Search results
    regions: [
      {
        id: 1,
        name: 'US and Others',
        image: 'https://printerval.com/modules/localization/images/us.svg'
      },
      {
        id: 2,
        name: 'Canada',
        image: 'https://printerval.com/modules/localization/images/ca.svg'
      },
      {
        id: 3,
        name: 'Australia',
        image: 'https://printerval.com/modules/localization/images/au.svg'
      },
      {
        id: 4,
        name: 'United Kingdom',
        image: 'https://printerval.com/modules/localization/images/uk.svg'
      },
      {
        id: 5,
        name: 'Italiano',
        image: 'https://printerval.com/modules/localization/images/it.svg'
      }
    ],
    // For Mobile menus
    mobileMenu: false,
    mobileSubMenu: null,
    mobileInnerSubMenu: null
  }),
  computed: {
    menu() {
      if (this.$store.state.store.isHideCollection) {
        return []
      }
      const menus = []
      this.$store.state.store.menus.forEach(item => {
        if (item.name.toLowerCase() === 'shipping & delivery') {
          const m = {
            name: item.name,
            path: '/shipping-policy'
          }
          menus.push(m)
        } else if (item.name.toLowerCase() === 'privacy policy') {
          const m = {
            name: item.name,
            path: '/privacy-policy'
          }
          menus.push(m)
        } else if (item.name.toLowerCase() === 'refund & exchange') {
          const m = {
            name: item.name,
            path: '/return-policy'
          }
          menus.push(m)
        } else if (item.name.toLowerCase() === 'payment policy') {
          const m = {
            name: item.name,
            path: '/payment-policy'
          }
          menus.push(m)
        } else {
          const m = {
            name: item.name,
            path: `/wholesale?tags=${item.tags}`
          }
          menus.push(m)
        }
      })
      return menus
    }
  },

  methods: {
    onNavCheckout() {
      if (this.$device.isMobile && this.$store.state.store.isCustomPayment) {
        const productRequest = this.$store.getters['cart/getCarts']
        if (productRequest.length === 0) {
          return
        }
        this.$nuxt.$loading.start()
        this.$axios.$post('/products/cart-store/save', {
          'products': productRequest
        }).then(resp => {
          this.$nuxt.$loading.finish()
          if (resp && resp.id && resp.id.length > 0) {
            window.location.href = `https://${this.$store.state.store.customPaymentDomain}/init-checkout?id=${resp.id}&test_id=layout`
          }
        }).catch(() => {
          this.$nuxt.$loading.finish()
        })
      } else {
        this.$nuxt.$loading.finish()
        window.location.href = '/checkout'
      }
    },
    openSubMenu(index) {
      if (this.menu[index].subMenu) {
        this.mobileSubMenu = index
      }
    },
    openInnerSubMenu(index) {
      if (this.menu[this.mobileSubMenu].subMenu[index].subMenu) {
        this.mobileInnerSubMenu = index
      }
    },
    onSearch() {
      window.location.href = `/wholesale?keyword=${this.keyword}`
    }
  }
}
</script>

<style lang='scss' scoped>
.top-sale {
  font-family: arial;
}

.region {
  .region_list {
    display: none;
    animation: popdown 0.3s ease-in-out;
  }

  &:hover .region_list {
    display: block;
  }

  &:hover .arrow-icon {
    transition: all 0.3s ease-in-out;
    transform: rotate(-180deg);
  }
}

nav {
  ul {
    li {
      // Child List
      .child-list {
        display: none;
        animation: slideUp 0.5s forwards;

        ul {
          li {
            ul {
              display: none;
              animation: slideRight 0.5s forwards;
            }

            &:hover ul {
              display: block;
            }
          }
        }
      }

      &:hover .child-list {
        display: block;
      }
    }
  }
}

.search_box {
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 1px 3px #6f5d99;
}

.mobile-nav {
  width: 19rem;
}

// transition properties
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.search_results {
  animation: searchResults 0.2s ease-in-out;
}

.mobile_search_results {
  animation: mobileSearchResults 0.2s ease-in-out;
}

.bottom-nav {
  &:hover img {
    filter: invert(61%) sepia(48%) saturate(6410%) hue-rotate(1deg) brightness(103%) contrast(105%);
  }
}

@keyframes popdown {
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(-1rem);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes searchResults {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0.75rem);
  }
}

@keyframes mobileSearchResults {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translate(-50%, 1.5rem);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@keyframes slideRight {
  0% {
    opacity: 0;
    left: 90%;
  }
  100% {
    opacity: 1;
    left: 100%;
  }
}
</style>
