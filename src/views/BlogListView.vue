<template>
  <section class="section-contact w-full min-w-full pt-[111px]">
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
                  <div class="input-wrap flex items-center">
                      <i class="ico-search"></i>
                      <input type="text">
                  </div>
              </div>
              <div class="get-trial-box flex flex-col">
                  <div class="text">Get a quick walkthrough and a free trial afterward!</div>
                  <div class="button-group">
                    <button type="button">Book Demo + Get a Free Trial.</button>
                  </div>
              </div>
          </div>
          <!-- search top -->
          <div class="blog-view__wrap flex flex-wrap">
              <!-- 결과 없을 때 메시지 -->
            <div class="blog-list-items flex flex-col"
              v-for="item in posts" :key="item"
            >
              <router-link
                :to="{ name: 'blog-content', params: { content_id: item.id } }"
              >
                  <div class="thum-img">
                    <img :src="item.thumbnail" :alt="item.title" />
                  </div>
                  <div class="blog-list-content">
                    <div class="cate">{{ item.category }}</div>
                    <div class="title">{{ item.title }}</div>
                    <div class="description">{{ item.sumary }}</div>
                  </div>
              </router-link> 
            </div>

          <!-- 조건 분기: 버튼 또는 메시지 -->
          <div class="w-full text-center py-4 text-sm text-gray-500">
            <!-- 포스트가 없을 때 (즉, 전체가 비었을 때) -->
            <template v-if="posts.length === 0">
              No posts found.
            </template>

            <!-- 포스트는 있지만 더 이상 로드할 게 없을 때 -->
            <template v-else-if="!hasMore">
              No more posts to show.
            </template>

            <!-- 아직 더 불러올 수 있는 경우 -->
            <template v-else>
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

  const allPosts = ref([]);
  const posts = ref([]);
  const pageSize = 12;
  const currentPage = ref(1);
  const hasMore = ref(true);

  onMounted(async () => {
    try {
      const res = await fetch('/posts/postList.json');
      const data = await res.json();
      allPosts.value = data;
      posts.value = data.slice(0, pageSize);
    } catch (err) {
      console.error('포스트 목록 로딩 오류:', err);
    }
  });

  const loadMore = () => {
    const nextPage = currentPage.value + 1;
    const nextPosts = allPosts.value.slice(0, nextPage * pageSize);

    if (nextPosts.length === posts.value.length) {
      hasMore.value = false;
      return;
    }

    posts.value = nextPosts;
    currentPage.value = nextPage;
  };
</script>

<style lang="scss" scoped>
.section-contact {
  @include relative;
  .blog-visual {
    height: calc(218 / 16 * 1rem);
    background-position: center center;
    background-repeat: repeat-x;
      @media only screen and (min-width: 1601px) {
        background-image: url('/img/header_blog_bg_full.png');
      }
      @media only screen and (min-width: 1221px) and (max-width: 1600px) {
        padding: 0 calc(60 / 16 * 1rem);
        background-image: url('/img/header_blog_bg_pc.png');
      }
      @media only screen and (min-width: 768px) and (max-width: 1200px) {
        padding: 0 calc(40 / 16 * 1rem);
        background-image: url('/img/header_blog_bg_mo.png');
      }
      @media only screen and (min-width: 360px) and (max-width: 767px) {
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
          background: #fff;
          overflow: hidden;
          i {
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
            background: transparent;
            margin-left: calc(37 / 16 * 1rem)
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
              opacity: 0.8;
            }
          }
        }
      }
      @media only screen and  (max-width: 1200px) {
          padding: 0;
          flex-direction: column;
          align-items: center;
          max-width: calc(404 / 16 * 1rem);
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
        margin: calc(36 / 16 * 1rem) auto 0;
      }
      .blog-list-items {
        box-shadow: 0px 0px 8px 0px #00000014;
        // height: calc(427 / 16 * 1rem);
        width: calc((100% / 3) - calc(20 / 16 * 1rem));
        border-radius: calc(10 / 16 * 1rem);
        overflow: hidden;
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
          img {
            width: 100%;
          }
        }
        .blog-list-content {
          box-shadow: 0px 0px 8px 0px #00000026;
          gap: calc(20 / 16 * 1rem);
          height: calc(207 / 16 * 1rem);
          background: #fff;
          padding: calc(24 / 16 * 1rem) calc(32 / 16 * 1rem) calc(32 / 16 * 1rem);
          .cate {
            color: #00A3FF;
            font-family: Poppins;
            font-weight: 500;
            font-size: calc(14 / 16 * 1rem);
            line-height: 135%;
            letter-spacing: 0px;
            vertical-align: middle;
          }
          .title {
            font-weight: 600;
            font-size: calc(20 / 16 * 1rem);
            line-height: 150%;
            letter-spacing: 0px;
            vertical-align: middle;
            color: #000729;
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
      }
    }
  }
}
</style>
