<template>
  <div id="fullpage-service">
    <!-- <div class="section section-hero">
      <div class="section-inner inner-hero">
        <div class="hero-title">
          <span>What makes&nbsp;</span>
          <img src="/img/logo.png" alt="" />
          <span>&nbsp;unique?</span>
        </div>
        <div class="hero-content">
          <p>Zenerate has partnered with top-tier firms;</p>
          <p>
            real estate developers, investment firms, design firms and general
            contractors to provide data-driven insights.
          </p>
          <br />
          <p>
            We provide all possible design alternatives considering site,
            massing, floor height, view, and more, to maximize profits for you
            and living standards for your communities.
          </p>
        </div>
      </div>
    </div> -->
    <div class="section section-technology">
      <div class="section-inner">
        <div class="inner-technology">
          <div class="technology-header">
            <p class="header-title">OUR SERVICES</p>
            <p class="header-content">
              Which <strong>pain points</strong> have we solved with our
              technology?
            </p>
          </div>
          <div class="technology-content">
            <div
              class="content-item"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="-500"
              data-aos-duration="750"
              data-aos-anchor-placement="top-center"
            >
              <div class="item-problem">
                <span
                  >Lack of integrated design and profitability analysis</span
                >
              </div>
              <div class="item-arrow">
                <img src="/en/img/service_arrow_icon.svg" alt="" />
              </div>
              <div class="item-solution">
                <span>
                  Optimal design using <strong>AI technology</strong>
                </span>
              </div>
            </div>
            <div
              class="content-item"
              data-aos="fade-up"
              data-aos-delay="1250"
              data-aos-offset="-500"
              data-aos-duration="750"
              data-aos-anchor-placement="top-center"
            >
              <div class="item-problem">
                <span>Limitations in finding the best ROI</span>
              </div>
              <div class="item-arrow">
                <img src="/en/img/service_arrow_icon.svg" alt="" />
              </div>
              <div class="item-solution">
                <span>
                  <strong>Maximized development returns from</strong> 3% to 26%
                </span>
              </div>
            </div>
            <div
              class="content-item"
              data-aos="fade-up"
              data-aos-delay="2000"
              data-aos-offset="-500"
              data-aos-duration="7500"
              data-aos-anchor-placement="top-center"
            >
              <div class="item-problem">
                <span>Single rental price applied to revenue projection</span>
              </div>
              <div class="item-arrow">
                <img src="/en/img/service_arrow_icon.svg" alt="" />
              </div>
              <div class="item-solution">
                <span>
                  <strong>Various rental prices</strong> considering height,
                  views, bedroom type, layout, etc.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-services">
      <div class="section-inner inner-services">
        <div class="service-content-wrapper">
          <div class="service-web service-content">
            <p class="content-title">WEB PLATFORM</p>
            <div class="content-image">
              <img src="/en/img/service_web.png" alt="" />
            </div>
            <div class="content-explanation">
              <p class="exp-title">Fast Web Platform for Everyday Use</p>
              <p class="exp-content">
                Just type in your site address and get instant site feasibility
                results.
              </p>
            </div>
          </div>
          <div class="service-consulting service-content">
            <p class="content-title">CONSULTING SERVICE</p>
            <div class="content-image">
              <img src="/en/img/service_consulting.png" alt="" />
            </div>
            <div class="content-explanation">
              <p class="exp-title">Customized, Deep, Complex Service</p>
              <p class="exp-content">
                Zenerate partners with major companies to improve profitability
                of early-stage real estate development projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-why">
      <div class="why-hero-wrapper">
        <div class="why-image-wrapper">
          <div class="why-image image-skyscrapers"></div>
          <div class="why-image image-penpoint"></div>
          <div class="why-image image-laptop"></div>
        </div>
        <div class="why-text">
          <div class="text-inner">
            <p>Zenerate's AI solution examines</p>
            <p>the profitability of real estate projects</p>
          </div>
        </div>
      </div>
      <div class="section-inner inner-why">
        <div class="why-content-wrapper">
          <div class="why-content">
            <img data-src="/en/img/service_why.png" src="" alt="" />
            <div class="why-content-text">
              <div class="text-title">USC Village Residential Project</div>
              <div class="text-content">
                <span class="hover-pointer">Read</span> to learn how Zenerate CEO Bongjai Shin
                collaborated with the USC housing team to transform and
                streamline the architectural design process.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-footer fp-auto-height">
      <Footer></Footer>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import Store from '/Store/index'
