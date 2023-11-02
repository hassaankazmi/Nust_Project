<template>
  <div>
    <ul class="list-decimal">
      <li><strong>What Are {{ $store.state.store.storeName }}'s Business Hours?</strong>
        <ol>
          <li>Hours: Mon - Fri: 9am - 5pm est. For inquiries please&nbsp;select Contact Us under &#39;Pages&#39; at the
            bottom of each page or send us an email.&nbsp;Someone will respond to you in 24-48 business hours.
          </li>
        </ol>
      </li>
      <li><strong>When will I receive my item?</strong>
        <ol>
          <li>All orders are processed within 3 - 5 business days. The estimated delivery time is 7-10 business days. When
            your order is processed and a tracking number is available, you will receive an email with tracking
            information.
          </li>
        </ol>
      </li>
      <li><strong>Where do you ship from?</strong>
        <ol>
          <li>All products are shipped from within the United States.</li>
        </ol>
      </li>
      <li><strong>Where do you ship to?</strong>
        <ol>
          <li>USA: Currently we only ship to the United States in 48 contiguous states and Washington, DC. We cannot
            ship to P.O. boxes or military bases or diplomatic locations.
          </li>
        </ol>
      </li>
      <li><strong>Do you ship internationally?</strong>
        <ol>
          <li>{{ $store.state.store.storeName }} does not ship internationally.</li>
        </ol>
      </li>
      <li><strong>I need to return/exchange an item?</strong>
        <ol>
          <li>{{ $store.state.store.storeName }} is not liable for any products damaged or lost during shipping. If you
            received your order damaged, please contact the shipment carrier or our support team directly to file a
            claim. Please save all packaging material and damaged goods before filing a claim.
          </li>
        </ol>
      </li>
      <li><strong>Can I cancel/change my order?</strong>
        <ol>
          <li>Yes. However, your order cannot be canceled or changed if it has already been processed and shipped.</li>
        </ol>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "faq-s",
  computed: {
    storeName() {
      return this.$store.state.store.storeName
    }
  }
}
</script>

<style scoped>

</style>
