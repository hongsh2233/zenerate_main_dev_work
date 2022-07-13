<template>
  <section class="section_top">
    <div class="section-container">
      <div class="section-layout-container container-medium with-padding">
        <div class="section-layout">
          <div class="gradient-area">
            <div class="section_background-wrap">
              <canvas
                id="gradient-canvas"
                data-js-darken-top
                data-transition-in
              ></canvas>
            </div>
            <div class="background-wrapper">
              <div class="background">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="gradient-title-area grid-2-columns">
              <p class="text text-above section-title-1">
                <strong>Maximize returns</strong>
                by zenerating all possibilities
              </p>

              <!-- <div class="text text-under text-under-blended section-title-1">
                aaa
              </div> -->
              <div class="text text-under text-under-overlay section-title-1">
                bbb
              </div>
            </div>
          </div>
          <h2 class="section-title-2 subtitle">???</h2>
        </div>
      </div>
    </div>
  </section>
  <!-- <section class="landing-top-wrapper">
    <div class="container grid-2-columns">
      <div class="background-wrapper">
        <div class="background"></div>
      </div>
      <div class="section-layout-container">title</div>
      <div class="card-right-container">image</div>
    </div>
  </section> -->
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import Store from '/Store/index'
</script>
<style lang="scss" scoped>
// div {
//   height: 200vh;
//   width: 100vw;
//   background-color: antiquewhite;
// }

.landing-top-wrapper {
  @include relative();

  background-color: $white;
}

$container_width: 1080px;
$standard_space: 24px;
$section-gap: $standard_space;
$gradient-padding: 120px;
$gradient-title-margin: 100px;
$section-skew-Y: -12deg;
$section-angle-sin: 0.212;
$transform-origin-x: calc(var(--section-gap) * 0.8);
@mixin mq($container_medium_width) {
  $section-gap: calc(
    (100vw - $container_medium_width + $standard_space * 2) / 2
  );
}
.background-wrapper {
  width: calc(100vw + 24px);
  height: calc(
    100% + $gradient-padding + $gradient-title-margin + $transform-origin-x *
      $section-angle-sin
  );
  position: absolute;
  top: -$gradient-title-margin;
  //   top: auto;
  left: calc($section-gap * -1);
  //   bottom: 15px;
  -webkit-transform: skewY(-12deg);
  transform: skewY(-12deg);
  -webkit-transform-origin: $transform-origin-x 100%;
  transform-origin: $transform-origin-x 100%;
  //   overflow: hidden;

  @keyframes move {
    //  20% {
    //   transform: translate3d(0, 0, 1px) rotate(360deg);
    // }
    // 100% {
    //   transform: translate3d(0, 0, 1px) rotate(360deg);
    // }
    20% {
      transform: translateX(4vw);
    }
    80% {
      transform: translateX(-4vw);
    }
  }

  .background {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;

    background-color: hsla(234, 71%, 62%, 1);
    overflow: hidden;

    span {
      //   border-radius: 40vmin;
      backface-visibility: hidden;
      position: absolute;

      animation-duration: 1s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      background-color: hsla(234, 71%, 62%, 1);
    }

    span:nth-child(1) {
      //   width: 40vmin;
      //   height: 40vmin;
      width: 600px;
      height: 700px;
      top: 4%;
      left: 4%;
      animation-duration: 26s;
      animation-delay: -19s;
      transform-origin: -13vw 6vh;
      background-size: 80% 90%;
      background-repeat: no-repeat;
      overflow: hidden;
      background-image: radial-gradient(
          at 48% 48%,
          rgba(235, 251, 255, 0.6) 0px,
          transparent 50%
        ),
        radial-gradient(
          at 58% 39%,
          rgba(255, 61, 168, 0.95) 0px,
          transparent 50%
        ),
        radial-gradient(
          at 44% 52%,
          rgba(26, 228, 255, 0.8) 0px,
          transparent 50%
        );
    }

    span:nth-child(2) {
      width: 40vmin;
      height: 40vmin;
      top: 16%;
      right: 18%;
      animation: move;
      animation-duration: 26s;
      animation-delay: -19s;
      transform-origin: -13vw 6vh;

      background-image: radial-gradient(
          at 76% 48%,
          hsla(189, 100%, 60%, 0.85) 0px,
          transparent 50%
        ),
        radial-gradient(
          at 40% 25%,
          hsla(229, 100%, 96%, 0.7) 0px,
          transparent 50%
        );
    }

    span:nth-child(3) {
      width: 80vmin;
      height: 60vmin;
      bottom: 0%;
      left: 40%;
      animation-duration: 26s;
      animation-delay: -19s;
      transform-origin: -13vw 6vh;

      background-color: hsla(234, 71%, 62%, 1);
      background-image: radial-gradient(
          at 63% 91%,
          hsla(258, 73%, 37%, 1) 0px,
          transparent 50%
        ),
        radial-gradient(
          at 92% 54%,
          hsla(229, 63%, 52%, 0.7) 0px,
          transparent 50%
        );
    }
  }
}

.grid-2-columns {
  //   @include relative;
  //   position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.container {
  width: 100%;
  height: 100vh;
}

// dddddddddddddddddddddddddddd

.section-title-1 {
  @include medium(48);
  width: 500px;
  margin: 0px;
  color: white;
  //   @include mq(450px) {
  //     font-size: 70px;
  //   }
  //   @include mq($tablet) {
  //     font-size: 90px;
  //   }
  //   @include mq($laptop) {
  //     font-size: 100px;
  //     width: 600px;
  //   }
  strong {
    @include semi-bold(48);
  }
}

.text {
  line-height: 1;
  margin: $gradient-title-margin 0 0 0;
  text-transform: none;
  letter-spacing: 2px;
  min-height: 200px;
  display: flex;
  align-items: flex-end;
}

.text-above {
  position: relative;
}

.text-under {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
}
.text-under-blended {
  color: #3a3a3a;
  mix-blend-mode: color-burn;
}

.text-under-overlay {
  opacity: 0.2;
  color: #3a3a3a;
}

#gradient-canvas {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  --gradientcolorzero: #6ec3f4;
  --gradientcolorone: #3a3aff;
  --gradientcolortwo: #ff61ab;
  --gradientcolorthree: #e63946;
}
</style>
