<template>
  <div class="min-w-[280px]">
    <section class="section section-landing">
      <div
        class="py-40 md:py-60 mb-10 lg:pt-100 px-10 md:px-30 lg:px-30 lg:pb-60 w-[320px] md:w-[630px] lg:w-[630px] mx-auto"
      >
        <div class="flex flex-col">
          <p
            class="text-26 font-regular leading-[135%] md:mb-28 lg:mb-20 mb-20 text-left md:text-center lg:text-center md:text-30 lg:text-34"
          >
            <span>Making <strong>feasibility</strong>&nbsp;</span>
            <span><strong>studies easier</strong></span>
            <br />
            <span>and <strong>projects more&nbsp;</strong></span>
            <span><strong>profitable</strong>&nbsp;</span>
            <span>through&nbsp;</span>
            <span>the power of AI</span>
          </p>

          <p
            class="text-14 font-regular leading-[150%] md:text-16 lg:text-18 text-left md:text-center lg:text-center"
          >
            <span>Zenerate provides products and&nbsp;</span>
            <span>services that automate<br /></span>
            <span>and optimize key aspects of the</span>
            <span>feasibility study process.</span>
          </p>
        </div>
      </div>

      <!-- <div class="arrow-bottom arrow-blue">
          <Arrow />
        </div> -->
    </section>

    <section
      class="section flex flex-col lg:flex-row items-center lg:items-start lg:justify-center"
    >
      <article
        class="case mb-16 slider-group lg:mr-12 lg:w-[490px] shadow-200 overflow-x-hidden"
      >
        <div
          class="w-full h-114 md:h-172 lg:h-172 bg-core-500 justify-between text-white flex flex-col px-18 pt-18 pb-14 md:px-28 md:pt-24 md:pb-20 lg:px-28 lg:pt-24 lg:pb-20"
        >
          <p class="text-18 font-regular leading-[150%] md:text-26 lg:text-26">
            Explore all possibilities,<br />
            <strong> maximize returns. </strong>
          </p>
          <p
            class="text-right text-12-medium md:text-18-medium lg:text-18-medium"
          >
            Zenerate™ App
          </p>
        </div>
        <div
          class="slider-wrapper first-slider relative w-full md:h-[506px] lg:h-[506px] h-[350px] overflow-hidden"
        >
          <template v-for="(src, index) in slider1Images" :key="index">
            <img
              class="w-full h-full"
              :src="src"
              :alt="`slider-image${index}`"
              rel="preload"
              decoding="async"
              loading="lazy"
            />
          </template>
          <div
            class="absolute top-[-10px] left-[-8px] w-[calc(100%_+_16px)] h-[calc(100%_+_16px)] inner-shadow"
          ></div>
        </div>
        <div
          class="flex flex-col lg:h-[508px] md:h-[508px] pt-38 pl-54 pr-30 pb-48 md:pl-60 md:pr-20 md:pt-60 md:pb-90 lg:pl-60 lg:pr-20 lg:pt-60 lg:pb-90"
        >
          <div class="flex flex-col mb-12 md:mb-20 lg:mb-20">
            <p
              class="text-primary md:text-18 lg:text-18 text-12 mb-8 md:mb-10 lg:mb-10 font-semibold"
            >
              The Zenerate™ App
            </p>
            <p
              class="text-20 font-regular text-black leading-[135%] md:text-28 lg:text-28"
            >
              Instantly evaluate<br />
              development potential<br />
              and maximize returns
            </p>
          </div>

          <div
            class="hidden-en-mobile lg:h-[108px] text-18 font-regular leading-[150%] mb-36 text-gray-700"
          >
            <p>
              An AI-powered feasibility study tool utilizing<br />
              generative design and advanced data<br />
              analytics that zenerates ALL development<br />
              possibilities within a given site.
            </p>
          </div>
          <div
            class="text-14 font-regular text-gray-700 leading-[150%] mb-22 hidden-en-desktop hidden-en-tablet"
          >
            <p>
              An AI-powered feasibility study tool<br />
              utilizing generative design and<br />
              advanced data analytics that <br />
              zenerates ALL development<br />
              possibilities within a given site.
            </p>
          </div>

          <button
            type="button"
            class="start-button w-[160px] bg-primary hover:text-core-200 text-white active:bg-core-700 active:text-white"
          >
            <router-link
              class="demo-link text-14 lg:text-16"
              :to="{ name: 'en-overview' }"
            >
              LEARN MORE
            </router-link>
          </button>
        </div>
      </article>
      <article class="case flex-col slider-group shadow-200 overflow-x-hidden">
        <div
          class="w-full h-114 md:h-172 lg:h-172 bg-purple-500 justify-between text-white flex flex-col px-18 pt-18 pb-14 md:px-28 md:pt-24 md:pb-20 lg:px-28 lg:pt-24 lg:pb-20"
        >
          <p class="text-18 font-regular leading-[150%] md:text-26 lg:text-26">
            Find your comps.
          </p>

          <div class="flex justify-end">
            <svg
              class="hidden-en-desktop hidden-en-tablet"
              width="58"
              height="18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.098.143H.898v16.98h17.2V.142Z" fill="#fff" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.672 3.781v1.456h3.502L6.427 9.239v1.395h6.45V9.178h-3.87l3.685-3.88V3.78h-6.02Zm-.245 8.308h6.45v1.456h-6.45v-1.456Z"
                fill="#914EFF"
              />
              <path
                d="M30.209 3.781c.85 0 1.517.24 2.002.78.485.478.789 1.197.789 2.096v3.953h-2.063V6.956c0-.42-.122-.779-.364-1.018-.243-.24-.546-.36-.971-.36-.425 0-.728.12-.97.36-.244.24-.365.599-.365 1.018v3.654h-2.063V6.956c0-.42-.121-.779-.364-1.018-.243-.24-.546-.36-.97-.36-.425 0-.729.12-.972.36-.242.24-.364.599-.364 1.018v3.654h-2.123V3.84h2.123v.839c.243-.3.486-.48.85-.659.364-.18.728-.24 1.153-.24.485 0 .97.12 1.395.3.425.24.728.539.971.958.243-.36.546-.659.97-.898.365-.24.85-.36 1.336-.36ZM34.474 7.255c0-.718.122-1.317.364-1.856.243-.54.607-.959 1.092-1.198.486-.3.971-.42 1.517-.42.486 0 .91.12 1.274.3.365.18.668.42.85.779V3.9h2.124v6.769H39.57V9.71c-.182.3-.485.6-.85.779-.364.18-.788.3-1.274.3-.546 0-1.092-.12-1.517-.42-.485-.3-.85-.719-1.092-1.198a5.13 5.13 0 0 1-.364-1.917Zm5.097 0c0-.539-.121-.898-.425-1.197a1.43 1.43 0 0 0-1.031-.42c-.364 0-.79.12-1.093.42-.303.299-.424.718-.424 1.197 0 .54.121.959.425 1.258.303.3.667.42 1.092.42.424 0 .788-.12 1.031-.42.304-.359.425-.718.425-1.258Z"
                fill="#fff"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M46.142 4.08c-.364.18-.667.48-.85.78V3.84H43.17v9.704h2.124V9.65c.182.36.485.6.85.78.363.179.788.299 1.273.299.546 0 1.032-.12 1.517-.42.486-.24.85-.659 1.092-1.198.304-.539.425-1.138.425-1.857 0-.718-.182-1.317-.425-1.856-.303-.54-.606-.899-1.092-1.198-.425-.3-.97-.42-1.517-.42-.485 0-.91.12-1.274.3Zm1.726 1.978c.306.299.428.658.428 1.197 0 .54-.122.899-.428 1.258-.244.3-.61.42-1.039.42-.428 0-.794-.12-1.1-.42-.305-.3-.428-.718-.428-1.258 0-.479.123-.898.428-1.197.306-.3.734-.42 1.1-.42.367 0 .734.12 1.04.42Z"
                fill="#fff"
              />
              <path
                d="M54.84 10.787c-.613 0-1.163-.121-1.591-.302a2.245 2.245 0 0 1-1.102-.846c-.244-.362-.428-.785-.428-1.208h2.08c0 .242.123.423.306.604.184.181.428.242.734.242.245 0 .49-.06.612-.121.122-.12.245-.242.245-.423a.454.454 0 0 0-.306-.422c-.184-.121-.55-.182-.98-.302-.488-.121-.917-.242-1.223-.363a2.028 2.028 0 0 1-.856-.604 1.672 1.672 0 0 1-.367-1.087c0-.362.122-.724.306-1.087.244-.302.55-.604.979-.785a3.82 3.82 0 0 1 1.529-.302c.856 0 1.53.242 2.019.665.489.422.795.966.856 1.69h-1.957c-.062-.241-.123-.422-.306-.543a1.245 1.245 0 0 0-.673-.181c-.245 0-.428.06-.55.12-.123.061-.184.242-.184.363 0 .181.122.362.306.423.244.12.55.18.978.302.49.12.918.241 1.224.362.306.12.611.302.856.604s.367.664.367 1.147c0 .423-.122.785-.367 1.087-.245.302-.55.544-.979.725-.489.181-.978.242-1.529.242Z"
                fill="#fff"
              />
            </svg>

            <svg
              class="hidden-en-mobile"
              width="87"
              height="26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M26.338 0H0v26h26.338V0Z" fill="#fff" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.842 5.571V7.8h5.361l-5.737 6.129v2.135h9.876v-2.228h-5.926l5.644-5.943V5.57H8.842Zm-.376 12.722h9.876v2.228H8.466v-2.228Z"
                fill="#914EFF"
              />
              <path
                d="M44.882 5.571c1.3 0 2.323.367 3.066 1.193.743.734 1.208 1.834 1.208 3.21v6.053h-3.159v-5.595c0-.641-.186-1.192-.557-1.559-.372-.367-.837-.55-1.487-.55-.65 0-1.115.183-1.486.55-.372.367-.558.918-.558 1.56v5.594H38.75v-5.595c0-.641-.186-1.192-.557-1.559-.372-.367-.837-.55-1.487-.55-.65 0-1.115.183-1.487.55-.371.367-.557.918-.557 1.56v5.594H31.41V5.663h3.252v1.284c.372-.458.743-.734 1.3-1.009.558-.275 1.116-.367 1.766-.367.743 0 1.487.184 2.137.459.65.367 1.115.825 1.487 1.468a4.279 4.279 0 0 1 1.486-1.376c.558-.367 1.3-.55 2.044-.55ZM51.414 10.891c0-1.1.185-2.018.557-2.843.372-.826.93-1.468 1.672-1.835.744-.458 1.487-.642 2.323-.642.743 0 1.394.184 1.951.459.558.275 1.022.642 1.301 1.192V5.755h3.252v10.364h-3.252v-1.467a3.264 3.264 0 0 1-1.3 1.192 4.365 4.365 0 0 1-1.952.459c-.836 0-1.672-.184-2.323-.643a4.55 4.55 0 0 1-1.672-1.834 7.856 7.856 0 0 1-.557-2.935Zm7.804 0c0-.825-.186-1.376-.65-1.834a2.19 2.19 0 0 0-1.58-.642c-.557 0-1.208.183-1.672.642-.465.458-.65 1.1-.65 1.834 0 .826.185 1.468.65 1.926.464.459 1.022.642 1.672.642.65 0 1.208-.183 1.58-.642.464-.55.65-1.1.65-1.926Z"
                fill="#fff"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M69.28 6.03a3.264 3.264 0 0 0-1.3 1.192V5.663h-3.253v14.859h3.252V14.56c.279.55.743.917 1.3 1.192a4.365 4.365 0 0 0 1.952.459c.836 0 1.58-.184 2.323-.642.743-.367 1.3-1.01 1.672-1.835.465-.825.65-1.742.65-2.843 0-1.1-.278-2.018-.65-2.843-.464-.826-.929-1.376-1.672-1.835-.65-.458-1.487-.642-2.323-.642-.743 0-1.394.184-1.951.459Zm2.643 3.027c.468.458.655 1.009.655 1.834 0 .826-.187 1.376-.655 1.926-.374.459-.936.642-1.59.642-.656 0-1.217-.183-1.685-.642-.468-.458-.655-1.1-.655-1.926 0-.734.187-1.376.655-1.834.468-.459 1.123-.642 1.684-.642.562 0 1.123.183 1.591.642Z"
                fill="#fff"
              />
              <path
                d="M82.597 16.298c-.936 0-1.78-.185-2.435-.462-.75-.278-1.312-.74-1.686-1.295-.375-.555-.656-1.202-.656-1.85h3.185c0 .37.187.648.468.925.281.278.656.37 1.124.37.375 0 .75-.092.937-.185.187-.185.375-.37.375-.647a.696.696 0 0 0-.469-.647c-.28-.185-.843-.278-1.498-.463-.75-.185-1.405-.37-1.874-.554-.468-.185-.936-.463-1.311-.925-.375-.463-.562-1.017-.562-1.665 0-.554.187-1.11.468-1.664.375-.462.843-.925 1.499-1.202a5.849 5.849 0 0 1 2.342-.463c1.311 0 2.341.37 3.09 1.018.75.647 1.219 1.48 1.312 2.589H83.91c-.094-.37-.188-.648-.469-.832-.28-.185-.655-.278-1.03-.278a1.89 1.89 0 0 0-.843.185c-.187.093-.281.37-.281.555 0 .277.187.555.468.647.375.185.843.278 1.499.463.75.184 1.405.37 1.873.554.469.185.937.463 1.312.925S87 12.414 87 13.154c0 .647-.187 1.202-.562 1.665a3.721 3.721 0 0 1-1.499 1.11c-.75.277-1.499.37-2.342.37Z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
        <div
          class="slider-wrapper second-slider relative w-full md:h-[506px] lg:h-[506px] h-[350px] overflow-hidden"
        >
          <template v-for="(src, index) in slider2Images" :key="index">
            <img
              class="w-full h-full"
              :src="src"
              :alt="`slider-image${index}`"
              decoding="async"
              loading="lazy"
            />
          </template>
          <div
            class="absolute top-[-10px] left-[-8px] w-[calc(100%_+_16px)] h-[calc(100%_+_16px)] inner-shadow"
          ></div>
        </div>
        <div
          class="flex flex-col lg:h-[508px] md:h-[508px] pt-38 pl-54 pr-30 pb-48 md:pl-60 md:pr-20 md:pt-60 md:pb-90 lg:pl-60 lg:pr-20 lg:pt-60 lg:pb-90"
        >
          <div class="flex flex-col mb-12 md:mb-20 lg:mb-20">
            <p class="flex flex-nowrap mb-6 md:mb-10 lg:mb-10">
              <span
                class="bg-purple-50 mr-4 text-purple-500 text-12-medium md:text-14-semibold lg:text-14-semibold rounded-26 py-4 px-9 w-fit"
                >New Product</span
              >
              <span
                class="bg-purple-50 text-purple-500 text-12-medium md:text-14-semibold lg:text-14-semibold rounded-26 py-4 px-9 w-fit"
                >Free</span
              >
            </p>
            <p
              class="text-20 font-regular text-black leading-[135%] md:text-28 lg:text-28"
            >
              Your city's latest<br />
              real estate <br />
              development map
            </p>
          </div>

          <div
            class="hidden-en-mobile lg:h-[108px] text-18 font-regular leading-[150%] mb-28 text-gray-700"
          >
            <p>
              No more going through public records to <br />
              find information on competitors and gain <br />
              context on an area of interest.
            </p>
          </div>
          <div
            class="text-14 font-regular text-gray-700 leading-[150%] mb-22 hidden-en-desktop hidden-en-tablet"
          >
            <p>
              No more going through public <br />
              records to find information on <br />
              competitors and gain context on <br />
              an area of interest.
            </p>
          </div>

          <button
            type="button"
            class="start-button w-[254px] bg-purple-500 text-white active:bg-purple-700 active:text-white hover:text-purple-200"
          >
            <a
              class="demo-link text-14 lg:text-16"
              href="https://maps.zenerate.ai"
            >
              TRY Z-MAPS, IT'S FREE!
            </a>
          </button>
        </div>
      </article>
    </section>
    <section
      class="section section-partners pt-34 md:pt-98 lg:pt-120 pb-74 md:pb-126 lg:pb-126"
    >
      <div
        class="flex flex-col w-[320px] mx-auto md:w-[630px] px-12 lg:w-[1000px]"
      >
        <div class="flex flex-col mb-46 lg:flex-row">
          <div
            class="partners-item !mx-0 md:!mx-auto lg:!mx-auto hidden-en-tablet hidden-en-mobile"
          >
            <div
              class="item-logo"
              :style="{
                backgroundImage: `url('/logo/logo_color_cushman.png')`,
              }"
            ></div>
            <span
              class="text-gray-700 md:text-18 lg:text-18 text-14 font-semibold pl-18"
              >James Kim, CEO</span
            >
          </div>
          <p
            class="text-14 font-regular md:text-center pl-12 lg:ml-40 text-gray-700 leading-[150%] md:text-18 lg:text-20"
          >
            Not only was Zenerate able to raise the valuation of our sites by an
            average of 23%, our clients and partners were blown away with the
            level of detail provided in our OMs. All within a fraction of the
            time it takes us to prepare our usual material. Utilizing Zenerate
            is now mandatory for us when valuing large scale sites, that's how
            valuable their software is.
          </p>

          <div
            class="partners-item !mx-0 md:!mx-auto lg:!mx-auto hidden-en-desktop"
          >
            <div
              class="item-logo"
              :style="{
                backgroundImage: `url('/logo/logo_color_cushman.png')`,
              }"
            ></div>
            <span
              class="text-gray-700 md:text-18 lg:text-18 text-14 font-semibold pl-18"
              >James Kim, CEO</span
            >
          </div>
        </div>

        <div class="flex flex-col mb-46 lg:flex-row">
          <div
            class="partners-item !mx-0 md:!mx-auto lg:!mx-auto hidden-en-tablet hidden-en-mobile"
          >
            <div
              class="item-logo"
              :style="{
                backgroundImage: `url('/logo/logo_color_neovalue.png')`,
              }"
            ></div>
            <span
              class="text-gray-700 md:text-18 lg:text-18 text-14 font-semibold"
              >James Kim, CEO</span
            >
          </div>
          <p
            class="text-14 font-regular pl-12 md:text-center lg:ml-40 text-gray-700 leading-[150%] md:text-18 lg:text-20"
          >
            As developers, our job is to ultimately maximize the potential
            returns within a given site. Zenerate, with their AI technology,
            showed us that even the most successful developers often fall short
            of truly maximizing returns. To my fellow developers around the
            world I suggest you put your ego aside and embrace PropTech, like
            Zenerate, as it is an absolute competitive advantage and will become
            a necessity within your workflow - as it is for us now.
          </p>
          <div
            class="partners-item !mx-0 md:!mx-auto lg:!mx-auto hidden-en-desktop"
          >
            <div
              class="item-logo"
              :style="{
                backgroundImage: `url('/logo/logo_color_neovalue.png')`,
              }"
            ></div>
            <span
              class="text-gray-700 md:text-18 lg:text-18 text-14 font-semibold pl-18"
              >James Kim, CEO</span
            >
          </div>
        </div>
      </div>
      <div class="partners-list">
        <div
          class="partners-item"
          v-for="(item, idx) in PartnersList"
          :key="idx"
        >
          <div
            class="item-logo"
            :style="{
              backgroundImage: `url('/logo/logo_color_${item.key}.png')`,
            }"
          ></div>
        </div>
      </div>
    </section>

    <section
      class="section flex w-full flex-col items-center py-72 lg:py-86 bg-gray-50"
    >
      <p
        class="mb-34 md:mb-22 lg:mb-32 text-center px-28 text-16 font-regular lg:text-22 md:text-20 leading-[150%]"
      >
        <span>Join some of the biggest names&nbsp;</span>
        <span>in real estate development</span>
        <br />
        <span>and brokerage in&nbsp;</span>
        <span><strong>saving hundreds of man-hours</strong>&nbsp;</span>
        <span>and <strong>maximizing profit.</strong></span>
      </p>
      <div
        class="flex flex-col w-[240px] md:w-fit lg:w-fit md:flex-row lg:flex-row"
      >
        <button
          type="button"
          class="start-button bg-primary hover:text-core-200 text-white active:bg-core-700 active:text-white mb-8 md:mb-0 px-24 md:mr-18 lg:mr-18 lg:mb-0"
        >
          <router-link
            class="demo-link text-14 lg:text-16"
            :to="{ name: 'en-demo' }"
          >
            BOOK A DEMO
          </router-link>
        </button>
        <button type="button" class="text-button px-24 bg-transparent">
          <router-link
            class="demo-link items-center justify-center flex text-14 lg:text-16"
            :to="{ name: 'en-contact' }"
          >
            <span class="mx-6">CONTACT US</span>
            <i class="material-icons text-20 lg:text-22">
              keyboard_arrow_right
            </i>
          </router-link>
        </button>
      </div>
      <div class="background-wave"></div>
    </section>

    <section class="section section-footer fp-auto-height">
      <Footer />
    </section>
  </div>
