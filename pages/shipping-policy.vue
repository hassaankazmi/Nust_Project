<template>
  <div>
    <main class='font-roboto'>
      <Container :padding="'px-4 2xl:px-10'" class='flex flex-col py-5'>
        <div >
          <div
          >
            <h1 class='text-center uppercase font-bold text-xl'>
              Shipping & Delivery
            </h1>
          </div>
          <div class="mt-10">
            <section class="pb-10">
              <div class="desc-html">
                <div v-if="isShowDefault" >
                  <ShippingPolicyDefault/>
                </div>
                <div v-else class="ql-snow" >
                  <div class="ql-editor">
                    <div v-html="content"></div>
                  </div>
                </div>
              </div>
              <p class="mt-10">{{$store.state.store.storeName}}</p>
              <p class="my-3">Re: Customer Support</p>
              <p>{{$store.state.store.address}}</p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  </div>

</template>
<script>
import ShippingPolicyDefault from "~/components/pages/terms/ShippingPolicyDefault";
export default {
  head() {
    return {
      title: "Shipping Policy",
    };
  },
  components:{
    ShippingPolicyDefault
  },
  async asyncData({ $axios, $productApi, store, error }) {
    const key = `${store.state.store.storeId}_SHIPPING_POLICY`
    try {
      const { data: pageResp} = await $productApi.get(`/v3/get-m-page-policy-by-store/${key}`);
      if (pageResp) {
        return {
          content: pageResp.content,
        };
      }
    } catch (e) {
      return {
        content: null
      };
    }
  },
  data() {
    return {
      content: "",
    };
  },
  computed: {
    isShowDefault() {
      return !(this.content && this.content.length > 0);
    },
  },
};
</script>

<style>
.desc-html  ul{
  @apply list-disc;
  margin-left: 30px;
}
.desc-html p {
  margin-bottom: 10px;
}
</style>
