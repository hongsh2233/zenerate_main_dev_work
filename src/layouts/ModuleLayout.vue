<template>
  <div class="layout-module">
    <Header @toggleDrawer="toggleDrawer" :showDrawer="showDrawer" />
    <ModulePage></ModulePage>
    <Footer></Footer>
    <transition name="fade">
      <MenuDrawer v-show="showDrawer" @toggleDrawer="toggleDrawer" />
    </transition>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import Header from '/Components/HeaderMain.vue'
// @ts-ignore
import ModulePage from '/Pages/ModulePage.vue'
// @ts-ignore
import Footer from '/Components/Footer.vue'
// @ts-ignore
import MenuDrawer from '/Components/MenuDrawer.vue'

import { useI18n } from 'vue-i18n'
import { ref } from '@vue/reactivity'
const { t } = useI18n()

const showDrawer = ref(false)

const toggleDrawer = (flag) => {
  console.log(flag)
  showDrawer.value = flag
}

import { useMeta } from 'vue-meta'
const { meta } = useMeta({
  title: '제너레잇 | 부동산개발 수익극대화 빌딩디자인 AI솔루션',
  description:
    '건축 디자인 자동화와 인공지능 기술을 통해 부동산 개발 수익을 극대화합니다. 기존 방식에 비해 평균 12%의 수익을 추가로 만들어 내고 있습니다.',
  htmlAttrs: { lang: 'ko', amp: false },
  link: [{ rel: 'canonical', href: 'https://zenerate.ai/kr' }],
  og: {
    url: 'https://zenerate.ai/kr',
    type: 'website',
    title: '제너레잇 | 부동산개발 수익극대화 빌딩디자인 AI솔루션',
    description: `건축 디자인 자동화와 인공지능 기술을 통해 부동산 개발 수익을 극대화합니다. 기존 방식에 비해 평균 12%의 수익을 추가로 만들어 내고 있습니다.`,
    tags: '제너레잇',
    keywords: '제너레잇',
    image: 'https://zenerate.ai/img/logo_og.png',
  },
  twitter: {
    title: '제너레잇 | 부동산개발 수익극대화 빌딩디자인 AI솔루션',
  },
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
