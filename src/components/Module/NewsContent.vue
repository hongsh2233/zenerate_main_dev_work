<template>
  <div class="news-content-wrapper">
    <transition name="fade" mode="out-in" duration="100">
      <div :key="nowNews">
        <div class="item-title">
          <span>{{
            locale === 'ko'
              ? nowNews.content_kr.title
              : nowNews.content_en.title
          }}</span>
        </div>
        <div class="item-date">
          <p>{{ $d(new Date(nowNews.date), 'short') }}</p>
        </div>
        <div class="item-content">
          <p>
            <span>{{
              locale === 'ko'
                ? nowNews.content_kr.content
                : nowNews.content_en.content
            }}</span>
          </p>
        </div>
        <div
          class="item-links"
          v-if="
            locale === 'ko'
              ? nowNews.content_kr.links.length
              : nowNews.content_en.links.length
          "
        >
          <p class="link-title">{{ $t('main.news.link') }}</p>
          <div
            class="link-content-wrapper"
            v-for="(link, idx) in locale === 'ko'
              ? nowNews.content_kr.links
              : nowNews.content_en.links"
            :key="idx"
          >
            <a :href="link" class="link-content">
              {{ link }}
            </a>
          </div>
        </div>
        <div class="prev-news" v-if="nowIdx > 0">
          <span>Before</span>
          <span
            class="hover-pointer"
            @click="
              ;[(nowId = props.newsList[nowIdx - 1].id), scrollTopSmooth()]
            "
            >{{
              locale === 'ko'
                ? props.newsList[nowIdx - 1].content_kr.title
                : props.newsList[nowIdx - 1].content_en.title
            }}</span
          >
        </div>
        <div class="next-news" v-if="nowIdx < props.newsList.length - 1">
          <span>Next</span>
          <span
            class="hover-pointer"
            @click="
              ;[(nowId = props.newsList[nowIdx + 1].id), scrollTopSmooth()]
            "
            >{{
              locale === 'ko'
                ? props.newsList[nowIdx + 1].content_kr.title
                : props.newsList[nowIdx + 1].content_en.title
            }}</span
          >
        </div>

        <button
          class="back-button"
          @click=";[(nowId = -1), scrollTopSmooth(), onSelect(nowId)]"
        >
          <span>BACK</span>
          <svg
            width="122"
            height="28"
            viewBox="0 0 122 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M121 27H0.999997L27.6886 1"
              stroke="#4747FF"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
const props = defineProps({
  newsList: {
    type: Array,
    default() {
      return []
    },
  },
  nowId: {
    type: Number,
  },
})
const { locale } = useI18n()
const nextId = ref(-1)
const prevId = ref(-1)
const emit = defineEmits(['onSelect'])
const onSelect = (value) => {
  emit('onSelect', value)
}
const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}
const scrollTopSmooth = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}
onMounted(() => {
  document.documentElement.scrollTop = 0
})
const nowNews = ref(
  computed(() => {
    return props.newsList.find((news) => news.id === props.nowId)
  })
)
const nowIdx = ref(
  computed(() => {
    return props.newsList.findIndex((news) => news.id === props.nowId)
  })
)
</script>
<style lang="scss" scoped>
.news-content-wrapper {
  @include mobile {
    padding-top: 20px;
  }
  .item-title {
    @include bold(40);
    line-height: 60px;
    margin-bottom: 10px;
    @include tablet {
      @include bold(32);
      line-height: 52px;
    }
    @include mobile {
      @include bold(28);
    }
  }
  .item-date {
    @include medium(16);
    color: rgba($black-1, 0.4);
    margin-bottom: 40px;
    @include tablet {
      @include medium(14);
      margin-bottom: 30px;
    }
    @include mobile {
      @include medium(14);
      margin-bottom: 30px;
    }
  }
  .item-content {
    @include medium(18);
    line-height: 40px;
    margin-bottom: 60px;
    @include tablet {
      @include medium(16);
    }
    @include mobile {
      @include medium(14);
    }
  }
  .item-links {
    margin-bottom: 95px;
    @include tablet {
      margin-bottom: 50px;
    }
    @include mobile {
      margin-bottom: 40px;
    }
    .link-title {
      @include bold(16);
      line-height: 40px;
      margin-bottom: 8px;
      @include tablet {
        @include bold(14);
        margin-bottom: 4px;
      }
      @include mobile {
        @include bold(14);
        margin-bottom: 4px;
      }
    }
    .link-content-wrapper {
      @include medium(12);
      line-height: 28px;
      @include mobile {
        @include medium(12);
      }
    }
  }
  .prev-news,
  .next-news {
    display: grid;
    grid-template-columns: 100px 1fr;
    height: 48px;
    border-top: rgba(22, 22, 22, 0.4) solid 1px;
    span {
      @include vertical-center;
      @include medium(16);
      @include tablet {
        @include medium(14);
      }
      @include mobile {
        @include medium(14);
      }
    }
  }
  .prev-news {
    border-top: $black-1 solid 2px;
  }
  .back-button {
    @include center-center;
    margin: 48px auto 6px auto;
    @include bold(16);
    @include tablet {
      @include bold(14);
    }
    @include mobile {
      @include bold(14);
    }
    span {
      padding-bottom: 5px;
    }
    color: $main;
    svg {
      position: absolute;
    }
  }
}
</style>
