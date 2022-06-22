<template>
  <div class="header-wrapper nobanner" id="header">
    <div class="header-inner">
      <div
        class="header-logo hover-pointer"
        @click="router.push({ name: 'en-landing' }) && toggleDrawer(false)"
      >
        <img class="logo" src="/img/logo_color.svg" alt="logo" />
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
              <template v-for="(secondary, idx) in primary.children" :key="idx">
                <router-link :to="{ name: secondary.to }">
                  <component :is="secondary.icon" :width="20" :height="20" />

                  {{ secondary.title }}
                </router-link>
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
      </nav>
      <button type="button" class="header-demo-wrapper only-en-desktop">
        <router-link class="demo-link" :to="{ name: 'en-demo' }">
          BOOK A DEMO
        </router-link>
      </button>

      <div class="header-drawer-wrapper hover-pointer hidden-en-desktop">
        <MenuIcon @toggle="toggleDrawer" :showDrawer="showDrawer" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
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
import PricingIcon from './Icons/header/PricingIcon.vue'

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

const selectedPrimaryNav = ref(null)
const toggleNav = (primary: String) => {
  if (selectedPrimaryNav.value == primary) {
    console.log('!!')
    selectedPrimaryNav.value = null
  } else {
    console.log('??')
    selectedPrimaryNav.value = primary
  }
}
</script>
<style lang="scss" scoped>
.header-wrapper {
  @include fixed(top 0px left 0);
  width: 100vw;
  z-index: 1000;
  background: $white;
  box-shadow: 0px 2px 8px rgb(142 141 208 / 10%);

  &.banner {
    top: 35px;
  }

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
      width: 123px;
      z-index: 9999;
      @include desktop {
        width: 123px;
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
    .header-demo-wrapper {
      width: 148px;
      height: 44px;
      background-color: $navigation;
      color: $white;
      border-radius: 10px;
      letter-spacing: 0.1em;
      transition: all ease-in-out 0.2s;
      margin: 18px 0px 18px;
      background-color: $navigation;
      &:hover {
        @include elevation-3;
        transform: translateY(-2px);
      }

      .demo-link {
        @include semi-bold(14);
        color: $white;
        letter-spacing: 1.4px;
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
    padding-bottom: 5px;
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
    @include medium(15);
    border: none;
    align-items: center;
    outline: none;
    color: $text-darken;
    padding: 24px 15px 29px;
    background-color: inherit;
    font-family: inherit;
    margin: 0px auto;

    i {
      @include regular(20);
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
    @include elevation-2();
    @include vertical-center();
    visibility: hidden;
    position: absolute;
    background-color: $white;
    min-width: 137px;
    padding: 15px 0px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 7px;
    box-shadow: 0px 4px 8px rgba(142, 141, 208, 0.16);
    border: 1px solid $footer;

    svg {
      margin-right: 8px;
    }
  }

  .dropdown-content a {
    @include flex();
    @include regular(14);
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
}
</style>
