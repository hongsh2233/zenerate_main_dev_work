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
      opacity="1"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.18 15.62a4.57 4.57 0 0 0 1.39-3.27c0-2.52-2.05-4.57-4.57-4.57-2.52 0-4.57 2.05-4.57 4.57 0 1.28.53 2.44 1.39 3.27-2.49.76-5.04 2.32-5.04 4.69v3.92h16.44v-3.92c0-2.37-2.55-3.93-5.04-4.69Zm-5.92-3.27c0-1.51 1.23-2.74 2.74-2.74 1.51 0 2.74 1.23 2.74 2.74 0 1.51-1.23 2.74-2.74 2.74-1.51 0-2.74-1.23-2.74-2.74ZM22.4 22.4H9.61v-2.09c0-.66.54-1.5 2.08-2.28 1.46-.74 3.23-1.11 4.31-1.11 1.08 0 2.85.37 4.31 1.11 1.55.79 2.08 1.62 2.08 2.28v2.09h.01Z"
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
