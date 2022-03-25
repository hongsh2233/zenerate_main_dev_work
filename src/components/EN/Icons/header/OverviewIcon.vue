<template>
  <svg
    :width="props.width"
    :height="props.height"
    :viewBox="props.width === 30 ? `0 0 32 32` : `0 0 30 30`"
    fill="none"
    perserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity=".7"
      d="M9.61 6.86v10.05h1.83V8.69h11.88v12.79a1.83 1.83 0 1 1-1.83-1.83v-1.83H10.52c-2.02 0-3.65 1.64-3.65 3.65s1.64 3.65 3.65 3.65h10.96c2.02 0 3.65-1.64 3.65-3.65V6.86H9.61ZM8.7 21.48c0-1.01.82-1.83 1.83-1.83h7.82c-.31.54-.51 1.16-.51 1.83 0 .67.19 1.29.51 1.83h-7.82a1.83 1.83 0 0 1-1.83-1.83Z"
      fill="#111326"
    />
  </svg>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  width: {
    type: Number,
    default() {
      return 16
    },
  },
  height: {
    type: Number,
    default() {
      return 16
    },
  },
  active: {
    type: Boolean,
    default() {
      return false
    },
  },
})
</script>
<style lang="scss" scoped>
.icon-close-inner {
  width: 100%;
  height: 100%;
}
</style>
