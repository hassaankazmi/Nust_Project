<template>
  <div :class="padding" class="container mx-auto">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    padding: {
      type: String,
      default: 'lg:px-10 px-4',
    },
  },
}
</script>