</template>
<script lang="ts" setup>
import {
  ref,
  watch,
  onMounted,
  onBeforeUnmount,
  onBeforeMount,
  computed,
  nextTick,
} from 'vue'
import { useRouter } from 'vue-router'
import Footer from '/Components/EN/Footer.vue'
import PartnersList from '/Constants/partners'
import { useGtag } from 'vue-gtag-next'
import ImagePreloader from '/Utils/ImagePreloader'
import { getOSByUserAgent } from '/Utils/getOSByUserAgent'

const { event } = useGtag()
const goToApp = () => {
  event('generate_lead', {
    event_category: 'engagement',
    event_label: '(not yet)',
  })
}

const userAgent = getOSByUserAgent()
const slider1PosterIndex = 1
const slider2PosterIndex = 3
const slider1Images = Array(9)
  .fill('')
  .map((v, i) => `/en/landing/slider1/pic${i + 1}.jpg`)
const slider2Images = Array(4)
  .fill('')
  .map((v, i) => `/en/landing/slider2/pic${i + 1}.jpg`)

onBeforeMount(() => {
  ImagePreloader.sequential([
    ...slider1Images[slider1PosterIndex],
    ...slider2Images[slider2PosterIndex],
  ])

  if (userAgent === 'web') {
    ImagePreloader.sequential(slider1Images)
    ImagePreloader.sequential(slider2Images)
  } else {
    ImagePreloader.sequential(slider1Images)
  }
})

