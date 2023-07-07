<template>
  <div class="drawer-wrapper banner">
    <div class="drawer-dimmer" @click="close"></div>
    <div class="drawer-wrapper">
      <div class="drawer-items-wrapper">
        <div class="header-navigation-wrapper hidden-en-desktop">
          <div class="navgation-link-wrapper">
            <template v-for="(tab, idx) in MENU_DATA" :key="idx">
              <p class="navigation-link" @click="() => selectTab(tab.key)">
                {{ tab.title }}
                <i
                  class="material-icons"
                  :class="{ active: toggleTab[tab.key] }"
                >
                  keyboard_arrow_down
                </i>
              </p>
              <transition name="slide-up">
                <div v-show="toggleTab[tab.key]" class="navigation-link-list">
                  <template v-for="(nav, idx) in tab.children" :key="idx">
                    <a
                      v-if="nav.to === 'en-overview'"
                      :href="'https://maps.zenerate.ai'"
                      class="navigation-link sub"
                      :class="nav.to"
                      @click="close"
                    >
                      <component
                        :is="ZmapsIcon"
                        :width="26"
                        :height="26"
                        class="sub-icon"
                      />
                      Z-Maps
                    </a>

                    <router-link
                      :to="{ name: nav.to }"
                      custom
                      v-slot="{ href, navigate }"
                    >
                      <a
                        :href="href"
                        @click="selectSubLink(navigate, $event)"
                        class="navigation-link sub"
                      >
                        <IconBase
                          :icon-name="nav.icon"
                          :width="26"
                          :height="26"
                          :transition="false"
                          class="sub-icon"
                        />
                        {{ nav.title }}
                      </a>
                    </router-link>
                  </template>
                </div>
              </transition>
            </template>
            <router-link
              class="demo-link navigation-link"
              :to="{ name: 'en-demo' }"
              @click="close"
            >
              Get a Demo
              <i class="material-icons"> east </i>
            </router-link>
          </div>
          <div class="info-wrapper">
            <span class="copyright"
              >© Zenerate, Inc. 2023. All rights reserved.</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import ZmapsIcon from './Icons/header/ZmapsIcon.vue'
import MENU_DATA from '/Constants/menu'
import IconBase from './ui/IconBase.vue'

const props = defineProps({
  showDrawer: Boolean,
})

const toggleTab = ref({
  product: false,
  resources: false,
  company: false,
})
const currentTab = ref(null)
const selectTab = (primary): void => {
  // if (currentTab.value == primary) {
  //   currentTab.value = null
  // } else {
  //   currentTab.value = primary
  // }
  toggleTab.value[primary] = !toggleTab.value[primary]
}

const goToKrPage = () => {
  window.open('https://www.zenerate.ai/kr', '_blank')
}

const emit = defineEmits(['close'])
const close = () => {
  emit('close')
}
const selectSubLink = (navigate, event) => {
  emit('close')
  navigate(event)
}
</script>
<style lang="scss" scoped>
.drawer-wrapper {
  @include relative;
  min-width: 260px;
  z-index: 9998;
}

.drawer-dimmer {
  @include fixed(left 0 top 0);
  width: 100vw;
  height: 100vh;
  background: rgba($text-darkgrey, 0.6);
  z-index: 9996;
}
.drawer-wrapper {
  @include fixed(top 0px right -2px);
  @include flex($dir: column, $justify: flex-end);
  width: calc(100% + 8px);
  height: 100%;
  background-color: white;
  z-index: 9997;

  &.banner {
    // banner top
    @include fixed(top 36px right -2px);
    height: calc(100% - 36px);

    .drawer-items-wrapper {
      height: calc(100% - 94px);
    }

    @include en-mobile-banner-large {
      @include fixed(top 50px right -2px);
      height: calc(100% - 50px);

      .drawer-items-wrapper {
        height: calc(100% - 108px);
      }
    }
  }
}

.drawer-logo {
  @include flex($justify: space-between);
  align-items: flex-start;
  width: 100%;
  height: 70px;

  @include en-mobile {
    height: 58px;
  }

  img {
    height: 100%;
  }

  .icon-close {
    color: theme('colors.gray.700');
    font-size: 28px;
  }
}
.drawer-items-wrapper {
  height: calc(100% - 70px);
  padding: 0px;

  @include en-mobile {
    height: calc(100% - 58px);
  }
  .header-navigation-wrapper {
    @include flex($dir: column, $justify: space-between);
    height: 100%;
    flex-wrap: nowrap;
    max-height: calc(100vh - 58px);
    overflow-y: auto;
    .navgation-link-wrapper {
      @include flex($dir: column);

      &:first-child {
        border-top: 1px solid theme('colors.gray.100');
      }

      .navigation-link-list {
        @include vertical-center();
        padding: 8px 0px;
        border-bottom: 1px solid theme('colors.gray.100');
        background-color: #fafbfe;
      }

      .navigation-link {
        @include flex($justify: space-between);
        @include medium(16);
        align-items: center;
        height: 62px;
        padding: 0 24px;
        cursor: pointer;

        &:not(.sub) {
          border-bottom: 1px solid theme('colors.gray.100');
        }

        &.sub {
          @include medium(16);
          @include flex();
          height: 54px;
          padding: 14px 24px;
          align-items: center;
          color: theme('colors.gray.700');

          .sub-icon {
            margin-right: 8px;
            :deep(path) {
              fill: theme('colors.gray.700');
            }
          }

          &:hover,
          :active {
            color: theme('colors.primary.DEFAULT');

            :deep(path) {
              fill: theme('colors.primary.DEFAULT');
            }
          }
        }

        &.demo-link {
          @include semi-bold(16);
          @include flex();
          height: 66px;
          align-items: center;
          color: theme('colors.primary.DEFAULT');

          i {
            @include semi-bold(18);
            color: theme('colors.primary.DEFAULT');
            margin: 0px 0px 0px 14px;
          }

          &:hover,
          :active {
            color: theme('colors.core.700');

            i {
              color: theme('colors.core.700');
            }
          }
        }
      }
    }

    .info-wrapper {
      @include flex($dir: column);
      padding: 20px 48px;

      @include en-mobile {
        padding: 20px 24px;
      }

      .lang-button {
        @include flex($justify: space-between);
        @include bold(18);
        align-items: center;
        width: 214px;
        height: 28px;
        margin-bottom: 28px;
        padding: 0px;
        color: $text-darken-5;

        i:last-child {
          @include bold(18);
        }

        @include en-mobile {
          margin-bottom: 16px;
        }
      }

      .copyright {
        @include regular(13);
        font-weight: 500;
        color: theme('colors.gray.700');
      }
    }
  }
}
</style>
