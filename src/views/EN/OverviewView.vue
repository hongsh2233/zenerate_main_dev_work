<template>
  <section id="fullpage-overview">
    <div class="section section-case-studies">
      <div class="section-inner inner-case-studies">
        <div class="case-studies-wrapper">
          <div class="title-wrapper">
            <h2 class="title">Zenerate Product Overview</h2>
            <p class="maincopy">
              You’ll never want to start a project<br />
              without <strong>Zenerate</strong> again.
            </p>

            <div class="divider"></div>
          </div>

          <div class="case-wrapper">
            <div class="case">
              <div class="case-title-wrapper">
                <p class="text-title">
                  <span class="step">01.</span>
                  Site Search
                </p>
                <p class="text-content hidden-en-mobile">
                  Scouting sites for your next development project?
                </p>
                <p class="text-content hidden-en-desktop hidden-en-tablet">
                  Scouting sites for your next<br />
                  development project?
                </p>
              </div>
              <div class="video-wrapper">
                <img src="/en/img/landing_engine.gif" alt="" />
              </div>
              <div class="text-wrapper">
                <p class="text-title">
                  <span class="step">Step 1.</span>
                  Welcome To Zenerate!
                </p>
                <p class="text-content">
                  Based on one of the hottest sites in L.A. we zenerated over
                  10,000 designs and applied a CPIO sub-area bonus to optimize
                  project financing. Within the report you will see our
                  suggested top three solutions based on different unit mixes.
                </p>
              </div>
            </div>
            <div class="case">
              <div class="case-title-wrapper">
                <p class="text-title">
                  <span class="step">02.</span>
                  Volume Study
                </p>
                <p class="text-content">
                  <span>The quickest and most accurate&nbsp;</span>
                  <span>back-of-the-envelope&nbsp;</span>
                  <span> calculation&nbsp;</span
                  ><span>tool you'll ever use.</span>
                </p>
              </div>
              <div class="video-wrapper">
                <img src="/en/img/landing_engine.gif" alt="" />
              </div>
              <div class="text-wrapper">
                <p class="text-title">
                  <span class="step">Step 2.</span>
                  Site Search
                </p>
                <p class="text-content">
                  Read Zenerate’s case study project about high-rise residential
                  condominium in Seoul to learn more about our surprising
                  insights!
                </p>
              </div>
            </div>
            <div class="case">
              <div class="case-title-wrapper">
                <p class="text-title">
                  <span class="step">03.</span>
                  Deep Search
                </p>
                <p class="text-content">
                  <span>The ultimate feasibility tool to fully&nbsp;</span>
                  <span>understand&nbsp;</span>
                  <span>value-add&nbsp;</span>
                  <span>and highest & best use of the site.</span>
                </p>
              </div>
              <div class="video-wrapper">
                <img src="/en/img/landing_engine.gif" alt="" />
              </div>
              <div class="text-wrapper">
                <p class="text-title">
                  <span class="step">Step 3.</span>
                  Volume Study
                </p>
                <p class="text-content">
                  Read to learn how CEO Benji Shin<br />
                  collaborated with the USC housing team to transform and
                  streamline the architectural design process.
                </p>
              </div>
            </div>
            <div class="case">
              <div class="case-title-wrapper">
                <p class="text-title">
                  <span class="step">04.</span>
                  In-Depth Zoning Analysis
                </p>
                <p class="text-content">
                  <span>No need to go through countless&nbsp;</span>
                  <span>hours of zoning&nbsp;</span>
                  <span>information. &nbsp;</span>
                  <span>We have it all available for you.</span>
                </p>
              </div>
              <div class="video-wrapper">
                <img src="/en/img/landing_engine.gif" alt="" />
              </div>
              <div class="text-wrapper">
                <p class="text-title">
                  <span class="step">Step 4.</span>
                  Deep Search
                </p>
                <p class="text-content">
                  Read to learn how CEO Benji Shin<br />
                  collaborated with the USC housing team to transform and
                  streamline the architectural design process.
                </p>
              </div>
            </div>

            <button type="button" class="start-button">START ZENERATING</button>
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
import { onMounted, onBeforeUnmount, computed, ref } from 'vue'
import Store from '/Store/index'
import { useRouter } from 'vue-router'
import { PRICE_PLAN_CONTENT, CONSULT_PLAN_CONTENT } from '/Constants/pricePlan'
import Footer from '/Components/EN/Footer.vue'
import AOS from 'aos'
import { useMeta } from 'vue-meta'

