<template>
  <section class="section-footer">
    <div class="footer-sns">
      <a href="https://www.instagram.com/zenerate.ai/" class="hover-pointer"
        >Instagram</a
      >
      <div class="horizontal-spacer"></div>
      <a href="https://www.facebook.com/zenerate/" class="hover-pointer"
        >Facebook</a
      >
      <div class="horizontal-spacer"></div>
      <a href="https://zenerate.medium.com/" class="hover-pointer">Medium</a>
    </div>
    <div class="footer-text copyright">
      ⓒ Zenerate Inc. All rights reserved.
    </div>
    <div class="footer-text ceo">{{ $t('footer.CEO') }}</div>
    <div class="footer-text mail">
      <a href="mailto:help@zenerate.ai">help@zenerate.ai</a>
    </div>
    <div class="footer-text address">
      {{ $t('footer.address') }}
    </div>
  </section>
</template>
<script lang="ts" scoped></script>
<style lang="scss" scoped>
.section-footer {
  border-top: solid 2px $main;
  padding: 12px 0px;
  padding-bottom: 48px;
  color: $main;
  align-items: center;
  .footer-sns {
    margin-bottom: 24px;
    @include flex;
    a {
      @include bold(20);
      @include mobile {
        font-size: 12px;
      }
    }
    .horizontal-spacer {
      margin: auto 28px;
      border-left: solid 1px $main;
      width: 1px;
      height: 19px;
      @include mobile {
        margin: auto 20px;
      }
    }
  }
  .footer-text {
    @include medium(14);
    @include mobile {
      font-size: 12px;
    }
    margin-bottom: 8px;
    &.copyright {
      margin-bottom: 32px;
    }
    &.mail a {
      text-decoration: underline;
    }
  }
}
</style>
