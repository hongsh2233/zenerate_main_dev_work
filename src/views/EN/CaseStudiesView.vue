<template>
  <div id="fullpage-case-studies">
    <div class="section section-why fp-auto-height-responsive">
      <div class="why-hero-wrapper">
        <div class="why-image-wrapper">
          <div class="why-image image-case"></div>
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
            <img
              data-src="/en/img/service_why.png"
              src="/en/img/service_why.png"
              alt=""
            />
            <div class="why-content-text">
              <div class="text-title">USC Village Student Housing Project</div>
              <div class="text-content">
                <a
                  href="http://read.nxtbook.com/acuho/talking_stick/july_august_2019/news_and_notes.html"
                  target="_blank"
                  >Read</a
                >
                to learn how Zenerate CEO Bongjai Shin collaborated with the USC
                housing team to transform and streamline the architectural
                design process.
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
  fullpage.value.destroy()
  // fullpage.value.init('#fullpage-case-studies', {
  //   // parallax: false,
  //   offsetSections: false,
  //   // navigation: false,
  // })
})

import { useMeta } from 'vue-meta'
const { meta } = useMeta({
  title: 'Services | Zenerate',
  description:
    'Zenerate provides a web platform for real-time feasibility studies and consulting services for more customized results. ',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content:
        'Zenerate provides a web platform for real-time feasibility studies and consulting services for more customized results. ',
    },
  ],
  link: [{ rel: 'canonical', href: 'https://zenerate.ai/services' }],
  og: {
    url: 'https://zenerate.ai/services',
    type: 'website',
    title: 'Pricing | Zenerate',
    description: `Zenerate provides a web platform for real-time feasibility studies and consulting services for more customized results. `,
    tags: 'zenerate',
    keywords: 'zenerate',
    image: 'https://zenerate.ai/img/logo_og.png',
  },
  twitter: {
    title: 'Services | Zenerate',
  },
})
</script>
<style lang="scss" scoped>
#fullpage-case-studies {
  @include relative;
  width: 100%;
  height: 100%;
}
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
  margin-bottom: 0;
  .inner-technology {
    margin: auto 0px;
  }
  .technology-header {
    @include flex($dir: column, $justify: center);
    height: 220px;
    width: 100%;
    text-align: center;

    .header-title {
      @include bold(16);
      color: $main;
    }
    .header-content {
      @include regular(26);
    }
    @include en-tablet {
      width: 400px;
      height: 120px;
      margin: 0 auto;
    }
    @include en-mobile {
      height: auto;
    }
  }
  .technology-content {
    margin: 0px auto;
    // padding-top: 48px;
    .content-item {
      @include flex($justify: space-between);
      height: 108px;
      margin-bottom: 32px;
      .item-problem {
        padding: 0px 64px;
        width: 340px;
        height: 108px;
        border-radius: 30px;
        @include elevation-2;
        @include center-center;
        text-align: center;
        span {
          @include regular(18);
          color: $main-blue;
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
        background-color: $main-blue;
        text-align: center;
        span {
          @include regular(18);
          color: $white;
        }
      }
      @include en-mobile {
        padding-top: 32px;
        display: block;
        height: auto;
        margin: 0px auto;
        padding-bottom: 32px;

        .item-problem,
        .item-arrow,
        .item-solution {
          margin: 0px auto;
          padding: 0px 32px;
          max-width: 290px;
        }
        .item-arrow {
          margin-top: 32px;
          margin-bottom: 32px;
          transform: rotate(90deg) translateX(-16px);
        }
      }
      @include en-tablet {
        padding-top: 32px;
        display: block;
        height: auto;
        margin: 0px auto;
        padding-bottom: 32px;
        .item-problem,
        .item-arrow,
        .item-solution {
          margin: 0px auto;
          padding: 0px 32px;
          max-width: 320px;
        }
        .item-arrow {
          margin-top: 32px;
          margin-bottom: 32px;
          transform: rotate(90deg) translateX(-16px) scaleX(0.8);
        }
      }
    }
  }
}

.section-services {
  background: #fafafc;
  ::v-deep(.fp-bg) {
    background-color: #fafafc !important;
  }
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
          width: 440px;
          max-width: 100%;
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
      @include en-tablet {
        display: block;
        .service-content {
          margin: 0px auto;
          margin-bottom: 48px;
        }
      }
      @include en-mobile {
        display: block;
        .service-content {
          margin: 0px auto;
          margin-bottom: 48px;
          width: 100%;
        }
      }
    }
  }
}

.section-why {
  @include relative;
  .why-hero-wrapper {
    $y: calc(80px);
    @include absolute(left 0);
    top: $y;
    height: 250px;
    @include flex();
    width: 100%;
    .why-image-wrapper {
      flex: 1;
      height: 250px;
      width: 100%;
      @include absolute(left 0 top 0);
      background-size: cover;
      background-origin: center;
      height: 100%;
      @include flex;
      .why-image {
        &.image-case {
          height: 100%;
          flex: 1;
          background-image: url('/en/img/service_case.png');
          background-size: cover;
        }
      }
    }
    .why-text {
      @include container-no-top-padding;
      margin: 0px auto !important;
      margin-top: auto !important;
      margin-bottom: 40px !important;
      z-index: 1;
      .text-inner {
        padding: 0px 60px;
        p {
          color: $white;
          @include semi-bold(24);
        }

        @include en-mobile {
          padding: 10px 20px;
        }
      }
    }
  }
  .inner-why {
    height: 100%;
    padding-top: 330px !important;
    @include en-tablet {
      padding-top: 400px !important;
    }
    @include en-mobile {
      padding-top: 400px !important;
    }
  }
  .why-content-wrapper {
    margin: auto;
    padding: 0px 60px;
    @include en-tablet {
      width: 100%;
      padding: 0;
    }
    @include en-mobile {
      width: 100%;
      padding: 0;
    }
    .why-content {
      @include flex($justify: center);
      // padding-top: 60px;
      margin: auto;
      img {
        width: 400px;
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
          a {
            text-decoration: underline;
          }
        }
        @include en-tablet {
          margin: 0px auto;
        }
        @include en-mobile {
          margin: 0px auto;
          .text-title {
            @include medium(20);
            margin-bottom: 16px;
          }
          .text-content {
            @include regular(18);
          }
        }
      }
      @include en-tablet {
        padding: 0;
        display: block;
        text-align: center;
        img {
          margin-bottom: 48px;
          max-width: 100%;
        }
      }
      @include en-mobile {
        padding: 0;
        display: block;
        text-align: center;
        img {
          margin-bottom: 48px;
          max-width: 100%;
        }
      }
    }
  }
  @include en-tablet {
    padding-bottom: 80px;
  }
  @include en-mobile {
    padding-bottom: 40px;
  }
}
</style>
