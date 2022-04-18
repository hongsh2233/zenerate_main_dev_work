<template>
  <section class="section section-pricing">
    <div class="section-inner inner-pricing">
      <div class="pricing-wrapper">
        <div class="main-title-wrapper">
          <p class="maincopy">
            <span><strong>Simple pricing</strong>&nbsp;</span>
            <span>for your feasibility study needs.</span>
          </p>
          <p class="subcopy">
            <span>You'll never want to start a project&nbsp;</span>
            <span> without Zenerate ever again.&nbsp;</span><br />
            <span
              >Start with a <strong>7 day free trial</strong>&nbsp;to see
              why.</span
            >
          </p>
        </div>
        <ul class="price-plan-list">
          <!-- Basic -->
          <li class="price-plan-item">
            <div class="pricing-plan-top">
              <h4 class="pricing-plan-title">Basic</h4>
              <p class="pricing-plan-info">
                Quick & accurate<br />back-of-the envelope<br />type analysis
              </p>
            </div>

            <div class="item-body">
              <div class="plan-options" :class="{ active: showPlan.basic }">
                <template
                  v-for="item in PRICING_PLAN_CONTENTS.basic.content"
                  :key="item"
                >
                  <div class="row">
                    <i class="material-icons">checked</i>
                    <p>
                      {{ item.main }}
                    </p>
                  </div>
                </template>
                <div class="basic-option-guide">
                  <i class="material-icons-outlined">info</i>
                  <p>
                    <strong>Save feature excluded</strong><br />
                    for Site Search & Volume<br />
                    Study in Basic Plan
                  </p>
                </div>
                <button
                  type="button"
                  class="action-button hidden-en-desktop hidden-en-tablet"
                  @click="goToApp()"
                >
                  TRY NOW
                </button>
              </div>
              <div class="pricing-plan-bottom">
                <div class="price-wrapper" @click="() => togglePlan('basic')">
                  <p class="current-price">Free</p>
                  <i
                    class="material-icons hidden-en-desktop hidden-en-tablet"
                    :class="{ active: showPlan.basic }"
                  >
                    keyboard_arrow_down
                  </i>
                </div>
                <button
                  type="button"
                  class="action-button hidden-en-mobile"
                  @click="goToApp()"
                >
                  TRY NOW
                </button>
              </div>
            </div>
          </li>
          <!-- Advanced -->
          <li class="price-plan-item">
            <div class="pricing-plan-top">
              <h4 class="pricing-plan-title">Advanced</h4>
              <p class="pricing-plan-info">
                Zenerate thousands of feasibility solutions with our flagship
                Deep Search feature
              </p>
            </div>

            <div class="item-body plus">
              <div class="plan-options" :class="{ active: showPlan.advanced }">
                <template
                  v-for="item in PRICING_PLAN_CONTENTS.advanced.content"
                  :key="item"
                >
                  <div class="row">
                    <i class="material-icons">checked</i>
                    <p>
                      {{ item.main }}
                    </p>
                  </div>
                </template>
                <button
                  type="button"
                  class="action-button hidden-en-desktop hidden-en-tablet"
                  @click="() => goToAppSignUp()"
                >
                  SIGN UP NOW
                </button>
              </div>
              <div class="pricing-plan-bottom">
                <div
                  class="price-wrapper"
                  @click="() => togglePlan('advanced')"
                >
                  <span class="current-price asterisk">$0</span>
                  <span class="original-price">$TBD</span>
                  <span class="price-per">/month</span>
                  <i
                    class="material-icons hidden-en-desktop hidden-en-tablet"
                    :class="{ active: showPlan.advanced }"
                  >
                    keyboard_arrow_down
                  </i>
                </div>
                <p class="price-guide asterisk">
                  Effective for next few months.
                </p>

                <button
                  type="button"
                  class="action-button hidden-en-mobile"
                  @click="() => goToAppSignUp()"
                >
                  SIGN UP NOW
                </button>
              </div>
            </div>
          </li>
          <!-- Premium -->
          <li
            class="price-plan-item premium"
            :class="{
              active: true,
            }"
          >
            <p class="price-plan-item-banner">RECOMMENDED</p>

            <div class="pricing-plan-top">
              <p class="pricing-plan-title">
                Premium
                <span class="icon-wrapper"
                  ><i class="material-icons">checked</i></span
                >
              </p>
              <p class="pricing-plan-info">
                Full stack feasibility study<br />
                tool with the addition of<br />
                In-Depth Zoning Analysis
              </p>
            </div>

            <div class="item-body plus">
              <div class="plan-options" :class="{ active: showPlan.premium }">
                <template
                  v-for="item in PRICING_PLAN_CONTENTS.premium.content"
                  :key="item"
                >
                  <div class="row">
                    <i class="material-icons">checked</i>
                    <p>
                      {{ item.main }}
                    </p>
                  </div>
                </template>
                <button
                  type="button"
                  class="action-button hidden-en-desktop hidden-en-tablet"
                  @click="() => goToAppSignUp()"
                >
                  SIGN UP NOW
                </button>
              </div>

              <div class="pricing-plan-bottom">
                <div class="price-wrapper" @click="() => togglePlan('premium')">
                  <span class="current-price asterisk">$500</span>
                  <span class="original-price">$TBD</span>
                  <span class="price-per">/month</span>
                  <i
                    class="material-icons hidden-en-desktop hidden-en-tablet"
                    :class="{ active: showPlan.premium }"
                  >
                    keyboard_arrow_down
                  </i>
                </div>
                <p class="price-guide asterisk">
                  Effective for next few months.
                </p>
                <button
                  type="button"
                  class="action-button hidden-en-mobile"
                  @click="() => goToAppSignUp()"
                >
                  SIGN UP NOW
                </button>
              </div>
            </div>
          </li>
          <!-- Enterprise -->
          <li class="price-plan-item">
            <div class="pricing-plan-top">
              <h4 class="pricing-plan-title">Enterprise</h4>

              <p class="pricing-plan-info">
                Customized application<br />based on your company's<br />own
                processes and models
              </p>
            </div>

            <div class="item-body">
              <div
                class="plan-options"
                :class="{ active: showPlan.enterprise }"
              >
                <template
                  v-for="item in PRICING_PLAN_CONTENTS.entreprise.content"
                  :key="item"
                >
                  <div class="row">
                    <i class="material-icons">checked</i>
                    <p>{{ item.main }}</p>
                  </div>
                </template>
                <button
                  type="button"
                  class="action-button hidden-en-desktop hidden-en-tablet"
                  @click="() => toContactForm()"
                >
                  CONTACT US
                </button>
              </div>

              <div class="pricing-plan-bottom">
                <div
                  class="price-wrapper hidden-en-desktop hidden-en-tablet"
                  @click="() => togglePlan('enterprise')"
                >
                  <span class="current-price">Contact Us</span>
                  <i
                    class="material-icons hidden-en-desktop hidden-en-tablet"
                    :class="{ active: showPlan.enterprise }"
                  >
                    keyboard_arrow_down
                  </i>
                </div>
                <button
                  type="button"
                  class="action-button hidden-en-mobile"
                  @click="() => toContactForm()"
                >
                  CONTACT US
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="banner-wrapper">
        <p class="banner-text hidden-en-desktop hidden-en-tablet">
          <span>Join industry leaders in&nbsp;</span>
          <span><strong>maximizing profit</strong>&nbsp;</span>
          <span>and <strong>saving</strong>&nbsp;</span>
          <span><strong>thousands of man-hours</strong></span>
        </p>
        <p class="banner-text hidden-en-mobile">
          Join industry leaders in
          <strong>maximizing profit</strong><br />
          and <strong>saving</strong>
          <strong> thousands of man-hours</strong>
        </p>
        <div class="partners-list">
          <div
            class="partners-item"
            v-for="(item, idx) in PartnersList"
            :key="idx"
          >
            <div
              class="item-logo"
              :style="{
                backgroundImage: `url('/logo/logo_${item.key}.png')`,
              }"
            ></div>
          </div>
        </div>
      </div>

      <div class="all-plan-wrapper">
        <div class="title-wrapper">
          <p class="title">
            Included In
            <span class="blue">All Plans</span>
          </p>
          <p class="subtitle">The basics for every feasibility study</p>
        </div>

        <div class="contents-list-wrapper">
          <div class="contents-wrapper">
            <div class="content-title-wrapper">
              <div class="icon-wrapper">
                <i class="material-icons">checked</i>
              </div>
              <p class="title">Market Data</p>
            </div>

            <div class="image-wrapper">
              <img
                class="img-map"
                src="/en/overview/overview_marketdata_720.gif"
                alt="market data"
              />
            </div>
            <p class="contents-desc-wrapper">
              <span>Important lot information along with&nbsp;</span>
              <span>relevant market&nbsp;</span>
              <span>data pertaining to&nbsp;</span>
              <span>location's&nbsp;</span>
              <span>neighborhood & district.</span>
            </p>
          </div>
          <div class="contents-wrapper">
            <div class="content-title-wrapper">
              <div class="icon-wrapper">
                <i class="material-icons">checked</i>
              </div>
              <p class="title">Site Search</p>
            </div>

            <div class="image-wrapper">
              <img
                class="img-map"
                src="/en/overview/overview_site_720.gif"
                alt="site search"
              />
            </div>
            <p class="contents-desc-wrapper">
              <span>Scouting sites for your next&nbsp;</span>
              <span>development&nbsp;</span>
              <span>project?&nbsp;</span>
              <span>Use Site&nbsp;</span>
              <span>Search to find a feasible&nbsp;</span>
              <span>option&nbsp;</span>
              <span>for any site&nbsp;</span>
              <span>within seconds.&nbsp;</span>
              <span></span>
            </p>
          </div>
          <div class="contents-wrapper">
            <div class="content-title-wrapper">
              <div class="icon-wrapper">
                <i class="material-icons">checked</i>
              </div>
              <p class="title">Volume Study</p>
            </div>

            <div class="image-wrapper">
              <img
                class="img-map"
                src="/en/overview/overview_volume_720.gif"
                alt="volume study"
              />
            </div>
            <p class="contents-desc-wrapper">
              <span>The quickest and most accurate&nbsp;</span>
              <span>back-of-the-</span>
              <span>envelope calculation&nbsp;</span>
              <span>tool you'll ever use.&nbsp;</span>
              <span>Conduct studies&nbsp;</span>
              <span>with in-depth cashflow&nbsp;</span>
              <span>analysis.</span>
            </p>
          </div>
        </div>

        <div class="only-plan-wrapper">
          <div class="recommend-ribbon"></div>
          <div class="title-wrapper">
            <p class="title">
              Only Available in
              <span class="blue">Advanced & Premium Plans</span>
            </p>
            <p class="subtitle">
              <span> Important features needed&nbsp;</span>
              <span> for deep feasibility studies </span>
            </p>
          </div>

          <div class="contents-list-wrapper">
            <div class="contents-wrapper">
              <div class="contents-top-wrapper">
                <div class="content-title-wrapper">
                  <div class="content-title">
                    <div class="icon-wrapper">
                      <i class="material-icons">checked</i>
                    </div>
                    <p class="title">Deep Search</p>
                  </div>
                </div>
                <p class="chip-wrapper">
                  <span class="chip advanced">Advanced</span>
                  <span class="chip premium">Premium</span>
                </p>

                <div class="image-wrapper">
                  <img
                    class="img-map"
                    src="/en/overview/overview_deep_720.gif"
                    alt="deep search"
                  />
                </div>
              </div>
              <p class="contents-desc-wrapper">
                <span>The ultimate feasibility tool to fully&nbsp;</span>
                <span>understand&nbsp;</span>
                <span>value-</span>
                <span>add and highest&nbsp;</span>
                <span>& best use of the site. &nbsp;</span>
                <span>Zenerate up to&nbsp;</span>
                <span>10,000 feasibility solutions within&nbsp;</span>
                <span>50 minutes.</span>
              </p>
            </div>
            <div class="contents-wrapper">
              <div class="contents-top-wrapper">
                <div class="content-title-wrapper">
                  <div class="content-title">
                    <div class="icon-wrapper">
                      <i class="material-icons">checked</i>
                    </div>
                    <p class="title">In-Depth Zoning Analysis</p>
                  </div>
                </div>
                <p class="chip-wrapper">
                  <span class="chip premium">Premium Only</span>
                </p>
                <div class="image-wrapper">
                  <img
                    class="img-map"
                    src="/en/overview/overview_zoning_720.gif"
                    alt="In-Depth Zoning Analysis"
                  />
                </div>
              </div>

              <p class="contents-desc-wrapper">
                <span>No need to go through countless&nbsp;</span>
                <span>hours of&nbsp;</span>
                <span>zoning&nbsp;</span>
                <span>information.&nbsp;</span>
                <span>Overlays, incentives and&nbsp;</span>
                <span>more,&nbsp;</span>
                <span>we have&nbsp;</span>
                <span>it all available for you.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
      <div class="help-banner-wrapper">
        <div class="help-banner">
          <div class="help-banner-text-wrapper">
            <p class="help-banner-text-title">
              <span>Can't find the answers&nbsp;</span>
              <span>you're looking for?</span>
            </p>
            <p class="help-banner-text-desc">
              Our Support Team is standing by to help.<br />
              <span
                >Please email
                <a href="mailto: contact@zenerate.ai">contact@zenerate.ai</a
                >&nbsp;
              </span>
              <span
                >or fill out the
                <router-link to="contact">Contact us page.</router-link>
              </span>
            </p>
          </div>
          <div class="help-banner-image-wrapper">
            <img src="/en/img/contact_email.png" alt="contact us" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="section section-footer fp-auto-height">
    <Footer></Footer>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, onBeforeUnmount, computed, ref } from 'vue'
