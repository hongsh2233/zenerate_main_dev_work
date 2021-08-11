<template>
  <div id="fullpage">
    <div class="section section-landing fp-auto-height-responsive">
      <div class="section-inner inner-landing">
        <div class="inner-contents landing-contents">
          <div></div>
          <div
            class="content-heading"
            data-aos="fade-up"
            data-aos-offset="-1500"
            data-aos-duration="500"
          >
            <p>Introducing the only</p>
            <p><strong>AI-powered architectural design</strong> technology</p>
            <p>that boosts real estate development profitability</p>
            <p>from <span>3% to 26%</span></p>
          </div>
          <div
            class="content-phrase"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-offset="-1500"
            data-aos-duration="500"
          >
            <p>
              <span>Zenerate™</span> all possibilities of building design to
              maximize your success
            </p>
          </div>
          <div class="content-justyourcuriosity"></div>
          <div
            class="content-button"
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-offset="-1500"
            data-aos-duration="500"
          >
            <button @click="toContactForm">LEARN MORE</button>
          </div>
        </div>
        <div class="arrow-bottom only-en-desktop">
          <Arrow />
        </div>
      </div>
      <div class="landing-background"></div>
      <div class="landing-background-wave">
        <img src="/en/img/about_mission_back.png" alt="" />
      </div>
    </div>
    <div class="section section-engine fp-auto-height-responsive">
      <div class="section-inner inner-engine">
        <div class="inner-contents">
          <div class="engine-contents">
            <div
              class="content-heading"
              data-aos="fade-up"
              data-aos-offset="-200"
              data-aos-duration="500"
            >
              <p><strong>Our Zenerate™ Engine</strong></p>
            </div>
            <div
              class="content-text"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="-200"
              data-aos-duration="500"
            >
              <p>Our design automation software combines</p>
              <p>
                <span>AI + Data Science</span> to search millions of
                possibilities,
              </p>
              <p>delivering <span>fast & easy feasibility studies</span></p>
              <p>and <span>optimized profitability.</span></p>
            </div>
          </div>
          <div class="engine-image only-en-desktop">
            <img src="/en/img/landing_engine.gif" alt="" />
          </div>
          <div
            class="engine-image hidden-en-desktop"
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-offset="-200"
            data-aos-duration="500"
          >
            <img src="/en/img/landing_engine.gif" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="section section-market-insight fp-auto-height-responsive">
      <div class="section-inner inner-market-insight">
        <div class="inner-contents market-insight-wrapper">
          <div
            class="market-insight-image only-en-desktop"
            data-aos="fade-up"
            data-aos-offset="-200"
            data-aos-duration="500"
            data-aos-anchor-placement="bottom-bottom"
          >
            <img
              class="outer"
              src="/en/img/landing_instant_search_map.png"
              alt=""
            />
            <img
              class="inner"
              src="/en/img/landing_instant_search_inner.png"
              alt=""
            />
          </div>
          <div class="market-insight-contents">
            <div
              class="content-inner"
              style="margin-bottom: 32px"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="-200"
              data-aos-duration="500"
            >
              <div class="content-heading">
                <p><strong>Searching areas for your</strong></p>
                <p><strong>next building development project?</strong></p>
              </div>
              <div class="content-text">
                <p>
                  Use <span>Instant Search</span> for a site feasibility report
                  generated within seconds.
                </p>
              </div>
              <div class="content-numbering">
                <p>1. Type in your site address or click on a site.</p>
                <p>
                  2. Verify the instant result for a possible development plan.
                </p>
              </div>
            </div>
            <button
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-offset="-200"
              data-aos-duration="500"
              data-aos-anchor-placement="bottom-bottom"
              class="button-1"
              @click="toContactForm"
            >
              Learn more
            </button>
          </div>
          <div
            class="market-insight-image hidden-en-desktop"
            data-aos="fade-up"
            data-aos-delay="1500"
            data-aos-offset="-200"
            data-aos-duration="500"
          >
            <img
              class="outer"
              src="/en/img/landing_instant_search_map.png"
              alt=""
            />
            <img
              class="inner"
              src="/en/img/landing_instant_search_inner.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="section section-generation fp-auto-height-responsive">
      <div class="section-inner inner-generation">
        <div class="inner-contents generation-contents">
          <div
            class="content-left only-en-desktop"
            data-aos="fade-up"
            data-aos-offset="-200"
            data-aos-duration="500"
          >
            <div class="left-img">
              <img
                class="img-generation"
                src="/en/img/landing_generation_mode.png"
                alt=""
              />
              <img
                class="img-map"
                src="/en/img/landing_projects_in_map.png"
                alt=""
              />
            </div>
          </div>
          <div
            class="content-right"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-offset="-200"
            data-aos-duration="500"
          >
            <div class="content-heading">
              <p>
                <strong
                  >Need to boost your project profitability and in a time
                  crunch?</strong
                >
              </p>
            </div>
            <div class="content-text">
              <p>Let our AI tech <span>Zenerate™</span> do the work for you</p>
            </div>
            <div class="content-text">
              <p>
                Our customers have seen revenues increase
                <span>up to 12% on average</span>
                compared to how things have been done by human.
              </p>
            </div>
          </div>
          <div
            class="content-left hidden-en-desktop"
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-offset="-200"
            data-aos-duration="500"
          >
            <div class="left-img">
              <img
                class="img-generation"
                src="/en/img/landing_generation_mode.png"
                alt=""
              />
              <img
                class="img-map"
                src="/en/img/landing_projects_in_map.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-compare fp-auto-height-responsive">
      <div class="section-inner inner-compare">
        <div class="inner-contents compare-contents">
          <div
            class="compare-text"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-offset="-200"
            data-aos-duration="500"
          >
            <div class="content-heading">
              <p><strong>Compare & pick your best solution</strong></p>
            </div>
            <div class="content-text">
              <p>
                Or go with the most optimized, profitable solution generated by
                our powerful AI engine
              </p>
            </div>
          </div>
          <div
            class="compare-image only-en-desktop"
            data-aos="fade-up"
            data-aos-offset="-200"
            data-aos-duration="500"
          >
            <img src="/en/img/landing_compare.png" alt="" />
          </div>
          <div
            class="compare-image hidden-en-desktop"
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-offset="-200"
            data-aos-duration="500"
          >
            <img src="/en/img/landing_compare.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="section section-partners fp-auto-height fp-auto-height-responsive"
    >
      <div class="partners-title">
        <p>We’re excited to help you</p>
        <p>
          <span>Zenerate™</span> all possibilities to maximize your success.
        </p>
      </div>
      <div class="section-inner inner-partners">
        <div class="inner-contents">
          <div class="partners-text-wrapper">
            <div class="content-text">
              <p>
                Join developers, architects, property owners, investors, and
                planners who trust Zenerate with their projects.
              </p>
            </div>
          </div>
          <div class="partners-list">
            <div
              class="partners-item"
              v-for="(item, idx) in PartnersList"
              :key="idx"
            >
              <div
                class="item-logo"
                :style="{
                  'background-image': `url('/logo/logo_${item.key}.png')`,
                }"
              ></div>
              <div class="item-description">
                {{ item.description }}
              </div>
            </div>
            <div class="partners-item fake"></div>
            <div class="partners-item fake"></div>
            <div class="partners-item fake"></div>
            <div class="partners-item fake"></div>
            <div class="partners-item fake"></div>
            <div class="partners-item fake"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
