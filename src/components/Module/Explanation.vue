<template>
  <div class="module-explanation-wrapper module-item-wrapper">
    <div class="explanation-inner">
      <div class="explanation-title">
        <span class="title-text"
          >건축 가능한 모든 대안들을 생성하여 최고의 안을 선택하게
          도와드립니다.</span
        >
      </div>
      <div class="explanation-consulting">
        <span class="consulting-caption caption-small"> 컨설팅 서비스 </span>
        <span class="consulting-content">
          2020년 건축디자이너인 신봉재와 인공지능개발자/ 수학박사 정가혜가 공동
          창업하여 시드투자를  유치했고 한국과 미국시장을 대상으로 솔루션을
          제공한다. 빌딩 디자인의 문제를 수학과 알고리듬의 문제로 바꾸어
          해결하여 전례없는 방식으로 업계에서 새로운 길을 개척하고 있다.
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.explanation-inner {
  width: 100%;
  height: 100%;
  @include flex($dir: column, $justify: space-between);
  @include desktop {
    padding-left: 24px;
  }
  @include tablet {
    padding-left: 12px;
  }
  .explanation-title {
    margin-bottom: 24px;
    .title-text {
      @include desktop {
        @include medium(34);
      }
      @include tablet {
        @include medium(32);
      }
    }
    @include mobile {
      display: none;
    }
  }
  .explanation-consulting {
    margin-bottom: 16px;
    @include mobile {
      margin-bottom: 24px;
    }
    .consulting-content {
      @include desktop {
        display: none;
      }
      @include tablet {
        @include medium(15);
      }
      @include mobile {
        @include medium(15);
      }
    }
  }
}
</style>