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
</style>
