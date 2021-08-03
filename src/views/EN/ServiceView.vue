<template>
  <div id="fullpage-service">
    <div class="section section-hero">
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
          <p>
            We provide all possible design alternatives considering site,
            massing, floor height, view, and more, to maximize profits for you
            and living standards for your communities.
          </p>
        </div>
      </div>
    </div>
    <div class="section section-technology">
      <div class="section-inner">
        <div class="technology-header">
          <p class="header-title">OUR SERVICES</p>
          <p class="header-content">
            Which pain points have we solved with our technology?
          </p>
        </div>
        <div class="technology-content">
          <div
            class="content-item"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-offset="-500"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
          >
            <div class="item-problem">
              <p>Lack of integrated design and profitability analysis</p>
            </div>
            <div class="item-arrow">
              <img src="/en/img/service_arrow_icon.svg" alt="" />
            </div>
            <div class="item-solution">
              <span> Optimal design using <strong>AI technology</strong> </span>
            </div>
          </div>
          <div
            class="content-item"
            data-aos="fade-up"
            data-aos-delay="1500"
            data-aos-offset="-500"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
          >
            <div class="item-problem">
              <p>Limitations in finding the best ROI</p>
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
            data-aos-delay="2500"
            data-aos-offset="-500"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
          >
            <div class="item-problem">
              <p>Single rental price applied to revenue projection</p>
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
        <div class="arrow-bottom">
          <Arrow />
        </div>
      </div>
    </div>
    <div class="section section-services">
      <div class="section-inner inner-services">
        <div class="service-content-wrapper">
          <div class="service-web service-content">
            <p class="content-title">WEB SERVICE</p>
            <div class="content-image">
              <img src="/en/img/service_web.png" alt="" />
            </div>
            <div class="content-explanation">
              <p class="exp-title">Quick & Easy Self-Service</p>
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
              <p class="exp-title">Customized Service</p>
              <p class="exp-content">
                Zenerate partners with major companies to improve profitability
                of early-stage real estate development projects.
              </p>
            </div>
          </div>
        </div>
        <div class="arrow-bottom">
          <Arrow />
        </div>
      </div>
    </div>
    <div class="section section-why">
      <div class="section-inner inner-why">
        <div class="why-hero-wrapper">
          <div class="why-text">
            <p>Zenerate's AI solution examines</p>
            <p>the profitability of real estate projects</p>
          </div>
          <div class="why-image image-skyscrapers"></div>
          <div class="why-image image-penpoint"></div>
          <div class="why-image image-laptop"></div>
        </div>
        <div class="why-content-wrapper">
          <div class="why-content">
            <img data-src="/en/img/service_why.png" src="" alt="" />
            <div class="why-content-text">
              <div class="text-title">USC Village Residential Project</div>
              <div class="text-content">
                Read to learn how Zenerate CEO Bongjai Shin collaborated with
                the USC housing team to transform and streamline the
                architectural design process.
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
  })
})
</script>
<style lang="scss" scoped>
.section-inner {
  width: 100%;
  height: 100%;
  padding-top: 100px;
  @include flex($dir: column);
}
.section-hero {
  width: 100%;
  height: 100%;
  background-image: url('/en/img/service_building.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .inner-hero {
    @include vertical-center;
    padding-left: 100px;
  }
  .hero-title {
    margin-bottom: 32px;
    @include flex;
    span {
      @include semi-bold(26);
      color: white;
      margin-right: 2px;
      margin-left: -3px;
    }
    img {
      padding-top: 2px;
      width: 122px;
    }
  }
  p {
    max-width: 600px;
    @include regular(18);
    color: white;
  }
}

.section-technology {
  .technology-header {
    height: 220px;
    width: 100%;
    background-image: url('/en/img/service_ourservices.png');
    text-align: center;
    @include flex($dir: column, $justify: flex-end);

    .header-title {
      margin-top: auto;
      @include semi-bold(16);
      color: $main;
      margin-bottom: 16px;
    }
    .header-content {
      @include semi-bold(26);
      margin-bottom: 60px;
    }
  }
  .technology-content {
    flex: 1;
    width: 800px;
    margin: 0px auto;
    // padding-top: 48px;
    @include flex($justify: space-between);
    .content-item {
      width: 232px;
      padding: 48px 6px;
      padding-top: 24px;
      border-bottom: solid 1px $main;
      height: 316px;
      margin: auto 0px;
      .item-problem {
        height: 100px;
        @include center-center;
        text-align: center;
        p {
          @include regular(18);
          margin-bottom: 32px;
        }
      }
      .item-arrow {
        text-align: center;
        margin-bottom: 32px;
      }
      .item-solution {
        text-align: center;
        span {
          @include regular(18);
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
        width: 440px;
        .content-title {
          @include semi-bold(18);
          color: $main;
          margin-bottom: 8px;
        }
        .content-image {
          height: 400px;
          width: 400px;
          margin: 0px auto;
          margin-bottom: 12px;
          img {
            max-width: 100%;
            height: 100%;
          }
        }
        .content-explanation {
          .exp-title {
            @include semi-bold(18);
            margin-bottom: 24px;
          }
          .exp-content {
            @include regular(18);
          }
        }
      }
    }
  }
}

.section-why {
  .inner-why {
    height: 100%;
    .why-hero-wrapper {
      @include relative;
      @include flex();
      .why-image {
        flex: 1;
        height: 25vh;
        background-size: cover;
        background-origin: center;
        &.image-skyscrapers {
          background-image: url('/en/img/service_skyscrapers.jpg');
        }
        &.image-penpoint {
          background-image: url('/en/img/service_penpoint.jpg');
        }
        &.image-laptop {
          background-image: url('/en/img/service_laptop.jpg');
        }
      }
      .why-text {
        @include absolute(bottom 48px);
        left: max(calc((100vw - 1600px) / 2), 48px);
        p {
          color: $white;
          @include semi-bold(24);
        }
      }
    }
    .why-content-wrapper{
      .why-content{
        @include flex($justify: space-around);
        padding-top: 45px;
        width: 1600px;
        margin: auto;
        img{
          height: 206px;
        }
        .why-content-text{
          .text-title{
              @include bold(24);
              text-align: center;
              padding-bottom: 30px;
          }
          .text-content{
              @include bold(24);
              text-align: center;
              width: 648px;
          }
        }
      }
    }
  }
}
</style>
