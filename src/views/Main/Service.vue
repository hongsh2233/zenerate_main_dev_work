<template>
  <section class="section-main-service">
    <div class="service-container-wrapper">
      <div class="service-container">
        <div class="service-caption caption-large">Our Service</div>
        <div class="service-title">{{ $t('main.service.title[0]') }}</div>
        <div class="service-content">
          <p>{{ $t('main.service.content[0]') }}</p>
          <p>{{ $t('main.service.content[1]') }}</p>
          <p>{{ $t('main.service.content[2]') }}</p>
        </div>
        <div class="service-image">
          <img class="service-image-intro" src="/img/service_intro.png" />
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
      <div class="service-container">
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
@import '../../assets/scss/variables.scss';
.service-container-wrapper {
  padding-top: 64px;
  .service-container {
    position: relative;
    margin-bottom: 100px;
    text-align: center;
    &:first-child {
      margin-bottom: 292px;
    }
    .service-caption {
      @include bold(20);
      line-height: 48px;
    }
    .service-title {
      @include bold(40);
      line-height: 60px;
      margin-bottom: 40px;
    }
    .service-content {
      @include medium(20);
      margin-bottom: 40px;
    }
    .service-image{
      @include flex($justify: center);
    }
    .service-image-3{
      img{
        width: 230px;
        margin: 0px 30px;
      }  
    }
    .service-image-intro {
      width: 100%;
      position: absolute;
      left: 0;
      top: 100px;
      z-index: -1;
    }
  }
}
</style>
