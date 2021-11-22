<template>
  <div id="fullpage">
    <section class="section section-careers">
      <div class="section-main">
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
                    <div class="item-date">
                      Posted
                      {{
                        formatDistanceToNowStrict(new Date(2021, 9, 28), {
                          addSuffix: true,
                        })
                      }}
                    </div>
                    <div
                      class="item-title hover-pointer"
                      @click=";[router.push(`/career/head-of-marketing`)]"
                    >
                      Head of Marketing, B2B SaaS (Full-time)
                    </div>
                  </div>
                  <div class="career-item">
                    <div class="item-date">
                      Posted
                      {{
                        formatDistanceToNowStrict(new Date(2021, 9, 28), {
                          addSuffix: true,
                        })
                      }}
                    </div>
                    <div
                      class="item-title hover-pointer"
                      @click=";[router.push(`/career/graphic-designer`)]"
                    >
                      Mid-level Graphic Designer (Full-time)
                    </div>
                  </div>
                  <div class="career-item">
                    <div class="item-date">
                      Posted
                      {{
                        formatDistanceToNowStrict(new Date(2021, 9, 23), {
                          addSuffix: true,
                        })
                      }}
                    </div>
                    <div
                      class="item-title hover-pointer"
                      @click=";[router.push(`/career/head-of-sales`)]"
                    >
                      Head of Sales (Full-time)
                    </div>
                  </div>
                  <div class="career-item">
                    <div class="item-date">
                      Posted
                      {{
                        formatDistanceToNowStrict(posted, { addSuffix: true })
                      }}
                    </div>
                    <div
                      class="item-title hover-pointer"
                      @click="
                        ;[
                          router.push(
                            `/career/architect-architectural-designer`
                          ),
                        ]
                      "
                    >
                      Architect / Architectural Designer (Full-time)
                    </div>
                  </div>
                  <div class="career-item">
                    <div class="item-date">
                      Posted
                      {{
                        formatDistanceToNowStrict(posted, { addSuffix: true })
                      }}
                    </div>
                    <div
                      class="item-title hover-pointer"
                      @click="
                        ;[
                          router.push(
                            `/career/project-analyst-real-estate-development`
                          ),
                        ]
                      "
                    >
                      Project Analyst, Real Estate Development (Part-time)
                    </div>
                  </div>
                  <div class="career-item">
                    <div class="item-date">
                      Posted
                      {{
                        formatDistanceToNowStrict(posted, { addSuffix: true })
                      }}
                    </div>
                    <div
                      class="item-title hover-pointer"
                      @click="
                        ;[router.push(`/career/strategic-account-executive`)]
                      "
                    >
                      Strategic Account Executive (Full-time)
                    </div>
                  </div>

                  <div class="career-item">
                    <div class="item-date">
                      Posted
                      {{
                        formatDistanceToNowStrict(posted, { addSuffix: true })
                      }}
                    </div>
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
                      Business Development & Marketing Intern (Full-time)
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
    </section>
  </div>
</template>
<script lang="ts" setup>
import Store from '/Store/index'
import CareerContent from '/src/components/EN/CareerContent.vue'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// @ts-ignore
import Footer from '/Components/EN/Footer.vue'
import { formatDistanceToNowStrict } from 'date-fns'
const posted = new Date(2021, 9, 17)
const today = new Date()

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
  background-image: url('/en/img/career_main.png');
  background-size: cover;
  background-position: top;
  .inner-main {
    padding: 0px 60px;
    @include en-tablet {
      padding: 0px 24px;
      max-width: 100%;
      text-align: center;
      .main-sub-title {
        justify-content: center;
      }
    }
    @include en-mobile {
      padding: 0 24px;
      max-width: 100%;
      text-align: center;
      .main-sub-title {
        justify-content: center;
      }
    }
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
      @include en-tablet {
        max-width: 100%;
      }
      @include en-mobile {
        max-width: 100%;
      }
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
      @include en-tablet {
        padding: 0px 24px;
      }
      @include en-mobile {
        padding: 0px 24px;
      }
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
      @include en-tablet {
        justify-content: center;
        .list-image {
          margin-right: 0;
          width: 100%;
          text-align: center;
        }
      }
      @include en-mobile {
        justify-content: center;
        .list-image {
          margin-right: 0;
          width: 100%;
          text-align: center;
        }
      }
      .list-image {
        margin-right: 70px;
        img {
          width: 400px;
          max-width: 100%;
        }
      }
      .list-items {
        flex: 1;
        .career-list {
          @include flex($dir: column, $justify: space-between);
          .career-item {
            margin-bottom: 32px;
            .item-date {
              @include regular(16);
              @include vertical-center;
              line-height: 40px;
              color: $cr-text-grey;
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
