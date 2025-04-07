<template>
    <section class="w-full min-w-full section-contact">
        <div class="w-full blog-visual"
          :style="{ backgroundImage: bgImage }"
        >
          <div class="flex flex-col items-start justify-center text-white blog-visual__inner" v-if="post">
              <p class="cate" v-if="post.category">{{post.category}}</p>
              <p class="title-text" v-if="post.title" v-html="post.title"></p>
              <p class="post-date">Updated on {{ post.createdAt }}</p>
              <p class="bottom-wrap">
                  <button
                    class="demo-button-gtm text-14-medium mx-auto h-[36px] w-[221px] rounded-5 bg-primary btn-get-demo text-center leading-[36px] !text-white duration-300"
                    @click="openCalendlyPopup"
                  >
                    Book Demo + Get a Free Trial
                  </button>
              </p>
          </div>
        </div>
        <!-- //hrefo -->
        <div class="blog-content">
          <div class="blog-content__inner flex justify-between">
            <div class="blog-category-wrap" v-if="post && post.sections"
              :class="{ 'is-fixed': isFixed }"
              ref="categoryRef"
            >
              <button 
                type="button"
                class="cate-select-mo"
                :class="{ 'is-active': isMoCateActive }"
                @click="handleMocateDrop"
              >
                {{ selectedLabel }}
              </button>
              <ul :class="{ 'is-active': isMoCateActive }">
                <li
                  v-for="(section, index) in headingSections"
                  :key="index"
                  :class="{ 'is-active': activeIndex === index }"
                >
                <a
                  :href="`#section${section.type === 'prolog' ? index + 1 : index}`"
                  @click.prevent="handleMoveSection(section.type === 'prolog' ? index + 1 : index)"
                >
                    {{ section.text }}
                  </a>
                </li>
              </ul>
            </div>
              <!-- //카테고리 -->
              <div class="post-content__wrap"
                :class="{ 'is-fixed': isFixed }"
                ref="categoryRef"
              >
              <div
              class="post-section"
                v-for="(section, index) in post.sections"
                :key="index"
                v-if="post && post.sections"
                :id="section.content[0]?.type !== 'prolog' ? `section${getVisibleIndex(index)}` : null"
              >
                  <template v-for="(block, blockIndex) in section.content" :key="blockIndex">
                    <h2 v-if="block.type === 'heading' && block.level === 2">{{ block.text }}</h2>
                    <h3 v-else-if="block.type === 'heading' && block.level === 3">{{ block.text }}</h3>
                    <p v-else-if="block.type === 'paragraph'" v-html="block.text"></p>
                    <div v-else-if="block.type === 'list'">
                      <ul v-if="!block.ordered">
                        <li v-for="(item, i) in block.text" :key="i" v-html="item"></li>
                      </ul>
                      <ol v-else>
                        <li v-for="(item, i) in block.text" :key="i" v-html="item"></li>
                      </ol>
                    </div>
                    <img v-else-if="block.type === 'image'" :src="block.url" :alt="block.alt || ''" />
                    <div v-else-if="block.type === 'button'">
                        <button
                          class="demo-button-gtm text-14-medium mx-auto h-[36px] w-[221px] rounded-5 bg-primary text-center btn-get-demo leading-[36px] !text-white duration-300 mt-[20px]"
                          @click="openCalendlyPopup"
                        >
                          {{ block.text }}
                        </button>
                    </div>
                  </template>
                </div>

              </div>
          </div>
        </div>
        <div class="section section-footer fp-auto-height">
          <Footer></Footer>
        </div>
    </section>

