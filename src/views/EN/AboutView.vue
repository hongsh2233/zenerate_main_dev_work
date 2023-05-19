<template>
  <section id="fullpage-about">
    <div class="story-header-wrapper">
      <div class="story-header">
        <h2>The Zenerate Story</h2>
        <div class="divider"></div>
      </div>
    </div>
    <div class="section section-story story-wrapper">
      <div class="inner-contents">
        <div class="mission-contents">
          <div class="title-wrapper">
            <h2>
              An architect<br />
              with a vision,
            </h2>
          </div>
          <div class="mission-content content-text">
            <div class="hidden-en-tablet hidden-en-mobile">
              <p>
                After completing his master's in architecture at Harvard,
                <strong>Benji Shin</strong> spent 6 years as an architect<br />
                in Los Angeles at HED and HKS.
              </p>
              <p>
                While working on some of L.A.'s biggest projects,<br />
                he got frustrated with the inefficiencies and limitations<br />
                that came with the all-important feasibility study process of
                real estate development.
              </p>
            </div>
            <div class="hidden-en-desktop hidden-en-mobile">
              <p>
                After completing his master's in architecture at Harvard,
                <strong>Benji Shin</strong> spent 6 years as an architect<br />
                in Los Angeles at HED and HKS.
              </p>
              <p>
                While working on some of L.A.'s biggest projects,<br />
                he got frustrated with the inefficiencies and limitations<br />
                that came with the all-important feasibility study process of
                real estate development.
              </p>
            </div>

            <div class="hidden-en-desktop hidden-en-tablet">
              <p>
                After completing his master's in <br />
                architecture at Harvard, <strong>Benji Shin</strong> spent<br />
                6 years as an architect in Los Angeles at<br />
                HED and HKS.
              </p>
              <p>
                While working on some of L.A.'s biggest<br />
                projects, he got frustrated with the <br />inefficiencies and
                limitations that came<br />
                with the all-important feasibility study<br />
                process of real estate development.
              </p>
            </div>
          </div>
        </div>
        <div class="person-wrapper">
          <div class="mission-image">
            <img
              src="/en/img/about_benji_shin.png"
              alt="co-founder benji shin"
            />
          </div>
          <p class="person-name">BENJI SHIN</p>
          <p class="person-desc">
            <span>CEO</span>
            <span>ARCHITECT</span>
            <span>CO-FOUNDER </span>
          </p>
        </div>
      </div>
    </div>
    <div class="section section-story-2 story-wrapper">
      <div class="inner-contents">
        <div class="person-wrapper hidden-en-tablet hidden-en-mobile">
          <div class="mission-image">
            <img
              src="/en/img/about_jamie_jeong.png"
              alt="co-founder jamie jeong"
            />
          </div>
          <p class="person-name">JAMIE JEONG</p>
          <p class="person-desc">
            <span>CTO</span>
            <span>AI DEVELOPER</span>
            <span>CO-FOUNDER </span>
          </p>
        </div>
        <div class="mission-contents">
          <div class="title-wrapper">
            <h2>
              a passionate<br />
              mathematician,
            </h2>
          </div>

          <div class="mission-content content-text hidden-en-mobile">
            <p>
              Benji wanted to automate the process to make it<br />
              more efficient, accurate and produce possibilities<br />
              that humans could not generate within<br />
              a short time frame.
            </p>
            <p>
              So he teamed up with <strong>Jamie Jeong</strong>, a brilliant
              mathematician and former Samsung AI Developer,<br />
              to solve this problem through the power of AI.
            </p>
          </div>
          <div
            class="mission-content content-text hidden-en-desktop hidden-en-tablet"
          >
            <p>
              Benji wanted to automate the process to<br />
              make it more efficient, accurate and <br />produce possibilities
              that humans could<br />
              not generate within a short time frame.
            </p>
            <p>
              So he teamed up with <strong>Jamie Jeong</strong>,<br />
              a brilliant mathematician and<br />former Samsung AI Developer, to
              solve <br />this problem through the power of AI.
            </p>
          </div>
        </div>
        <div class="person-wrapper hidden-en-desktop">
          <div class="mission-image">
            <img
              src="/en/img/about_jamie_jeong.png"
              alt="co-founder jamie jeong"
            />
          </div>
          <p class="person-name">JAMIE JEONG</p>
          <p class="person-desc">
            <span>CTO</span>
            <span>AI DEVELOPER</span>
            <span>CO-FOUNDER </span>
          </p>
        </div>
      </div>
    </div>
    <div class="section section-story-3 story-wrapper">
      <div class="inner-contents">
        <div class="mission-contents">
          <div class="title-wrapper">
            <h2>
              and we’re just<br />
              getting started.
            </h2>
          </div>
          <div class="mission-content content-text hidden-en-mobile">
            <p>
              A few years later, with Benji and Jamie leading the way, we're
              already working with some of the biggest names in real estate.
            </p>
            <p>
              With substantial funding from incredible VC's backing our mission
              along with a growing team of world-class architects, AI developers
              and software engineers<br />
              (like Co-Founder <strong>Hak Lee</strong>), we're zenerating the
              future of real estate development one step at a time.
            </p>
          </div>
          <div
            class="mission-content content-text hidden-en-desktop hidden-en-tablet"
          >
            <p>
              A few years later, with Benji and Jamie<br />
              leading the way, we're already working<br />
              with some of the biggest names<br />
              in real estate.
            </p>
            <p>
              With substantial funding from incredible<br />
              VC's backing our mission along with<br />
              a growing team of world-class architects,<br />
              AI developers and software engineers<br />
              (like Co-Founder <strong>Hak Lee</strong>),<br />
              we're zenerating the future of real estate<br />
              development one step at a time.
            </p>
          </div>
        </div>
        <div class="person-wrapper">
          <div class="mission-image">
            <img src="/en/img/about_hak_lee.png" alt="co-founder hak lee" />
          </div>

          <p class="person-name">HAK LEE</p>
          <p class="person-desc">
            <span>SOFTWARE ENGINEER</span>
            <span>CO-FOUNDER </span>
          </p>
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
import { useHead } from '@vueuse/head'
import Store from '/Store/index'
import Footer from '/Components/EN/Footer.vue'

