<template>
  <div>
    <div class="sentinal"></div>
    <div
      id="header"
      class="header-wrapper banner"
      :class="transparent && 'transparent'"
    >
      <div class="header-inner">
        <div
          class="header-logo hover-pointer"
          @click="router.push({ name: 'en-landing' }) && toggleDrawer(false)"
        >
          <img
            class="logo"
            :src="`/img/logo_${
              !showDrawer && transparent ? 'color' : 'color'
            }.svg`"
            alt="logo"
          />
          <!-- <img class="logo hidden-desktop" src="/img/logo_short.svg" alt="logo" /> -->
        </div>
        <nav class="header-navigation-wrapper only-en-desktop">
          <template v-for="(primary, idx) in routes" :key="idx">
            <div class="dropdown">
              <button class="dropbtn">
                {{ primary.title }}
                <i class="material-icons"> keyboard_arrow_down </i>
              </button>
              <div class="dropdown-content">
                <template
                  v-for="(secondary, idx) in primary.children"
                  :key="idx"
                >
                  <router-link :to="{ name: secondary.to }">
                    <component :is="secondary.icon" :width="20" :height="20" />

                    {{ secondary.title }}
                  </router-link>
                  <a
                    v-if="secondary.title === 'Zenerate'"
                    :href="'https://maps.zenerate.ai'"
                  >
                    <component :is="ZmapsIcon" :width="20" :height="20" />

                    Z-Maps
                  </a>
                </template>
              </div>
            </div>
          </template>
          <!-- 
        <button
          type="button"
          class="navigation-link hover-pointer lang-button"
          :class="{ active: showLang }"
          @click="() => toggleLang()"
        >
          <i class="material-icons"> language </i>
          <p>ENG</p>
          <span v-show="showLang">/</span>
          <router-link v-show="showLang" :to="{ name: 'ModuleLayout' }">
            한국어</router-link
          >
        </button> -->
          <!-- <button
          type="button"
          class="mr-24 text-14 font-bold pt-4 text-uppercase-button text-core-500 hover:text-core-700 bg-transparent"
        >
          LOGIN
        </button> -->
        </nav>

        <button
          type="button"
          class="primary-button text-12 h-36 only-en-desktop"
        >
          <router-link class="demo-link" :to="{ name: 'en-demo' }">
            BOOK A DEMO
          </router-link>
        </button>

        <div class="header-drawer-wrapper hover-pointer hidden-en-desktop">
          <MenuIcon
            @toggle="toggleDrawer"
            :showDrawer="showDrawer"
            :transparent="transparent"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useGtag } from 'vue-gtag-next'
import { useRouter } from 'vue-router'
import MenuIcon from './Icons/MenuIcon.vue'
import AboutIcon from './Icons/header/AboutIcon.vue'
import CareersIcon from './Icons/header/CareersIcon.vue'
import CaseIcon from './Icons/header/CaseIcon.vue'
import ContactIcon from './Icons/header/ContactIcon.vue'
import FAQIcon from './Icons/header/FAQIcon.vue'
import HowToUseIcon from './Icons/header/HowToUseIcon.vue'
import OverviewIcon from './Icons/header/OverviewIcon.vue'
import ZmapsIcon from './Icons/header/ZmapsIcon.vue'
import PricingIcon from './Icons/header/PricingIcon.vue'

const props = defineProps({
  showDrawer: Boolean,
  transparent: Boolean,
})

const emit = defineEmits(['toggleDrawer', 'toggleTryPopup'])
const toggleDrawer = (flag?: boolean) => {
  emit('toggleDrawer', flag)
}

const toggleTryPopup = (flag?: boolean) => {
  emit('toggleTryPopup', flag)
}

const showDrawer = computed(() => props.showDrawer)
const transparent = computed(() => props.transparent)
const showLang = ref(false)
const toggleLang = (flag?: boolean) => {
  const f = flag == null ? !showLang.value : flag
  showLang.value = f
}

const { event } = useGtag()
const goToApp = () => {
  event('generate_lead', {
    event_category: 'engagement',
    event_label: '(not yet)',
  })
}

// routes
const router = useRouter()
const routes = [
  {
    key: 'product',
    title: 'Products',
    children: [
      {
        title: 'Zenerate',
        to: 'en-overview',
        icon: OverviewIcon,
      },
      // {
      //   title: 'Z-Maps',
      //   to: 'en-zmaps',
      //   icon: ZmapsIcon,
      // },
      // {
      //   title: 'Pricing',
      //   to: 'en-pricing',
      //   icon: PricingIcon,
      // },
      // {
      //   title: 'FAQ',
      //   to: 'en-faq',
      //   icon: FAQIcon,
      // },
    ],
  },
  {
    key: 'resources',
    title: 'Resources',
    children: [
      // {
      //   title: 'How to use',
      //   to: 'en-how-to-use',
      //   icon: HowToUseIcon,
      // },
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

const selectedPrimaryNav = ref(null)
const toggleNav = (primary: String) => {
  if (selectedPrimaryNav.value == primary) {
    selectedPrimaryNav.value = null
  } else {
    selectedPrimaryNav.value = primary
  }
}
</script>
<style lang="scss" scoped>
.sentinal {
  width: 0px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.header-wrapper {
  @include fixed(top 0px left 0);
  width: 100vw;
  z-index: 1000;
  background: $white;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
  transition: color ease-in-out 0.2s;

  &.banner {
    // banner
    top: 35px;
    @include en-mobile-banner-large {
      top: 50px;
    }
  }

  &.transparent {
    // background: transparent;
    box-shadow: none;

    // .dropbtn {
    //   color: $white;
    // }

    // .navbar a:hover,
    // .dropdown:hover .dropbtn {
    //   color: $white;
    //   opacity: 0.6;

    //   i {
    //     opacity: 0.6;
    //   }
    // }

    // .primary-button {
    //   background: rgba(77, 73, 244, 0.2);
    // }
  }

  @include en-desktop {
    height: 76px;
    padding: 0px 60px;
  }
  @include en-tablet {
    height: 70px;
  }
  @include en-mobile {
    height: 58px;
  }
}
.header-inner {
  @include flex($justify: space-between);
  @include container;
  height: 100%;
  align-items: center;

  @include en-desktop {
    max-width: 1200px;
    width: auto;
    margin: 0px auto;
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
    width: auto;
    height: 100%;
    z-index: 9999;
    @include desktop {
      width: 104px;
      .logo {
        width: 100%;
      }
    }
    @include tablet {
      width: auto;
      height: 100%;
      .logo {
        width: 104px;
      }
    }
    @include mobile {
      width: auto;
      height: 100%;
      .logo {
        width: 104px;
      }
    }
  }
  .header-navigation-wrapper {
    @include flex($justify: flex-end);
    align-items: center;
    flex: 1;
    flex-wrap: nowrap;
    text-align: center;
    margin: auto 0px;
    .navigation-link {
      @include relative;
      @include regular(16);
      display: inline-block;
      margin-left: 34px;
      font-size: 16px;
      line-height: 20px;
      color: $text-darken-5;
      transition: color ease-in-out 0.2s;

      .navigation-subtitle-list {
        @include absolute(top 30px right -30px);
        display: none;
        background-color: blue;
        min-width: 160px;
        height: 200px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;

        .navigation-subtitle-item {
          padding: 0px;

          &:hover {
            background-color: #ddd;
          }
        }
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
        padding-left: 14px;

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
          box-shadow: 0px 0px 20px rgba(211, 210, 242, 0.6);
          transition: box-shadow ease-in-out 0.2s;
          transition: color ease-in-out 0.2s;

          &:hover {
            color: $text-darken-5;
          }

          p {
            &:hover {
              transition: color ease-in-out 0.2s;
              color: $navigation;
            }
          }

          a {
            height: 26px;
            margin-left: 8px;
            font-size: 15px;
            line-height: 27px;

            &:hover {
              transition: color ease-in-out 0.2s;
              color: $navigation;
              font-weight: 500;
            }
          }
        }
      }
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

.dropdown {
  width: 137px;
  margin-right: 28px;
  overflow: hidden;

  &:nth-child(2) {
    width: 160px;

    .dropdown-content {
      width: 160px;
    }
  }
}

.dropdown .dropbtn {
  @include flex();
  @include medium(14);
  border: none;
  align-items: center;
  outline: none;
  color: $text-darken;
  padding: 10px 14px;
  background-color: inherit;
  font-family: inherit;
  margin: 0px auto;

  i {
    @include regular(18);
    margin-left: 8px;
  }
}

.navbar a:hover,
.dropdown:hover .dropbtn {
  color: $navigation;

  i {
    transform: rotate(-180deg);
  }
}

.dropdown-content {
  @include vertical-center();
  visibility: hidden;
  position: absolute;
  background-color: $white;
  min-width: 137px;
  padding: 16px 0px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
  z-index: 1;
  border-radius: 8px;
  border: 1px solid $footer;

  svg {
    margin-right: 8px;
  }
}

.dropdown-content a {
  @include flex();
  @include regular(12);
  color: $text-darken;
  align-items: center;
  padding: 4px 18px 4px 14px;
  text-decoration: none;
  text-align: left;
}

.dropdown-content a:hover {
  color: $navigation;

  :deep(svg) {
    path {
      fill: $navigation;
    }
  }
}

.dropdown:hover .dropdown-content {
  visibility: visible;
}
</style>
