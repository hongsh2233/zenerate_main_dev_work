<template>
  <div
    class="fixed bottom-20 right-10 z-[1020] m-auto h-fit max-h-fit min-h-fit w-[400px] min-w-[400px] max-w-[400px] rounded-8 bg-white p-30 text-14 shadow-200"
  >
    <IconButton
      class="absolute top-12 right-12 h-24 w-24"
      iconName="close"
      sub-variant="default"
      :width="24"
      :height="24"
      @click="close"
    />
    <h1 class="mb-30 text-center text-16">자본감소공고</h1>
    <p class="mb-30 leading-[200%]">
      &nbsp;&nbsp;본 회사는 2023년 9월 25일 임시주주총회에서 자본의 총액
      금11,538,000원을 금1,538,000원으로 감소하고 그 방법으로 1주의 금액
      금100원의 보통주식 100,000주에 대하여 무상임의소각하기로 결의하였으므로,
      본 자본감소에 이의가 있는 채권자는 본 공고일 익일부터 1개월 이내에 이의를
      제출할 것을 공고합니다.
    </p>
    <div class="mb-30 text-center">2023. 9. 26.</div>
    <div class="text-center">제너레잇 주식회사</div>
    <div class="text-center">
      서울특별시 송파구 올림픽로 362, 5층 (방이동, 삼성빌딩)
    </div>
    <div class="text-center">대표이사 신봉재</div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import IconButton from '/Components/EN/ui/IconButton.vue'

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}

// onMounted(() => {
//   document.body.style.cssText = `
//     position: fixed;
//     top: -${window.scrollY}px;
//     height: 100%;
//     `
//   return () => {
//     const scrollY = document.body.style.top
//     document.body.style.cssText = ''
//     window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
//     document.body.classList.add('stop-scroll')
//   }
// })
</script>
<style lang="scss" scoped></style>
