<template>
  <div class="module-explanation-wrapper module-item-wrapper">
    <div class="explanation-inner">
      <div class="explanation-title">
        <span class="title-text" :class="{ en: locale === 'en' }">{{
          $t('module.explanation.mainSlogan-1')
        }}</span>
        <span class="title-text color-title" :class="{ en: locale === 'en' }">{{
          $t('module.explanation.colorSlogan')
        }}</span>
        <span class="title-text" :class="{ en: locale === 'en' }">{{
          $t('module.explanation.mainSlogan-2')
        }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.explanation-inner {
  width: 100%;
  height: 100%;
  @include flex($dir: column, $justify: space-between);
  @include desktop {
  }
  @include tablet {
    padding-left: 12px;
  }
  .explanation-title {
    margin-bottom: 36px;
    .title-text {
      @include desktop {
        display: inline;
        @include bold(40);
        line-height: 60px;
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
    .color-title {
      color: $main;
    }
    @include mobile {
      display: none;
    }
  }
}
</style>
