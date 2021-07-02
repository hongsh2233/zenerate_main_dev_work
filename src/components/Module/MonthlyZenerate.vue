<template>
  <div class="module-monthly-wrapper module-item-wrapper">
    <div class="monthly-inner">
      <div class="monthly-title" :class="{ en: locale === 'en' }">
        <span class="hidden-mobile hidden-tablet">{{
          $t('module.monthlyZenerate.title.desktop')
        }}</span>
        <span class="hidden-desktop">{{
          $t('module.monthlyZenerate.title.mobile')
        }}</span>
      </div>
      <div class="monthly-caption caption-large hidden-tablet hidden-mobile">
        {{ $t('module.monthlyZenerate.caption') }}
      </div>
      <div class="monthly-caption caption-small hidden-desktop">
        {{ $t('module.monthlyZenerate.caption') }}
      </div>

      <div class="spacer"></div>
      <div class="monthly-subscription">
        <div class="subscription-title">
          <span>
            {{ $t('module.monthlyZenerate.contents[0]') }}
          </span>
          <!-- <span class="hidden-desktop"
            >{{ $t('module.monthlyZenerate.contents[1]') }}
            <span class="notion hover-pointer">{{
              $t('module.monthlyZenerate.contents[2]')
            }}</span
            >{{ $t('module.monthlyZenerate.contents[3]') }}</span
          > -->
        </div>
        <div
          class="subscription-button hover-pointer"
          @click="toggleNewsLetterModal(true)"
        >
          {{ $t('module.monthlyZenerate.subscription') }}
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
@import "../../assets/scss/variables.scss";
.monthly-inner {
  width: 100%;
  height: 100%;
  padding-top: 40px;
  @include desktop {
    padding-right: 20px;
  }
  @include tablet {
    padding-top: 48px;
    padding-right: 12px;
  }
  @include mobile {
    padding-top: 24px;
  }

  .monthly-title {
    @include desktop {
      padding-right: 24px;
      @include medium(56);
      margin-bottom: 88px;
      &.en {
        font-size: 48px;
        margin-bottom: 66px;
      }
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
        margin-bottom: 32px;
      }
      .subscription-button {
        @include bold(20);
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
        @include bold(24);
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
