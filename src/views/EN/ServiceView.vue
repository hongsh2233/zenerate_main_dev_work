<template>
  <div id="fullpage-service">
    <div class="section section-1">a</div>
    <div class="section section-2">b</div>
    <div class="section section-3">c</div>
    <div class="section section-4">d</div>
    <div class="section section-5">e</div>
    <div class="section section-6">f</div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import Store from '/Store/index'
const fullpage = computed(() => Store.state.root.FullPage)
onMounted(() => {
  fullpage.value.init('#fullpage-service', {})
})
onBeforeUnmount(() => {
  fullpage.value.destroy()
})
</script>
<style lang="scss" scoped>
.section {
  padding-top: 100px;
}
.section-inner {
  width: 100%;
  height: 100%;
  background: red;
  @include center-center;
}
.section-1 {
  height: auto !important;
}
</style>
