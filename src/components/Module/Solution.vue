<template>
  <div class="module-solution-wrapper module-item-wrapper">
    <div class="solution-inner">
      <div class="solution-title">제너레잇 솔루션은 무엇이 다른가요?</div>
      <div class="solution-content">
        <p>
          제너레잇의 솔루션은 부동산 개발 초기 사업성 검토시 조건에 맞는 수백만
          가지 건물 형태, 내부 구성, 상품 구성을 생성하고 실제 가격을 반영 후
          평가하여 최고의 수익안을 제시합니다.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
.solution-inner {
  width: 100%;
  height: 100%;
  .solution-title{
      @include bold(28);
  }
  .solution-content{
      @include medium(16);
  }
}
</style>
