<template>
  <div class="flex flex-col">
    <div class="section section-case-studies">
      <div class="section-inner inner-case-studies">
        <section
          class="flex flex-col relative pl-18 md:pl-0 pb-70 w-[288px] mx-auto items-start lg:items-start md:items-start lg:pl-44 lg:pr-0 lg:w-[1024px] md:pb-[260px] md:w-[660px] md:px-80"
        >
          <div
            class="w-[296px] hero-image-wrapper md:h-[456px] md:min-h-[456px] h-[296px] min-h-[296px] lg:min-h-[352px] lg:h-[352px] md:w-[480px] lg:w-[584px] mb-24 md:mb-0 lg:mb-0 md:absolute md:bottom-0 md:right-0 lg:absolute lg:bottom-[32px] lg:right-[-28px]"
          ></div>
          <div class="flex flex-col">
            <p
              class="text-primary md:text-18 lg:text-20 text-14 mb-8 font-semibold"
            >
              Zenerate™ Web App
            </p>
            <p
              class="text-24 font-medium mb-16 md:mb-20 lg:mb-20 lg:text-32 text-black leading-[135%] md:text-28"
            >
              Instantly evaluate<br />
              development potential<br />
              and maximize returns
            </p>
            <div
              class="hidden-en-mobile lg:h-[108px] md:text-16 lg:text-18 font-regular leading-[150%] mb-50 text-gray-700"
            >
              <p>
                Zenerate provides products and services <br />
                that automate and optimize key aspects <br />
                of the feasibility study process.
              </p>
            </div>
            <div
              class="text-14 font-regular text-gray-700 leading-[150%] mb-40 hidden-en-desktop hidden-en-tablet"
            >
              <p>
                Zenerate provides products and <br />
                services that automate and <br />
                optimize key aspects of <br />
                the feasibility study process.
              </p>
            </div>
          </div>
          <button
            type="button"
            class="start-button w-[260px] md:w-[160px] lg:w-[172px] bg-primary hover:text-core-200 text-white active:bg-core-700 active:text-white"
          >
            <router-link
              class="demo-link text-14 lg:text-16"
              :to="{ name: 'en-demo' }"
            >
              BOOK A DEMO
            </router-link>
          </button>
        </section>
        <section
          class="case-studies-wrapper pt-66 md:pt-[140px] relative w-full md:pb-[60px] lg:pt-[148px] lg:pb-[4%]"
        >
          <div
            class="bg-gray-50 absolute origin-top-left md:rotate-[3deg] lg:rotate-[2deg] w-[150%] h-full top-0 left-0 z-[-1] transform-sc"
          ></div>
          <p
            class="text-22 w-full max-w-[352px] md:max-w-[488px] lg:max-w-[488px] pl-34 md:pl-0 lg:pl-0 mb-44 md:mb-52 lg:mb-42 font-regular text-left md:text-center lg:text-center text-black md:text-28 lg:text-30 leading-[135%]"
          >
            Instantly evaluate <br />
            <strong>development potential</strong>
          </p>

          <div class="case-wrapper lg:max-w-[996px] lg:justify-between">
            <article class="case shadow-100 overflow-x-hidden">
              <div class="image-wrapper w-full">
                <img
                  class="img-map"
                  src="/en/overview/overview_step_1.jpg"
                  alt="find a site and review zoning info"
                  rel="preload"
                />
              </div>
              <div
                class="pl-34 pt-32 pb-40 md:pt-40 w-full md:pl-50 md:pb-60 lg:pt-54 lg:pb-0 lg:pl-54"
              >
                <div class="flex flex-nowrap">
                  <p
                    class="lg:mt-2 md:mt-3 min-w-18 w-18 h-18 md:w-30 md:min-w-30 md:h-30 lg:w-30 lg:min-w-30 flex leading-[150%] items-center justify-center lg:h-30 mr-10 bg-black rounded-[50%] lg:mr-18 md:mr-18 text-white text-center md:text-20 text-12 lg:text-20 font-semibold"
                  >
                    1
                  </p>

                  <div class="flex flex-col">
                    <p
                      class="mb-10 font-medium text-16 lg:text-26 md:text-30 md:mb-14 lg:mb-14"
                    >
                      <span>Find a site &&nbsp;</span>
                      <span>review zoning info</span>
                    </p>
                    <p
                      class="text-14 font-regular md:text-18 leading-[150%] text-gray-700 lg:text-18"
                    >
                      Select a site on the map, review<br />
                      the details of the parcel and<br />
                      zoning requirements.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article class="case shadow-100 overflow-x-hidden">
              <div class="image-wrapper w-full">
                <img
                  class="img-map"
                  src="/en/overview/overview_step_2.jpg"
                  alt="      Click Start Zenerating"
                />
              </div>
              <div
                class="pl-34 pt-32 pb-40 md:pt-40 md:pl-50 w-full md:pb-60 lg:pt-54 lg:pb-0 lg:pl-54"
              >
                <div class="flex flex-nowrap">
                  <p
                    class="lg:mt-2 md:mt-3 min-w-18 w-18 h-18 md:w-30 md:min-w-30 md:h-30 lg:w-30 lg:min-w-30 flex leading-[150%] items-center justify-center lg:h-30 mr-10 bg-black rounded-[50%] lg:mr-18 md:mr-18 text-white text-center md:text-20 text-12 lg:text-20 font-semibold"
                  >
                    2
                  </p>

                  <div class="flex flex-col">
                    <p
                      class="mb-10 font-medium lg:text-26 text-16 md:text-30 md:mb-14 lg:mb-14"
                    >
                      Click Start Zenerating
                    </p>
                    <p
                      class="text-14 font-regular md:text-18 leading-[150%] text-gray-700 lg:text-18"
                    >
                      Press 'Start Zenerating' and within <br />
                      minutes our AI-engine zenerates <br />
                      thousands of feasible solutions.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article class="case shadow-100 overflow-x-hidden">
              <div class="image-wrapper w-full">
                <img
                  class="img-map"
                  src="/en/overview/overview_step_3.jpg"
                  alt="      Click Start Zenerating"
                />
              </div>
              <div
                class="pl-34 pt-32 pb-40 md:pt-40 lg:pr-36 md:pl-50 w-full md:pb-60 lg:pt-54 lg:pb-0 lg:pl-54"
              >
                <div class="flex flex-nowrap">
                  <p
                    class="lg:mt-2 md:mt-3 min-w-18 w-18 h-18 md:w-30 md:min-w-30 md:h-30 lg:w-30 lg:min-w-30 flex leading-[150%] items-center justify-center lg:h-30 mr-10 bg-black rounded-[50%] lg:mr-18 md:mr-18 text-white text-center md:text-20 text-12 lg:text-20 font-semibold"
                  >
                    3
                  </p>

                  <div class="flex flex-col">
                    <p
                      class="mb-10 font-medium lg:text-26 text-16 md:text-30 md:mb-14 lg:mb-14"
                    >
                      Review zenerated solutions
                    </p>
                    <p
                      class="text-14 font-regular md:text-18 leading-[150%] text-gray-700 lg:text-18"
                    >
                      Easily find the most profitable <br />
                      solution by filtering through <br />
                      based on your needs.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article class="case shadow-100 overflow-x-hidden">
              <div class="image-wrapper w-full">
                <img
                  class="img-map"
                  src="/en/overview/overview_step_4.jpg"
                  alt="      Click Start Zenerating"
                />
              </div>
              <div
                class="pl-34 pt-32 pb-40 md:pt-40 md:pl-50 w-full md:pb-60 lg:pt-54 lg:pb-0 lg:pl-54"
              >
                <div class="flex flex-nowrap">
                  <p
                    class="lg:mt-2 md:mt-3 min-w-18 w-18 h-18 md:w-30 md:min-w-30 md:h-30 lg:w-30 lg:min-w-30 flex leading-[150%] items-center justify-center lg:h-30 mr-10 bg-black rounded-[50%] lg:mr-18 md:mr-18 text-white text-center md:text-20 text-12 lg:text-20 font-semibold"
                  >
                    4
                  </p>

                  <div class="flex flex-col">
                    <p
                      class="mb-10 font-medium lg:text-26 text-16 md:text-30 md:mb-14 lg:mb-14"
                    >
                      Download a report
                    </p>
                    <p
                      class="text-14 mb-8 md:mb-14 lg:mb-14 font-regular md:text-18 leading-[150%] text-gray-700 lg:text-18"
                    >
                      Download a report to send to your<br />
                      team, clients, investors and more.
                    </p>
                    <p
                      class="text-gray-400 text-medium lg:text-18 text-14 md:text-18 leading-[150%]"
                    >
                      *CAD and Excel files <br />
                      also downloadable.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article
              class="case shadow-100 overflow-x-hidden lg:!w-full lg:!h-auto"
            >
              <div
                class="flex flex-col pt-46 md:pl-74 w-full lg:pl-84 pl-56 pb-60 lg:pr-100 lg:flex-row lg:!justify-around lg:items-center"
              >
                <div
                  class="flex flex-col items-start mb-22 md:mb-28 lg:mb-12 lg:pl-26"
                >
                  <div>
                    <svg
                      width="72"
                      height="72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M53.572 36c0-11.361-9.21-20.571-20.572-20.571-11.361 0-20.571 9.21-20.571 20.571H53.57Z"
                        fill="#ECEFFF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M33 60C19.745 60 9 49.255 9 36s10.745-24 24-24 24 10.745 24 24h-4.286c0-10.888-8.826-19.714-19.714-19.714-10.888 0-19.714 8.826-19.714 19.714 0 10.888 8.826 19.714 19.714 19.714V60Z"
                        fill="#5C6DFF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M33 12C19.745 12 9 22.745 9 36s10.745 24 24 24v-4.286c-10.888 0-19.714-8.826-19.714-19.714 0-10.888 8.826-19.714 19.714-19.714V12Z"
                        fill="#A4AEFF"
                      />
                      <path
                        fill="#5C6DFF"
                        d="M45 49.714h3.429v3.429H45zM50.143 43.714h3.429v3.429h-3.429zM38.143 54.857h3.429v3.429h-3.429z"
                        style="mix-blend-mode: multiply"
                      />
                      <path
                        fill="#A4AEFF"
                        d="M31.286 22.286h4.286v17.143h-4.286z"
                      />
                      <path
                        fill="#5C6DFF"
                        d="M44.143 36v4.286H31.286V36zM54.857 41.143l-7.052-7.715H61.91l-7.052 7.715Z"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9 36c0 13.255 10.745 24 24 24v-4.286c-10.888 0-19.714-8.826-19.714-19.714H9Z"
                        fill="#A4AEFF"
                      />
                    </svg>
                  </div>
                  <p
                    class="text-gray-700 font-medium text-20 md:text-24 lg:text-24"
                  >
                    Weeks reduced to
                  </p>
                  <p
                    class="text-gray-700 font-semibold text-32 md:text-34 lg:text-34"
                  >
                    <span class="number">30&nbsp;</span>
                    <span class="unit">min.</span>
                  </p>
                </div>

                <div
                  class="flex flex-col text-14 lg:pt-10 items-start font-regular text-gray-700 leading-[150%] md:text-18 lg:text-18"
                >
                  <p class="font-medium mb-8 md:mb-10 lg:mb-10">
                    Cut down on weeks & months of
                  </p>
                  <ul class="flex flex-col">
                    <li class="flex w-full items-center mb-6">
                      <div
                        class="flex mr-10 items-center justify-center bg-core-500 rounded-[50%] text-white w-16 h-16"
                      >
                        <svg
                          width="12"
                          height="13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m2.77 6.962 2.307 2.307 4.154-5.538"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <span>Searching for sites</span>
                    </li>
                    <li class="flex w-full items-center mb-6">
                      <div
                        class="flex mr-10 items-center justify-center bg-core-500 rounded-[50%] text-white w-16 h-16"
                      >
                        <svg
                          width="12"
                          height="13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m2.77 6.962 2.307 2.307 4.154-5.538"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <span>Optimizing zoning scenarios</span>
                    </li>
                    <li class="flex w-full items-center mb-6">
                      <div
                        class="flex mr-10 items-center justify-center bg-core-500 rounded-[50%] text-white w-16 h-16"
                      >
                        <svg
                          width="12"
                          height="13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m2.77 6.962 2.307 2.307 4.154-5.538"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <span>Crunching numbers</span>
                    </li>
                    <li class="flex w-full">
                      <div
                        class="flex mr-10 mt-3 items-center justify-center bg-core-500 rounded-[50%] text-white w-16 h-16"
                      >
                        <svg
                          width="12"
                          height="13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m2.77 6.962 2.307 2.307 4.154-5.538"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <span
                        >Requesting or drafting <br />
                        preliminary floor plans</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section
          class="pt-66 md:pt-[186px] relative w-full md:pb-[90px] lg:pt-[186px] lg:pb-[90px]"
        >
          <div
            class="bg-[#333B61] absolute origin-top-left md:rotate-[3deg] lg:rotate-[2deg] w-[150%] h-full top-0 left-0 z-[-1] transform-sc"
          ></div>
          <div class="flex flex-col w-full mx-auto">
            <p
              class="font-regular w-[352px] mx-auto md:w-full lg:w-full text-24 md:text-center md:px-20 px-32 lg:text-center leading-[135%] mb-30 text-white md:text-28 md:mb-50 lg:text-34 lg:mb-50"
            >
              <strong>Maximize </strong>
              <span>project returns</span>
            </p>

            <div
              class="graph-image-wrapper w-[296px] h-[632px] min-h-[632px] md:h-[416px] lg:h-[600px] lg:min-h-[600px] md:min-h-[416px] md:w-[664px] lg:w-[944px] mb-60 mx-auto"
            ></div>
            <div
              class="flex flex-col w-[352px] mx-auto md:w-[510px] lg:w-[840px] lg:items-center"
            >
              <p
                class="font-semibold text-20 px-32 md:text-26 md:px-20 mb-18 lg:text-26 text-white md:mb-24 lg:mb-24 lg:text-center"
              >
                by exploring ALL possibilities
              </p>
              <div
                class="flex mb-50 flex-col px-32 md:px-20 md:mb-62 lg:mb-68 text-white font-regular lg:text-20 text-16 md:text-18 leading-[150%]"
              >
                <p class="mb-12">
                  Our AI engine zenerates all the possible designs <br />
                  including building massings, unit mixes and layouts.
                </p>
                <p>
                  By exploring all the possibilities and then analyzing <br />
                  the options, users can confidently find the solution <br />
                  generating the highest returns.
                </p>
              </div>
            </div>
            <div
              class="bg-white/10 md:shadow-100 lg:shadow-100 md:rounded-10 lg:rounded-10 flex flex-col md:w-[510px] lg:w-[840px] mx-auto w-full"
            >
              <div
                class="flex flex-col mx-auto pt-45 w-[280px] lg:pl-38 md:px-74 lg:pt-48 lg:pr-10 lg:w-full md:w-full md:pl-74 pb-56 lg:flex-row lg:!justify-around lg:items-center"
              >
                <div class="flex flex-col items-start mb-22 md:mb-28 lg:mb-12">
                  <div>
                    <svg
                      width="72"
                      height="72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="#fff" d="M14.023 14H68.49v33.444H14.023z" />
                      <path fill="#A4AEFF" d="M3.511 25.467h53.511V57H3.511z" />
                      <path
                        fill="#C5CBFF"
                        d="M14.023 14H68.49v33.444H14.023z"
                        style="mix-blend-mode: multiply"
                      />
                      <path fill="#5C6DFF" d="M14.023 25.467h43v21.978h-43z" />
                      <path
                        d="M45.888 23.71h-5.94a3.357 3.357 0 1 0 0 6.716h2.583a3.357 3.357 0 1 1 0 6.715h-5.94M41.24 21.645v1.032M41.24 38.174v1.033"
                        stroke="#fff"
                        stroke-width="3"
                        stroke-linecap="square"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p
                    class="text-white font-medium text-20 md:text-24 lg:text-24"
                  >
                    Returns, maximized.
                  </p>
                  <p
                    class="text-white font-semibold text-32 md:text-34 lg:text-34"
                  >
                    <span class="number">+28&nbsp;</span>
                    <span class="unit">%</span>
                  </p>
                </div>

                <div
                  class="flex pr-50 md:pr-0 lg:pr-0 lg:w-[352px] flex-col text-14 items-start font-regular text-white leading-[150%] md:text-18 lg:text-18"
                >
                  <p>
                    <span>Over 30+ multifamily projects&nbsp;</span>
                    <span>starting&nbsp;</span>
                    <span>with Zenerate&nbsp;</span>
                    <span>experienced&nbsp;</span>
                    <span> an average&nbsp;</span>
                    <span>of 28%&nbsp;</span>
                    <span>additional returns&nbsp;</span>
                    <span> compared&nbsp;</span>
                    <span>to original plans.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        class="pt-38 pb-76 md:pt-[156px] md:pb-[150px] lg:pt-[156px] lg:pb-[150px]"
      >
        <div
          class="flex flex-col items-center mx-auto w-[300px] md:w-auto lg:w-auto"
        >
          <p
            class="mb-30 text-16 font-regular leading-[150%] md:text-24 md:mb-36 lg:mb-40 lg:text-22 text-black text-center"
          >
            <span>You'll never want to start a project&nbsp;</span>
            <span>without Zenerate again. </span><br />
            <span>See for yourself why!</span>
          </p>
          <button
            type="button"
            class="start-button w-[260px] bg-primary hover:text-core-200 text-white active:bg-core-700 active:text-white px-24 md:w-[210px] lg:w-[210px]"
          >
            <router-link
              class="demo-link text-14 lg:text-16"
              :to="{ name: 'en-demo' }"
            >
              TRY FOR FREE
            </router-link>
          </button>
        </div>
      </section>
    </div>
    <section class="section section-footer fp-auto-height">
      <Footer></Footer>
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
import Store from '/Store/index'
import { useRouter } from 'vue-router'
import { PRICE_PLAN_CONTENT, CONSULT_PLAN_CONTENT } from '/Constants/pricePlan'
import Footer from '/Components/EN/Footer.vue'
import { useGtag } from 'vue-gtag-next'
import { useMeta } from 'vue-meta'
import ImagePreloader from '/Utils/ImagePreloader'
import PartnersList from '/Constants/partners'

