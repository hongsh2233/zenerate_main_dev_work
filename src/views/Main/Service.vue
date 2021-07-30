<template>
  <section class="section-main-service">
    <div class="service-container-wrapper">
      <div class="service-container header">
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
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
const { locale } = useI18n()
const serviceTab = ref('consulting')
const toggleServiceTab = (tab) => {
  serviceTab.value = tab
}
</script>

<style lang="scss" scoped>

.service-container-wrapper {
  padding-top: 64px;
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
        margin-bottom: 100px;
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
      }
    }
    .service-image-3 {
      img {
        width: calc(100% / 3);
        @include mobile {
          width: calc(100% / 3);
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
        top: 150px;
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
        padding-top: 80px;
      }
    }
  }
}
</style>
