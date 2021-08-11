<template>
  <router-view></router-view>
</template>

<script lang="ts" name="App" setup>
import { watch, onMounted } from 'vue'
import AOS from 'aos'

onMounted(() => {
  AOS.init()
  setTimeout(() => {
    document.querySelectorAll('.aos-init').forEach((doc: HTMLElement) => {
      doc.classList.remove('aos-animate')
    })
  }, 0)
})
</script>

<style lang="scss" scoped></style>
