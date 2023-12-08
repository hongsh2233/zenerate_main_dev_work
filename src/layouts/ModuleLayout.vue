<template>
  <div class="layout-module">
    <Header @toggleDrawer="toggleDrawer" :showDrawer="showDrawer" />
    <ModulePage></ModulePage>
    <Footer></Footer>
    <transition name="fade">
      <MenuDrawer v-show="showDrawer" @toggleDrawer="toggleDrawer" />
    </transition>
  </div>
  <!-- <ReductionOfCapitalModal
    v-if="showReductionOfCapitalModal"
    @close="() => toggleReductionOfCapitalModal(false)"
  /> -->
</template>

<script setup>
import Header from '/Components/HeaderMain.vue'
import ModulePage from '/Pages/ModulePage.vue'
import MenuDrawer from '/Components/MenuDrawer.vue'
import Footer from '/Components/Footer.vue'
import ReductionOfCapitalModal from '/Components/ReductionOfCapitalModal.vue'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { onMounted, ref } from 'vue'
const { t } = useI18n()

const showDrawer = ref(false)
const toggleDrawer = (flag) => {
  showDrawer.value = flag
}

const showReductionOfCapitalModal = ref(true)
const toggleReductionOfCapitalModal = (flag) => {
  const fl = flag ?? !showReductionOfCapitalModal.value
  showReductionOfCapitalModal.value = fl
}

useHead({
  title: '제너레잇 | 부동산개발 수익극대화 빌딩디자인 AI솔루션',
  htmlAttrs: { lang: 'ko' },
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai/kr' }],
  meta: [
    {
      name: `description`,
      content:
        '제너레잇은 건축 디자인 자동화와 인공지능 기술을 통해 부동산 개발 수익을 극대화합니다. 기존 방식에 비해 평균 12%의 수익을 추가로 만들어 내고 있습니다.',
    },
    {
      name: 'twitter:title',
      content: '제너레잇 | 부동산개발 수익극대화 빌딩디자인 AI솔루션',
    },
    {
      name: 'twitter:description',
      content:
        '제너레잇은 건축 디자인 자동화와 인공지능 기술을 통해 부동산 개발 수익을 극대화합니다. 기존 방식에 비해 평균 12%의 수익을 추가로 만들어 내고 있습니다.',
    },
    { name: 'keywords', content: 'zenerate' },
    {
      name: 'twitter:image',
      content: 'https://www.zenerate.ai/img/thumbnail.png',
    },
    {
      name: 'og:url',
      content: 'https://www.zenerate.ai/kr',
    },
    {
      name: 'og:title',
      content: '제너레잇 | 부동산개발 수익극대화 빌딩디자인 AI솔루션',
    },
    {
      name: 'og:description',
      content:
        '제너레잇은 건축 디자인 자동화와 인공지능 기술을 통해 부동산 개발 수익을 극대화합니다. 기존 방식에 비해 평균 12%의 수익을 추가로 만들어 내고 있습니다.',
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:image:url',
      content: 'https://www.zenerate.ai/img/thumbnail.png',
    },
    {
      name: 'og:image:type',
      content: 'image/png',
    },
  ],
})
</script>

<style lang="scss" scoped>
.layout-module {
  margin: 0px;
  width: 100%;
  @include desktop {
    width: 1280px;
    margin: 0px auto;
    padding: 0px 56px;
    padding-top: 135px;
  }
  @include tablet {
    padding: 32px;
    padding-top: 91px;
  }
  @include mobile {
    padding: 28px;
    padding-top: 69px;
  }
}
</style>
