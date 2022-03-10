<template>
  <div class="drawer-wrapper">
    <div class="drawer-dimmer" @click="close"></div>
    <div class="drawer-wrapper">
      <div class="drawer-items-wrapper">
        <div class="header-navigation-wrapper hidden-en-desktop">
          <div class="navgation-link-wrapper">
            <template v-for="(tab, idx) in routes" :key="idx">
              <p class="navigation-link" @click="() => selectTab(tab.title)">
                {{ tab.title }}
              </p>
              <transition name="slide-up">
                <div
                  v-show="currentTab === tab.title"
                  class="navigation-link-list"
                >
                  <router-link
                    v-for="(nav, idx) in tab.children"
                    :key="idx"
                    class="navigation-link sub"
                    :class="nav.to"
                    :to="{ name: nav.to }"
                    @click="close"
                    >{{ nav.title }}
                  </router-link>
                </div>
              </transition>
            </template>
            <a
              class="demo-link navigation-link"
              href="https://app.zenerate.ai"
              target="_blank"
              >JOIN APP
              <i class="material-icons"> east </i>
            </a>
          </div>
          <div class="info-wrapper">
            <button type="button" class="lang-button" @click="goToKrPage()">
              <i class="material-icons"> language </i>

              <span> zenerate.ai/kr </span>
              <i class="material-icons"> east </i>
            </button>
            <span class="copyright"
              >© Zenerate, Inc. 2021. All rights reserved</span
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

const props = defineProps({
  showDrawer: Boolean,
})

// routes
const router = useRouter()
const routes = [
  {
    title: 'Product',
    children: [
      {
        title: 'Overview',
        to: 'en-overview',
      },
      {
        title: 'Pricing',
        to: 'en-pricing',
      },
    ],
  },
  {
    title: 'Resources',
    children: [
      {
        title: 'How-To-Use',
        to: 'en-how-to-use',
      },
      {
        title: 'Case Studies',
        to: 'en-case-studies',
      },
    ],
  },
  {
    title: 'Company',
    children: [
      {
        title: 'About Us',
        to: 'en-about',
      },
      {
        title: 'Careers',
        to: 'en-career',
      },
      {
        title: 'Contact',
        to: 'en-contact',
      },
    ],
  },
]

const currentTab = ref(null)
const selectTab = (primary: String): void => {
  if (currentTab.value == primary) {
    console.log('!!')
    currentTab.value = null
  } else {
    console.log('??')
    currentTab.value = primary
  }
}

const goToKrPage = () => {
  window.open('https://www.zenerate.ai/kr', '_blank')
}

const emit = defineEmits(['close'])
const close = () => {
  emit('close', null)
}
</script>
<style lang="scss" scoped>
.drawer-wrapper {
  @include relative;
  z-index: 999;
  .drawer-dimmer {
    @include fixed(left 0 top 0);
    width: 100vw;
    height: 100vh;
    background: rgba($text-darkgrey, 0.6);
    z-index: 1;
  }
  .drawer-wrapper {
    @include fixed(top 0px right -2px);
    @include flex($dir: column, $justify: flex-end);
    width: calc(100% + 8px);
    height: 100%;
    background-color: $white;
    z-index: 2;

    .drawer-logo {
      @include flex($justify: space-between);
      align-items: flex-start;
      width: 100%;
      height: 76px;

      @include en-mobile {
        height: 64px;
      }

      img {
        height: 100%;
      }

      .icon-close {
        color: $text-grey;
        font-size: 28px;
      }
    }
    .drawer-items-wrapper {
      height: calc(100% - 111px);
      padding: 0px;

      @include en-mobile {
        height: calc(100% - 99px);
      }
      .header-navigation-wrapper {
        @include flex($dir: column, $justify: space-between);
        height: 100%;
        flex-wrap: nowrap;
        .navgation-link-wrapper {
          @include flex($dir: column);

          &:first-child {
            border-top: 1px solid $footer;
          }

          .navigation-link-list {
            @include vertical-center();
          }

          .navigation-link {
            @include medium(18);
            line-height: 40px;
            border-bottom: 1px solid $footer;
            padding: 16px 48px;

            &.sub {
              margin-left: 20px;
            }

            @include en-mobile {
              padding: 10px 28px;
            }

            &.demo-link {
              @include flex();
              align-items: center;
              font-weight: 700;
              color: $main-core;
              i {
                @include bold(18);
                margin: 0px 0px 3px 14px;
              }
            }
          }
        }

        .info-wrapper {
          @include flex($dir: column);
          padding: 0px 48px 40px;

          @include en-mobile {
            padding: 0px 24px 24px;
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
            @include regular(14);
            color: #808394;
          }
        }
      }
    }
  }
}
</style>
