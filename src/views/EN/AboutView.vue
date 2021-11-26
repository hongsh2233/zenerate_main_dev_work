<template>
  <div id="fullpage-about">
    <div class="section section-story fp-auto-height-responsive">
      <div class="section-inner inner-story">
        <div class="inner-contents">
          <div class="story-contents">
            <div class="content-heading">
              <p class="story-title"><strong>OUR STORY</strong></p>
            </div>
            <div class="story-content content-text">
              <p>Zenerate is a tech company</p>
              <p>founded by Harvard and Caltech graduates.</p>
            </div>
            <div class="story-content content-text">
              <p>
                We're a team of architects, software engineers, and AI
                developers driven to provide building solutions that position
                properties into successful operations for various stakeholders.
                Our design automation software combines AI + Data Science to
                search millions of possibilities, delivering fast & easy
                feasibility studies and optimized profitability.
              </p>
            </div>
          </div>
          <div class="story-image">
            <img src="/en/img/about_story.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="section section-mission fp-auto-height-responsive">
      <div class="section-inner inner-mission">
        <div class="inner-contents">
          <div class="mission-image">
            <img src="/en/img/about_mission.png" alt="" />
          </div>
          <div class="mission-contents">
            <div class="content-heading">
              <p class="mission-title"><strong>OUR MISSION</strong></p>
            </div>
            <div class="mission-content content-text">
              <p>
                <strong
                  >We believe there is a faster, smarter, better way</strong
                >
              </p>
              <p><strong>to approach real estate development</strong></p>
              <p>to improve feasibility and decision-making</p>
              <p>for developers and stakeholders.</p>
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
// @ts-ignore
import CloseIcon from '/Components/EN/Icons/close.vue'

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
.section-story {
  .inner-story {
    margin: 0px auto;
  }
  .inner-contents {
    height: content-fit;
    margin: auto 0px;
    @include flex;
    .story-image {
      width: 322px;
      height: 322px;
      margin-top: 100px;
      img {
        width: 100%;
        height: 100%;
      }
      @include en-tablet {
        @include absolute(right 0 bottom 0);
        opacity: 0.2;
      }
      @include en-mobile {
        @include absolute(right 0 bottom 0);
        opacity: 0.2;
      }
    }
    .story-contents {
      flex: 1;
      margin-right: 40px;
      @include vertical-center;
      .story-title {
        margin-bottom: 40px;
      }
      .story-content {
        margin-bottom: 32px;
        p {
          @include light(24);

          @include en-mobile {
            font-size: 22px;
          }
        }
      }
      @include en-tablet {
        @include relative;
        z-index: 1;
        flex: none;
        width: 100%;
        margin-right: 0;
      }
      @include en-mobile {
        @include relative;
        z-index: 1;
        flex: none;
        width: 100%;
        margin-right: 0;
      }
    }
  }
  .arrow-bottom {
    justify-content: flex-start;
    padding-left: 24px;
    margin-bottom: 80px;
  }
}
.section-mission {
  .inner-mission {
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
      .mission-content {
        p {
          @include light(24);
          strong {
            @include regular(24);
          }
          @include en-mobile {
            font-size: 20px;
            strong {
              @include regular(23);
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
      width: 450px;
      height: 388px;
      margin-top: 100px;
      img {
        width: 100%;
        height: 100%;
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
</style>
