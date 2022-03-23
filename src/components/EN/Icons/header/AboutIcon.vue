<template>
  <div
    class="icon-close hover-pointer"
    :style="{ width: `${props.width}px`, height: `${props.height}px` }"
    @click="close"
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
          d="M9.547 8.136c.747.523 1.271 1.232 1.271 2.177V12H13v-1.687c0-1.227-1.947-1.952-3.453-2.177Z"
          :fill="!active ? '#000729' : '#4d49f4'"
          fill-opacity=".7"
        />
        <path
          d="M5.364 7.5c1.205 0 2.181-1.007 2.181-2.25S6.57 3 5.364 3 3.182 4.007 3.182 5.25 4.159 7.5 5.364 7.5Z"
          :fill="!active ? '#000729' : '#4d49f4'"
          fill-opacity=".7"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.636 7.5c1.206 0 2.182-1.007 2.182-2.25S9.842 3 8.636 3c-.256 0-.496.056-.725.135a3.43 3.43 0 0 1 .725 2.115 3.43 3.43 0 0 1-.725 2.115c.229.079.469.135.725.135ZM5.364 8.062C3.907 8.062 1 8.816 1 10.312V12h8.727v-1.688c0-1.496-2.907-2.25-4.363-2.25Z"
          :fill="!active ? '#000729' : '#4d49f4'"
          fill-opacity=".7"
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

const barHeight = computed(() => {
  return Math.floor((props.height / 2 / 12) * 2)
})
</script>
<style lang="scss" scoped>
.icon-close-inner {
  width: 100%;
  height: 100%;
  &:hover {
    path {
      fill: #888888;
    }
  }
  &:active {
    path {
      fill: #5a5a5a;
    }
  }
}
</style>
