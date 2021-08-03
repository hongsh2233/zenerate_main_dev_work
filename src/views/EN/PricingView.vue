<template>
  <div class="pricing-wrapper"></div>
</template>
<script lang="ts" setup>
import { reactive, ref, onMounted, computed } from 'vue'
import Store from '/Store/index'
import ApiService from '/Services/api'
import Validation from '/Utils/Validation'
import { useRoute } from 'vue-router'

const fullpage = computed(() => Store.state.root.FullPage)
onMounted(() => {
  fullpage.value.destroy()
  const route = useRoute()
})
</script>
<style lang="scss">
.pricing-wrapper {
  height: 800px;
}
</style>
