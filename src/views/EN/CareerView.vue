<template>
  <div id="fullpage-career">
    <section class="section section-careers fp-auto-height-responsive">
      <div class="section-main">
        <div class="section-inner main-wrapper">
          <div
            class="inner-main"
            data-aos="fade-up"
            data-aos-offset="-1500"
            data-aos-duration="500"
            data-aos-anchor-placement="top-center"
          >
            <div class="main-sub-title">
              <p>Build your life <span>with us</span></p>
              <!-- <img src="/img/logo.webp" alt="" /> -->
            </div>
            <p class="main-content">
              <span>Join Zenerate as we innovate architectural planning</span>
              ​<span>and improve</span> ​<span> living standards</span> ​<span
                >for your communities.</span
              >
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
const fullpage = computed(() => Store.state.root.FullPage)

onMounted(() => {
  if (fullpage.value) {
    fullpage.value.destroy()
  }
})

import { useMeta } from 'vue-meta'
const { meta } = useMeta({
  title: 'Career | Zenerate',
  description:
    'Join Zenerate to work with the most passionate and intelligent team in the world.',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content:
        'Join Zenerate to work with the most passionate and intelligent team in the world.',
    },
  ],
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai/career' }],
  og: {
    url: 'https://www.zenerate.ai/career',
    type: 'website',
    title: 'Career Us | Zenerate',
    description: `Join Zenerate to work with the most passionate and intelligent team in the world.`,
    tags: 'zenerate',
    keywords: 'zenerate',
    image: 'https://www.zenerate.ai/img/logo_og.png',
  },
  twitter: {
    title: 'Career Us | Zenerate',
  },
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
    padding: 0px 40px;
    @include en-tablet {
      padding: 0px 34px;
      max-width: 100%;
      text-align: center;
      .main-sub-title {
        justify-content: center;
        p {
          @include regular(36);
          span {
            @include semi-bold(36);
          }
        }
      }
      .main-content {
        max-width: 660px;
        width: 100%;
        margin: 0px auto;
        line-height: 23px;
      }
    }
    @include en-mobile {
      padding: 0px 24px;
      max-width: 100%;
      text-align: center;

      .main-sub-title {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
          @include regular(24);
          span {
            @include semi-bold(24);
          }
        }
      }
      .main-content {
        max-width: 200px;
        margin: auto;
      }
    }
  }

  .main-wrapper {
    @include vertical-center;
    width: 100%;
    height: 450px;
    color: white;
    margin: 0 auto;
    position: relative;

    @include en-tablet {
      margin: 0px;
    }
    .main-title {
      @include bold(36);
      font-weight: 500;
      line-height: 40px;
    }
    .main-sub-title {
      @include flex($dir: row);
      p {
        @include regular(40);
        margin-right: 10px;
        line-height: 50px;
        span {
          @include semi-bold(40);
        }
      }
      img {
        width: 200px;
        height: 50px;
      }

      @include en-tablet {
        justify-content: flex-start;
        align-items: flex-end;
        span {
          @include regular(20);
        }
      }
    }
    .main-content {
      @include regular(18);
      padding-top: 28px;
      max-width: 600px;
      @include en-tablet {
        max-width: 600px;
        margin: 0px;
        text-align: left;
        span {
          @include regular(16);
        }
      }
      @include en-mobile {
        @include regular(14);
      }
    }
  }
}
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

      @include en-mobile {
        @include bold(28);
      }
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
              color: $text-grey;
            }
            .item-title {
              @include medium(24);
              line-height: 40px;
              // 무슨 컬러?
              color: #161616;
              border-bottom: solid 1px $text-lightgrey;
              &:hover {
                color: $main-blue;
                border-bottom-color: $main-blue;
              }

              @include en-mobile {
                @include medium(16);
              }
            }
          }
        }
      }
    }
  }
}
</style>
