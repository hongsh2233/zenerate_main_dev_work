<template>
  <section class="section-main-service">
    <div class="service-container-wrapper">
      <div class="service-container">
        <div class="service-caption caption-large">Our Program</div>
        <div class="service-title">{{ $t('main.service.title[0]') }}</div>
        <div class="service-content">
          <p>{{ $t('main.service.content[0]') }}</p>
          <p>{{ $t('main.service.content[1]') }}</p>
          <p>{{ $t('main.service.content[2]') }}</p>
        </div>
        <div class="service-image">
          <img class="service-image-intro" src="/img/service_intro.png" />
        </div>
      </div>
      <div class="service-container">
        <div class="service-caption caption-large">Consulting Service</div>
        <div class="service-title">{{ $t('main.service.title[1]') }}</div>
        <div class="service-content">{{ $t('main.service.content[3]') }}</div>
        <div class="service-image">
          <img src="/img/service_consulting_1.png" />
          <img src="/img/service_consulting_2.png" />
        </div>
      </div>
      <div class="service-container">
        <div class="service-caption caption-large">Web Solution</div>
        <div class="service-title">{{ $t('main.service.title[2]') }}</div>
        <div class="service-content">{{ $t('main.service.content[4]') }}</div>
        <div class="service-image">
          <img src="/img/service_web.png" />
        </div>
      </div>
      <!-- <div class="service-title">
        <div class="title-text">{{ $t('main.service.title') }}</div>
        <div class="title-tab">
          <div
            class="tab-item hover-pointer"
            :class="{ active: serviceTab === 'consulting' }"
            @click="toggleServiceTab('consulting')"
          >
            {{ $t('main.service.types.consulting') }}
          </div>
          <div class="horizontal-spacer"></div>
          <div
            class="tab-item hover-pointer"
            :class="{ active: serviceTab === 'websolution' }"
            @click="toggleServiceTab('websolution')"
          >
            {{ $t('main.service.types.web') }}
          </div>
        </div>
      </div>
      <div class="service-carousel" v-show="serviceTab === 'consulting'">
        <Carousel :wrap-around="true">
          <Slide v-for="i in 2" :key="i">
            <div class="slider-item-wrapper">
              <div class="item-image">
                <img :src="`/img/program_${i}.png`" alt="" />
              </div>
              <div class="item-explanation">
                <div class="explanation-chip">
                  {{ $t('main.service.chip.consulting') }}
                </div>
                <div class="explanation-title">
                  {{ $t(`main.service.titles[${i - 1}]`) }}
                </div>
                <div class="explanation-content">
                  {{ $t(`main.service.contents[${i - 1}]`) }}
                </div>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
      <div class="service-carousel" v-show="serviceTab === 'websolution'">
        <Carousel :wrap-around="true">
          <Slide>
            <div class="slider-item-wrapper">
              <div class="item-image">
                <img :src="`/img/program_${3}.png`" alt="" />
              </div>
              <div class="item-explanation">
                <div class="explanation-chip">
                  {{ $t('main.service.chip.web') }}
                </div>
                <div class="explanation-title">
                  {{ $t(`main.service.titles[2]`) }}
                </div>
                <div class="explanation-content">
                  {{ $t(`main.service.contents[2]`) }}
                </div>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div> -->
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
const serviceTab = ref('consulting')
const toggleServiceTab = (tab) => {
  serviceTab.value = tab
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.service-container-wrapper {
  padding-top: 64px;
  .service-container {
    position: relative;
    margin-bottom: 100px;
    text-align: center;
    &:first-child {
      margin-bottom: 292px;
    }
    .service-caption {
      @include bold(20);
      line-height: 48px;
    }
    .service-title {
      @include bold(40);
      line-height: 60px;
      margin-bottom: 40px;
    }
    .service-content {
      @include medium(20);
    }
    .service-image-intro {
      width: 100%;
      position: absolute;
      left: 0;
      top: 100px;
      z-index: -1;
    }
  }
}
// .service-container {
//   padding-top: 64px;
//   .service-title {
//     margin-bottom: 80px;
//     padding-left: 36px;
//     @include tablet {
//       text-align: center;
//       padding-left: 0;
//     }
//     @include mobile {
//       text-align: center;
//       padding-left: 0;
//     }
//     .title-text {
//       @include bold(32);
//       margin-bottom: 24px;
//     }
//     .title-tab {
//       @include flex;
//       @include tablet {
//         justify-content: center;
//       }
//       @include mobile {
//         justify-content: center;
//       }
//       .tab-item {
//         @include medium(15);
//         &.active {
//           font-weight: $bold;
//         }
//       }
//       .horizontal-spacer {
//         margin: 0px 52px;
//         height: 24px;
//         width: 1px;
//         background-color: $black;
//         @include mobile {
//           margin: 0px 16px;
//         }
//       }
//     }
//   }
//   .service-carousel {
//     margin-bottom: 80px;
//     @include tablet {
//       padding: 36px 0px;
//     }
//     @include mobile {
//       margin-bottom: 40px;
//     }
//     .slider-item-wrapper {
//       @include flex($justify: space-between);
//       width: 70%;
//       .item-image {
//         @include vertical-center;
//         width: 500px;
//         img {
//           max-width: 100%;
//           max-height: 100%;
//         }
//         @include tablet {
//           width: auto;
//           height: 250px;
//           margin: 0px auto;
//         }
//         @include mobile {
//           width: auto;
//           height: 152px;
//           margin: 0px auto;
//         }
//       }
//       .item-explanation {
//         width: 220px;
//         @include vertical-center;
//         text-align: center;
//         @include tablet {
//           margin: 40px auto;
//         }
//         @include mobile {
//           margin: 40px auto;
//         }
//         .explanation-chip {
//           margin: 0px auto;
//           margin-bottom: 24px;
//           @include bold(15);
//           color: white;
//           background-color: $main;
//           width: 124px;
//           height: 36px;
//           border-radius: 16px;
//           padding: 8px 0px;
//           @include mobile {
//             width: 96px;
//             height: 24px;
//             font-size: 12px;
//             padding: 4px 0px;
//           }
//         }
//         .explanation-title {
//           @include bold(24);
//           margin-bottom: 12px;
//           @include mobile {
//             font-size: 20px;
//           }
//         }
//         .explanation-content {
//           @include medium(15);
//           @include mobile {
//             font-size: 12px;
//           }
//         }
//       }
//     }
//     :v-deep(.carousel__prev) {
//       transform: translate(-50%, -45%);
//     }
//     :v-deep(.carousel__next) {
//       transform: translate(-50%, -45%);
//     }
//   }
// }
</style>
