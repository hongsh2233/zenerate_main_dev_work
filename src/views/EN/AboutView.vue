<template>
  <div id="fullpage-about">
    <div class="section section-story">
      <div class="section-inner inner-story">
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
              development, seeking to improve the quality of urban development.
            </p>
          </div>
        </div>
        <div class="story-image">
          <img src="/en/img/about_story.png" alt="" />
        </div>
        <div class="arrow-bottom">
          <Arrow />
        </div>
      </div>
    </div>
    <div class="section section-mission">
      <div class="section-inner inner-mission">
        <div class="mission-contents">
          <div class="mission-title">OUR MISSION</div>
          <div class="mission-content">
            <p>We believe there is a faster, smarter, better way</p>
            <p>to approach real estate development</p>
            <p>to improve feasibility and decision-making</p>
            <p>for developers and stakeholders.</p>
          </div>
        </div>
        <div class="mission-background">
          <img src="/en/img/about_mission_back.png" alt="" />
        </div>
        <div class="mission-image">
          <img src="/en/img/about_mission.png" alt="" />
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
  fullpage.value.init('#fullpage-about', {
    // parallax: false,
    offsetSections: false,
  })
})
</script>
<style lang="scss" scoped>
.section-inner {
  width: 100%;
  height: 100%;
  padding-top: 100px;
  @include flex($dir: column);
  @include relative;
}
.section-story {
  .inner-story {
    max-width: 1600px;
    margin: 0px auto;
    padding-left: 100px;
  }
  .story-image {
    @include absolute(top 50% right 0);
    transform: translateY(-50%);
  }
  .story-contents {
    flex: 1;
    @include vertical-center;
    width: calc(100% - 500px);
    .story-title {
      @include semi-bold(24);
      margin-bottom: 24px;
    }
    .story-content {
      margin-bottom: 24px;
      p {
        @include semi-bold(24);
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
    max-width: 1600px;
    margin: 0px auto;
    padding-right: 100px;
  }
  .mission-contents {
    flex: 1;
    @include vertical-center;
    width: calc(100% - 500px);
    margin-left: auto;
    text-align: right;
    .mission-title {
      @include semi-bold(24);
      margin-bottom: 24px;
    }
    .mission-content {
      margin-bottom: 24px;
      p {
        @include semi-bold(24);
      }
    }
  }
  .mission-background,
  .mission-image {
    @include absolute(top 50% left 0);
    transform: translateY(-50%);
  }
  .mission-background {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>
