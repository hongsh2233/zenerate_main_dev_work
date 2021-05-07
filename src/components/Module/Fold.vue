<template>
  <div class="module-fold-wrapper module-item-wrapper">
    <div class="fold-inner">
      <div class="fold-company fold-item">
        <div class="fold-title company">
          <span class="title-number">01</span>
          <span class="title-text">회사소개</span>
        </div>
      </div>
      <div class="fold-news fold-item">
        <div class="fold-title news">
          <span class="title-number">02</span>
          <span class="title-text">새소식</span>
        </div>
      </div>
      <div class="fold-program fold-item">
        <div class="fold-title program">
          <span class="title-number">03</span>
          <span class="title-text">프로그램 소개</span>
        </div>
      </div>
      <div class="fold-contact fold-item">
        <div class="fold-title contact">
          <span class="title-number">04</span>
          <span class="title-text">문의</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" scoped></script>
<style lang="scss" scoped>
.fold-inner {
  width: 100%;
  height: 100%;
  @include relative;
  @include flex();
  .fold-item {
    flex: 1;
    height: 100%;
    .fold-title {
      height: 100%;
      @include flex($dir: column, $justify: space-between);
      text-align: center;
      span {
        color: white;
        @include desktop {
          @include bold(32);
        }
        @include tablet {
          @include bold(32);
        }
        @include mobile {
          @include bold(24);
        }
      }
      .title-text {
        writing-mode: vertical-rl;
        text-orientation: sideways;
        transform: rotate(180deg);
        align-self: center;
      }
    }
  }
}
</style>
