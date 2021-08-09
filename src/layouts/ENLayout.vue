<template>
  <div class="layout-en">
    <Header @toggleDrawer="toggleDrawer" :showDrawer="showDrawer"></Header>
    <transition name="fade">
      <Drawer v-if="showDrawer" @close="toggleDrawer" />
    </transition>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <section class="section-en">
          <component :is="Component" />
        </section>
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts" setup>
//@ts-ignore
import Header from '/Components/EN/Header.vue'
//@ts-ignore
import Footer from '/Components/EN/Footer.vue'
// @ts-ignore
import Drawer from '/Components/EN/Drawer.vue'

import { ref } from 'vue'
const showDrawer = ref(false)
const toggleDrawer = (flag = undefined) => {
  showDrawer.value = flag == null ? !showDrawer.value : flag

  if (showDrawer.value) {
    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
  } else {
    // When the modal is hidden...
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  }
}
</script>
<style lang="scss">
.layout-en {
  overflow-x: hidden;
}

.layout-en,
.layout-en * {
  font-family: 'Roboto', sans-serif !important;
  // line-height: 125% !important;
  // letter-spacing: -0.015em;
}
</style>