onMounted(() => {
  if (userAgent !== 'web') {
    nextTick(() => {
      ImagePreloader.sequential(slider2Images)
    })
  }
})
</script>
<style lang="scss" scoped>
strong {
  font-weight: 600;
}

p,
span {
  cursor: default;
}

.arrow-blue {
  &::v-deep(path) {
    stroke: #4747ff;
  }
}

.inner-shadow {
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 8px inset;
  z-index: 999;
}

@keyframes showMe {
  0% {
    visibility: visible;
    z-index: 100;
    opacity: 0;
  }
  5% {
    visibility: visible;
    z-index: 100;
    opacity: 1;
  }

  97% {
    opacity: 1;
  }

  100% {
    visibility: hidden;
    z-index: 0;
    opacity: 0;
  }
}

@include en-desktop {
  @media (any-pointer: fine) {
    .slider-group:hover {
      .slider-wrapper {
        img {
          animation-play-state: running;
          opacity: 1;
        }
      }
    }
    .slider-group:not(:hover) {
      .slider-wrapper {
        img {
          animation-play-state: paused;
          z-index: -1 !important;
          opacity: 0 !important;
        }
      }
    }
  }

  @media (any-pointer: coarse) {
    .slider-group {
      .slider-wrapper {
        img {
          animation-play-state: running;
          opacity: 1;
        }
      }
    }
  }

  @media (any-hover: none) {
    .slider-group {
      .slider-wrapper {
        img {
          animation-play-state: running;
          opacity: 1;
        }
      }
    }
  }
}