const preloadImages = {
  desktop: ['/en/overview/overview_hero_desktop.png'],
  tablet: ['/en/overview/overview_hero_tablet.png'],
  mobile: ['/en/overview/overview_hero_mobile.png'],
}

const onloadImages = {
  desktop: ['/en/overview/overview_graph_desktop.png'],
  tablet: ['/en/overview/overview_graph_tablet.png'],
  mobile: ['/en/overview/overview_graph_mobile.png'],
}

const commonPreloadImages = [
  '/en/overview/overview_step_1.jpg',
  '/en/overview/overview_step_2.jpg',
  '/en/overview/overview_step_3.jpg',
  '/en/overview/overview_step_4.jpg',
]

const mediaQueryDevice =
  window.innerWidth >= 1024
    ? 'desktop'
    : window.innerWidth >= 768
    ? 'tablet'
    : 'mobile'

onBeforeMount(() => {
  ImagePreloader.sequential(preloadImages[mediaQueryDevice])
  ImagePreloader.sequential(commonPreloadImages)
})

onMounted(() => {
  ImagePreloader.sequential(onloadImages[mediaQueryDevice])
})

// GTM
const { event } = useGtag()
const goToApp = () => {
  event('generate_lead', {
    event_category: 'engagement',
    event_label: '(not yet)',
  })
}
const { meta } = useMeta({
  title: 'Zenerate | Zenerate',
  description:
    'Zenerate is an AI-powered feasibility study tool that boosts real estate development profitability up to 26%',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content:
        'Zenerate is an AI-powered feasibility study tool that boosts real estate development profitability up to 26%',
    },
  ],
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai/overview' }],
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

