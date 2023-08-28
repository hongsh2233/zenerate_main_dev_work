<template>
  <div class="module-partnership-wrapper module-item-wrapper">
    <div class="partnership-inner">
      <div
        class="partnership-caption caption-small hover-pointer"
        @click="router.push('/kr/main/contact')"
      >
        {{ $t('module.partnership.caption') }}
      </div>
      <div class="partnership-title">{{ $t('module.partnership.title') }}</div>
      <div class="partnership-content">
        <span>{{ $t('module.partnership.contents[0]') }} </span>
      </div>
      <div class="partner-image-wrapper">
        <img class="partner-image" src="/img/partners/partner_hyundai.png" />
        <img class="partner-image" src="/img/partners/partner_hdc.png" />
        <img class="partner-image" src="/img/partners/partner_kad.png" />
        <img class="partner-image" src="/img/partners/partner_sola.png" />
        <img class="partner-image" src="/img/partners/partner_neovalue.png" />
        <img class="partner-image" src="/img/partners/partner_oltman.png" />
        <img class="partner-image" src="/img/partners/partner_igis.png" />
        <img class="partner-image" src="/img/partners/partner_cushman.png" />

        <img class="partner-image" src="/img/partners/partner_shinyoung.png" />
        <img class="partner-image" src="/img/partners/partner_mdm.png" />
        <img class="partner-image" src="/img/partners/partner_hoban.png" />
        <img class="partner-image" src="/img/partners/partner_krypton.png" />
        <img class="partner-image" src="/img/partners/partner_bluepoint.png" />
        <img class="partner-image" src="/img/partners/partner_oneoone.png" />
        <img class="partner-image" src="/img/partners/partner_planh.png" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<style lang="scss" scoped>
.partnership-inner {
  width: 100%;
  height: 100%;
  @include tablet {
    padding-right: 12px;
  }
  .partnership-caption {
    line-height: 40px;
  }
  .partnership-title {
    @include desktop {
      @include bold(28);
      margin-bottom: 32px;
    }
    @include tablet {
      @include medium(40);
      margin-bottom: 24px;
    }
    @include mobile {
      @include medium(32);
      margin-bottom: 16px;
    }
  }
  .partnership-content {
    @include desktop {
      @include medium(20);
      margin-bottom: 28px;
    }
    @include tablet {
      @include medium(16);
    }
    @include mobile {
      @include medium(12);
      margin-bottom: 12px;
    }
    .click {
      font-weight: $bold;
    }
  }
  .partner-image-wrapper {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    .partner-image {
      width: 100%;
      max-height: 72px;
      object-fit: contain;
      margin: 0px 10px;
      @include mobile {
        max-height: 60px;
      }
    }
  }
}
</style>
