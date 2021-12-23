<template>
  <section id="fullpage-case-studies">
    <div class="section section-case-studies">
      <div class="section-inner inner-case-studies">
        <div class="title-wrapper">
          <h2>Case Studies</h2>
          <div class="divider"></div>
          <h5>
            Zenerate's AI solution examines
            <strong>the profitability</strong> of real estate projects
          </h5>
        </div>

        <div class="case-wrapper">
          <div class="case">
            <img
              data-src="/en/img/service_why.png"
              src="/en/img/service_why.png"
              alt="USC Village Residential Project"
            />
            <div class="text-wrapper">
              <div class="text-title">USC Village Residential Project</div>
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
              <a
                class="download"
                href="http://read.nxtbook.com/acuho/talking_stick/july_august_2019/news_and_notes.html"
                target="_blank"
                >Download PDF <i class="material-icons"> east </i></a
              >
            </div>
          </div>
          <div class="case">
            <img
              data-src="/en/img/service_why.png"
              src="/en/img/service_why.png"
              alt="USC Village Residential Project"
            />
            <div class="text-wrapper">
              <div class="text-title">USC Village Residential Project</div>
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
              <a
                class="download"
                href="http://read.nxtbook.com/acuho/talking_stick/july_august_2019/news_and_notes.html"
                target="_blank"
                >Download PDF <i class="material-icons"> east </i></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-footer fp-auto-height">
      <Footer></Footer>
    </div>
  </section>
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
.section-case-studies {
  @include relative;
  width: 100%;
  height: 100%;

  .inner-case-studies {
    @include flex($dir: column);
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 160px 0px;

    @include en-tablet {
      padding: 140px 0px;
    }
    @include en-mobile {
      padding: 100px 0px;
    }

    .title-wrapper {
      @include flex($dir: column);
      align-items: center;
      margin-bottom: 80px;

      @include en-tablet {
        max-width: 540px;
        margin-bottom: 60px;
        text-align: center;
      }

      @include en-mobile {
        max-width: 360px;
        margin-bottom: 32px;
        text-align: center;
      }

      h2 {
        @include bold(36);
        color: $text-darken;
        margin: 0px 0px 30px;
        @include en-mobile {
          @include bold(24);
        }
      }

      .divider {
        width: 56px;
        height: 2px;
        border-radius: 5px;
        margin: 0px 0px 40px;
        background-color: $text-darken;
      }

      h5 {
        @include regular(24);
        color: $text-darken;
        margin: 0px;
        @include en-mobile {
          @include regular(18);
          width: 222px;
          text-align: center;
        }
      }
    }

    .case-wrapper {
      @include flex($justify: space-around);
      height: 100%;
      width: 100%;
      position: relative;
      margin: 0px auto;

      @include en-tablet {
        flex-direction: column;
        align-items: center;
        padding: 0px 20px;
      }

      @include en-mobile {
        flex-direction: column;
        align-items: center;
        padding: 0px 20px;
      }

      .case {
        width: 100%;
        max-width: 540px;
        height: 520px;
        padding: 20px 10px 20px 20px;
        border-radius: 20px;
        background-color: white;
        box-shadow: 10px 30px 60px rgba(211, 210, 242, 0.4);

        img {
          width: 100%;
          height: 212px;
          object-fit: cover;
        }

        &:last-child {
          margin-top: 80px;
        }

        @include en-mobile {
          max-width: 360px;
          height: 100%;
          padding: 20px 10px;

          &:last-child {
            margin-top: 0px;
          }
        }

        .text-wrapper {
          padding: 36px 40px;

          @include en-mobile {
            padding: 28px 18px;
          }
          .text-title {
            @include semi-bold(21);
            color: $text-darken;
            margin-bottom: 28px;
            @include en-mobile {
              @include semi-bold(16);
              margin-bottom: 20px;
            }
          }
          .text-content {
            @include regular(17);
            margin-bottom: 24px;

            @include en-mobile {
              @include regular(14);
              margin-bottom: 16px;
            }

            a {
              text-decoration: underline;
            }
          }

          .download {
            @include medium(17);
            color: $main-core;

            i {
              @include medium(16);
              margin-left: 10px;
              line-height: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
