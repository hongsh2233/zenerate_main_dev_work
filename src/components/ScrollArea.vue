<template>
    <div class="upper"></div>
</template>
<script setup>
import {ref, onMounted} from 'vue'
const upper = ref(null)
const scrollP = ref(0)
onMounted(()=>{
    window.addEventListener('scroll', $evt =>{
        console.log($evt)
    })
})
</script>
<style lang="scss" scoped>
    .upper{
        height: 5000px;
        background-color: red;
    }
</style>