useHead({
  title: `About Zenerate | Learn about how we're revolutionizing RE development`,
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai/about' }],
  meta: [
    {
      name: `description`,
      content: `Zenerate provides AI-powered tools for real estate development. Utilizing generative design and AI, we're helping maximize returns and save time.`,
    },
    {
      name: 'twitter:title',
      content: `About Zenerate | Learn about how we're revolutionizing RE development`,
    },
    {
      name: 'twitter:description',
      content: `Zenerate provides AI-powered tools for real estate development. Utilizing generative design and AI, we're helping maximize returns and save time.`,
    },
    { name: 'keywords', content: 'zenerate' },
    {
      name: 'twitter:image',
      content: 'https://www.zenerate.ai/img/logo_og.png',
    },
    {
      name: 'og:url',
      content: 'https://www.zenerate.ai/about',
    },
    {
      name: 'og:title',
      content: `About Zenerate | Learn about how we're revolutionizing RE development`,
    },
    {
      name: 'og:description',
      content: `Zenerate provides AI-powered tools for real estate development. Utilizing generative design and AI, we're helping maximize returns and save time.`,
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:image:url',
      content: 'https://www.zenerate.ai/img/logo_og.png',
    },
    {
      name: 'og:image:type',
      content: 'image/png',
    },
  ],
})
// const fullpage = computed(() => Store.state.root.FullPage)
// onMounted(() => {
//   fullpage.value.init('#fullpage-about', { offsetSections: false })
// })
// onBeforeUnmount(() => {
//   fullpage.value.destroy()
// })
</script>
<style lang="scss" scoped>
.text-blue {
  color: $navigation;
  font-weight: 300;
}

.person-wrapper {
  @include vertical-center();
  align-items: center;
  width: 390px;

  @include en-tablet {
    width: 100%;
    align-items: flex-end;
  }

  .person-name {
    @include bold(18);
    width: 292px;
    text-align: left;

    @include en-mobile {
      @include bold(14);
      width: 227px;
      text-align: center;
    }
  }
  .person-desc {
    width: 292px;
    text-align: left;

    @include en-mobile {
      width: 258px;
      text-align: center;

      span {
        @include regular(12);
      }
    }

    span {
      @include regular(14);
      color: $text-darken;

      &:not(:first-child) {
        &::before {
          content: '\00B7';
          padding: 0px 6px;
        }
      }
    }
  }
}