</template>
<script lang="ts" setup>
import { ref, onMounted, computed, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { resolve } from 'path';
import Emitter from '/Libraries/bus'
import { MENU_EVENT } from '/Constants/eventConstant'
import Footer from '/Components/Footer.vue';

defineProps({
  content_id: {
    type: String,
    required: true,
  },
})
const openCalendlyPopup = () => {
  Emitter.emit(MENU_EVENT.TOGGLE_CALENDLY_POPUP, {
    flag: true,
    trigger: 'blogView',
  })
}

const selectedLabel = ref('Explore Article Topics')
const isMoCateActive = ref(false)

const handleMocateDrop = () => {
  isMoCateActive.value = !isMoCateActive.value
}

const route = useRoute()
const postId = route.params.content_id
const post = ref<any>(null)
const activeIndex = ref(0)

const bgImage = ref(''); // 배경 이미지 URL

const updateBgImage = () => {
  if (!post.value) return;

  const width = window.innerWidth;

  // 기본값은 PC 이미지로 먼저 설정
  let imageUrl = post.value.coverImage;

  if (width >= 1601) {
    imageUrl = post.value.coverImage;
  } else if (width >= 1221 && width <= 1600) {
    imageUrl = post.value.coverImageMiniPc;
  } else if (width >= 768 && width <= 1200) {
    imageUrl = post.value.coverImageTablet;
  } else {
    imageUrl = post.value.coverImageMo;
  }

  bgImage.value = `url('${imageUrl}')`;
};

watch(post, (newPost) => {
  if (newPost) {
    updateBgImage()
  }
})

const getResponsiveOffset = () => {
  return window.innerWidth <= 1200 ? -250 : -150;
}

const headingSections = computed(() => {
  if (!post.value || !post.value.sections) return []

  return post.value.sections
    .map(section => section.content.find(item => item.type === 'heading' && item.level === 2))
    .filter(Boolean) // null 또는 undefined 제거
})

onMounted(async () => {
  try {
    const res = await fetch(`/posts/${postId}.json`)
    if (!res.ok) throw new Error('파일을 불러올 수 없습니다.')
    post.value = await res.json()
  } catch (err) {
    console.error('포스트 로딩 오류:', err)
  }
})
const handleMoveSection = (index: number) => {
  const sectionEl = document.getElementById(`section${index}`)
  if (sectionEl) {
    // const yOffset = -150 // 필요 시 header 높이만큼 보정
    const yOffset = getResponsiveOffset();
    const y = sectionEl.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })

    activeIndex.value = index
    selectedLabel.value = headingSections.value[index]?.text || 'Explore Article Topics'
    isMoCateActive.value = false // 선택 후 드롭다운 닫기
  }
}


// 스크롤에 따라 현재 섹션 체크
const updateActiveSectionOnScroll = () => {
  // const offset = 100 // header 높이만큼 보정
  const offset = Math.abs(getResponsiveOffset());
  const positions = headingSections.value.map((_, index) => {
    const el = document.getElementById(`section${index}`)
    return el ? el.getBoundingClientRect().top : Infinity
  })

  const visibleIndex = positions.findIndex(pos => pos > offset * -1 && pos < window.innerHeight / 2)
  if (visibleIndex !== -1 && visibleIndex !== activeIndex.value) {
    activeIndex.value = visibleIndex
  }
}


const categoryRef = ref<HTMLElement | null>(null)
const isFixed = ref(false)

const handleScrollForFixing = () => {
  if (!categoryRef.value) return

  const threshold = 300 // 필요에 따라 조정 (픽셀 기준)
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  // isFixed.value = scrollTop > threshold

  // post-content__wrap 엘리먼트 기준으로 끝점 계산
  const contentEl = document.querySelector('.post-content__wrap') as HTMLElement;
  const contentBottom = contentEl?.offsetTop + contentEl?.offsetHeight || 0;
  

  // const scrollBottom = scrollTop + window.innerHeight;
  // let mobileSize = window.innerWidth <= 1020;
  // if(!mobileSize) {
  //   if (scrollTop > threshold && scrollBottom < contentBottom) {
  //     isFixed.value = true;
  //   } else { 
  //     isFixed.value = false;  
  //   }
  // } else {
  //   if (scrollTop > threshold) {
  //     isFixed.value = true;
  //   } else { 
  //     isFixed.value = false;  
  //   }
  // }
  if (scrollTop > threshold) {
    isFixed.value = true;
  } else { 
    isFixed.value = false;  
  }
}

const getVisibleIndex = (index: number): number => {
  if (!post.value?.sections) return 0;

  return post.value.sections
    .slice(0, index)
    .filter(section => section.content[0]?.type !== 'prolog').length;
};

