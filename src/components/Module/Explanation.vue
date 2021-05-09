<template>
  <div class="module-explanation-wrapper module-item-wrapper">
    <div class="explanation-inner">
      <div class="explanation-title">
        <span class="title-text" :class="{ en: locale === 'en' }">{{
          $t('module.explanation.mainSlogan')
        }}</span>
      </div>
      <div class="explanation-consulting">
        <span class="consulting-caption caption-small">
          {{ $t('module.explanation.services.caption') }}
        </span>
        <div class="spacer hidden-desktop hidden-tablet"></div>
        <span class="consulting-content" :class="{ en: locale === 'en' }">
          {{ $t('module.explanation.services.summary') }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
</script>

<style lang="scss" scoped>
.explanation-inner {
  width: 100%;
  height: 100%;
  @include flex($dir: column, $justify: space-between);
  @include desktop {
    padding-left: 24px;
  }
  @include tablet {
    padding-left: 12px;
  }
  .explanation-title {
    margin-bottom: 36px;
    .title-text {
      @include desktop {
        @include medium(48);
        &.en {
          font-size: 36px;
        }
      }
      @include tablet {
        @include medium(36);
        padding-right: 28px;
        &.en {
          font-size: 28px;
        }
      }
    }
    @include mobile {
      display: none;
    }
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
}
</style>
