<template>
  <section class="section-news">
    <div class="news-items-wrapper">
      <div
        class="news-item hover-pointer"
        :class="{ active: currentNews === i }"
        v-for="i in 10"
        :key="i"
        @click="toggleNewsModal(true, i)"
      >
        <div class="item-title">Zenerate News No. {{ i }}</div>
        <div class="item-content">
          <div class="content-date">{{ $d(new Date(), 'short') }}</div>
          <div class="content-title">스타트업 해외진출 바우처 선정</div>
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
        v-if="showNewsModal"
      >
        <div class="item-button" @click="toggleNewsModal(false)">
          <button><i class="material-icons">close</i></button>
        </div>
        <div class="item-title">
          <span>신영그룹과 컨설팅 계약 체결</span>
        </div>
        <div class="item-date">
          <p>{{ $d(new Date(), 'short') }}</p>
        </div>
        <div class="item-content">
          <p>
            부동산 디벨로퍼 신영그룹과 제너레잇이 용산구의 한 개발사업에 대한
            컨설팅 계약을 체결했습니다. 신영은 해당 사업지역에 새로운 고급 주거
            타워를 계획하고 있으며, 제너레잇에 분양 매출을 극대화할 수 있는 주거
            세대 구성과 배치, 적정 분양가 산출, 상업시설에 관한 업종 구성 및
            배치에 관한 인공지능 솔루션을 의뢰했습니다.
          </p>
        </div>
        <div class="item-links">
          <p class="link-title">{{ $t('main.news.link') }}</p>
          <a
            href="https://n.news.naver.com/article/008/0004531402"
            class="link-content"
          >
            https://n.news.naver.com/article/008/0004531402
          </a>
        </div>
      </div>
    </transition>
  </section>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'

const showNewsModal = ref(false)
const toggleNewsModal = (flag, newsIndex = null) => {
  showNewsModal.value = flag == null ? !showNewsModal.value : flag
  currentNews.value = newsIndex
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
onMounted(() => {
  if (route.query.q && !isNaN(+route.query.q)) {
    toggleNewsModal(true, +route.query.q)
  }
})
</script>
<style lang="scss" scoped>
.section-news {
  padding: 80px 0px;
  @include relative;
  .news-items-wrapper {
    @include flex($justify: space-between);
    @include mobile {
      justify-content: center;
    }
    @include tablet {
      justify-content: space-evenly;
    }
    .news-item {
      margin-bottom: 24px;
      margin-right: 8px;
      width: 280px;
      height: 360px;
      @include flex($dir: column, $justify: space-between);
      @include border-set(2px, $main, 12px);
      @include mobile {
        margin-right: 24px;
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
        padding: 32px 24px;
        margin-top: auto;
        .content-date {
          @include bold(15);
          color: $main;
          margin-bottom: 16px;
        }
        .content-title {
          @include bold(28);
        }
      }
      &:hover,
      &.active {
        background-color: $main;
        .item-title {
          color: $white;
          border-bottom-color: white;
        }
        .item-content {
          .content-date,
          .content-title {
            color: $white;
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
      }
    }
  }
}
</style>
