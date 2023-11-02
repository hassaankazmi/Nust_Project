<template>
  <div>
    <p><strong>DATE OF LAST UPDATE: FEBRUARY 10, 2023</strong></p>

    <p><strong><u>Domestic Shipping Policy</u></strong></p>

    <p><strong>Shipment processing time</strong><br/>
      All orders are processed within 3 business days.</p>

    <p><strong>Shipping rates and the delivery estimated</strong><br/>
      Shipping charges for your order will be calculated and displayed at checkout.</p>

    <p>&nbsp;<strong>Shipping method&nbsp;</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <strong>Estimated delivery time</strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; <strong>Shipment
        cost</strong>&nbsp;&nbsp; &nbsp;<br/>
      &nbsp;Standard Shipping&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 7-15 business
      days&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $5.99</p>

    <p><em>USA:&nbsp;Currently we only ship to the United States forty-eight contiguous states and Washington, DC. We do
      not ship to P.O. boxes, military bases, or diplomatic locations.</em></p>

    <p><strong>Shipment confirmation and order tracking</strong><br/>
      When your order is processed and a tracking number is available, you will receive an email with tracking
      information.</p>

    <p><strong>Customs, duties, and taxes</strong><br/>
      {{ $store.state.store.storeName }}&nbsp;is not responsible for any customs and taxes applied to your order. All
      fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.). This should
      be impossible since we do not ship internationally.</p>

    <p><strong>Damages</strong><br/>
      {{ $store.state.store.storeName }}&nbsp;is not liable for any products damaged or lost during shipping. If you
      received your order damaged, please contact the shipment carrier or our support team directly to file a claim.
      Please save all packaging material and damaged goods before filing a claim.</p>

    <p><strong>International Shipping Policy</strong><br/>
      {{ $store.state.store.storeName }}&nbsp;does not ship internationally.</p>

    <p>Still, have questions about shipping? Contact customer service at&nbsp;{{ $store.state.store.email }}.</p>

  </div>
</template>

<script>
export default {
  name: "ShippingPolicyDefault"
}
</script>

<style scoped>

</style>
