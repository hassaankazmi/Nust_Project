<template>
  <div>
    <p>By placing an order, you agree to comply with and be bound by these terms.&nbsp;<strong>Billing Terms and Conditions</strong>&nbsp;may be revised by<strong>&nbsp;{{$store.state.store.domain}}&nbsp;</strong>at any time.</p>

    <p><strong>{{$store.state.store.domain}}&nbsp;</strong>provides Guaranteed safe and secure payment checkout via:</p>

    <p><strong>Visa, MasterCard, Dinners Club, Discover&nbsp;</strong>and<strong>&nbsp;American Express</strong>&nbsp;credit cards and&nbsp;<strong>Shop pay, Google Pay, Apple Pay</strong>&nbsp;and&nbsp;<strong>Meta Pay</strong>&nbsp;payment methods.&nbsp;</p>

    <ul>
      <li>Prices are quoted in&nbsp;<strong>US Doller&nbsp;(USD),</strong>&nbsp;and you must pay in USD through PayPal &amp; Stripe</li>
      <li>Reserves the absolute right to change any product&rsquo;s price without notice.</li>
      <li>Product&rsquo;s price that is displayed throughout the store is genuine and will appear as so on&nbsp;<strong>checkout.</strong></li>
      <li>Shipping rate that is displayed on our shipping information site is&nbsp;<strong>genuine and will appear as so on checkout.</strong></li>
      <li>You will be charged the exact amount of money that is displayed in order on&nbsp;<strong>checkout method</strong>.</li>
      <li>You will not be charged for any&nbsp;<strong>sum that is outside of the order.</strong></li>
      <li>You will not be charged for any orders that cannot be fulfilled and where appropriate<strong>&nbsp;{{$store.state.store.domain}}&nbsp;</strong>store will&nbsp;<strong>refund</strong>&nbsp;to your account any sum deducted by<strong>&nbsp;{{$store.state.store.domain}}</strong><strong>&nbsp;</strong>Store.</li>
      <li>Payment is due from the moment the order is accepted. After you have submitted your order,<strong>&nbsp;{{$store.state.store.domain}}&nbsp;</strong>store may take and shall be entitled to receive such payment as is due in&nbsp;<strong>respect of the order.</strong></li>
      <li>Reserves the absolute right to accept or refuse any payment made in any form.</li>
      <li>Does not retain any details of your&nbsp;<strong>PayPal account</strong>, credit cards or debit cards.</li>
    </ul>

    <p><strong>Agreement</strong></p>

    <p>We reserve the right to only accept orders from those over&nbsp;<strong>18 years of age</strong>&nbsp;who have full legal capacity to order from the<strong>&nbsp;{{$store.state.store.domain}}&nbsp;</strong>online store. If you disagree with all the &quot;<strong>Terms and Conditions&quot;</strong>&nbsp;or any part of them, please don&rsquo;t&nbsp;<strong>access or use this website.</strong></p>

    <p>All orders are subject to availability, and all sales are limited in terms of time and stock. Due to the nature of our online store, we may have to wait to receive&nbsp;<strong>products from our suppliers</strong>. In such a case, orders may sometimes take longer. However, we always do our best to dispatch your order within the indicated delivery times. If an ordered item is unavailable,&nbsp;<strong>we will inform you as soon as is practically possible.</strong></p>

    <p><strong>Privacy commitment</strong></p>

    <p>In order to make purchases through this website, you are required to provide us with your personal details that include your&nbsp;<strong>name, e-mail address, phone number, and some other information</strong>. Besides, when ordering the items, you will also be required to provide valid and&nbsp;<strong>correct payment details</strong>. All customers are responsible for the accuracy of the given information<strong>&nbsp;{{$store.state.store.domain}}&nbsp;</strong>respects your&nbsp;<strong>privacy</strong>&nbsp;and is committed to protecting your personal and payment details. Any information provided by our customers is held in the&nbsp;<strong>strictest confidence.</strong></p>

    <p><strong>Secure Sockets Layer (128 Bit SSL Security)</strong></p>

    <p><strong>{{$store.state.store.domain}}&nbsp;</strong>uses&nbsp;<strong>Secure Sockets Layer (SSL)</strong>&nbsp;technology to provide you with the safest, most secure shopping experience possible.&nbsp;<strong>SSL</strong>&nbsp;technology enables encryption&nbsp;<strong>(scrambling)</strong>&nbsp;of sensitive information, including&nbsp;<strong>passwords and credit card numbers</strong>, during your&nbsp;<strong>online transactions</strong>. All of the forms on our site are secured with&nbsp;<strong>SSL technology,</strong>&nbsp;so your personal information stays safe and out of&nbsp;<strong>malicious hands.</strong></p>

    <p><strong>PCI Compliant</strong></p>

    <p>The<strong>&nbsp;Payment Card Industry Data Security Standard (PCI DSS)</strong>&nbsp;is an information security standard for organizations that handle<strong>&nbsp;credit cards and debit cards information</strong>. Defined by the&nbsp;<strong>Payment Card Industry Security Standards Council</strong>, the standard was created to increase controls around credit card data to reduce&nbsp;<strong>credit card fraud via</strong>&nbsp;its exposure.</p>

    <p><strong>Is&nbsp;beyondmarts.com&nbsp;PCI Compliant?</strong></p>

    <p>Yes,&nbsp;<strong>{{$store.state.store.domain}}</strong>&nbsp;is certified&nbsp;<strong>Level 1 PCI DSS compliant.</strong></p>

    <p>We are very serious about your online security and have invested significant time and money to ce<strong>rtify our solution PCI compliant</strong>. From annual on-site assessments validating compliance to continuous&nbsp;<strong>risk management</strong>, we work really hard to ensure our platform is<strong>&nbsp;secure.</strong></p>

    <p><strong>Your Payment Information</strong></p>

    <p>Your&nbsp;<strong>credit card number or PayPal account is not accessible to us</strong>. When your purchase is completed, we are only able to see your&nbsp;<strong>billing information, shipping information, order details</strong>&nbsp;and the last&nbsp;<strong>4 digits of your credit card.</strong></p>

    <p><a href="/privacy-policy"><strong>Privacy Policy</strong></a></p>

    <p><strong>{{$store.state.store.domain}}&nbsp;</strong>doesn&rsquo;t like it when someone gives away our personal information and neither do you! That&rsquo;s why we don&rsquo;t rent, sell or share your personal information with anyone. Our&nbsp;<a href="/privacy-policy"><strong>Privacy Policy</strong></a>&nbsp;said details how your&nbsp;<strong>personal information is collected</strong>&nbsp;and how your personal information&nbsp;<strong>may be used.</strong></p>

    <p><strong>For any inquiry go to our &nbsp;<a href="/privacy-policy">Privacy Policy</a>&nbsp;page</strong></p>

    <p class="my-3"><strong>Get 24/7 support&nbsp;</strong></p>

    <ul class="font-bold">
      <li>Address: {{ $store.state.store.address }}</li>
      <li>Phone: {{ $store.state.store.phone }}</li>
      <li>Email: {{ $store.state.store.email }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "billing-terms-and-conditions",
  computed:{
    storeName(){
      return this.$store.state.store.storeName
    }
  }
}
</script>

<style scoped>

</style>
