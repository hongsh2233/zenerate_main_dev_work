<template>
  <div class="layout-en">
    <Header
      @toggleDrawer="toggleDrawer"
      :showDrawer="showDrawer"
      v-show="path !== '/pre-launch-signup'"
    ></Header>
    <transition name="fade">
      <Drawer v-if="showDrawer" @close="toggleDrawer" />
    </transition>
    <router-view v-slot="{ Component }">
      <section class="section-en">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </section>
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

import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const path = computed(() => route.path)

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
  overflow-y: hidden;
}

.layout-en,
.layout-en * {
  font-family: 'Poppins', 'Roboto', sans-serif !important;
}
</style>
