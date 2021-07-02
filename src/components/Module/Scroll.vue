<template>
  <div class="module-scroll-wrapper">
    <div
      class="scroll-first"
      :style="{
        opacity: opacity.first,
      }"
    >
      <div class="first-image">
        <img src="/video/scroll_building.gif" alt="" />
      </div>
      <div class="first-text">
        <p>가능한 모든 대안을</p>
        <p>
          생성하여
          <span>{{ typing }}</span
          >을
        </p>
        <p>추천해드립니다.</p>
      </div>
    </div>
    <div
      class="scroll-second" 
      :style="{
        opacity: opacity.second,
      }"
    >
      <div class="second-background">
        <video
          autoplay="autoplay"
          muted="muted"
          loop="loop"
          src="/video/scroll_background.mp4"
          alt=""
        />
      </div>
      <div class="second-first-text">
        <div
          class="second-first-first"
          :style="{
            opacity: opacity.secondFirstFirst,
            transform: `translateY(${makeTranslate(opacity.secondFirstFirst)}px)`
          }"
        >
          <p>제너레잇은 인공지능 엔진을 통해</p>
          <p>개발 수익을 극대화합니다.</p>
        </div>
        <div
          class="second-first-second"
          :style="{
            opacity: opacity.secondFirstSecond,
          }"
        >
          <p>평균 12%의 추가 개발 수익을 발생시키고 있습니다.</p>
        </div>
      </div>
      <div class="second-second-text">
        <div
          class="second-second-first"
          :style="{
            opacity: opacity.secondSecondFirst,
          }"
        >
          <p>제너레잇이 부동산 개발의 방식을</p>
          <p>혁신하고 있습니다.</p>
        </div>
        <div
          class="second-second-second"
          :style="{
            opacity: opacity.secondSecondSecond,
          }"
        >
          <p>건축 디자인 자동화, 인공지능 데이터를 활용하여</p>
          <p>단순한 용적률, 전용률, 세대 수 최대화가 아닌</p>
          <p>
            다양한 변수를 고려한 최적화를 통해 기존의 상식을 깨트리는 인사이트를
            제공합니다.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const opacity = ref({
  first: 1,
  second: 0,
  secondFirstFirst: 0,
  secondFirstSecond: 0,
  secondSecondFirst: 0,
  secondSecondSecond: 0,
})
const transform = ref({
  secondFirstFirst: -10,
  secondFirstSecond: -10,
  secondSecondFirst: -10,
  secondSecondSecond: -10,
})
const typing = ref('')
const typingLetter = ['최', '고', '의', ' ', '안']
function makeTranslate(opacity){
    if (opacity == 0){
        return -10
    }else if (opacity < 1){
        return -10*opacity
    }else{
        return 0
    }
}
onMounted(() => {
  let startTyping = setInterval(() => {
    typing.value += typingLetter[typing.value.length]
    if (typing.value.length > 4) {
      clearInterval(startTyping)
    }
  }, 500)

  window.addEventListener('scroll', ($evt) => {
    const scrollY = $evt.currentTarget.scrollY
    if (scrollY < 800) {
      opacity.value = {
        first: 1 - scrollY / 800,
        second: 0,
        secondFirstFirst: 0,
        secondFirstSecond: 0,
        secondSecondFirst: 0,
        secondSecondSecond: 0,
      }
    } else if (scrollY < 1300) {
      opacity.value = {
        first: 0,
        second: (scrollY - 800) / 500,
        secondFirstFirst: (scrollY - 800) / 500,
        secondFirstSecond: 0,
        secondSecondFirst: 0,
        secondSecondSecond: 0,
      }
    } else if (scrollY < 1800) {
      opacity.value = {
        first: 0,
        second: 1,
        secondFirstFirst: 1,
        secondFirstSecond: (scrollY - 1300) / 300,
        secondSecondFirst: 0,
        secondSecondSecond: 0,
      }
    } else if (scrollY < 2100) {
      opacity.value = {
        first: 0,
        second: 1,
        secondFirstFirst: 1 - (scrollY - 1800) / 400,
        secondFirstSecond: 1 - (scrollY - 1800) / 400,
        secondSecondFirst: 0,
        secondSecondSecond: 0,
      }
    } else if (scrollY < 2600) {
      opacity.value = {
        first: 0,
        second: 1,
        secondFirstFirst: 0,
        secondFirstSecond: 0,
        secondSecondFirst: (scrollY - 2100) / 500,
        secondSecondSecond: 0,
      }
    } else if (scrollY < 3100) {
      opacity.value = {
        first: 0,
        second: 1,
        secondFirstFirst: 0,
        secondFirstSecond: 0,
        secondSecondFirst: 1,
        secondSecondSecond: (scrollY - 2600) / 300,
      }
    } else if (scrollY < 3700) {
      opacity.value = {
        first: 0,
        second: 1 - (scrollY - 3100) / 400,
        secondFirstFirst: 0,
        secondFirstSecond: 0,
        secondSecondFirst: 1 - (scrollY - 3100) / 600,
        secondSecondSecond: 1 - (scrollY - 3100) / 600,
      }
    } else {
      opacity.value = {
        first: 0,
        second: 0,
        secondFirstFirst: 0,
        secondFirstSecond: 0,
        secondSecondFirst: 0,
        secondSecondSecond: 0,
      }
    }
  })
})
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.module-scroll-wrapper {
  height: 4000px;
  width: 100%;
  .scroll-first {
    @include fixed(top 0 left 0);
    width: 100vw;
    height: 100vh;
    @include flex;
    @include center-center;
    .first-image {
      width: 413px;
      margin-right: 36px;
      img {
        width: 100%;
      }
    }
    .first-text {
      p {
        @include bold(40);
      }
      @keyframes typingAnimation {
        50% {
          border-color: transparent;
        }
      }
      span {
        color: $main;
        padding-right: 5px;
        margin-right: 3px;
        border-right: 3px solid;
        animation: typingAnimation 1s steps(1) infinite;
      }
    }
  }
  .scroll-second {
    width: 100vw;
    height: 100vh;
    @include flex;
    @include fixed(top 0 left 0);
    @include center-center;
    .second-background {
      position: absolute;
      z-index: 0;
      video {
        width: 100%;
      }
    }
    .second-first-text {
      position: absolute;
      @include flex($dir: column);
      z-index: 1;
      p {
        text-align: center;
      }
      .second-first-first {
        margin-bottom: 32px;
        p {
          @include bold(40);
          line-height: 60px;
          color: white;
        }
      }
      .second-first-second {
        p {
          font-size: 24px;
          line-height: 32px;
          color: white;
        }
      }
    }
    .second-second-text {
      position: absolute;
      @include flex($dir: column);
      z-index: 1;
      p {
        text-align: center;
      }
      .second-second-first {
        margin-bottom: 32px;
        p {
          @include bold(40);
          line-height: 60px;
          color: white;
        }
      }
      .second-second-second {
        p {
          font-size: 24px;
          color: white;
          line-height: 32px;
        }
      }
    }
  }
}
</style>
