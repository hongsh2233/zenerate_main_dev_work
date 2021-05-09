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
      <div class="header-buttons-wrapper">
        <button class="button-lang" @click="setLocale(locale)">
          <span>{{ t('header.langButton') }}</span>
        </button>
        <button class="button-menu" @click="toggleDrawer(true)">
          <i class="material-icons">menu</i>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

import { defineEmit } from 'vue'
const emit = defineEmit(['toggleDrawer'])
const toggleDrawer = (flag) => {
  emit('toggleDrawer', flag)
}

const setLocale = (loc) => {
  locale.value = loc === 'ko' ? 'en' : 'ko'
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
  z-index: 100;
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
