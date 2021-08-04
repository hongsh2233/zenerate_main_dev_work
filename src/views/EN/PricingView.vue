<template>
  <section class="section-pricing">
    <div class="pricing-wrapper">
      <div class="pricing-title">Pricing</div>
      <div class="pricing-subtitle">Subscription Plans</div>
      <div class="pricing-content-wrapper">
        <div class="pricing-content">
          <h1 class="content-title">BASIC</h1>
          <div class="content-pricing">Coming Soon</div>
          <ul class="content-detail">
            <li>
              Parcel, Zoning code, Demographic data with comparing
              functionbetween different area.
            </li>
            <li>
              2D map layers including zoning, building height, opportunity zone
              etc.
            </li>
            <li>
              AI Engine providing 1000+ alternatives Architectural Drawing with
              detailed design & 3D modeling for feasibility study for each
              development project
            </li>
            <li>
              CAD File / solution analysis excel file (including project
              summary, rent analysis, cash flow analysis) download.
            </li>
          </ul>
        </div>
        <div class="pricing-content">
          <h1 class="content-title">PREMIUM</h1>
          <div class="content-pricing">Coming Soon</div>
          <ul class="content-detail">
            <li>Everything in basic plan</li>
            <li>
              Zenerate™ AI Engine providing 50,000+ alternatives Architectural
              Drawing with detailed design & 3D modeling for feasibility study
              for each development project
            </li>
            <li>Parking and Retail layout</li>
            <li>
              Zenerate™ AI Engine predicting rent price based on data for
              residential units.
            </li>
          </ul>
        </div>
        <div class="pricing-content">
          <h1 class="content-title">CONSULTING</h1>
          <div
            class="content-pricing hover-pointer"
            @click="router.push(`/contact`)"
          >
            Contact Us
          </div>
          <ul class="content-detail">
            <li>Everything in premium plan</li>
            <li>
              Customize service depending on customer's requirement including
              design details, construction limitation, cash flow
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="section section-footer fp-auto-height">
      <Footer />
    </div>
  </section>
</template>
<script lang="ts" setup>
import { onMounted, computed } from 'vue'
import Store from '/Store/index'
import { useRouter } from 'vue-router'

// @ts-ignore
import Footer from '/Components/EN/Footer.vue'

const fullpage = computed(() => Store.state.root.FullPage)
const router = useRouter()
onMounted(() => {
  fullpage.value.destroy()
})
</script>
<style lang="scss" scoped>
.section-pricing {
  background-image: url('/en/img/pricing_placeholder.webp');
  background-size: cover;
  background-position: center;

  height: 100vh;
  min-height: 100%;
  &::before {
    content: '';
    opacity: 0.6;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: #ffffff;
  }
  .pricing-wrapper {
    height: 100%;
    width: 1600px;
    position: relative;
    margin: auto;
    padding: 100px 96px;
    .pricing-title {
      padding-top: 70px;
      text-align: center;
      @include bold(16);
      line-height: 40px;
      color: $main;
    }
    .pricing-subtitle {
      text-align: center;
      @include bold(26);
      line-height: 40px;
    }
    .pricing-content-wrapper {
      padding-top: 48px;
      @include flex($justify: space-around);
      .pricing-content {
        width: 420px;
        height: 500px;
        box-shadow: 1px 1px 10px 0px rgba($black-1, 0.2);
        border-radius: 20px;
        background-color: white;
        &:hover {
          box-shadow: 0 0 0 3px $main;
        }
        .content-title {
          text-align: center;
          @include bold(18);
          margin: 24px 0;
        }
        .content-pricing {
          text-align: center;
          margin-bottom: 12px;
          color: $main;
          @include bold(32);
        }
        .content-detail {
          padding: 0px 30px;
          li {
            text-align: center;
            padding: 20px 0px;
            @include medium(14);
            border-bottom: 1px solid rgba($black-1, 0.2);
          }
        }
      }
    }
  }
}
</style>
