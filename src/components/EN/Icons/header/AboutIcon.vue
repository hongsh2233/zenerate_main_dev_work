<template>
  <div
    class="icon-close hover-pointer"
    :style="{ width: `${props.width}px`, height: `${props.height}px` }"
  >
    <div class="icon-close-inner">
      <svg
        :width="props.width"
        :height="props.height"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          opacity=".7"
          fill-rule="evenodd"
          clip-rule="evenodd"
          :fill="!active ? '#000729' : '#4d49f4'"
        >
          <path
            d="M7.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
          />
          <path
            d="M5.14 8.607C4.294 9.038 4 9.496 4 9.857V11h7V9.857c0-.361-.294-.819-1.14-1.25C9.06 8.2 8.09 8 7.5 8c-.59 0-1.56.2-2.36.607ZM12 9.857C12 7.957 9.002 7 7.5 7 5.998 7 3 7.957 3 9.857V12h9V9.857Z"
          />
        </g>
      </svg>
    </div>
  </div>
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
