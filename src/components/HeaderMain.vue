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
            @click="router.push('/main/career')"
            @mouseover="setMenuHovered(false)"
          >
            {{ $t('menu.career') }}
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
        <div class="button-lang-wrapper">
          <button
            class="button-lang"
            @click="setLocale('en')"
            :class="{ active: locale === 'en' }"
          >
            <span>ENG</span>
          </button>
          <div class="horizontal-spacer"></div>
          <button
            class="button-lang"
            @click="setLocale('ko')"
            :class="{ active: locale != 'en' }"
          >
            <span>KOR</span>
          </button>
        </div>
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
  locale.value = loc
}

const isMenuHovered = ref(false)
const setMenuHovered = (flag) => {
  isMenuHovered.value = flag
}

import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  z-index: 1000;
  width: 100%;
  @include desktop {
    height: 100px;
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
      height: 70px;
      @include relative;
      margin: 6px 48px;
      margin: auto 48px;
      padding: 16px 0px;
      .navigation-main {
        @include flex($justify: space-between);

        .navigation-main-item {
          width: 152px;
          height: 36px;
          @include bold(20);
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
        @include absolute(top 58px);
        background: white;
        .navigation-sub-item {
          margin-right: 24px;
          // width: 60px;
          height: 20px;
          @include medium(14);
          &:hover {
            font-weight: $bold;
          }
        }
      }
    }
    .header-buttons-wrapper {
      position: relative;
      align-items: center;
      margin: auto 12px;
      padding: 16px 0px;
      @include center-center;
      .button-lang-wrapper {
        @include flex;
        .button-lang {
          color: $main;
          border-radius: 30px;
          @include center-center;
          @include desktop {
            span {
              @include medium(20);
              padding-bottom: 6px;
            }
          }
          @include tablet {
            span {
              @include medium(18);
              padding-bottom: 3px;
            }
          }
          @include mobile {
            span {
              @include medium(14);
              padding-bottom: 3px;
            }
          }
          &.active span {
            font-weight: bold;
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
