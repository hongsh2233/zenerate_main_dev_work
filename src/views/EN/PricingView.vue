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
          <div class="service-wrapper">
            <h2 class="service-title">Web Service</h2>
            <div class="plan-list-wrapper">
              <h5 class="list-title">SUBSCRIPTION PLANS</h5>
              <ul class="price-plan-list">
                <li
                  v-for="(item, idx) in pricing_plan"
                  :class="{ selected: item.key === selectedPricingPlan }"
                  @click="selectPricingPlan(item.key)"
                >
                  <span class="plan-title">{{ item.name }}</span>
                  <span class="plan-pricing">{{ item.pricing }}</span>
                </li>
              </ul>

              <ul class="price-plan-detail">
                <li
                  v-for="(item, idx) in PRICE_PLAN_CONTENT"
                  :key="idx"
                  :class="{
                    'upgrade-plan':
                      selectedPricingPlan !== 'visitor' &&
                      item.level === pricing_plan[selectedPricingPlan].level,
                    'not-allowed-plan':
                      item.level > pricing_plan[selectedPricingPlan].level,
                  }"
                >
                  <i
                    class="material-icons"
                    :class="{
                      'possible-plan':
                        item.level <= pricing_plan[selectedPricingPlan].level,
                    }"
                    >{{
                      item.level > pricing_plan[selectedPricingPlan].level
                        ? 'close'
                        : 'check'
                    }}</i
                  >
                  <span>{{ item.content }}</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- <div class="pricing-subtitle">Subscription Plans</div>
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
          </div> -->
        </div>
      </div>
    </div>
    <div class="section section-footer fp-auto-height">
      <Footer />
    </div>
  </section>
</template>
<script lang="ts" setup>
import { onMounted, computed, ref } from 'vue'
import Store from '/Store/index'
import { useRouter } from 'vue-router'
import { PRICE_PLAN_CONTENT, PRICING_PLAN_NAME } from '/Constants/pricePlan'
import Footer from '/Components/EN/Footer.vue'

const fullpage = computed(() => Store.state.root.FullPage)
const router = useRouter()
onMounted(() => {
  fullpage.value.destroy()
})

const pricing_plan = ref({
  visitor: {
    key: 'visitor',
    name: 'VISITOR',
    pricing: 'FREE',
    level: 1,
  },
  basic: {
    key: 'basic',
    name: 'BASIC',
    pricing: 'TO BE DECIDED',
    level: 2,
  },
  premium: {
    key: 'premium',
    name: 'PREMIUM',
    pricing: 'TO BE DECIDED',
    level: 3,
  },
})

const selectedPricingPlan = ref('basic')
const selectPricingPlan = (item) => {
  Object.keys(pricing_plan.value).forEach((v) => {
    if (v === item) {
      selectedPricingPlan.value = item
    }
  })
}
</script>
<style lang="scss" scoped>
.section {
  // background-color: #fafafc;
  background: linear-gradient(
    270deg,
    rgba(116, 113, 255, 0.5) 0%,
    rgba(95, 148, 255, 0.5) 100%
  );
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

.service-wrapper {
  @include relative();
  @include vertical-center();
  align-items: center;
  width: 540px;
  height: auto;

  .service-title {
    @include semi-bold(20);
    width: 340px;
    line-height: 80px;
    margin: 0px 0px 28px;
    color: $white;
    background: linear-gradient(
      270deg,
      rgba(116, 113, 255, 0.6) 0%,
      rgba(95, 148, 255, 0.6) 100%
    );
    box-shadow: inset 0px 2px 15px #ffffff;
    border-radius: 40px;
    text-align: center;
  }

  .plan-list-wrapper {
    @include vertical-center();
    width: 100%;
    height: auto;
    background-color: white;
    box-shadow: 0px 6px 12px 5px rgba(200, 203, 218, 0.5);
    border-radius: 40px;

    .list-title {
      @include semi-bold(16);
      margin: 0px;
      line-height: 60px;
      color: rgba($text-darken, 0.3);
      text-align: center;
    }

    .price-plan-list {
      @include flex();
      align-items: center;
      width: 100%;
      height: 132px;
      margin-bottom: 8px;
      box-shadow: 0px 2px 4px 3px rgba(201, 200, 255, 0.4);

      li {
        @include vertical-center();
        align-items: center;
        width: calc(100% / 3);
        height: 100%;

        .plan-title {
          @include bold(16);
          color: rgba($text-darken, 0.7);
        }

        .plan-pricing {
          @include semi-bold(14);
          color: rgba($text-darken, 0.3);
        }

        &:hover {
          background-color: rgba(92, 109, 255, 0.1);
        }

        &.selected {
          background-color: rgba(92, 109, 255, 0.1);

          .plan-title {
            color: #4848ff;
          }
        }
      }
    }
    .price-plan-detail {
      @include vertical-center();
      width: 100%;
      height: 348px;
      padding-left: 44px;
      margin: 40px 0px 50px;
      border-radius: 10px;
      list-style-type: disc;

      li {
        @include flex();
        @include semi-bold(16);
        flex-wrap: nowrap;
        align-items: center;
        color: rgba($text-darken, 0.7);
        line-height: 20px;
        &:not(:last-child) {
          margin-bottom: 12px;
        }

        i {
          margin-right: 24px;
          font-size: 20px;
          color: rgba($text-darken, 0.3);

          &.possible-plan {
            color: #4848ff;
          }
        }

        span {
          @include medium(16);
          color: rgba($text-darken, 0.7);

          &::before {
            display: inline-block;
            width: 5px;
            height: 5px;
            margin: -2px 10px 0 0;
            vertical-align: middle;
            background-color: rgba($text-darken, 0.7);
            border: none;
            border-radius: 50%;
            content: '';
          }
        }

        &.aleady-allowed-plan {
          i {
            color: $cr-main-blue;
          }
          span {
            color: $cr-main-blue;
            &::before {
              background-color: $cr-main-blue;
            }
          }
        }
        &.not-allowed-plan {
          i {
            color: rgba($text-darken, 0.3);
          }

          span {
            color: rgba($text-darken, 0.3);
            &::before {
              background-color: rgba($text-darken, 0.3);
            }
          }
        }

        &.upgrade-plan {
          span {
            color: #4848ff;

            &::before {
              background-color: #4848ff;
            }
          }
        }
      }
    }
  }
}
</style>
