<template>
  <div class="module-consulting-wrapper module-item-wrapper">
    <div class="consulting-inner">
      <div class="image-wrapper" :class="{ inactive: currentImage !== 1 }">
        <img :src="`/img/main_service${locale === 'en' ? '_en' : ''}_1.png`" />
      </div>
      <div class="image-wrapper" :class="{ inactive: currentImage !== 2 }">
        <img :src="`/img/main_service${locale === 'en' ? '_en' : ''}_2.png`" />
      </div>
      <div class="image-wrapper" :class="{ inactive: currentImage !== 3 }">
        <img :src="`/img/main_service${locale === 'en' ? '_en' : ''}_3.png`" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const currentImage = ref(1)
const interval = ref(null)

onMounted(() => {
  interval.value = setInterval(() => {
    if (currentImage.value === 3) currentImage.value = 1
    else currentImage.value += 1
  }, 5000)
})
onBeforeUnmount(() => {
  if (interval.value) {
    clearInterval(interval.value)
    interval.value = null
  }
})
</script>
<style lang="scss" scoped>
.consulting-inner {
  width: 100%;
  height: 100%;
  @include flex($justify: space-between);
  @include relative;
  @include desktop {
    padding-left: 24px;
  }
  @include tablet {
    padding-left: 12px;
    margin-bottom: 24px;
  }
  .image-wrapper {
    flex: 1;
    opacity: 1;
    transition: opacity 1s ease;
    @include desktop {
      position: absolute;
    }
    img {
      max-width: 100%;
      max-height: 100%;
    }
    &.inactive {
      @include desktop {
        opacity: 0;
        position: absolute;
      }
    }
  }
}
</style>
