<template>
  <div id="fullpage">
    <div class="section section1">
      <div class="section-inner">
        <img src="/en/img/BG.png" alt="" />
      </div>
    </div>
    <div class="section section2">section2</div>
    <div class="section section-footer fp-auto-height">
      <Footer />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
// @ts-ignore
import Footer from '/Components/EN/Footer.vue'

import Store from '/Store/index'
const fullpage = computed(() => Store.state.root.FullPage)
onMounted(() => {
  fullpage.value.init('#fullpage', {})
})
onBeforeUnmount(() => {
  fullpage.value.destroy()
})
</script>
<style lang="scss" scoped>
.section {
  padding-top: 100px;

  &.section1 {
    .section-inner {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        max-height: 100%;
      }
    }
  }

  &.section2 {
    background-color: blue;
  }
  &.section-footer {
    padding-top: 0;
  }
}
</style>
