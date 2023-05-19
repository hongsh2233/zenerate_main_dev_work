<template>
  <section class="section section-careers">
    <div class="section-inner">
      <div
        class="w-[80%] max-w-[440px] min-w-[280px] m-auto md:min-w-[628px] md:max-w-[772px] lg:min-w-[772px] lg:max-w-[1200px]"
      >
        <div
          class="flex flex-col gap-[18px] md:gap-[20px] lg:gap-[16px] mb-[26px] md:mb-[42px] lg:mb-[44px]"
        >
          <div class="flex flex-col items-start">
            <p
              class="text-m-20-semibold md:text-t-30-semibold lg:text-d-32-semibold text-black"
            >
              Together,
            </p>

            <p
              class="text-m-20-regular text-left md:text-t-30-regular lg:text-d-32-regular text-black"
            >
              <span>let's build the future&nbsp;</span>
              <span>of real estate</span>
            </p>
          </div>
          <p
            class="text-m-13-medium md:text-t-16-medium text-left lg:text-d-15-medium text-black w-[210px] md:w-[370px] lg:w-[340px]"
          >
            <span>We're looking for passionate, </span>
            <span>talented teammates&nbsp;</span><span>to help grow</span>
            <span class="text-primary">&nbsp;Zenerate!</span>
          </p>
        </div>

        <div
          class="w-full shadow-100 rounded-10 p-[26px] md:px-[42px] md:py-[38px] lg:px-[50px] flex flex-col lg:py-[48px] gap-16 md:gap-26 lg:gap-26"
        >
          <div>
            <h2
              class="text-m-14-semibold md:text-17 md:font-semibold lg:font-semibold lg:text-17 m-0"
            >
              We're Hiring! 🚀
            </h2>
          </div>
          <div class="w-full flex flex-col gap-16">
            <template v-for="(job, idx) in JOBS">
              <div
                class="w-full min-h-38 md:min-h-24 cursor-pointer group lg:min-h-28 flex flex-row md:items-center lg:items-center gap-12"
                @click=";[router.push(`/career/${job.key}`)]"
              >
                <span>{{ job.icon }}</span>
                <div
                  class="w-full flex flex-col md:flex-row lg:flex-row justify-between items-start md:items-center lg:items-center"
                >
                  <div
                    class="text-m-13-regular group-hover:text-primary md:text-t-16-regular lg:text-d-18-regular text-black"
                  >
                    {{ job.name }}
                  </div>
                  <span
                    class="text-left w-[80px] md:pt-2 lg:pt-6 group-hover:text-gray-700 text-12-medium md:text-13-medium lg:text-13-medium text-gray-450"
                    >{{ job.fulltime ? 'Full-time' : 'Part-time' }}</span
                  >
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-footer fp-auto-height">
      <Footer></Footer>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import Footer from '/Components/EN/Footer.vue'
import { formatDistanceToNowStrict } from 'date-fns'
import { useHead } from '@vueuse/head'
const router = useRouter()
const posted = new Date(2021, 9, 17)
const today = new Date()

const careerId = ref(-1)
const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}

const JOBS = [
  // {
  //   key: 'head-of-marketing',
  //   name: 'Head of Marketing, B2B SaaS',
  //   fulltime: true,
  // },
  {
    key: 'graphic-designer',
    icon: `🎨`,
    name: 'Mid-level Graphic Designer',
    fulltime: true,
  },
  // { key: 'head-of-sales', name: 'Head of Sales', fulltime: true },
  {
    key: 'architect-architectural-designer',
    icon: '🏗️',
    name: 'Architect / Architectural Designer',
    fulltime: true,
  },
  {
    key: 'project-analyst-real-estate-development',
    icon: '📊',
    name: 'Project Analyst, Real Estate Development',
    fulltime: false,
  },
  {
    key: 'strategic-account-executive',
    icon: '🎯',
    name: 'Strategic Account Executive',
    fulltime: true,
  },
  {
    key: 'business-development-marketing-intern',
    icon: '💼',
    name: ' Business Development & Marketing Intern',
    fulltime: true,
  },
]

useHead({
  title: `Zenerate Careers | Join us in revolutionizing real estate development`,
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai/career' }],
  meta: [
    {
      name: `description`,
      content: `Ready to unlock your full potential and create meaningful work? Explore career opportunities available at Zenerate!
`,
    },
    {
      name: 'twitter:title',
      content: `Zenerate Careers | Join us in revolutionizing real estate development`,
    },
    {
      name: 'twitter:description',
      content: `Ready to unlock your full potential and create meaningful work? Explore career opportunities available at Zenerate!
`,
    },
    { name: 'keywords', content: 'zenerate' },
    {
      name: 'twitter:image',
      content: 'https://www.zenerate.ai/img/logo_og.png',
    },
    {
      name: 'og:url',
      content: 'https://www.zenerate.ai/career',
    },
    {
      name: 'og:title',
      content: `Zenerate Careers | Join us in revolutionizing real estate development`,
    },
    {
      name: 'og:description',
      content: `Ready to unlock your full potential and create meaningful work? Explore career opportunities available at Zenerate!
`,
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
</script>
<style lang="scss" scoped>
.section-inner {
  @include en-desktop {
    padding: 0px 20px !important;
    height: 900px !important;
  }
}
</style>
