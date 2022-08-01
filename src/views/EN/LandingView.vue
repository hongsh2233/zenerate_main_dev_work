<template>
  <div class="min-w-[320px]">
    <div class="section section-landing">
      <div class="section-inner inner-landing">
        <div class="inner-contents landing-contents">
          <div class="content-wrapper">
            <div class="content-title-wrapper">
              <div class="content-heading">
                <p><strong>The all-in-one,</strong></p>
                <p>AI-powered</p>
                <p>feasibility study tool</p>
              </div>

              <div class="content-phrase">
                <p>Let Zenerate take care of&nbsp;</p>
                <p>the&nbsp;<strong>zoning research,</strong>&nbsp;</p>
                <p><strong>floor plan designs</strong>&nbsp;</p>
                <p>and&nbsp;</p>
                <p><strong>financial analysis.</strong></p>
                <p>All while&nbsp;<strong>maximizing returns</strong></p>
                <p>via our advanced AI-engine</p>
              </div>
              <div class="content-justyourcuriosity"></div>
              <button type="button" class="content-button">
                <router-link class="demo-link" :to="{ name: 'en-demo' }">
                  BOOK A DEMO
                </router-link>
              </button>
            </div>
            <div class="content-image-wrapper">
              <img src="/video/scroll_building.gif" alt="" />
            </div>
          </div>
        </div>
        <!-- <div class="arrow-bottom arrow-blue">
          <Arrow />
        </div> -->
      </div>
    </div>
    <div class="section section-partners">
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
      <div class="background-image background-map"></div>
    </div>

    <div class="section section-app-contents">
      <div class="content-text-wrapper">
        <div class="title-wrapper">
          <p class="title">
            Instantly find <br />
            <strong>the most profitable,</strong><br />
            <strong>feasible solutions</strong>
          </p>

          <router-link
            :to="{ name: 'en-overview' }"
            class="link hidden-en-tablet hidden-en-mobile"
            >Product Overview
            <i class="material-icons"> east </i>
          </router-link>
        </div>
        <div class="text-desc hidden-en-tablet">
          <p>
            <span>No more spending weeks&nbsp;</span>
            <span>and months&nbsp;</span>
            <span>to come up with &nbsp;</span
            ><span>feasible options&nbsp;</span>
            <span>for development.</span>
          </p>

          <p>
            <span>In minutes, Zenerate's AI engine&nbsp;</span
            ><span>optimizes&nbsp;</span><span>a multitude of&nbsp;</span
            ><span>variables&nbsp;</span><span>to find the true &nbsp;</span
            ><span>'highest&nbsp;</span><span>and&nbsp;</span
            ><span>best use'&nbsp;</span><span>solution&nbsp;</span
            ><span>available&nbsp;</span><span>on&nbsp;</span
            ><span>a given site.</span>
          </p>
          <p>
            <span>This includes zenerating market&nbsp;</span
            ><span>consistent floor plans&nbsp;</span
            ><span>that are all&nbsp;</span
            ><span>zoning code compliant&nbsp;</span><span>while&nbsp;</span
            ><span>using&nbsp;</span><span>AI algorithms&nbsp;</span
            ><span>to&nbsp;</span><span>maximize returns.</span>
          </p>
        </div>
        <div class="text-desc hidden-en-desktop hidden-en-mobile">
          <p>
            No more spending weeks and months to come up with <br />feasible
            options for development.
          </p>
          <p>
            In minutes, Zenerate's AI engine optimizes a multitude of<br />
            variables to find the true 'highest and best use' solution<br />
            available on a given site.
          </p>
          <p>
            This includes zenerating market consistent floor plans that<br />
            are all zoning code compliant while using AI algorithms<br />
            to maximize returns.
          </p>
        </div>

        <router-link
          :to="{ name: 'en-overview' }"
          class="link hidden-en-desktop"
          >Product Overview
          <i class="material-icons"> east </i>
        </router-link>
      </div>
      <div class="content-image-wrapper first">
        <video
          loop
          muted
          autoplay
          playsinline
          id="solution-video"
          poster="/en/landing_solution_poster.jpg"
          data-src="/en/landing_solution_medium.mp4"
        >
          <source
            data-src="/en/landing_solution_big.mp4"
            data-mw="1600"
            type="video/mp4"
          />
        </video>
      </div>
    </div>

    <div class="section section-medium-banner">
      <div class="banner-text-wrapper">
        <p>
          Giving
          <span class="blue">architects,&nbsp;</span
          ><span class="blue">developers, brokers,&nbsp;</span>
          <span class="blue">financial institutions</span>
        </p>
        <p>
          <span>and anyone involved in&nbsp;</span><span>real estate&nbsp;</span
          ><span>development&nbsp;</span>
          <span>with AI super powers to&nbsp;</span>
          <span
            ><strong>save weeks of time&nbsp;</strong>and
            <strong>zenerate more profit!&nbsp;</strong></span
          >
        </p>
      </div>
      <button type="button" class="start-button">
        <router-link class="demo-link" :to="{ name: 'en-demo' }">
          BOOK A DEMO
        </router-link>
      </button>
    </div>

    <div class="section section-big-banner">
      <div class="banner-item-wrapper">
        <div class="banner-item">
          <h4 class="title">Returns, maximized.</h4>
          <div class="profit-wrapper">
            <div class="icon-wrapper">
              <i class="material-icons-outlined">add</i>
            </div>
            <div class="profit">
              <span class="number">12</span>
              <span class="unit">%</span>
            </div>
          </div>
          <p class="item-desc">
            Users have experienced<br />
            an average of 12%<br />
            additional returns compared to<br />
            their original plans
          </p>
        </div>
        <div class="banner-item-divider hidden-en-desktop"></div>
        <div class="banner-item">
          <h4 class="title">Weeks reduced to</h4>
          <div class="profit-wrapper">
            <div class="icon-wrapper">
              <i class="material-icons big">history</i>
            </div>
            <div class="profit">
              <span class="number">50</span>
              <span class="unit">min.</span>
            </div>
          </div>
          <div class="item-desc">
            <span class="desc-title">Cut down on weeks & months of </span>
            <p class="list">
              <i class="material-icons">check</i>
              <span>Searching for sites</span>
            </p>
            <p class="list">
              <i class="material-icons">check</i>
              <span>Analyzing zoning codes</span>
            </p>
            <p class="list">
              <i class="material-icons">check</i>
              <span>Crunching numbers</span>
            </p>
            <p class="list">
              <i class="material-icons">check</i>
              <span>Requesting or drafting floor plans</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section section-app-contents">
      <div class="content-text-wrapper">
        <div class="title-wrapper">
          <p class="title">
            <strong>Easy to use</strong><br />
            with no setup
          </p>
        </div>
        <div class="text-desc-list">
          <div class="list">
            <span class="circle">1</span>
            <span>Search for a site</span>
          </div>

          <div class="list">
            <span class="circle">2</span>

            <div class="guide-wrapper">
              <p>
                <span>Verify auto populated&nbsp;</span
                ><span> zoning code info</span>
              </p>
              <p class="guide">
                <span>*Manually adjust regulation settings&nbsp;</span
                ><span>if needed</span>
              </p>
            </div>
          </div>
          <div class="list">
            <span class="circle">3</span>
            <p>
              <span>Zenerate thousands of&nbsp;</span
              ><span>feasibility solutions</span>
            </p>
          </div>
        </div>
      </div>
      <div class="content-image-wrapper second">
        <video
          loop
          muted
          autoplay
          playsinline
          id="setup-video"
          poster="/en/landing_setup_poster.jpg"
          data-src="/en/landing_setup_medium.mp4"
        >
          <source
            data-src="/en/landing_setup_big.mp4"
            data-mw="1600"
            type="video/mp4"
          />
        </video>
      </div>
    </div>

    <div class="section section-medium-banner">
      <div class="banner-text-wrapper large">
        <p class="hidden-en-tablet hidden-en-desktop">
          <span> You'll never want to </span><br />
          <span>start a project without</span>
          <img src="/img/logo_color.svg" alt="logo" />
          <span>again.</span>
        </p>
        <p class="hidden-en-mobile">
          <span> You'll never want to start a project </span><br />
          <span> without </span>
          <img src="/img/logo_color.svg" alt="logo" />
          <span> again. </span>
        </p>
        <p>
          <span><strong>Try for free</strong> to see why.</span>
        </p>
      </div>
      <button type="button" class="start-button">
        <router-link class="demo-link" :to="{ name: 'en-demo' }">
          BOOK A DEMO
        </router-link>
      </button>
      <div class="background-wave"></div>
    </div>

    <div class="zenerate-launch-wrapper">
      <div class="zenerate-launch-info-wrapper">
        <div class="zenerate-launch-title-wrapper">
          <h2 class="title hidden-en-mobile">
            Zenerate is only available <br />
            in <strong>Los Angeles</strong> for now.
          </h2>
          <p class="title hidden-en-desktop hidden-en-tablet">
            <span>Zenerate is&nbsp;</span><span>only available&nbsp;</span>
            <span>in&nbsp;</span>
            <span><strong>Los Angeles</strong> for now.</span>
          </p>
          <p class="subtitle">
            <span> Our goal is to cover&nbsp;</span>
            <span>every inch&nbsp;</span>
            <span>of&nbsp;</span>
            <span>the U.S.&nbsp;</span>
            <span>But until then,&nbsp;</span>
            <span>here are&nbsp;</span>
            <span>our upcoming cities</span>
          </p>
        </div>
        <div class="map-wrapper">
          <img
            src="/en/img/overview_launch_map.png"
            alt="zenerate laucnch site"
          />
        </div>
      </div>
      <div class="zenerate-launch-desc-wrapper">
        <p class="zenerate-launch-desc hidden-en-mobile">
          <span>If you want to subscribe to our updates list&nbsp;</span>

          <router-link :to="{ name: 'SignUp' }" target="_blank" class="blue"
            >click here.&nbsp;
          </router-link>
          <span>We'll send you an update everytime&nbsp;</span>
          <span>we launch in a new city or district.</span>
        </p>

        <p class="zenerate-launch-desc hidden-en-desktop hidden-en-tablet">
          <span>If you want&nbsp;</span>
          <span>to subscribe&nbsp;</span>
          <span>to&nbsp;</span>
          <span>our updates&nbsp;</span>
          <span>list&nbsp;</span>
          <router-link :to="{ name: 'SignUp' }" target="_blank" class="blue"
            >click here.&nbsp;
          </router-link>
          <span>We'll send&nbsp;</span>
          <span>you&nbsp;</span>
          <span>an update&nbsp;</span>
          <span>everytime&nbsp;</span>
          <span>we launch&nbsp;</span>
          <span>in a new city&nbsp;</span>
          <span>or district.&nbsp;</span>
        </p>
      </div>
    </div>
    <div class="section section-footer fp-auto-height">
      <Footer />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRouter } from 'vue-router'
