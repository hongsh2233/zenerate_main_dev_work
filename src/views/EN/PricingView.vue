<template>
  <section id="fullpage-pricing">
    <div class="section section-pricing">
      <div class="section-inner inner-pricing">
        <div
          class="pricing-wrapper"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-offset="-1500"
          data-aos-duration="300"
        >
          <div class="pricing-title">PRICING</div>
          <div class="pricing-subtitle">Subscription Plans</div>
          <div class="pricing-content-wrapper">
            <div class="pricing-content">
              <div class="content-title">
                <p>BASIC</p>
                <p>(Online only)</p>
              </div>
              <ul class="content-detail">
                <li>Instant Feasibility Alternatives</li>
                <li>2D Map Layers</li>
                <li>CAD Files</li>
                <li>Solution Analysis Spreadsheets</li>
                <li>Residential Floor Plans</li>
              </ul>
            </div>
            <div class="pricing-content">
              <div class="content-title">
                <p>PREMIUM</p>
                <p>(Online only)</p>
              </div>
              <ul class="content-detail">
                <li>
                  Zenerate™ AI Engine: 1,000 ~ 50,000+ Design Alternatives
                </li>
                <li>Rent/Sale Price Estimates</li>
                <li>2D Map Layers</li>
                <li>CAD Files</li>
                <li>Solution Analysis Spreadsheets</li>
                <li>Parking & Commercial Floor Plans</li>
                <li>Parking & Residential Floor Plans</li>
                <li>Cash Flow Projections</li>
              </ul>
            </div>
            <div class="pricing-content">
              <div class="content-title">
                <p>CONSULTING</p>
                <p>(Report + Web Access)</p>
              </div>
              <ul class="content-detail">
                <li>Zenerate™ AI Engine: 50,000+ Design Alternatives</li>
                <li>Rent/Sale Price Estimates</li>
                <li>2D Map Layers</li>
                <li>CAD Files</li>
                <li>Solution Analysis Spreadsheets</li>
                <li>Parking & Commercial Floor Plans</li>
                <li>Parking & Residential Floor Plans</li>
                <li>
                  Fully Customizable: Design Details, Construction Constraints,
                  Cash Flow Projections
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
.section {
  background-color: #fafafc;
}
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
    padding: 0px 33px 0px 40px;
    .pricing-title {
      padding-top: 48px;
      text-align: center;
      @include medium(18);
      line-height: 40px;
      color: #7a87f9;
      @include en-tablet {
        padding-top: 0;
      }
      @include en-mobile {
        padding-top: 0;
      }
    }
    .pricing-subtitle {
      @include medium(26);
      text-align: center;
      line-height: 40px;
      margin-bottom: 30px;
    }
    .pricing-content-wrapper {
      @include flex($justify: space-between);
      padding-top: 24px;
      height: calc(100% - 128px - 60px);
      .pricing-content {
        @include elevation-2;
        width: 320px;
        height: 520px;
        padding: 20px 10px 20px 20px;
        border-radius: 20px;
        background-color: white;

        @include en-mobile {
          height: 100%;
          padding: 20px 10px;
        }
        .content-title {
          text-align: center;
          @include bold(16);
          color: $cr-main-blue;
          margin-bottom: 24px;
          p:first-child {
            font-size: 22px;
          }
        }
        .content-pricing {
          text-align: center;
          margin-bottom: 12px;
          color: $main;
          @include bold(32);
        }
        .content-detail {
          padding: 0px 16px 0px 28px;
          margin: auto 0px;
          li {
            list-style: disc;
            text-align: left;
            margin-bottom: 12px;
            @include regular(14);
          }
        }
        @include en-tablet {
          margin: 0px auto;
          margin-bottom: 48px;
        }
        @include en-mobile {
          margin: 0px auto;
          margin-bottom: 48px;
        }
      }
    }
  }
}
</style>
