<template>
  <div
    class="relative mx-auto min-h-[816px] min-w-[280px] max-w-[1200px] md:min-h-[546px] lg:min-h-[628px]"
  >
    <section
      class="relative pt-136 pb-36 md:pt-156 md:pb-54 lg:pt-[212px] lg:pb-124"
    >
      <!-- App WaitList Form -->
      <div
        class="mx-auto flex w-[320px] min-w-[320px] flex-col overflow-hidden rounded-10 bg-white shadow-200 md:w-[714px] md:flex-row lg:min-w-[1070px] lg:flex-row"
      >
        <div
          class="relative flex h-[450px] w-[320px] flex-row justify-center !overflow-hidden md:h-[450px] md:w-[434px] md:min-w-[434px] lg:h-[600px] lg:w-[644px] lg:min-w-[644px]"
        >
          <video
            class="h-full"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            src="/en/app/hero.mp4"
            alt=""
          />
          <div
            class="absolute flex h-full w-full flex-col items-center bg-gradient-to-b from-[rgba(34,35,39,0.50)] via-[rgba(34,35,39,0.50)] to-[rgba(0,7,41,0.60)] px-33 pt-44 pb-26 text-white md:items-start md:pl-34 md:pr-48 md:pt-36 md:pb-38 md:text-left lg:items-start lg:pt-48 lg:pr-60 lg:pb-50 lg:pl-60 lg:text-left"
          >
            <div class="mb-4 flex flex-row items-center md:mb-8 lg:mb-12">
              <img
                class="lg:hidden"
                :src="`/img/logo_white.svg`"
                alt="logo"
                :height="34"
              />
              <img
                class="hidden md:hidden lg:block"
                :src="`/img/logo_white.svg`"
                alt="logo"
                :height="45"
              />
              <span
                class="ml-12 pb-4 font-['Poppins'] text-34 font-semibold lg:ml-16 lg:pb-6 lg:text-46"
                >App</span
              >
            </div>
            <span
              class="mb-[204px] text-center text-24 font-bold md:text-left md:text-26 lg:mb-[268px] lg:text-left lg:text-34"
            >
              AI-powered, Real-time<br />Feasibility Solution
            </span>
            <span
              class="text-center text-16 font-bold md:text-left md:text-18 lg:text-left lg:text-26"
              >Generate optimized designs for<br />FAR & Density or manually
              edit floor plans</span
            >
          </div>
        </div>

        <div
          class="my-auto flex min-h-full w-full flex-col items-center justify-center bg-white px-45 pb-40 pt-10 md:px-24 lg:px-50"
        >
          <FormContent sheet-name="AppWaitList">
            <template #form-title>
              <div class="mt-40 text-center text-18 lg:text-24">
                Join the waitlist for
                <br /><span class="font-semibold text-primary"
                  >Zenerate App!</span
                >
              </div>
            </template>
            <template #under-submit-btn-text>
              <span
                class="mt-10 mb-20 text-center text-10 text-gray-500 lg:mt-16 lg:text-12"
                >*We will grant a 2-month free access on
                <br class="lg:hidden" />a rolling basis, followed by an
                exclusive discount.</span
              >
            </template>
            <template #after-submit-title>
              <span
                class="mb-40 text-center text-18 md:pt-8 lg:pt-8 lg:text-22"
              >
                Your request has been submitted!
              </span>
            </template>
            <template #after-submit-text>
              <span class="text-center text-13 text-gray-700 lg:text-16"
                >We'll be in touch soon.</span
              >
            </template>
          </FormContent>
        </div>
      </div>
    </section>

    <section class="section section-footer fp-auto-height">
      <Footer />
    </section>
  </div>
</template>
<script lang="ts" setup>
import { useHead } from '@vueuse/head'
import { Footer, FormContent } from '/Components/EN'

useHead({
  title: `About the Zenerate App | AI-Powered, Real-Time Feasibility Solution`,
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai/app' }],
  meta: [
    {
      name: `description`,
      content: `Generate optimized designs for FAR & Density or manually edit floor plans.`,
    },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: `About the Zenerate App | AI-Powered, Real-Time Feasibility Solution`,
    },
    {
      hid: 'twitter:description',
      property: 'twitter:description',
      content: `Generate optimized designs for FAR & Density or manually edit floor plans.`,
    },
    { name: 'keywords', content: 'zenerate' },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.zenerate.ai/img/thumbnail.png',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://www.zenerate.ai/app',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: `About the Zenerate App | AI-Powered, Real-Time Feasibility Solution`,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: `Generate optimized designs for FAR & Density or manually edit floor plans.`,
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:image:url',
      property: 'og:image:url',
      content: 'https://www.zenerate.ai/img/thumbnail.png',
    },
    {
      hid: 'og:image:type',
      property: 'og:image:type',
      content: 'image/png',
    },
  ],
})
</script>
<style lang="scss"></style>
