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
    <transition name="fade" mode="out-in">
      <NewsContent
        :newsList="newsList"
        :nowId="nowId"
        v-if="nowId != -1"
        @onSelect="(v) => (nowId = v)"
      />
    </transition>
    <transition name="fade" mode="out-in">
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
    @include tablet{
      margin-bottom: 24px;
    }
    @include mobile{
      display: block;
      margin-bottom: 24px;
    }
    .news-title {
      margin-right: 71px;
      span:first-child {
        @include bold(40);
        margin-right: 10px;
        @include tablet{
          @include bold(32);
        }
        @include mobile{
          @include bold(32);
        }
      }
      span:last-child {
        @include bold(40);
        color: $main;
        @include tablet{
          @include bold(32);
        }
        @include mobile{
          @include bold(32);
        }
      }
      @include mobile{
        margin-bottom: 16px;
      }
    }
    .news-year-wrapper {
      @include center-center;
      @include mobile{
        justify-content: flex-start;
      }
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
        @include mobile{
          @include bold(12);
          line-height: 32px;
        }
        @include tablet{
          @include bold(12);
          line-height: 32px;
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
        padding-bottom: 10px;
        height: 120px;
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
          @include tablet{
            @include medium(12);
          }
          @include mobile{
            @include medium(12);
          }
        }
        .content-title {
          @include medium(20);
          line-height: 40px;
          @include tablet{
            @include medium(18);
          }
          @include mobile{
            @include medium(16);
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
            &::after {
              content: '';
              display: block;
              width: 1px;
              height: 45px;
              background-color: $grey-3;
              transform: rotate(-45deg) translate(15px, 4px);
            }
            @include tablet{
              margin-top: 15px;
            }
            @include mobile{
              margin-top: 15px;
            }
          }
        }
      }
    }
  }
}
</style>
