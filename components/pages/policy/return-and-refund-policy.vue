<template>
  <div>
    <p>We want you to be 100% satisfied with your purchase from &#39;<strong>{{$store.state.store.domain}}</strong>&#39;. If you are
      not satisfied with our product, you can choose a request to return your order to us for a full refund as long as
      the following conditions are met, conditions are&nbsp;</p>

    <ol class="list-decimal">
      <li class="my-3"><strong>How long do I have to return or change a product?&nbsp;</strong>

        <ul >
          <li>On the off chance that you&#39;d wish to return a thing to (<strong>{{$store.state.store.domain}}</strong>), kindly
            adhere to the guidelines underneath within&nbsp;<strong>30 days</strong>&nbsp;of conveyance.&nbsp;<strong>30
              days&nbsp;</strong>for returning.
          </li>
        </ul>
      </li>
      <li class="my-3"><strong>&nbsp;Are there any restrictions on returns or exchanges on products?</strong>
        <ul>
          <li>If you placed a special order, this must be returned back to our store location. (Note: Shipping cost is
            free of charge)
          </li>
          <li>Your order is returned in its original condition (product, packaging, miscellaneous items such as
            instruction sheets, etc. all in original condition and intact).
          </li>
          <li>Please get in touch with us if you&#39;d like to request a return. If the above conditions have been met,
            and your return is authorized, we will issue your refund (once we receive the returned order). Please allow
            up to 5-15 business days for the refund to be fully processed.
          </li>
          <li>If you are looking for an exchange for a faulty product please contact us via our&nbsp;<a
            href="/contact-us" rel="noopener noreferrer" target="_blank">Contact Us</a>&nbsp;page
            and we will organize an exchange for you!
          </li>
        </ul>
      </li>
      <li class="my-3"><strong>Do you accept returns from the United States country?</strong>
        <ul>
          <li>Yes, I accept returns&nbsp;from the United States country.</li>
        </ul>
      </li>
      <li class="my-3"><strong>How can customers return your products?</strong>
        <ul>
          <li><strong>By Mail</strong></li>
        </ul>
      </li>
      <li class="my-3"><strong>How will customers get the return label?</strong>
        <ul>
          <li>For defective products</li>
          <li>This happens when the product is incorrect, damaged by the carrier, or defective in another way
            <ul>
              <li><strong>In the box</strong></li>
            </ul>
          </li>
          <li>For customer remorse</li>
          <li>This happens when the customer purchased the wrong product, it doesn&#39;t fit, or they no longer want the
            item
            <ul>
              <li><strong>In the box</strong></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="my-3"><strong>Do you have&nbsp;the restocking fee?</strong>
        <ul>
          <li>No, don&#39;t have the restocking fee</li>
        </ul>
      </li>
      <li class="my-3"><strong>How much will customers pay for return shipping?</strong>
        <ul>
          <li>No cost for customers</li>
        </ul>
      </li>
      <li class="my-3"><strong>What if the product I received is damaged or useless?&nbsp;</strong>
        <ul>
          <li>If your product is damaged or defective from a&nbsp;(<strong>{{$store.state.store.domain}})</strong>&nbsp;shipment or
            in-store purchase, we will exchange or refund this product immediately. To return or exchange an order,
            please follow the steps below for an in-store purchase or (<strong>{{$store.state.store.domain}}</strong>) purchase. For
            any inquiry mail us&nbsp;
          </li>
          <li><strong>Email:&nbsp;{{$store.state.store.email}}</strong></li>
        </ul>
      </li>
      <li class="my-3"><strong>How do I return a product if I don&#39;t live near your store?&nbsp;</strong>
        <ul>
          <li>If you do not live near a (<strong>{{$store.state.store.domain}}</strong>) location, the items you purchased in-store can
            be returned through the mail. We recommend you to use the USPS or UPS to send your products back to our
            store by following the steps below:
          </li>
          <li>Include a copy of the original receipt. Note: If you do not have a receipt, a ({{$store.state.store.domain}}) gift card
            will be issued and mailed to you upon the return.
          </li>
          <li>Add a note explaining your request for an exchange of your products (color, size, etc.) or return</li>
          <li>Include your contact information, including phone number and email address, this is just in case the store
            needs to contact you,
          </li>
          <li>The product(s) can be shipped back in a box to the original store of purchase. For the stores shipping
            address, please refer to the&nbsp; <strong>{{$store.state.store.address}} </strong>
          </li>
          <li>Head to your local USPS or UPS store to ship the return, and keep a record of the return tracking number&nbsp;</li>
          <li>Please note:&nbsp;If you request a return or an exchange of your products and the store is out of
            inventory a&nbsp;{{$store.state.store.domain}}&nbsp;gift card will be issued and mailed back to your shipping address as
            soon as possible.
          </li>
        </ul>
      </li>
    </ol>

    <p><br/>
      <strong>Commitment of,&nbsp;</strong></p>

    <p><strong>{{$store.state.store.domain}}</strong><br/>
      <br/>
      Everything you buy at (<strong>{{$store.state.store.domain}}</strong>), on sale or otherwise, is guaranteed satisfactory or your
      money back. You don&rsquo;t ever take a chance
      at<strong>&nbsp;{{$store.state.store.domain}}</strong>&hellip;.&nbsp;<strong>Ever!</strong></p>


    <p class="my-3"><strong>Need any help contact us now&nbsp;</strong></p>
    <ul class="font-bold">
      <li>Address: {{ $store.state.store.address }}</li>
      <li>Phone: {{ $store.state.store.phone }}</li>
      <li>Email: {{ $store.state.store.email }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "return-and-refund-policy",
  computed: {
    storeName() {
      return this.$store.state.store.storeName
    }
  }
}
</script>

<style scoped>

</style>
