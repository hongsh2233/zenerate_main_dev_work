<template>
  <section id="fullpage-pricing">
    <div class="section section-pricing">
      <div class="section-inner inner-pricing">
        <div class="pricing-wrapper">
          <div class="title-wrapper">
            <h2>Our Services</h2>
            <div class="divider"></div>
          </div>

          <div class="pricing-contents">
            <div
              class="service-wrapper"
              data-aos="zoom-in-up"
              data-aos-offset="0"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
              data-aos-mirror="false"
            >
              <h2 class="service-title">WEB</h2>
              <h5 class="service-subtitle">
                Fast Web Platform for Everyday Use
              </h5>
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
                      download: idx === 7,
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
            <div
              class="service-wrapper consulting-wrapper"
              data-aos="zoom-in-up"
              data-aos-offset="0"
              data-aos-delay="500"
              data-aos-duration="500"
              data-aos-once="true"
              data-aos-mirror="false"
            >
              <h2 class="service-title">CONSULTING</h2>
              <h5 class="service-subtitle">
                Customized, Deep, Complex Service
              </h5>
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
                    <span class="access-title">
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
                  <a href="mailto:project@zenerate.ai" class="contact-email"
                    >project@zenerate.ai</a
                  >
                </div>
              </div>
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
import { onMounted, computed, ref } from 'vue'
import Store from '/Store/index'
import { useRouter } from 'vue-router'
import { PRICE_PLAN_CONTENT, CONSULT_PLAN_CONTENT } from '/Constants/pricePlan'
import Footer from '/Components/EN/Footer.vue'

const fullpage = computed(() => Store.state.root.FullPage)
const router = useRouter()
onMounted(() => {
  fullpage.value.destroy()
  // fullpage.value.init('#fullpage-pricing', {
  //   parallax: false,
  //   offsetSections: false,
  //   navigation: false,
  // })

  setTimeout(() => {
    document.querySelectorAll('.aos-init').forEach((doc: HTMLElement) => {
      doc.classList.add('aos-animate')
    })
  }, 0)
})

