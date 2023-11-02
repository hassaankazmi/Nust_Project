<template>
  <div>
    <main class='font-roboto'>
      <Container :padding="'px-4 2xl:px-10'" class='flex flex-col p-5'>
        <div >
          <div
          >
            <h1 class='text-center uppercase font-bold text-xl'>
              FAQ & HELP CENTER
            </h1>
          </div>
          <div class="mt-10 p-5">
            <div class="desc-html">
              <div v-if="isShowDefault" >
                <Faq/>
              </div>
              <div v-else class="ql-snow" >
                <div class="ql-editor">
                  <div v-html="content"></div>
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
import Faq from "~/components/pages/terms/faq";
export default {
  name: "faq",
  components:{
    Faq
  },
  head() {
    return {
      title: "FAQ",
    };
  },
  async asyncData({  $productApi, store, error }) {
    const key = `${store.state.store.storeId}_FAQ`
    try {
      const { data: pageResp} = await $productApi.get(`/v3/get-m-page-policy-by-store/${key}`);
      console.log('abc',pageResp)
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
  }
}
</script>

<style scoped>

</style>