import Store from '/Store/index'
import { useRouter } from 'vue-router'
import AOS from 'aos'
import { useGtag } from 'vue-gtag-next'
import { useMeta } from 'vue-meta'
import { PRICING_PLAN_CONTENTS } from '/Constants/pricePlan'
import PartnersList from '/Constants/partners'
import Footer from '/Components/EN/Footer.vue'
import FAQ from '/Views/EN/FAQView.vue'

const { event } = useGtag()
const goToApp = () => {
  window.open('https://app.zenerate.ai', '_blank')
  event('generate_lead', {
    event_category: 'engagement',
    event_label: '(not yet)',
  })
}

const goToAppSignUp = () => {
  window.open(
    'https://app.zenerate.ai/?source=zenerate&target=subscription',
    '_blank'
  )
  event('generate_lead', {
    event_category: 'engagement',
    event_label: '(not yet)',
  })
}

const router = useRouter()
const toContactForm = () => {
  router.push({
    name: 'en-contact',
  })
}

const showPlan = ref({
  basic: false,
  advanced: false,
  premium: false,
  enterprise: false,
})
const togglePlan = (plan) => {
  showPlan.value[plan] = !showPlan.value[plan]
}
</script>
<style lang="scss" scoped>
.section-pricing {
  @include relative;
  width: 100%;
  height: 100%;

  .inner-pricing {
    @include flex($dir: column);
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 110px 0px 0px;
    background: linear-gradient(
      0deg,
      #ffffff 23.95%,
      rgba(255, 255, 255, 0.90625) 58.87%,
      rgba(255, 255, 255, 0) 100%
    );

    @include en-tablet {
      padding: 85px 0px 0px;
    }
    @include en-mobile {
      padding: 98px 0px 0px;
    }

    .pricing-wrapper {
      @include vertical-center();
      margin: 0px auto 126px;
      align-items: center;

      @include en-tablet {
        margin-bottom: 80px;
      }
      @include en-mobile {
        margin-bottom: 100px;
      }
    }

    .main-title-wrapper {
      @include flex($dir: column);
      align-items: center;
      margin-bottom: 95px;

      @include en-tablet {
        align-items: flex-start;
        padding: 0px 10%;
        margin-bottom: 60px;
      }

      @include en-mobile {
        align-items: flex-start;
        width: 100%;
        margin-bottom: 39px;
      }

      .maincopy {
        @include medium(24);
        color: $text-darken;
        margin: 26px 0px 0px;
        text-align: center;

        @include en-tablet {
          width: 550px;
          margin: 18px 0px 0px;
        }
        @include en-mobile {
          @include medium(16);
          margin: 8px 0px 0px;
          width: 260px;
          line-height: 22px;
        }
      }

      .subcopy {
        @include medium(15);
        color: $text-darken;
        text-align: center;
        margin-top: 18px;
        line-height: 21px;

        @include en-tablet {
          @include medium(14);
          width: 550px;
          line-height: 20px;
        }

        @include en-mobile {
          @include medium(13);
          width: 260px;
          line-height: 17px;
        }

        strong {
          font-weight: 600;
          color: $navigation;
        }
      }
    }
  }
}

