<template>
  <div class="layout-module">
    <Header @toggleDrawer="toggleDrawer" :showDrawer="showDrawer" />
    <ModulePage></ModulePage>
    <Footer></Footer>
    <transition name="fade">
      <MenuDrawer v-show="showDrawer" @toggleDrawer="toggleDrawer" />
    </transition>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import Header from '/Components/HeaderMain.vue'
// @ts-ignore
import ModulePage from '/Pages/ModulePage.vue'
// @ts-ignore
import Footer from '/Components/Footer.vue'
// @ts-ignore
import MenuDrawer from '/Components/MenuDrawer.vue'

import { useI18n } from 'vue-i18n'
import { ref } from '@vue/reactivity'
const { t } = useI18n()

const showDrawer = ref(false)

const toggleDrawer = (flag) => {
  console.log(flag)
  showDrawer.value = flag
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.layout-module {
  margin: 0px;
  width: 100%;
  @include desktop {
    width: 1280px;
    margin: 0px auto;
    padding: 0px 56px;
    padding-top: 135px;
  }
  @include tablet {
    padding: 32px;
    padding-top: 91px;
  }
  @include mobile {
    padding: 28px;
    padding-top: 69px;
  }
}
</style>
