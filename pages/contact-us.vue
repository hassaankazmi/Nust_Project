<template>
  <div>
    <main class='font-roboto'>
      <Container :padding="'px-4 2xl:px-10'" class='flex flex-col py-5'>
        <div>
          <div
          >
            <h1 class='text-center uppercase font-bold text-xl'>
              Contact Us
            </h1>
          </div>
          <div class="mt-10">
            <div class="flex justify-center">
              <div class="w-4/5 md:w-2/3 my-8">
                <div class="alert alert-success shadow-lg" v-if="isSubmit">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                         viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Thank you for taking the time to contact us. Your request has been submitted to our customer service team and we will respond to you as quickly as possible.</span>
                  </div>
                </div>
                <p class="font-bold my-3">We would love to hear from you. Please email {{ $store.state.store.email }}. If
                  you&rsquo;d like to reach us by phone, the best way is to send us an email requesting a call. Please
                  include
                  your order number if you have one, and any questions you have.

                <p class="font-bold" v-if="$store.state.store.phone">Phone: {{ $store.state.store.phone }}</p>
                <p class="font-bold">Business Email: {{ $store.state.store.email }}</p>
                <p class="font-bold">Address: {{ $store.state.store.address }}</p>


                <div class="flex flex-col mt-5">
                  <p class="font-bold">FULL NAME</p>
                  <input v-model="form.name" type="text" placeholder="Name"
                         class="input input-bordered input-primary w-full  my-3"/>
                  <p class="font-bold">EMAIL*</p>
                  <input v-validate="'required|email'" v-model="form.email" name="email" type="text"
                         placeholder="Email*"
                         class="input input-bordered input-primary w-full  my-3"/>
                  <span class="text-xs text-red-600">{{
                      errors.first('email')
                    }}</span>
                  <p class="font-bold">CONTENT*</p>
                  <textarea v-validate="'required'" name="content" v-model="form.content"
                            class="textarea textarea-bordered h-32 my-3" placeholder="Message*"></textarea>
                  <span class="text-xs text-red-600">{{
                      errors.first('content')
                    }}</span>
                  <button class="btn bg-dark-purple my-3" @click="onSubmit">SUBMIT</button>
                </div>
                <!--        ket thu noi dung chinh sua-->
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  </div>


</template>

<script>
export default {
  name: "contact-us",
  head() {
    return {
      title: "Contact Us",
    };
  },
  data() {
    return {
      isSubmit: false,
      form: {
        name: "",
        email: "",
        phone: "",
        content: ""
      },

    }
  },
  methods: {
    onSubmit() {
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.$nuxt.$loading.start()
          this.$axios.$post('/support/info/create-ticket', {
            name: this.form.name,
            email: this.form.email,
            phone: this.form.phone,
            content: this.form.content,
          }).then(resp => {
            this.$nuxt.$loading.finish()
            this.isSubmit = true
          }).catch(() => {
            this.$nuxt.$loading.finish()
          })
        }
      })

    }
  }
}
</script>

<style scoped>

</style>
