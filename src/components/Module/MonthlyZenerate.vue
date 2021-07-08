<template>
  <div class="module-monthly-wrapper module-item-wrapper">
    <div class="monthly-inner">
      <div class="monthly-caption caption-large hidden-tablet hidden-mobile">
        {{ $t('module.monthlyZenerate.caption') }}
      </div>
      <div class="monthly-title" :class="{ en: locale === 'en' }">
        <span class="hidden-mobile hidden-tablet">{{
          $t('module.monthlyZenerate.title.desktop')
        }}</span>
        <span class="hidden-desktop">{{
          $t('module.monthlyZenerate.title.mobile')
        }}</span>
      </div>
      <div class="monthly-caption caption-small hidden-desktop">
        {{ $t('module.monthlyZenerate.caption') }}
      </div>
      <div class="monthly-subscription">
        <div class="subscription-title">
          <p>
            {{ $t('module.monthlyZenerate.contents[0]') }}
          </p>
          <p>{{ $t('module.monthlyZenerate.contents[1]') }}</p>
          <p>{{ $t('module.monthlyZenerate.contents[2]') }}</p>
          <!-- <span class="hidden-desktop"
            >{{ $t('module.monthlyZenerate.contents[1]') }}
            <span class="notion hover-pointer">{{
              $t('module.monthlyZenerate.contents[2]')
            }}</span
            >{{ $t('module.monthlyZenerate.contents[3]') }}</span
          > -->
        </div>
        <div class="subscription-button-wrapper">
          <div class="subscription-button">
            <span class="hover-pointer" @click="toggleNewsLetterModal(true)">{{
              $t('module.monthlyZenerate.subscription')
            }}</span>
          </div>
          <div class="vector-wrapper">
            <svg
              width="413"
              height="28"
              viewBox="0 0 413 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 27H412L385.423 1"
                stroke="#4747FF"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <NewsLetterModal
      v-if="showNewsLetterModal"
      @close="showNewsLetterModal = false"
    ></NewsLetterModal>
  </div>
</template>
<script lang="ts" setup>
// @ts-ignore
import NewsLetterModal from '/Components/NewsLetterModal.vue'

import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

import { ref, computed, onMounted } from 'vue'
const showNewsLetterModal = ref(false)
const toggleNewsLetterModal = (flag) => {
  if (flag != null) showNewsLetterModal.value = flag
  else showNewsLetterModal.value = !showNewsLetterModal.value
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.monthly-inner {
  width: 100%;
  height: 100%;
  @include flex($dir: column);
  padding-top: 40px;
  @include desktop {
  }
  @include tablet {
    padding-top: 48px;
    padding-right: 12px;
  }
  @include mobile {
    padding-top: 24px;
  }
  .monthly-caption {
    @include desktop {
      padding-bottom: 4px;
      height: 40px;
    }
  }
  .monthly-title {
    @include desktop {
      padding-right: 24px;
      @include bold(28);
      margin-bottom: 28px;
    }
    @include tablet {
      @include medium(50);
      margin-bottom: 24px;
    }
    @include mobile {
      @include medium(32);
      margin-bottom: 16px;
    }
  }
  .monthly-subscription {
    padding-right: 12px;
    @include desktop {
      .subscription-title {
        @include medium(20);
        margin-bottom: 40px;
      }
      .subscription-button-wrapper {
        position: relative;
        margin-top: auto;
        .subscription-button {
          span {
            margin-right: 43px;
          }
        }
        .vector-wrapper {
          position: absolute;
          top: 10px;
          z-index: -1;
        }
        @include bold(20);
        text-align: right;
        color: $main;
      }
    }
    @include tablet {
      .subscription-title {
        @include medium(24);
        margin-bottom: 24px;
        .notion {
          font-weight: $bold;
        }
      }
      .subscription-button {
        @include bold(16);
      }
    }
    @include mobile {
      .subscription-title {
        @include medium(15);
        margin-bottom: 16px;
        .notion {
          font-weight: $bold;
        }
      }
      .subscription-button {
        color: $main;
        @include bold(15);
      }
    }
  }
}
</style>
