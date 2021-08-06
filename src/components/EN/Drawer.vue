<template>
  <div class="drawer-wrapper">
    <div class="drawer-dimmer"></div>
    <div class="drawer-wrapper">
      <div class="drawer-logo">
        <img src="/img/logo_color.png" alt="" />
        <CloseButton @close="close" />
      </div>
      <div class="drawer-items-wrapper"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmit } from 'vue'
import { useRouter } from 'vue-router'
// @ts-ignore
import CloseButton from '/Components/EN/Icons/close.vue'

const router = useRouter()
const props = defineProps({
  showDrawer: Boolean,
})

const emit = defineEmit(['close'])
const close = () => emit('close', null)
</script>
<style lang="scss" scoped>
.drawer-wrapper {
  @include relative;
  .drawer-dimmer {
    @include fixed(left 0 top 0);
    width: 100vw;
    height: 100vh;
    background: rgba($cr-text-dark-grey, 0.6);
    z-index: 9998;
  }
  .drawer-wrapper {
    @include fixed(top 0 right -2px);
    width: 420px;
    height: 100vh;
    background-color: $white;
    z-index: 9999;
    padding: 32px 30px;

    .drawer-logo {
      width: 100%;
      height: 24px;
      @include flex($justify: space-between);
      img {
        height: 100%;
      }
    }
    .drawer-items-wrapper {
      padding: 0px 10px;
    }
  }
}
</style>