.slider-wrapper {
  background-size: cover;
  background-position: center center;

  img {
    bottom: 0px;
    left: 0px;
    position: absolute;
    opacity: 0;
    object-fit: cover;
  }

  &.first-slider {
    background-image: url('/en/landing/slider1/pic2.jpg');

    img {
      animation: showMe 8s linear infinite 1s forwards;
      animation-play-state: paused;

      @include en-tablet {
        animation-play-state: running;
      }

      @include en-mobile {
        animation-play-state: running;
      }

      &:nth-child(1) {
        animation-delay: 1s;
        z-index: 9;
      }

      &:nth-child(2) {
        animation-delay: 2s;
        z-index: 8;
      }
      &:nth-child(3) {
        animation-delay: 3s;
        z-index: 7;
      }
      &:nth-child(4) {
        animation-delay: 4s;
        z-index: 6;
      }

      &:nth-child(5) {
        animation-delay: 5s;
        z-index: 5;
      }

      &:nth-child(6) {
        animation-delay: 6s;
        z-index: 4;
      }

      &:nth-child(7) {
        animation-delay: 6.7s;
        z-index: 3;
      }

      &:nth-child(8) {
        animation-delay: 7.4s;
        z-index: 2;
      }

      &:nth-child(9) {
        animation-delay: 8.1s;
        z-index: 1;
      }
    }

    &:hover img {
      animation-play-state: running;
      opacity: 1;
    }
  }

  @keyframes showMeSlow {
    0% {
      visibility: visible;
      z-index: 100;
      opacity: 0;
    }

    5% {
      opacity: 0.6;
    }

    8% {
      visibility: visible;
      z-index: 100;
      opacity: 1;
    }

    100% {
      visibility: hidden;
      z-index: 0;
      opacity: 1;
    }
  }

  &.second-slider {
    background-image: url('/en/landing/slider2/pic4.jpg');

    img {
      animation: showMeSlow 9s linear infinite 1s forwards;
      animation-play-state: paused;

      @include en-tablet {
        animation-play-state: running;
      }

      @include en-mobile {
        animation-play-state: running;
      }

      &:nth-child(1) {
        animation-delay: 1s;
        z-index: 9;
      }
      &:nth-child(2) {
        animation-delay: 3s;
        z-index: 8;
      }
      &:nth-child(3) {
        animation-delay: 5s;
        z-index: 7;
      }
      &:nth-child(4) {
        animation-delay: 7s;
        z-index: 6;
      }
    }

    &:hover img {
      animation-play-state: running;
      opacity: 1;
    }
  }
}