.hero-image-wrapper {
  background-image: url('/en/overview/overview_hero_desktop.png');
  background-size: cover;
  @include en-tablet {
    background-image: url('/en/overview/overview_hero_tablet.png');
  }
  @include en-mobile {
    background-image: url('/en/overview/overview_hero_mobile.png');
  }
}
.graph-image-wrapper {
  background-size: cover;
  background-image: url('/en/overview/overview_graph_desktop.png');
  @include en-tablet {
    background-image: url('/en/overview/overview_graph_tablet.png');
  }
  @include en-mobile {
    background-image: url('/en/overview/overview_graph_mobile.png');
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
  //   transform: translateY(-2px);
  // }
  // &:active {
  //   @include elevation-3;
  //   color: rgba($white, 0.6);
  //   transform: translateY(-2px);
  // }
}
.section-case-studies {
  @include relative;
  width: 100%;
  height: 100%;
  .inner-case-studies {
    @include flex($dir: column);
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 168px 0px 0px;
    @include en-tablet {
      padding: 132px 0px 0px;
    }
    @include en-mobile {
      padding: 98px 0px 0px;
    }
    .case-studies-wrapper {
      @include vertical-center();
      margin: 0px auto;
      align-items: center;
    }
    .case-wrapper {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      height: 100%;
      margin: 0px auto;
      @include en-tablet {
        @include vertical-center;
        padding: 0px 20px;
      }
      @include en-mobile {
        @include vertical-center;
        padding: 0px;
      }
      .case {
        @include relative();
        @include vertical-center();
        justify-content: flex-start;
        align-items: center;
        width: 488px;
        // height: auto;
        height: 590px;
        border-radius: 10px;
        margin-bottom: 20px;
        background-color: white;
        @include en-tablet {
          height: auto;
        }
        @include en-mobile {
          max-width: 352px;
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
        .image-wrapper {
          min-height: 312px;
          @include en-mobile {
            min-height: 226px;
          }
          img {
            display: block;
            height: 312px;
            object-fit: cover;
            pointer-events: none;
            @include en-mobile {
              width: 360px;
              height: auto;
            }
          }
        }
      }
    }
  }
}
</style>
