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
.youtube-inner {
  width: 100%;
  height: 100%;
  @include desktop {
    padding-bottom: 24px;
    padding-left: 24px;
  }  
  @include tablet {
    padding: 24px 0px;
  }
  @include mobile {
    padding: 16px 0px;
  }
}
</style>
