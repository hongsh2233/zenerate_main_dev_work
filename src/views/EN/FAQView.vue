<template>
  <section class="section section-faq">
    <div class="faq-wrapper">
      <div class="faq-header">
        <h2>FAQ</h2>
        <p>
          Can't find the answers<br />
          you're looking for?

          <router-link to="contact">Contact us</router-link>
        </p>
      </div>
      <div class="faq-body">
        <div class="faq-tab-wrapper">
          <span
            v-for="(item, key) in tabList"
            :key="key"
            class="tab hover-pointer"
            :class="{ active: currentTab === item.key }"
            @click="() => toggleTab(item.key)"
          >
            {{ item.name }}
          </span>
        </div>
        <!-- Pricing -->
        <section
          class="faq-tab-contents-wrapper"
          v-show="currentTab === 'pricing'"
        >
          <div class="faq-tab-contents-inner">
            <div class="tab-contents">
              <div
                class="tab-contents-header"
                @click="() => toggleAccordion('pricing', 1)"
                :class="{ active: showContentsDic.pricing['1'] }"
              >
                <p>
                  <span>What happens after my free&nbsp;</span>
                  <span>trial ends?</span>
                </p>
                <i class="material-icons">keyboard_arrow_down</i>
              </div>
            </div>
            <transition name="slide-up">
              <div
                v-show="showContentsDic.pricing['1']"
                class="tab-contents-body"
              >
                <p class="tab-content">
                  After the 7 day free trial (or promo code offer) you will be
                  charged the amount detailed on the plan.
                </p>
                <p class="tab-content blue">
                  *Please note that during our product launch phase we are
                  offering extreme discounts. Once we raise our price to normal
                  levels we will reach out to you and ask for your confirmation
                  <strong>before</strong> charging you with adjusted rates.
                </p>
              </div>
            </transition>
          </div>
          <div class="faq-tab-contents-inner">
            <div class="tab-contents">
              <div
                class="tab-contents-header"
                @click="() => toggleAccordion('pricing', 2)"
                :class="{ active: showContentsDic.pricing['2'] }"
              >
                <p>When will the pricing change?</p>
                <i class="material-icons">keyboard_arrow_down</i>
              </div>
            </div>
            <transition name="slide-up">
              <div
                v-show="showContentsDic.pricing['2']"
                class="tab-contents-body"
              >
                <p class="tab-content">
                  We expect to raise our prices at some point before the end of
                  the year 2022.
                </p>
                <p class="tab-content blue">
                  *Please note that during our product launch phase we are
                  offering extreme discounts. Once we raise our price to normal
                  levels we will reach out to you and ask for your confirmation
                  <strong>before</strong> charging you with adjusted rates.
                </p>
              </div>
            </transition>
          </div>
          <div class="faq-tab-contents-inner">
            <div class="tab-contents">
              <div
                class="tab-contents-header"
                @click="() => toggleAccordion('pricing', 7)"
                :class="{ active: showContentsDic.pricing['7'] }"
              >
                <p>
                  <span>What kinds of payment do&nbsp;</span>
                  <span>you accept?</span>
                </p>
                <i class="material-icons">keyboard_arrow_down</i>
              </div>
            </div>
            <transition name="slide-up">
              <div
                v-show="showContentsDic.pricing['7']"
                class="tab-contents-body"
              >
                <p class="tab-content">
                  We accept all major credit cards including Visa, Mastercard,
                  Discover and American Express. If you'd like us to accept
                  purchase orders or take any form of offline payment, please
                  contact your account manager or write to
                  <a class="blue" href="mailto: billing@zenerate.ai"
                    >billing@zenerate.ai</a
                  >
                </p>
              </div>
            </transition>
          </div>
          <div class="faq-tab-contents-inner">
            <div class="tab-contents">
              <div
                class="tab-contents-header"
                @click="() => toggleAccordion('pricing', 3)"
                :class="{ active: showContentsDic.pricing['3'] }"
              >
                <p>Do you accept annual payments?</p>
                <i class="material-icons">keyboard_arrow_down</i>
              </div>
            </div>
            <transition name="slide-up">
              <div
                v-show="showContentsDic.pricing['3']"
                class="tab-contents-body"
              >
                <p class="tab-content">
                  Yes, we will in the future once our rates are adjusted to
                  normal levels. If you would like to discuss an annual payment
                  plan beforehand please email
                  <a class="blue" href="mailto: billing@zenerate.ai"
                    >billing@zenerate.ai</a
                  >
                </p>
              </div>
            </transition>
          </div>
          <div class="faq-tab-contents-inner">
            <div class="tab-contents">
              <div
                class="tab-contents-header"
                @click="() => toggleAccordion('pricing', 4)"
                :class="{ active: showContentsDic.pricing['4'] }"
              >
                <p>
                  <span>How do I update my payment&nbsp;</span>
                  <span>details for my license?</span>
                </p>
                <i class="material-icons">keyboard_arrow_down</i>
              </div>
            </div>
            <transition name="slide-up">
              <div
                v-show="showContentsDic.pricing['4']"
                class="tab-contents-body"
              >
                <p class="tab-content">
                  You can change your payment details under 'My Page'.
                </p>
              </div>
            </transition>
          </div>
          <div class="faq-tab-contents-inner">
            <div class="tab-contents">
              <div
                class="tab-contents-header"
                @click="() => toggleAccordion('pricing', 5)"
                :class="{ active: showContentsDic.pricing['5'] }"
              >
                <p>
                  <span>Can I upgrade or downgrade&nbsp;</span>
                  <span>anytime?</span>
                </p>
                <i class="material-icons">keyboard_arrow_down</i>
              </div>
            </div>
            <transition name="slide-up">
              <div
                v-show="showContentsDic.pricing['5']"
                class="tab-contents-body"
              >
                <p class="tab-content">
                  Yes, you may change your plan anytime under 'My Page'. The new
                  price will be effective starting on the next billing cycle.
                </p>
              </div>
            </transition>
          </div>
          <div class="faq-tab-contents-inner">
            <div class="tab-contents">
              <div
                class="tab-contents-header"
                @click="() => toggleAccordion('pricing', 6)"
                :class="{ active: showContentsDic.pricing['6'] }"
              >
                <p>What if I want to cancel?</p>
                <i class="material-icons">keyboard_arrow_down</i>
              </div>
            </div>
            <transition name="slide-up">
              <div
                v-show="showContentsDic.pricing['6']"
                class="tab-contents-body"
              >
                <p class="tab-content">
                  If you feel Zenerate is not a great fit, you can cancel
                  anytime within 'My Page'. You will be able to use Zenerate
                  until the end of the billing period. <br />Ex. Purchased/ or
                  charge
                </p>
                <p class="tab-content">
                  When you cancel, we would greatly appreciate your feedback as
                  it would help our mission in saving everyone in the real
                  estate development industry a lot of time and money to focus
                  on what they do best instead.
                </p>
              </div>
            </transition>
          </div>
        </section>

        <!-- Product -->
        <div class="faq-tab-contents-wrapper" v-show="currentTab === 'product'">
          <div class="faq-tab-contents-inner">
            <div class="tab-contents">
              <div
                class="tab-contents-header"
                @click="() => toggleAccordion('product', 1)"
                :class="{ active: showContentsDic.product['1'] }"
              >
                <p>Who uses Zenerate?</p>
                <i class="material-icons">keyboard_arrow_down</i>
              </div>
            </div>
            <transition name="slide-up">
              <div
                v-show="showContentsDic.product['1']"
                class="tab-contents-body"
              >
                <p class="tab-content">
                  Zenerate users are architects, developers, brokers, financial
                  institutions and anyone involved in the real estate
                  development process.
                </p>
              </div>
            </transition>
          </div>
          <div class="faq-tab-contents-inner">
            <div class="tab-contents">
              <div
                class="tab-contents-header"
                @click="() => toggleAccordion('product', 2)"
                :class="{ active: showContentsDic.product['2'] }"
              >
                <p>Where do you get your zoning info?</p>
                <i class="material-icons">keyboard_arrow_down</i>
              </div>
            </div>
            <transition name="slide-up">
              <div
                v-show="showContentsDic.product['2']"
                class="tab-contents-body"
              >
                <p class="tab-content">
                  Our incredible Zoning Analysts collect zoning and planning
                  information from local government sources. This info is then
                  entered into Zenerate’s engine to auto populate while using
                  the application.If you have more questions on zoning please
                  email us at
                  <a class="blue" href="mailto: zoning@zenerate.ai"
                    >zoning@zenerate.ai</a
                  >.
                </p>
              </div>
            </transition>
          </div>
          <div class="faq-tab-contents-inner">
            <div class="tab-contents">
              <div
                class="tab-contents-header"
                @click="() => toggleAccordion('product', 3)"
                :class="{ active: showContentsDic.product['3'] }"
              >
                <p>Is there a free trial available?</p>
                <i class="material-icons">keyboard_arrow_down</i>
              </div>
            </div>
            <transition name="slide-up">
              <div
                v-show="showContentsDic.product['3']"
                class="tab-contents-body"
              >
                <p class="tab-content">
                  Yes, there is a 7 day free trial available with each paid
                  plan.
                </p>
              </div>
            </transition>
          </div>
          <div class="faq-tab-contents-inner">
            <div class="tab-contents">
              <div
                class="tab-contents-header"
                @click="() => toggleAccordion('product', 4)"
                :class="{ active: showContentsDic.product['4'] }"
              >
                <p>Is there any setup involved?</p>
                <i class="material-icons">keyboard_arrow_down</i>
              </div>
            </div>
            <transition name="slide-up">
              <div
                v-show="showContentsDic.product['4']"
                class="tab-contents-body"
              >
                <p class="tab-content">
                  No, there is absolutely no setup involved and you can zenerate
                  feasibility solutions right away!
                </p>
              </div>
            </transition>
          </div>
          <div class="faq-tab-contents-inner">
            <div class="tab-contents">
              <div
                class="tab-contents-header"
                @click="() => toggleAccordion('product', 5)"
                :class="{ active: showContentsDic.product['5'] }"
              >
                <p>
                  <span>What are the main features&nbsp;</span>
                  <span>of Zenerate?</span>
                </p>
                <i class="material-icons">keyboard_arrow_down</i>
              </div>
            </div>
            <transition name="slide-up">
              <div
                v-show="showContentsDic.product['5']"
                class="tab-contents-body"
              >
                <p class="tab-content">
                  You can take a look at our main features here in the
                  <router-link to="overview" class="blue"
                    >Product Overview page.</router-link
                  >
                </p>
              </div>
            </transition>
          </div>
          <div class="faq-tab-contents-inner">
            <div class="tab-contents">
              <div
                class="tab-contents-header"
                @click="() => toggleAccordion('product', 6)"
                :class="{ active: showContentsDic.product['6'] }"
              >
                <p>How long does it take to generate solutions?</p>
                <i class="material-icons">keyboard_arrow_down</i>
              </div>
            </div>
            <transition name="slide-up">
              <div
                v-show="showContentsDic.product['6']"
                class="tab-contents-body"
              >
                <p class="tab-content">
                  Volume Study takes seconds to generate solutions while Deep
                  Search takes anywhere from 30-50 min. per site.
                </p>
              </div>
            </transition>
          </div>
          <div class="faq-tab-contents-inner">
            <div class="tab-contents">
              <div
                class="tab-contents-header"
                @click="() => toggleAccordion('product', 7)"
                :class="{ active: showContentsDic.product['7'] }"
              >
                <p>
                  <span>Is Zenerate web based or&nbsp;</span>
                  <span>a downloadable application?</span>
                </p>
                <i class="material-icons">keyboard_arrow_down</i>
              </div>
            </div>
            <transition name="slide-up">
              <div
                v-show="showContentsDic.product['7']"
                class="tab-contents-body"
              >
                <p class="tab-content">
                  Zenerate is 100% web based so you can access it from any PC or
                  tablet with internet access.
                </p>
              </div>
            </transition>
          </div>
          <div class="faq-tab-contents-inner">
            <div class="tab-contents">
              <div
                class="tab-contents-header"
                @click="() => toggleAccordion('product', 8)"
                :class="{ active: showContentsDic.product['8'] }"
              >
                <p>
                  <span>Does Zenerate work on mobile or&nbsp;</span>
                  <span>tablet?</span>
                </p>
                <i class="material-icons">keyboard_arrow_down</i>
              </div>
            </div>
            <transition name="slide-up">
              <div
                v-show="showContentsDic.product['8']"
                class="tab-contents-body"
              >
                <p class="tab-content">
                  Zenerate only works on PC or tablet with size more than 1024 x
                  762 pixels.
                </p>
              </div>
            </transition>
          </div>
        </div>
        <!-- Resource -->
        <div
          class="faq-tab-contents-wrapper"
          v-show="currentTab === 'resource'"
        >
          <div class="faq-tab-contents-inner">
            <div class="tab-contents">
              <div
                class="tab-contents-header"
                @click="() => toggleAccordion('resource', 1)"
                :class="{ active: showContentsDic.resource['1'] }"
              >
                <p>Are there any additional guides or tutorials?</p>
                <i class="material-icons">keyboard_arrow_down</i>
              </div>
            </div>
            <transition name="slide-up">
              <div
                v-show="showContentsDic.resource['1']"
                class="tab-contents-body"
              >
                <p class="tab-content">
                  You can view our
                  <router-link to="how-to-use" class="blue"
                    >tutorials here.</router-link
                  >
                  If you have any further questions please reach out to us at

                  <a class="blue" href="mailto: support@zenerate.ai"
                    >support@zenerate.ai</a
                  >
                  or

                  <router-link to="contact" class="blue">
                    contact us here.</router-link
                  >
                </p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted, reactive } from 'vue'
