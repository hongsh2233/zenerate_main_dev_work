<template>
  <section class="section_top">
    <div class="w-full h-auto">
      <div>
        <div class="section-layout">
          <div class="gradient-area">
            <div
              class="background-wrapper z-[-1] top-[-80px] md:top-[-108px] lg:top-[-180px]"
            >
              <div
                class="background-back absolute top-0 left-0 z-[-2] w-[30vw] h-[472px] md:h-[430px] lg:h-[648px] rounded-br-[90%]"
              ></div>
              <div class="background h-[472px] md:h-[456px] lg:h-[648px]">
                <Layout class="relative h-full">
                  <span class="z-[3]"></span>
                  <span class="z-[2]"></span>
                  <span class="z-[1]"></span>
                </Layout>
              </div>
            </div>
            <Layout class="pb-44 md:pb-56 lg:pb-50">
              <div
                class="w-full flex flex-col gap-44 md:gap-[88px] lg:gap-[140px]"
              >
                <div
                  class="grid grid-rows-[auto_auto] md:grid-cols-[auto_auto] md:grid-rows-[auto_auto] lg:grid-cols-[auto_auto] lg:grid-rows-[auto_auto] gap-24 md:gap-x-34 md:gap-y-[92px] lg:gap-x-38 lg:gap-y-[104px] mt-100 md:mt-[147px] lg:mt-[182px]"
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
                      class="text-m-14-medium w-[242px] md:w-[340px] lg:w-[370px] md:text-t-16-regular lg:text-d-18-regular relative text-white"
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
                    <div class="image-wrapper relative w-full min-h-[310px]">
                      <div
                        class="absolute top-0 right-[-60px] md:right-[-236px] lg:right-[-236px] md:top-[-36px] lg:top-[-60px]"
                      >
                        <picture>
                          <source
                            srcset="/en/img/landing_top_small.png"
                            media="(max-width: 767px)"
                          />
                          <source
                            srcset="/en/img/landing_top_medium.png"
                            media="(max-width: 1023px)"
                          />
                          <source
                            srcset="/en/img/landing_top_large.png"
                            media="(max-width: 1920px)"
                          />
                          <img
                            src="/en/img/landing_top_large.png"
                            alt="Zenerate"
                            class="w-[356px] md:w-[568px] lg:w-[654px] h-full"
                          />
                        </picture>
                      </div>
                    </div>
                  </ListItem>
                  <div
                    class="flex flex-col md:flex-row gap-y-20 gap-x-8 lg:flex-row z-[1]"
                  >
                    <Button
                      class="w-[150px] lg:w-[158px]"
                      @click="openTryPopup"
                    >
                      Try Zenerate
                    </Button>

                    <Button variant="text" class="w-[150px] lg:w-[158px]">
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
                    </Button>
                  </div>
                </div>
                <div
                  class="gap-5 flex items-center md:items-start lg:items-start flex-col lg:flex-row lg:justify-center"
                >
                  <div class="flex gap-8 lg:gap-20 md:gap-x-14 md:gap-y-8">
                    <div class="w-88 h-32 md:w-110 md:h-37 lg:w-130 lg:h-44">
                      <img
                        :src="`./logo/logo_color_${partners[0].key}.png`"
                        class="h-full"
                      />
                    </div>
                    <div class="w-88 h-32 md:w-110 md:h-37 lg:w-130 lg:h-44">
                      <img
                        :src="`./logo/logo_color_${partners[1].key}.png`"
                        class="h-full"
                      />
                    </div>
                  </div>
                  <div class="flex gap-8 md:gap-x-14 md:gap-y-8 lg:gap-20">
                    <div class="w-88 h-32 md:w-110 md:h-37 lg:w-130 lg:h-44">
                      <img
                        :src="`./logo/logo_color_${partners[2].key}.png`"
                        class="h-full"
                      />
                    </div>
                    <div class="w-88 h-32 md:w-110 md:h-37 lg:w-130 lg:h-44">
                      <img
                        :src="`./logo/logo_color_${partners[3].key}.png`"
                        class="h-full"
                      />
                    </div>
                    <div class="w-88 h-32 md:w-110 md:h-37 lg:w-130 lg:h-44">
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
import { MENU_EVENT } from '/Constants/eventConstant'
import Emitter from '/Libraries/bus'
import { Icon, Layout, ListItem, Button } from '/Components/EN'
import partners from '/Constants/partners'

const openTryPopup = () => {
  Emitter.emit(MENU_EVENT.TOGGLE_TRY_POPUP, true)
}
</script>
<style lang="scss" scoped>
$container_width: 1080px;
$standard_space: 24px;
$section-gap: $standard_space;
$gradient-padding: 120px;
$gradient-title-margin: 100px;
$section-skew-Y: -12deg;
$section-angle-sin: 0.212;
$transform-origin-x: calc($section-gap * 0.8);

@keyframes move {
  50% {
    transform: translate3d(0, 0, 1px) rotate(8deg);
  }
}

