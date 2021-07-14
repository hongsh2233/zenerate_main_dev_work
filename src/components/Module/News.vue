<template>
  <div class="module-news-wrapper module-item-wrapper">
    <div class="news-inner">
      <div
        class="news-caption caption-large hover-pointer"
        @click="router.push('/main/news')"
      >
        {{ $t('module.news.caption') }}
      </div>
      <div class="news-items hidden-tablet hidden-mobile">
        <div
          class="news-item hover-pointer"
          v-for="news in newsListSliced"
          :key="news.id"
          @click="toNewsPage(news.id)"
        >
          <div class="item-date">
            {{ $d(new Date(news.date), 'short') }}
          </div>
          <div class="item-content">
            {{
              locale === 'ko' ? news.content_kr.title : news.content_en.title
            }}
          </div>
        </div>
      </div>
      <div class="news-items hidden-desktop">
        <Carousel
          :itemsToShow="4"
          :wrap-around="false"
          :breakpoints="{
            100: {
              itemsToShow: 2,
              snapAlign: 'start',
            },
            768: {
              itemsToShow: 3,
              snapAlign: 'start',
            },
          }"
        >
          <Slide
            v-for="news in newsList"
            :key="news.id"
            @click="toNewsPage(news.id)"
          >
            <div class="news-item hover-pointer">
              <div class="item-date">
                {{ $d(new Date(news.date), 'short') }}
              </div>
              <div class="item-content">
                {{
                  locale === 'ko'
                    ? news.content_kr.title
                    : news.content_en.title
                }}
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import ApiService from '/Services/api'
import { useRouter } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const router = useRouter()
const newsList = ref([])
const newsListSliced = computed(() => newsList.value.slice(0, 7))

const toNewsPage = (id) => {
  router.push(`/main/news?q=${id}`)
}

onMounted(async () => {
  const getNewsListRes = await ApiService.GET_NEWS_LIST()
  newsList.value = getNewsListRes.data.body.data
})
</script>
<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.news-inner {
  width: 100%;
  height: 100%;
  @include tablet{
    margin-top: 32px;
  }
  .news-caption {
    margin-bottom: 12px;
    @include desktop {
      margin-bottom: 0px;
    }
  }
  .news-items {
    @include desktop {
      height: calc(100% - 75px);
      @include flex();
    }
    @include tablet {
      height: 200px;
    }
    @include mobile {
      height: 150px;
    }
    .news-item {
      @include flex($dir: column, $justify: space-between);
      @include tablet {
        width: 164px;
        height: 100%;
      }
      @include mobile {
        width: 120px;
        height: 100%;
      }
      .item-date {
        color: rgba($black-1, 0.4);
        @include medium(12);
        margin-top: 24px;
        @include tablet {
          text-align: left;
        }
        @include mobile {
          text-align: center;
          @include medium(11);
        }
      }
      .item-content {
        @include medium(16);
        margin: auto 0px;
        flex: 1;
        // @include vertical-center;
        @include desktop {
          justify-content: flex-end;
          padding-bottom: 24px;
          margin-top: 24px;
          padding-right: 24px;
        }
        @include tablet {
          font-size: 16px;
          margin-top: auto;
        }
        @include mobile {
          @include medium(12);
        }
      }
    }

    @include desktop {
      flex-direction: column;
      .news-item {
        flex: 1;
        border-bottom: solid 1px $grey-3;
      }
      .news-item:last-child {
        border-bottom: transparent;
      }
    }
  }
}
</style>
