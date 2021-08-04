<template>
  <div id="fullpage">
    <div class="section section-landing">
      <div class="section-inner inner-landing">
        <div class="landing-contents">
          <div class="content-heading">
            <p>Introducing the only <strong>AI-powered</strong></p>
            <p><strong>architectural design</strong> technology</p>
            <p>that boosts real estate project profitability</p>
            <p>from <span>3% to 26%</span></p>
          </div>
          <div class="content-phrase">
            <p>
              <span>Zenerate™</span> all possibilities of building design to
              maximize your success
            </p>
          </div>
          <div class="content-button">
            <button>LEARN MORE</button>
          </div>
          <div class="content-justyourcuriosity">
            <p>No credit card needed. Just your curiosity.</p>
          </div>
        </div>
        <div class="arrow-bottom">
          <Arrow />
        </div>
      </div>
      <div class="landing-background"></div>
      <div class="landing-background-wave"></div>
    </div>
    <div class="section section-engine">
      <div class="section-inner inner-engine">
        <div class="engine-contents">
          <div class="content-heading">
            <p>Our Zenerate™ Engine</p>
          </div>
          <div class="content-phrase">
            <p>Our design automation software</p>
            <p>combines <strong>AI + Human Intelligence</strong></p>
            <p>to search millions of possibilities,</p>
            <p>delivering <strong>fast & easy feasibility studies</strong></p>
            <p>and <strong>optimized profitability.</strong></p>
          </div>
        </div>
        <div class="arrow-bottom">
          <Arrow></Arrow>
        </div>
        <div class="engine-image">
          <img src="/en/img/landing_planmaker.png" alt="" />
        </div>
      </div>
    </div>
    <div class="section section-instant-search">
      <div class="section-inner inner-instant-search">
        <div class="instant-search-image">
          <!-- <img src="/en/img/landing_instant_map1.png" alt="" /> -->
          <img src="/en/img/landing_instant_map2.png" alt="" />
        </div>
        <div class="instant-search-contents">
          <div class="content-heading">
            <p>Searching areas for your next building development project?</p>
          </div>
          <div class="content-phrase">
            <p>
              Use <strong>Instant Search</strong> for a site feasibility report
              generated within seconds:
            </p>
            <p>1. Type in your site address</p>
            <p>2. Click on a site</p>
            <button @click="router.push('/contact')">LEARN MORE</button>
          </div>
        </div>
        <div class="arrow-bottom">
          <Arrow></Arrow>
        </div>
      </div>
    </div>
    <div class="section section-market-insight">
      <div class="section-inner inner-market-insight">
        <div class="market-insight-image">
          <img src="/en/img/landing_market_insight.png" alt="" />
        </div>
        <div class="market-insight-contents">
          <div class="content-heading">
            <p>We help you quickly assess your site feasibility</p>
          </div>
          <div class="content-phrase">
            <p><strong>Market Insights & Map Layers</strong></p>
            <p>Customize your map layers to view</p>
            <p>planning, geospatial and development data</p>
            <p>and select the best development site for your project.</p>
            <p>Click on a site for diverse market insights</p>
            <p>about the location of interest along with financial data.</p>
            <button @click="router.push('/contact')">Learn more</button>
          </div>
        </div>
        <div class="arrow-bottom">
          <Arrow></Arrow>
        </div>
      </div>
      <div class="market-insight-background"></div>
    </div>
    <div class="section section-generation">
      <div class="section-inner inner-generation"></div>
    </div>
    <div class="section section-compare">
      <div class="section-inner inner-compare"></div>
    </div>
    <div class="section section-addtional">
      <div class="section-inner inner-additional"></div>
    </div>
    <div class="section section-partners">
      <div class="section-inner inner-partners"></div>
    </div>
    <div class="section section-footer fp-auto-height">
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
import { useRouter } from 'vue-router'
const router = useRouter()
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
.section-inner {
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0px auto;
  padding-top: 100px;
  @include flex($dir: column);
  @include relative;
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
    @include vertical-center;
    flex: 1;
    padding-left: 100px;
    .content-heading {
      p {
        @include regular(28);
        strong {
          font-weight: $bold;
        }
        span {
          color: $main;
          font-weight: $bold;
        }
      }
      margin-bottom: 28px;
    }
    .content-phrase {
      p {
        @include regular(18);
        span {
          @include bold(18);
        }
      }
      margin-bottom: 32px;
    }
    .content-button {
      button {
        @include medium(18);
        color: white;
        width: 200px;
        height: 48px;
        @include center-center;
        background: linear-gradient(270deg, #7471ff 0%, #5f94ff 100%);
        border-radius: 6px;
      }
      margin-bottom: 32px;
    }
    .content-justyourcuriosity {
      @include regular(18);
    }
  }
  .arrow-bottom {
    justify-content: flex-start;
    padding-left: 120px;
    margin-bottom: 120px;
  }
}
.section-engine {
  .engine-image {
    @include absolute(left 0 top 50%);
    transform: translateY(-50%);
  }
  .engine-contents {
    flex: 1;
    @include vertical-center;
    align-items: flex-end;
    text-align: right;
    .content-heading {
      p {
        @include bold(24);
      }
      margin-bottom: 40px;
    }
    .content-phrase {
      @include regular(24);
    }
  }
  .arrow-bottom {
    margin-bottom: 120px;
    justify-content: flex-end;
    padding-right: 20px;
  }
}
.section-instant-search {
  .inner-instant-search {
    position: relative;
    .instant-search-image {
      position: absolute;
      background-image: url('/en/img/landing_instant_map1.png');
      background-size: cover;
      background-position: center;
      height: calc(100% - 250px);
      width: 750px;
      bottom: 0px;
      img {
        position: absolute;
        width: 450px;
        transform: translateY(10%) translateX(27%);
      }
    }
    .instant-search-contents {
      flex: 1;
      margin-left: auto;
      @include vertical-center;
      align-items: flex-end;
      // text-align: right;
      width: 421px;
      .content-heading {
        p {
          @include bold(24);
        }
        margin-bottom: 40px;
      }
      .content-phrase {
        @include regular(18);
        p {
          margin-bottom: 40px;
          &:last-child {
            margin-bottom: 48px;
          }
        }
        button {
          background-color: $main;
          color: white;
          @include regular(18);
          width: 200px;
          padding: 12px 20px;
          border-radius: 5px;
        }
      }
    }
    .arrow-bottom {
      margin-bottom: 120px;
      justify-content: flex-end;
      padding-right: 20px;
    }
  }
}
.section-market-insight {
  // position: relative;
  .market-insight-background {
    background-image: url('/en/img/landing_map.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    @include absolute(left 0 top 0);
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0.1;
  }
  .inner-market-insight {
    z-index: 1;
    // position: relative;
    padding-top: 200px;
    .market-insight-image {
      position: absolute;
      right: 0px;
      img {
        width: 750px;
      }
    }
    .market-insight-contents {
      flex: 1;
      margin-right: auto;
      @include vertical-center;
      align-items: flex-end;
      // text-align: right;
      width: 421px;
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
    .arrow-bottom {
      margin-bottom: 120px;
      justify-content: flex-end;
      padding-right: 20px;
    }
  }
}
</style>
