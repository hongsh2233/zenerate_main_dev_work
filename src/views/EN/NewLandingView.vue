<template>
  <div class="layout-container">
    <LandingTop />
    <LandingMain />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import Store from '/Store/index'
import LandingTop from '/Views/EN/components/LandingTop.vue'
import LandingMain from '/Views/EN/components/LandingMain.vue'
</script>
<style lang="scss" scoped>
.layout-container {
  //   padding: 0 24px;
  //   max-width: 1080px;
  //   margin: 0 auto;
  width: 100%;
}
</style>
