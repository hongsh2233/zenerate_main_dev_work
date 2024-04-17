<template>
  <div class="min-w-[320px]">
    <section>
      <div
        class="mx-auto mt-[162px] w-[280px] min-w-[280px] md:mt-[220px] md:w-[644px] lg:mt-[236px] lg:w-[644px]"
      >
        <div class="flex flex-col">
          <p
            class="mb-24 text-center text-30 font-regular md:mb-20 md:text-44 md:font-light lg:mb-20 lg:text-44 lg:font-light"
          >
            <span class="font-semibold md:font-medium lg:font-medium"
              >AI-Powered <br class="md:hidden lg:hidden" />Feasibility
              Solutions</span
            >for Real Estate <br class="md:hidden lg:hidden" />Development
          </p>

          <p
            class="mb-24 text-center text-16 font-regular md:mb-30 md:text-18 md:text-gray-700 lg:mb-30 lg:text-18 lg:text-gray-700"
          >
            Zenerate is revolutionizing feasibility<br
              class="md:hidden lg:hidden"
            />
            studies with AI-powered solutions<br />
            to streamline inefficient processes,&nbsp;<br
              class="md:hidden lg:hidden"
            />save time and maximize returns.
          </p>
        </div>
      </div>

      <span
        class="learn-more-button text-14-medium mx-auto mb-26 flex w-fit cursor-pointer flex-row items-center justify-center !text-primary hover:!text-core-700 md:mb-44 md:text-18 lg:text-18"
        @click="moveToProductSection"
        ><IconBase
          icon-name="arrow-down"
          :width="22"
          :height="22"
          class="mr-10 md:hidden lg:hidden" />Learn More About&nbsp;<br
          class="md:hidden lg:hidden" />Our Products & Services<IconBase
          icon-name="arrow-down"
          :width="24"
          :height="24"
          class="ml-10 hidden md:block lg:block"
      /></span>

      <div class="mx-auto w-full max-w-[1200px]">
        <video
          class="w-full"
          :autoplay="true"
          :muted="true"
          :loop="true"
          :playsinline="true"
          src="/public/en/landing/landing_hero_background.mp4"
          alt=""
        />
      </div>
    </section>

    <section
      class="relative flex flex-col items-center pt-20 pb-72 md:pb-96 lg:pb-156"
    >
      <div
        class="absolute top-[-110px] h-0 w-full"
        ref="startOfProductSection"
      ></div>
      <ProductCard product="zenerate-modular" class="mb-20 lg:mb-30" />
      <ProductCard product="ai-consulting" class="mb-20 lg:mb-30" />
      <ProductCard product="zmaps" />
    </section>

    <section
      class="h-[460px] bg-coolgray-50 py-14 px-8 md:h-[490px] md:py-50 md:px-80 lg:h-[490px] lg:py-60 lg:px-120"
    >
      <Carousel
        :slideCount="TESTIMONIAL_DATA.length"
        :mouseWheelControl="false"
        class="testmonial-carousel select-none"
      >
        <template v-for="(data, idx) in TESTIMONIAL_DATA" #[`slide${idx}`]>
          <div class="flex flex-col items-center" :class="data.key">
            <p
              v-html="data.content"
              class="mb-28 w-[220px] min-w-[220px] text-center text-16 md:w-[500px] md:text-22 lg:w-[624px] lg:text-24"
            ></p>
            <div class="flex flex-row items-center">
              <img
                :src="`/logo/${data.logoImg}`"
                :alt="`${data.logoText}`"
                class="logo-img"
              />
              <div
                class="ml-14 flex flex-col whitespace-nowrap text-12 text-gray-700 md:ml-24 md:text-16 lg:ml-24 lg:text-16"
              >
                <span
                  class="text-14 font-medium text-black md:text-18 lg:text-18"
                >
                  {{ data.name }},
                </span>
                <span class="md:hidden lg:hidden">{{
                  data.positionAbbrev ?? data.position
                }}</span>
                <span class="hidden md:block lg:block">{{
                  data.position
                }}</span>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </section>

    <!-- <section class="blue-wave-wrapper relative h-[364px] bg-black lg:h-[328px]">
      <div
        class="absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center bg-black/50 px-20 pt-88 md:pt-[114px] lg:pt-[100px]"
      >
        <span
          class="mb-30 w-[320px] text-center text-22 text-white md:mb-44 md:w-[680px] md:text-26 lg:w-[720px] lg:text-28"
          >Ready to step into the future of real estate development?</span
        >
        <div class="flex flex-col items-center md:flex-row lg:flex-row">
          <button
            class="demo-button-gtm text-16-semibold mx-auto mb-6 h-[48px] w-[250px] rounded-5 bg-primary text-center leading-[48px] !text-white duration-300 hover:!text-core-200 md:mr-10 md:mb-0 md:h-[56px] md:w-[236px] md:text-20 md:leading-[56px] lg:mb-0 lg:mr-10 lg:h-[56px] lg:w-[236px] lg:text-20 lg:leading-[56px]"
            @click="openCalendlyPopup"
          >
            Get a Demo
          </button>
          <router-link
            :to="{ name: 'en-contact', query: getCurrentUtmQuery(router) }"
            class="text-16-semibold mx-auto h-[48px] w-[250px] rounded-5 bg-white text-center leading-[48px] duration-300 hover:!bg-gray-200 md:h-[56px] md:w-[236px] md:text-20 md:leading-[56px] lg:h-[56px] lg:w-[236px] lg:text-20 lg:leading-[56px]"
            >Contact Us
          </router-link>
        </div>
      </div>
    </section> -->

    <!-- WAVE BANNER -->
    <section
      class="blue-wave-wrapper relative h-[406px] bg-black md:h-[363px] lg:h-[326px]"
    >
      <div
        class="absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center bg-black/50 px-20 pt-76 md:pt-[85px] lg:pt-[67px]"
      >
        <span
          class="mb-18 w-[260px] text-center text-22 text-white md:mb-12 md:w-full md:text-26 lg:mb-12 lg:w-full lg:text-28"
          >Interested in Non-Modular or Stick-Build Solutions?</span
        >
        <span
          class="mb-30 w-[300px] text-center text-16 text-white md:mb-40 md:w-full md:text-18 lg:mb-32 lg:w-full lg:text-20"
          >Join the waitlist now for early access
          <br class="md:hidden lg:hidden" />and exclusive discounts on Zenerate
          App, <br class="lg:hidden" />launching in June 2024.</span
        >

        <div
          class="flex h-58 w-[330px] flex-row items-center justify-center rounded-6 border-gray-100 bg-white p-4 shadow-200 md:w-[380px] lg:w-[380px]"
        >
          <template v-if="bannerEmail.isSent">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="12.1782"
                cy="12"
                rx="11.8207"
                ry="12"
                fill="#EBEDFE"
              />
              <path
                d="M23.0361 1.81787L22.9074 1.97012L22.9111 1.97441L19.4387 6.0958L10.993 16.1219C10.8131 16.3357 10.5728 16.445 10.3319 16.445C10.1878 16.445 10.0436 16.405 9.91113 16.3264L10.4219 16.8117L11.1933 17.5443C11.3645 17.7066 11.5715 17.7874 11.7786 17.7874C12.0195 17.7874 12.2597 17.6787 12.4396 17.4643L24.3577 3.31675L23.0361 1.81787Z"
                fill="#4848FF"
              />
              <path
                d="M19.4358 6.09106L11.7092 15.2623L10.2872 13.9114L10.2829 13.9071L5.59493 9.45265L4.42432 11.1124L8.98661 15.4467L8.99093 15.451L9.91139 16.3259C10.0439 16.4045 10.188 16.4446 10.3322 16.4446C10.5731 16.4446 10.8134 16.3359 10.9933 16.1215L19.4395 6.09607L19.4358 6.09106Z"
                fill="#4848FF"
                fill-opacity="0.4"
              />
            </svg>
            <span class="text-16-medium ml-10">Thank you for Signing Up!</span>
          </template>
          <template v-else>
            <div class="relative">
              <input
                id="modular-waitlist-input-gtm"
                ref="bannerEmailInput"
                type="text"
                inputmode="email"
                :spellcheck="false"
                placeholder="Email Address"
                v-model="bannerEmail.inputValue"
                class="h-50 w-[188px] border-none pl-12 md:w-[211px] lg:w-[211px]"
                @focus="bannerEmail.showErrorMsg = false"
              />

              <span
                v-if="bannerEmail.showErrorMsg"
                @click="hideBannerEmailErrorMsg"
                class="absolute top-0 left-0 flex h-50 w-[188px] items-center bg-white px-12 py-4 text-12 text-red-500 md:w-[211px] md:text-14 lg:w-[211px] lg:text-14"
                >Please enter a valid email.</span
              >
            </div>
            <button
              id="modular-waitlist-submit-button-gtm"
              class="text-14-medium ml-4 h-50 w-[130px] min-w-[130px] rounded-4 bg-primary text-white hover:bg-core-700 md:w-[157px] md:min-w-[157px] lg:w-[157px] lg:min-w-[157px]"
              @click="sendBannerEmail"
            >
              Join Waitlist
            </button>
          </template>
        </div>
      </div>
    </section>

    <section class="section section-footer fp-auto-height pt-52 md:pt-0">
      <Footer />
    </section>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import Emitter from '/Libraries/bus'
