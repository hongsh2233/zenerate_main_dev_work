<template>
  <router-view></router-view>
</template>

<script lang="ts" name="App" setup>
import { watch, onMounted } from 'vue'
import AOS from 'aos'

onMounted(() => {
  AOS.init()
  document.querySelectorAll('.aos-init').forEach((doc: HTMLElement) => {
    doc.classList.remove('aos-animate')
  })
})
</script>

<style lang="scss" scoped></style>
