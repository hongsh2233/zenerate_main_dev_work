<template>
  <div class="min-w-[280px]">
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
          src="/public/en/landing/landing_hero.mov"
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
      <ProductCard product="zmaps" class="mb-20 lg:mb-30" />
      <ProductCard product="zenerate-app" class="mb-20 lg:mb-30" />
      <ProductCard product="ai-consulting" />
    </section>

    <section class="h-[460px] bg-coolgray-50 py-48 md:h-[490px] lg:h-[490px]">
      <Carousel
        :slideCount="TESTMONIAL_DATA.length"
        :mouseWheelControl="false"
        class="testmonial-carousel"
      >
        <template v-for="(data, idx) in TESTMONIAL_DATA" #[`slide${idx}`]>
          <div class="flex flex-col items-center" :class="data.key">
            <p
              class="mb-28 w-[220px] min-w-[220px] text-center text-18 md:w-[500px] md:text-22 lg:w-[624px] lg:text-28"
            >
              {{ data.content }}
            </p>
            <div class="flex flex-row items-center">
              <img
                :src="`/logo/${data.logoImg}`"
                :alt="`${data.logoText}`"
                class="logo-img"
              />
              <div class="ml-14 text-14 text-gray-700 md:text-18 lg:text-18">
                <span class="font-medium text-black md:text-16 lg:text-16"
                  >{{ data.name }},</span
                ><br />{{ data.position }}
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </section>

    <section class="blue-wave-wrapper relative h-[364px] bg-black lg:h-[328px]">
      <div
        class="absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center bg-black/50 px-20 pt-88 md:pt-[114px] lg:pt-[100px]"
      >
        <span
          class="mb-30 w-[320px] text-center text-22 text-white md:mb-44 md:w-[680px] md:text-26 lg:w-[720px] lg:text-28"
          >Ready to step into the future of real estate development?</span
        >
        <div class="flex flex-col items-center md:flex-row lg:flex-row">
          <button
            class="text-16-semibold mx-auto mb-6 h-[48px] w-[250px] rounded-5 bg-primary text-center leading-[48px] !text-white duration-300 hover:!text-core-200 md:mr-10 md:mb-0 md:h-[56px] md:w-[236px] md:text-20 md:leading-[56px] lg:mb-0 lg:mr-10 lg:h-[56px] lg:w-[236px] lg:text-20 lg:leading-[56px]"
            @click="() => toggleCalendlyPopup(true)"
          >
            Get a Demo
          </button>
          <router-link
            :to="{ name: 'en-contact' }"
            class="text-16-semibold mx-auto h-[48px] w-[250px] rounded-5 bg-white text-center leading-[48px] duration-300 hover:!bg-gray-200 md:h-[56px] md:w-[236px] md:text-20 md:leading-[56px] lg:h-[56px] lg:w-[236px] lg:text-20 lg:leading-[56px]"
            >Contact Us
          </router-link>
        </div>
      </div>
    </section>

    <section class="section section-footer fp-auto-height pt-52 md:pt-0">
      <Footer />
    </section>

    <CalendlyPopup
      v-if="showCalendlyPopup"
      @togglePopup="toggleCalendlyPopup"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import {
  ProductCard,
  Carousel,
  Footer,
  IconBase,
  CalendlyPopup,
} from '/Components/EN'

const startOfProductSection = ref(null)
const moveToProductSection = () => {
  startOfProductSection.value.scrollIntoView({ behavior: 'smooth' })
}

const showCalendlyPopup = ref(false)
const toggleCalendlyPopup = (flag: boolean) => {
  const fl = flag ?? !showCalendlyPopup.value
  showCalendlyPopup.value = fl
}

const TESTMONIAL_DATA = [
  {
    key: 'cushman',
    content:
      'Already on 8 projects, Zenerate was able to explore all possible development scenarios. These contributions have helped us increase the max sales price of each project successfully.',
    logoImg: 'logo_color_cushman.png',
    logoText: 'cushman and wakefield',
    name: 'JH Kim',
    position: 'Senior Manager',
  },
  // {
  //   key: 'cushman',
  //   content:
  //     'Already on 8 projects, Zenerate was able to explore all possible development scenarios. These contributions have helped us increase the max sales price of each project successfully.',
  //   logoImg: 'logo_color_cushman.png',
  //   logoText: 'cushman and wakefield',
  //   name: 'JH Kim',
  //   position: 'Senior Manager',
  // },
]
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
  .cushman {
    .logo-img {
      width: 304px;
      @include en-tablet {
        width: 184px;
      }
      @include en-mobile {
        width: 152px;
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
