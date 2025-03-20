<template>
  <section
    class="z-[1] mx-auto mb-6 mt-[152px] w-[320px] min-w-[320px] md:mb-42 md:mt-[170px] md:w-[644px] lg:absolute lg:ml-100 lg:mt-[200px] lg:w-[440px]"
  >
    <div>{{ content_id }}</div>
  </section>
</template>
<script lang="ts" setup>
defineProps({
  content_id: {
    type: String,
    required: true,
  },
})
</script>
<style lang="scss" scoped></style>
