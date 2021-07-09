<template>
  <section class="section-news">
    <div class="news-title-wrapper">
      <div class="news-title hover-pointer" @click="() => ((targetYear = -1), (nowId = -1))">
        <span>{{ $t('main.news.title[0]') }}</span>
        <span>{{ $t('main.news.title[1]') }}</span>
      </div>
      <div class="news-year-wrapper">
        <button @click="() => ((targetYear = 2021), (nowId = -1))">2021</button>
        <button @click="() => ((targetYear = 2020), (nowId = -1))">2020</button>
      </div>
    </div>
    <transition name="fade">
      <NewsContent
        :newsList="newsList"
        :nowId="nowId"
        v-if="nowId != -1"
        @onSelect="(v) => (nowId = v)"
      />
    </transition>
    <transition name="fade">
    <div class="news-items-wrapper" v-if="nowId === -1">
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
            @click="[scrollTop(), nowId = news.id]"
          >
            {{
              locale === 'ko' ? news.content_kr.title : news.content_en.title
            }}
            <div class="arrow-right"></div>
          </div>
        </div>
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
const scrollTop = ()=>{
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
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
    nowId.value = Number(route.query.q);
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
    margin-bottom: 48px;
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
        &:hover{  
          background-color: $grey-3;
        }
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
