<template>
  <div class="header-wrapper" id="header">
    <div class="header-inner">
      <div
        class="header-logo hover-pointer"
        @click="router.push({ name: 'en-landing' })"
      >
        <img src="/img/logo_color.png" alt="" class="logo" />
      </div>
      <div class="header-navigation-wrapper hidden-en-mobile">
        <router-link
          v-for="(route, idx) in routes"
          :key="idx"
          class="navigation-link hover-pointer"
          :class="route.to"
          :to="{ name: route.to }"
          >{{ route.title }}
        </router-link>
      </div>
      <div class="header-demo-wrapper hidden-en-mobile">
        <router-link
          class="demo-link"
          :to="{
            name: 'en-contact',
            query: {
              from: 'demo',
            },
          }"
          >REQUEST A DEMO
        </router-link>
      </div>
      <div class="header-drawer-wrapper hover-pointer hidden-en-desktop">
        <span class="material-icons">menu</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineEmit, defineProps, ref } from 'vue'
const props = defineProps({
  showDrawer: Boolean,
})

const emit = defineEmit(['toggleDrawer'])
const toggleDrawer = () => {
  emit('toggleDrawer', !props.showDrawer)
}

// routes
import { useRouter } from 'vue-router'
const router = useRouter()
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
</script>
<style lang="scss">
.header-wrapper {
  @include fixed(top 0 left 0);
  width: 100vw;
  z-index: 1000;
  background: $white;
  @include en-desktop {
    height: 101px;
  }
  @include en-mobile {
    height: 49px;
  }
  .header-inner {
    height: 100%;
    width: 100%;
    @include flex($justify: space-between);
    @include en-desktop {
      padding: 0px 40px;
    }
    @include en-mobile {
      padding: 0px 28px;
    }
    .header-logo {
      margin: auto 0px;
      width: 124px;
      .logo {
        width: 100%;
      }
    }
    .header-navigation-wrapper {
      flex: 1;
      text-align: right;
      margin: auto 0px;
      @include flex($justify: flex-start);
      margin-left: 72px;
      .navigation-link {
        margin-right: 24px;
        @include semi-bold(16);
      }
    }
    .header-demo-wrapper {
      margin: auto 0px;
      margin-left: 48px;
      .demo-link {
        color: $main;
        @include semi-bold(16);
      }
    }
    .header-drawer-wrapper {
      margin: auto 0px;
      padding: 12px;
      padding-right: 0px;
      height: 100%;
      @include center-center;
      span {
        @include medium(28);
      }
    }
  }
}
</style>