// @ts-ignore
import Footer from '/Components/EN/Footer.vue'
// @ts-ignore
import Arrow from '/Components/EN/Arrow.vue'

//misc
import PartnersList from '/Constants/partners'
import { useRouter } from 'vue-router'

import Store from '/Store/index'
const fullpage = computed(() => Store.state.root.FullPage)
onMounted(() => {
  fullpage.value.init('#fullpage', {})
})
onBeforeUnmount(() => {
  fullpage.value.destroy()
})

const router = useRouter()
const toContactForm = () => {
  router.push({
    name: 'en-contact',
    query: {
      from: 'demo',
    },
  })
}
</script>
<style lang="scss" scoped>
.section-landing {
  .landing-background {
    background-image: url('/en/img/landing_buildings.gif');
    background-size: cover;
    background-repeat: no-repeat;
    @include absolute(left 0 top 0);
    z-index: 0;
    width: 100%;
    height: 100%;
  }
  .landing-background-wave {
    width: 100%;
    height: 100%;
    @include absolute(left 0 top 50%);
    z-index: 1;
    img {
      width: 100%;
      transform: translateY(-25%);
      opacity: 0.2;
      filter: grayscale(50%);
    }
  }
  .landing-contents {
    @include relative;
    z-index: 2;
    @include vertical-center;
    flex: 1;
    .content-heading {
      margin-bottom: 64px;
      color: $white;
      p span {
        color: #cbd0fe;
      }
    }
    .content-phrase {
      color: $white;
      margin-bottom: 24px;
      @include en-tablet {
        max-width: 60%;
        margin: 0px auto;
        margin-bottom: 40px;
      }
      @include en-mobile {
        max-width: 60%;
        margin: 0px auto;
        margin-bottom: 40px;
      }
    }

    .content-button {
      button {
        @include button-1;
      }
      @include en-tablet {
        margin: 0px auto;
      }
    }
  }
  .arrow-bottom {
    @include absolute(right 80px bottom 56px);
  }
}
.section-engine {
  .section-inner {
    .inner-contents {
      @include flex();
      width: 100%;
      margin: auto 0px;
      .engine-image {
        width: 480px;
        height: 400px;
        margin: auto 0px;
        margin-left: auto;
        @include elevation-2;
        border-radius: 6px;
        img {
          width: 100%;
          height: 100%;
        }
        @include en-tablet {
          width: 400px;
          height: 320px;
          margin-left: 0;
          margin: 0px auto;
        }
        @include en-mobile {
          width: 400px;
          height: 320px;
          margin-left: 0;
          margin: 0px auto;
        }
      }
      .engine-contents {
        flex: 1;
        @include vertical-center;
        .content-heading {
          margin-bottom: 32px;
        }
        text-align: left;
        @include en-tablet {
          width: 100%;
          text-align: center;
          flex: none;
          margin-bottom: 56px;
        }
        @include en-mobile {
          width: 100%;
          text-align: center;
          flex: none;
          margin-bottom: 56px;
        }
      }
    }
  }
}
.section-market-insight {
  // position: relative;
  .market-insight-wrapper {
    @include vertical-center;
    width: 100%;
    height: fit-content;
    margin: auto 0px;
    @include flex($justify: space-between);
  }
  .inner-market-insight {
    z-index: 1;
    @include flex;
    .market-insight-contents {
      // flex: 1;
      // @include vertical-center;
      align-items: flex-start;
      // text-align: right;
      width: 524px;
      @include en-tablet {
        // margin-right: 0;
        width: 100%;
        margin-bottom: 80px;
      }
      @include en-mobile {
        // margin-right: 0;
        width: 100%;
        margin-bottom: 80px;
      }
      .content-heading {
        margin-bottom: 24px;
      }
      .content-text {
        @include en-tablet {
          // margin-right: 0;
          margin-bottom: 40px;
        }
        @include en-mobile {
          // margin-right: 0;
          margin-bottom: 40px;
        }
      }
      .content-phrase {
        p {
          margin-bottom: 10px;
          &:nth-child(1) {
            margin-bottom: 48px;
          }
          &:nth-child(4) {
            margin-bottom: 48px;
          }
          &:nth-child(6) {
            margin-bottom: 48px;
          }
        }
      }
      button {
        @include en-tablet {
          margin: 0px auto;
        }
        @include en-mobile {
          margin: 0px auto;
        }
        margin-top: 48px;
      }
    }
    .market-insight-image {
      margin: auto 0px;
      width: 500px;
      height: 333px;
      @include relative;
      margin-right: 64px;
      .outer {
        @include elevation-2;
        width: 100%;
        height: 100%;
      }
      .inner {
        @include absolute(top 50% left 50%);
        width: 256px;
        height: 221px;
        transform: translate(-50%, -50%);
      }
      @include en-tablet {
        margin: auto;
      }
      @include en-mobile {
        margin: auto;
      }
    }
  }
}
.section-generation {
  .generation-contents {
    width: 100%;
    height: 100%;
    margin: auto 0px;
    @include flex;
    .content-left {
      margin: auto 0px;
      width: 536px;
      margin-right: 40px;
      height: 355px;
      @include vertical-center;
      .left-img {
        width: 100%;
        height: 100%;
        @include relative;
        .img-generation {
          @include absolute(right 0 bottom 0);
          z-index: 1;
          width: 340px;
          height: 270px;
        }
        .img-map {
          @include absolute(top 0 left 0);
          width: 433px;
          height: 100%;
        }
      }
      @include en-tablet {
        margin: 0px auto;
      }
      @include en-mobile {
        width: 100%;
        margin: 0px auto;
      }
    }
    .content-right {
      margin: auto 0px;
      width: 488px;
      @include vertical-center;
      .content-heading {
        margin-bottom: 36px;
      }
      .content-text {
        margin-bottom: 24px;
      }
      @include en-tablet {
        width: 100%;
      }
      @include en-mobile {
        width: 100%;
      }
    }
  }
}

