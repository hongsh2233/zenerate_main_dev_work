<template>
  <section class="section-news">
    <div class="news-title-wrapper">
      <div class="news-title">
        <span>{{ $t('main.news.title[0]') }}</span>
        <span>{{ $t('main.news.title[1]') }}</span>
      </div>
      <div class="news-year-wrapper">
        <button @click="() => ((targetYear = 2021), (nowId = -1))">2021</button>
        <button @click="() => ((targetYear = 2020), (nowId = -1))">2020</button>
      </div>
    </div>
    <NewsContent
      :newsList="newsList"
      :nowId="nowId"
      v-show="nowId != -1"
      @onSelect="(v) => (nowId = v)"
    />
    <div class="news-items-wrapper" v-show="nowId === -1">
      <div
        class="news-item"
        :class="{ active: currentNews && currentNews.id === news.id }"
        v-for="news in filteredNews"
        :key="news.id"
      >
        <div class="item-content">
          <div class="content-date">{{ $d(new Date(news.date), 'short') }}</div>
          <div
            class="content-title hover-pointer"
            @click="() => (nowId = news.id)"
          >
            {{
              locale === 'ko' ? news.content_kr.title : news.content_en.title
            }}
            <div class="arrow-right"></div>
          </div>
        </div>
      </div>
      <div class="news-item fake"></div>
      <div class="news-item fake"></div>
      <div class="news-item fake"></div>
      <div class="news-item fake"></div>
      <div class="news-item fake"></div>
      <div class="news-item fake"></div>
      <div class="news-item fake"></div>
      <div class="news-item fake"></div>
    </div>
    <div
      class="news-modal-wrapper hover-pointer"
      @click="toggleNewsModal(false)"
      v-if="showNewsModal"
    ></div>
    <transition name="fade">
      <div
        class="modal-item"
        @click="($evt) => $evt.stopPropagation()"
        v-if="showNewsModal && currentNews"
      >
        <div class="item-button" @click="toggleNewsModal(false)">
          <button><i class="material-icons">close</i></button>
        </div>
        <div class="item-title">
          <span>{{
            locale === 'ko'
              ? currentNews.content_kr.title
              : currentNews.content_en.title
          }}</span>
        </div>
        <div class="item-date">
          <p>{{ $d(new Date(currentNews.date), 'short') }}</p>
        </div>
        <div class="item-content">
          <p>
            <span>{{
              locale === 'ko'
                ? currentNews.content_kr.content
                : currentNews.content_en.content
            }}</span>
          </p>
        </div>
        <div
          class="item-links"
          v-if="
            locale === 'ko'
              ? currentNews.content_kr.links.length
              : currentNews.content_en.links.length
          "
        >
          <p class="link-title">{{ $t('main.news.link') }}</p>
          <a
            :href="link"
            class="link-content"
            v-for="(link, idx) in locale === 'ko'
              ? currentNews.content_kr.links
              : currentNews.content_en.links"
            :key="idx"
          >
            {{ link }}
          </a>
        </div>
      </div>
    </transition>
  </section>
</template>
<script lang="ts" setup>
// @ts-ignore
import NewsContent from '/Components/Module/NewsContent.vue'
import { onMounted, ref, computed } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import ApiService from '/Services/api'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const targetYear = ref(-1)
const nowId = ref(-1)
const filteredNews = computed(() => {
  return targetYear.value === -1
    ? newsList.value
    : newsList.value.filter(
        (news) => new Date(news.date).getFullYear() === targetYear.value
      )
})

const showNewsModal = ref(false)
const toggleNewsModal = (flag, news = null) => {
  showNewsModal.value = flag == null ? !showNewsModal.value : flag
  currentNews.value = news
  if (showNewsModal.value) {
    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
  } else {
    // When the modal is hidden...
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  }
}

const currentNews = ref(null)

import { useRoute } from 'vue-router'
const route = useRoute()
const newsList = ref([])
onMounted(async () => {
  const getNewsListRes = await ApiService.GET_NEWS_LIST()
  newsList.value = getNewsListRes.data.body.data
  // debugger
  if (route.query.q && !isNaN(+route.query.q)) {
    toggleNewsModal(
      true,
      newsList.value.find((n) => n.id == route.query.q)
    )
  }
})
</script>
<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.section-news {
  padding: 80px 0px;
  @include desktop {
    padding: 80px 40px;
  }
  @include relative;
  .news-title-wrapper {
    @include flex();
    margin-bottom: 124px;
    .news-title {
      margin-right: 71px;
      span:first-child {
        @include bold(40);
        margin-right: 10px;
      }
      span:last-child {
        @include bold(40);
        color: $main;
      }
    }
    .news-year-wrapper {
      @include center-center;
      button {
        @include bold(16);
        line-height: 40px;
        background-color: rgba($grey-3, 0.5);
        padding: 4px 20px;
        margin-right: 28px;
        border-radius: 100px;
      }
    }
  }
  .news-items-wrapper {
    @include flex($dir: column, $justify: space-between);

    @include mobile {
      justify-content: center;
    }
    @include tablet {
      justify-content: space-evenly;
    }
    .news-item {
      height: 130px;
      padding-bottom: 20px;
      @include flex($dir: column);
      @include mobile {
      }
      &.fake {
        height: 0px;
        border: none;
        margin: 0;
        margin-right: 8px;
      }
      .item-title {
        height: 100px;
        padding: 32px 24px;
        @include bold(15);
        color: $main;
        border-bottom: solid 2px $main;
      }
      .item-content {
        .content-date {
          @include medium(12);
          @include vertical-center;
          height: 40px;
          color: $main;
          padding-top: 40px;
          margin-bottom: 16px;
        }
        .content-title {
          @include medium(20);
          line-height: 40px;

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
            &::after {
              content: '';
              display: block;
              width: 1px;
              height: 45px;
              background-color: $grey-3;
              transform: rotate(-45deg) translate(15px, 4px);
            }
          }
        }
      }
    }
  }
  .news-modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba($black, 0.6);
    z-index: 1001;
  }
  .modal-item {
    position: fixed;
    left: 0;
    top: 0;
    overflow-y: auto;
    z-index: 1002;
    width: 100%;
    height: 100%;
    background: $main;
    padding: 32px 40px;

    @include desktop {
      width: 498px;
    }
    .item-button {
      margin-bottom: 80px;
      button {
        margin-left: auto;
        background: transparent;
        @include vertical-center;
        text-align: center;
        width: 48px;
        height: 48px;
        i {
          color: white;
          font-size: 48px;
        }
      }
    }
    .item-title {
      color: $white;
      margin-bottom: 32px;
      border-top: solid 2px white;
      border-bottom: solid 2px white;
      padding: 12px 0px;
      span {
        @include bold(28);
        @include mobile {
          font-size: 20px;
        }
      }
    }
    .item-date {
      margin-bottom: 16px;
      text-align: right;
      p {
        @include medium(16);
        @include mobile {
          font-size: 12px;
        }
        color: white;
      }
    }
    .item-content {
      margin-bottom: 80px;
      p {
        @include medium(24);
        @include mobile {
          font-size: 16px;
        }
        color: white;
      }
    }
    .item-links {
      .link-title {
        @include bold(28);
        @include mobile {
          font-size: 20px;
        }
        color: $white;
        margin-bottom: 12px;
      }
      .link-content {
        @include medium(20);
        @include mobile {
          font-size: 14px;
        }
        color: white;
        word-break: break-all;
        text-decoration: underline;
        display: block;
      }
    }
  }
}
</style>
