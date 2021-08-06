<template>
  <section class="section-careers">
    <div id="fullpage">
      <div class="section section-main">
        <div class="section-inner main-wrapper">
          <div class="inner-main">
            <div class="main-sub-title">
              <span>Build your life with</span>
              <img src="/img/logo.webp" alt="" />
            </div>
            <p class="main-content">
              ​Join Zenerate as we innovate architectural planning and improve
              living standards for your communities.
            </p>
          </div>
        </div>
      </div>
      <!-- <div
        class="section section-hero"
        data-centered="true"
        data-percentage="75"
      >
        <div class="section-inner hero-wrapper">
          <p class="hero-title">COMPANY CULTURE AND VALUES</p>
          <div class="hero-sub-title">
            <span>Your life with</span>
            <img src="" data-src="/img/logo.webp" alt="" />
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
      </div> -->

      <div class="section section-content">
        <div class="content-list-wrapper section-inner">
          <div class="inner-content-list">
            <div class="list-title">
              <p>We’re Hiring!</p>
            </div>
            <div class="list-wrapper">
              <div class="list-image">
                <img src="/en/img/career_content.webp" alt="" />
              </div>
              <div class="list-items">
                <div class="career-list">
                  <div class="career-item">
                    <div class="item-date">2021. 00. 00 ~ 2021. 00. 00</div>
                    <div
                      class="item-title hover-pointer"
                      @click="
                        ;[router.push(`/career/strategic-account-executive`)]
                      "
                    >
                      STRATEGIC ACCOUNT EXECUTIVE
                    </div>
                  </div>
                  <div class="career-item">
                    <div class="item-date">2021. 00. 00 ~ 2021. 00. 00</div>
                    <div
                      class="item-title hover-pointer"
                      @click="
                        ;[router.push(`/career/business-development-manager`)]
                      "
                    >
                      BUSINESS DEVELOPMENT MANAGER
                    </div>
                  </div>
                  <div class="career-item">
                    <div class="item-date">2021. 00. 00 ~ 2021. 00. 00</div>
                    <div
                      class="item-title hover-pointer"
                      @click="
                        ;[
                          router.push(
                            `/career/business-development-marketing-intern`
                          ),
                        ]
                      "
                    >
                      BUSINESS DEVELOPMENT & MARKETING INTERN
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-footer fp-auto-height">
        <Footer></Footer>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import Store from '/Store/index'
import CareerContent from '/src/components/EN/CareerContent.vue'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// @ts-ignore
import Footer from '/Components/EN/Footer.vue'
const careerId = ref(-1)
// console.log(careerId.value)
const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}
const fp = computed(() => Store.state.root.FullPage)

onMounted(() => {
  fp.value.destroy()
})
</script>
<style lang="scss" scoped>
#fullpage {
  overflow: hidden;
}
.section-main {
  background-image: url('/en/img/career_main.webp');
  background-size: cover;
  background-position: top;
  .inner-main {
    padding: 0px 60px;
  }

  .main-wrapper {
    @include vertical-center;
    height: 450px;
    color: white;
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
        @include regular(28);
        margin-right: 10px;
        line-height: 50px;
      }
      img {
        height: 50px;
      }
    }
    .main-content {
      padding-top: 48px;
      @include regular(21);
      width: 545px;
    }
  }
}
// .section-hero {
//   background-image: url('/en/img/career_hero.webp');
//   background-size: cover;

//   .hero-wrapper {
//     // height: calc(100% - 100px);
//     padding-top: 160px;
//     color: white;
//     margin: auto;
//     @include vertical-center();
//     .hero-title {
//       @include bold(36);
//       text-align: center;
//       font-weight: 500;
//       line-height: 40px;
//     }
//     .hero-sub-title {
//       @include flex($dir: row);
//       span {
//         @include regular(28);
//         line-height: 50px;
//         margin-right: 10px;
//       }
//       img {
//         height: 50px;
//       }
//     }
//     .hero-content {
//       padding-top: 48px;
//       @include medium(18);
//       width: 545px;
//       &:last-child {
//         padding-top: 24px;
//       }
//     }
//     .technology-arrow {
//       height: 100px;
//       width: 100%;
//       margin-bottom: 20px;
//       margin-top: 100px;
//       @include center-center;
//       align-items: flex-end;
//       animation: move-up-down 2s ease-in-out infinite;
//       svg {
//         height: 80px;
//         stroke: white;
//       }
//     }
//   }
// }
.section-content {
  &.active .content-list-wrapper .list-title {
    padding-top: 160px;
  }
  .content-list-wrapper {
    padding-top: 0px;
    margin-bottom: 72px;
    height: 100%;
    .inner-content-list {
      padding: 0px 60px;
    }
    .list-title {
      transition: padding 0.5s ease;
      margin-top: 100px;
      text-align: center;
      @include bold(32);
      margin-bottom: 48px;
    }
    .list-wrapper {
      @include flex($justify: space-between);
      .list-image {
        margin: auto 0px;
        margin-right: 80px;
        img {
          width: 400px;
        }
      }
      .list-items {
        flex: 1;
        .career-list {
          @include flex($dir: column, $justify: space-between);
          .career-item {
            height: 130px;
            padding-bottom: 20px;
            .item-date {
              @include regular(16);
              @include vertical-center;
              line-height: 40px;
              color: $cr-text-grey;
              padding-top: 40px;
            }
            .item-title {
              @include medium(24);
              line-height: 40px;
              // 무슨 컬러?
              color: #161616;
              border-bottom: solid 1px $cr-text-light-grey;
              &:hover {
                color: $cr-main-blue;
                border-bottom-color: $cr-main-blue;
              }
            }
          }
        }
      }
    }
  }
  // &.active .content-list-wrapper {
  //   height: 100%;
  //   padding-top: 150px;
  // }
}
</style>
