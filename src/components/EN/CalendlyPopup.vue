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

      <div class="mb-12 flex w-full max-w-[740px] flex-col">
        <span class="text-center text-26 font-medium">Book a Demo</span>
        <button
          v-if="product === 'all' && showBackButton"
          @click="restartCalendly"
          class="ml-20 h-32 w-fit text-left text-gray-600 hover:text-gray-700"
        >
          &lt; Go Back
        </button>
      </div>

      <Calendly v-if="showCalendly" :calendly-url="calendlyUrl" />
    </div>
  </section>
</template>
<script lang="ts" setup>
import { PropType, computed, nextTick, ref } from 'vue'
import { IconBase } from '/Components/EN'
import Calendly from './Calendly.vue'

const props = defineProps({
  product: String as PropType<'all' | 'zenerate-app'>,
})
const emits = defineEmits(['close'])
const calendlyUrl = computed(() =>
  props.product === 'zenerate-app'
    ? 'https://calendly.com/zenerate/app-demo'
    : 'https://calendly.com/d/yrk-k6f-zbv?hide_gdpr_banner=1'
)

const showBackButton = ref(false)

const showCalendly = ref(true)
const restartCalendly = () => {
  showCalendly.value = false
  nextTick(() => {
    showBackButton.value = false
    showCalendly.value = true
  })
}

const isCalendlyEvent = (e) => {
  return (
    e.origin === 'https://calendly.com' &&
    e.data.event &&
    e.data.event.indexOf('calendly.') === 0
  )
}

window.addEventListener('message', function (e) {
  if (isCalendlyEvent(e)) {
    if (e.data.event === 'calendly.event_type_viewed')
      showBackButton.value = true
  }
})
</script>
<style lang="scss" scoped>
.popup-content {
  width: 80%;
  min-width: 320px;
  max-width: 990px;
}
</style>
