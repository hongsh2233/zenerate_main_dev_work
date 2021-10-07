<template>
  <div class="drawer-wrapper">
    <div class="drawer-dimmer" @click="close"></div>
    <div class="drawer-wrapper">
      <div class="drawer-logo">
        <img src="/img/logo_color.png" alt="" />
        <CloseButton @close="close" />
      </div>
      <div class="drawer-items-wrapper">
        <div class="header-navigation-wrapper hidden-en-desktop">
          <div class="navgation-link-wrapper">
            <router-link
              v-for="(route, idx) in routes"
              :key="idx"
              class="navigation-link"
              :class="route.to"
              :to="{ name: route.to }"
              @click="close"
              >{{ route.title }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="header-demo-wrapper">
        <a
          class="demo-link"
          href="https://mailchi.mp/zenerate/zenerate-beta-test-signup"
          target="_blank"
          >Join Beta
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmit } from 'vue'
import { useRouter } from 'vue-router'
// @ts-ignore
import CloseButton from '/Components/EN/Icons/close.vue'

const router = useRouter()
// routes
const routes = [
  {
    title: 'ABOUT',
    to: 'en-about',
  },
  {
    title: 'SERVICES',
    to: 'en-services',
  },
  {
    title: 'PRICING',
    to: 'en-pricing',
  },
  {
    title: 'CAREERS',
    to: 'en-career',
  },
  {
    title: 'CONTACT',
    to: 'en-contact',
  },
]
const props = defineProps({
  showDrawer: Boolean,
})

const emit = defineEmit(['close'])
const close = () => {
  emit('close', null)
}
</script>
<style lang="scss" scoped>
.drawer-wrapper {
  @include relative;
  z-index: 9998;
  .drawer-dimmer {
    @include fixed(left 0 top 0);
    width: 100vw;
    height: 100vh;
    background: rgba($cr-text-dark-grey, 0.6);
    z-index: 1;
  }
  .drawer-wrapper {
    @include fixed(top 0 right -2px);
    width: 420px;
    height: 100%;
    background-color: $white;
    z-index: 2;
    padding: 32px 30px;
    @include en-mobile {
      width: 70%;
    }
    .drawer-logo {
      width: 100%;
      height: 24px;
      @include flex($justify: space-between);
      img {
        height: 100%;
      }
    }
    .drawer-items-wrapper {
      padding: 0px 0px;
      .navgation-link-wrapper {
        padding-top: 33px;
        @include flex($dir: column);
        .navigation-link {
          @include medium(14);
          line-height: 40px;
          padding: 8px 0px;
          border-bottom: 1px solid $cr-footer;
        }
      }
    }
    .header-demo-wrapper {
      position: absolute;
      @include bold(14);
      width: 100px;
      text-align: center;
      bottom: 128px;
      right: 30px;
      line-height: 50px;
      color: $cr-main-blue;
      border-bottom: solid 1px $cr-main-blue;
    }
  }
}
</style>
