<template>
  <section class="section-contact w-full min-w-full">
    <div class="blog-visual  w-full">
      <div class="blog-visual__inner mx-auto flex flex-col justify-center gap-[0.875rem] text-white">
          <p class="title-text">Zenerate Blog: Guide, <strong>Tips and Updates</strong></p>
          <p class="sub-title">Step-by-step guide and the latest insights<br> 
            to enhance your feasibility studies</p>
      </div>
    </div>
    <section class="blog-content">
      <div class="blog-content__inner">
          <div class="blog-search__wrap flex">
              <div class="search-wrap flex flex-col justify-center">
                  <label>Search Blogs</label>
                  <div class="input-wrap flex items-center"
                    :class="{ 'is-focused': isInputFocused, 'is-searching': isSearching }"
                  >
                      <i class="ico-search"></i>
                      <button type="button" class="btn-seaarch" @click="searchPost" >
                        <i class="ico-search"></i>
                      </button>
                      <input type="text" v-model="searchText" placeholder="Enter Search"
                          @focus="handleFocus"
                          @blur="handleBlur"
                          @keyup.enter="searchPost"
                          v-show="!searchResult"
                      >
                      <span class="keyword-list"  v-if="searchResult && searchText.trim().length > 0">
                        {{ searchText }}
                        <button type="button" @click="clearKeyword" class="btn-clear-keyword">
                          <i class="ico-x"></i>
                      </button>
                      </span>
                  </div>
              </div>
              <div class="get-trial-box flex flex-col">
                  <div class="text">Get a quick walkthrough and a free trial afterward!</div>
                  <div class="button-group">
                    <button type="button" @click="openCalendlyPopup">Book Demo + Get a Free Trial.</button>
                  </div>
              </div>
          </div>
          <!-- search top -->
          <div class="flex align-center justify-center display-keyword"  v-if="searchResult && searchText.trim().length > 0">
            Showing search result for:  <span>{{ searchText }}</span>  
          </div> 
          <div class="blog-view__wrap flex flex-wrap">             
            <div class="blog-list-items flex flex-col"
              v-for="item in posts" :key="item"
            >
              <router-link
                :to="{ name: 'blog-content', params: { content_id: item.id } }"
              >
                  <div class="thum-img">
                    <div class="title-area">
                      {{ item.title }}
                    </div>
                    <img :src="item.thumbnail" class="pc-img" :alt="item.title" /><img :src="item.thumbnailMo" class="mo-img" :alt="item.title" />
                  </div>
                  <div class="blog-list-content">
                    <div class="cate">{{ item.category }}</div>
                    <div class="title" v-html="highlightKeyword(item.title)"></div>
                    <div class="description" v-html="highlightKeyword(item.sumary)"></div>
                  </div>
              </router-link> 
            </div>

          <!-- 조건 분기: 버튼 또는 메시지 -->
          <div class="w-full text-center py-4 text-sm text-gray-500">
              <!-- 아무 포스트도 없는 경우 (검색 결과 없음 등) -->
              <template v-if="posts.length === 0">
                <div class="flex align-center justify-center no-rusult-msg">
                  No posts found.
                </div>
                <div class="button-bottom">
                  <button type="button" @click="resetPost"><i class="ico-arrow-left"></i> Back</button>
                </div>
              </template>

              <!-- 포스트는 있는데 더 이상 로드할 게 없을 경우 -->
              <!-- <template v-else-if="!hasMore">
                <div class="flex align-center justify-center no-rusult-msg">
                  No more posts to show.
                </div>
              </template> -->

              <!-- 더보기 버튼 노출 조건 -->
              <template v-if="hasMore">
                <div class="button-bottom">
                  <button type="button" @click="loadMore">See More</button>
                </div>
              </template>
          </div>

          </div>
      </div>
    </section>
    <div class="section section-footer fp-auto-height">
      <Footer></Footer>
    </div>
  </section>