onMounted(() => {
  window.addEventListener('scroll', updateActiveSectionOnScroll)
  window.addEventListener('scroll', handleScrollForFixing)
  // updateBgImage(); // post 로딩 직후 바로 배경 이미지 설정
  window.addEventListener('resize', updateBgImage);
  // window.addEventListener('load', updateBgImage);
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSectionOnScroll)
  window.removeEventListener('scroll', handleScrollForFixing)
  window.removeEventListener('resize', updateBgImage);
})
</script>

<style lang="scss" scoped>
.section-contact {
  @include relative;
  font-family: Poppins;
  padding-top: 111px;
  @media only screen and (max-width: 1023px) {
    padding-top: 105px;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 93px;
  }
  .blog-visual {    
    height: calc(314 / 16 * 1rem);
    position: relative;
    background-position: center center;   
    background-size: cover;
    background-repeat: no-repeat;
    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: calc(314 / 16 * 1rem);
      background: #00072980;
    }
      @media only screen and (max-width: 1600px) {
        padding: 0 calc(60 / 16 * 1rem);
      }
      @media only screen and (max-width: 1200px) {
        padding: 0 calc(60 / 16 * 1rem);
      }
      @media only screen and (max-width: 1023px) {
        padding: 0 calc(40 / 16 * 1rem);
      }
      @media only screen and (max-width: 767px) {
        padding: 0 calc(20 / 16 * 1rem);
        height: calc(240 / 16 * 1rem);
      }
    .blog-visual__inner {
      @include relative;
      width: 100%;
      height: 100%;
      max-width: calc(1200 / 16 * 1rem);
      margin: 0 auto;      
      z-index: 10;
      @media only screen and (max-width: 767px) {
          align-items: center;
          justify-content: center;
          word-break: keep-all;
          text-align: center;
        }
      .cate {
        color: #7ACFFF;
        font-weight: 500;
        font-size: calc(14 / 16 * 1rem);
        line-height: 135%;
        letter-spacing: 0px;
        vertical-align: middle;
        margin-bottom: calc(10 / 16 * 1rem);
        @media only screen and (max-width: 767px) {
          font-size: calc(12 / 16 * 1rem);      
          margin-bottom: calc(4 / 16 * 1rem);
        }
      }
      .title-text {
        font-weight: 500;
        line-height: 135%;
        letter-spacing: 0%;
        font-size: calc(32 / 16 * 1rem);   
        margin-bottom: calc(4 / 16 * 1rem);    
        word-break: keep-all;
        box-shadow: #00072914;
        strong {
          display: block;
        } 
        @media only screen and (max-width: 767px) {
          font-size: calc(26 / 16 * 1rem);    
          margin-bottom: calc(0 / 16 * 1rem);  
          strong {
            display: block;
          }
        }
      }
      .post-date {
        font-weight: 400;
        font-size: calc(16 / 16 * 1rem);
        line-height: 135%;
        letter-spacing: 0%;
        margin-bottom: calc(18 / 16 * 1rem);
        @media only screen and (max-width: 767px) {
          font-size: calc(12 / 16 * 1rem);      
          margin-bottom: calc(20 / 16 * 1rem);    
        }
      }
    }
  }
  .blog-content {
    // background: #F4F6F9;
    padding: calc(0 / 16 * 1rem) 0 calc(100 / 16 * 1rem);
    overflow: visible;
    min-height: calc(500 / 16 * 1rem);
    .blog-content__inner {
      max-width: calc(1200 / 16 * 1rem);
      width: 100%;
      margin: 0 auto;
      padding-top: calc(70 / 16 * 1rem);
      gap: calc(60 / 16 * 1rem);
      overflow: visible;
      align-items: flex-start;
      @media only screen and (max-width: 1296px) {
        max-width: 100%;
        // gap: calc(40 / 16 * 1rem);
      }
      @media only screen and (max-width: 1023px) {
        flex-direction: column;
        padding-top: calc(0 / 16 * 1rem);
      }
      @media only screen and (max-width: 761.9px) {
        
      }
      .blog-category-wrap {
        width: 100%;
        min-width: calc(322 / 16 * 1rem);
        max-width: calc(322 / 16 * 1rem);
        z-index: 10;
        @media only screen and (max-width: 1296px) {
          margin-left: 60px;
        }
        @media only screen and (max-width: 1023px) {
          min-width: 100%;
          max-width: 100%;
          margin: 0 auto;
          position: relative;
          background: #fff;
          height: calc(116 / 16 * 1rem);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 40px;
          margin-left:0;
        }
        @media only screen and (max-width: 768px) {
          padding: 0 20px;
        }
        .cate-select-mo {
          @include relative;
          font-family: Poppins;
          width: 100%;
          border: 1px solid #CBCDD2;
          height: calc(48 / 16 * 1rem);
          display: none;
          align-items: center;
          justify-content: space-between;
          padding-right: calc(16 / 16 * 1rem);
          padding-left: calc(16 / 16 * 1rem);          
          margin: 0 auto;
          border-radius: 8px;
          font-weight: 400;
          font-size: calc(18 / 16 * 1rem);
          line-height: 135%;
          letter-spacing: 0px;
          vertical-align: middle;     
          color: #000729;    
          &::after {
            content: '';
            display: inline-flex;
            width: calc(10 / 16 * 1rem);
            height: calc(6 / 16 * 1rem);
            background: url('/img/ico_arrow.svg') no-repeat;
            background-size: 100% auto;
          }
          &.is-active {
            border: 1px solid #5C6DFF;   
            color:#A6A9B0;
            &::after {
              transition: all 0.3s;
              transform: rotate(-180deg);
            }
        }
          @media only screen and (max-width: 1023px) {
            display: flex;
          }
        }
        &.is-fixed {
          position: fixed;
          top: 120px;
          left: 50%;
          transform: translateX(-600px);
          @media only screen and (max-width: 1296px) {
            left: 60px;
            transform: translateX(0);
            margin-left:0;
          }
          @media only screen and (max-width: 1023px) {
            left: 0px;
            top: calc(105 / 16 * 1rem);
            box-shadow: 0px 4px 8px 0px #00000014;
            transition: all 0.3s;
          }
          @media only screen and (max-width:768px) {            
            top: calc(93 / 16 * 1rem);
          }
        }
        ul {
          display: block;
          @media only screen and (max-width: 1023px) {
            display: none;
            &.is-active {
              display: block;
              width: calc(100%  - 80px);
              position: absolute;
              left:40px;
              top: calc(85 / 16 * 1rem);
              border: 1px solid #D2D4DA;
              border-radius: 8px;
              background: #fff;
              box-shadow: #00000014;
              @media only screen and (max-width: 768px) {
                width: calc(100%  - 40px);
                left:20px;
              }
            }
          }
          li {
            padding: 0 calc(2 / 16 * 1rem);
            border-bottom: 1px solid #E3E3E8;
            font-size: calc(18 / 16 * 1rem);
            color: #484A4F;
            line-height: 155%;
            strong {
              font-weight: 600;
            }
            &:hover {
                background: #F2F2F5;
              }
            @media only screen and (max-width: 1023px) {
              border-bottom:0;
              padding: 0 calc(2 / 16 * 1rem);              
              background: transparent;
              &:hover {
                a {
                  background: #F2F2F5;
                  border-radius: 6px;
                }
              }
            }
            &.is-active {
              a {
                color: #4D49F4;
              }
            }
            a {
              height: calc(55 / 16 * 1rem);
              display: block;
              display: flex;
              align-items: center;
              font-weight: 500;
              font-size: calc(18 / 16 * 1rem);
              line-height: 135%;
              letter-spacing: 0px;
              padding-left: calc(16 / 16 * 1rem);
              font-family: 'Pretendard', Arial;
              @media only screen and (max-width: 1023px) {
                height: calc(38 / 16 * 1rem);
              }
            }
          }
        }
      }
      .post-content__wrap {
        width: calc(100% - calc(322 / 16 * 1rem));
        @media only screen and (max-width: 1296px) {
          padding: 0px 60px 0 0;
        }
        @media only screen and (max-width: 1023px) {
            width: 100%;            
            margin: 0 auto;
            padding: 0px 40px;
        }
        @media only screen and (max-width: 768px) {
          padding: 0px 20px;
        }
        &.is-fixed {
          padding-left: calc(382 / 16* 1rem);

          width: 100%;
          @media only screen and (max-width: 1296px) {
            padding-left: 442px;
            margin: 0 auto;
          }
          @media only screen and (max-width: 1023px) {
            width: calc(100% - calc(322 / 16 * 1rem));
            width: 100%;
            padding: 0 calc(40 / 16 * 1rem);
          }
          @media only screen and (max-width: 768px) {
            padding: 0px 20px;
          }
        }
        .post-section {
          img {
              max-width: 100%;
              margin: calc(20 / 16 * 1rem) 0;
          }
          &:first-child {
              h2 {
                margin-top: 0;
              }              
            }
          h2 {
            color: #000729;
            font-family: Poppins;
            font-weight: 700;
            font-size: calc(32 / 16 * 1rem);
            line-height: 135%;
            letter-spacing: 0%;
            vertical-align: middle;
            margin-top: calc(80 / 16 * 1rem);
              @media only screen and (max-width: 768px) {
                font-size: calc(24 / 16 * 1rem);
              }
            }
          p {
            font-weight: 400;
            font-size: calc(18 / 16 * 1rem);
            line-height: 155%;
            letter-spacing: 0px;
            vertical-align: middle;
            color: #484A4F;
            a {
              &:link {
                text-decoration: underline  !important;
                color: #5C6DFF !important;
              }              
            }
            @media only screen and (max-width: 768px) {
                font-size: calc(18 / 16 * 1rem);
              }
            &+h2 {
              margin-top: calc(20 / 16 * 1rem);
            }
            &+p {
              margin-top: calc(20 / 16 * 1rem);
            }
          }
          h3 {
            color: #000729;
            font-weight: 600;
            font-size: calc(24 / 16 * 1rem);
            line-height: 135%;
            letter-spacing: 0px;
            vertical-align: middle;
            @media only screen and (max-width: 768px) {
                font-size: calc(22 / 16 * 1rem);
              }
          }
          ol {
            margin: calc(20 / 16 * 1rem) 0;
            padding: 0;
            li {
              list-style: none;
              font-size: calc(18 / 16 * 1rem);
              line-height: 155%;
              color: #484A4F;
              @media only screen and (max-width: 768px) {
                font-size: calc(18 / 16 * 1rem);
              }
              &+li {
                margin-top: 5px;
              }
              a {
                &:link {
                  text-decoration: underline  !important;
                  color: #5C6DFF !important;
                }              
              }
            }
          }
          ul {
            margin: calc(20 / 16 * 1rem) 0;
            li {
              position: relative;
              padding-left: calc(10 / 16 * 1rem);
              font-size: calc(18 / 16 * 1rem);
              line-height: 155%;
              color: #484A4F;
              a {
                &:link {
                  text-decoration: underline  !important;
                  color: #5C6DFF !important;
                }              
              }
              @media only screen and (max-width: 768px) {
                font-size: calc(18 / 16 * 1rem);
              }
              &::before {
                content: '';
                width: calc(3 / 16 * 1rem);
                height: calc(3 / 16 * 1rem);
                border-radius: 50%;
                background-color: #6A6D73;
                position: absolute;
                left: 0;
                top: 10px;
              }
              &+li {
                margin-top: 5px;
              }
            }
          }
          a {
            text-decoration: underline  !important;
            color: #5C6DFF !important;
          }              
        }
      }
    }
    .blog-view__wrap {
      max-width: calc(1200 / 16 * 1rem);
      width: 100%;
      margin: calc(32 / 16 * 1rem) auto 0;
      gap: calc(24 / 16 * 1rem);
    }
    .button-bottom {
      margin-top: calc(32 / 16 * 1rem);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      button {
        font-family: Poppins;
        width: calc(110 / 16 * 1rem);
        height: calc(50 / 16 * 1rem);
        border-radius: 30px;      
        border: 1px solid #6A6D73;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000729;
        font-weight: 500;
        font-size: calc(16 / 16 * 1rem);
        line-height: 135%;
        letter-spacing: 0px;
        vertical-align: middle;
      }
    }
  }
}
.bg-primary {
  &.btn-get-demo {
    font-family: Poppins;
    background: #4D49F4;
    @media only screen and (max-width: 768px) {
      white-space: nowrap;
      width: fit-content;
    }
    &:hover {
      background: #3E3CCB;
    }
  }
}
.link {
  // text-decoration: underline  !important;
  color: #5C6DFF !important; 
}
</style>
