<template>
  <div
    class="layout min-w-[320px] w-[320px] md:w-auto lg:w-auto px-30 w-full lg:max-w-[1024px] flex flex-col md:flex-row lg:flex-row mx-auto md:justify-center lg:justify-center"
  >
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import Store from '/Store/index'
</script>
