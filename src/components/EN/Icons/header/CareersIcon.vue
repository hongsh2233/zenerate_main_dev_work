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
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 5V4h3v1H6ZM5 5V4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2Zm4 1H3v4h9V6H9Zm3 5H3v1h9v-1ZM8 8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
          :fill="!active ? '#000729' : '#4d49f4'"
          opacity=".7"
        />
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
}
</style>
