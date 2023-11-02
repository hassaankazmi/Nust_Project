<template>
  <div>
    <main class='font-roboto'>
      <Container :padding="'px-4 2xl:px-10'" class='flex flex-col py-5'>
        <h1 class="my-5 text-center w-full font-bold uppercase text-2xl text-dark-purple">Error 404</h1>
        <p class='text-center'>Ooopps.! That page can’t be found.</p>
        <p class='text-center'>It looks like nothing was found at this location.</p>
      </Container>
    </main>
  </div>
</template>

<script>
export default {
  props: ['error'],
  name: 'error',
  mounted() {
    try {
      this.$myLog.sendLog(this.error)
    } catch (e) {
    }
  }
}
</script>
