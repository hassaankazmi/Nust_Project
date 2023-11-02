<template>
  <div>
    <client-only>
      <stripe-element-card
        v-if="stripePublicKey != ''"
        ref="elStripeTrustRef"
        :pk="stripePublicKey"
        :hide-postal-code="true"
        @error="onErrorCredit"
        @loading="isLoadingStripe = $event"
        class="border rounded border-green-600"
      />
    </client-only>
  </div>
</template>

<script>
export default {
  name: "TrustStripe",
  props: {
    stripePublicKey: String
  },
  data() {
    return {
      isLoadingStripe: false
    };
  },
  methods: {
    onPostMessageError(data){
      window.parent.postMessage({name: 'createPaymentMethodError', value: data}, '*');
    },
    onErrorCredit() {
      this.onPostMessageError('StripeTrustCardErrorError')
    },
    onRequire3DSecure(clientSecret){
      const stripe = this.$refs.elStripeTrustRef.stripe
      stripe
        .handleCardAction(clientSecret)
        .then(({paymentIntent}) => {
          if (paymentIntent) {
            window.parent.postMessage({
              name: 'sendPaymentIntent', value: {
                paymentIntentId: paymentIntent.id
              }
            }, '*');
          } else {
            this.onPostMessageError('StripeTrustRequire3DSecureError');
          }
        })
        .catch((e) => {
          this.onPostMessageError(e);
        })
    },
    submitPayment(data) {
      const stripe = this.$refs.elStripeTrustRef.stripe
      const card = this.$refs.elStripeTrustRef.element
      stripe
        .createPaymentMethod({
          type: 'card',
          card,
          billing_details: data.value.billing_details,
        }).then((resp) => {
        window.parent.postMessage({
          name: 'createPaymentMethodSuccess', value: {
            paymentMethodId: resp.paymentMethod.id
          }
        }, '*');
      }).catch((e) => {
        this.onPostMessageError(e)
      })
    },
    receiveMessage(event) {
      if (event.data.name === 'stripeV2SubmitPayment') {
        this.submitPayment(event.data);
      }
      if (event.data.name === 'stripeV2Require3DSecure') {
        const  clientSecret = event.data.value.clientSecret
        this.onRequire3DSecure(clientSecret)
      }
    }
  },
  mounted() {
    window.addEventListener('message', this.receiveMessage, false);
  }
}
</script>