.start-button {
  height: 48px;
  font-weight: 600;
  border-radius: 5px;
  letter-spacing: 0.1em;
  transition: all ease-in-out 0.2s;
  z-index: 1;

  a {
    @include center-center();
    width: 100%;
    height: 100%;
    vertical-align: center;
    text-align: center;
  }

  // &:hover {
  //   @include elevation-3;
  //   color: rgba($white, 0.6);
  //   // transform: translateY(-2px);
  // }

  // &:active {
  //   @include elevation-3;
  //   color: rgba($white, 0.6);
  //   transform: translateY(-2px);
  // }
}

.case {
  @include relative();
  @include vertical-center();
  justify-content: flex-start;
  align-items: flex-start;
  width: 490px;
  // height: auto;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: white;

  @include en-tablet {
    height: auto;
  }

  @include en-mobile {
    max-width: 350px;
    width: 100%;
    height: auto;
    border-radius: 0px;
    margin-bottom: 0px;
    box-shadow: none;
    background-color: transparent;

    @media only screen and (min-width: 360px) {
      margin-bottom: 20px;
      border-radius: 10px;
      background-color: white;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.18);

      &:last-child {
        margin-bottom: 52px;
      }
    }
  }
}

.section-landing {
  @include relative;
  @include flex();
  padding: 40px 0px 0px;

  @include en-mobile {
    height: 100%;
    padding: 92px 0px 0px;
  }

  .section-inner {
    z-index: 2;
    padding: 0px 100px;
    height: 100%;

    @include en-tablet {
      padding: 0px 56px;
      width: 100% !important;
      max-width: 840px;
    }
    @include en-mobile {
      padding: 0px 10px;
      height: calc(100vh - 20px);
      max-height: 700px;
    }
  }

  .content-wrapper {
    @include flex();
    @include relative();
    width: 100%;
    flex-wrap: nowrap;

    @include en-mobile {
      height: 100%;
    }

    .content-title-wrapper {
      @include vertical-center();
      width: auto;
      max-width: 570px;
      z-index: 1;

      @include en-tablet {
        width: 760px;
        background: linear-gradient(
          90deg,
          #ffffff 60%,
          #ffffff 70%,
          rgba(255, 255, 255, 0) 100%
        );
        mix-blend-mode: normal;
      }

      @include en-mobile {
        width: 760px;
        margin: 0px auto 0px;
        align-items: center;
        background: linear-gradient(
          0deg,
          #ffffff 0%,
          #ffffff 6%,
          rgba(255, 255, 255, 0) 40%
        );
        mix-blend-mode: normal;
      }
    }
    .content-image-wrapper {
      @include absolute(top -32px right 0px);
      width: 400px;
      img {
        width: 400px;
      }

      @include en-mobile {
        @include absolute(top 60% right 50%);
        width: 250px;
        height: 250px;
        overflow: hidden;
        transform: translate(50%, 0%);
        img {
          width: 250px;
        }
      }
    }
  }

  .landing-background-wave {
    width: 100%;
    @include absolute(left 0 top 50%);
    z-index: 1;
    img {
      width: 100%;
      transform: translateY(-25%);
      opacity: 0.5;
      filter: grayscale(100%);
    }
  }
  .landing-contents {
    @include relative;
    @include vertical-center;
    z-index: 2;
    flex: 1;

    .content-heading {
      margin-bottom: 28px;
      letter-spacing: -0.2px;
      color: $text-darken;
      text-align: left;

      p:not(:first-child) {
        display: inline-block;
      }

      @include en-tablet {
        max-width: 600px;
      }
      @include en-mobile {
        max-width: 300px;
        margin: 0px auto 20px;
        text-align: center;
      }
      p {
        @include en-desktop {
          @include medium(52);
          strong {
            @include bold(52);
          }
        }

        @include en-tablet {
          @include medium(45);
          margin: auto;
          line-height: 54px;

          strong {
            @include bold(45);
            line-height: 54px;
          }
        }

        @include en-mobile {
          @include medium(29);
          text-align: center;
          line-height: 40px;
          strong {
            @include bold(29);
            line-height: 40px;
          }
        }
      }
      p span {
        color: #cbd0fe;
      }
    }
    .content-phrase {
      color: $text-darken;
      margin-bottom: 60px;
      max-width: 564px;
      text-align: left;

      p {
        @include regular(23);
        line-height: 36px;
        display: inline-block;
      }

      strong {
        font-weight: 600;
      }

      @include en-tablet {
        max-width: 530px;
        margin: 0px;
        margin-bottom: 46px;
        p {
          @include regular(20);
          line-height: 30px;
          width: auto;
        }
      }

      @include en-mobile {
        max-width: 300px;
        margin: 0px;
        margin-bottom: 34px;
        text-align: center;
        p {
          @include regular(16);
          line-height: 25px;
        }
      }
    }

    .content-button {
      @include bold(18);
      width: 240px;
      height: 60px;
      margin-top: 30px;
      background-color: $navigation;
      color: $white;
      border-radius: 10px;
      letter-spacing: 0.1em;
      transition: all ease-in-out 0.3s;
      margin: 0px !important;
      background: $navigation;

      &:hover {
        @include elevation-3;
        color: rgba($white, 0.8);
        transform: translateY(-3px);
      }

      @include en-tablet {
        margin: 0px auto;
      }

      @include en-mobile {
        margin: 0px 0px 258px !important;
      }
    }
  }
}

