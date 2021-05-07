<template>
  <div class="module-partnership-wrapper module-item-wrapper">
    <div class="partnership-inner">
      <div class="spacer hidden-mobile hidden-tablet"></div>
      <div class="partnership-title">파트너쉽?</div>
      <div class="spacer hidden-desktop"></div>
      <div class="partnership-contact caption-small">문의하기</div>
      <div class="partnership-content">
        <span
          >현재 시행, 건축설계,건설, 부동산 개발과 운영에 관계된 여러 회사들이
          사업수익의 극대화목표로 제너레잇과 협력하고 있습니다. 자세한
          내용은</span
        >
        <span class="click hover-pointer">클릭</span> 해서 문의 해주세요.
      </div>
    </div>
  </div>
</template>
<script lang="ts" scoped></script>
<style lang="scss" scoped>
.partnership-inner {
  width: 100%;
  height: 100%;
  padding-top: 24px;
  @include tablet {
    padding-top: 48px;
    padding-left: 12px;
  }
  @include mobile {
    margin-bottom: 24px;
  }

  .partnership-title {
    @include desktop {
      @include medium(50);
      margin-bottom: 24px;
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
      @include medium(24);
    }
    @include tablet {
      @include medium(24);
    }

    .click {
      font-weight: $bold;
    }
  }
}
</style>