</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import Footer from '/Components/Footer.vue';
  import Emitter from '/Libraries/bus'
  import { MENU_EVENT } from '/Constants/eventConstant'

  const allPosts = ref([]);
  const filteredPosts = ref([]);
  const posts = ref([]);
  const searchText = ref('');
  // const pageSize = 12;
  const currentPage = ref(1);
  const hasMore = ref(true);
  const pageSize = ref(12);

  const searchResult = ref(false);
  const isInputFocused = ref(false);
  const isSearching = ref(false)

  const handleFocus = () => {
    isInputFocused.value = true;
  };

  const handleBlur = () => {
    isInputFocused.value = false;
  }

  // 데모 요청 팝업
  const openCalendlyPopup = () => {
    Emitter.emit(MENU_EVENT.TOGGLE_CALENDLY_POPUP, {
      flag: true,
      trigger: 'blog',
    })
  }

// 전체 포스트 불러오기
  onMounted(async () => {
    const isMobile = window.innerWidth <= 767;
    pageSize.value = isMobile ? 6 : 12;

    try {
      const res = await fetch('/posts/postList.json');
      const data = await res.json();
      allPosts.value = data;
      posts.value = data.slice(0, pageSize.value);
      hasMore.value = data.length > pageSize.value;
    } catch (err) {
      console.error('포스트 목록 로딩 오류:', err);
    }
  });

  const clearKeyword = () => {
    searchText.value = '';
    searchResult.value = false;
    posts.value = allPosts.value.slice(0, pageSize.value);
    filteredPosts.value = allPosts.value;
    currentPage.value = 1;
    hasMore.value = allPosts.value.length > pageSize.value;
    isSearching.value = false
  }

  // 검색
  const searchPost = async () => {
    const keyword = searchText.value.trim().toLowerCase();
    if (!keyword) {
      resetPost();
      return;
    }

    try {
        const res = await fetch('/posts/postList.json');
        const postList: any[] = await res.json(); // postList.json 구조 기준

        let matched: any[] = [];

        matched = postList.filter(post =>
          post.title?.toLowerCase().includes(keyword) ||
          post.category?.toLowerCase().includes(keyword) ||
          post.sumary?.toLowerCase().includes(keyword)
        );

        if (matched.length === 0) {
          const detailResults: any[] = [];

          await Promise.all(
            postList.map(async (post) => {
              try {
                const detailRes = await fetch(`/posts/${post.id}.json`);
                const detail = await detailRes.json();

                let foundText = '';

                const foundInSections = detail.sections?.some((section: any) =>
                  section.content?.some((block: any) => {
                    if (typeof block.text === 'string') {
                      if (block.text.toLowerCase().includes(keyword)) {
                        if (!foundText) foundText = block.text;
                        return true;
                      }
                    } else if (Array.isArray(block.text)) {
                      const match = block.text.find((txt: string) =>
                        txt.toLowerCase().includes(keyword)
                      );
                      if (match && !foundText) foundText = match;
                      return !!match;
                    }
                    return false;
                  })
                );

                if (foundInSections) {
                  detailResults.push({
                    ...post,
                    sumary: foundText // 카드 하단에 표시될 요약 텍스트로 활용됨
                  });
                }
              } catch (e) {
                console.warn(`${post.id}.json 파일 로드 실패`, e);
              }
            })
          );

          matched = detailResults;
        }

        filteredPosts.value = matched;
        posts.value = matched.slice(0, pageSize.value);
        hasMore.value = filteredPosts.value.length > pageSize.value;

        currentPage.value = 1;
        searchResult.value = true;
        isSearching.value = true;
      } catch (err) {
        console.error('검색 중 오류 발생:', err);
      }
  }

  // 더보기
  const loadMore = () => {
    const nextPage = currentPage.value + 1;
    const source = searchResult.value ? filteredPosts.value : allPosts.value;
    const nextPosts = source.slice(0, nextPage * pageSize.value);

    if (nextPosts.length === posts.value.length) {
      hasMore.value = false;
      return;
    }

    posts.value = nextPosts;
    currentPage.value = nextPage;
    // hasMore.value = nextPosts.length < source.length;
    hasMore.value = source.length > nextPage * pageSize.value;
  };

  // 초기화
  const resetPost = () => {
    searchText.value = '';
    searchResult.value = false;
    filteredPosts.value = allPosts.value;
    posts.value = allPosts.value.slice(0, pageSize.value);
    currentPage.value = 1;
    // hasMore.value = posts.value.length < allPosts.value.length;
    hasMore.value = allPosts.value.length > pageSize.value;
    isSearching.value = false
  };

  // 키워드
  const highlightKeyword = (text: string) => {
    if (!searchResult.value || !searchText.value.trim()) return text;

    const keyword = searchText.value.trim();
    const regex = new RegExp(`(${keyword})`, 'gi');
    return text.replace(regex, '<span style="color: #4D49F4;">$1</span>');
  };
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
    height: calc(218 / 16 * 1rem);
    background-position: center center;
    background-repeat: repeat-x;
      @media only screen and (min-width: 1601px) {
        background-image: url('/img/header_blog_bg_full.png');
      }
      @media only screen and (max-width: 1600px) {
        padding: 0 calc(60 / 16 * 1rem);
        background-image: url('/img/header_blog_bg_pc.png');
      }
      @media only screen and (max-width: 1023px) {
        padding: 0 calc(40 / 16 * 1rem);
        background-image: url('/img/header_blog_bg_mo.png');
      }
      @media only screen and (max-width: 767px) {
        padding: 0 calc(20 / 16 * 1rem);
        background-image: url('/img/header_blog_bg_mo1.png');
      }
    .blog-visual__inner {
      width: 100%;
      height: 100%;
      max-width: calc(1200 / 16 * 1rem);
      gap: calc(14 / 16 * 1rem);
      .title-text {
        font-weight: 600;
        line-height: 135%;
        letter-spacing: 0%;
        font-size: calc(32 / 16 * 1rem);        
        @media only screen and (min-width: 360px) and (max-width: 767px) {
          font-size: calc(19 / 16 * 1rem);      
          strong {
            display: block;
          }
        }
      }
      .sub-title {
        font-weight: 400;
        font-size: calc(18 / 16 * 1rem);
        line-height: 135%;
        letter-spacing: 0%;
        @media only screen and (min-width: 360px) and (max-width: 767px) {
          font-size: calc(14 / 16 * 1rem);      
        }
      }
    }
  }
  .display-keyword {
        padding: calc( 40 / 16 * 1rem) 0 0;
        font-family: Poppins;
        font-weight: 400;
        font-size: calc(18 / 16 * 1rem);
        line-height: 135%;
        span {
          margin-left: 10px;
          color: #4D49F4;
        }
  }
  .blog-content {
    background: #F4F6F9;
    padding: calc(30 / 16 * 1rem) 0 calc(100 / 16 * 1rem);
    .blog-content__inner {
      max-width: calc(1200 / 16 * 1rem);
      width: 100%;
      margin: 0 auto;
      @media only screen and (min-width: 1221px) and (max-width: 1600px) {
        padding: 0 calc(60 / 16 * 1rem);
      }
      @media only screen and (max-width: 1200px) {
        padding: 0 calc(40 / 16 * 1rem);
      }
      @media only screen and (min-width: 360px) and (max-width: 767px) {
        padding: 0 calc(20 / 16 * 1rem);
      } 
    }
    .blog-search__wrap {
      padding: calc(20 / 16 * 1rem) 0;
      .search-wrap {
        position: relative;
        width: 50%;
        height: calc(84 / 16 * 1rem);
        padding-right: calc(34 / 16 * 1rem);
        label {
          font-weight: 400;
          font-size: calc(16 / 16 * 1rem);
          line-height: 160%;
          letter-spacing: 0px;
          color: #000729;
          display: block;
        }
        .input-wrap {
          margin-top: 10px;
          position: relative;
          width: 100%;
          border: 1px solid #CBCDD2;
          border-radius: calc(8 / 16 * 1rem);
          height: calc(48 / 16 * 1rem);
          background: #FAFBFC;
          overflow: hidden;
          .keyword-list {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: calc(1 / 16 * 1rem);
            font-size: calc(16 / 16 * 1rem);
            margin-left: calc(16 / 16 * 1rem);
            color:#000729;
          }
          &.is-searching,
          &.is-focused {
            border: 1px solid #4D49F4;
            font-family: Poppins;
            i.ico-search {
              opacity: 0;
            }
            .btn-seaarch i.ico-search,
            .btn-seaarch {
              opacity: 1;
            }
            input {
              margin-left: calc(16 / 16 * 1rem);
              color:#000729;
              font-family: Poppins;
              &::placeholder {
                opacity: 1;              
              }
          }
          }
          i.ico-search {
            width: calc(24 / 16 * 1rem);
            height: calc(24 / 16 * 1rem);
            position: absolute;
            display: block;
            left: 8px;
            top: 50%;
            transform: translateY(-50%);
            &::before {
              content: '';
              display: block;
              width: 100%;
              height: 100%;
              background: url('/img/ico_search.svg') no-repeat;
              background-size: 100% auto;
            }
          }
          input {
            border: 0;
            height: calc(45 / 16 * 1rem);
            width: calc(100% - calc(30 / 16 * 1rem));
            font-size: calc(16 / 16 * 1rem);
            font-family: Poppins;
            background: transparent;
            margin-left: calc(37 / 16 * 1rem);
            &::placeholder {
              opacity: 0;
              transition: opacity 0.2s ease;
            }
          }
          .btn-clear-keyword {
            width: calc(18 / 16 * 1rem);
            height: calc(18 / 16 * 1rem);
              // position: absolute;
              // right: calc(20 / 16 * 1rem);
              // top: 50%;
              // transform: translateY(-50%);
              i.ico-x {
                width: calc(18 / 16 * 1rem);
                height: calc(18 / 16 * 1rem);
                display: block;
                &::before {
                  content: '';
                  display: block;
                  width: 100%;
                  height: 100%;
                  background: url('/img/ico_x.svg') no-repeat;
                  background-size: 100% auto;
                }
              }
          }
          .btn-seaarch {
            opacity: 0;
            width: calc(24 / 16 * 1rem);
            height: calc(24 / 16 * 1rem);
            position: absolute;
            background: transparent;
            right: calc(16 / 16 * 1rem);
            top: 50%;
            transform: translateY(-50%);
          }
        }
        &::after {
          content: '';
          display: block;
          width: 1px;
          height: calc(84 / 16 * 1rem);
          background: #D9D9D9;
          position: absolute;
          right: 0;
          top:0;
        }
      }
      .get-trial-box {
        padding-left: calc(34 / 16 * 1rem);
        gap: calc(8 / 16 * 1rem);
        .text {
          font-weight: 400;
          font-size: calc(16 / 16 * 1rem);
          line-height: 160%;
          letter-spacing: 0px;
          vertical-align: middle;
          color: #000729;
        }
        .button-group {
          button {
            font-family: Poppins;
            background-color: #32353D;
            height: calc(48 / 16 * 1rem);
            width: calc(272 / 16 * 1rem);
            border-radius: calc(5 / 16 * 1rem);
            font-weight: 500;
            font-size: 16px;
            line-height: 135%;
            letter-spacing: 0px;
            text-align: center;
            color: #fff;
            transition-duration: 300ms;
            &:hover {
              background: #000729;
              transition: all 0.3s;
            }
          }
        }
      }
      @media only screen and  (max-width: 1200px) {
          padding: 0;
          flex-direction: column;
          align-items: center;
          max-width: calc(414 / 16 * 1rem);
          margin: 0 auto;
          gap: calc(26 / 16 * 1rem);
          .search-wrap {
            padding-right: 0;
            width: 100%;
            &::after {
              display: none;
            }
          }
          .get-trial-box { 
            padding-left: 0;
            width: 100%;            
            font-weight: 400;
            font-size: calc(16 / 16 * 1rem);
            line-height: 160%;
            .button-group {
              button {
                width: 100%;
              }
            }
          }
      }
      @media only screen and (min-width: 360px) and (max-width: 767px) {
        max-width: 100%;
        .get-trial-box {
          display: none;
        }
      } 
    }
    .blog-view__wrap {
      max-width: calc(1200 / 16 * 1rem);
      width: 100%;
      margin: calc(30 / 16 * 1rem) auto 0;
      gap: calc(24 / 16 * 1rem);
      @media only screen and  (max-width: 1200px) {
        margin: calc(66 / 16 * 1rem) auto 0;
      }
      @media only screen and  (max-width: 768px) {
        margin: calc(36 / 16 * 1rem) auto 0;
      }
      .blog-list-items {
        box-shadow: 0px 0px 8px 0px #00000014;
        // height: calc(427 / 16 * 1rem);
        width: calc((100% / 3) - calc(20 / 16 * 1rem));
        border-radius: calc(10 / 16 * 1rem);
        overflow: hidden;
        &:hover {
          background: #00000014;
          .blog-list-content {
            background: #E7E9F1;
            transition: all 0.3s;
          }
        }
        @media only screen and  (max-width: 1200px) {
          width: calc((100% / 2) - calc(20 / 16 * 1rem));
        }
        @media only screen and (min-width: 360px) and (max-width: 767px) {
          width: calc((100% / 1) - calc(0 / 16 * 1rem));
        }
        .thum-img {
          height: calc(207 / 16 * 1rem);
          width: 100%;
          overflow: hidden;
          box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
          position: relative;
          &::after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            left:0;
            top:0;
            background: rgba(0, 7, 41, 0.4);
          }
          .title-area {
            width: 100%;
            height: 100%;
            position: absolute;
            left:0;
            top:0;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            font-weight: 600;
            line-height: 135%;
            letter-spacing: 0%;
            font-size: calc(28 / 16 * 1rem);    
            color: #fff;
            z-index: 11;
            text-align: right;
            word-break: keep-all;
            padding: calc(20 / 16 * 1rem);
          }
          @media only screen and (max-width: 1200px) {
            // height: calc(220 / 16 * 1rem);
            aspect-ratio: 16 / 11;
          }
          img {
            width: 100%;
            &.mo-img {
              display: none;
            }
            &.pc-img {
              display: block;
            }
            @media only screen and (max-width: 768px) {
              &.mo-img {
              display: block;
              }
              &.pc-img {
                display: none;
              }
            }
          }
        }
        .blog-list-content {
          box-shadow: 0px 0px 8px 0px #00000026;
          gap: calc(20 / 16 * 1rem);
          height: calc(207 / 16 * 1rem);
          background: #fff;
          padding: calc(24 / 16 * 1rem) calc(32 / 16 * 1rem) calc(32 / 16 * 1rem);
          @media only screen and (max-width: 768px) {
            height: auto;
          }
          .cate {
            color: #00A3FF;
            font-family: Poppins;
            font-weight: 500;
            font-size: calc(14 / 16 * 1rem);
            line-height: 135%;
            letter-spacing: 0px;
            vertical-align: middle;
            margin-bottom: calc(12 / 16 * 1rem);
          }
          .title {
            font-weight: 600;
            font-size: calc(20 / 16 * 1rem);
            line-height: 150%;
            letter-spacing: 0px;
            vertical-align: middle;
            margin-bottom: calc(8 / 16 * 1rem);
            color: #000729;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            span {
              color: #4D49F4;
            }
            @media only screen and (max-width: 768px) {
              -webkit-line-clamp: 2;
            }
          }
          .description {
            color: #000729;
            font-weight: 400;
            font-size: calc(16 / 16 * 1rem);
            line-height: 160%;
            letter-spacing: 0px;
            vertical-align: middle;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            span {
              color: #4D49F4;
            }
          }
        }
      }
    }
    .button-bottom {
      margin-top: calc(60 / 16 * 1rem);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      .ico-arrow-left {
        width: calc(24 / 16 * 1rem);
        height: calc(24 / 16 * 1rem); 
        display: inline-flex;
        margin-right: 8px;
        &::before {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          background: url('/img/ico_arrow_left.svg') no-repeat;
          background-size: 100% auto;
        }
      }
      button {
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
        background: transparent;
        &:hover {
          background: #0007291A;
          transition: all 0.3s;
        }
      }
    }
    .no-rusult-msg {
      padding: calc(100 / 16 * 1rem) 0;
    }
  }
}
</style>
