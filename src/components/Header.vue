<template>
  <div class="header-wrapper">
    <div class="header-inner">
      <div class="header-logo">
        <img class="logo" src="/img/logo_color.png" alt="" />
      </div>
      <div class="header-buttons-wrapper">
        <button class="button-lang" @click="setLocale(locale)">
          <span>{{ t('header.langButton') }}</span>
        </button>
        <button class="button-menu" @click="toggleDrawer">
          <i class="material-icons">{{
            props.showDrawer ? 'close' : 'menu'
          }}</i>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

const props = defineProps({
  showDrawer: Boolean,
})

const emit = defineEmits(['toggleDrawer'])
const toggleDrawer = () => {
  emit('toggleDrawer', !props.showDrawer)
}

const setLocale = (loc) => {
  locale.value = loc === 'ko' ? 'en' : 'ko'
}
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
        width: 160px;
        .logo {
          width: 100%;
        }
      }
      @include mobile {
        width: 120px;
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
