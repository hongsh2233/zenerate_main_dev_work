<template>
  <div id="fullpage-landing">
    <div class="section section-landing">
      <div class="section-inner inner-landing">
        <div class="inner-contents landing-contents">
          <div class="content-wrapper">
            <div class="content-title-wrapper">
              <div class="content-heading">
                <p><strong>Feasibility studies,</strong></p>
                <p>now AI-powered.</p>
              </div>
              <div class="content-phrase">
                <p>Zenerate is an AI-powered&nbsp;</p>
                <p><strong>feasibility</strong>&nbsp;</p>
                <p><strong>study tool</strong>&nbsp;</p>
                <p>that boosts&nbsp;</p>
                <p><strong>real estate </strong></p>
                <p><strong>development</strong>&nbsp;</p>
                <p>profitability&nbsp;</p>
                <p class="blue"><strong>up to 26%</strong></p>
              </div>
              <div class="content-justyourcuriosity"></div>
              <div class="content-button" @click="goToApp()">
                <a href="https://app.zenerate.ai" target="_blank"
                  >TRY FOR FREE</a
                >
              </div>
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
            <strong>10,000</strong><br />
            <strong>feasibility solutions </strong><br />
            within minutes
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
            No more spending weeks and months<br />
            to come up with 3-5 feasible options <br />
            for development.
          </p>

          <p>
            Now, with the click of a button, you can<br />
            zenerate thousands of solutions with<br />
            architectural designs <br />
            and in-depth financial analysis.
          </p>
        </div>
        <div class="text-desc hidden-en-desktop hidden-en-mobile">
          <p>
            No more spending weeks and months to come up with 3-5 feasible
            options for development.
          </p>

          <p>
            Now, with the click of a button, you can zenerate thousands of
            solutions with architectural designs and in-depth financial
            analysis.
          </p>
        </div>

        <router-link
          :to="{ name: 'en-overview' }"
          class="link hidden-en-desktop"
          >Product Overview
          <i class="material-icons"> east </i>
        </router-link>
      </div>
      <div class="content-image-wrapper">
        <img src="/en/img/landing_solution.png" alt="solution" />
      </div>
    </div>

    <div class="section section-medium-banner">
      <div class="banner-text-wrapper">
        <p>
          Giving architects,
          <span class="blue">developers, brokers,&nbsp;</span>
          <span class="blue">financial institutions</span>
        </p>
        <p>
          <span>and anyone involved in&nbsp;</span><span>real estate&nbsp;</span
          ><span>development&nbsp;</span><span>with&nbsp;</span>
          <span>AI super powers to&nbsp;</span>
          <span
            ><strong>save weeks of time&nbsp;</strong>and
            <strong>zenerate more profit!&nbsp;</strong></span
          >
        </p>
      </div>
      <div class="start-button" @click="goToApp()">
        <a href="http://app.zenerate.ai">TRY FOR FREE</a>
      </div>
    </div>

    <div class="section section-big-banner">
      <div class="banner-item-wrapper">
        <div class="banner-item">
          <h4 class="title">Profit, maximized.</h4>
          <div class="profit-wrapper">
            <div class="icon-wrapper">
              <i class="material-icons-outlined">paid</i>
              <span>up to</span>
            </div>
            <div class="profit">
              <span class="number">26</span>
              <span class="unit">%</span>
            </div>
          </div>
          <div class="item-desc">
            <p>
              Users have experienced an average<br />
              of <strong>12% profit maximization</strong> compared to<br />
              their original feasibility plans which<br />
              took them weeks or months to create.
            </p>
          </div>
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
      <div class="content-image-wrapper">
        <img src="/en/img/landing_solution.png" alt="solution" />
      </div>
    </div>

    <div class="section section-medium-banner">
      <div class="banner-text-wrapper large">
        <p>
          <span> You’ll never want to start a project </span><br />
          <span> without </span>
          <img src="/img/logo_color.svg" alt="logo" />
          <span> again. </span>
        </p>
        <p>
          <span><strong>Try for free</strong> to see why.</span>
        </p>
      </div>
      <div class="start-button" @click="goToApp()">
        <a href="http://app.zenerate.ai">START ZENERATING</a>
      </div>
      <div class="background-wave"></div>
    </div>

    <div class="zenerate-launch-wrapper">
      <div class="zenerate-launch-info-wrapper">
        <div class="zenerate-launch-title-wrapper">
          <h2 class="title">
            Zenerate is only available <br />
            in <strong>Los Angeles</strong> for now.
          </h2>
          <p class="subtitle">
            <span> Our goal is to cover every inch of&nbsp;</span
            ><span>the U.S.&nbsp;</span>
            <span>But until then,&nbsp;</span>
            <span>here are our upcoming cities</span>
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
          <span>If you want to subscribe to our updates lists&nbsp;</span>

          <router-link :to="{ name: 'SignUp' }" class="blue"
            >click here.&nbsp;
          </router-link>
          <span> We’ll send you an update everytime&nbsp;</span>
          <span> we launch in a new city or district.</span>
        </p>

        <p class="zenerate-launch-desc hidden-en-desktop hidden-en-tablet">
          <span>If you want to subscribe to</span><br />
          <span>our updates list&nbsp;</span>
          <router-link :to="{ name: 'SignUp' }" class="blue"
            >click here.&nbsp;
          </router-link>
          <span> We’ll send you an update everytime&nbsp;</span><br />
          <span> we launch in a new city or district.</span>
        </p>
      </div>
    </div>
    <div class="section section-footer fp-auto-height">
      <Footer />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRouter } from 'vue-router'
