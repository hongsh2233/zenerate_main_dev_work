<template>
  <section class="section section-demo">
    <div class="section-inner inner-demo">
      <div class="demo-wrapper">
        <div class="title-wrapper">
          <p class="maincopy">
            Learn how <span class="blue">Zenerate</span> will
            <strong>maximize profit</strong>
          </p>
          <p class="subcopy">
            <span>while saving&nbsp;</span><span>thousands of man-hours</span>
          </p>
        </div>
      </div>
      <div class="calendly-wrapper">
        <div
          class="calendly-inline-widget"
          id="calendly"
          data-url="https://calendly.com/zenerate/30min?hide_gdpr_banner=1?month=2022-04"
          style="position: relative; min-width: 320px"
        ></div>
      </div>
      <i class="material-icons-outlined demo-icon">calendar_month </i>
      <button type="button" class="demo-button" @click="() => goCanlendly()">
        SIGN UP FOR A DEMO
      </button>

      <div class="banner-wrapper">
        <p class="banner-title">Can't find a time that works for you?</p>
        <p class="banner-text">
          <span>Reach out to us at&nbsp;</span>
          <span class="blue"
            ><a href="mailto:product@zenerate.ai">product@zenerate.ai</a>
            <router-link to="/contact"> (or click here)</router-link></span
          ><br />
          <span>and we'll try our best to fit into&nbsp;</span>
          <span>your busy schedule.</span>
        </p>
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

onMounted(() => {
  const head = document.querySelector('head')
  const script = document.createElement('script')
  script.setAttribute(
    'src',
    'https://assets.calendly.com/assets/external/widget.js'
  )
  head.appendChild(script)
})

const router = useRouter()
const toContactForm = () => {
  router.push({
    name: 'en-contact',
  })
}

const goCanlendly = () => {
  Calendly.initPopupWidget({
    url: 'https://calendly.com/zenerate/30min?hide_gdpr_banner=1?month=2022-04',
  })
  return false
}
</script>
<style lang="scss" scoped>
.calendly-wrapper {
  width: 100%;
  height: auto;

  @include en-tablet {
    display: none;
  }

  @include en-mobile {
    display: none;
  }

  #calendly {
    width: 100%;
    height: 796px;
    margin-bottom: 68px;

    @media only screen and (min-width: 1000px) and (max-width: 1199px) {
      height: 796px;
    }

    @media only screen and (min-width: 640px) and (max-width: 999px) {
      height: 1180px;
      margin-bottom: 60px;
    }
  }
}

.demo-icon {
  @include medium(96);
  margin-bottom: 28px;
  color: #000729;

  @include en-desktop {
    display: none;
  }
}

.demo-button {
  @include semi-bold(16);
  width: 260px;
  height: 60px;
  background-color: $navigation;
  color: $white;
  border-radius: 5px;
  line-height: 18px;
  letter-spacing: 1px;
  margin-bottom: 74px;

  @include en-desktop {
    display: none;
  }
}

.divider {
  width: 100%;
  height: 1px;
  background-color: $gray-100;

  &.last {
    margin-bottom: 60px;
  }
}

.section-demo {
  @include relative;
  width: 100%;
  height: 100%;

  .inner-demo {
    @include flex($dir: column);
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 160px 0px;
    background: linear-gradient(
      0deg,
      #ffffff 23.95%,
      rgba(255, 255, 255, 0.90625) 58.87%,
      rgba(255, 255, 255, 0) 100%
    );

    @include en-tablet {
      padding: 132px 0px;
    }
    @include en-mobile {
      padding: 98px 0px;
    }

    .demo-wrapper {
      @include vertical-center();
      margin: 0px auto;
      align-items: center;
    }

    .title-wrapper {
      @include flex($dir: column);
      align-items: center;
      margin-bottom: 12px;

      @include en-tablet {
        align-items: flex-start;
        padding: 0px 10%;
        margin-bottom: 24px;
      }

      @include en-mobile {
        align-items: flex-start;
        width: auto;
        padding: 0px 10%;
        margin-bottom: 48px;
      }

      .maincopy {
        @include semi-bold(30);
        color: $text-darken;
        margin: 26px 0px 0px;
        text-align: center;

        .blue {
          color: $navigation;
        }

        @include en-tablet {
          @include semi-bold(26);
          width: 640px;
          margin: 18px 0px 0px;
        }
        @include en-mobile {
          @include semi-bold(18);
          margin: 8px 0px 10px;
          width: 220px;
          line-height: 25px;
        }
      }

      .subcopy {
        @include medium(26);
        color: $text-darken;
        text-align: center;

        @include en-tablet {
          @include medium(22);
          width: 640px;
        }

        @include en-mobile {
          @include medium(16);
          width: 220px;
          line-height: 22px;
        }

        strong {
          font-weight: 600;
          color: $navigation;
        }
      }
    }
  }
}

.banner-wrapper {
  @include vertical-center();
  align-items: center;
  width: 100%;

  .banner-title {
    @include semi-bold(24);
    margin-bottom: 10px;
    text-align: center;
    line-height: 25px;

    @include en-tablet {
      @include semi-bold(20);
      line-height: 22px;
    }

    @include en-mobile {
      @include semi-bold(15);
      line-height: 17px;
    }
  }

  .banner-text {
    @include medium(18);
    text-align: center;
    line-height: 25px;

    .blue {
      color: $navigation;
    }

    @include en-tablet {
      @include medium(16);
      line-height: 22px;
    }

    @include en-mobile {
      @include medium(14);
      line-height: 18px;
      max-width: 260px;
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
      margin: auto;
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
</style>
