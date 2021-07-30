<template>
  <div
    class="module-career-wrapper module-item-wrapper"
    v-show="locale !== 'en'"
  >
    <div class="module-career-inner">
      <div class="career-caption caption-small">
        {{ $t('module.career.caption') }}
      </div>
      <div class="career-title">
        {{ $t('module.career.title') }}
      </div>
      <div class="career-content">
        <span>{{ $t('module.career.contents[0]') }} </span>
      </div>
      <div class="contact-link">
        <button @click="router.push('/kr/main/career')">
          {{ $t('module.career.button') }}
        </button>
        <div class="vector-wrapper">
          <div class="arrow-right"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const router = useRouter()
</script>
<style lang="scss" scoped>

.module-career-inner {
  width: 100%;
  height: 100%;
  padding: 0px;
  padding-left: 56px;
  @include tablet {
    padding: 0;
    padding-left: 12px;
  }
  @include mobile {
    margin-top: 40px;
    padding: 0;
    margin-bottom: 40px;
  }
  .career-caption {
    line-height: 40px;
  }
  .career-title {
    @include desktop {
      @include bold(28);
      margin-bottom: 32px;
    }
    @include mobile {
      @include bold(14);
      margin-bottom: 8px;
    }
  }
  .career-content {
    @include desktop {
      @include medium(20);
      margin-bottom: 28px;
    }
    @include tablet {
      @include medium(16);
      margin-bottom: 28px;
    }
    @include mobile {
      @include medium(12);
      margin-bottom: 24px;
    }
  }
  .contact-link {
    text-align: end;
    position: relative;
    button {
      position: relative;
      z-index: 20;
      color: $main;
      margin-right: 40px;
      @include bold(16);
      @include mobile {
        @include bold(14);
      }
    }
    .vector-wrapper {
      z-index: 10;
      width: 100%;
      position: absolute;
      top: 15px;
      .arrow-right {
        z-index: 20;
        width: 100%;
        height: 5px;
        border-top: 1px solid $main;
        margin-top: 20px;
        margin-bottom: 30px;
        transform: rotate(180deg);
        &::after {
          content: '';
          display: block;
          width: 1px;
          height: 45px;
          background-color: $main;
          transform: rotate(-45deg) translate(15px, 4px);
        }
      }
    }
  }
}
</style>