.section-partners {
  .partners-list {
    @include flex($justify: center);
    margin-bottom: 20px;
    z-index: 1;

    @include en-tablet {
      margin: auto;
      .partners-item {
        width: auto;
        max-width: 200px;
      }
    }

    @include en-mobile {
      width: 320px;
      flex-direction: column;
      margin: 0 auto;
      padding: 0 6px;
      align-items: flex-start;

      .partners-item {
        width: auto;
        max-width: 210px;
        min-width: 210px;
        margin-bottom: 10px;

        .item-logo {
          width: 100%;
          background-size: contain;
        }
      }
    }
  }
  .partners-item {
    @include center-center;
    @include relative;
    width: 200px;
    min-height: 68px;
    height: auto;
    max-width: 100%;
    margin-top: 20px;
    flex-direction: column;

    &:not(:last-child) {
      margin-right: 52px;

      @include en-tablet {
        margin-right: 30px;
      }

      @include en-mobile {
        margin-right: 0px;
      }
    }

    @include en-mobile {
      width: 210px;
      margin-bottom: 0px;

      align-items: flex-start;
    }
    .item-logo {
      width: 200px;
      height: 68px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      @include en-mobile {
        height: 70px;
        margin-left: 4px;
      }
    }
    .item-description {
      @include absolute(top 0 left 0);
      @include center-center;
      width: 100%;
      height: 100%;
      text-align: center;
      visibility: hidden;
      color: $black;
      background-color: rgba($white, 0.7);
      text-align: center;
    }
    &.fake {
      height: 0px;
      margin: 0;
      padding: 0;
    }
  }
}

