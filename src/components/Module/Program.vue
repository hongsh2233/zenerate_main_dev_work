<template>
  <div class="module-program-wrapper module-item-wrapper">
    <div class="program-inner">
      <div class="program-title">{{ $t('module.program.title') }}</div>
      <div class="program-caption caption-small">
        {{ $t('module.program.caption') }}
      </div>
      <div class="spacer"></div>
      <div class="program-content">
        <p>
          {{ $t('module.program.contents[0]') }}
        </p>
        <p>
          {{ $t('module.program.contents[1]') }}
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.program-inner {
  width: 100%;
  height: 100%;
  padding-top: 24px;
  @include desktop {
    padding: 40px 24px;
  }
  .program-title {
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
  .program-content {
    p {
      margin: 0;
      padding: 0;
      @include medium(20);
      @include mobile {
        font-size: 15px;
      }
    }
  }
}
</style>
