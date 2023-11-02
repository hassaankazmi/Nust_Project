<template>
  <div>
    <main class='font-roboto'>
      <Container :padding="'px-4 2xl:px-10'" class='flex flex-col py-5'>
        <div>
          <div
          >
            <h1 class='text-xl font-bold text-center'>PRIVACY POLICY</h1>
          </div>
          <div class='mt-10'>
            <section class='pb-10'>
              <div class="desc-html">
                <div v-if='isShowDefault'>
                  <PrivacyPolicyDefault :domain="domain"/>
                </div>
                <div v-else class="ql-snow" >
                  <div class="ql-editor">
                    <div v-html="content"></div>
                  </div>
                </div>
              </div>
              <p class="mt-10">{{$store.state.store.storeName}}</p>
              <p class="my-3">Re: Privacy Compliance Officer</p>
              <p>{{$store.state.store.address}}</p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  </div>

</template>
<script>
import PrivacyPolicyDefault from "~/components/pages/terms/PrivacyPolicyDefault";
export default {
  head() {
    return {
      title: "Privacy Policy",
    };
  },
  components:{
    PrivacyPolicyDefault
  },
  async asyncData({ $productApi, store, req, error }) {
    const host = req.headers.host
    try {
      const key = `${store.state.store.storeId}_PRIVACY_POLICY`
      const {data: pageResp} = await $productApi.get(`/v3/get-m-page-policy-by-store/${key}`);
      if (pageResp) {
        return {
          content: pageResp.content,
          domain: host
        }
      }
    } catch (e) {
      return {
        content: null,
        domain: host
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
.desc-html  ul{
  @apply list-disc;
  margin-left: 30px;
}
.desc-html p {
  margin-bottom: 10px;
}
</style>
