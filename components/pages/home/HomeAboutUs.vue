<template>
  <div class="p-5 border-b">
      <div class="ql-snow">
        <div class="ql-editor">
          <div v-html="content"></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "home_about_us",
  props: {
    content: String
  }
}
</script>

<style scoped>

</style>
