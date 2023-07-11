<template>
  <section
    class="fixed top-0 left-0 z-[99999] flex h-[100vh] max-h-[100vh] w-[100vw] overflow-auto"
  >
    <div
      class="fixed top-0 left-0 h-full w-full cursor-pointer bg-black/50"
      @click="emits('close')"
    ></div>

    <div
      class="popup-content relative m-auto flex flex-col flex-nowrap items-center overflow-hidden rounded-8 bg-white pt-42"
    >
      <IconBase
        class="absolute top-14 right-14 cursor-pointer"
        icon-name="close"
        icon-color="gray-450"
        icon-hover-color="gray-700"
        :width="24"
        :height="24"
        @click="emits('close')"
      />

      <div class="mb-12 flex w-full flex-col items-center">
        <span class="text-26 font-medium">Book a Demo</span>
      </div>

      <div class="calendly-wrapper">
        <div
          class="calendly-inline-widget"
          id="calendly"
          :data-url="calendlyUrl"
          style="position: relative; min-width: 320px"
        ></div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { PropType, computed, onMounted, onUnmounted, ref } from 'vue'
import { IconBase } from '/Components/EN'

const props = defineProps({
  product: String as PropType<'all' | 'zmaps'>,
})
const emits = defineEmits(['close'])
const calendlyUrl = computed(() =>
  props.product === 'zmaps'
    ? 'https://calendly.com/zenerate/z-maps-demo'
    : 'https://calendly.com/d/yrk-k6f-zbv?hide_gdpr_banner=1'
)

onMounted(() => {
  console.log(props.product)
  const head = document.querySelector('head')
  const script = document.createElement('script')
  script.setAttribute(
    'src',
    'https://assets.calendly.com/assets/external/widget.js'
  )
  head.appendChild(script)

  try {
    Calendly.initInlineWidget({ url: calendlyUrl.value })
  } catch (error) {
    console.error(error)
  }
})

onUnmounted(() => {
  try {
    document.body
      .querySelectorAll('.calendly-spinner')
      .forEach((el) => el.remove())
    document.body
      .querySelectorAll("iframe[title='Select a Date & Time - Calendly']")
      .forEach((el) => el.remove())
  } catch (error) {
    console.error(error)
  }
})
</script>
<style lang="scss" scoped>
.popup-content {
  width: 80%;
  min-width: 320px;
  max-width: 1200px;

  .calendly-wrapper {
    width: 100%;

    #calendly {
      display: relative;
      width: 100%;
      height: 1300px;
      max-height: 624px;
    }
  }
}
</style>
