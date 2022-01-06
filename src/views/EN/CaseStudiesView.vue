<template>
  <section id="fullpage-case-studies">
    <div class="section section-case-studies">
      <div class="section-inner inner-case-studies">
        <div class="case-studies-wrapper">
          <div class="title-wrapper">
            <h2>Case Studies</h2>
            <div class="divider"></div>
            <h5 class="hidden-mobile">
              Zenerate's AI solution examines
              <span
                ><strong>the profitability</strong> of real estate
                projects</span
              >
            </h5>
            <h5 class="hidden-desktop hidden-tablet">
              Zenerate's AI solution examines
              <strong>the profitability</strong> of real estate projects
            </h5>
          </div>

          <div class="case-wrapper">
            <div
              class="case"
              data-aos="fade-up"
              data-aos-offset="-1500"
              data-aos-delay="300"
              data-aos-duration="600"
              data-aos-anchor-placement="top-bottom"
            >
              <img src="/en/case_study_highrise.gif" />

              <div class="text-wrapper">
                <p class="text-title">High-rise Residential Condominium</p>
                <p class="text-content">
                  Read Zenerate’s case study project about high-rise residential
                  condominium in Seoul to learn more about our surprising
                  insights!
                </p>
                <a
                  class="download"
                  download="Case_Study_Zenerate"
                  href="/en/file/case_studies_zenerate.pdf"
                  target="_blank"
                  >Download PDF <i class="material-icons"> east </i></a
                >
              </div>
            </div>
            <div
              class="case"
              data-aos="fade-up"
              data-aos-offset="-1500"
              data-aos-delay="500"
              data-aos-duration="600"
              data-aos-anchor-placement="top-bottom"
            >
              <img
                data-src="/en/img/service_why2.jpg"
                src="/en/img/service_why2.jpg"
                alt="USC Village Residential Project"
              />
              <div class="text-wrapper">
                <p class="text-title">USC Village Residential Project</p>
                <p class="text-content">
                  Read to learn how CEO Benji Shin<br />
                  collaborated with the USC housing team to transform and
                  streamline the architectural design process.
                </p>
                <a
                  class="download"
                  href="http://read.nxtbook.com/acuho/talking_stick/july_august_2019/news_and_notes.html"
                  target="_blank"
                  >Read this Article <i class="material-icons"> east </i></a
                >
              </div>
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
import AOS from 'aos'
import Footer from '/Components/EN/Footer.vue'
import Arrow from '/Components/EN/Arrow.vue'

const fullpage = computed(() => Store.state.root.FullPage)
onMounted(() => {
  fullpage.value.destroy()
  // setTimeout(() => {
  //   document
  //     .querySelectorAll('.fp-table.active .aos-init')
  //     .forEach((doc: HTMLElement) => {
  //       doc.classList.add('aos-animate')
  //     })
  // }, 0)
})

import { useMeta } from 'vue-meta'
const { meta } = useMeta({
  title: 'Case Studies | Zenerate',
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
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai/case-studies' }],
  og: {
    url: 'https://www.zenerate.ai/case-studies',
    type: 'website',
    title: 'Case Studies | Zenerate',
    description: `Zenerate provides a web platform for real-time feasibility studies and consulting services for more customized results. `,
    tags: 'zenerate',
    keywords: 'zenerate',
    image: 'https://www.zenerate.ai/img/logo_og.png',
  },
  twitter: {
    title: 'Case Studies | Zenerate',
  },
})
</script>
<style lang="scss" scoped>
.section-case-studies {
  @include relative;
  width: 100%;
  height: 100%;
  background-image: url('/en/img/background_wave.png');
  background-size: cover;
  background-repeat: no-repeat;

  .inner-case-studies {
    @include flex($dir: column);
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 160px 0px;

    @include en-tablet {
      padding: 132px 0px;
    }
    @include en-mobile {
      padding: 98px 0px;
    }

    .case-studies-wrapper {
      @include flex($justify: space-around);
      flex-direction: column;
      margin: 0px auto;
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

        @include en-tablet {
          width: 440px;
        }
        @include en-mobile {
          @include regular(14);
          width: 173px;
          text-align: center;
        }
      }
    }

    .case-wrapper {
      @include flex($justify: space-around);
      width: 100%;
      height: 100%;
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
        padding: 0px 16px;
      }

      .case {
        @include relative();
        @include vertical-center();
        justify-content: flex-start;
        align-items: center;
        width: 540px;
        height: 600px;
        border-radius: 20px;
        background-color: white;
        box-shadow: 10px 30px 60px rgba(211, 210, 242, 0.4);

        img {
          width: 100%;
          height: 360px;
          object-fit: cover;
          object-position: top;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
        }

        video {
          width: 100%;
          height: 360px;
          object-fit: cover;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          pointer-events: none;
        }

        video::-webkit-media-controls-start-playback-button {
          display: none;
        }

        &:last-child {
          margin-left: 68px;
        }

        @include en-tablet {
          &:last-child {
            margin-top: 60px;
            margin-left: 0px;
          }
        }

        @include en-mobile {
          max-width: 280px;
          height: 100%;

          &:last-child {
            margin-top: 32px;
            margin-left: 0px;
          }

          img {
            width: 100%;
            height: 212px;
            object-fit: cover;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
          }

          video {
            width: 100%;
            height: 212px;
            object-fit: cover;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
          }
        }

        &:first-child {
          .text-wrapper {
            padding: 30px 140px 30px 40px;

            @include en-mobile {
              padding: 28px 20px;

              .text-title {
                word-break: break-all;
                max-width: 223px;
                height: 28px;
                overflow-x: hidden;
                overflow-y: hidden;
              }
            }
          }
        }
        .text-wrapper {
          width: 100%;
          padding: 30px 70px 30px 40px;

          @include en-mobile {
            padding: 28px 20px;
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
            line-height: 21.2px;

            @include en-mobile {
              @include regular(14);
              margin-bottom: 16px;
              line-height: 17.5px;
              width: 240px;
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
