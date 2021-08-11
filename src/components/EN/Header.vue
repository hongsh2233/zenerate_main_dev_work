<template>
  <div class="header-wrapper" id="header">
    <div class="header-inner">
      <div
        class="header-logo hover-pointer"
        @click="router.push({ name: 'en-landing' })"
      >
        <img src="/img/logo_color.png" alt="" class="logo" />
      </div>
      <div class="header-navigation-wrapper only-en-desktop">
        <router-link
          v-for="(route, idx) in routes"
          :key="idx"
          class="navigation-link hover-pointer"
          :class="route.to"
          :to="{ name: route.to }"
          >{{ route.title }}
        </router-link>
      </div>
      <div class="header-demo-wrapper only-en-desktop">
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
          <MenuIcon @toggle="toggleDrawer" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineEmit, defineProps, ref } from 'vue'
// @ts-ignore
import MenuIcon from '/Components/EN/Icons/menu.vue'

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
    height: 80px;
  }
  @include en-tablet {
    height: 65px;
  }
  @include en-mobile {
    height: 50px;
  }
  .header-inner {
    height: 100%;
    margin: 0px auto;
    @include flex($justify: space-between);
    @include container;
    @include en-desktop {
      padding: 0 !important;
    }
    @include en-tablet {
      padding: 0px 10px !important;
      width: 100%;
    }
    @include en-mobile {
      padding: 0px 10px !important;
      width: 100%;
    }
    .header-logo {
      margin: auto 0px;
      @include en-desktop {
        width: 124px;
      }
      @include en-tablet {
        width: 106px;
      }
      @include en-mobile {
        width: 80px;
      }
      .logo {
        width: 100%;
      }
    }
    .header-navigation-wrapper {
      flex: 1;
      text-align: right;
      margin: auto 0px;
      @include flex($justify: flex-end);
      .navigation-link {
        margin-left: 56px;
        @include button-gnb;
        font-size: 14px;
      }
    }
    .header-demo-wrapper {
      @include button-2;
      margin: auto 0px;
      margin-left: 64px;
      .demo-link {
        @include bold(14);
      }
    }
    .header-drawer-wrapper {
      margin: auto 0px;
      padding: 12px;
      padding-right: 0px;
      height: 100%;
      position: absolute;
      right: 20px;
      @include center-center;
      span {
        @include medium(28);
      }
    }
  }
}
</style>
