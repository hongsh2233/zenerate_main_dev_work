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
      <button
        v-if="trigger !== 'zenapp' && showBackButton"
        @click="restartCalendly"
        class="absolute top-14 left-14 h-24 text-gray-600 hover:text-gray-700"
      >
        &lt; Go Back
      </button>

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

      <Calendly v-if="showCalendly" :calendly-url="calendlyUrl" />
    </div>
  </section>
</template>
<script lang="ts" setup>
import { PropType, computed, nextTick, ref } from 'vue'
import { IconBase } from '/Components/EN'
import Calendly from './Calendly.vue'

const props = defineProps({
  trigger: String as PropType<'zenapp' | 'header' | 'laststrip'>,
})
const emits = defineEmits(['close'])

const CALENDLY_URL_DIC = {
  default: 'https://calendly.com/d/yrk-k6f-zbv',
  zenapp:
    'https://calendly.com/zenerate/app-demo?&utm_source=homepage-zenapp&utm_medium=website',
  header:
    'https://calendly.com/d/yrk-k6f-zbv?utm_source=homepage-header&utm_medium=website',
  laststrip:
    'https://calendly.com/d/yrk-k6f-zbv?utm_source=homepage-laststrip&utm_medium=website',
  modularlandingpage:
    'https://calendly.com/zenerate/modular-demo?&utm_source=modularlandingpage&utm_medium=website',
}
const calendlyUrl = computed(() => {
  const trigger = props.trigger ?? 'default'
  return CALENDLY_URL_DIC[trigger]
})

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
  max-width: 1200px;
}
</style>
