<template>
  <div id="fullpage">
    <div class="section section-landing fp-auto-height-responsive">
      <div class="section-inner inner-landing">
        <div class="landing-contents">
          <div class="content-heading">
            <p>Introducing the only</p>
            <p><strong>AI-powered architectural design</strong> technology</p>
            <p>that boosts real estate project profitability</p>
            <p>from <span>3% to 26%</span></p>
          </div>
          <div class="content-phrase">
            <p>
              <span>Zenerate™</span> all possibilities of building design to
              maximize your success
            </p>
          </div>
          <div class="content-justyourcuriosity"></div>
          <div class="content-button">
            <button>LEARN MORE</button>
          </div>
        </div>
        <div class="arrow-bottom">
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
        <div class="engine-contents">
          <div class="content-heading">
            <p>Out Zenerate™ Engine</p>
          </div>
          <div class="content-instruction">
            <p>Our design automation software combines</p>
            <p>
              <span>AI + Human Intelligence</span> to search millions of
              possibilities,
            </p>
            <p>delivering <span>fast & easy feasibility studies</span></p>
            <p>and <span>optimized profitability.</span></p>
          </div>
        </div>
        <div class="engine-image">
          <img src="/en/img/landing_engine.gif" alt="" />
        </div>
      </div>
    </div>

    <div class="section section-market-insight fp-auto-height-responsive">
      <div class="section-inner inner-market-insight">
        <div class="market-insight-wrapper">
          <div class="market-insight-contents">
            <div class="content-heading">
              <p>We help you quickly</p>
              <p>assess your site feasibility</p>
            </div>
            <div class="content-instruction">
              <p><span>Market Insights & Map Layers</span></p>
            </div>
            <div class="content-numbering">
              <p>
                1. Customize your map layers to view planning, geospatial and
                development data and select the best development site for your
                project.
              </p>
              <p>
                2. Click on a site for diverse market insights about the
                location of interest along with financial data.
              </p>

              <button class="button-1" @click="router.push('/contact')">
                Learn more
              </button>
            </div>
          </div>
          <div class="market-insight-image">
            <img src="/en/img/landing_market_insight.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="section section-generation fp-auto-height-responsive">
      <div class="section-inner inner-generation">
        <div class="generation-contents">
          <div class="content-left">
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
          <div class="content-right fp-auto-height-responsive">
            <div class="content-heading">
              <p>
                Need to boost your project profitability and in a time crunch?
              </p>
            </div>
            <div class="content-instruction">
              <p>Let our AI tech <span>Zenerate™</span> do the work for you</p>
            </div>
            <div class="content-instruction">
              <p>
                Our customers have seen revenues increase
                <span>up to 12% on average</span>
                compared to manual calculations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-compare fp-auto-height-responsive">
      <div class="section-inner inner-compare">
        <div class="compare-contents">
          <div class="compare-text">
            <div class="text-heading">
              <p>Compare & pick your best solution</p>
            </div>
            <div class="text-content">
              <p>
                Or go with the most optimized, profitable solution generated
                byour powerful AI engine
              </p>
            </div>
          </div>
          <div class="compare-image">
            <img src="/en/img/landing_compare.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="section section-partners fp-auto-height fp-auto-height-responsive">
      <div class="partners-title">
        <p>We’re excited to help you</p>
        <p>
          <span>Zenerate™</span> all possibilities to maximize your success.
        </p>
      </div>
      <div class="section-inner inner-partners">
        <div class="partners-text-wrapper">
          <div class="partners-text">
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

