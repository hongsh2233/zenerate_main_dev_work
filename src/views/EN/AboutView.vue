<template>
  <div id="fullpage-about">
    <div class="section section-story">
      <div class="section-inner inner-story">
        <div class="inner-contents">
          <div class="story-contents">
            <p class="story-title">OUR STORY</p>
            <div class="story-content">
              <p>Zenerate is a tech company</p>
              <p>founded by Harvard and Caltech graduates.</p>
            </div>
            <div class="story-content">
              <p>
                Our primary goal is to provide profitable solutions that will
                change traditional building designs lacking the financials. We
                strive to make design sustainable and practical using AI so that
                it can be applied to various building design problems.
              </p>
            </div>
            <div class="story-content">
              <p>
                Zenerate is at the forefront of disrupting real estate
                development, seeking to improve the quality of urban
                development.
              </p>
            </div>
          </div>
          <div class="story-image">
            <img src="/en/img/about_story.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="section section-mission">
      <div class="section-inner inner-mission">
        <div class="inner-contents">
          <div class="mission-image">
            <img src="/en/img/about_mission.png" alt="" />
          </div>
          <div class="mission-contents">
            <div class="mission-title">OUR MISSION</div>
            <div class="mission-content">
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
.section-story {
  .inner-story {
    margin: 0px auto;
  }
  .inner-contents {
    height: content-fit;
    padding-left: 60px;
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
    }
    .story-contents {
      flex: 1;
      margin-right: 40px;
      @include vertical-center;
      .story-title {
        @include bold(30);
        margin-bottom: 40px;
      }
      .story-content {
        margin-bottom: 32px;
        p {
          @include light(24);
        }
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
    padding-right: 100px;
  }
  .inner-contents {
    height: content-fit;
    margin: auto 0px;
    padding-left: 60px;
    @include flex;
    .mission-contents {
      flex: 1;
      @include vertical-center;
      width: calc(100% - 500px);
      margin-left: auto;
      text-align: right;
      .mission-title {
        @include bold(24);
        margin-bottom: 40px;
      }
      .mission-content {
        p {
          @include light(24);
          strong {
            @include regular(24);
          }
        }
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
