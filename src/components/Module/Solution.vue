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
  @include mobile{
    padding-left: 0px;
    margin-top: 10px;
    padding-bottom: 20px;
  }
  @include flex($dir: row, $justify: space-between);
  .solution-title {
    width: 216px;
    @include bold(28);
    @include mobile{
      width: 60%;
      @include medium(32);
      margin-bottom: 16px;
    }
  }
  .solution-content {
    width: 412px;
    @include medium(16);
    @include mobile{
      @include medium(16);
      padding-bottom: 16px;
    }
  }
}
</style>
