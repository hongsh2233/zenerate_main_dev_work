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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.26 10.52V8.69h5.48v1.83h-5.48Zm-1.83 0V8.69c0-1.01.82-1.83 1.83-1.83h5.48c1.01 0 1.83.82 1.83 1.83v1.83h3.65c1.01 0 1.83.82 1.83 1.83v10.96c0 1.01-.82 1.83-1.83 1.83H7.78c-1.01 0-1.83-.82-1.83-1.83V12.35c0-1.01.82-1.83 1.83-1.83h3.65Zm7.31 1.83H7.78v7.31h16.44v-7.31h-5.48Zm5.48 9.14H7.78v1.83h16.44v-1.83Zm-7.31-4.57c0 .5-.41.91-.91.91s-.91-.41-.91-.91.41-.91.91-.91.91.41.91.91Z"
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
