<template>
  <section class="section-main-service">
    <div class="service-container">
      <div class="service-title">
        <div class="title-text">서비스 라인업</div>
        <div class="title-tab">
          <div
            class="tab-item hover-pointer"
            :class="{ active: serviceTab === 'consulting' }"
            @click="toggleServiceTab('consulting')"
          >
            컨설팅 서비스
          </div>
          <div class="horizontal-spacer"></div>
          <div
            class="tab-item hover-pointer"
            :class="{ active: serviceTab === 'websolution' }"
            @click="toggleServiceTab('websolution')"
          >
            웹 솔루션
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
              <div class="item-explnation">
                <div class="explnation-chip">컨설팅</div>
                <div class="explnation-title">초기 사업성 검토</div>
                <div class="explnation-content">
                  대지에 적합한 다양한 빌딩 디자인 대안을 생성하여 제공함으로써
                  사용자가 쉽고 빠르게 사업성 평가
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
              <div class="item-explnation">
                <div class="explnation-chip">웹 솔루션</div>
                <div class="explnation-title">초기 사업성 검토</div>
                <div class="explnation-content">
                  대지에 적합한 다양한 빌딩 디자인 대안을 생성하여 제공함으로써
                  사용자가 쉽고 빠르게 사업성 평가
                </div>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
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
.service-container {
  padding-top: 64px;
  .service-title {
    margin-bottom: 80px;
    padding-left: 36px;
    @include tablet {
      text-align: center;
    }
    @include mobile {
      text-align: center;
    }
    .title-text {
      @include bold(32);
      margin-bottom: 24px;
    }
    .title-tab {
      @include flex;
      @include tablet {
        justify-content: center;
      }
      @include mobile {
        justify-content: center;
      }
      .tab-item {
        @include medium(15);
        &.active {
          font-weight: $bold;
        }
      }
      .horizontal-spacer {
        margin: 0px 52px;
        height: 24px;
        width: 1px;
        background-color: $black;
      }
    }
  }
  .service-carousel {
    margin-bottom: 80px;
    @include tablet {
      padding: 36px 0px;
    }
    .slider-item-wrapper {
      @include flex($justify: space-between);
      width: 70%;
      .item-image {
        @include vertical-center;
        width: 500px;
        img {
          max-width: 100%;
          max-height: 100%;
        }
        @include tablet {
          width: auto;
          height: 250px;
          margin: 0px auto;
        }
        @include mobile {
          width: auto;
          height: 250px;
          margin: 0px auto;
        }
      }
      .item-explnation {
        width: 220px;
        @include vertical-center;
        text-align: center;
        @include tablet {
          margin: 40px auto;
        }
        @include mobile {
          margin: 40px auto;
        }
        .explnation-chip {
          margin: 0px auto;
          margin-bottom: 24px;
          @include bold(15);
          color: white;
          background-color: $main;
          width: 124px;
          height: 36px;
          border-radius: 16px;
          padding: 8px 0px;
          @include mobile {
            width: 96px;
            height: 24px;
            font-size: 12px;
            padding: 4px 0px;
          }
        }
        .explnation-title {
          @include bold(24);
          margin-bottom: 12px;
          @include mobile {
            font-size: 20px
          }
        }
        .explanation-content {
          @include medium(15);
          @include mobile {
            font-size: 12px
          }
        }
      }
    }
    :v-deep(.carousel__prev) {
      transform: translate(-50%, -45%);
    }
    :v-deep(.carousel__next) {
      transform: translate(-50%, -45%);
    }
  }
}
</style>