.price-plan-list {
  @include flex();
  flex-wrap: nowrap;
  align-items: flex-end;
  height: 560px;

  @include en-tablet {
    flex-direction: column;
    height: auto;
  }

  @include en-mobile {
    flex-direction: column;
    height: auto;
  }

  .price-plan-item {
    @include relative();
    @include vertical-center();
    @include border-radius-set(
      top-left 20px bottom-left 20px top-right 20px bottom-right 20px
    );
    justify-content: flex-start;
    width: 244px;
    height: 548px;
    padding: 32px 40px 36px;
    background-color: $white;
    transition: all ease 0.3s;
    box-shadow: 10px 30px 60px rgba(211, 210, 242, 0.4);

    @include en-desktop {
      padding: 32px 30px 36px;
      &:not(:last-child) {
        margin-right: 8px;
      }
    }

    @include en-tablet {
      flex-direction: row;
      width: 648px;
      min-height: 216px;
      height: auto;
      &:not(:last-child) {
        margin-bottom: 20px;
      }

      &:nth-child(2) {
        margin-bottom: 56px;
      }
    }

    @include en-mobile {
      flex-direction: column;
      width: 260px;
      height: auto;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
      &:nth-child(2) {
        margin-bottom: 56px;
      }
    }

    .price-plan-item-banner {
      @include absolute(top -36px left -2px);
      @include border-radius-set(top-left 20px top-right 20px);
      @include semi-bold(14);
      width: calc(100% + 4px);
      height: 36px;
      background-color: $navigation;
      color: $white;
      text-align: center;
      line-height: 36px;

      @include en-tablet {
        width: 180px;
      }
    }

    &.active {
      @include border-radius-set(
        top-left 0px bottom-left 20px top-right 0px bottom-right 20px
      );
      border: 2px solid $navigation;

      @include en-tablet {
        @include border-radius-set(
          top-left 0px bottom-left 20px top-right 20px bottom-right 20px
        );
      }

      .action-button {
        color: $white;
        background-color: $navigation;

        &:hover {
          color: rgba($white, 0.6);
        }
      }
    }

    .pricing-plan-title {
      @include semi-bold(24);
      margin: 0px;
      color: $text-darken;
      line-height: 26px;
      text-align: center;

      .icon-wrapper {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 22px;
        height: 22px;
        background-color: #c2f9de;
        border-radius: 50%;

        i {
          @include bold(18);
          display: inline-block;
          width: 20px;
          height: 20px;
          color: #12bf6c;
          line-height: 20px;
          margin: 0px auto;
        }
      }
    }

    .pricing-plan-subtitle {
      @include semi-bold(16);
      margin: 0px;
      color: $text-darken;
      line-height: 26px;
    }

    .pricing-plan-info {
      @include medium(12);
      min-height: 60px;
      margin-top: 22px;
      color: $text-darken-7;
      line-height: 16px;
      text-align: center;

      @include en-tablet {
        text-align: left;
      }

      @include en-mobile {
        text-align: left;
      }
    }
    .item-body {
      @include relative;
      @include vertical-center();
      justify-content: flex-start;
      height: 100%;
      margin-top: 12px;

      @include en-tablet {
        flex-direction: row;
        height: auto;
        margin-top: 0px;
      }

      @include en-mobile {
        flex-direction: column;
        height: auto;
        min-height: 20px;
        margin-top: 0px;

        &.plus {
          min-height: 40px;

          .plan-options {
            padding: 58px 0px 68px;
          }
        }
      }

      .plan-options {
        @include vertical-center();
        justify-content: flex-start;
        height: 240px;

        .basic-option-guide {
          @include flex($justify: center);
          flex-wrap: nowrap;
          align-items: center;
          width: 100%;
          padding: 10px 0px;
          margin-top: 24px;
          border-top: 1px solid $text-darken-3;
          border-bottom: 1px solid $text-darken-3;
          p {
            @include medium(11);

            color: $text-darken-3;
            line-height: 15px;
          }

          i {
            @include medium(20);
            width: 16px;
            margin-right: 14px;
            color: $text-darken-3;
          }

          @include en-tablet {
            align-items: flex-start;
            margin-top: 0px;
            border-top: 1px solid transparent;
            border-bottom: 1px solid transparent;
            p {
              padding-top: 4px;
            }
          }

          @include en-mobile {
            margin-top: 8px;
          }
        }

        @include en-tablet {
          width: 168px;
          height: auto;
          margin-right: 24px;
        }

        @include en-mobile {
          display: none;
          height: auto;
          padding: 48px 0px 68px;

          &.active {
            display: flex;
          }
        }
      }
      .row {
        @include flex();
        flex-wrap: nowrap;
        align-items: flex-start;
        margin-bottom: 10px;
        color: $text-darken;

        i {
          @include medium(22);
          width: 16px;
          height: 16px;
          line-height: 1em;
          margin-right: 14px;
          color: $navigation;
        }

        p {
          @include vertical-center();
          @include medium(13);
          max-width: 140px;
          padding-top: 2px;
          line-height: 17px;

          @include en-desktop {
            @include medium(14);
            max-width: 152px;
            line-height: 19px;
          }
        }
        &:nth-child(5) {
          color: $navigation;
        }

        &:nth-child(6) {
          color: $navigation;
        }

        span {
          @include medium(10);
          color: rgba($text-darken, 0.3);
        }
      }
    }

    .pricing-plan-top {
      @include relative();
      @include vertical-center();
      justify-content: flex-start;

      @include en-tablet {
        align-items: flex-start;
        width: 163px;
        margin-right: 28px;
      }

      @include en-mobile {
        align-items: flex-start;
      }
    }

    .pricing-plan-bottom {
      @include relative();
      width: 100%;
      height: 116px;

      @include en-tablet {
        width: 188px;
        height: auto;
      }

      @include en-mobile {
        @include absolute(top 0px left 0px);
        width: 180px;
        height: auto;
      }
    }

    .action-button {
      @include absolute(bottom 0px left 0px);
      @include semi-bold(14);
      width: 100%;
      height: 50px;
      color: $core;
      line-height: 125%;
      letter-spacing: 1px;
      background: $bg-hover;
      border-radius: 5px;

      &:hover {
        color: rgba($core, 0.6);
      }
    }

    .price-wrapper {
      @include relative;
      @include flex($justify: center);
      align-items: flex-end;

      @include en-tablet {
        justify-content: flex-start;
      }

      @include en-mobile {
        justify-content: flex-start;
        cursor: pointer;
      }

      .current-price {
        @include relative;
        @include semi-bold(20);
        margin-right: 10px;
        color: $text-darken;

        &.asterisk::before {
          @include absolute(top 0px right -8px);
          left: unset;
        }
      }
      .original-price {
        @include medium(14);
        margin-right: 1px;
        color: $text-darken-3;
        text-decoration: line-through;
      }

      .price-per {
        @include medium(13);
        color: $text-darken-3;
      }

      i {
        @include absolute(top 6px right 0px);
        color: $text-darken;
        &.active {
          transform: rotate(-180deg);
        }
      }
    }
    .price-guide {
      @include relative;
      @include medium(9);
      width: fit-content;
      margin: 0px auto;
      color: $data-alert;
      font-style: italic;
      text-align: center;

      @include en-tablet {
        margin: 0px 0px 0px 10px;
      }

      @include en-mobile {
        line-height: 11px;
        margin: 0px 0px 0px 10px;
      }
    }
  }

  .asterisk::before {
    @include absolute(top -1px left -10px);
    @include medium(13);
    content: '*';
    color: $data-alert;
    vertical-align: text-top;

    @include en-mobile {
      @include absolute(top -6px left -10px);
    }
  }
}

