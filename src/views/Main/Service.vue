<template>
  <section class="section-main-service">
    <div class="service-container-wrapper flex flex-col items-center">
      <div
        class="text-14-semibold mb-30 w-fit text-center md:text-20 lg:text-26"
      >
        <span class="text-[#4D49F4]">zenerate.ai</span> 에서 제너레잇의 서비스에
        대해<br />더 자세히 보실 수 있습니다.
      </div>

      <button
        class="text-12-medium mb-16 h-fit rounded-4 bg-primary px-15 py-9 !text-white duration-300 hover:!text-core-200 md:mb-0 md:px-20 md:py-12 md:text-14 lg:mb-0 lg:px-25 lg:py-15 lg:text-16"
        @click="openEnglishWeb"
      >
        미국 웹사이트로 가기
      </button>

      <img
        class="service-image-bg w-full min-w-[360px] max-w-[786px]"
        src="/img/service_bg.png"
      />
      <!-- <div class="service-container header">
        <div class="service-content">
          <p>{{ $t('main.service.content[0]') }}</p>
          <p>{{ $t('main.service.content[1]') }}</p>
          <p>{{ $t('main.service.content[2]') }}</p>
        </div>
        <div class="service-image">
          <img class="service-image-intro" src="/img/service_intro.png" />
        </div>
      </div>
      <div class="service-container" v-if="locale === 'en'">
        <div class="service-caption caption-large">Web Solution</div>
        <div class="service-title">{{ $t('main.service.title[2]') }}</div>
        <div class="service-content">{{ $t('main.service.content[4]') }}</div>
        <div class="service-image service-image-3">
          <img src="/img/service_web.png" />
          <img src="/img/service_consulting_1.png" />
          <img src="/img/service_consulting_2.png" />
        </div>
      </div>
      <div class="service-container">
        <div class="service-caption caption-large">Consulting Service</div>
        <div class="service-title">{{ $t('main.service.title[1]') }}</div>
        <div class="service-content">{{ $t('main.service.content[3]') }}</div>
        <div class="service-image">
          <img src="/img/service_consulting_screenshot.png" />
        </div>
      </div>
      <div class="service-container" v-if="locale !== 'en'">
        <div class="service-caption caption-large">Web Solution</div>
        <div class="service-title">{{ $t('main.service.title[2]') }}</div>
        <div class="service-content">{{ $t('main.service.content[4]') }}</div>
        <div class="service-image service-image-3">
          <img src="/img/service_web.png" />
          <img src="/img/service_consulting_1.png" />
          <img src="/img/service_consulting_2.png" />
        </div>
      </div> -->
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
const { locale } = useI18n()
const serviceTab = ref('consulting')
const toggleServiceTab = (tab) => {
  serviceTab.value = tab
}

useHead({
  title: `서비스 | 제너레잇`,
  htmlAttrs: { lang: 'ko' },
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai/kr/main/service' }],
  meta: [
    {
      name: `description`,
      content: `제너레잇은 컨설팅 / 웹 서비스를 통해 시장에 대한 인사이트와 최고의 수익안을 제공합니다.`,
    },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: `서비스 | 제너레잇`,
    },
    {
      hid: 'twitter:description',
      property: 'twitter:description',

      content: `제너레잇은 컨설팅 / 웹 서비스를 통해 시장에 대한 인사이트와 최고의 수익안을 제공합니다.`,
    },
    { name: 'keywords', content: '제너레잇' },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.zenerate.ai/img/thumbnail.png',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://www.zenerate.ai/kr/main/service',
    },
    {
      hid: 'og:title',
      property: 'og:title',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: `제너레잇은 컨설팅 / 웹 서비스를 통해 시장에 대한 인사이트와 최고의 수익안을 제공합니다.`,
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

const openEnglishWeb = () => {
  Object.assign(document.createElement('a'), {
    target: '_blank',
    href: 'https://www.zenerate.ai/',
  }).click()
}
</script>

<style lang="scss" scoped>
.service-container-wrapper {
  padding-top: 90px;

  @include mobile {
    // padding-top: 0px;
  }
  .service-container {
    position: relative;
    margin-bottom: 160px;
    text-align: center;

    @include mobile {
      margin-bottom: 100px;
    }
    &:first-child {
      margin-bottom: 252px;
      @include mobile {
        margin-bottom: 110px;
      }
    }
    .service-caption {
      @include bold(20);
      line-height: 48px;
      @include mobile {
        line-height: 40px;
      }
    }
    .service-title {
      @include bold(40);
      line-height: 60px;
      margin-bottom: 40px;
      @include tablet {
        @include bold(32);
        margin-bottom: 30px;
      }
      @include mobile {
        @include bold(28);
        margin-bottom: 30px;
      }
    }
    .service-content {
      @include medium(20);
      margin-bottom: 40px;
      @include tablet {
        @include medium(16);
        margin-bottom: 30px;
      }
      @include mobile {
        @include medium(14);
        margin-bottom: 30px;
      }
    }
    .service-image {
      @include flex($justify: center);
      img {
        width: 100%;
        object-fit: contain;
        @include mobile {
          height: 100%;
        }
      }
    }
    .service-image-3 {
      img {
        width: calc(100% / 3);
        @include mobile {
          width: calc(100% / 3);
          height: 100%;
          margin: 0px;
        }
      }
    }
    .service-image-intro {
      width: 100%;
      position: absolute;
      left: 0;
      top: 150px;
      z-index: -1;
      @include mobile {
        top: 80px;
      }
    }

    &.header {
      margin-top: 24px;
      margin-bottom: 316px;
      .service-title {
        font-style: italic;
        @include bold(32);
        line-height: 60px;
        margin-bottom: 12px;
        @include tablet {
          @include bold(28);
        }
        @include mobile {
          @include bold(24);
        }
      }
      .service-content {
        font-style: italic;
        // padding-top: 80px;
      }
    }
  }
}
</style>
