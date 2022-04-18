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
      d="M23.3099 8.68945H8.68986C7.67986 8.68945 6.85986 9.50945 6.85986 10.5195V21.4795C6.85986 22.4895 7.67986 23.3095 8.68986 23.3095H23.3099C24.3199 23.3095 25.1399 22.4895 25.1399 21.4795V10.5195C25.1399 9.50945 24.3199 8.68945 23.3099 8.68945ZM23.3099 10.5195V11.7495L15.9999 14.9995L8.68986 11.7495V10.5195H23.3099ZM8.68986 21.4795V13.7495L15.9999 16.9995L23.3099 13.7495V21.4795H8.68986Z"
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
