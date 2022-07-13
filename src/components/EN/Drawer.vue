<template>
  <div class="drawer-wrapper">
    <div class="drawer-dimmer" @click="close"></div>
    <div class="drawer-wrapper">
      <div class="drawer-items-wrapper">
        <div class="header-navigation-wrapper hidden-en-desktop">
          <div class="navgation-link-wrapper">
            <template v-for="(tab, idx) in routes" :key="idx">
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
                    <router-link
                      :to="{ name: nav.to }"
                      class="navigation-link sub"
                      :class="nav.to"
                      @click="close"
                    >
                      <component :is="nav.icon" :width="30" :height="30" />

                      {{ nav.title }}
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
              TRY ZENERATE
              <i class="material-icons"> east </i>
            </router-link>
          </div>
          <div class="info-wrapper">
            <span class="copyright"
              >© Zenerate, Inc. 2022. All rights reserved</span
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
import MenuIcon from './Icons/MenuIcon.vue'
import AboutIcon from './Icons/header/AboutIcon.vue'
import CareersIcon from './Icons/header/CareersIcon.vue'
import CaseIcon from './Icons/header/CaseIcon.vue'
import ContactIcon from './Icons/header/ContactIcon.vue'
import FAQIcon from './Icons/header/FAQIcon.vue'
import HowToUseIcon from './Icons/header/HowToUseIcon.vue'
import OverviewIcon from './Icons/header/OverviewIcon.vue'
import PricingIcon from './Icons/header/PricingIcon.vue'

const props = defineProps({
  showDrawer: Boolean,
})

// routes
const router = useRouter()
const routes = [
  {
    key: 'product',
    title: 'Product',
    children: [
      {
        title: 'Overview',
        to: 'en-overview',
        icon: OverviewIcon,
      },
      // {
      //   title: 'Pricing',
      //   to: 'en-pricing',
      //   icon: PricingIcon,
      // },
      {
        title: 'FAQ',
        to: 'en-faq',
        icon: FAQIcon,
      },
    ],
  },
  {
    key: 'resources',
    title: 'Resources',
    children: [
      {
        title: 'How to use',
        to: 'en-how-to-use',
        icon: HowToUseIcon,
      },
      {
        title: 'Case Studies',
        to: 'en-case-studies',
        icon: CaseIcon,
      },
    ],
  },
  {
    key: 'company',
    title: 'Company',
    children: [
      {
        title: 'About Us',
        to: 'en-about',
        icon: AboutIcon,
      },
      {
        title: 'Careers',
        to: 'en-career',
        icon: CareersIcon,
      },
      {
        title: 'Contact',
        to: 'en-contact',
        icon: ContactIcon,
      },
    ],
  },
]

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
  emit('close', null)
}
</script>
<style lang="scss" scoped>
.drawer-wrapper {
  @include relative;
  z-index: 999;
}

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

  &.banner {
    // banner top
    @include fixed(top 36px right -2px);
    height: calc(100% - 36px);
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
    color: $text-darken-7;
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
        border-top: 1px solid $footer;
      }

      .navigation-link-list {
        @include vertical-center();
        padding: 26px 0px;
        border-bottom: 1px solid #e5e5e5;
        background-color: #fafbfe;
      }

      .navigation-link {
        @include flex($justify: space-between);
        @include medium(18);
        align-items: center;
        line-height: 40px;
        padding: 16px 38px 16px 48px;
        cursor: pointer;

        @include en-mobile {
          padding: 0px 16px 48px;
        }

        &:not(.sub) {
          border-bottom: 1px solid #e5e5e5;
          height: 76px;
        }

        i {
          @include flex();
          @include medium(32);
          align-items: center;
          color: $text-darken;

          &.active {
            transform: rotate(-180deg);
          }

          @include en-mobile {
            @include medium(28);
          }
        }

        &.sub {
          @include regular(17);
          @include flex();
          align-items: center;
          color: $text-darken-7;
          .icon {
            width: 28px;
            margin-right: 8px;
          }

          svg {
            margin-right: 6px;

            :deep(path) {
              opacity: 0.7;
            }
          }

          &:hover,
          :active {
            color: $navigation;

            :deep(path) {
              fill: $navigation;
              opacity: 1;
            }
          }
        }

        @include en-mobile {
          padding: 10px 28px;
        }

        &.demo-link {
          @include semi-bold(18);
          @include flex();
          align-items: center;
          color: $navigation;

          i {
            @include semi-bold(18);
            color: $navigation;
            margin: 0px 0px 0px 14px;
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
        @include regular(14);
        color: #808394;
      }
    }
  }
}
</style>
