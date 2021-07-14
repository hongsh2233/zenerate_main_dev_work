<template>
  <div class="module-youtube-wrapper module-item-wrapper">
    <div class="youtube-inner">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/onFOGFiA0xg"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
<script lang="ts" scoped></script>
<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.module-youtube-wrapper {
  .youtube-inner {
    width: 688px;
    height: 339px;
    @include desktop {
      margin-top: 40px;
      margin-left: 56px;
    }
    @include tablet {
      width: 100%;
      padding: 24px 0px;
      padding-left: 12px;
      iframe{
        width: 100%;
        object-fit: cover;
      }
    }
    @include mobile {
      width: 100%;
      height: 300px;
      object-fit: cover;
      padding: 24px 0px;
      
    }
  }
  @include mobile{
    margin-bottom: 40px;
  }
}
</style>
