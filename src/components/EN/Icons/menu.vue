<template>
  <div class="icon-menu hover-pointer" @click="toggle()">
    <i class="icon-menu-inner material-icons">{{
      showDrawer ? 'close' : 'menu'
    }}</i>
  </div>
  <!-- <div
    class="icon-menu hover-pointer"
    :style="{ width: `${props.width}px`, height: `${props.height}px` }"
    @click="toggle"
  >
    <div class="icon-menu-inner">
      <div class="menu menu-1" :style="{ height: `${barHeight}px` }"></div>
      <div class="menu menu-2" :style="{ height: `${barHeight}px` }"></div>
      <div class="menu menu-3" :style="{ height: `${barHeight}px` }"></div>
    </div>
  </div> -->
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
const props = defineProps({
  width: {
    type: Number,
    default() {
      return 24
    },
  },
  height: {
    type: Number,
    default() {
      return 24
    },
  },
  showDrawer: Boolean,
})
const emit = defineEmits(['toggle'])
const toggle = () => {
  emit('toggle', null)
}
const showDrawer = computed(() => props.showDrawer)

const barHeight = computed(() => {
  return Math.floor((props.height / 2 / 12) * 2)
})
</script>
<style lang="scss" scoped>
.icon-menu-inner {
  @include flex($dir: column);
  justify-content: space-between;
  width: 100%;
  height: 100%;
  color: $black;
  font-size: 28px;

  @include en-tablet {
    padding: 10px 40px;
  }
  @include en-mobile {
    padding: 10px 20px;
  }
  .menu {
    width: 100%;
    &:last-child {
      margin-bottom: 0;
    }
    background-color: $black;
    transition: width 0.3s ease;
    margin-left: auto;
  }
  &:hover {
    .menu-3 {
      width: 50%;
    }
  }
  &:active {
    .menu-1,
    .menu-3 {
      width: 50%;
    }
  }
}
</style>
