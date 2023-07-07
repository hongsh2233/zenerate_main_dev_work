<template>
  <section
    class="fixed top-0 left-0 z-[12000] flex h-[100vh] max-h-[100vh] w-[100vw] items-center justify-center overflow-auto"
  >
    <div
      class="z-1 fixed top-0 left-0 h-full w-full cursor-pointer bg-black/50"
      @click.stop="() => emit('togglePopup', false)"
    ></div>

    <div
      class="relative flex w-[80vw] min-w-fit max-w-[1200px] flex-col flex-nowrap items-center overflow-hidden rounded-8 bg-white pt-42 shadow-200"
    >
      <IconBase
        class="absolute top-14 right-14 z-[1] cursor-pointer"
        icon-name="close"
        icon-color="gray-450"
        icon-hover-color="gray-700"
        :width="24"
        :height="24"
        @click="() => emit('togglePopup', false)"
      />

      <div class="mb-12 flex w-full flex-col items-center">
        <span class="text-26 font-medium">Book a Demo</span>
      </div>

      <div class="calendly-wrapper">
        <div
          id="calendly"
          data-url="https://calendly.com/zenerate/30min?hide_gdpr_banner=1"
          style="position: relative; min-width: 320px"
        ></div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { IconBase } from '.'

const emit = defineEmits(['togglePopup'])

onMounted(() => {
  const head = document.querySelector('head')
  const script = document.createElement('script')
  script.setAttribute(
    'src',
    'https://assets.calendly.com/assets/external/widget.js'
  )
  head.appendChild(script)

  try {
    Calendly.initInlineWidget({
      url: 'https://calendly.com/zenerate/30min?hide_gdpr_banner=1o',
    })
  } catch (error) {
    console.error(error)
  }
})
</script>
<style lang="scss" scoped>
.calendly-wrapper {
  width: 100%;

  #calendly {
    height: 1300px;
    max-height: 624px;
  }
}
</style>
