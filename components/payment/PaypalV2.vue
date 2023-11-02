<template>
  <div id="paypal-button"></div>
</template>
<script>
export default {
  props: {
    products: {
      type: Array,
      default() {
        return [];
      },
    },
    shippingAddress: Object,
    discountCode: String,
    paypalClientId: String
  },
  data() {
    return {
      baseUrl: process.env.API_URL,
    };
  },
  mounted() {
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${this.paypalClientId}`;

    document.body.appendChild(script);
    script.addEventListener("load", () => this.setLoaded());
  },
  methods: {
    setLoaded() {
      window.paypal
        .Buttons({
          // fundingSource: paypal.FUNDING.PAYPAL,
          createOrder: this.onCreateOrder,
          onApprove: this.onApprove,
          onError: this.onError,
          style: {
            size: "responsive",
            shape: "rect",
            tagline: false,
            label: "pay",
            height: 55,
          },
        })
        .render("#paypal-button");
    },
    onCreateOrder(data, actions) {
      if (this.$store.getters["cart/getProductsCart"].length === 0) {
        this.$emit("onPaymentError", "You must choose at least a product");
        throw new Error("You must choose at least a product");
      }
      if (this.$store.getters["shipping/isValid"]) {
        return this.$axios
          .$post("/order/paypal-v2/create-payment", {
            products: this.products,
            billingAddress: this.shippingAddress,
            coupon: this.discountCode,
          })
          .then((resp) => {
            return resp.id;
          })
          .catch((error) => {
            this.$emit("onPaymentError", error);
            throw new Error("Something went wrong");
          });
      } else {
        this.$emit("onPaymentError", "Please enter your shipping address");
        throw new Error("Please enter your shipping address");
      }
    },
    onApprove(data, actions) {
      return this.$axios
        .$post("/order/paypal-v2/capture-payment", {
          ppOrderId: data.orderID,
        })
        .then((data) => {
          this.$emit("onPaymentSuccess", data);
        })
        .catch((error) => {
          this.$emit("onPaymentError", error);
        });
    },
    onError(error) {
      this.$emit("onPaymentError", error);
    },
  },
};
</script>
<style lang="scss">
@media only screen and (min-width: 300px) {
  .paypal-button.paypal-button-shape-rect {
    border-radius: 0px !important;
  }
}
@media only screen and (min-width: 200px) {
  .paypal-button.paypal-button-shape-rect {
    border-radius: 0px !important;
  }
}

@media only screen and (min-width: 150px) {
  .paypal-button.paypal-button-shape-rect {
    border-radius: 0px !important;
  }
}
@media only screen and (min-width: 150px) {
  .paypal-button.paypal-button-shape-rect {
    border-radius: 0px !important;
  }
}
@media only screen and (min-width: 75px) {
  .paypal-button.paypal-button-shape-rect {
    border-radius: 0px !important;
  }
}

.paypal-button:not(.paypal-button-card) {
  border-radius: 0 0px 0px 0 !important;
}
</style>