.story-header-wrapper {
  @include absolute(top 130px left 0px);
  width: 100%;
}
.story-header {
  @include vertical-center();
  align-items: center;

  h2 {
    @include semi-bold(21);
    margin: 0px 0px 10px 0px;
    color: $text-darken;
  }

  .divider {
    width: 56px;
    height: 2px;
    background-color: $text-darken-7;
  }

  @include en-tablet {
    align-items: flex-start;
    padding: 0px calc(10% + 16px) 0px;

    .divider {
      width: 46px;
      height: 2px;
    }
  }

  @include en-mobile {
    align-items: flex-start;
    padding: 0px auto 0px;
    width: 260px;
    margin: 0px auto;

    h2 {
      @include semi-bold(14);
      margin: 0px 0px 8px;
    }

    .divider {
      width: 38px;
      height: 1px;
    }
  }
}
.story-wrapper {
  width: 100%;

  // @include en-desktop {
  //   background-image: url('/en/img/about_background.png');
  //   background-size: contain;
  //   background-repeat: no-repeat;
  //   background-position-y: center;
  // }

  &.section-story {
    .inner-contents {
      @include en-desktop {
        padding-top: 220px;
      }

      @include en-tablet {
        padding-top: 202px;
      }
      @include en-mobile {
        padding-top: 220px;
      }
    }
  }
  &.section-story-3 {
    .inner-contents {
      margin-bottom: 12%;
    }
  }

  .inner-contents {
    @include flex($justify: space-around);
    height: content-fit;
    margin: auto;
    padding-top: 80px;
    max-width: 1200px;

    @include en-tablet {
      flex-direction: column;
      padding-top: 90px;
      padding: 80px calc(10% + 16px) 42px;
    }

    @include en-mobile {
      padding: 33px 10% 42px;
    }

    .mission-contents {
      @include vertical-center;
      flex: 1;
      text-align: right;
      margin: 70px 0px 0px 40px;

      @include en-tablet {
        margin-left: 0px;
      }

      .mission-title {
        margin-bottom: 40px;
      }

      .title-wrapper {
        @include flex($dir: column);
        align-items: flex-start;
        text-align: left;

        @include en-tablet {
          max-width: 540px;
        }

        @include en-mobile {
          max-width: 360px;
        }

        h2 {
          @include semi-bold(40);
          color: $text-darken;
          margin: 0px 0px 28px;
          @include en-mobile {
            @include semi-bold(26);
            margin: 0px 0px 18px;
          }
        }
      }
      .mission-content {
        text-align: left;
        p {
          @include light(19);
          margin-bottom: 24px;
          strong {
            @include semi-bold(19);
          }

          @include en-mobile {
            @include light(13);
            line-height: 19px;
            strong {
              @include medium(13);
              line-height: 19px;
            }
          }
        }
      }

      @include en-desktop {
        max-width: 518px;
      }

      @include en-tablet {
        @include relative;
        max-width: 518px;
        z-index: 1;
        flex: none;
        text-align: center;
      }
      @include en-mobile {
        @include relative;
        z-index: 1;
        flex: none;
        width: auto;
        margin: 0px auto;
        padding-bottom: 0px;
        text-align: center;
      }
    }

    .mission-image {
      width: 292px;
      height: 292px;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      @include en-tablet {
      }
      @include en-mobile {
        width: 160px;
        height: 160px;
      }
    }
    .mission-background {
      @include absolute(top 50% left 0);
      transform: translateY(-50%);
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}

.section-person-wrapper {
  @include vertical-center();
  align-items: center;

  @include en-tablet {
    margin-top: 80px;
  }

  @include en-mobile {
    margin-top: 60px;
  }

  .person-wrapper {
    @include vertical-center();
    width: 292px;
    margin: auto;
    margin-bottom: 80px;

    @include en-mobile {
      align-items: center;
    }
  }

  .person-image {
    width: 292px;
    height: 292px;
    margin-bottom: 20px;

    @include en-mobile {
      width: 160px;
      height: 160px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