import Footer from '/Components/EN/Footer.vue'
import Arrow from '/Components/EN/Arrow.vue'
import PartnersList from '/Constants/partners'
import APIService from '/Services/api'
import { useGtag } from 'vue-gtag-next'
import VideoResponser from '/Utils/videoResponser'
import Store from '/Store/index'
// const fullpage = computed(() => Store.state.root.FullPage)
// onMounted(async () => {
//   fullpage.value.init('#fullpage-landing', {
//     // parallax: false,
//     // offsetSections: false,
//     navigation: false,
//   })

//   const appHeight = () => {
//     const doc = document.documentElement
//     doc.style.setProperty('--app-height', `${window.innerHeight}px`)
//   }
//   window.addEventListener('resize', appHeight)
//   appHeight()
// })
// onBeforeUnmount(() => {
//   fullpage.value.destroy()
// })

const { event } = useGtag()
const goToApp = () => {
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

const video1 = ref(null)
const video2 = ref(null)
onMounted(() => {
  video1.value = new VideoResponser('#solution-video')
  video2.value = new VideoResponser('#setup-video')
})
</script>
<style lang="scss" scoped>
.arrow-blue {
  &::v-deep(path) {
    stroke: #4747ff;
  }
}

.section-landing {
  @include relative;
  @include flex();
  height: 780px;
  padding: 80px 0px 0px;

  @include en-mobile {
    height: 730px;
  }

  .section-inner {
    z-index: 2;
    padding: 0px 100px;
    height: 100%;

    @include en-tablet {
      padding: 0px 40px;
      width: 100% !important;
      max-width: 840px;
    }
    @include en-mobile {
      padding: 0px 20px;
      height: calc(100vh - 20px) !important;
    }
  }

  .content-wrapper {
    @include flex();
    @include relative();
    width: 100%;
    flex-wrap: nowrap;

    .content-title-wrapper {
      @include vertical-center();
      width: auto;
      max-width: 540px;
      z-index: 1;

      @include en-tablet {
        width: 760px;
        background: linear-gradient(
          90deg,
          #ffffff 60%,
          #ffffff 70%,
          rgba(255, 255, 255, 0) 100%
        );
        mix-blend-mode: normal;
      }

      @include en-mobile {
        margin: 0px auto 0px;
        align-items: center;
        background: linear-gradient(
          0deg,
          #ffffff 0%,
          #ffffff 8%,
          rgba(255, 255, 255, 0) 100%
        );
        mix-blend-mode: normal;
      }
    }
    .content-image-wrapper {
      @include absolute(top -40px right 0px);
      width: 400px;
      img {
        width: 400px;
      }

      @include en-mobile {
        @include absolute(top 50% right 50%);
        width: 250px;

        transform: translate(50%, 0%);
        img {
          width: 250px;
        }
      }
    }
  }

  .landing-background-wave {
    width: 100%;
    @include absolute(left 0 top 50%);
    z-index: 1;
    img {
      width: 100%;
      transform: translateY(-25%);
      opacity: 0.5;
      filter: grayscale(100%);
    }
  }
  .landing-contents {
    @include relative;
    @include vertical-center;
    z-index: 2;
    flex: 1;

    .content-heading {
      margin-bottom: 28px;
      letter-spacing: -0.2px;
      color: $text-darken;
      text-align: left;

      p:not(:first-child) {
        display: inline-block;
      }

      @include en-tablet {
        max-width: 600px;
      }
      @include en-mobile {
        max-width: 300px;
        margin: 0px auto 20px;
        text-align: center;
      }
      p {
        @include en-desktop {
          @include medium(52);
          strong {
            @include bold(52);
          }
        }

        @include en-tablet {
          @include medium(45);
          margin: auto;
          line-height: 54px;

          strong {
            @include bold(45);
            line-height: 54px;
          }
        }

        @include en-mobile {
          @include medium(29);
          text-align: center;
          line-height: 40px;
          strong {
            @include bold(29);
            line-height: 40px;
          }
        }
      }
      p span {
        color: #cbd0fe;
      }
    }
    .content-phrase {
      color: $text-darken;
      margin-bottom: 60px;
      max-width: 564px;
      text-align: left;

      p {
        @include regular(23);
        line-height: 36px;
        display: inline-block;
      }

      strong {
        font-weight: 600;
      }

      @include en-tablet {
        max-width: 480px;
        margin: 0px;
        margin-bottom: 46px;
        p {
          @include regular(20);
          line-height: 30px;
          width: auto;
        }
      }

      @include en-mobile {
        max-width: 300px;
        margin: 0px;
        margin-bottom: 20px;
        text-align: center;
        p {
          @include regular(16);
          line-height: 25px;
        }
      }
    }

    .content-button {
      @include bold(18);
      width: 240px;
      height: 60px;
      margin-top: 30px;
      background-color: $navigation;
      color: $white;
      border-radius: 10px;
      letter-spacing: 0.1em;
      transition: all ease-in-out 0.3s;
      margin: 0px !important;
      background: $navigation;

      &:hover {
        @include elevation-3;
        color: rgba($white, 0.8);
        transform: translateY(-3px);
      }

      @include en-tablet {
        margin: 0px auto;
      }

      @include en-mobile {
        margin: 200px 0px 0px !important;
      }
    }
  }
}

.section-app-contents {
  @include vertical-center();
  margin: 148px auto 0px;
  @include en-desktop {
    max-width: 1022px;
  }

  @include en-tablet {
    padding: 0px 56px;
  }

  @include en-mobile {
    padding: 0px 24px;
  }

  .content-text-wrapper {
    @include flex($justify: space-between);
    @include en-desktop {
      padding: 0px;
    }

    @include en-tablet {
      @include vertical-center();
      // padding-left: 4.7%;
    }

    @include en-mobile {
      @include vertical-center();
      padding-left: 4.7%;
    }

    a {
      @include flex();
      @include semi-bold(23);
      color: $navigation;
      align-items: center;
      margin-top: 28px;

      i {
        @include medium(18);
        margin-left: 8px;
      }

      @include en-tablet {
        @include semi-bold(21);
        line-height: 27px;
        margin-top: 30px;
      }

      @include en-mobile {
        @include semi-bold(14);
        line-height: 18px;
        margin-top: 16px;
      }
    }

    .title-wrapper {
      @include vertical-center();
      justify-content: flex-start;
      .title {
        @include medium(40);
        margin: 0px;

        @include en-tablet {
          @include medium(37);

          margin: 0px 0px 32px 0px;
        }

        @include en-mobile {
          @include medium(24);
          max-width: 282px;
          margin: 0px 0px 18px 0px;
        }
      }
    }

    .text-desc {
      @include regular(19);
      max-width: 400px;
      color: $text-darken-8;
      p {
        &:not(:last-child) {
          margin-bottom: 18px;
        }
      }

      @include en-desktop {
        margin-top: 58px;

        p {
          &:not(:last-child) {
            margin-bottom: 28px;
          }
        }
      }

      @include en-tablet {
        max-width: 694px;
      }

      @include en-mobile {
        @include regular(15);
        max-width: 434px;
        line-height: 23px;
      }
    }

    .text-desc-list {
      @include vertical-center();
      @include regular(19);
      color: $text-darken;

      .list {
        @include flex();
        margin-bottom: 18px;
        flex-wrap: nowrap;
      }

      .circle {
        @include center-center();
        @include bold(13);
        width: 24px;
        height: 24px;
        color: #7676f3;
        background-color: #eeedff;
        border-radius: 50%;
        margin: 4px 16px 0px 0px;
        padding-top: 2px;
      }

      .guide-wrapper {
        @include vertical-center();
      }

      .guide {
        @include regular(15);
        color: $text-darken-5;
      }

      @include en-mobile {
        @include regular(15);
        line-height: 23px;

        .list {
          margin-bottom: 12px;
        }

        .circle {
          @include semi-bold(10);
          width: 16px;
          height: 16px;
          margin: 4px 8px 0px 0px;
        }

        .guide {
          @include regular(13);
          line-height: 19px;
        }
      }
    }
  }

  .content-image-wrapper {
    @include elevation-5;
    max-width: 100%;
    margin-top: 34px;
    border-radius: 10px;
    overflow-y: hidden;

    video {
      display: block;
      width: 100%;
      border-radius: 10px;
    }
  }
}

.section-partners {
  @include center-center();
  @include relative;
  background: #f9f9ff;
  height: 300px;
  overflow: hidden;

  @include en-tablet {
    height: 250px;
  }

  @include en-mobile {
    height: 220px;
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
      margin: auto;
      .partners-item {
        width: auto;
        max-width: 200px;
      }
    }

    @include en-mobile {
      max-width: 300px;
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

  .background-map {
    @include absolute(top 0px left 0px);
    width: 100%;
    height: 300px;
    object-fit: contain;
    background-image: url('/en/img/landing_map.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @include en-mobile {
      height: 230px;
    }
  }
}

.section-medium-banner {
  @include relative();
  @include vertical-center();
  width: 100%;
  height: auto;
  align-items: center;
  padding: 175px 0px;
  z-index: 1;

  @include en-tablet {
    padding: 150px 0px;
  }

  @include en-mobile {
    padding: 150px 0px 80px;
  }

  .background-wave {
    @include absolute(top 0px left 0px);
    width: 100%;
    height: 600px;
    background-image: url('/en/img/about_background.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: top;

    @include en-tablet {
      top: 100px;
      height: 400px;
    }

    @include en-mobile {
      top: 160px;
      height: 260px;
    }
  }

  .banner-text-wrapper {
    @include regular(26);
    text-align: center;
    z-index: 1;

    @include en-desktop {
      max-width: 900px;
    }

    .blue {
      @include semi-bold(26);
      color: $navigation;
    }
    strong {
      @include semi-bold(26);
    }

    &.large {
      p:last-child {
        margin-top: 28px;
      }
      line-height: 20px;
      span {
        @include medium(33);
      }
      strong {
        @include semi-bold(33);
      }

      img {
        margin: 0px 8px -8px;
      }
    }

    @include en-tablet {
      max-width: 610px;

      p {
        &:nth-child(2) {
          margin-top: 28px;
        }
      }
    }

    @include en-mobile {
      @include regular(21);
      max-width: 300px;

      .blue {
        @include semi-bold(21);
      }
      strong {
        @include semi-bold(21);
      }

      p {
        &:nth-child(2) {
          margin-top: 24px;
        }
      }

      &.large {
        max-width: 320px;

        img {
          display: block;
          width: 148px;
          margin: 12px auto 6px;
        }

        p:last-child {
          margin-top: 12px;
        }
        span {
          @include medium(18);
        }

        strong {
          @include semi-bold(18);
        }
      }
    }
  }
  .start-button {
    @include bold(18);
    width: 260px;
    height: 60px;
    margin-top: 40px;
    background-color: $navigation;
    color: $white;
    border-radius: 10px;
    letter-spacing: 0.1em;
    transition: all ease-in-out 0.2s;
    z-index: 1;

    a {
      @include center-center();
      width: 100%;
      height: 100%;
      vertical-align: center;
      text-align: center;
    }

    &:hover {
      @include elevation-3;
      color: rgba($white, 0.6);
      transform: translateY(-2px);
    }

    &:active {
      @include elevation-3;
      color: rgba($white, 0.6);
      transform: translateY(-2px);
    }

    @include en-mobile {
      margin-top: 120px;
    }
  }
}

.section-big-banner {
  @include flex();
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  margin: 0px auto;
  padding: 100px 140px;
  background: linear-gradient(0deg, #7471ff 0%, #5f94ff 100%);
  opacity: 0.9;

  @include en-tablet {
    padding: 110px 0px;
  }

  @include en-mobile {
    padding: 90px 0px;
  }

  .banner-item-wrapper {
    @include flex();
    flex-wrap: nowrap;

    @include en-tablet {
      @include vertical-center();
    }

    @include en-mobile {
      @include vertical-center();
    }

    .banner-item-divider {
      width: 39px;
      height: 2px;
      background-color: $white;
      margin: 60px auto;

      @include en-mobile {
        width: 26px;
        height: 1px;
        margin: 50px auto;
      }
    }

    .banner-item {
      @include vertical-center();
      justify-content: flex-start;
      align-items: center;

      @include en-tablet {
        align-items: center;
      }

      @include en-mobile {
        align-items: center;
        text-align: center;
      }

      .title {
        @include semi-bold(33);
        color: $white;
        margin: 0px;

        @include en-mobile {
          @include semi-bold(24);
        }
      }
      .profit-wrapper {
        @include flex();
        flex-wrap: nowrap;
        align-items: center;
        color: $white;
        margin-bottom: 26px;

        @include en-mobile {
          margin-bottom: 12px;
        }
      }

      .icon-wrapper {
        @include vertical-center();
        margin-right: 16px;
        align-items: center;
        height: 52px;
        justify-content: center;

        @include en-mobile {
          margin-right: 8px;
        }

        i {
          @include medium(48);

          &.big {
            @include medium(48);
            height: 40px;
            margin-top: 24px;
            transform: rotate(-130deg);
          }

          @include en-mobile {
            @include medium(36);

            &.big {
              @include medium(36);
              height: 34px;
              margin-top: 24px;
            }
          }
        }
      }

      .profit {
        padding-top: 5px;
        .number {
          @include semi-bold(64);
        }
        .unit {
          @include semi-bold(48);
          margin-left: 6px;
        }

        @include en-mobile {
          .number {
            @include semi-bold(52);
          }
          .unit {
            @include semi-bold(30);
            margin-left: 4px;
          }
        }
      }

      .item-desc {
        @include medium(20);
        color: $white;
        line-height: 30px;
        text-align: center;

        strong {
          font-weight: 600;
        }

        .list {
          @include flex();
          @include regular(20);
          align-items: center;
          margin-bottom: 8px;

          i {
            margin-right: 8px;
          }
        }

        .desc-title {
          @include medium(21);
          margin-bottom: 4px;
        }

        @include en-mobile {
          @include medium(15);
          line-height: 23px;

          .desc-title {
            @include medium(15);
          }

          .list {
            @include regular(15);
            margin-bottom: 0px;

            i {
              @include regular(18);
              line-height: 22px;
            }
          }
        }
      }

      @include en-desktop {
        &:first-child {
          margin-right: 120px;
        }
      }

      @include en-tablet {
        &:first-child .item-desc {
          text-align: center;
        }
      }
    }
  }
}

.zenerate-launch-wrapper {
  @include vertical-center();
  background-color: #f8f8ff;
  border-radius: 20px;
  padding: 58px 60px 46px;
  max-width: 980px;
  margin: 0px auto 123px;

  @include en-tablet {
    width: 628px;
    padding: 69px 47px 45px;
    margin: 0px auto 133px;
  }

  @include en-mobile {
    width: 90%;
    padding: 38px 20px 20px;
    margin: 0px auto 43px;
  }

  .zenerate-launch-info-wrapper {
    @include flex($justify: space-between);
    flex-wrap: nowrap;
    margin-bottom: 50px;

    @include en-tablet {
      flex-direction: column;
      align-items: center;
      margin-bottom: 50px;
    }

    @include en-mobile {
      flex-direction: column;
      margin-bottom: 24px;
    }

    .zenerate-launch-title-wrapper {
      @include en-mobile {
        margin: 0px auto;
      }
      .title {
        @include semi-bold(30);
        color: $text-darken;

        strong {
          color: $navigation;
        }

        @include en-tablet {
          @include semi-bold(27);
          text-align: center;
        }

        @include en-mobile {
          @include semi-bold(23);
          max-width: 310px;
          text-align: left;
          line-height: 28px;
          margin-bottom: 10px;
          strong {
            @include semi-bold(23);
            line-height: 28px;
          }
        }
      }

      .subtitle {
        @include medium(19);
        color: $text-darken-8;
        margin-bottom: 40px;
        max-width: 326px;

        @include en-tablet {
          text-align: center;
          max-width: 500px;
          margin-bottom: 50px;
        }

        @include en-mobile {
          @include medium(15);
          text-align: left;
          margin-bottom: 30px;
          max-width: 297px;
          line-height: 20px;
        }
      }
    }

    .map-wrapper {
      width: 368px;
      height: 239px;
      margin: 0px auto;

      img {
        width: 368px;
        height: 239px;
        object-fit: cover;
      }

      @include en-mobile {
        text-align: center;
        width: 100%;
        max-width: 310px;
        height: auto;

        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }

  .zenerate-launch-desc-wrapper {
    @include medium(20);
    background-color: rgba($white, 0.7);
    border-radius: 20px;
    min-height: 106px;
    padding: 20px 58px;
    color: $text-darken-8;
    text-align: center;

    .zenerate-launch-desc {
      @include en-mobile {
        max-width: 305px;
        margin: 0px auto;
      }
    }

    .blue {
      font-weight: 600;
      color: $navigation;
      display: inline-block;
    }

    span {
      display: inline-block;
      width: auto;
    }

    @include en-tablet {
      @include medium(18);
      text-align: center;
      height: 135px;
      padding: 22px 32px;
    }

    @include en-mobile {
      @include medium(14);
      text-align: center;
      padding: 20px;
      text-align: left;
      line-height: 19px;
    }
  }
}
</style>