@keyframes blur {
  50% {
    opacity: 1.2;
    transform: scale(0.7);
  }
}

.background-wrapper {
  width: calc(100vw + 24px);
  height: 100%;
  // height: calc(
  //   100% + $gradient-padding + $gradient-title-margin + $transform-origin-x *
  //     $section-angle-sin
  // );
  // top: -$gradient-title-margin;
  //   top: auto;
  left: calc($section-gap * -1);
  -webkit-transform-origin: $transform-origin-x 100%;
  transform-origin: $transform-origin-x 100%;

  //   overflow: hidden;

  .background-back {
    position: absolute;
    top: -24%;
    width: 100%;
    height: 30%;
    -webkit-transform: skewY(-8deg);
    transform: skewY(-8deg);
    background-color: hsla(234, 71%, 62%, 1);
    outline: 1px solid transparent;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;

    @media only screen and (min-width: theme('screens.md.min')) and (max-width: theme('screens.md.max')) {
      -webkit-transform: skewY(-10deg);
      transform: skewY(-10deg);
    }

    @media only screen and (min-width: theme('screens.lg.min')) {
      -webkit-transform: skewY(-12deg);
      transform: skewY(-12deg);
    }
  }

  .background {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    -webkit-transform: skewY(-8deg);
    transform: skewY(-8deg);
    background-color: hsla(234, 71%, 62%, 1);
    outline: 1px solid transparent;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    // overflow: hidden;
    @media only screen and (min-width: theme('screens.md.min')) and (max-width: theme('screens.md.max')) {
      -webkit-transform: skewY(-10deg);
      transform: skewY(-10deg);
    }

    @media only screen and (min-width: theme('screens.lg.min')) {
      -webkit-transform: skewY(-12deg);
      transform: skewY(-12deg);
    }

    span {
      backface-visibility: hidden;
      position: absolute;
    }

    span:nth-child(1) {
      width: 360px;
      height: 440px;
      top: -100px;
      left: calc(100% - 320px - 120px);

      border-radius: 50%;
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

      @media only screen and (min-width: theme('screens.md.min')) and (max-width: theme('screens.md.max')) {
        width: 540px;
        height: 540px;
        top: -120px;
        left: calc(100% - 720px - 216px);
      }

      @media only screen and (min-width: theme('screens.lg.min')) {
        width: 800px;
        height: 700px;
        top: -190px;
        left: calc(100% - 1024px - 170px);
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

      animation: blur;
      animation-duration: 45;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      transform-origin: -13vw 6vh;

      background-size: 80% 80%;
      background-repeat: no-repeat;
    }

    span:nth-child(2) {
      width: 400px;
      height: 280px;
      top: -72px;
      right: calc(100% - 320px - 200px);
      overflow: hidden;

      animation: move;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-duration: 26s;
      animation-delay: -19s;
      //  animation-duration: 45;

      transform-origin: -13vw 6vh;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-image: radial-gradient(
          at 58% 58%,
          hsla(189, 100%, 60%, 0.6) 0px,
          transparent 50%
        ),
        radial-gradient(
          at 44% 50%,
          hsla(229, 100%, 96%, 0.7) 0px,
          transparent 50%
        );

      @media only screen and (min-width: theme('screens.md.min')) and (max-width: theme('screens.md.max')) {
        width: 600px;
        height: 440px;
        top: -18%;
        right: -26%;

        background-image: radial-gradient(
            at 58% 58%,
            hsla(189, 100%, 60%, 0.6) 0px,
            transparent 50%
          ),
          radial-gradient(
            at 44% 50%,
            hsla(229, 100%, 96%, 0.7) 0px,
            transparent 50%
          );
      }

      @media only screen and (min-width: theme('screens.lg.min')) {
        width: 700px;
        height: 500px;
        top: 0px;
        right: calc(100% - 1024px - 200px);

        background-image: radial-gradient(
            at 58% 66%,
            hsla(189, 100%, 60%, 0.6) 0px,
            transparent 50%
          ),
          radial-gradient(
            at 44% 50%,
            hsla(229, 100%, 96%, 0.7) 0px,
            transparent 50%
          );
      }
    }

    span:nth-child(3) {
      width: 100%;
      height: 260px;
      bottom: 0%;
      right: 0%;
      overflow: hidden;

      background-image: radial-gradient(
          at 63% 90%,
          hsla(258, 73%, 37%, 1) 0px,
          transparent 50%
        ),
        radial-gradient(
          at 94% 54%,
          hsla(229, 63%, 52%, 0.7) 0px,
          transparent 50%
        );

      @media only screen and (min-width: theme('screens.md.min')) and (max-width: theme('screens.md.max')) {
        height: 200px;
      }

      @media only screen and (min-width: theme('screens.lg.min')) {
        width: 100%;
        height: 400px;
        bottom: 0%;
        right: 0%;
      }

      animation-duration: 26s;
      animation-delay: -19s;
      transform-origin: -13vw 6vh;
      background-size: 100% 100%;
      background-color: hsla(234, 71%, 62%, 1);
    }
  }
}
</style>
