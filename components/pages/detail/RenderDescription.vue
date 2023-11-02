<template>
  <div>
    <div class="text-center p-3 font-bold border flex justify-between md:justify-center">
      <div class="text-center uppercase  text-sm md:text-base cursor-pointer hover:underline"
           @click="onChangeTab('description')" :class="tabActive('description')">description
      </div>
      <div class="text-center uppercase text-sm  mx-3 md:text-base md:mx-10 cursor-pointer hover:underline"
           @click="onChangeTab('shipping_policy')" :class="tabActive('shipping_policy')">shipping policy
      </div>
    </div>
    <div v-show="tabName === 'description'" v-lazy-container="{ selector: 'img' }" class="m-3 p-5 ql-snow">
      <div class="ql-editor">
        <div v-html="html"></div>
      </div>
    </div>
    <div v-show="tabName === 'shipping_policy'" class="m-3 p-5 ql-snow">
        <div v-if="shippingPolicy"  class="ql-editor">
          <div v-html="shippingPolicy"></div>
        </div>
        <ShippingPolicyDefault v-else/>
    </div>

  </div>
</template>

<script>
import ShippingPolicyDefault from "~/components/pages/terms/ShippingPolicyDefault";
export default {
  name: "RenderDescription",
  props: {
    title: String,
    content: String,
    shippingPolicy: String
  },
  components:{
    ShippingPolicyDefault
  },
  data() {
    return {
      tabName: "description",
      images: [{
        id: 1,
        src: "https://supimg.nyc3.digitaloceanspaces.com/d2aa4029f398f5d5fdd323a695db4475.png"
      }, {
        id: 2,
        src: "https://supimg.nyc3.digitaloceanspaces.com/822b9edfa393f5495b50d6faaf7207f8.png"
      }

      ]
    }
  },
  methods: {
    onChangeTab(name) {
      this.tabName = name
    },
    tabActive(name) {
      if (this.tabName === name) {
        return "text-blue-400 underline"
      } else {
        return "text-gray-600"
      }
    },
    createImage(image) {
      return `<div class="flex items-center justify-center"> <img class="w-1/2"  data-src="${image.src}" alt="${this.title}" title="${this.title}"/> </div>`
    }
  },
  computed: {
    html() {
      let data = this.content.replace(/TITLE/g, this.title);
      for (let i = 0; i < this.images.length; i++) {
        data = data.replace(new RegExp(`IMAGE${i+1}`, 'g'), this.createImage(this.images[i]));
      }
      data = data.replace(/IMAGE(\d+)/g, "");
      data = data.replace(/<img([^>]*)src=/gi, '<img$1data-src=');
      return data
    }
  }
}
</script>

<style>

</style>