.banner-wrapper {
  @include vertical-center();
  align-items: center;
  width: 100%;
  height: 326px;
  background-color: #f9f9ff;
  margin-bottom: 100px;

  @include en-tablet {
    margin-bottom: 80px;
  }

  @include en-mobile {
    margin-bottom: 56px;
  }

  .banner-text {
    @include regular(18);
    text-align: center;
    line-height: 25px;

    strong {
      @include semi-bold(18);
      line-height: 25px;
    }

    @include en-tablet {
      @include regular(16);
      line-height: 22px;

      strong {
        @include semi-bold(16);
        line-height: 22px;
      }
    }

    @include en-mobile {
      @include regular(13);
      max-width: 260px;
      margin-bottom: 22px;
      line-height: 17px;

      strong {
        @include semi-bold(13);
        line-height: 17px;
      }
    }
  }

  .partners-list {
    @include flex($justify: center);
    max-width: 600px;
    margin-bottom: 20px;
    z-index: 1;

    .partners-item {
      @include center-center;
      @include relative;
      width: 200px;
      height: 60px;
      max-width: 100%;
      margin-top: 20px;

      @include en-mobile {
        width: 140px;
        height: 40px;
        margin: 0px auto;
        margin-bottom: 0px;
      }
      .item-logo {
        width: 200px;
        margin: auto;
        height: 60px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        @include en-mobile {
          height: 40px;
        }
      }
      .item-description {
        @include absolute(top 0 left 0);
        @include center-center;
        width: 100%;
        height: 100%;
        text-align: center;
        visibility: hidden;
        color: $black;
        background-color: rgba($white, 0.7);
        text-align: center;
      }
      &.fake {
        height: 0px;
        margin: 0;
        padding: 0;
      }
    }

    @include en-tablet {
      margin: 0px;
      .partners-item {
        width: auto;
        max-width: 200px;
      }
    }

    @include en-mobile {
      max-width: 320px;
      margin: 0 auto;

      .partners-item {
        width: auto;
        max-width: 200px;
        min-width: 140px;
        margin-bottom: 10px;

        .item-logo {
          width: 100%;
          background-size: contain;
        }
      }
    }
  }
}

