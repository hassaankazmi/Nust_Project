<template>
  <div class="2xl:w-10/12 w-full mx-auto">
    <h5 class="text-gray-700 sm:text-2xl text-xl font-medium my-5">
      Trending Topics
    </h5>
    <div v-if="isLoaded" class="relative">
      <VueSlickCarousel ref="trendingTopicsSlider" v-bind="topicOptions">
        <div v-for="(topic, index) in trendingTopics" :key="index">
          <a :href='`/wholesale?tag=${topic}`'
            class="group w-max flex items-center bg-gray-100 sm:py-3 py-2.5 px-4 rounded-md sm:mx-1.5 mx-1"
          >
            <img
              src="https://printerval.com/images/trend.svg"
              alt="arrow"
              class="mr-2"
            />
            <span :href='`/wholesale?tag=${topic}`'
              class="text-dark-purple group-hover:text-orange font-medium sm:text-base text-sm cursor-pointer transition-all ease-in-out duration-300"
              >{{ topic }}</span
            >
          </a>
        </div>
      </VueSlickCarousel>
      <button
        class="absolute border md:flex hidden justify-center items-center top-1/2 right-2 transform -translate-y-1/2 h-10 w-10 shadow-md rounded-full bg-white"
        @click="$refs.trendingTopicsSlider.next()"
      >
        <div class="flex transform -rotate-90">
          <span class="h-px w-2.5 bg-black transform rotate-45 -mr-px"></span>
          <span class="h-px w-2.5 bg-black transform -rotate-45 -ml-0.5"></span>
        </div>
      </button>
      <button
        class="absolute border md:flex hidden justify-center items-center top-1/2 left-2 transform -translate-y-1/2 h-10 w-10 shadow-md rounded-full bg-white"
        @click="$refs.trendingTopicsSlider.prev()"
      >
        <div class="flex transform rotate-90">
          <span class="h-px w-2.5 bg-black transform rotate-45 -mr-px"></span>
          <span class="h-px w-2.5 bg-black transform -rotate-45 -ml-0.5"></span>
        </div>
      </button>
    </div>
    <div v-else class="grid grid-flow-col grid-rows-1 gap-3 overflow-x-scroll scrollbar-none">
      <div v-for="i in 15" :key="i" class="skeleton w-32 md:h-12 h-10 bg-gray-100 rounded"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    // Slider options
    topicOptions: {
      centerMode: true,
      arrows: false,
      variableWidth: true,
      swipe: true,
    },
    // page data
    isLoaded: false
  }),
  computed:{
    trendingTopics(){
      return this.$store.state.store.trendingKeywords
    }
  },
  mounted(){
    this.isLoaded = true
  }

}
</script>

<style lang="scss" scoped>
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
    background: linear-gradient(to right, #F3F4F6, rgb(250, 253, 255), #F3F4F6 );
    animation: gradient .9s infinite;

  }
}

@keyframes gradient {
  0%{
    transform: translateX(-20%)
  }
  100%{
    transform: translateX(330%)
  }
}
</style>
