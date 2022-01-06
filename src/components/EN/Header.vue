<template>
  <div class="header-wrapper" id="header">
    <div class="header-inner">
      <div
        class="header-logo hover-pointer"
        @click="router.push({ name: 'en-landing' }) && toggleDrawer(false)"
      >
        <img class="logo" src="/img/logo_color.png" alt="logo" />
        <!-- <img class="logo hidden-desktop" src="/img/logo_short.svg" alt="logo" /> -->
      </div>
      <div class="header-navigation-wrapper only-en-desktop">
        <router-link
          v-for="(route, idx) in routes"
          :key="idx"
          class="navigation-link hover-pointer"
          :to="{ name: route.to }"
          >{{ route.title }}
        </router-link>
        <button
          type="button"
          class="navigation-link hover-pointer lang-button"
          :class="{ active: showLang }"
          @click="() => toggleLang()"
        >
          <i class="material-icons"> language </i>
          <p>ENG</p>
          <span v-show="showLang">/</span>
          <a
            v-show="showLang"
            href="https://www.zenerate.ai/kr"
            target="_blank"
          >
            한국어</a
          >
        </button>
      </div>
      <div class="header-demo-wrapper only-en-desktop" @click="goToApp()">
        <a class="demo-link" href="https://app.zenerate.ai" target="_blank"
          >JOIN APP
        </a>
      </div>
      <div class="header-drawer-wrapper hover-pointer hidden-en-desktop">
        <MenuIcon @toggle="toggleDrawer" :showDrawer="showDrawer" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

import MenuIcon from '/Components/EN/Icons/menu.vue'

const props = defineProps({
  showDrawer: Boolean,
})

const emit = defineEmits(['toggleDrawer'])
const toggleDrawer = (flag?: boolean) => {
  emit('toggleDrawer', flag)
}

const showLang = ref(false)
const toggleLang = (flag?: boolean) => {
  const f = flag == null ? !showLang.value : flag
  showLang.value = f
  console.log('ttt', flag)
}

import { useGtag } from 'vue-gtag-next'
const { event } = useGtag()
const goToApp = () => {
  event('generate_lead', {
    event_category: 'engagement',
    event_label: '(not yet)',
  })
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
    title: 'CASE STUDIES',
    to: 'en-case-studies',
  },
  {
    title: 'SERVICE',
    to: 'en-services',
  },
  // {
  //   title: 'PRICING',
  //   to: 'en-pricing',
  // },
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
<style lang="scss" scoped>
.header-wrapper {
  @include fixed(top 0 left 0);
  width: 100vw;
  z-index: 1000;
  background: $white;
  @include en-desktop {
    height: 80px;
  }
  @include en-tablet {
    height: 76px;
  }
  @include en-mobile {
    height: 64px;
  }
  .header-inner {
    @include flex($justify: space-between);
    @include container;
    height: 100%;

    @include en-desktop {
      width: auto;
      margin: 0px 60px;
      padding: 0 !important;
    }
    @include en-tablet {
      padding: 0px 40px !important;
      width: 100%;
    }
    @include en-mobile {
      padding: 0px 20px !important;
      width: 100%;
    }
    .header-logo {
      @include flex();
      align-items: center;
      margin: auto 0px;
      z-index: 9999;
      @include desktop {
        width: 160px;
        .logo {
          width: 100%;
        }
      }
      @include tablet {
        width: auto;
        height: 100%;
        .logo {
          width: 134px;
        }
      }
      @include mobile {
        width: auto;
        height: 100%;
        .logo {
          width: 134px;
        }
      }
    }
    .header-navigation-wrapper {
      @include flex($justify: flex-start);
      align-items: center;
      flex: 1;
      flex-wrap: nowrap;
      text-align: center;
      margin: auto 0px;
      .navigation-link {
        @include regular(16);
        margin-left: 34px;
        font-size: 16px;
        line-height: 20px;
        color: $text-darken-5;
        transition: color ease-in-out 0.2s;

        &:first-child {
          margin-left: 80px;
        }

        &:not(.lang-button):hover {
          transition: color ease-in-out 0.2s;
          color: $text-darken;
        }

        &.router-link-active {
          font-weight: 600;
          color: $text-darken;
        }

        &.lang-button {
          @include flex($justify: flex-start);
          align-items: center;
          width: 163px;
          height: 36px;

          &:hover {
            transition: color ease-in-out 0.2s;
            color: $text-darken;
          }

          i {
            @include regular(22);
            margin-right: 12px;
          }

          p {
            margin-right: 8px;
          }

          &.active {
            border-radius: 18px;
            margin-left: 26px;
            padding-left: 14px;
            box-shadow: 0px 0px 20px rgba(211, 210, 242, 0.6);
            transition: box-shadow ease-in-out 0.2s;
            transition: color ease-in-out 0.2s;

            &:hover {
              color: $text-darken-5;
            }

            p {
              &:hover {
                transition: color ease-in-out 0.2s;
                color: $main-blue;
              }
            }

            a {
              height: 26px;
              margin-left: 8px;
              font-size: 15px;
              line-height: 27px;

              &:hover {
                transition: color ease-in-out 0.2s;
                color: $main-blue;
                font-weight: 500;
              }
            }
          }
        }
      }
    }
    .header-demo-wrapper {
      @include button-2($width: 104px, $height: 42px);
      margin: auto 0px;
      margin-left: 64px;
      .demo-link {
        @include regular(16);
        color: $main-core;
      }
    }
    .header-drawer-wrapper {
      @include center-center;
      margin: auto 0px;
      padding: 12px;
      padding-right: 0px;
      height: 100%;
      position: absolute;
      right: 0px;
      span {
        @include medium(28);
      }
    }
  }
}
</style>
