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
import { watch, onMounted } from 'vue'
import { useMeta, useActiveMeta } from 'vue-meta'
import AOS from 'aos'

const { meta } = useMeta({
  title: 'Zenerate | Real-time Feasibility Studies for Real Estate Development',
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://zenerate.ai' }],
  description:
    'Zenerate is a proptech company providing building design AI solutions that boost real estate development profitability up to 26%.',
  og: {
    url: 'https://zenerate.ai/',
    type: 'website',
    title:
      'Zenerate | Real-time Feasibility Studies for Real Estate Development',
    description: `Zenerate is a proptech company providing building design AI solutions that boost real estate development profitability up to 26%.`,
    tags: 'zenerate',
    keywords: 'zenerate',
    image: 'https://zenerate.ai/img/logo_og.png',
  },
  twitter: {
    title:
      'Zenerate | Real-time Feasibility Studies for Real Estate Development',
  },
})
const metadata = useActiveMeta()

onMounted(() => {
  AOS.init()
  setTimeout(() => {
    document.querySelectorAll('.aos-init').forEach((doc: HTMLElement) => {
      doc.classList.remove('aos-animate')
    })
  }, 0)
})
</script>

<style lang="scss" scoped></style>
