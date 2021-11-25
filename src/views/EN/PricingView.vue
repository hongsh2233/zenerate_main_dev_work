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
                  <div class="plan-title-wrapper">
                    <div
                      class="check-wrapper"
                      v-if="item.key === selectedPricingPlan"
                    >
                      <i class="material-icons">check</i>
                    </div>
                    <span class="plan-title">{{ item.name }}</span>
                  </div>
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
          <div class="service-wrapper consulting-wrapper">
            <h2 class="service-title">Consulting Service</h2>
            <div class="consulting-plan-list-wrapper">
              <span class="plan-title"
                >Provide a Written Report Including;</span
              >
              <ul class="consulting-plan-detail">
                <li v-for="(item, idx) in CONSULT_PLAN_CONTENT" :key="idx">
                  <i class="material-icons possible-plan">check</i>
                  <span>{{ item.content }}</span>
                </li>
              </ul>
              <div class="access-wrapper">
                <div class="access-content">
                  <span class="acess-title">
                    Provide access to web platform to review generated options
                  </span>
                  <div class="access-list">
                    <i class="material-icons possible-plan">add</i>
                    <p>
                      Plus, explore and filter up to
                      <span class="text-core">50,000 Options</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="contact-wrapper">
                <span class="contact-title"
                  >EMAIL US FOR CONSULTING INQUIRIES</span
                >
                <span class="contact-email">project@zenerate.ai</span>
              </div>
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
import { PRICE_PLAN_CONTENT, CONSULT_PLAN_CONTENT } from '/Constants/pricePlan'
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
    @include flex($justify: space-between);
    align-items: center;
    height: 100%;
    width: 100%;
    position: relative;
    margin: 40px auto;

    @include en-tablet {
      flex-direction: column;
      padding: 0px 10px;
    }

    @include en-mobile {
      flex-direction: column;
      padding: 0px 10px;
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
  max-width: 540px;
  margin: 0px 0px 60px;
  height: auto;

  .service-title {
    @include bold(24);
    width: 340px;
    margin: 0px 0px 40px;
    color: #191919;
    text-align: center;
  }

  .plan-list-wrapper {
    @include vertical-center();
    width: 100%;
    height: auto;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(142, 141, 208, 0.16);
    border-radius: 6px;

    .list-title {
      @include bold(16);
      margin: 0px;
      line-height: 60px;
      color: rgba($text-darken, 0.3);
      text-align: center;
    }

    .price-plan-list {
      @include flex();
      align-items: center;
      width: 100%;
      margin-bottom: 8px;

      li {
        @include vertical-center();
        align-items: center;
        width: calc(100% / 3);
        padding: 20px 14px;
        border-bottom: 2px solid rgba(196, 196, 196, 0.4);

        .plan-title-wrapper {
          @include relative();
          .check-wrapper {
            @include absolute(top 3px left -26px);
            @include vertical-center();
            align-items: center;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #c2f9de;

            i {
              @include bold(14);
              color: #12bf6c;
            }
          }
          .plan-title {
            @include bold(16);
            color: rgba($text-darken, 0.7);
          }
        }

        .plan-pricing {
          @include semi-bold(14);
          color: rgba($text-darken, 0.3);
          text-align: center;
        }

        &:hover {
          border-bottom: 2px solid #4848ff;
        }

        &.selected {
          border-bottom: 2px solid #4848ff;

          .plan-title {
            color: #4848ff;
          }
        }
      }
    }
    .price-plan-detail {
      @include vertical-center();
      width: 100%;
      min-height: 348px;
      padding: 0px 80px;
      margin: 40px 0px 50px;

      @include en-tablet {
        padding: 0px 80px;
      }
      @include en-mobile {
        padding: 0px 30px;
      }

      li {
        @include flex();
        @include semi-bold(16);
        flex-wrap: nowrap;
        align-items: flex-start;
        color: rgba($text-darken, 0.7);
        line-height: 20px;
        &:not(:last-child) {
          margin-bottom: 12px;
        }

        i {
          margin-right: 24px;
          margin-top: 3px;
          font-size: 20px;
          color: rgba($text-darken, 0.3);

          &.possible-plan {
            color: #4848ff;
          }
        }

        span {
          @include medium(16);
          color: rgba($text-darken, 0.7);
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

.consulting-wrapper {
  .consulting-plan-list-wrapper {
    @include vertical-center();
    width: 100%;
    height: auto;
    padding: 60px 0px;
    border-radius: 6px;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(142, 141, 208, 0.16);

    .plan-title {
      @include bold(16);
      color: $text-darken;
      margin-bottom: 24px;
      padding: 0px 40px;
    }
    .consulting-plan-detail {
      @include vertical-center();
      width: 100%;
      margin-bottom: 40px;
      padding: 0px 40px;

      @include en-tablet {
        padding: 0px 40px;
      }
      @include en-mobile {
        padding: 0px 30px;
      }

      li {
        @include flex();
        @include semi-bold(16);
        flex-wrap: nowrap;
        align-items: flex-start;
        color: rgba($text-darken, 0.7);
        line-height: 20px;
        &:not(:last-child) {
          margin-bottom: 12px;
        }

        i {
          margin-right: 24px;
          margin-top: 3px;
          font-size: 20px;
          color: rgba($text-darken, 0.3);

          &.possible-plan {
            color: #4848ff;
          }
        }

        span {
          @include medium(16);
          color: rgba($text-darken, 0.7);
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
      }
    }
  }
  .access-wrapper {
    @include flex();
    align-items: center;
    width: 100%;
    margin-bottom: 48px;
    padding: 24px 40px;
    background: rgba(72, 72, 255, 0.05);

    .access-content {
      .acess-title {
        @include bold(16);
        margin-bottom: 10px;
        color: $text-darken;
        text-align: center;
      }
      .access-list {
        @include flex();
        @include medium(16);
        flex-wrap: nowrap;
        align-items: flex-start;
        color: rgba($text-darken, 0.7);
        line-height: 20px;
        &:not(:last-child) {
          margin-bottom: 12px;
        }

        i {
          margin-right: 24px;
          margin-top: 3px;
          font-size: 24px;
          color: rgba($text-darken, 0.3);

          &.possible-plan {
            color: #4848ff;
          }
        }

        p {
          @include medium(16);
          color: rgba($text-darken, 0.7);
          .text-core {
            color: #4848ff;
          }
        }
      }
    }
  }

  .contact-wrapper {
    @include vertical-center();
    align-items: center;
    padding: 0px 40px;

    .contact-title {
      @include bold(16);
      color: rgba($text-darken, 0.3);
      text-align: center;
    }
    .contact-email {
      @include bold(18);
      text-decoration-line: underline;
      color: rgba(72, 72, 255, 0.8);
    }
  }
}
</style>
