<template>
  <div>
    <div v-if="isTrustedPayment">
      <iframe ref="iframeStripe" :src="trustPaymentLink" :height="height" frameBorder="0" style="width: 100%"></iframe>
    </div>
    <div v-else>
      <client-only>
        <stripe-element-card
          ref="elementRef"
          :pk="stripePublicKey"
          :hide-postal-code="true"
          @error="onErrorCredit"
          @loading="isLoadingStripe = $event"
          class="border rounded"
        />
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: "StripeV2",
  props: {
    trustDomain: String,
    stripePublicKey: String,
    shippingAddress: Object,
    discountCode: String,
    isTrustedPayment: Boolean,
    products: {
      type: Array,
      default() {
        return [];
      }
    }

  },
  data() {
    return {
      height: 70,
      isLoadingStripe: false
    }
  },
  computed: {
    trustPaymentLink() {
      if(this.trustDomain && this.trustDomain.includes("localhost")){
        return `http://${this.trustDomain}/checkout?layout=1`
      }
      return `https://${this.trustDomain}/checkout?layout=1`
    }
  },
  methods: {
    receiveMessageFromIframe(event) {
      if ((typeof event.data === 'object') && event.data.name === 'createPaymentMethodSuccess') {
        const paymentMethodId = event.data.value.paymentMethodId
        if (paymentMethodId) {
          this.createPaymentByMethodId(paymentMethodId)
        } else {
          this.onFailure('CardPaymentMethodIdError')
        }
      }
      if ((typeof event.data === 'object') && event.data.name === 'createPaymentMethodError') {
        this.onFailure(event.data.value)
      }
      if ((typeof event.data === 'object') && event.data.name === 'sendPaymentIntent') {
        const paymentIntentId = event.data.value.paymentIntentId;
        this.onConfirm3DSecure(paymentIntentId)
      }
    },
    createPaymentByMethodId(stripePaymentId) {
      this.$nuxt.$loading.start()
      this.$axios
        .$post('/order/stripe/purchase', {
          products: this.products,
          billingAddress: this.shippingAddress,
          coupon: this.discountCode,
          paymentMethodId: stripePaymentId,
          trustDomain: this.trustDomain
        })
        .then((resp) => {
          if (resp.requiresAction) {
            this.$nuxt.$loading.finish()
            if (this.isTrustedPayment) {
              const clientSecret = resp.clientSecret
              this.$refs.iframeStripe.contentWindow.postMessage({
                name: 'stripeV2Require3DSecure',
                value: {
                  clientSecret
                }
              })
              this.height = 500
            } else {
              this.onRequire3DSecure(resp.clientSecret)
            }

          } else {
            this.onSuccess(resp)
          }

        }).catch((e) => {
        this.onFailure(e)
      })
    },
    onSuccess(resp) {
      this.height = 70
      this.$emit("onPaymentSuccess", resp);
    },
    onFailure(error) {
      this.$emit("onPaymentError", error);
      this.height = 70
    },
    onErrorCredit(error) {
      this.$toast.error(error.message)
      this.$nuxt.$loading.finish()
    },
    onConfirm3DSecure(paymentIntentId){
      this.height = 70
      this.$nuxt.$loading.start()
      this.$axios
        .$post('/order/stripe/3d-secure-confirm', {
          paymentIntentId,
        })
        .then((resp) => {
          this.onSuccess(resp)
        })
        .catch((e) => {
          this.onFailure(e)
        })
    },
    onRequire3DSecure(clientSecret) {
      const stripe = this.$refs.elementRef.stripe
      stripe
        .handleCardAction(clientSecret)
        .then(({paymentIntent}) => {
          if (paymentIntent) {
            const paymentIntentId = paymentIntent.id;
            this.onConfirm3DSecure(paymentIntentId)
          } else {
            this.onFailure('Require3DSecureError')
          }
        })
        .catch((e) => {
          this.onFailure(e)
        })
    },
    onPayStripe() {
      this.$nuxt.$loading.start()
      const stripe = this.$refs.elementRef.stripe
      const card = this.$refs.elementRef.element
      stripe
        .createPaymentMethod({
          type: 'card',
          card,
          billing_details: {
            email: this.shippingAddress.email,
          },
        })
        .then((resp) => {
            this.createPaymentByMethodId(resp.paymentMethod.id)
        })
        .catch((e) => {
          this.onFailure(e)
        })
    },
    onPayIframeStripe() {
      this.$refs.iframeStripe.contentWindow.postMessage({
        name: 'stripeV2SubmitPayment',
        value: {
          billing_details: {
            name: this.shippingAddress.fullName,
            email: this.shippingAddress.email,
            address: {
              city: this.shippingAddress.city,
              country: this.shippingAddress.country.code,
              line1: this.shippingAddress.address,
              line2: this.shippingAddress.apartment,
              postal_code: this.shippingAddress.zipCode,
              state: this.shippingAddress.region,
            },
            phone: this.shippingAddress.phoneNumber,
          }
        }
      }, '*');
    },
    onSubmitStripe() {
      console.log('isTrustPayment', this.isTrustedPayment)
      if (this.isTrustedPayment) {
        this.onPayIframeStripe()
      } else {
        this.onPayStripe()
      }
    },
    sendLogPaymentError(){
    }
  },
  beforeDestroy() {
    window.removeEventListener('message', this.receiveMessageFromIframe)
  },
  mounted() {
    console.log('isTrustPayment', this.isTrustedPayment)
    window.addEventListener('message', this.receiveMessageFromIframe);
    this.sendLogPaymentError()
  }
}
</script>

<style scoped>

</style>