import ApiService from '/Services/api'
import Validation from '/Utils/Validation'
import { getCurrentUtmQuery } from '/Utils/index'
import { MENU_EVENT } from '/Constants/eventConstant'
import { ProductCard, Carousel, Footer, IconBase } from '/Components/EN'

const router = useRouter()

const openCalendlyPopup = () => {
  Emitter.emit(MENU_EVENT.TOGGLE_CALENDLY_POPUP, {
    flag: true,
    trigger: 'laststrip',
  })
}

const startOfProductSection = ref(null)
const moveToProductSection = () => {
  startOfProductSection.value.scrollIntoView({ behavior: 'smooth' })
}

const TESTIMONIAL_DATA = [
  {
    key: 'oltman',
    content:
      "Oltmans can safely recommend their product-services&nbsp;<br class='hidden lg:block' />to all CRE professionals looking to&nbsp;<br class='lg:hidden'/>expand their knowledge and footprint on their respective markets.&nbsp;<br class='hidden lg:block' />It's been a pleasure to&nbsp;<br class='hidden md:block' />work with the Zenerate team and look forward to seeing their next set of ideas&nbsp;/&nbsp;innovative&nbsp;<br class='hidden md:block lg:block'/>solutions in the near future.",
    logoImg: 'logo_color_oltman.png',
    logoText: 'oltmans construction',
    name: 'John Dang',
    position: 'Director of Business Development',
    positionAbbrev: 'Director of Business Dev.',
  },
  {
    key: 'miranda',
    content:
      "Z-maps completely transformed our prospecting workflow by visually mapping LA's development pipeline, enabling us to easily&nbsp;<br class='md:hidden lg:hidden'/>identify work&nbsp;<br class='hidden md:block' />density and bidding opportunities.&nbsp;<br class='md:hidden lg:hidden' />Its overwhelming data and potential for growth make it an invaluable tool for streamlining operations&nbsp;<br class='hidden md:block' />and expanding our business.",
    logoImg: 'logo_color_miranda.png',
    logoText: 'miranda logistics',
    name: 'Andrew Choe',
    position: 'Business Development Manager',
    positionAbbrev: 'Business Dev. Manager',
  },
  {
    key: 'cushman',
    content:
      'Already on 8 different residential/mixed use projects, Zenerate was able to explore all possible development scenarios, presenting us with recommended development plans. These contributions and more have helped us increase the max sales price of each project successfully.',
    logoImg: 'logo_color_cushman.png',
    logoText: 'cushman and wakefield',
    name: 'JH Kim',
    position: 'Senior Manager, Capital Markets Group',
    positionAbbrev: 'Senior Manager',
  },
  {
    key: 'neovalue',
    content:
      'We looked for a site in Los Angeles to develop a mixed-use project and reviewed tons of sites. Zenerate helped us verify development potential including building uses, density, maximum FAR, cashflow in a timely manner. Utilizing AI solutions such as Zenerate becomes a must and I would highly recommend it to my fellow developers.',
    logoImg: 'logo_color_neovalue.png',
    logoText: 'neovalue',
    name: 'Anna Lee',
    position: 'Architecture Department Lead',
    positionAbbrev: 'Architecture Dept. Lead',
  },
]

