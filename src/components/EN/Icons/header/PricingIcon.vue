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
        <g opacity=".7" :fill="!active ? '#000729' : '#4d49f4'">
          <path
            d="M7.966 8.132c-.922-.274-1.36-.446-1.36-.882 0-.437.572-.646.953-.646.216-.006.428.052.604.164a.909.909 0 0 1 .374.459l.813-.311a1.604 1.604 0 0 0-.537-.69 1.862 1.862 0 0 0-.853-.346V5.3h-.916v.585a1.64 1.64 0 0 0-.957.473c-.247.255-.386.581-.391.92 0 1.054 1.158 1.35 1.724 1.536.829.242 1.168.479 1.168.924 0 .525-.514.748-1.03.748a1.44 1.44 0 0 1-.797-.299 1.207 1.207 0 0 1-.437-.671l-.824.31c.087.34.277.65.55.897.274.246.618.418.994.496v.58h.911v-.575a1.785 1.785 0 0 0 1.086-.483c.285-.276.448-.636.458-1.012.016-.645-.298-1.212-1.533-1.597Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.5 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 1a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
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
