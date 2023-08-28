<template>
  <div class="module-consulting-wrapper module-item-wrapper">
    <div class="consulting-inner">
      <div class="explanation-consulting">
        <span class="consulting-caption caption-small">
          {{ $t('module.explanation.services.caption') }}
        </span>
        <span class="consulting-content" :class="{ en: locale === 'en' }">
          {{ $t('module.explanation.services.summary') }}
        </span>
      </div>
      <div class="image-wrapper" :class="{ inactive: currentImage !== 1 }">
        <img :src="`/img/main_service_1.png`" />
        <div class="image-explanation">
          <div class="image-explanation-title">
            {{ $t('module.explanation.services.title[0]') }}
          </div>
          <div class="image-explanation-content">
            {{ $t('module.explanation.services.content[0]') }}
          </div>
        </div>
      </div>
      <div class="image-wrapper" :class="{ inactive: currentImage !== 2 }">
        <img :src="`/img/main_service_2.png`" />
        <div class="image-explanation">
          <div class="image-explanation-title">
            {{ $t('module.explanation.services.title[1]') }}
          </div>
          <div class="image-explanation-content">
            {{ $t('module.explanation.services.content[1]') }}
          </div>
        </div>
      </div>
      <div class="image-wrapper" :class="{ inactive: currentImage !== 3 }">
        <img :src="`/img/main_service_3.png`" />
        <div class="image-explanation">
          <div class="image-explanation-title">
            {{ $t('module.explanation.services.title[2]') }}
          </div>
          <div class="image-explanation-content">
            {{ $t('module.explanation.services.content[2]') }}
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
  @include mobile {
    padding-bottom: 20px;
  }
  .explanation-consulting {
    margin-bottom: 12px;
    .consulting-caption {
      line-height: 40px;
    }
    .consulting-content {
      @include desktop {
        display: none;
      }
      @include tablet {
        @include medium(14);
        &.en {
          font-size: 16px;
        }
      }
      @include mobile {
        @include medium(12);
      }
    }
  }
  .image-wrapper {
    flex: 1;
    opacity: 1;
    transition: opacity 1s ease;
    @include desktop {
      position: absolute;
      top: 0px;
    }
    @include tablet {
      padding: 0px 8px;
    }
    @include mobile {
      margin-right: 10px;
      &:last-child {
        margin-right: 0px;
      }
    }
    img {
      max-width: 100%;
      max-height: 100%;
    }
    .image-explanation {
      .image-explanation-title {
        @include bold(20);
        margin-bottom: 4px;
        @include tablet {
          @include bold(16);
        }
        @include mobile {
          @include bold(14);
        }
      }
      .image-explanation-content {
        @include medium(20);
        @include tablet {
          @include medium(14);
        }
        @include mobile {
          @include medium(12);
        }
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
