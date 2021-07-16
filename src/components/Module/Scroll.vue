<template>
  <div
    class="module-scroll-wrapper"
    :style="{
      visibility: isVisible,
    }"
  >
    <div
      class="scroll-first"
      :style="{
        opacity: opacity.first,
      }"
    >
      <div class="first-image">
        <img src="/video/scroll_building.gif" alt="" />
      </div>
      <div class="first-text" v-if="locale != 'en'">
        <p>가능한 모든 대안을</p>
        <p>
          생성하여
          <span>{{ typing }}</span
          >을
        </p>
        <p>추천해드립니다.</p>
      </div>
      <div class="first-text" v-else>
        <p>Zenerate finds</p>
        <p>
          <span class="typing-text">{{ typingEn }}</span><br>
          building design solutions
        </p>
        <p> for real estate development.</p>
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
      <div class="second-first-text" v-if="locale != 'en'">
        <div
          class="second-first-first"
          :style="{
            opacity: opacity.secondFirstFirst,
            transform: `translateY(${transform.secondFirstFirst}px)`,
          }"
        >
          <p>제너레잇은 인공지능 엔진을 통해</p>
          <p>개발 수익을 극대화합니다.</p>
        </div>
        <div
          class="second-first-second"
          :style="{
            opacity: opacity.secondFirstSecond,
            transform: `translateY(${transform.secondFirstSecond}px)`,
          }"
        >
          <p>평균 12%의 추가 개발 수익을 발생시키고 있습니다.</p>
        </div>
      </div>
      <div class="second-first-text" v-else>
        <div
          class="second-first-first"
          :style="{
            opacity: opacity.secondFirstFirst,
            transform: `translateY(${transform.secondFirstFirst}px)`,
          }"
        >
          <p>With Zenerate’s AI technology,</p>
          <p>we do the complex math for you to help you maximize your ROI.</p>
        </div>
        <div
          class="second-first-second"
          :style="{
            opacity: opacity.secondFirstSecond,
            transform: `translateY(${transform.secondFirstSecond}px)`,
          }"
        >
          <p>Our clients have seen revenues increase by 12% on average.</p>
        </div>
      </div>
      <div class="second-second-text" v-if="locale != 'en'">
        <div
          class="second-second-first"
          :style="{
            opacity: opacity.secondSecondFirst,
            transform: `translateY(${transform.secondSecondFirst}px)`,
          }"
        >
          <p>제너레잇이 부동산 개발의 방식을</p>
          <p>혁신하고 있습니다.</p>
        </div>
        <div
          class="second-second-second"
          :style="{
            opacity: opacity.secondSecondSecond,
            transform: `translateY(${transform.secondSecondSecond}px)`,
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
      <div class="second-second-text" v-else>
        <div
          class="second-second-first"
          :style="{
            opacity: opacity.secondSecondFirst,
            transform: `translateY(${transform.secondSecondFirst}px)`,
          }"
        >
          <p>Zenerate is disrupting </p>
          <p>the real estate development industry.</p>
        </div>
        <div
          class="second-second-second"
          :style="{
            opacity: opacity.secondSecondSecond,
            transform: `translateY(${transform.secondSecondSecond}px)`,
          }"
        >
          <p>Zenerate leads the way by providing data-driven insights</p>
          <p>based on multiple key variables produced by </p>
          <p>
            our innovative architectural design automation and AI technology.
          </p>
        </div>
      </div>
    </div>
    <div
      class="vector-wrapper"
      :style="{
        opacity: opacity.vector,
      }"
    >
      <svg
        width="27"
        height="83"
        viewBox="0 0 27 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.999994 1L0.999996 82L26 55.3114"
          :stroke="vectorColor"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, registerRuntimeCompiler } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const opacity = ref({
  first: 1,
  second: 0,
  secondFirstFirst: 0,
  secondFirstSecond: 0,
  secondSecondFirst: 0,
  secondSecondSecond: 0,
  vector: 1,
})
const transform = ref({
  secondFirstFirst: -20,
  secondFirstSecond: -20,
  secondSecondFirst: -20,
  secondSecondSecond: -20,
})
const vectorColor = ref('#4747FF')
const typing = ref('')
const typingLetter = ['최', '고', '의', ' ', '안']
const typingEn = ref('')
const typingLetterEn = ['t','h','e',' ','m','o','s','t',' ', 'p','r','o','f','i','t','a','b','l','e']
const isVisible = ref('block')

