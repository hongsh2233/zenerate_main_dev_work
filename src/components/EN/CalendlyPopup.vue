<template>
  <PopUpLayout
    class="z-demo-request-popup"
    :show-close-button="false"
    :close-on-keydown="false"
    @close="closePopup"
  >
    <div
      class="relative flex flex-col flex-nowrap items-center rounded-8 bg-white pt-42"
    >
      <div class="mb-12 flex w-full flex-col items-center">
        <span class="text-26 font-medium"
          ><span class="mb-4 font-semibold text-primary">Z-maps&nbsp;</span
          >Demo</span
        >
        <span class="text-center text-12 text-gray-700"
          >Get a demo to receive access to Z-maps.</span
        >
      </div>
      <BaseButton
        v-if="isLandingPage"
        class="absolute top-2 left-8"
        size="44"
        subvariant="gray600"
        before-icon="chevron-left"
        @click="goBack"
        >Back</BaseButton
      >
      <IconBase
        class="absolute top-14 right-14 z-[1] cursor-pointer"
        icon-name="close"
        icon-color="gray-450"
        icon-hover-color="gray-700"
        :width="24"
        :height="24"
        @click="closePopup"
      />
      <div class="calendly-wrapper">
        <div
          class="calendly-inline-widget"
          id="calendly"
          data-url="https://calendly.com/zenerate/z-maps-demo"
          style="position: relative; min-width: 320px"
        ></div>
      </div>
    </div>
  </PopUpLayout>
</template>
<script lang="ts" setup>
import { onMounted, ref, nextTick } from 'vue'
import { PopUpLayout, IconBase, BaseButton } from '/Components/UI'

const showCalendlyPopup = ref(true)
const togglsCalendlyPopup = (flag?: boolean) => {
  const f = flag == null ? !showCalendlyPopup.value : flag
  showCalendlyPopup.value = f
}

//   const goBack = () => {
//     UIStore.TOGGLE_CALENDLY_POPUP(false)
//     UIStore.TOGGLE_UPGRADE_PLAN_POPUP(true)
//   }

//   const closePopup = () => {
//     UIStore.TOGGLE_CALENDLY_POPUP(false)
//   }

//   onMounted(() => {
//     const head = document.querySelector('head')
//     const script = document.createElement('script')
//     script.setAttribute(
//       'src',
//       'https://assets.calendly.com/assets/external/widget.js'
//     )
//     head.appendChild(script)

//     try {
//       Calendly.initInlineWidget({
//         url: 'https://calendly.com/zenerate/z-maps-demo',
//       })
//     } catch (error) {
//       console.error(error)
//     }
//   })
</script>
<style lang="scss" scoped>
.calendly-wrapper {
  width: fit-content;

  #calendly {
    width: 710px;
    height: 1300px;
    max-height: 624px;
  }
}
</style>
