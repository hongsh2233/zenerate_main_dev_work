<template>
  <section class="section-menu">
    <div class="menu-inner">
      <div class="menu-logo">
        <div class="logo-image">
          <img class="logo" src="/img/logo_color.png" alt="" />
        </div>
        <div class="logo-close">
          <button @click="toggleDrawer(false)">
            <i class="material-icons">close</i>
          </button>
        </div>
      </div>
      <div class="menu-item">
        <div class="item-left">
          <div class="left-link">
            <router-link to="/kr/main/about" custom v-slot="{ href, navigate }">
              <a
                :href="href"
                @click="selectSubLink(navigate, $event)"
                class="navigation-link sub"
              >
                {{ $t('menu.ourCompany') }}
              </a>
            </router-link>
          </div>
          <div class="left-link">
            <router-link to="/kr/main/news" custom v-slot="{ href, navigate }">
              <a
                :href="href"
                @click="selectSubLink(navigate, $event)"
                class="navigation-link sub"
              >
                {{ $t('menu.news') }}
              </a>
            </router-link>
          </div>
          <div class="left-link">
            <router-link
              to="/kr/main/service"
              custom
              v-slot="{ href, navigate }"
            >
              <a
                :href="href"
                @click="selectSubLink(navigate, $event)"
                class="navigation-link sub"
              >
                {{ $t('menu.service') }}
              </a>
            </router-link>
          </div>
          <div class="left-link" v-if="locale != 'en'">
            <router-link
              to="/kr/main/career"
              custom
              v-slot="{ href, navigate }"
            >
              <a
                :href="href"
                @click="selectSubLink(navigate, $event)"
                class="navigation-link sub"
              >
                {{ $t('menu.career') }}
              </a>
            </router-link>
          </div>
          <div class="left-link">
            <router-link
              to="/kr/main/contact"
              custom
              v-slot="{ href, navigate }"
            >
              <a
                :href="href"
                @click="selectSubLink(navigate, $event)"
                class="navigation-link sub"
              >
                {{ $t('menu.contact') }}
              </a>
            </router-link>
          </div>
        </div>
        <!-- <div class="item-right">
          <div class="right-link hover-pointer">
            <router-link @click="toggleDrawer(false)" to="/main/about">{{
              $t('menu.timeline')
            }}</router-link>
          </div>
          <div class="right-link hover-pointer">
            <router-link @click="toggleDrawer(false)" to="/main/timeline">{{
              $t('menu.timeline')
            }}</router-link>
          </div>
          <div class="right-link hover-pointer">
            <router-link @click="toggleDrawer(false)" to="/main/team">{{
              $t('menu.team')
            }}</router-link>
          </div>
          <div class="right-link hover-pointer">
            <a href="">공시</a>
          </div>
        </div> -->
      </div>
      <Footer />
    </div>
  </section>
</template>
<script lang="ts" setup>
// @ts-ignore
import Footer from '/Components/Footer.vue'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
const emit = defineEmits(['toggleDrawer'])
const toggleDrawer = (flag) => {
  emit('toggleDrawer', flag)
}

const selectSubLink = (navigate, event) => {
  toggleDrawer(false)
  navigate(event)
}
</script>
<style lang="scss" scoped>
.section-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: $white;
  z-index: 9999;
  .menu-inner {
    @include desktop {
      width: 1280px;
      height: 100vh;
      margin: 0px auto;
      padding: 16px 56px;
    }
    @include tablet {
      padding: 16px 32px;
    }
    @include mobile {
      padding: 16px 28px;
    }
  }
  .menu-logo {
    margin: auto 0px;
    width: 100%;
    margin-bottom: 56px;
    @include flex($justify: space-between);
    @include desktop {
      .logo {
        width: 180px;
      }
    }
    @include tablet {
      .logo {
        width: 160px;
      }
    }
    @include mobile {
      .logo {
        width: 120px;
      }
    }
    .logo-close {
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
  .menu-item {
    @include flex;
    margin-bottom: 120px;
    @include mobile {
      margin-bottom: 60px;
    }

    .item-left {
      width: 300px;
      margin-right: 120px;

      @include mobile {
        width: 172px;
        margin-right: 24px;
      }
      .left-link {
        &:hover {
          color: $main;
        }
        margin-bottom: 16px;
        a {
          @include medium(48);
        }
        @include mobile {
          a {
            @include medium(26);
          }
        }
      }
    }
    .item-right {
      .right-link {
        &:hover {
          color: $main;
        }
        margin-bottom: 16px;
        a {
          @include medium(32);
          @include mobile {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
