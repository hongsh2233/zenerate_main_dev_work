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
  @include flex($dir: row, $justify: space-between);
  .solution-title {
    width: 216px;
    @include bold(28);
  }
  .solution-content {
    width: 412px;
    @include medium(16);
  }
}
</style>
