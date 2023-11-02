<template>
  <div>
    <main class='font-roboto'>
      <Container :padding="'px-4 2xl:px-10'" class='flex flex-col py-5'>
        <div >
          <div
          >
            <h1 class='text-center font-bold text-2xl'>TERMS OF SERVICE</h1>
          </div>
          <div >
            <section >
              <div  class="desc-html">
                <div v-if='isShowDefault' >
                  <TermsOfServiceDefault/>
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
import TermsOfServiceDefault from "~/components/pages/terms/TermsOfServiceDefault";
export default {
  head() {
    return {
      title: "Terms of service",
    };
  },
  components:{
    TermsOfServiceDefault
  },
  async asyncData({ $productApi, store, error }) {
    try {
      const key = `${store.state.store.storeId}_TERM_SERVICE`
      const {data: pageResp} = await $productApi.get(`/v3/get-m-page-policy-by-store/${key}`);
      if (pageResp) {
        return {
          content: pageResp.content
        }
      }
    } catch (e) {
      return {
        content: ""
      }
    }
  },
  data() {
    return {
      content: ''
    }
  },
  computed: {
    isShowDefault() {
      return !(this.content && this.content.length > 0)
    }
  }
}
</script>
<style>
.desc-html ul {
  @apply list-disc;
  margin-left: 30px;
}

.desc-html p {
  margin-bottom: 10px;
}
</style>
