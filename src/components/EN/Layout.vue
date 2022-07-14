<template>
  <div
    class="layout min-w-[320px] w-[320px] md:w-[768px] lg:w-auto px-30 lg:w-[1024px] md:px-70 lg:px-86 flex flex-col md:flex-row lg:flex-row mx-auto md:justify-center lg:justify-center"
  >
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import Store from '/Store/index'
</script>
