<template>
  <section id="fullpage-howtouse">
    <div class="section section-case-studies">
      <div class="section-inner inner-case-studies">
        <div class="case-studies-wrapper">
          <div class="title-wrapper">
            <h2 class="title">Quick Tutorials</h2>
            <p class="maincopy">
              <span>What's the point in having a tool&nbsp;</span>
              <span>that saves time if it's hard to use?&nbsp;</span><br />
              <span>That's why we made <strong>Zenerate</strong>&nbsp;</span>
              <span>SO easy to use.</span>
            </p>
            <p class="subcopy">
              View the tutorials below to get <strong>zenerating!</strong>
            </p>
            <div class="divider hidden-en-mobile"></div>
          </div>

          <div class="case-wrapper">
            <div class="case">
              <div class="video-wrapper">
                <iframe
                  width="580"
                  height="315"
                  src="https://www.youtube.com/embed/w3DQZLwO4h4?&rel=0&enablejsapi=1&origin=https://www.zenerate.ai"
                  title="Welcome Guide"
                  frameborder="0"
                  allow="accelerometer; autoplay;"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="text-wrapper">
                <p class="text-title">
                  <span class="step">Step 1.</span>
                  Welcome To Zenerate!
                </p>
                <p class="text-content">
                  <span>The first of a four part series.&nbsp;</span>
                  <span> In this tutorial&nbsp;</span>
                  <span>we cover&nbsp;</span>
                  <span> the main features of&nbsp;</span>
                  <span> Zenerate&nbsp;</span>
                  <span> and where to find them!</span>
                </p>
              </div>
            </div>
            <div class="case">
              <div class="video-wrapper">
                <iframe
                  type="text/html"
                  width="580"
                  height="315"
                  src="https://www.youtube.com/embed/hmESX7bTrXY?&rel=0&enablejsapi=1&origin=https://www.zenerate.ai"
                  title="Site Search Guide"
                  frameborder="0"
                  allow="accelerometer; autoplay; "
                  allowfullscreen
                ></iframe>
              </div>
              <div class="text-wrapper">
                <p class="text-title">
                  <span class="step">Step 2.</span>
                  Site Search
                </p>
                <p class="text-content">
                  <span>It's time to get Zenerating!&nbsp;</span>
                  <span> But first&nbsp;</span>
                  <span> you must&nbsp;</span>
                  <span> scout for&nbsp;</span>
                  <span> sites&nbsp;</span>
                  <span> and you can do&nbsp;</span>
                  <span> that&nbsp;</span>
                  <span> by using&nbsp;</span>
                  <span>the Site Search feature.</span>
                </p>
              </div>
            </div>
            <div class="case">
              <div class="video-wrapper">
                <iframe
                  type="text/html"
                  width="580"
                  height="315"
                  src="https://www.youtube.com/embed/rc3n5uKjNaU?&rel=0&enablejsapi=1&origin=https://www.zenerate.ai"
                  title="Volume Study Guide"
                  frameborder="0"
                  allow="accelerometer; autoplay; "
                  allowfullscreen
                ></iframe>
              </div>
              <div class="text-wrapper">
                <p class="text-title">
                  <span class="step">Step 3.</span>
                  Volume Study
                </p>
                <p class="text-content">
                  <span>Before digging&nbsp;</span>
                  <span> too deep&nbsp;</span>
                  <span> into a certain site,&nbsp;</span>
                  <span> it's best&nbsp;</span>
                  <span> to perform&nbsp;</span>
                  <span> a back of&nbsp;</span>
                  <span> the envelope&nbsp;</span>
                  <span> type&nbsp;</span>
                  <span> calculation.</span>
                </p>
              </div>
            </div>
            <div class="case">
              <div class="video-wrapper">
                <iframe
                  type="text/html"
                  width="580"
                  height="315"
                  src="https://www.youtube.com/embed/_qYg-q6tN78?&rel=0&enablejsapi=1&origin=https://www.zenerate.ai"
                  title="Deep Search Guide"
                  frameborder="0"
                  allow="accelerometer; autoplay; "
                  allowfullscreen
                ></iframe>
              </div>
              <div class="text-wrapper">
                <p class="text-title">
                  <span class="step">Step 4.</span>
                  Deep Search
                </p>
                <p class="text-content">
                  <span>The flagship feature&nbsp;</span>
                  <span> of Zenerate.&nbsp;</span>
                  <span> Once you use it,&nbsp;</span>
                  <span> you'll never think&nbsp;</span>
                  <span>about&nbsp;</span>
                  <span> starting&nbsp;</span>
                  <span> a project&nbsp;</span>
                  <span> without Zenerate again.</span>
                </p>
              </div>
            </div>

            <button type="button" class="start-button">
              <router-link class="demo-link" :to="{ name: 'en-demo' }">
                BOOK A DEMO
              </router-link>
            </button>
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
import { useGtag } from 'vue-gtag-next'
import Footer from '/Components/EN/Footer.vue'

const { event } = useGtag()
const goToApp = () => {
  event('generate_lead', {
    event_category: 'engagement',
    event_label: '(not yet)',
  })
}
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
          width: 260px;
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
        background-color: $text-darken-7;
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
        width: 780px;
        height: auto;
        border-radius: 20px;
        margin-bottom: 80px;
        background-color: white;
        box-shadow: 10px 30px 60px rgba(211, 210, 242, 0.4);

        .video-wrapper {
          @include relative();
          width: 780px;
          height: 380px;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          position: relative;
          // max-width: 100%;
          // height: 0;
          overflow: hidden;

          iframe {
            @include absolute(top 0px left 0px);
            display: block;
            width: 100%;
            height: 100%;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
          }

          @include en-tablet {
            width: 580px;
            height: 284px;
            iframe {
              @include absolute(top 0px left 0px);
              width: 100%;
              height: 100%;
            }
          }

          @include en-mobile {
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
            width: calc(100vw - 16px);
            height: 46.6vw;
            iframe {
              width: 100%;
              height: 100%;
              border-top-left-radius: 0px;
              border-top-right-radius: 0px;
            }
          }
        }

        @include en-tablet {
          width: 580px;
          height: auto;
          margin-bottom: 50px;
        }

        @include en-mobile {
          margin-top: 0px;
          width: 100%;
          height: auto;
          border-radius: 0px;
          margin-bottom: 0px;
          box-shadow: none;
        }

        .text-wrapper {
          width: 100%;
          padding: 42px 52px 55px;

          @include en-tablet {
            padding: 35px 44px 54px;
          }

          @include en-mobile {
            padding: 32px 30px 35px 10%;
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
            @include regular(17);
            line-height: 24px;
            max-width: 600px;

            @include en-tablet {
              @include regular(15);
              line-height: 21px;
              max-width: 545px;
            }

            @include en-mobile {
              @include regular(13);
              max-width: 300px;
              line-height: 19px;
              padding-bottom: 12px;
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
    margin-top: 30px;
    background-color: $navigation;
    color: $white;
    border-radius: 10px;
    letter-spacing: 0.1em;
    transition: all ease-in-out 0.2s;

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

    @include en-tablet {
      margin-top: 80px;
    }

    @include en-mobile {
      margin-top: 40px;
    }
  }
}
</style>
