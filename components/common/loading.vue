<template>
  <div v-if="loading" class="loading-page">
    <img src="~/assets/img/loading.gif" />
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>
<style lang="scss" scoped>
.loading-page {
  z-index: 99999999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  text-align: center;
  padding-top: 200px;
  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: auto auto;
  }
}
</style>
