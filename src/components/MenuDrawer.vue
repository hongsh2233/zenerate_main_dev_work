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
          <div class="left-link hover-pointer">
            <router-link @click="toggleDrawer(false)" to="/main/about">{{
              $t('menu.ourCompany')
            }}</router-link>
          </div>
          <div class="left-link hover-pointer">
            <router-link @click="toggleDrawer(false)" to="/main/news">{{
              $t('menu.news')
            }}</router-link>
          </div>
          <div class="left-link hover-pointer">
            <router-link @click="toggleDrawer(false)" to="/main/service">{{
              $t('menu.service')
            }}</router-link>
          </div>
          <div class="left-link hover-pointer">
            <router-link @click="toggleDrawer(false)" to="/main/contact">{{
              $t('menu.contact')
            }}</router-link>
          </div>
        </div>
        <div class="item-right">
          <div class="right-link hover-pointer">
            <router-link @click="toggleDrawer(false)" to="/main/about">{{
              $t('menu.intro')
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
          <!-- <div class="right-link hover-pointer">
            <a href="">공시</a>
          </div> -->
        </div>
      </div>
      <Footer />
    </div>
  </section>
</template>
<script lang="ts" setup>
// @ts-ignore
import Footer from '/Components/Footer.vue'
import { defineEmit } from 'vue'
const emit = defineEmit(['toggleDrawer'])
const toggleDrawer = (flag) => {
  emit('toggleDrawer', flag)
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
  z-index: 999;
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
