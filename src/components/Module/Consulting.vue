<template>
  <div class="module-consulting-wrapper module-item-wrapper">
    <div class="consulting-inner">
      <div class="explanation-consulting">
        <span class="consulting-caption caption-small">
          {{ $t('module.explanation.services.caption') }}
        </span>
        <div class="spacer hidden-desktop hidden-tablet"></div>
        <span class="consulting-content" :class="{ en: locale === 'en' }">
          {{ $t('module.explanation.services.summary') }}
        </span>
      </div>
      <div class="image-wrapper" :class="{ inactive: currentImage !== 1 }">
        <img :src="`/img/main_service_1.png`" />
        <div class="image-explanation">
          <div class="image-explanation-title">
              클라이언트 미팅
          </div>
          <div class="image-explanation-content">
            프로젝트의 목표, 조건, 평면, 임대 매출, 예산 등의 정보를 수집하여 최적의 솔루션을 계획합니다.
          </div>
        </div>
      </div>
      <div class="image-wrapper" :class="{ inactive: currentImage !== 2 }">
        <img :src="`/img/main_service_2.png`" />
        <div class="image-explanation">
          <div class="image-explanation-title">
              프로세싱
          </div>
          <div class="image-explanation-content">
            알고리듬을 활용하여 수백만가지 대안을 생성하고
            평가하여 최적의 솔루션을 제공합니다.
          </div>
        </div>
      </div>
      <div class="image-wrapper" :class="{ inactive: currentImage !== 3 }">
        <img :src="`/img/main_service_3.png`" />
        <div class="image-explanation">
          <div class="image-explanation-title">
              솔루션 납품
          </div>
          <div class="image-explanation-content">
            보고서와 웹 솔루션을 통해 결과 분석과 추천 대안을 제공합니다.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const currentImage = ref(1)
const interval = ref(null)

onMounted(() => {
  interval.value = setInterval(() => {
    if (currentImage.value === 3) currentImage.value = 1
    else currentImage.value += 1
  }, 5000)
})
onBeforeUnmount(() => {
  if (interval.value) {
    clearInterval(interval.value)
    interval.value = null
  }
})
</script>
<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.consulting-inner {
  width: 100%;
  height: 100%;
  @include flex($justify: space-between);
  @include relative;
  @include desktop {
  }
  @include tablet {
    padding-left: 12px;
    margin-bottom: 24px;
  }
  .explanation-consulting {
    margin-bottom: 12px;
    @include mobile {
      margin-bottom: 32px;
    }
    .consulting-content {
      @include desktop {
        display: none;
      }
      @include tablet {
        @include medium(20);
        &.en {
          font-size: 16px;
        }
      }
      @include mobile {
        @include medium(15);
      }
    }
  }
  .image-wrapper {
    flex: 1;
    opacity: 1;
    transition: opacity 1s ease;
    @include desktop {
      position: absolute;
      top: 40px;
    }
    img {
      max-width: 100%;
      max-height: 100%;
    }
    .image-explanation{
      .image-explanation-title{
        @include bold(20);
        margin-bottom: 16px;
      }
      .image-explanation-content{
        @include medium(20);
      }
    }
    &.inactive {
      @include desktop {
        opacity: 0;
        position: absolute;
      }
    }
  }
}
</style>