function setVectorColor(scrollY) {
  if (scrollY <= 800) {
    return '#4747FF'
  } else if (scrollY <= 3300) {
    return '#FFFFFF'
  } else {
    return 'transparent'
  }
}
function setVectorOpacity(scrollY) {
  if (scrollY <= 800) {
    return 1 - scrollY / 800
  } else {
    return 1
  }
}
function lerp(startInc, endInc, startDec, endDec, scrollY) {
  if (scrollY < startInc) {
    return 0
  } else if (scrollY >= startInc && scrollY < endInc) {
    const leng = endInc - startInc
    return (scrollY - startInc) / leng
  } else if (scrollY >= endInc && scrollY < startDec) {
    return 1
  } else if (scrollY >= startDec && scrollY < endDec) {
    const leng = endDec - startDec
    return 1 - (scrollY - startDec) / leng
  } else {
    return 0
  }
}
function makeTranslate(start, end, scrollY) {
  if (scrollY < start) {
    return -20
  } else if (scrollY >= start && scrollY < end) {
    const leng = end - start
    return 20 * (1 - (scrollY - start) / leng)
  } else if (scrollY >= end) {
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
  let startTypingEn = setInterval(() => {
    typingEn.value += typingLetterEn[typingEn.value.length]
    if (typingEn.value.length > typingLetterEn.length-1) {
      clearInterval(startTypingEn)
    }
  }, 300)

  window.addEventListener('scroll', ($evt) => {
    const scrollY = $evt.currentTarget.scrollY
    console.log(scrollY)
    opacity.value = {
      first: lerp(0, 0, 0, 700, scrollY),
      second: lerp(700, 1100, 3100, 3400, scrollY),
      secondFirstFirst: lerp(700, 1100, 1800, 2000, scrollY),
      secondFirstSecond: lerp(1100, 1500, 1800, 2000, scrollY),
      secondSecondFirst: lerp(2000, 2400, 3100, 3400, scrollY),
      secondSecondSecond: lerp(2400, 2800, 3100, 3400, scrollY),
      vector: setVectorOpacity(scrollY),
    }
    transform.value = {
      secondFirstFirst: makeTranslate(700, 1100, scrollY),
      secondFirstSecond: makeTranslate(1100, 1500, scrollY),
      secondSecondFirst: makeTranslate(2000, 2400, scrollY),
      secondSecondSecond: makeTranslate(2400, 2800, scrollY),
    }
    vectorColor.value = setVectorColor(scrollY)
    if (scrollY <= 3400) {
      isVisible.value = 'visible'
    } else {
      isVisible.value = 'hidden'
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
    @include mobile {
      @include flex($dir: column);
    }
    .first-image {
      width: 413px;
      margin-right: 36px;
      img {
        width: 100%;
      }
      @include tablet {
        width: 320px;
      }
      @include mobile {
        width: 300px;
        margin: 76px 0px 20px 0px;
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
      @include tablet {
        p {
          @include bold(32);
        }
      }
      @include mobile {
        p {
          @include bold(20);
        }
        span{
          @include bold(20);
        }
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
      width: 100%;
      height: 100%;
      video {
        width: 100%;
        height: 100vh;
        object-fit: cover;
      }
      // img {
      //   height: 100%;
      //   width: 100%;
      //   object-fit: cover;
      // }
      @include tablet {
        video {
          height: 100vh;
          object-fit: cover;
        }
      }
      @include mobile {
        // img {
        //   height: 100%;
        //   width: 100%;
        //   object-fit: cover;
        // }
        video {
          height: 100vh;
          object-fit: cover;
        }
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
      @include tablet {
        .second-first-first {
          p {
            @include bold(32);
            line-height: 52px;
          }
        }
        .second-first-second {
          p {
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
      @include mobile {
        .second-first-first {
          p {
            @include bold(20);
            line-height: 32px;
          }
        }
        .second-first-second {
          p {
            font-size: 16px;
            line-height: 28px;
          }
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
      @include tablet {
        .second-second-first {
          p {
            @include bold(32);
            line-height: 52px;
          }
        }
        .second-second-second {
          p {
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
      @include mobile {
        .second-second-first {
          p {
            @include bold(20);
            line-height: 32px;
          }
        }
        .second-second-second {
          p {
            font-size: 16px;
            line-height: 28px;
          }
        }
      }
    }
  }
  .vector-wrapper {
    @include fixed(bottom 35px left 50%);
    animation: ani 1.25s ease-in-out infinite;
    @include mobile {
      @include fixed(bottom 23px left 50%);
      svg {
        height: 40px;
      }
    }
  }
}
@keyframes ani {
  0% {
    padding-bottom: 10px;
  }
  50% {
    padding-bottom: 0px;
  }
  100% {
    padding-bottom: 10px;
  }
}
</style>
