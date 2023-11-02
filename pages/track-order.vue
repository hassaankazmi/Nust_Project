<template>
  <div>
    <main class='font-roboto'>
      <Container :padding="'px-4 2xl:px-10'">
        <div  class='my-5'>
          <h1 class='text-center uppercase font-bold'>
            track my order
          </h1>
          <div >
            <section class='pb-10'>
              <div class=''>
                <p class='text-center' v-if='headingContent.length>0'>
                  {{ headingContent }}
                </p>
                <p class='text-center' v-else>
                  Looking for how to track your order? When your order is shipped, you
                  will receive a Shipping Confirmation email from
                  {{ $store.state.store.email }}
                  with your tracking number in it.
                </p>
                  <div class='input-group flex justify-center my-5'>
                    <input
                      class="input w-full"
                      placeholder='Order number here...'
                      style='width: 350px'
                      v-model='orderId'
                      required
                    />
                    <button
                      class="btn bg-dark-purple"
                      @click='onFind'
                    >
                      <i class='d-icon-search'></i> Find
                    </button>
                  </div>


                <div class="overflow-x-auto">
                  <table  v-if='isFind' class="table w-full">
                    <!-- head -->
                    <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Link</th>
                    </tr>
                    </thead>
                    <tbody>
                    <!-- row 1 -->
                    <tr>
                      <th></th>
                      <td>Tracking Link</td>
                      <td>
                        <a
                          v-if='trackingLink && trackingLink.length > 0'
                          :href='trackingLink'
                        >
                          {{ trackingLink }}
                        </a>
                        <span v-else
                        >Order is in production. Please contact us:
                {{ $store.state.store.email }}</span
                        >
                      </td>

                    </tr>
                    </tbody>
                  </table>
                </div>
                <p class='text-center mt-5'>
                  Can't find your email? Send us a quick note at
                  {{ $store.state.store.email }}, and we will help you with that.
                </p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  </div>

</template>
<script>
export default {
  head() {
    return {
      title: "Track Orders",
    };
  },
  data() {
    return {
      orderId: '',
      trackingLink: '',
      trackingId: '',
      isFind: false,
      headingContent: ''
    }
  },
  methods: {
    onFind() {
      this.$nuxt.$loading.start()
      if (process.env.ONLY_SHIRT_SYS === '0') {
        this.$axios
          .$post('/store/order/get-tracking-link', {
            orderId: this.orderId
          })
          .then((resp) => {
            this.isFind = true
            this.trackingLink = resp.trackingLink
            this.trackingId = resp.trackingId
          })
          .catch(() => {
            this.trackingLink = null
            this.trackingId = null
            this.isFind = true
          })
      } else {
        this.$axios.get('https://supover.com/api/tracking', {
          params: {
            id: this.orderId
          }
        }).then(({ data }) => {
          this.isFind = true
          this.trackingLink = data.tracking
          this.$nuxt.$loading.finish()
        }).catch(() => {
          this.isFind = true
          this.trackingLink = null
          this.$nuxt.$loading.finish()
        })
      }
    },
    onLoadConfigTracking() {
      this.$axios
        .$get(`/store/tracking/get-config/${this.$store.state.store.id}`).then((resp) => {
        if (resp.data.hTrackingPage) {
          this.headingContent = resp.data.hTrackingPage
        }
        this.$nuxt.$loading.finish()
      }).catch(() => {
        this.$nuxt.$loading.finish()
      })
    }
  },
  mounted() {
    this.onLoadConfigTracking()
  }
}
</script>
