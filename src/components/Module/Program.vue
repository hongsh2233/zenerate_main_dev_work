<template>
  <div class="module-program-wrapper module-item-wrapper">
    <div class="program-inner">
      <div
        class="program-caption caption-small hover-pointer"
        @click="router.push('/main/service')"
      >
        {{ $t('module.program.caption') }}
      </div>
      <div class="program-title">{{ $t('module.program.title') }}</div>
      <div class="program-content">
        <p>
          {{ $t('module.program.contents[0]') }}
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.program-inner {
  width: 100%;
  height: 100%;
  @include mobile {
    margin-bottom: 40px;
  }
  @include tablet{
    padding-left: 12px;
  }
  .program-title {
    @include desktop {
      @include bold(40);
      line-height: 60px;
      margin-bottom: 40px;
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
  .program-content {
    p {
      margin: 0;
      padding: 0;
      @include medium(16);
      @include mobile {
        @include medium(12);
      }
    }
  }
}
</style>