.section-compare {
  .compare-contents {
    @include flex;
    margin: auto 0px;
    .compare-image {
      max-width: 540px;
      @include vertical-center;
      img {
        @include elevation-2;
        width: 100%;
      }
      @include en-tablet {
        margin: 0px auto;
        max-width: 90%;
      }
      @include en-mobile {
        margin: 0px auto;
        max-width: 90%;
      }
    }
    .compare-text {
      width: 492px;
      margin-right: 44px;
      @include vertical-center;
      text-align: left;
      .text-heading {
        @include bold(28);
        margin-bottom: 64px;
      }
      .text-content {
        p {
          @include regular(22);
        }
      }
      @include en-tablet {
        width: 100%;
        text-align: center;
        margin-right: 0;
        margin-bottom: 48px;
      }
      @include en-mobile {
        width: 100%;
        text-align: center;
        margin-right: 0;
        margin-bottom: 48px;
      }
    }
  }
}

.section-partners {
  .section-inner {
    padding-top: 0;
    height: auto;
  }

  .partners-title {
    margin-top: 100px;
    @include relative;
    text-align: center;
    @include vertical-center;
    height: 260px;
    &::before {
      @include absolute(left 0 top 0 right 0 bottom 0);
      background-image: url('/en/img/service_ourservices.png');
      background-size: cover;
      background-origin: center center;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0.5;
      content: '';
    }
    p {
      @include medium(32);
      position: relative;
      span {
        color: #006dff;
      }
    }
    @include en-tablet {
      p {
        font-size: 28px;
      }
    }
    @include en-mobile {
      p {
        font-size: 28px;
      }
    }
  }
  .partners-text-wrapper {
    margin: 96px auto;
    .content-text {
      max-width: 600px;
      margin: 0px auto;
      text-align: center;
      p {
        color: $cr-text-dark-grey;
      }
    }
  }
  .partners-list {
    @include flex($justify: space-between);
    .partners-item {
      margin-bottom: 40px;
      width: 200px;
      max-width: 100%;
      .item-logo {
        width: 200px;
        margin: 0px auto;
        height: 60px;
        margin-bottom: 24px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      .item-description {
        width: 100%;
        text-align: center;
        @include regular(14);
      }
      &.fake {
        height: 0px;
        margin: 0;
        padding: 0;
      }
      @include en-mobile {
        margin: 0px auto;
        margin-bottom: 40px;
      }
    }
    margin-bottom: 80px;
  }
}
</style>
