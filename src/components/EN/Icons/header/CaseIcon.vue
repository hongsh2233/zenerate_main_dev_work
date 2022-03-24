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
            d="M8.636 3H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.364L8.636 3Zm.414-1H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5.95L9.05 2Z"
          />
          <path d="M8 3h1v3h3v1H8V3ZM10 9H5.5V8H10v1Zm0 2H5.5v-1H10v1Z" />
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
