<template>
  <div class="news-content-wrapper">
    <div v-for="(news, idx) in props.newsList" :key="idx">
      <div v-if="news.id === props.nowId">
        <div class="item-title">
          <span>{{
            locale === 'ko' ? news.content_kr.title : news.content_en.title
          }}</span>
        </div>
        <div class="item-date">
          <p>{{ $d(new Date(news.date), 'short') }}</p>
        </div>
        <div class="item-content">
          <p>
            <span>{{
              locale === 'ko'
                ? news.content_kr.content
                : news.content_en.content
            }}</span>
          </p>
        </div>
        <div
          class="item-links"
          v-if="
            locale === 'ko'
              ? news.content_kr.links.length
              : news.content_en.links.length
          "
        >
          <p class="link-title">{{ $t('main.news.link') }}</p>
          <div
            class="link-content-wrapper"
            v-for="(link, idx) in locale === 'ko'
              ? news.content_kr.links
              : news.content_en.links"
            :key="idx"
          >
            <a :href="link" class="link-content">
              {{ link }}
            </a>
          </div>
        </div>
        <div class="prev-news" v-if="idx > 0">
          <span>Before</span>
          <span
            class="hover-pointer"
            @click="nowId = props.newsList[idx - 1].id;  scrollTop();"
            >{{ locale==='ko' ? props.newsList[idx - 1].content_kr.title : props.newsList[idx - 1].content_en.title}}</span
          >
        </div>
        <div class="next-news" v-if="idx < props.newsList.length - 1">
          <span>Next</span>
          <span
            class="hover-pointer"
            @click="nowId = props.newsList[idx + 1].id; scrollTop();"
            >{{ locale==='ko' ? props.newsList[idx + 1].content_kr.title : props.newsList[idx + 1].content_en.title}}</span
          >
        </div>
      </div>
    </div>

    <button
      class="back-button"
      @click="
        nowId = -1;
        scrollTop();
        onSelect(nowId);
      "
    >
      BACK
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
</template>
<script setup>
import { ref, watch, defineProps, defineEmit, onMounted } from 'vue'
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
const emit = defineEmit(['onSelect'])
const onSelect = (value) => {
  console.log(value)
  emit('onSelect', value)
}
const scrollTop = ()=>{
  window.scrollTo(0,0);
} 
onMounted(()=>{
  document.documentElement.scrollTop = 0;
})
</script>
<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.news-content-wrapper {
  .item-title {
    @include bold(40);
    line-height: 60px;
    margin-bottom: 10px;
  }
  .item-date {
    @include medium(16);
    color: rgba($black-1, 0.4);
    margin-bottom: 40px;
  }
  .item-content {
    @include medium(18);
    line-height: 40px;
    margin-bottom: 60px;
  }
  .item-links {
    margin-bottom: 95px;
    .link-title {
      @include bold(16);
      line-height: 40px;
      margin-bottom: 8px;
    }
    .link-content-wrapper {
      @include medium(12);
      line-height: 28px;
    }
  }
  .prev-news,
  .next-news {
    display: grid;
    grid-template-columns: 100px 1fr;
    height: 80px;
    border-top: rgba(22, 22, 22, 0.4) solid 1px;
    span {
      @include vertical-center;
      @include medium(16);
    }
  }
  .prev-news {
    border-top: $black-1 solid 2px;
  }
  .back-button {
    @include center-center;
    margin: 48px auto 6px auto;
    @include bold(16);
    
    color: $main;
    svg{
      position: absolute;
    }
  }
}
</style>
