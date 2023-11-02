<template>
  <div>
    <div class='tabs tabs-boxed mb-3'>
      <a
        class='tab'
        href="#"
        :class="{ 'tab-active': activeTab == 'Classic T-Shirt' }"
        @click="activeTab = 'Classic T-Shirt'"
      >Classic T-Shirt</a
      >
      <a
        class='tab'
        href="#"
        :class="{ 'tab-active': activeTab == 'Hoodie'  }"
        @click="activeTab = 'Hoodie'"
      >Hoodie</a
      >
      <a
        class='tab'
        href="#"
        :class="{ 'tab-active': activeTab == 'Longsleeve Shirt' }"
        @click="activeTab = 'Longsleeve Shirt'"
      >Longsleeve Shirt</a
      >
      <a
        href="#"
        class='tab'

        :class="{ 'tab-active': activeTab == 'Tank Top' }"
        @click="activeTab = 'Tank Top'"
      >Tank Top</a
      >
      <a
        class='tab'
        href="#"
        :class="{ 'tab-active': activeTab == 'Rug' }"
        @click="activeTab = 'Rug'"
      >Rug</a
      >
      <a
        class='tab'
        href="#"
        :class="{ 'tab-active': activeTab == 'Shoes' }"
        @click="activeTab = 'Shoes'"
      >Shoes</a
      >
      <a
        class='tab'
        href="#"
        :class="{ 'tab-active': activeTab == 'Hawaiian' }"
        @click="activeTab = 'Hawaiian'"
      >Hawaiian</a
      >
    </div>

    <div v-show="activeTab == 'Classic T-Shirt'" class='border rounded p-3'>
      <ul >
        <li>
          100% cotton (99/1 cotton/poly (Ash) & 90/10 cotton/poly (Sport
          Grey)
        </li>
        <li>Heavyweight classic unisex tee</li>
        <li>Taped neck and shoulders; Tearaway label</li>
        <li>Decoration type: Digital Print</li>
      </ul>
      <div>
        <p class='font-weight-bold'>1. Men's T-Shirts</p>
        <figure>
          <img
            v-lazy="'https://supimg.nyc3.digitaloceanspaces.com/m1.png'"
          />
        </figure>

        <p class='subtitle-1 font-weight-bold'>2 . Women's T-Shirt</p>
        <figure>
          <img
            v-lazy="'https://supimg.nyc3.digitaloceanspaces.com/w1.png'"
          />
        </figure>
        <p class='subtitle-1 font-weight-bold'>3 . Kids T-Shirt</p>
        <figure>
          <img
            v-lazy="'https://supimg.nyc3.digitaloceanspaces.com/k1.png'"
          />
        </figure>
      </div>
    </div>

    <div v-show="activeTab == 'Hoodie'" class='border rounded p-3'>
      <ul>
        <li>55/45 cotton/polyester</li>
        <li>Air jet yarn creates a smooth, low-pill surface</li>
        <li>Double needle stitching; Pouch pocket; Unisex sizing</li>
        <li>Care: Machine wash cold; Tumble dry low</li>
        <li>Decoration type: Digital Print</li>
      </ul>
      <div>
        <p class='font-weight-bold'>1 . Men's Hoodies</p>
        <figure>
          <img
            v-lazy="'https://supimg.nyc3.digitaloceanspaces.com/hm1.png'"
          />
        </figure>
        <p class='font-weight-bold'>2 . Women's Hoodies</p>
        <figure>
          <img
            v-lazy="'https://supimg.nyc3.digitaloceanspaces.com/hw1.png'"
          />
        </figure>
        <p class='font-weight-bold'>3 . Kids Hoodie</p>
        <figure>
          <img
            v-lazy="'https://supimg.nyc3.digitaloceanspaces.com/hk1.png'"
          />
        </figure>

      </div>
    </div>
    <div v-show="activeTab == 'Longsleeve Shirt'" class='border rounded p-3'>

      <ul>
        <li>55% cotton/45% polyester</li>
        <li>Air jet yarn for a softer feel and no pilling</li>
        <li>
          1×1 athletic rib cuffs and waistband with spandex; Double-needle
          stitching
        </li>
        <li>Care: Machine wash cold; Tumble dry low</li>
        <li>Decoration type: Digital Print</li>
      </ul>
      <p class='font-weight-bold'>1 . Men's Long Sleeves</p>
      <figure class='product-media'>
        <img
          v-lazy="'https://supimg.nyc3.digitaloceanspaces.com/lm1.png'"
        />
      </figure>
      <p class='font-weight-bold'>2 . Women's Longsleeve</p>
      <figure class='product-media'>
        <img
          v-lazy="'https://supimg.nyc3.digitaloceanspaces.com/lw1.png'"
        />
      </figure>
      <p class='font-weight-bold'>3. Kids Long Sleeves</p>
      <figure class='product-media'>
        <img
          v-lazy="'https://supimg.nyc3.digitaloceanspaces.com/lk1.png'"
        />
      </figure>

    </div>


    <div v-show="activeTab == 'Tank Top'" class='border rounded p-3'>
      <ul>
        <li>100% combed and ringspun cotton; 30 singles</li>
        <li>
          Dark Grey Heather is 52% combed and ringspun cotton, 48% polyester
        </li>
        <li>Unisex sizing; sideseamed</li>
        <li>Decoration type: DTG Print</li>
      </ul>
      <p class='font-weight-bold'>1 . Men Tank Top</p>
      <figure class='product-media'>
        <img
          v-lazy="'https://supimg.nyc3.digitaloceanspaces.com/mt1.png'"
        />
      </figure>
      <p class='font-weight-bold'>2 . Women's Tank Top</p>
      <figure class='product-media'>
        <img
          v-lazy="'https://supimg.nyc3.digitaloceanspaces.com/wt1.png'"
        />
      </figure>

    </div>
    <div v-show="activeTab == 'Rug'" class='border rounded p-3'>
      <ul>
        <li>Thickness: about 7 - 8mm</li>
        <li>Dustproof, anti-slip, flexible.</li>
        <li>
          Thermal transfer printing technology, high-quality colours and
          images, difficult to fade.
        </li>
        <li>No harmful</li>
        <li>
          Wear-resistant and durable, washing fastness of 3 or more, never
          fade
        </li>
      </ul>
      <figure class='product-media'>
        <img
          v-lazy="'https://wpspace.nyc3.digitaloceanspaces.com/assets/img/rug.jpeg'"
        />
      </figure>
      <figure class='product-media'>
        <img
          v-lazy="'https://wpspace.nyc3.digitaloceanspaces.com/assets/img/roundrug.jpeg'"
        />
      </figure>

    </div>
    <div v-show="activeTab == 'Shoes'" class='border rounded p-3'>
      <p>
        All of our Custom Shoes are custom-made-to-order and handcrafted to
        the highest quality standards.
      </p>
      <p>Product Features:</p>
      <ul>
        <li>
          Lightweight construction with breathable mesh-knit fabric provides
          a comfortable and flawless fit.
        </li>
        <li>Lace-up closure for a snug fit.</li>
        <li>
          Features a soft linen interior with arch support and removable
          insole pad.
        </li>
        <li>
          Finished with a high quality EVA out sole for traction and
          exceptional durability.
        </li>
      </ul>
      <figure class='product-media'>
        <img
          v-lazy="'https://wpspace.nyc3.digitaloceanspaces.com/assets/img/shoe.png'"
        />
      </figure>
    </div>

    <div v-show="activeTab == 'Hawaiian'" class='border rounded p-3'>
      <ul>
        <li class='bullet'>
              <span xss='removed'
              >Hawaiian shirt is one of the greatest pieces of clothes for the
                Summer. they’re comfy, practical, and effortlessly cool.</span
              >
        </li>
        <li class='bullet'>
              <span xss='removed'
              >100% woven polyester fabric, offers outstanding durability,
                insulation, and wrinkle resistance.</span
              >
        </li>
        <li class='bullet'>
              <span xss='removed'
              >Machine wash in cold with similar colors/no bleach/low iron.
                Breathable, durable, and easy to care for.</span
              >
        </li>
        <li class='bullet'><span xss='removed'>Moisture-wicking.</span></li>
        <li class='bullet'>
          <span xss='removed'>Full button down closure.</span>
        </li>
        <li class='bullet'>
              <span xss='removed'
              >Great for school uniforms, baseball team. Easy to customize.
                The color could be slightly different between on the screen and
                in practice.</span
              >
        </li>
      </ul>

      <strong
      ><span xss='removed'
      >+ Hawaiian Shirt Men's size guide</span
      ></strong
      >:<br />
      <figure class='product-media'>
        <img
          class='size-medium wp-image-183973'
          v-lazy="'https://wpspace.nyc3.digitaloceanspaces.com/assets/img/hawaii'"
          alt='menhw'
          width='560'
          height='400'
        />
      </figure>

      <br /><br />
      <strong
      ><span xss='removed'
      >+ Hawaiian Shirt Adult's shorts size guide</span
      ></strong
      >:<br />
      <figure class='product-media'>
        <img
          v-lazy="'https://wpspace.nyc3.digitaloceanspaces.com/assets/img/short'"
          alt=''
          width='560'
          height='400'
          class='alignnone size-medium wp-image-183980'
        />
      </figure>

      <br />
      <br />

      <div id='gtx-trans' xss='removed'>
        <div class='gtx-trans-icon'></div>
      </div>
      <ul>
        <li class='bullet'>
              <span xss='removed'
              >All items are subject to a handling period before they are
                dispatched.</span
              >
        </li>
        <li class='bullet'>
              <span xss='removed'
              >99% of orders leave the warehouse within 3-5 business days of
                payment.</span
              >
        </li>
        <li class='bullet'>
              <span xss='removed'
              >We will notify to you by email when your items have been
                shipped.</span
              >
        </li>
      </ul>

    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTab: 'Classic T-Shirt',
      isTabTshirt: true,
      isTabHoodie: false,
      isLongsleeveShirt: false,
      isTankTop: false,
      isShoes: false,
      isRug: false,
      isHawaiian: false
    }
  }
}
</script>
