<template>
  <div class="module-solution-wrapper module-item-wrapper">
    <div class="solution-inner">
      <div class="solution-title">{{ $t('module.solution.title') }}</div>
      <div class="solution-content">
        <p>
          {{ $t('module.solution.contents[0]') }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.solution-inner {
  width: 100%;
  height: 100%;
  margin-top: 40px;
  padding-left: 56px;
  @include mobile {
    padding-left: 0px;
    margin-top: 10px;
    padding-bottom: 20px;
  }
  @include tablet {
    padding-left: 0px;
    padding-right: 12px;
  }
  @include flex($dir: row, $justify: space-between);
  .solution-title {
    width: 228px;
    @include bold(28);
    @include mobile {
      width: 100%;
      @include medium(32);
      margin-top: 6px;
      margin-bottom: 8px;
    }
    @include tablet{
      width: 100%;
      @include medium(41);
      padding-bottom: 20px;
    }
  }
  .solution-content {
    width: 412px;
    @include medium(16);
    @include mobile {
      @include medium(12);
      padding-bottom: 16px;
    }
    @include tablet{
      @include medium(16);
    }
  }
}
</style>
