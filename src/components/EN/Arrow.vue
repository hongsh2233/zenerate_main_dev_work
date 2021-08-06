<template>
  <svg
    width="14"
    height="39"
    viewBox="0 0 27 83"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.999994 1L0.999996 82L26 55.3114"
      :stroke="props.color"
      stroke-linecap="square"
      stroke-linejoin="round"
      stroke-width="2"
    />
  </svg>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
  color: {
    required: false,
    default() {
      return 'black'
    },
  },
})
</script>
<style lang="scss" scoped></style>
