<template>
  <section class="section_top">
    <div class="w-full h-auto">
      <div>
        <div class="section-layout">
          <div class="gradient-area">
            <!-- <div class="section_background-wrap">
              <canvas
                id="gradient-canvas"
                data-js-darken-top
                data-transition-in
              ></canvas>
            </div> -->
            <div class="background-wrapper z-[-1]">
              <div class="background">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <Layout class="pb-44 md:pb-56 lg:pb-50">
              <div class="flex flex-col gap-44 md:gap-[88px] lg:gap-[140px]">
                <div
                  class="grid grid-rows-[1fr_1fr_auto] md:grid-cols-2 md:grid-rows-[auto_auto] lg:grid-cols-2 lg:grid-rows-[auto_auto] gap-24 md:gap-34 lg:gap-38 mt-100 md:mt-147 lg:mt-182"
                >
                  <ListItem class="gap-24">
                    <p
                      class="text-m-28-regular md:text-t-38-regular lg:text-d-48-regular flex relative flex-col justify-end text-white"
                    >
                      <strong
                        class="text-m-28-semibold md:text-t-38-semibold lg:text-d-48-semibold"
                        >Maximize returns</strong
                      >

                      by zenerating<br />
                      all possibilities
                    </p>
                    <p
                      class="text-m-14-medium w-[242px] md:w-[330px] lg:w-[370px] md:text-t-16-regular lg:text-d-18-regular relative text-white md:w-[284px] lg:w-[370px]"
                    >
                      <strong
                        class="text-m-14-medium md:text-t-16-semibold lg:text-d-18-semibold"
                        >AI-powered feasibility study tool&nbsp;</strong
                      >
                      <span>taking&nbsp;</span>
                      <span>'highest and best use'&nbsp;</span>
                      <span> to the next level,&nbsp;</span>
                      <span>boosting returns&nbsp;</span>
                      <span> by an average of 12%</span>
                    </p>
                  </ListItem>
                  <ListItem>
                    <div class="image-wrapper relative">
                      <div
                        class="w-[200px] h-[200px] bg-white absolute right-0 top-0"
                      ></div>
                    </div>
                  </ListItem>
                  <div
                    class="flex flex-col md:flex-row gap-y-20 gap-x-8 lg:flex-row"
                  >
                    <button
                      type="button"
                      class="primary-button min-w-[190px] mx-auto text-16 uppercase md:mx-0 lg:mx-0"
                    >
                      <router-link
                        class="demo-link"
                        :to="{ name: 'en-how-to-use' }"
                      >
                        Try Zenerate
                      </router-link>
                    </button>
                    <button
                      type="button"
                      class="text-button mx-auto text-16 uppercase md:mx-0 lg:mx-0 group"
                    >
                      <router-link
                        class="demo-link flex items-center"
                        :to="{ name: 'en-how-to-use' }"
                      >
                        <span class="w-[120px]">Contact Us</span>
                        <Icon
                          icon-name="chevron-right"
                          icon-color="484A4F"
                          icon-hover-color="#4D49F4"
                          icon-active-color="#3E3CCB"
                          :width="24"
                          :height="24"
                        />
                      </router-link>
                    </button>
                  </div>
                </div>
                <div
                  class="gap-5 flex items-center md:items-start lg:items-start flex-col lg:flex-row lg:justify-center"
                >
                  <div class="flex gap-6 lg:gap-20 md:gap-x-14 md:gap-y-8">
                    <div class="w-88 h-28 md:w-110 md:h-37 lg:w-130 lg:h-44">
                      <img
                        :src="`./logo/logo_color_${partners[0].key}.png`"
                        class="h-full"
                      />
                    </div>
                    <div class="w-88 h-28 md:w-110 md:h-37 lg:w-130 lg:h-44">
                      <img
                        :src="`./logo/logo_color_${partners[1].key}.png`"
                        class="h-full"
                      />
                    </div>
                  </div>
                  <div class="flex gap-6 lg:gap-20 md:gap-x-14 md:gap-y-8">
                    <div class="w-88 h-28 md:w-110 md:h-37 lg:w-130 lg:h-44">
                      <img
                        :src="`./logo/logo_color_${partners[2].key}.png`"
                        class="h-full"
                      />
                    </div>
                    <div class="w-88 h-28 md:w-110 md:h-37 lg:w-130 lg:h-44">
                      <img
                        :src="`./logo/logo_color_${partners[3].key}.png`"
                        class="h-full"
                      />
                    </div>
                    <div class="w-88 h-28 md:w-110 md:h-37 lg:w-130 lg:h-44">
                      <img
                        :src="`./logo/logo_color_${partners[4].key}.png`"
                        class="h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Layout>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import Store from '/Store/index'
import { Icon, Layout, ListItem } from '/Components/EN'
import partners from '/Constants/partners'
</script>
<style lang="scss" scoped>
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
      top: -10%;
      left: -10%;
      animation-duration: 26s;
      animation-delay: -19s;
      transform-origin: -13vw 6vh;
      background-size: 80% 80%;
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
      width: 500px;
      height: 400px;

      top: 12%;
      right: 0%;
      animation: move;
      animation-duration: 26s;
      animation-delay: -19s;
      transform-origin: -13vw 6vh;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-image: radial-gradient(
          at 76% 48%,
          hsla(189, 100%, 60%, 0.85) 0px,
          transparent 50%
        ),
        radial-gradient(
          at 45% 25%,
          hsla(229, 100%, 96%, 0.7) 0px,
          transparent 50%
        );
    }

    span:nth-child(3) {
      //   width: 80vmin;
      //   height: 60vmin;
      width: 100%;
      height: 400px;
      bottom: 0%;
      right: 0%;
      animation-duration: 26s;
      animation-delay: -19s;
      transform-origin: -13vw 6vh;
      background-size: 100% 100%;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.text {
  margin: $gradient-title-margin 0 0 0;
  min-height: 200px;
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