const bannerEmail = ref<{
  inputValue: string
  showErrorMsg: boolean
  isSent: boolean
  isLoading: boolean
}>({
  inputValue: '',
  showErrorMsg: false,
  isSent: false,
  isLoading: false,
})
const bannerEmailInput = ref()
const showBannerEmailErrorMsg = () => {
  bannerEmail.value.showErrorMsg = true
}
const hideBannerEmailErrorMsg = () => {
  bannerEmail.value.showErrorMsg = false
  bannerEmailInput.value.focus()
}

let timeoutId = null
watch(
  () => bannerEmail.value.showErrorMsg,
  (flag) => {
    if (flag === true) {
      timeoutId = setTimeout(() => {
        bannerEmail.value.showErrorMsg = false
      }, 1600)
    } else {
      clearTimeout(timeoutId)
    }
  }
)
const sendBannerEmail = async () => {
  const isValid =
    Validation.email(bannerEmail.value.inputValue) &&
    bannerEmail.value.inputValue.trim() !== ''
  if (isValid) {
    try {
      bannerEmail.value.isLoading = true
      await ApiService.XSLX_TEST('AppWaitlist', {
        email: bannerEmail.value.inputValue,
      })
      // await ApiService.ACTIVE_CAMPAIGN({
      //   email: bannerEmail.value.inputValue,
      //   tag: 'modular',
      // })
      bannerEmail.value.isLoading = false
      bannerEmail.value.isSent = true
      bannerEmail.value.inputValue = ''
    } catch (e) {
      console.error(e)
    }
  } else {
    showBannerEmailErrorMsg()
  }
}
</script>
<style lang="scss" scoped>
.learn-more-button {
  svg {
    :deep(path) {
      fill: theme('colors.primary.DEFAULT') !important;
    }
  }

  &:hover {
    svg {
      :deep(path) {
        fill: theme('colors.core.700') !important;
      }
    }
  }
}

.testmonial-carousel {
  .oltman {
    .logo-img {
      width: 116px;
      @include en-tablet {
        width: 66px;
      }
      @include en-mobile {
        width: 64px;
      }
    }
  }
  .miranda {
    .logo-img {
      width: 304px;
      @include en-tablet {
        width: 184px;
      }
      @include en-mobile {
        width: 112px;
      }
    }
  }
  .cushman {
    .logo-img {
      width: 176px;
      @include en-tablet {
        width: 108px;
      }
      @include en-mobile {
        width: 92px;
      }
    }
  }
  .neovalue {
    .logo-img {
      width: 184px;
      @include en-tablet {
        width: 112px;
      }
      @include en-mobile {
        width: 92px;
      }
    }
  }
}

.blue-wave-wrapper {
  background-image: url('/public/en/img/blue_wave.png');
  background-repeat: no-repeat;
  background-position: bottom center;
}
</style>
