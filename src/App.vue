<template>
  <router-view></router-view>
</template>

<script lang="ts" name="App" setup>
import { watch } from 'vue'
import AOS from 'aos'
AOS.init()
import { useRouter, onBeforeRouteLeave } from 'vue-router'

const router = useRouter()
onBeforeRouteLeave(() => {
  console.log("asd")
})
</script>

<style lang="scss" scoped></style>
