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
          d="M4.916 4.277 3.768 6H2V5h1.232l.852-1.277.832.554ZM13 6H6V5h7v1ZM4.916 7.277 3.768 9H2V8h1.232l.852-1.277.832.554ZM13 9H6V8h7v1Zm-8.084 1.277L3.768 12H2v-1h1.232l.852-1.277.832.554ZM13 12H6v-1h7v1Z"
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
  height: 100%;
}
</style>
