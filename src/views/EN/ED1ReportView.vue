<template>
  <section
    class="flex flex-col flex-nowrap items-center justify-center lg:fixed lg:top-0 lg:left-0 lg:h-[100vh] lg:max-h-[100vh] lg:w-[100vw] lg:max-w-[100vw] lg:flex-row"
  >
    <!-- DESCRIPTION AREA -->
    <div
      class="landing-area relative flex h-full w-full min-w-fit items-center justify-center bg-primary text-white lg:order-[-1]"
    >
      <div
        class="mt-66 mb-100 flex w-[328px] flex-col md:w-[640px] lg:w-[640px]"
      >
        <!-- logo -->
        <router-link
          class="mb-70 h-fit w-fit md:mb-70 lg:mb-70"
          :to="{ name: 'en-landing', query: getCurrentUtmQuery(router) }"
        >
          <img
            src="/public/img/logo_white.svg"
            alt="zenerate"
            class="w-[180px] md:w-[200px] lg:w-[200px]"
          />
        </router-link>

        <!-- description -->
        <div
          class="mb-42 flex flex-col md:mb-50 md:flex-row md:justify-between lg:mb-50 lg:flex-row lg:justify-between"
        >
          <div class="mb-20 md:mb-0 lg:mb-0">
            <h1
              class="mb-12 mt-0 text-28 font-semibold md:mb-20 md:text-30 lg:mb-20 lg:text-30"
            >
              ED 1 Feasibility Report
            </h1>
            <span class="text-18-medium md:text-20 lg:text-20"
              >Delivery in 1-3 business days</span
            >
          </div>
          <div class="md:w-[176px] lg:w-[176px]">
            <div class="mb-6">
              <span class="text-26 font-semibold md:text-30 lg:text-30"
                >$150</span
              ><span class="text-16-medium">&nbsp;&nbsp;/&nbsp;report</span>
            </div>
            <span class="text-14-medium text-gray-300"
              >*Pricing valid until December 31st, 2023</span
            >
          </div>
        </div>
        <!-- card -->
        <div
          class="mb-56 w-full rounded-10 bg-black/50 px-24 pt-24 pb-34 md:mb-60 md:px-30 md:pt-30 md:pb-40 lg:mb-60 lg:px-30 lg:pt-30 lg:pb-40"
        >
          <span
            class="text-16-semibold mb-26 md:mb-24 md:text-18 lg:mb-24 lg:text-18"
            >{{ CARD_CONTENT.title }}</span
          >
          <div
            class="flex flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between"
          >
            <div
              v-for="content in CARD_CONTENT.contents"
              class="flex flex-col not-last:mb-20 md:mb-0 lg:mb-0"
            >
              <div class="w-[280px]">
                <span
                  class="mb-18 text-14 font-semibold md:text-16 lg:text-16"
                  >{{ content.title }}</span
                >
                <div
                  v-for="(description, idx) in content.descriptions"
                  class="flex flex-row items-start text-14 not-last:mb-3 md:text-15 md:not-last:mb-5 lg:text-15 lg:not-last:mb-5"
                >
                  <div class="w-20 min-w-20 text-center">
                    {{
                      content.bulletStyleType === 'bullet'
                        ? '&#8226;'
                        : content.bulletStyleType === 'number'
                        ? `${idx + 1}.`
                        : ''
                    }}
                  </div>
                  <span>{{ description }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- form -->
        <div class="flex flex-col items-center md:flex-row lg:flex-row">
          <div
            class="mb-30 text-center md:mb-0 md:text-left lg:mb-0 lg:text-left"
          >
            <span class="mb-4 text-18 font-semibold"
              >Want to view a Sample Report?</span
            >
            <span class="text-14"
              >Enter your email to receive one right away.
            </span>
          </div>

          <div
            class="flex h-58 w-[320px] min-w-[320px] flex-row items-center justify-center rounded-6 border-gray-100 bg-white p-4 shadow-200"
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
              <span class="text-16-medium ml-10 text-black"
                >Sent, please check your inbox!</span
              >
            </template>
            <template v-else>
              <div class="relative">
                <input
                  ref="bannerEmailInput"
                  type="text"
                  inputmode="email"
                  :spellcheck="false"
                  placeholder="Email Address"
                  v-model="bannerEmail.inputValue"
                  class="h-50 w-[208px] border-none pl-12"
                  @focus="bannerEmail.showErrorMsg = false"
                />
                <span
                  v-if="bannerEmail.showErrorMsg"
                  @click="hideBannerEmailErrorMsg"
                  class="absolute top-0 left-0 flex h-50 w-[208px] items-center bg-white px-12 py-4 text-14 text-red-500"
                  >Please enter a valid email.</span
                >
              </div>
              <button
                class="text-14-medium ml-4 h-50 w-[100px] min-w-[100px] rounded-4 bg-primary text-white hover:bg-core-700"
                @click="sendBannerEmail"
              >
                Send
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- FORM AREA -->
    <div
      class="order-[-1] flex h-[812px] w-full flex-nowrap items-center justify-center bg-white md:h-[750px] lg:h-full lg:w-[380px] lg:min-w-[380px]"
    >
      <div class="flex flex-col items-center">
        <FormContent
          sheet-name="ED1Report"
          submit-btn-text="Request Report"
          class="ed1-report-form w-[310px]"
        >
          <template #form-title>
            <div class="text-22 font-semibold text-primary">
              ED 1 Report Request Form
            </div>
          </template>
          <template #additional-text>
            <span class="mb-20 text-14 text-gray-450"
              >*Please reply to the confirmation email with any additional files
              that we need to be aware of.</span
            >
          </template>
          <template #after-submit-subtitle>
            <span class="mb-18 text-26 font-medium text-black"
              >Please check your inbox!</span
            >
          </template>
          <template #after-submit-text>
            <div class="w-[300px] text-center text-gray-700">
              <span class="mb-30 text-18"
                >You must complete payment through the link in the confirmation
                email.
              </span>
              <span class="text-18"
                >We will start the report as soon as payment is received.
              </span>
            </div>
          </template>
        </FormContent>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { nextTick, onMounted, ref, watch, computed, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import ApiService from '/Services/api'
import Validation from '/Utils/Validation'
import { getCurrentUtmQuery } from '/Utils/index'
import { FormContent } from '/Components/EN'

const router = useRouter()

const CARD_CONTENT = {
  title: 'Quick AI-Powered Feasibility Study for ED 1 Projects in Los Angeles',
  contents: [
    {
      title: "What's included?",
      bulletStyleType: 'bullet',
      descriptions: [
        'Zoning requirements analysis',
        'Design options featuring floor plans',
        'Maximizing density on a site',
        '15-minute meeting upon report delivery',
      ],
    },
    {
      title: 'How to get a report:',
      bulletStyleType: 'number',
      descriptions: [
        'Fill out the Report Request Form',
        'Receive confirmation email with payment link',
        'Complete payment',
        'Receive report in 1-3 business days with 15-minute meeting',
      ],
    },
  ],
}

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
      await ApiService.XSLX_TEST('ED1ReportSample', {
        email: bannerEmail.value.inputValue,
      })
      await ApiService.ACTIVE_CAMPAIGN({
        email: bannerEmail.value.inputValue,
        tag: 'ed1_sample',
      })
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
.landing-area {
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  background-color: theme('colors.core.700');

  background-image: url('/public/en/ed1_report/bg_desktop.png');
  @include en-tablet {
    background-image: url('/public/en/ed1_report/bg_tablet.png');
  }
  @include en-mobile {
    background-image: url('/public/en/ed1_report/bg_mobile.png');
  }
}
</style>
<style lang="scss">
.ed1-report-form {
  .submit-button {
    height: 48px !important;
    font-size: 16px !important;
    font-weight: 500;
  }
}
</style>
