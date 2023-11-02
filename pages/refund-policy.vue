<template>
  <div>
    <main class='font-roboto'>
      <Container :padding="'px-4 2xl:px-10'" class='flex flex-col py-5'>
        <div>
          <div
          >
            <h1 class='text-center uppercase font-bold text-xl'>
              RETURN & REFUND
            </h1>
          </div>
          <div class='pt-10'>
            <section class='pb-10'>
              <div class="desc-html">
                <div v-if='isShowDefault'>
                  <ReturnRefundPolicyDefault :domain="domain"/>
                </div>
                <div v-else class="ql-snow" >
                  <div class="ql-editor">
                    <div v-html="content"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  </div>

</template>
<script>
import ReturnRefundPolicyDefault from "~/components/pages/terms/ReturnRefundPolicyDefault";

export default {
  head() {
    return {
      title: "Refund & Return Policy",
    }
  },
  components: {
    ReturnRefundPolicyDefault
  },
  async asyncData({$axios, $productApi, store, req, error}) {
    const host = req.headers.host
    try {
      const key = `${store.state.store.storeId}_REFUND_RETURN_POLICY`
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
.desc-html ul {
  @apply list-disc;
  margin-left: 30px;
}

.desc-html p {
  margin-bottom: 10px;
}
</style>

