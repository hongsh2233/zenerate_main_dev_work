<template>
  <metainfo>
    <template v-slot:title="{ metainfo }">
      {{ metainfo.title ? `${metainfo.title}` : `Zenerate` }}
    </template>

    <template v-slot:description="{ metainfo }">{{
      metainfo.description ? metainfo.description : ''
    }}</template>
  </metainfo>
  <router-view></router-view>
</template>

<script lang="ts" name="App" setup>
import { watch, onMounted, reactive, computed } from 'vue'
import AOS from 'aos'
import { useHead } from '@vueuse/head'
const siteData = reactive({
  title: 'Zenerate: Creating AI-Powered Tools for Real Estate Development',
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai' }],
  description: `Zenerate provides AI-powered feasibility solutions for real estate development. Explore all possibilities, maximize returns. Zenerate™ App.`,
  og: {
    url: 'https://www.zenerate.ai/',
    type: 'website',
    title: 'Zenerate: Creating AI-Powered Tools for Real Estate Development',
    description: `Zenerate provides AI-powered feasibility solutions for real estate development. Explore all possibilities, maximize returns. Zenerate™ App.`,
    tags: 'zenerate',
    keywords: 'zenerate',
    image: 'https://www.zenerate.ai/img/logo_og.png',
  },
  twitter: {
    title: 'Zenerate: Creating AI-Powered Tools for Real Estate Development',
  },
})

useHead({
  title: computed(() => siteData.title),
  htmlAttrs: { lang: 'en' },
  link: computed(() => siteData.link),
  meta: [
    {
      name: `description`,
      content: computed(() => siteData.description),
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: computed(
        () => 'Zenerate: Creating AI-Powered Tools for Real Estate Development'
      ),
    },
    {
      name: 'twitter:description',
      content: `Zenerate provides AI-powered feasibility solutions for real estate development. Explore all possibilities, maximize returns. Zenerate™ App.`,
    },
    { name: 'keywords', content: 'zenerate' },
    {
      name: 'twitter:image',
      content: 'https://www.zenerate.ai/img/logo_og.png',
    },
    {
      name: 'og:url',
      content: 'https://www.zenerate.ai/',
    },
    {
      name: 'og:title',
      content:
        'Zenerate: Creating AI-Powered Tools for Real Estate Development',
    },
    {
      name: 'og:description',
      content: `Zenerate provides AI-powered feasibility solutions for real estate development. Explore all possibilities, maximize returns. Zenerate™ App`,
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:image:url',
      content: 'https://www.zenerate.ai/img/logo_og.png',
    },
    {
      name: 'og:image:type',
      content: 'image/png',
    },
  ],
})

onMounted(() => {
  AOS.init()
  setTimeout(() => {
    document.querySelectorAll('.aos-init').forEach((doc: HTMLElement) => {
      doc.classList.remove('aos-animate')
    })
  }, 0)
  window.addEventListener('load', AOS.refresh)
})
</script>

<style lang="scss" scoped></style>
