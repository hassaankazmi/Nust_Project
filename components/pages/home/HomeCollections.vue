<template>
  <div>
    <h5 class="text-gray-700 sm:text-2xl text-xl font-medium mt-5 mb-2">
      Collections
    </h5>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="(board, idx) in 8" :key="idx">
          <div class="relative" >
            <img class="object-fill h-48 w-96 rounded border-2 border-gray-100 shadow-sm" src="https://placeimg.com/230/192/people"/>
            <div class="absolute inset-0 flex items-center justify-center">
                <p class="font-bold cursor-pointer text-xl text-white hover:underline">Cat Food</p>
            </div>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "HomeCollections",
  data: () => ({
    isLoaded: false,
    boards: [
      {
        'imageUrl': "https://supimg.us-east-1.linodeobjects.com/s/files/1/0093/0889/7316/products/1_785d4c62-8a2d-4918-8391-6f5acdf9d9d5.jpg",
        'name': "Cat Food",
        'alias': "/daa"
      }
    ]
  }),
}
</script>

<style scoped>

</style>
