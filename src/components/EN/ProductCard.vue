<template>
  <div
    class="product-card flex h-fit w-[320px] min-w-[320px] flex-col overflow-hidden rounded-10 bg-white shadow-200 md:h-[468px] md:w-[708px] lg:h-[648px] lg:min-w-[980px]"
    :class="product"
  >
    <div class="h-[388px] md:h-fit">
      <template v-if="product === 'zmaps'">
        <ZmapsLogo class="ml-28 mt-30 mb-16 md:hidden lg:hidden" />
        <ZmapsLogo
          size="medium"
          class="mt-60 ml-60 mb-16 hidden md:block lg:hidden"
        />
        <ZmapsLogo size="large" class="mt-84 ml-84 mb-22 hidden lg:block" />

        <p
          class="ml-28 text-18 font-light md:ml-60 md:mb-32 md:w-[240px] md:text-22 lg:ml-84 lg:mb-44 lg:w-[280px] lg:text-30"
        >
          Your City's Ultimate
          <span class="font-medium">Real Estate Development Map</span>
        </p>
      </template>

      <template v-else-if="product === 'zenerate-app'">
        <div
          class="ml-28 mt-30 mb-16 flex flex-row flex-nowrap items-center md:mt-94 md:ml-60 md:mb-14 lg:ml-84 lg:mt-[130px]"
        >
          <div
            class="mr-9 text-22 text-primary md:mr-12 md:text-28 lg:mb-18 lg:mr-16 lg:text-40"
          >
            <span class="font-semibold">Zenerate</span>&nbsp;App
          </div>
          <div
            class="h-20 rounded-36 bg-primary px-8 text-11 font-medium leading-[20px] text-white md:h-28 md:rounded-48 md:px-10 md:text-14 md:leading-[28px] lg:h-36 lg:rounded-66 lg:px-14 lg:text-20 lg:leading-[36px]"
          >
            Beta
          </div>
        </div>
        <p
          class="ml-28 text-18 font-light md:ml-60 md:mb-34 md:text-24 lg:mb-48 lg:ml-84 lg:text-32"
        >
          AI-Powered, Real-time<br /><span class="font-medium"
            >Feasibility Study Tool</span
          >
        </p>
      </template>

      <template v-else-if="product === 'ai-consulting'">
        <div
          class="ml-28 mt-30 mb-16 text-22 text-white md:mt-72 md:ml-60 md:mb-12 md:text-28 lg:ml-84 lg:mt-100 lg:mb-18 lg:text-38"
        >
          <span class="font-semibold">Zenerate</span>&nbsp;AI Consulting
        </div>
        <p
          class="ml-28 text-18 font-light text-white md:ml-60 md:mb-56 md:w-[260px] md:text-22 lg:ml-84 lg:mb-76 lg:w-[360px] lg:text-30"
        >
          <span class="font-medium">Explore all development<br /></span
          >&nbsp;<span class="font-medium">possibilities</span>&nbsp;to
          determine<br />the highest & best use
        </p>
      </template>

      <a
        :href="CARD_DATA[product].buttonLinkedTo"
        class="text-13-medium ml-60 hidden h-34 w-fit rounded-4 bg-primary px-16 text-center leading-[34px] !text-white duration-300 hover:!text-core-200 md:block lg:text-18-medium lg:ml-84 lg:block lg:h-48 lg:w-[160px] lg:leading-[48px]"
        >{{ CARD_DATA[product].buttonText }}</a
      >
    </div>

    <div class="bottom-area mt-auto h-fit py-20 px-22 md:px-60 lg:pl-84">
      <div class="mb-24 pl-8 md:mb-14 md:pl-0">
        <span
          class="mb-10 text-14 font-semibold text-primary md:hidden lg:hidden"
          >Best For</span
        >
        <span
          class="mb-8 hidden text-11 font-medium md:block lg:mb-12 lg:block lg:text-14"
          :class="product === 'ai-consulting' ? 'text-white' : 'text-primary'"
          >Made For</span
        >

        <div
          class="flex flex-row flex-wrap"
          :class="
            product === 'zenerate-app'
              ? 'md:w-[240px] lg:w-[320px]'
              : 'md:w-[280px] lg:w-[340px]'
          "
        >
          <span
            v-for="userKey in CARD_DATA[product].bestFor"
            class="text-13-medium mb-6 mr-6 h-29 w-fit rounded-60 bg-coolgray-50 px-12 leading-[29px] md:text-11-medium md:h-27 md:leading-[27px] lg:text-14-medium lg:mb-10 lg:h-36 lg:leading-[36px]"
          >
            <span class="md:hidden lg:hidden"
              >{{ ROLES[userKey].icon }}&nbsp;&nbsp;{{
                ROLES[userKey].shortenText ?? ROLES[userKey].text
              }}</span
            >
            <span class="hidden md:block lg:block"
              >{{ ROLES[userKey].icon }}&nbsp;&nbsp;{{
                ROLES[userKey].text
              }}</span
            >
          </span>
        </div>
      </div>

      <a
        :href="CARD_DATA[product].buttonLinkedTo"
        class="text-16-semibold block h-38 rounded-6 bg-core-500 text-center leading-[38px] !text-white duration-300 hover:!text-core-200 md:hidden lg:hidden"
        >{{ CARD_DATA[product].buttonText }}</a
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType, computed } from 'vue'
import { ZmapsLogo } from '/Components/EN'
import { ROLES } from '/Constants/roles'

const props = defineProps({
  product: String as PropType<'zmaps' | 'zenerate-app' | 'ai-consulting'>,
})

const product = computed(() => props.product)

const CARD_DATA = {
  zmaps: {
    bestFor: [
      'developer',
      'architect',
      'broker',
      'financial',
      'bd',
      'government',
    ],
    buttonText: 'Go to Z-Maps',
    buttonLinkedTo: 'https://maps.zenerate.ai',
  },
  'zenerate-app': {
    bestFor: ['developer', 'architect', 'broker'],
    buttonText: 'Learn More',
    buttonLinkedTo: 'https://www.zenerate.ai/zenerate-app',
  },
  'ai-consulting': {
    bestFor: ['developer', 'architect'],
    buttonText: 'Learn More',
    buttonLinkedTo: 'https://www.zenerate.ai/ai-consulting',
  },
}
</script>
<style lang="scss" scoped>
.product-card {
  background-size: contain;
  background-repeat: no-repeat;

  &.zmaps {
    background-image: url('/public/en/products/zmaps_desktop.png');
    background-position: center right;
    @include en-tablet {
      background-image: url('/public/en/products/zmaps_tablet.png');
    }
    @include en-mobile {
      background-image: url('/public/en/products/zmaps_mobile.png');
      background-position: bottom 272px center;
    }
  }

  &.zenerate-app {
    background-image: url('/public/en/products/zenerate_app_desktop.png');
    background-position: center;
    @include en-tablet {
      background-image: url('/public/en/products/zenerate_app_tablet.png');
    }
    @include en-mobile {
      background-image: url('/public/en/products/zenerate_app_mobile.png');
      background-position: bottom 203px center;
    }
  }

  &.ai-consulting {
    background-image: url('/public/en/products/ai_consulting_desktop.png');
    background-position: center;
    @include en-tablet {
      background-image: url('/public/en/products/ai_consulting_tablet.png');
    }
    @include en-mobile {
      background-image: url('/public/en/products/ai_consulting_mobile.png');
      background-position: bottom 203px center;
    }
  }

  .bottom-area {
    @include en-mobile {
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
    }
  }
}
</style>
