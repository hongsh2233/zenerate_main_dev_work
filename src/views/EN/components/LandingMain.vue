<template>
  <div class="landing-main-wrapper bg-gray-50 pt-[100vw] lg:pt-[50vw]">
    <div class="layout w-full flex flex-col gap-42">
      <div
        class="flex flex-col justify-start items-start gap-[38px] md:gap-[46px]"
      >
        <div
          class="flex flex-col justify-start items-start gap-[32px] md:gap-[36px]"
        >
          <div
            class="flex flex-col justify-start items-start relative gap-6 md:gap-8 lg:gap-10"
          >
            <p class="text-14 font-semibold text-left text-core-500">
              Explore ALL possibilities
            </p>
            <p class="text-26 text-left text-black">
              <span class="text-26 font-semibold text-left text-black"
                >Thousands of </span
              ><br /><span class="text-26 font-semibold text-left text-black"
                >feasible solutions</span
              ><span class="text-26 text-left text-black"> </span><br /><span
                class="text-26 text-left text-black"
                >within minutes</span
              >
            </p>
          </div>
          <div class="flex flex-col justify-start items-start relative gap-5">
            <p class="text-14 text-left text-black">
              <span class="text-14 text-left text-black"
                >Zenerate's AI-powered feasibility study tool</span
              ><br /><span class="text-14 text-left text-black"
                >provides thousands of zoning code compliant</span
              ><br /><span class="text-14 text-left text-black"
                >solutions that are optimized to maximize returns.
              </span>
            </p>
            <p class="w-[422px] text-14 text-left text-black">
              <span class="w-[422px] text-14 text-left text-black"
                >No more spending weeks and months </span
              ><br /><span class="w-[422px] text-14 text-left text-black"
                >to come up with 3-5 feasible options </span
              ><br /><span class="w-[422px] text-14 text-left text-black"
                >for development.</span
              >
            </p>
            <p class="text-14 text-left text-black">
              <span class="text-14 text-left text-black"
                >Now, you can explore all the possibilities </span
              ><br /><span class="text-14 text-left text-black"
                >of a site within minutes.
              </span>
            </p>
          </div>
        </div>
        <button type="button" class="primary-button text-16 uppercase">
          <router-link class="demo-link" :to="{ name: 'en-how-to-use' }">
            How Zenerate works
          </router-link>
        </button>
      </div>
      <div class="image-wrapper w-100vw h-[224px] overflow-hidden">
        <div class="bg-core-400 w-full h-full">
          애니메이션 빌딩 그림 움직이게
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import Store from '/Store/index'
</script>
<style lang="scss" scoped></style>