.all-plan-wrapper {
  @include vertical-center();
  align-items: center;
  width: 100%;
  max-width: 1200px;

  .title-wrapper {
    margin-bottom: 70px;

    @include en-mobile {
      width: 100%;
      margin-bottom: 50px;
      padding: 0px 30px;
    }
    .title {
      @include semi-bold(24);
      margin: 0px auto;
      line-height: 34px;
      text-align: center;

      @include en-mobile {
        @include semi-bold(18);
        max-width: 280px;
        margin: 0px 0px 10px;
        line-height: 24px;
        text-align: left;
      }
    }

    .subtitle {
      @include regular(15);
      text-align: center;

      @include en-mobile {
        @include regular(14);
        max-width: 200px;
        line-height: 19px;
        text-align: left;
      }
    }

    .blue {
      color: $navigation;
    }
  }

  .contents-list-wrapper {
    @include vertical-center();
    justify-content: flex-start;

    @include en-desktop {
      @include flex();
      justify-content: center;
    }
    .contents-wrapper {
      @include vertical-center();
      justify-content: flex-start;
      align-items: flex-start;

      @include en-desktop {
        width: 436px;
        min-height: 390px;

        &:first-child {
          margin-right: 48px;
        }
      }

      @include en-tablet {
        width: 436px;
      }

      @include en-mobile {
        padding: 0px 30px;
      }

      &:not(:last-child) {
        margin-bottom: 78px;

        @include en-mobile {
          margin-bottom: 48px;
        }
      }
    }

    .content-title-wrapper {
      @include flex();
      align-items: center;
      margin-bottom: 16px;

      @include en-mobile {
        margin-bottom: 20px;
      }

      .title {
        @include medium(20);
        color: $text-darken;
        line-height: 24px;

        @include en-mobile {
          @include medium(16);
          line-height: 20px;
        }
      }
    }

    .icon-wrapper {
      @include center-center();
      width: 24px;
      height: 24px;
      margin-right: 10px;
      border-radius: 50%;
      background-color: #eeedff;

      i {
        @include medium(20);
        width: 20px;
        line-height: 24px;
        color: $navigation;
      }

      @include en-mobile {
        width: 20px;
        height: 20px;

        i {
          @include medium(16);
          width: 16px;
          line-height: 20px;
        }
      }
    }

    .image-wrapper {
      width: 100%;
      margin-bottom: 28px;
      border-radius: 20px;
      filter: drop-shadow(0px 16px 24px rgba(142, 141, 208, 0.12));

      img {
        display: block;
        width: 100%;
        height: auto;
        min-height: 240px;
        object-fit: cover;
        pointer-events: none;
        border-radius: 20px;
      }

      @include en-desktop {
        height: 240px;
        overflow-y: hidden;
        img {
          min-width: 425px;
        }
      }

      @include en-tablet {
        img {
          min-width: 428px;
        }
      }

      @include en-mobile {
        width: calc(100% - 8px);
        margin-bottom: 20px;

        img {
          min-width: 84vw;
          min-height: 50vw;
        }
      }
    }

    .contents-desc-wrapper {
      @include medium(18);
      color: $text-darken-7;
      line-height: 25px;

      @include en-tablet {
        @include medium(16);
        line-height: 23px;
      }
      @include en-mobile {
        @include medium(14);
        line-height: 20px;
      }
    }
  }

  .only-plan-wrapper {
    @include relative();
    @include vertical-center;
    justify-content: flex-start;
    align-items: center;
    width: 1000px;
    min-height: 660px;
    border-radius: 20px;
    margin: 60px auto 0px;
    padding: 54px 0px 68px;
    background-color: #f5f6ff;

    .recommend-ribbon {
      @include absolute(top -30px right -37px);
      width: 190px;
      height: 174px;
      background-image: url('/en/img/pricing_ribbon_big.svg');
      background-size: contain;
      background-repeat: no-repeat;

      @include en-mobile {
        @include absolute(top -3.8vw right 50%);
        transform: translateX(50%);
        background-image: url('/en/img/pricing_ribbon_small.svg');
        width: 68vw;
        min-width: 184px;
        max-width: 284px;
        height: 11vw;
        min-height: 32px;
      }
    }

    .title-wrapper {
      align-items: center;
    }

    .contents-top-wrapper {
      @include relative();
      width: 100%;
    }

    @include en-tablet {
      width: 648px;
      height: auto;
      margin: 100px 60px 0px;
      padding: 64px 110px 96px;
    }

    @include en-mobile {
      width: 100%;
      height: auto;
      margin: 80px 0px 0px;
      padding: 80px 0px 60px;
      border-radius: 0px;

      .title-wrapper {
        align-items: flex-start;
        width: 100%;
        padding: 0px 30px;

        .title {
          margin: 0px 0px 10px;
        }
        .subtitle {
          max-width: 280px;
          margin: 0px;
        }
      }
    }

    .contents-list-wrapper {
      .icon-wrapper {
        background-color: $navigation;

        i {
          color: $white;
        }
      }

      .contents-wrapper {
        &:first-child {
          margin-bottom: 0px;
        }

        @include en-tablet {
          width: 100%;
          min-height: fit-content;
          &:first-child {
            margin-bottom: 76px;
          }
        }

        @include en-mobile {
          width: 100%;
          min-height: fit-content;
          &:first-child {
            margin-bottom: 50px;
          }
        }
      }

      .content-title-wrapper {
        width: 100%;
        justify-content: space-between;

        .content-title {
          @include flex();
          align-items: center;
        }
      }
    }
  }

  .chip-wrapper {
    @include absolute(top 0px right 0px);
    @include flex();
    align-items: center;
    z-index: 1;

    @include en-mobile {
      top: unset;
      @include absolute(right 8px bottom 28px);

      .chip {
        height: 30px;
        padding: 7px 12px;
      }
    }

    .chip {
      @include semi-bold(12);
      width: fit-content;
      height: 32px;
      padding: 8px 12px;
      border-radius: 20px;
      color: $white;
      line-height: 16px;

      &.advanced {
        background-color: #4d49f4;
      }

      &.premium {
        background-color: #8f00ff;
      }

      &:not(:last-child) {
        margin-right: 5px;
      }
    }
  }
}