import Store from '/Store/index'
const currentTab = ref('pricing')
const toggleTab = (tab) => {
  currentTab.value = tab
}
const tabList = {
  pricing: { key: 'pricing', name: 'Pricing' },
  product: { key: 'product', name: 'Product' },
  resource: { key: 'resource', name: 'Resource' },
}

const showContentsDic = ref({
  pricing: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  },
  product: { 1: false, 2: false, 3: false },
  resource: { 1: false, 2: false, 3: false },
})
const toggleAccordion = (tab, idx) => {
  showContentsDic.value[tab][idx] = !showContentsDic.value[tab][idx]
}
</script>
<style lang="scss">
.section-faq {
  @include relative;
  width: 100%;
  height: 100%;

  .faq-wrapper {
    @include flex();
    justify-content: center;
    align-items: flex-start;
    padding: 140px 0px;

    @include en-tablet {
      flex-direction: column;
      padding: 132px 60px;
    }
    @include en-mobile {
      flex-direction: column;
      padding: 98px 0px;
    }
  }

  .faq-header {
    @include vertical-center();
    justify-content: flex-start;
    margin: 0px 120px 50px 0px;

    @include en-mobile {
      margin: 0px 30px 16px;
    }

    h2 {
      @include semi-bold(32);
      margin: 0px 0px 8px 0px;
      color: $text-darken;

      @include en-tablet {
        @include semi-bold(34);
      }

      @include en-mobile {
        margin: 0px 0px 4px 0px;
        @include semi-bold(22);
      }
    }
    p {
      @include medium(16);
      color: $text-darken;
      line-height: 22px;

      @include en-mobile {
        @include medium(13);
        line-height: 18px;
      }
    }

    a {
      color: $navigation;
      display: block;

      @include en-tablet {
        display: inline-block;
      }

      @include en-mobile {
        display: inline-block;
      }
    }
  }

  .faq-body {
    width: 705px;

    @include en-tablet {
      width: 100%;
    }

    @include en-mobile {
      width: 100%;
    }
  }

  .faq-tab-wrapper {
    @include flex();
    @include relative();
    align-items: center;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid $grey-3;

    @include en-mobile {
      padding: 0px;
    }

    .tab {
      @include semi-bold(20);
      @include center-center();
      width: 95px;
      height: 50px;
      color: $text-darken;
      border-bottom: 3px solid transparent;
      transition: border-bottom 0.5s ease;
      &:hover,
      &.active {
        color: $navigation;
        border-bottom-color: $navigation;
      }
      &:not(:last-child) {
        margin-right: 57px;
      }

      @include en-mobile {
        @include semi-bold(15);
        padding: 0px;
        width: 33%;

        &:not(:last-child) {
          margin-right: 0px;
        }
      }
    }
  }

  .faq-tab-contents-wrapper {
    @include vertical-center();
    padding: 30px 0px 0px;
  }

  .faq-tab-contents-inner {
    @include vertical-center();
    border-bottom: 1px solid $grey-3;
  }

  .tab-contents {
    @include vertical-center();
  }

  .tab-contents-header {
    @include flex($justify: space-between);
    @include medium(18);
    align-items: center;
    flex-wrap: nowrap;
    height: 75px;
    padding: 0px 10px;
    color: $text-darken;
    cursor: pointer;

    i {
      color: $text-darken;
    }

    &.active {
      i {
        transform: rotate(-180deg);
      }
    }

    @include en-mobile {
      @include medium(15);
      padding: 0px 24px 0px 30px;
    }
  }

  .tab-contents-body {
    @include vertical-center();
    @include regular(15);
    padding: 0px 78px 37px 10px;
    line-height: 21px;
    color: $text-darken;

    @include en-mobile {
      @include regular(14);
      padding: 0px 78px 30px 30px;
    }

    .tab-content {
      &:not(:last-child) {
        margin-bottom: 20px;
      }

      &.blue {
        color: $navigation;
      }

      .blue {
        color: $navigation;
        font-weight: 500;
      }

      strong {
        font-weight: 500;
      }
    }
  }
}
</style>
