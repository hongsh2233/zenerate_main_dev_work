<template>
  <div class="module-news-wrapper module-item-wrapper">
    <div class="news-inner">
      <div class="news-caption caption-large">새소식</div>
      <div class="news-items hidden-tablet hidden-mobile">
        <div class="news-item">
          <div class="item-date">Dec 18 2020</div>
          <div class="item-content">
            IBK 기업은행 혁신창업기업에 제너레잇이 최종 합격되었습니다.
          </div>
        </div>
        <div class="news-item">
          <div class="item-date">Dec 18 2020</div>
          <div class="item-content">
            IBK 기업은행 혁신창업기업에 제너레잇이 최종 합격되었습니다.
          </div>
        </div>
        <div class="news-item">
          <div class="item-date">Dec 18 2020</div>
          <div class="item-content">
            IBK 기업은행 혁신창업기업에 제너레잇이 최종 합격되었습니다.
          </div>
        </div>
        <div class="news-item">
          <div class="item-date">Dec 18 2020</div>
          <div class="item-content">
            IBK 기업은행 혁신창업기업에 제너레잇이 최종 합격되었습니다.
          </div>
        </div>
        <div class="news-item">
          <div class="item-date">Dec 18 2020</div>
          <div class="item-content">
            IBK 기업은행 혁신창업기업에 제너레잇이 최종 합격되었습니다.
          </div>
        </div>
      </div>
      <div class="news-items hidden-desktop">
        <Carousel
          :itemsToShow="5"
          :wrap-around="true"
          :breakpoints="{
            100: {
              itemsToShow: 2,
              snapAlign: 'start',
            },
            768: {
              itemsToShow: 3,
              snapAlign: 'start',
            },
          }"
        >
          <Slide v-for="i in 10" :key="i">
            <div class="news-item">
              <div class="item-date">{{ i }} 18 2020</div>
              <div class="item-content">
                IBK 기업은행 혁신창업기업에 제너레잇이 최종 합격되었습니다.
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Carousel, Slide, Navigation } from 'vue3-carousel'
</script>
<style lang="scss" scoped>
.news-inner {
  width: 100%;
  height: 100%;
  .news-caption {
    margin-bottom: 12px;
  }
  .news-items {
    height: calc(100% - 52px);
    @include desktop {
      @include flex();
    }
    @include mobile {
    }
    .news-item {
      @include flex($dir: column, $justify: space-between);
      @include tablet {
        width: 164px;
        height: 100%;
      }
      @include mobile {
        width: 100px;
        height: 100%;
      }
      .item-date {
        color: $grey-2;
        @include medium(15);
        margin-top: 24px;
        @include tablet {
          text-align: left;
        }
        @include mobile {
          text-align: left;
        }
      }
      .item-content {
        @include medium(24);
        margin: auto 0px;
        flex: 1;
        @include vertical-center;
        @include desktop {
          justify-content: flex-end;
        }
        padding-bottom: 24px;
        @include mobile {
          font-size: 15px;
        }
      }
    }

    @include desktop {
      flex-direction: column;
      .news-item {
        flex: 1;
        border-top: solid 1px $main;
      }
    }
  }
}
</style>