const fullpage = computed(() => Store.state.root.FullPage)
// @ts-ignore
import Footer from '/Components/EN/Footer.vue'
// @ts-ignore
import Arrow from '/Components/EN/Arrow.vue'
onMounted(() => {
  fullpage.value.init('#fullpage-service', {
    // parallax: false,
    offsetSections: false,
    // navigation: false,
  })
})
</script>
<style lang="scss" scoped>
.section-hero {
  width: 100%;
  height: 100%;
  @include relative;
  background-image: url('/en/img/service_building.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .inner-hero {
    @include vertical-center;
  }
  .hero-title {
    margin-bottom: 32px;
    @include flex;
    span {
      @include bold(28);
      line-height: 40px;
      color: white;
      margin-right: 2px;
      margin-left: -3px;
    }
    img {
      height: 44px;
    }
  }
  p {
    max-width: 600px;
    @include regular(20);
    line-height: 26px;
    color: white;
  }
}

.section-technology {
  .inner-technology {
    padding: 0px 60px;
    margin: auto 0px;
  }
  .technology-header {
    height: 220px;
    width: 100%;
    text-align: center;
    @include flex($dir: column, $justify: center);

    .header-title {
      @include bold(16);
      color: $main;
    }
    .header-content {
      @include regular(26);
    }
  }
  .technology-content {
    margin: 0px auto;
    // padding-top: 48px;
    .content-item {
      padding-top: 24px;
      @include flex($justify: space-between);
      height: 108px;
      margin-bottom: 32px;
      .item-problem {
        padding: 0px 64px;
        width: 340px;
        height: 108px;
        border-radius: 30px;
        @include center-center;
        text-align: center;
        span {
          @include regular(18);
          color: $cr-main-blue;
        }
      }
      .item-arrow {
        text-align: center;
        margin: auto 0px;
      }
      .item-solution {
        padding: 0px 64px;
        width: 340px;
        height: 108px;
        @include center-center;
        border-radius: 30px;
        background-color: $cr-main-blue;
        text-align: center;
        span {
          @include regular(18);
          color: $white;
        }
      }
    }
  }
}

.section-services {
  .inner-services {
    @include flex($dir: column);
    max-width: 1280px;
    width: 100%;
    height: 100%;
    margin: 0px auto;
    @include center-center;
    .service-content-wrapper {
      width: 100%;
      flex: 1;
      @include center-center;
      justify-content: space-around;
      .service-content {
        width: 460px;
        text-align: center;
        .content-title {
          @include semi-bold(18);
          color: $main;
          margin-bottom: 40px;
        }
        .content-image {
          height: 272px;
          width: 400px;
          margin: 0px auto;
          margin-bottom: 40px;
          @include elevation-2;
          border-radius: 20px;
          img {
            max-width: 100%;
            height: 100%;
          }
        }
        .content-explanation {
          .exp-title {
            @include medium(20);
            margin-bottom: 24px;
          }
          .exp-content {
            @include regular(18);
            letter-spacing: -0.015em;
          }
        }
      }
    }
  }
}

.section-why {
  @include relative;
  .why-hero-wrapper {
    $y: calc(100px);
    @include absolute(left 0);
    top: $y;
    height: 25vh;
    @include flex();
    width: 100%;
    .why-image-wrapper {
      flex: 1;
      height: 25vh;
      width: 100%;
      @include absolute(left 0 top 0);
      background-size: cover;
      background-origin: center;
      height: 100%;
      @include flex;
      .why-image {
        &.image-skyscrapers {
          height: 100%;
          flex: 1;
          background-image: url('/en/img/service_skyscrapers.jpg');
          background-size: cover;
        }
        &.image-penpoint {
          height: 100%;
          flex: 1;
          background-image: url('/en/img/service_penpoint.jpg');
          background-size: cover;
        }
        &.image-laptop {
          height: 100%;
          flex: 1;
          background-image: url('/en/img/service_laptop.jpg');
          background-size: cover;
        }
      }
    }
    .why-text {
      @include container-no-top-padding;
      margin: auto !important;
      z-index: 1;
      .text-inner {
        padding: 0px 60px;
        p {
          color: $white;
          @include semi-bold(24);
        }
      }
    }
  }
  .inner-why {
    height: 100%;
    padding-top: 25vh !important;
  }
  .why-content-wrapper {
    margin: auto;
    margin-top: 25vh;
    padding: 0px 60px;
    .why-content {
      @include flex($justify: center);
      // padding-top: 60px;
      margin: auto;
      img {
        height: 300px;
      }
      .why-content-text {
        @include vertical-center;
        margin-left: 40px;
        flex: 1;
        .text-title {
          @include medium(24);
          text-align: center;
          text-decoration: underline;
          line-height: 40px;
          margin-bottom: 64px;
        }
        .text-content {
          @include regular(24);
          text-align: center;
          span {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