const pricing_plan = ref({
  visitor: {
    key: 'visitor',
    name: 'Visitor',
    pricing: 'FREE',
    level: 1,
  },
  basic: {
    key: 'basic',
    name: 'Basic',
    pricing: 'TO BE DECIDED',
    level: 2,
  },
  premium: {
    key: 'premium',
    name: 'Premium',
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

import { useMeta } from 'vue-meta'
const { meta } = useMeta({
  title: 'Service | Zenerate',
  description:
    'Join developers, architects, property owners, investors, and planners who use our solutions to maximize project profits.',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content:
        'Join developers, architects, property owners, investors, and planners who use our solutions to maximize project profits.',
    },
  ],
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai/services' }],
  og: {
    url: 'https://www.zenerate.ai/services',
    type: 'website',
    title: 'Service | Zenerate',
    description: `Join developers, architects, property owners, investors, and planners who use our solutions to maximize project profits.`,
    tags: 'zenerate',
    keywords: 'zenerate',
    image: 'https://www.zenerate.ai/img/logo_og.png',
  },
  twitter: {
    title: 'Service | Zenerate',
  },
})
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

  .title-wrapper {
    @include flex($dir: column);
    align-items: center;
    margin-bottom: 60px;

    @include en-tablet {
      max-width: 540px;
      text-align: center;
    }

    @include en-mobile {
      max-width: 360px;
      margin-bottom: 40px;
      text-align: center;
    }

    h2 {
      @include bold(36);
      color: $text-darken;
      margin: 0px 0px 30px;
      @include en-mobile {
        @include bold(24);
      }
    }

    .divider {
      width: 56px;
      height: 2px;
      border-radius: 5px;
      background-color: $text-darken;
    }

    h5 {
      @include regular(24);
      color: $text-darken;
      margin: 0px;

      @include en-tablet {
        width: 440px;
      }
      @include en-mobile {
        @include regular(14);
        width: 173px;
        text-align: center;
      }
    }
  }

  .pricing-wrapper {
    @include flex($justify: center);
    flex-direction: column;
    margin: 0px auto;
  }
  .pricing-contents {
    @include flex($justify: space-around);
    height: 100%;
    width: 100%;
    flex-wrap: nowrap;
    position: relative;
    margin: 0px auto;

    @include en-tablet {
      flex-direction: column;
      align-items: center;
      padding: 0px 10px;
    }

    @include en-mobile {
      flex-direction: column;
      align-items: center;
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
        width: 320px;
        height: 520px;
        padding: 20px 10px 20px 20px;
        border-radius: 20px;
        background-color: white;
        box-shadow: 10px 30px 60px rgba(211, 210, 242, 0.4);

        @include en-mobile {
          height: 100%;
          padding: 20px 10px;
        }
        .content-title {
          text-align: center;
          @include semi-bold(16);
          color: $main-blue;
          margin-bottom: 24px;
          p:first-child {
            font-size: 22px;
          }
        }
        .content-pricing {
          text-align: center;
          margin-bottom: 12px;
          color: $main;
          @include semi-bold(32);
        }
        .content-detail {
          padding: 0px 16px 0px 28px;
          margin: auto 0px;
          li {
            list-style: disc;
            text-align: left;
            margin-bottom: 12px;
            @include regular(13);
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
  justify-content: flex-start;
  align-items: center;
  max-width: 540px;
  width: 100%;
  margin: 0px;
  height: auto;

  &:last-child {
    margin: 80px 0px 0px 60px;
  }

  @include en-tablet {
    &:last-child {
      margin: 60px 0px 0px;
    }
  }

  @include en-mobile {
    width: 100%;
    justify-content: center;
    min-width: 280px;
    max-width: 360px;
    margin: 0px 0px 40px;

    &:last-child {
      margin: 0px;
    }
  }

  .service-title {
    @include semi-bold(20);
    width: 212px;
    height: 64px;
    margin: 0px 0px 40px;
    background-color: $main-core;
    box-shadow: 4px 4px 20px rgba(72, 72, 255, 0.3);
    border-radius: 42px;
    color: $white;
    line-height: 64px;
    text-align: center;
    @include en-mobile {
      @include bold(14);
      width: 124px;
      height: 36px;
      margin: 0px 0px 24px;
      line-height: 36px;
    }
  }

  .service-subtitle {
    @include regular(24);
    margin: 0px 0px 40px;
    color: #191919;
    text-align: center;
    @include en-mobile {
      @include regular(14);
      margin: 0px 0px 24px;
    }
  }

  .plan-list-wrapper {
    @include vertical-center();
    width: 100%;
    height: auto;
    min-height: 568px;
    background-color: white;
    box-shadow: 10px 30px 60px rgba(211, 210, 242, 0.4);
    border-radius: 20px;

    .list-title {
      @include bold(16);
      margin: 0px;
      line-height: 60px;
      color: rgba($text-darken, 0.3);
      text-align: center;
      @include en-mobile {
        @include bold(14);
        padding: 20px 0px;
        border-bottom: 1px solid rgba(196, 196, 196, 0.4);
      }
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
              @include semi-bold(14);
              color: #12bf6c;
            }
          }
          .plan-title {
            @include bold(16);
            color: rgba($text-darken, 0.7);
          }
        }

        .plan-pricing {
          @include semi-bold(13);
          color: rgba($text-darken, 0.3);
          text-align: center;

          @include en-mobile {
            @include medium(13);
          }
        }

        &:hover {
          border-bottom: 2px solid #4848ff;
        }

        &.selected {
          border-bottom: 2px solid #4848ff;

          .check-wrapper {
            top: 3px;
            left: -28px;
          }
          .plan-title {
            color: #4848ff;
          }
        }
      }

      @include en-mobile {
        @include vertical-center();

        li {
          @include flex();
          width: 100%;
          justify-content: space-between;
          padding: 14px 12% 14px 16%;
          border-bottom: 1px solid rgba(196, 196, 196, 0.4);
          border-left: 2px solid transparent;

          .plan-title-wrapper {
            .plan-title {
              line-height: 20px;
            }
          }

          &:hover {
            border-bottom: 1px solid rgba(196, 196, 196, 0.4);
            .plan-title {
              color: #4848ff;
              border-bottom: 1px solid #4848ff;
            }
          }

          &.selected {
            border-bottom: 1px solid rgba(196, 196, 196, 0.4);
            border-left: 2px solid #4848ff;
            background: rgba(72, 72, 255, 0.05);

            .check-wrapper {
              top: 0px;
              left: -28px;
            }

            .plan-title {
              color: #4848ff;
              border-bottom: 1px solid #4848ff;
            }
          }
        }
      }
    }
    .price-plan-detail {
      @include vertical-center();
      width: 100%;
      min-height: 348px;
      padding: 0px 59px;
      margin: 20px 0px 30px;

      @include en-tablet {
        padding: 0px 40px;
      }
      @include en-mobile {
        padding: 30px 8%;
        margin: 0px 0px;

        li {
          &:not(:last-child) {
            margin-bottom: 8px;
          }

          i {
            margin-right: 16px;
          }

          span {
            @include regular(13);
          }
        }
      }

      li {
        @include flex();
        @include regular(16);
        flex-wrap: nowrap;
        align-items: flex-start;
        color: $text-darken;
        line-height: 20px;
        &:not(:last-child) {
          margin-bottom: 8px;
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
          @include regular(16);
          color: $text-darken;
        }

        &.aleady-allowed-plan {
          i {
            color: $main-blue;
          }
          span {
            color: $main-blue;
            &::before {
              background-color: $main-blue;
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

        @include en-mobile {
          &.download {
            span {
              width: 166px;
            }
          }
        }
      }
    }
  }
}

.consulting-wrapper {
  margin-left: 68px;

  @include en-tablet {
    margin-left: 0px;
  }
  @include en-mobile {
    margin-left: 0px;
  }
  .consulting-plan-list-wrapper {
    @include vertical-center();
    width: 100%;
    height: auto;
    min-height: 568px;
    padding: 40px 0px;
    border-radius: 20px;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(142, 141, 208, 0.16);

    @include en-mobile {
      min-width: 272px;
      padding: 28px 0px;
    }

    .plan-title {
      @include semi-bold(16);
      color: $text-darken;
      margin-bottom: 24px;
      padding: 0px 60px;

      @include en-tablet {
      }
      @include en-mobile {
        @include semi-bold(13);
        padding: 0px 8%;
        margin-bottom: 18px;
      }
    }
    .consulting-plan-detail {
      @include vertical-center();
      width: 100%;
      margin-bottom: 40px;
      padding: 0px 60px;

      @include en-tablet {
        padding: 0px 40px;
      }
      @include en-mobile {
        padding: 0px 8%;
      }

      li {
        @include flex();
        @include regular(16);
        flex-wrap: nowrap;
        align-items: flex-start;
        color: $text-darken;
        line-height: 20px;
        &:not(:last-child) {
          margin-bottom: 12px;
        }
        @include en-mobile {
          @include regular(13);
          &:not(:last-child) {
            margin-bottom: 10px;
          }
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
          @include regular(16);
          color: $text-darken;
          @include en-mobile {
            @include regular(13);
          }
        }

        &.aleady-allowed-plan {
          i {
            color: $main-blue;
          }
          span {
            color: $main-blue;
            &::before {
              background-color: $main-blue;
            }
          }
        }
      }
    }
  }
  .access-wrapper {
    @include flex();
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 48px;
    padding: 24px 40px;
    background: rgba(72, 72, 255, 0.05);

    @include en-mobile {
      justify-content: flex-start;
      margin-bottom: 28px;
      padding: 0px;
    }

    .access-content {
      @include en-mobile {
        @include vertical-center();
        width: 100%;
        padding: 8%;
      }

      .access-title {
        @include semi-bold(15);
        margin-bottom: 10px;
        color: $text-darken;
        text-align: center;

        @include en-mobile {
          @include semi-bold(14);
          min-width: 250px;
          text-align: left;
          line-height: 16.5px;
        }
      }
      .access-list {
        @include flex();
        @include regular(16);
        flex-wrap: nowrap;
        align-items: flex-start;
        color: $text-darken;
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
          color: $text-darken;
          .text-core {
            color: #4848ff;
          }
          @include en-mobile {
            @include medium(13);
          }
        }
        @include en-mobile {
          @include medium(13);
        }
      }
    }
  }

  .contact-wrapper {
    @include vertical-center();
    align-items: center;
    padding: 0px 40px;

    .contact-title {
      @include semi-bold(16);
      color: rgba($text-darken, 0.3);
      text-align: center;
      @include en-mobile {
        @include semi-bold(14);
      }
    }
    .contact-email {
      @include semi-bold(18);
      text-decoration-line: underline;
      color: rgba(72, 72, 255, 0.8);
      @include en-mobile {
        @include semi-bold(14);
      }
    }

    @include en-mobile {
      width: 260px;
      margin: 0 auto;
    }
  }
}
</style>
