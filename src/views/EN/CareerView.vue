<template>
  <section class="section-careers">
    <div id="fullpage">
      <div class="section section-main">
        <div class="main-wrapper">
          <p class="main-title">Career</p>
          <div class="main-sub-title">
            <span>Your future with</span>
            <img src="" data-src="/img/logo.png" alt="" />
          </div>
          <p class="main-content">
            ​Join Zenerate as we innovate architectural planning and improve
            living standards for your communities.
          </p>
          <div class="technology-arrow">
            <svg
              width="27"
              height="83"
              viewBox="0 0 27 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.999994 1L0.999996 82L26 55.3114"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        class="section section-hero fp-auto-height"
        data-centered="true"
        data-percentage="75"
      >
        <div class="hero-wrapper">
          <p class="hero-title">COMPANY CULTURE AND VALUES</p>
          <div class="hero-sub-title">
            <span>Your life with</span>
            <img src="" data-src="/img/logo.png" alt="" />
          </div>
          <p class="hero-content">
            At Zenerate, placeholder (our unique group of professionals come
            together from a variety of different disciplines to solve
            significant pains in real estate planning.
          </p>
          <p class="hero-content">
            We’re looking for the best people in their field, and expect them to
            share their point of view with respect to every aspect of our
            product: from design & UX to business and deep-tech.) Come join us!
          </p>
        </div>
      </div>

      <div
        class="section section-content fp-auto-height fp-scrollable"
        data-centered="true"
        data-percentage="100"
      >
        <div class="content-list-wrapper">
          <div class="list-title">
            <p>We’re Hiring!</p>
          </div>
          <CareerContent
            v-if="careerId !== -1"
            @onSelect="(v) => (careerId = v)"
            :careerId="careerId"
          ></CareerContent>
          <div class="list-wrapper" v-else>
            <div class="list-image">
              <img src="" data-src="/img/career_img.jpg" alt="" />
            </div>
            <div class="list-items">
              <div class="career-list" v-if="careerId === -1">
                <div class="career-item">
                  <div class="item-date">2021. 00. 00 ~ 2021. 00. 00</div>
                  <div class="item-title hover-pointer" @click="careerId = 0">
                    STRATEGIC ACCOUNT EXECUTIVE
                    <div class="arrow-right"></div>
                  </div>
                </div>
                <div class="career-item">
                  <div class="item-date">2021. 00. 00 ~ 2021. 00. 00</div>
                  <div
                    class="item-title hover-pointer"
                    @click=";[(careerId = 1)]"
                  >
                    BUSINESS DEVELOPMENT MANAGER
                    <div class="arrow-right"></div>
                  </div>
                </div>
                <div class="career-item">
                  <div class="item-date">2021. 00. 00 ~ 2021. 00. 00</div>
                  <div
                    class="item-title hover-pointer"
                    @click=";[(careerId = 2)]"
                  >
                    BUSINESS DEVELOPMENT & MARKETING INTERN
                    <div class="arrow-right"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import Store from '/Store/index'
import CareerContent from '/src/components/EN/CareerContent.vue'
import { computed, onMounted, ref } from 'vue'

const careerId = ref(-1)
// console.log(careerId.value)
const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}
const fp = computed(() => Store.state.root.FullPage)

onMounted(() => {
  fp.value.init('#fullpage', {
    scrollOverflow: true,
    anchors: ['firstPage', 'secondPage', 'thirdPage'],
    // normalScrollElements: '.section-content'
  })
})
</script>
<style lang="scss">
.section-main {
  background-image: url('/en/img/career_main.jpg');
  background-size: cover;

  .main-wrapper {
    // height: 100%;
    padding-top: 100px;
    padding-left: 96px;
    padding-right: 96px;
    // font-family: Montserrat;
    color: white;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    position: relative;
    .main-title {
      @include bold(36);
      font-weight: 500;
      line-height: 40px;
    }
    .main-sub-title {
      @include flex($dir: row);
      span {
        @include medium(28);
        margin-right: 10px;
      }
      img {
        height: 36px;
      }
    }
    .main-content {
      padding-top: 48px;
      @include medium(18);
      width: 545px;
    }
    .technology-arrow {
      // box-sizing: content-box;
      width: calc(100%);
      position: fixed;
      margin-top: 200px;
      @include center-center();
      svg {
        stroke: white;
      }
    }
  }
}
.section-hero {
  background-image: url('/en/img/career_hero.jpg');
  background-size: cover;

  .hero-wrapper {
    height: 750px;
    // height: calc(100% - 100px);
    padding-top: 100px;
    padding-left: 96px;
    color: white;
    width: 1600px;
    margin: auto;
    @include vertical-center();
    .hero-title {
      @include bold(36);
      font-weight: 500;
      line-height: 40px;
    }
    .hero-sub-title {
      @include flex($dir: row);
      span {
        @include medium(28);
        margin-right: 10px;
      }
      img {
        height: 36px;
      }
    }
    .hero-content {
      padding-top: 48px;
      @include medium(18);
      width: 545px;
      &:last-child {
        padding-top: 24px;
      }
    }
  }
}
.section-content {
  .content-list-wrapper {
    // padding-top: 24px;
    transition: padding 0.5s ease;
    height: 100%;
    min-height: 840px;
    padding: 24px 96px 0px 96px;
    width: 1600px;
    margin: auto;
    .list-title {
      @include bold(40);
      padding-bottom: 50px;
    }
    .list-wrapper {
      @include flex($justify: space-between);
      .list-image {
        img {
          width: 600px;
        }
      }
      .list-items {
        width: calc(100% - 700px);
        .career-list {
          @include flex($dir: column, $justify: space-between);
          .career-item {
            height: 130px;
            padding-bottom: 20px;
            .item-date {
              @include medium(12);
              @include vertical-center;
              height: 40px;
              color: rgba($black-1, 0.4);
              padding-top: 40px;
              margin-bottom: 16px;
            }
            .item-title {
              @include medium(20);
              line-height: 40px;
              @include tablet {
                @include medium(18);
              }
              @include mobile {
                @include medium(18);
              }
              &:hover {
                color: $main;
                .arrow-right {
                  border-top-color: $main;
                  &::after {
                    background-color: $main;
                  }
                }
              }
              .arrow-right {
                width: 100%;
                height: 5px;
                border-top: 1px solid $grey-3;
                margin-top: 20px;
                margin-bottom: 30px;
                transform: rotate(180deg);
                @include tablet {
                  margin-top: 15px;
                }
                @include mobile {
                  margin-top: 15px;
                }
              }
            }
          }
        }
      }
    }
    &.active .content-list-wrapper {
      height: 100%;
      padding-top: 100px;
    }
  }
}
</style>