.section-faq {
  @include en-desktop {
    max-width: 1200px;
  }
  @include en-tablet {
    max-width: 768px;
  }
}

.help-banner-wrapper {
  @include flex($justify: center);
  align-items: center;
  width: 100%;
  height: 250px;
  background-color: #fafafc;

  @include en-tablet {
    height: 290px;
    padding: 0px 60px;
  }

  @include en-mobile {
    justify-content: flex-start;
    height: 320px;
    padding: 0px 28px;
  }

  .help-banner {
    @include flex($justify: space-between);
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
    max-width: 1000px;

    @include en-tablet {
      max-width: 648px;
    }

    @include en-mobile {
      max-width: 320px;
    }
  }

  .help-banner-text-wrapper {
    @include vertical-center();

    .help-banner-text-title {
      @include semi-bold(24);
      color: $text-darken;
      margin-bottom: 8px;

      @include en-tablet {
        @include semi-bold(22);
        margin-bottom: 12px;
        max-width: 300px;
      }

      @include en-mobile {
        @include semi-bold(20);
        margin-bottom: 26px;
        line-height: 28px;
      }
    }

    .help-banner-text-desc {
      @include medium(17);
      color: $text-darken;
      line-height: 23px;

      a {
        color: $navigation;
      }

      @include en-tablet {
        @include medium(14);
        max-width: 320px;
        line-height: 20px;
      }
    }
  }

  .help-banner-image-wrapper {
    width: 140px;
    height: 140px;

    @include en-mobile {
      display: none;
    }

    img {
      width: 140px;
      height: 140px;
    }
  }
}
</style>