.zenerate-launch-wrapper {
  @include vertical-center();
  background-color: #f8f8ff;
  border-radius: 20px;
  padding: 58px 60px 46px;
  max-width: 980px;
  margin: 0px auto 123px;

  @include en-tablet {
    width: 628px;
    padding: 69px 47px 45px;
    margin: 0px auto 133px;
  }

  @include en-mobile {
    width: 90%;
    padding: 38px 20px 20px;
    margin: 0px auto 43px;
  }

  .zenerate-launch-info-wrapper {
    @include flex($justify: space-between);
    flex-wrap: nowrap;
    margin-bottom: 50px;

    @include en-tablet {
      flex-direction: column;
      align-items: center;
      margin-bottom: 50px;
    }

    @include en-mobile {
      flex-direction: column;
      margin-bottom: 24px;
    }

    .zenerate-launch-title-wrapper {
      @include en-mobile {
        margin: 0px auto;
      }
      .title {
        @include semi-bold(30);
        color: $text-darken;

        strong {
          color: $navigation;
        }

        @include en-tablet {
          @include semi-bold(27);
          text-align: center;
        }

        @include en-mobile {
          @include semi-bold(23);
          max-width: 310px;
          text-align: left;
          line-height: 28px;
          margin-bottom: 10px;
          strong {
            @include semi-bold(23);
            line-height: 28px;
          }
        }
      }

      .subtitle {
        @include medium(19);
        color: $text-darken-8;
        margin-bottom: 40px;
        max-width: 326px;

        @include en-tablet {
          text-align: center;
          max-width: 500px;
          margin-bottom: 50px;
        }

        @include en-mobile {
          @include medium(15);
          text-align: left;
          margin-bottom: 30px;
          max-width: 297px;
          line-height: 20px;
        }
      }
    }

    .map-wrapper {
      width: 368px;
      height: 239px;
      margin: 0px auto;

      img {
        width: 368px;
        height: 239px;
        object-fit: cover;
      }

      @include en-mobile {
        text-align: center;
        width: 100%;
        max-width: 310px;
        height: auto;

        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }

  .zenerate-launch-desc-wrapper {
    @include medium(20);
    background-color: rgba($white, 0.7);
    border-radius: 20px;
    min-height: 106px;
    padding: 20px 58px;
    color: $text-darken-8;
    text-align: center;

    .zenerate-launch-desc {
      @include en-mobile {
        max-width: 305px;
        margin: 0px auto;
      }
    }

    .blue {
      font-weight: 600;
      color: $navigation;
      display: inline-block;
    }

    span {
      display: inline-block;
      width: auto;
    }

    @include en-tablet {
      @include medium(18);
      text-align: center;
      height: 135px;
      padding: 22px 32px;
    }

    @include en-mobile {
      @include medium(14);
      text-align: center;
      padding: 20px;
      text-align: left;
      line-height: 19px;
    }
  }
}
</style>
