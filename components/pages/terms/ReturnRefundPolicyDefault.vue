<template>
 <div>
   <p><strong>DATE OF LAST UPDATE:&nbsp;February 10, 2023</strong></p>

   <p><strong>Returns</strong></p>

   <p>If you are unsatisfied with your product for any reason you will have 30 days from the date of delivery to return the product and request a refund. You may return any Product (as defined below) purchased on {{domain}}&nbsp; in accordance with the terms below:</p>

   <p>A return authorization must be requested within 30 days of your date of delivery. You must contact us at {{$store.state.store.email}} to request and receive an RMA.</p>

   <p>The return authorization number must be included along with your returned product.&nbsp;</p>

   <p>Once an RMA is received please return the item and email us back with the RMA and the tracking# so we can track your return.</p>

   <p>You must return the Product to the address provided to receive a refund at your cost within 30 days of receipt of RMA.</p>

   <p>Returned Product(s) must be in good physical condition (not physically broken or damaged). All accessories originally included with your purchase must be included with your return.</p>

   <p><strong>Additional terms and conditions:</strong></p>

   <p>Shipping and handling charges, gift wrap fees, and taxes paid (such as state, customs, or VAT) are not refundable.</p>

   <p>You are responsible for and must prepay all shipping charges and you assume the risk of loss or damage to the returned Product(s) while in transit back to {{domain}}.</p>

   <p>If you return Product to {{$store.state.store.storeName}}&nbsp;(a) without a return authorization from {{$store.state.store.storeName}} or (b) without all parts and accessories originally included with your purchase, {{$store.state.store.storeName}} retains the right to either refuse acceptance of such return or charge you a restocking fee of 30% of the original price of the Product(s) or the retail value of the missing parts and accessories, whichever is higher.</p>

   <p>If the product is inspected and determined to be in good physical condition, {{$store.state.store.storeName}} retains the right to charge you a 30% restocking fee. This fee is to cover the cost of labor and repackaging a product that is found to be in good condition.</p>

   <p><strong>Non-returnable items:</strong></p>

   <ul>
     <li>Gift cards&nbsp;</li>
     <li>Downloadable software products&nbsp;</li>
     <li>Some health and personal care items</li>
     <li>To complete your return, we require a receipt or proof of purchase.</li>
     <li>Please do not send your purchase back to the manufacturer.</li>
     <li>There are certain situations where only partial refunds are granted (if applicable)</li>
     <li>Book with obvious signs of use&nbsp;</li>
     <li>CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened&nbsp;</li>
     <li>Any item not in its original condition is damaged or missing parts for reasons not due to our error&nbsp;</li>
     <li>Any item that is returned more than 30 days after delivery</li>
   </ul>

   <p>&nbsp;</p>

   <p><strong>Refunds (if applicable)</strong></p>

   <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>

   <p>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within 10 business days.</p>

   <p>Late or missing refunds (if applicable)</p>

   <p>If you haven&rsquo;t received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted.&nbsp;</p>

   <p>Next contact your bank. There is often some processing time before a refund is posted. If you&rsquo;ve done all of this and you still have not received your refund yet, please contact us at {{$store.state.store.email}}.</p>

   <p>Sale items (if applicable)</p>

   <p>Only regular priced items may be refunded, unfortunately sale items cannot be refunded.</p>

   <p><strong>Exchanges (if applicable)</strong></p>

   <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at {{$store.state.store.email}}&nbsp;and we will provide you further instructions on where to return the item for an exchange. Please note that we cannot accept exchanges beyond 30 days from the date of delivery.</p>

   <p><strong>Gifts</strong></p>

   <p>If the item was marked as a gift when purchased and shipped directly to you, you&rsquo;ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.</p>

   <p>If the item wasn&rsquo;t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.</p>

   <p>Still have questions about your return? Contact customer service at {{$store.state.store.email}}.</p>

 </div>
</template>

<script>
export default {
  name: "ReturnRefundPolicyDefault",
  props:{
    domain: String
  }
}
</script>

<style scoped>

</style>