import Store from '/Store/index'
const fullpage = computed(() => Store.state.root.FullPage)
onMounted(() => {
  fullpage.value.init('#fullpage', {})
})
onBeforeUnmount(() => {
  fullpage.value.destroy()
})
</script>
<style lang="scss" scoped>
.content-heading {
  p {
    @include bold(28);
    line-height: 40px;
  }
  margin-bottom: 16px;
}
.content-instruction {
  @include regular(22);
  line-height: 30px;
  span {
    @include bold(22);
    color: rgba($cr-main-blue, 0.8);
  }
  margin-bottom: 40px;
}
.content-numbering {
  margin-bottom: 48px;
  p {
    @include regular(18);
    color: $cr-text-grey;
    line-height: 24px;
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.content-button {
  @include button-1;
}

.section-landing {
  .landing-background {
    background-image: url('/en/img/BG.png');
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
      opacity: 0.5;
    }
  }
  .landing-contents {
    @include relative;
    z-index: 2;
    padding: 0px 60px;
    @include vertical-center;
    flex: 1;
    .content-heading {
      p {
        @include regular(32);
        strong {
          font-weight: $bold;
          font-size: 34px;
        }
        span {
          color: $main;
          font-weight: $bold;
        }
      }
      margin-bottom: 64px;
    }
    .content-phrase {
      color: $cr-text-light-grey;
      p {
        @include regular(18);
        span {
          @include bold(18);
        }
      }
    }
    .content-justyourcuriosity {
      color: $cr-text-light-grey;
      @include regular(18);
      margin-bottom: 24px;
    }
    .content-button {
      button {
        @include button-1;
      }
    }
  }
  .arrow-bottom {
    @include absolute(right 80px bottom 56px);
  }
}
.section-engine {
  .section-inner {
    padding-left: 60px;
    @include flex();
    .engine-image {
      width: 460px;
      height: 400px;
      margin: auto 0px;
      margin-left: auto;
      @include elevation-2;
      border-radius: 6px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .engine-contents {
      flex: 1;
      @include vertical-center;
      text-align: left;
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
    padding-left: 80px;
    z-index: 1;
    @include flex;
    .market-insight-contents {
      // flex: 1;
      margin-right: 160px;
      margin-right: auto;
      // @include vertical-center;
      align-items: flex-start;
      // text-align: right;
      width: 380px;
      .content-heading {
        p {
          @include bold(24);
        }
        margin-bottom: 40px;
      }
      .content-phrase {
        @include regular(18);
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
        button {
          background-color: white;
          border: $main 1px solid;
          color: $main;
          @include regular(15);
          width: 130px;
          padding: 12px 20px;
          border-radius: 5px;
        }
      }
    }
    .market-insight-image {
      margin: auto 0px;
      width: 500px;
      height: 333px;
      img {
        @include elevation-2;
        width: 100%;
        height: 100%;
      }
    }
  }
}
.section-generation {
  .generation-contents {
    width: 100%;
    height: 100%;
    padding-left: 60px;
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
    }
    .content-right {
      margin: auto 0px;
      width: 488px;
      @include vertical-center;
      text-align: left;
      .content-heading {
        margin-bottom: 36px;
      }
      .content-instruction {
        margin-bottom: 24px;
      }
    }
  }
}

.section-compare {
  .compare-contents {
    flex: 1;
    @include flex;
    padding-left: 60px;
    .compare-image {
      @include vertical-center;
      img {
        max-width: 465px;
        @include elevation-2;
      }
    }
    .compare-text {
      width: 492px;
      margin-right: 88px;
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
      .arrow-bottom {
        margin-top: 96px;
        margin-bottom: 0px;
        justify-content: flex-end;
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
    height: 240px;
    margin-top: 100px;
    @include vertical-center;
    background-image: url('/en/img/service_ourservices.png');
    background-size: cover;
    background-origin: center center;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    p {
      @include medium(32);
      span {
        color: #006dff;
      }
    }
  }
  .partners-text-wrapper {
    margin: 96px auto;
    .partners-text {
      max-width: 600px;
      margin: 0px auto;
      text-align: center;
      p {
        @include regular(22);
        color: $cr-text-dark-grey;
      }
    }
  }
  .partners-list {
    @include flex($justify: space-between);
    .partners-item {
      margin-bottom: 40px;
      width: 200px;
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
        @include regular(12);
      }
    }
  }
}
</style>
