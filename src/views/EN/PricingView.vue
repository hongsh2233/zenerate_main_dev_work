<template>
  <section id="fullpage-pricing">
    <div class="section section-pricing">
      <div class="section-inner inner-pricing">
        <div class="pricing-wrapper">
          <div class="pricing-title">PRICING</div>
          <div class="pricing-subtitle">Subscription Plans</div>
          <div class="pricing-content-wrapper">
            <div class="pricing-content">
              <p class="content-title">BASIC</p>
              <ul class="content-detail">
                <li>Parcel, Zoning code, Demographic data</li>
                <li>2D map layers</li>
                <li>AI Engine providing 1000+ design alts</li>
                <li>CAD File / solution analysis excel file</li>
              </ul>
            </div>
            <div class="pricing-content">
              <p class="content-title">PREMIUM</p>
              <ul class="content-detail">
                <li>Parcel, Zoning code, Demographic data</li>
                <li>2D map layers</li>
                <li>AI Engine providing 50000+ design alts</li>
                <li>Parking & Retail Floor Plan</li>
                <li>Zenerate™ AI Engine predicting rent price</li>
              </ul>
            </div>
            <div class="pricing-content">
              <p class="content-title">CONSULTING</p>
              <ul class="content-detail">
                <li>Parcel, Zoning code, Demographic data</li>
                <li>2D map layers</li>
                <li>AI Engine providing 50000+ design alts</li>
                <li>Parking & Retail Floor Plan</li>
                <li>Zenerate™ AI Engine predicting rent price</li>
                <li>
                  Customize everything -- design details, construction
                  limitation, cash flow.
                </li>
              </ul>
            </div>
          </div>
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
  .inner-pricing {
    height: fit-content;
  }
  background-size: cover;
  background-position: center;
  height: content-fit;
  .pricing-wrapper {
    height: 100%;
    width: 100%;
    position: relative;
    margin: 40px auto;
    padding: 0px 60px;
    .pricing-title {
      padding-top: 48px;
      text-align: center;
      @include medium(18);
      line-height: 40px;
      color: $cr-main-blue;
    }
    .pricing-subtitle {
      text-align: center;
      @include medium(26);
      line-height: 40px;
    }
    .pricing-content-wrapper {
      padding-top: 24px;
      height: calc(100% - 128px - 60px);
      @include flex($justify: space-between);
      .pricing-content {
        width: 300px;
        min-height: 600px;
        height: 100%;
        padding: 20px 10px;
        overflow-y: scroll;
        @include elevation-2;
        border-radius: 20px;
        background-color: white;
        .content-title {
          text-align: center;
          @include bold(16);
          line-height: 40px;
          color: $cr-main-blue;
          margin-bottom: 24px;
        }
        .content-pricing {
          text-align: center;
          margin-bottom: 12px;
          color: $main;
          @include bold(32);
        }
        .content-detail {
          padding: 0px 8px 0px 24px;
          margin: auto 0px;
          li {
            list-style: disc;
            text-align: left;
            margin-bottom: 20px;
            @include regular(14);
          }
        }
      }
    }
  }
}
</style>
