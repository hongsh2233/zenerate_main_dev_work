<template>
  <div class="header-wrapper">
    <div class="header-inner">
      <div class="header-logo hover-pointer" @click="router.push('/')">
        <img
          class="logo hidden-tablet hidden-mobile"
          src="/img/logo_color.png"
          alt=""
        />
        <img class="logo hidden-desktop" src="/img/logo_short.svg" alt="" />
      </div>
      <div
        class="header-navigation-wrapper hidden-mobile hidden-tablet"
        @mouseleave="setMenuHovered(null)"
      >
        <div class="navigation-main">
          <div
            class="navigation-main-item hover-pointer"
            @click="router.push('/main/about')"
            @mouseover="setMenuHovered(true)"
          >
            {{ $t('menu.ourCompany') }}
          </div>
          <div
            class="navigation-main-item hover-pointer"
            @click="router.push('/main/news')"
            @mouseover="setMenuHovered(false)"
          >
            {{ $t('menu.news') }}
          </div>
          <div
            class="navigation-main-item hover-pointer"
            @click="router.push('/main/service')"
            @mouseover="setMenuHovered(false)"
          >
            {{ $t('menu.service') }}
          </div>
          <div
            class="navigation-main-item hover-pointer"
            @click="router.push('/main/contact')"
            @mouseover="setMenuHovered(false)"
          >
            {{ $t('menu.contact') }}
          </div>
        </div>
        <div class="navigation-sub" v-show="isMenuHovered">
          <div
            class="navigation-sub-item hover-pointer"
            @click="router.push('/main/about')"
          >
            {{ $t('menu.timeline') }}
          </div>
          <div
            class="navigation-sub-item hover-pointer"
            @click="router.push('/main/team')"
          >
            {{ $t('menu.team') }}
          </div>
        </div>
      </div>
      <div class="header-buttons-wrapper">
        <button class="button-lang" @click="setLocale(locale)">
          <span>{{ t('header.langButton') }}</span>
        </button>
        <button class="button-menu hidden-desktop" @click="toggleDrawer">
          <i class="material-icons">
            {{ props.showDrawer ? 'close' : 'menu' }}
          </i>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
import { defineEmit, defineProps, ref } from 'vue'

const props = defineProps({
  showDrawer: Boolean,
})

const emit = defineEmit(['toggleDrawer'])
const toggleDrawer = () => {
  emit('toggleDrawer', !props.showDrawer)
}

const setLocale = (loc) => {
  locale.value = loc === 'ko' ? 'en' : 'ko'
}

const isMenuHovered = ref(false)
const setMenuHovered = (flag) => {
  isMenuHovered.value = flag
}

import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<style lang="scss" scoped>
.header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  z-index: 1000;
  width: 100%;
  @include desktop {
    height: 81px;
  }
  @include tablet {
    height: 61px;
  }
  @include mobile {
    height: 49px;
  }
  .header-inner {
    height: 100%;
    margin: 0px auto;
    @include flex($justify: space-between);
    @include desktop {
      width: 1280px;
      padding: 0px 56px;
    }
    @include tablet {
      padding: 0px 32px;
    }
    @include mobile {
      padding: 0px 28px;
    }
    .header-logo {
      margin: auto 0px;
      @include desktop {
        width: 180px;
        .logo {
          width: 100%;
        }
      }
      @include tablet {
        width: 24px;
        .logo {
          width: 100%;
        }
      }
      @include mobile {
        width: 18px;
        .logo {
          width: 100%;
        }
      }
    }
    .header-navigation-wrapper {
      flex: 1;
      height: 80px;
      @include relative;
      margin: 16px 48px;
      .navigation-main {
        @include flex($justify: space-between);
        .navigation-main-item {
          width: 192px;
          height: 48px;
          @include flex($justify: center);
          align-items: center;
          border-bottom: solid 2px transparent;
          &:hover {
            border-bottom-color: $main;
          }
        }
      }
      .navigation-sub {
        @include flex;
        @include absolute(top 56px left 48px);
        .navigation-sub-item {
          margin-right: 24px;
          width: 60px;
          height: 20px;
          @include medium(15);
          &:hover {
            font-weight: $bold;
          }
        }
      }
    }
    .header-buttons-wrapper {
      margin: auto 0px;
      @include flex;
      align-items: center;
      .button-lang {
        background-color: $main;
        color: $white;
        border-radius: 30px;
        @include desktop {
          width: 84px;
          height: 35px;
          margin-right: 20px;
          span {
            @include bold(20);
          }
        }
        @include tablet {
          width: 72px;
          height: 29px;
          margin-right: 12px;
          span {
            @include bold(18);
            padding-bottom: 3px;
          }
        }
        @include mobile {
          width: 64px;
          height: 25px;
          margin-right: 8px;
          span {
            @include bold(14);
            padding-bottom: 3px;
          }
        }
      }
      .button-menu {
        background: transparent;
        i {
          color: $main;
          @include desktop {
            font-size: 52px;
          }
          @include tablet {
            font-size: 32px;
          }
          @include mobile {
            font-size: 28px;
          }
        }
      }
    }
  }
}
</style>
