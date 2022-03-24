<template>
  <section id="fullpage-overview">
    <div class="section section-pricing fp-auto-height-responsive">
      <div class="section-inner inner-pricing"></div>
    </div>
    <div class="section section-footer fp-auto-height">
      <Footer />
    </div>
  </section>
</template>
<script lang="ts" setup>
import { onMounted, onBeforeUnmount, computed, ref } from 'vue'
import Store from '/Store/index'
import { useRouter } from 'vue-router'
import { PRICE_PLAN_CONTENT, CONSULT_PLAN_CONTENT } from '/Constants/pricePlan'
import Footer from '/Components/EN/Footer.vue'
import AOS from 'aos'
import { useMeta } from 'vue-meta'

// const fullpage = computed(() => Store.state.root.FullPage)
// const router = useRouter()
// onMounted(() => {
//   fullpage.value.destroy()
//   // fullpage.value.init('#fullpage-pricing', {
//   //   parallax: false,
//   //   offsetSections: false,
//   //   navigation: false,
//   // })
// })
</script>
<style lang="scss" scoped>
.section {
  @include relative;
  height: 100%;
}
.section-pricing {
  background-image: url('/en/img/background_wave.png');
  background-size: cover;
  background-repeat: no-repeat;
  .inner-pricing {
    width: 100%;
    height: 100%;
    padding: 160px 0px;
    @include en-tablet {
      padding: 132px 0px;
    }
    @include en-mobile {
      padding: 98px 0px;
    }
  }
  background-size: cover;
  background-position: center;
  cursor: default;
}
</style>
