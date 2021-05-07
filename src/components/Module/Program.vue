<template>
  <div class="module-program-wrapper module-item-wrapper">
    <div class="program-inner">
      <div class="spacer hidden-mobile"></div>
      <div class="program-title">제너레잇 서비스와 이용 방법</div>
      <div class="spacer hidden-desktop hidden-tablet"></div>

      <div class="program-caption caption-small">프로그램 소개</div>
      <div class="program-content">
        <p>
          제너레잇은 부동산 개발 시 수익화와 효율성 등 고객 니즈에 맞춰 최적화된
          공간을 설계해주는 AI 기반 설계 솔루션을 제공하고 있습니다.
        </p>
        <p>
          알고리듬으로 가능한 모든 빌딩 디자인 대안을 검색하여 제공함으로써,
          건축 개발 프로젝트의 사업성을 극대화합니다.
        </p>
      </div>
      <div class="program-link" hover-pointer>
        <span>소개 영상 보기</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" scoped></script>
<style lang="scss" scoped>
.program-inner {
  width: 100%;
  height: 100%;
  padding-top: 24px;
  .program-title {
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
  .program-content {
    p {
      margin: 0;
      padding: 0;
      @include medium(24);
      @include mobile {
        font-size: 15px;
      }
    }
  }
  .program-link {
    margin: 16px 0px;
    @include bold(24);
    @include mobile {
      font-size: 15px;
    }
  }
}
</style>