// const fullpage = computed(() => Store.state.root.FullPage)
// const router = useRouter()
// onMounted(() => {
//   fullpage.value.destroy()
//   // fullpage.value.init('#fullpage-pricing', {
//   //   parallax: false,
//   //   offsetSections: false,
//   //   navigation: false,
//   // })
// })
</script>
<style lang="scss" scoped>
.section-case-studies {
  @include relative;
  width: 100%;
  height: 100%;

  @include en-desktop {
    background-image: url('/en/img/background_wave.png');
    background-size: contain;
    background-repeat: no-repeat;
  }

  .inner-case-studies {
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

    .case-studies-wrapper {
      @include vertical-center();
      margin: 0px auto;
      align-items: center;
    }

    .title-wrapper {
      @include flex($dir: column);
      align-items: center;
      margin-bottom: 95px;

      @include en-tablet {
        align-items: flex-start;
        padding: 0px 10%;
        margin-bottom: 88px;
      }

      @include en-mobile {
        align-items: flex-start;
        width: 100%;
        padding: 0px 10%;
        margin-bottom: 39px;
      }

      .title {
        @include semi-bold(21);
        color: $text-darken;
        margin: 0px;
        @include en-tablet {
          width: 640px;
        }
        @include en-mobile {
          @include semi-bold(13);
          width: 260px;
        }
      }

      .maincopy {
        @include semi-bold(27);
        color: $text-darken;
        margin: 26px 0px 0px;
        text-align: center;

        @include en-tablet {
          width: 640px;
          margin: 18px 0px 0px;
          text-align: left;
        }
        @include en-mobile {
          @include semi-bold(15);
          margin: 8px 0px 0px;
          width: 300px;
          text-align: left;
        }
      }

      .subcopy {
        @include medium(19);
        color: $text-darken;
        text-align: center;
        margin-top: 18px;

        @include en-tablet {
          text-align: left;
          width: 640px;
        }

        @include en-mobile {
          @include medium(12);
          text-align: left;
          width: 260px;
        }
      }

      strong {
        font-weight: 600;
        color: $navigation;
      }

      .divider {
        width: 56px;
        height: 2px;
        border-radius: 5px;
        margin: 52px 0px 0px;
        background-color: $text-darken;

        @include en-mobile {
          width: 38px;
          height: 1px;
        }
      }
    }

    .case-wrapper {
      @include vertical-center;
      position: relative;
      align-items: center;
      width: 100%;
      height: 100%;
      margin: 0px auto;
      padding: 0px 40px;

      @include en-tablet {
        padding: 0px 20px;
      }

      @include en-mobile {
        padding: 0px;
      }

      .case {
        @include relative();
        @include vertical-center();
        justify-content: flex-start;
        align-items: center;
        width: 980px;
        height: auto;
        border-radius: 20px;
        margin-bottom: 157px;
        margin-top: 140px;
        background-color: white;
        box-shadow: 10px 30px 60px rgba(211, 210, 242, 0.4);

        @include en-tablet {
          width: 628px;
          height: auto;
          margin-bottom: 116px;
        }

        @include en-mobile {
          margin-top: 0px;
          width: 100%;
          height: auto;
          border-radius: 0px;
          margin-top: 100px;
          margin-bottom: 50px;
          box-shadow: none;
        }

        .case-title-wrapper {
          @include absolute(top -160px left 0px);
          @include vertical-center();
          justify-content: flex-end;
          width: 100%;
          padding: 0px;
          height: 138px;

          @include en-tablet {
            height: 116px;
          }

          @include en-mobile {
            @include absolute(top -100px left 0px);
            padding: 0px 6%;
            height: 91px;
          }
          .text-title {
            @include semi-bold(44);
            color: $text-darken;
            margin-bottom: 2px;

            .step {
              @include medium(42);
              color: $navigation;
            }

            @include en-tablet {
              @include semi-bold(38);

              .step {
                @include medium(36);
              }
            }

            @include en-mobile {
              @include semi-bold(21);
              margin-bottom: 6px;

              .step {
                @include medium(21);
              }
            }
          }
          .text-content {
            @include medium(24);
            color: $text-darken;

            @include en-tablet {
              @include medium(20);
            }

            @include en-mobile {
              @include medium(14);
            }
          }
        }

        .video-wrapper {
          img {
            width: 980px;
            height: 552px;
            object-fit: cover;
            pointer-events: none;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;

            @include en-tablet {
              width: 628px;
              height: 354hpx;
            }

            @include en-mobile {
              border-top-left-radius: 0px;
              border-top-right-radius: 0px;
              width: 100vw;
              height: 54vw;
            }
          }

          video::-webkit-media-controls-start-playback-button {
            display: none;
          }
        }

        .text-wrapper {
          width: 100%;
          padding: 42px 52px 55px;

          @include en-tablet {
            padding: 35px 44px 54px;
          }

          @include en-mobile {
            padding: 32px 30px 35px;
          }
          .text-title {
            @include semi-bold(26);
            color: $text-darken;
            margin-bottom: 10px;

            .step {
              @include semi-bold(22);
              color: $text-darken-5;
            }

            @include en-mobile {
              @include semi-bold(15);
              margin-bottom: 6px;

              .step {
                @include semi-bold(13);
              }
            }
          }
          .text-content {
            @include regular(15);
            line-height: 21px;

            @include en-mobile {
              @include regular(13);
              line-height: 18px;
            }

            a {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }

  .start-button {
    @include bold(18);
    width: 260px;
    height: 60px;
    margin-top: 110px;
    background-color: $navigation;
    color: $white;
    border-radius: 10px;
    letter-spacing: 0.1em;
    transition: all ease-in-out 0.2s;

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

    @include en-tablet {
      margin-top: 80px;
    }

    @include en-mobile {
      margin-top: 40px;
    }
  }
}
</style>
