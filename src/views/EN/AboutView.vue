<template>
  <div id="fullpage-about">
    <div class="section section-story fp-auto-height-responsive">
      <div class="section-inner inner-story">
        <div class="inner-contents">
          <div class="person-wrapper hidden-tablet hidden-mobile">
            <div class="mission-image">
              <img src="/en/img/about_benji_shin.png" alt="" />
            </div>
            <p class="person-name">BENJI SHIN</p>
            <p class="person-desc">
              <span>CEO</span>
              <span>ARCHITECT</span>
              <span>CO-FOUNDER </span>
            </p>
          </div>
          <div class="mission-contents">
            <div class="title-wrapper">
              <h2>ABOUT US</h2>
              <div class="divider"></div>
            </div>
            <div class="mission-content content-text">
              <p>
                Zenerate is a tech company<br />founded by Harvard and Caltech
                graduates.
              </p>
              <p>
                Our primary goal is to provide profitable solutions
                <strong>
                  that will change traditional building designs lacking the
                  financials.
                </strong>
              </p>

              <p class="hidden-desktop">
                We strive to make design practical using AI so that it can be
                applied to various building design problems.
              </p>
              <p class="hidden-desktop">
                Zenerate is at the forefront of transforming real estate
                development,
                <strong
                  >seeking to improve the quality of urban development.
                </strong>
                <br />for developers and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        section section-story
        fp-auto-height-responsive
        hidden-tablet hidden-mobile
      "
    >
      <div class="section-inner inner-story">
        <div class="inner-contents">
          <div class="person-wrapper">
            <div class="mission-image">
              <img src="/en/img/about_jamie_jeong.png" alt="" />
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
              <h2>ABOUT US</h2>
              <div class="divider"></div>
            </div>

            <div class="mission-content content-text">
              <p>
                We strive to make design practical using AI so that it can be
                applied to various building design problems.
              </p>
              <p>
                Zenerate is at the forefront of transforming real estate
                development,
                <strong
                  >seeking to improve the quality of urban development.
                </strong>
                <br />for developers and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-story fp-auto-height-responsive">
      <div class="section-inner inner-story">
        <div class="inner-contents">
          <div class="mission-contents">
            <div class="title-wrapper">
              <h2>OUR MISSION</h2>
              <div class="divider"></div>
            </div>
            <div class="mission-content content-text">
              <p>
                <strong
                  >We believe there is a faster, smarter, better way</strong
                >
                <br />
                <strong>to approach real estate development</strong>
                <br />to improve feasibility and decision-making <br />for
                developers and stakeholders.
              </p>
            </div>
          </div>
          <div class="person-wrapper hidden-tablet hidden-mobile">
            <div class="mission-image">
              <img src="/en/img/about_hak_lee.png" alt="" />
            </div>

            <p class="person-name">HAK LEE</p>
            <p class="person-desc">
              <span>SOFTWARE ENGINEER</span>
              <span>CO-FOUNDER </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        section section-person-wrapper
        hidden-desktop
        fp-auto-height-responsive
      "
    >
      <div class="person-wrapper">
        <div class="person-image">
          <img src="/en/img/about_benji_shin.png" alt="" />
        </div>
        <p class="person-name">BENJI SHIN</p>
        <p class="person-desc">
          <span>CEO</span>
          <span>ARCHITECT</span>
          <span>CO-FOUNDER </span>
        </p>
      </div>
      <div class="person-wrapper">
        <div class="person-image">
          <img src="/en/img/about_jamie_jeong.png" alt="" />
        </div>
        <p class="person-name">JAMIE JEONG</p>
        <p class="person-desc">
          <span>CTO</span>
          <span>AI DEVELOPER</span>
          <span>CO-FOUNDER </span>
        </p>
      </div>
      <div class="person-wrapper">
        <div class="person-image">
          <img src="/en/img/about_jamie_jeong.png" alt="" />
        </div>
        <p class="person-name">JAMIE JEONG</p>
        <p class="person-desc">
          <span>CTO</span>
          <span>AI DEVELOPER</span>
          <span>CO-FOUNDER </span>
        </p>
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
// @ts-ignore
import CloseIcon from '/Components/EN/Icons/close.vue'

import { useMeta } from 'vue-meta'

const { meta } = useMeta({
  title: 'About | Zenerate',
  description:
    'Zenerate is a team of architects, AI developers, software engineers and computational designers who are passionate about innovating the architecture and real estate development industries for better built environment.  ',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content:
        'Zenerate is a team of architects, AI developers, software engineers and computational designers who are passionate about innovating the architecture and real estate development industries for better built environment.  ',
    },
  ],
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai/about' }],
})

onMounted(() => {
  fullpage.value.init('#fullpage-about', {
    // parallax: false,
    offsetSections: false,
  })
})
</script>
<style lang="scss" scoped>
.section {
  background-color: #fafafc;
}

.person-wrapper {
  @include vertical-center();
  width: 50%;
  margin-bottom: 100px;

  .person-name {
    @include bold(18);
  }
  .person-desc {
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
.section-story {
  .inner-story {
    margin: 0px auto;
    @include en-desktop {
      padding-right: 100px;
    }
  }
  .inner-contents {
    height: content-fit;
    margin: auto 0px;
    @include flex;

    .mission-contents {
      flex: 1;
      @include vertical-center;
      width: calc(100% - 500px);
      margin-left: auto;
      text-align: right;
      .mission-title {
        margin-bottom: 40px;
      }

      .title-wrapper {
        @include flex($dir: column);
        align-items: flex-start;
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
          @include bold(30);
          color: $text-darken;
          margin: 0px 0px 60px;
          @include en-mobile {
            @include bold(24);
            margin: 0px 0px 30px;
          }
        }

        .divider {
          width: 56px;
          height: 2px;
          border-radius: 5px;
          background-color: $text-darken;
        }
      }
      .mission-content {
        text-align: left;
        p {
          @include light(20);
          margin-bottom: 24px;
          strong {
            @include medium(20);
          }
          @include en-mobile {
            font-size: 14px;
            strong {
              @include medium(14);
            }
          }
        }
      }
      @include en-tablet {
        @include relative;
        z-index: 1;
        flex: none;
        width: 100%;
        margin-right: 0;
        text-align: center;
        padding-bottom: 80px;
      }
      @include en-mobile {
        @include relative;
        z-index: 1;
        flex: none;
        width: 100%;
        margin-right: 0;
        text-align: center;
        padding-bottom: 80px;
      }
    }

    .mission-image {
      width: 560px;
      height: 560px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      @include en-tablet {
        @include absolute(left 0 bottom 50%);
        transform: translateY(50%);
        opacity: 0.2;
        margin: 0;
      }
      @include en-mobile {
        @include absolute(right 0 bottom 60px);
        opacity: 0.2;
        margin: 0;
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

.section-person {
  @include vertical-center();

  .person-image {
    width: 100%;
    height: 100%;

    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
    }
  }
}
</style>