import Footer from '/Components/EN/Footer.vue'
import Arrow from '/Components/EN/Arrow.vue'
import PartnersList from '/Constants/partners'
import APIService from '/Services/api'
import { useGtag } from 'vue-gtag-next'
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
  height: 800px;

  @include en-tablet {
    height: 660px;
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
      max-width: 500px;
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
        margin: 40px auto 0px;
        background: linear-gradient(
          0deg,
          #ffffff 0%,
          #ffffff 14%,
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
        @include absolute(top 42% right 50%);
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
        max-width: 360px;
        margin: 0px auto 20px;
      }
      p {
        @include en-desktop {
          @include regular(52);
          strong {
            @include bold(52);
          }
        }

        @include en-tablet {
          @include regular(49);
          margin: auto;

          strong {
            @include bold(49);
          }
        }

        @include en-mobile {
          @include regular(26);
          display: inline-block;
          text-align: center;
          strong {
            @include bold(26);
          }

          &:last-child {
            display: block;
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

        &.blue {
          color: $navigation;
        }
      }
      @include en-tablet {
        max-width: 390px;
        margin: 0px;
        margin-bottom: 40px;
        p {
          @include regular(20);
          line-height: 30px;
          width: auto;
        }
      }
      @include en-mobile {
        max-width: 250px;
        margin: 0px;
        margin-bottom: 20px;
        text-align: center;
        p {
          @include regular(14);
          line-height: 22px;
        }
      }
    }

    .content-button {
      margin: 0px !important;
      a {
        @include button-1;
        @include elevation-5;
        @include bold(18);
        letter-spacing: 0.12em;
        background: $navigation;
      }
      @include en-tablet {
        margin: 0px auto;
      }

      @include en-mobile {
        margin: 246px 0px 0px !important;
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
    padding: 0px 96px;
  }

  @include en-mobile {
    padding: 0px 24px;
  }

  .content-text-wrapper {
    @include flex($justify: space-between);
    @include en-desktop {
      padding: 0px 70px 0px 46px;
    }

    @include en-tablet {
      @include vertical-center();
      padding-left: 4.7%;
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
          @include medium(27);
          max-width: 282px;
          margin: 0px 0px 18px 0px;
        }
      }
    }

    .text-desc {
      @include regular(19);
      color: $text-darken-8;
      p {
        &:first-child {
          margin-bottom: 18px;
        }
      }

      @include en-desktop {
        margin-top: 58px;

        p {
          &:first-child {
            margin-bottom: 28px;
          }
        }
      }

      @include en-tablet {
        max-width: 694px;
      }

      @include en-mobile {
        @include regular(13);
        line-height: 18px;
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
        @include regular(13);

        .list {
          margin-bottom: 12px;
        }

        .circle {
          @include bold(9);
          width: 14px;
          height: 14px;
          margin: 6px 8px 0px 0px;
        }

        .guide {
          @include regular(10);
        }
      }
    }
  }

  .content-image-wrapper {
    max-width: 100%;
    margin-top: 34px;

    img {
      width: 100%;
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
    @include flex($justify: space-between);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    z-index: 1;
    gap: 10px 20px;

    .partners-item {
      @include center-center;
      @include relative;
      margin-bottom: 0px;
      width: 200px;
      height: 60px;
      max-width: 100%;
      margin: auto;

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
    margin-bottom: 40px;

    @include en-tablet {
      grid-template-columns: repeat(2, 1fr);
      margin: auto;
      .partners-item {
        width: auto;
        max-width: 200px;
      }

      @media (orientation: landscape) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @include en-mobile {
      max-width: 320px;
      grid-template-columns: repeat(2, 1fr);
      margin: 0 auto;

      .partners-item {
        width: auto;
        max-width: 200px;
        min-width: 140px;

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
    padding: 80px 0px;
  }

  .background-wave {
    @include absolute(top 0px left 0px);
    width: 100%;
    height: 600px;
    background-image: url('/en/img/about_background.png');
    background-size: contain;
    background-repeat: no-repeat;
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
          width: 110px;
          margin: 0px 6px -6px;
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
        justify-content: flex-end;

        @include en-mobile {
          margin-right: 8px;
        }

        i {
          @include medium(35);
          height: 40px;

          &.big {
            @include medium(48);
            transform: rotate(-130deg);
          }

          @include en-mobile {
            @include medium(30);
            height: 34px;
            &.big {
              @include medium(36);
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
        @include regular(20);
        color: $white;
        line-height: 26px;
        text-align: center;

        strong {
          font-weight: 600;
        }

        .list {
          @include flex();
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
          @include regular(13);
          line-height: 20px;

          .desc-title {
            @include medium(15);
          }

          .list {
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
          @include semi-bold(16);
          max-width: 240px;
          text-align: left;
          line-height: 20px;
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
          @include medium(11);
          text-align: left;
          margin-bottom: 30px;
          max-width: 240px;
          line-height: 14px;
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
        width: 200px;
        height: 130px;

        img {
          width: 200px;
          height: 130px;
        }
      }
    }
  }

  .zenerate-launch-desc-wrapper {
    @include medium(20);
    background-color: rgba($white, 0.7);
    border-radius: 20px;
    height: 106px;
    padding: 20px 58px;
    color: $text-darken-8;
    text-align: center;

    .zenerate-launch-desc {
      @include en-mobile {
        max-width: 238px;
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
      @include medium(10);
      text-align: center;
      height: 95px;
      padding: 20px;
      text-align: left;
      line-height: 14px;
    }
  }
}
</style>
