<template>
  <div class="list-wrapper">
    <div class="list-image">
      <img src="" data-src="/img/career_img.jpg" alt="" />
    </div>
    <div class="list-items">
      <div class="career-list">
        <div class="career-item">
          <div class="item-date">2021. 00. 00 ~ 2021. 00. 00</div>
          <div class="item-title hover-pointer" @click="[careerId = 0, onSelect(0)]">
            STRATEGIC ACCOUNT EXECUTIVE
            <div class="arrow-right"></div>
          </div>
        </div>
        <div class="career-item">
          <div class="item-date">2021. 00. 00 ~ 2021. 00. 00</div>
          <div class="item-title hover-pointer" @click=";[(careerId = 1), onSelect(1)]">
            BUSINESS DEVELOPMENT MANAGER
            <div class="arrow-right"></div>
          </div>
        </div>
        <div class="career-item">
          <div class="item-date">2021. 00. 00 ~ 2021. 00. 00</div>
          <div class="item-title hover-pointer" @click=";[(careerId = 2), onSelect(2)]">
            BUSINESS DEVELOPMENT & MARKETING INTERN
            <div class="arrow-right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Store from '/Store/index'
import CareerContent from '/src/components/EN/CareerContent.vue'
import { ref, defineEmit, defineProps, onMounted, computed } from 'vue'
const careerId = ref(-1)

const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}
const fp = computed(() => Store.state.root.FullPage)
const emit = defineEmit(['onSelect'])
const onSelect = (value) => {
  emit('onSelect', value)
}
const props = defineProps({
  careerId: {
    type: Number,
  },
})
onMounted(() => {
  fp.value.init('#fullpage', {
    scrollOverflow: true,
    anchors: ['firstPage', 'secondPage', 'thirdPage'],
    // normalScrollElements: '.section-content'
  })
})
</script>
<style lang="scss" scoped></style>
