<template>
  <div class="news-content-wrapper">
      <div>{{props.nowId}}</div>
    <div v-for="news in props.newsList" :key="news.id">{{news.id}}</div>
    <button  @click="nowId=-1">BACK</button>
  </div>
</template>
<script setup>
import { ref, watch, defineProps, defineEmit } from 'vue'
const props = defineProps({
  newsList: {
    type: Array,
    default() {
      return []
    },
  },
  nowId:{
      type:Number
  }
})
</script>
<style lang="scss" scoped></style>
