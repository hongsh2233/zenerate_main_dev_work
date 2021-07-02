<template>
  <div class="module-partnership-wrapper module-item-wrapper">
    <div class="partnership-inner">
      <div class="partnership-title">{{ $t('module.partnership.title') }}</div>
      <div class="partnership-contact caption-small hover-pointer" @click="router.push('/main/contact')">
        {{ $t('module.partnership.caption') }}
      </div>
      <div class="spacer"></div>
      <div class="partnership-content">
        <span>{{ $t('module.partnership.contents[0]') }} </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {useRouter} from "vue-router"
const router = useRouter()
</script>
<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
.partnership-inner {
  width: 100%;
  height: 100%;
  padding-top: 24px;
  @include desktop {
    padding: 40px 0px;
    padding-left: 32px;
  }
  @include tablet {
    padding-top: 48px;
    padding-left: 12px;
  }
  @include mobile {
    margin-bottom: 24px;
  }

  .partnership-title {
    @include desktop {
      @include medium(48);
      margin-bottom: 32px;
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
  .partnership-content {
    @include desktop {
      @include medium(20);
    }
    @include tablet {
      @include medium(20);
    }

    .click {
      font-weight: $bold;
    }
  }
}
</style>
