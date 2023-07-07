<template>
  <div class="layout-en" id="layout-en">
    <a :href="'https://maps.zenerate.ai'">
      <button type="button" class="signup-banner" v-show="path !== '/beta'">
        <div class="signup-banner-inner">
          <p class="uppercase">
            <span>VIEW YOUR CITY'S LATEST DEVELOPMENTS&nbsp;</span>
            <span>WITH OUR NEW TOOL Z-MAPS!</span>
          </p>
          <i class="material-icons"> east </i>
        </div>
      </button>
    </a>

    <Header
      v-show="path !== '/beta'"
      :showDrawer="showDrawer"
      :transparent="transparentHeader"
      @toggleDrawer="toggleDrawer"
      @toggleTryPopup="toggleTryPopup"
    ></Header>

    <transition name="fade">
      <Drawer v-if="showDrawer" @close="toggleDrawer" />
    </transition>

    <router-view v-slot="{ Component }">
      <transition name="fade">
        <section class="section-en">
          <component :is="Component" />
        </section>
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { MENU_EVENT } from '/Constants/eventConstant'
import Emitter from '/Libraries/bus'
import Header from '/Components/EN/Header.vue'
import Footer from '/Components/EN/Footer.vue'
import Drawer from '/Components/EN/Drawer.vue'
import { Button } from '/Components/EN/index'

const route = useRoute()
const path = computed(() => route.path)

// ---------------- try popup ----------------
const showTryPopup = ref(true)
const toggleTryPopup = (flag?: boolean) => {
  const f = flag == null ? !showTryPopup.value : flag
  showTryPopup.value = f
}
Emitter.on(MENU_EVENT.TOGGLE_TRY_POPUP, (v) => toggleTryPopup(v))

// ---------------- header scroll transparent ----------------
const transparentHeader = ref(true)
const observerHandler = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      transparentHeader.value = false
    } else {
      transparentHeader.value = true
    }
  })
}

onMounted(() => {
  const sentinalEl = document.querySelector('.sentinal')
  const observer = new IntersectionObserver(observerHandler, {
    rootMargin: '60px 0px 0px',
    threshold: 1.0,
  })

  if (sentinalEl) {
    observer.observe(sentinalEl)
  }
})

// ---------------- drawer : mobile, tablet  ----------------
const showDrawer = ref(false)
const toggleDrawer = (flag = undefined) => {
  showDrawer.value = flag == null ? !showDrawer.value : flag
  if (showDrawer.value) {
    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
  } else {
    // When the modal is hidden...
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  }
}
</script>
<style lang="scss">
.layout-en {
  overflow-x: hidden;
  overflow-y: hidden;
}

.signup-banner {
  @include fixed(top 0px left 0);
  @include flex();
  @include medium(13);
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  height: 35px;
  background: #4848ff;
  color: #ffffff;
  transition: color 0.1s ease-in-out;
  cursor: pointer;
  z-index: 9999;
  letter-spacing: 1pt;

  .signup-banner-inner {
    @include flex();
    width: 100%;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
  }

  p {
    line-height: 14px;
  }

  i {
    @include semi-bold(13);
    @include medium(18);
    margin-left: 8px;
  }

  @include en-mobile {
    @include medium(10);
    padding: 0px 30px;
    .signup-banner-inner {
      max-width: 474px;
      justify-content: space-between;
    }
    p {
      text-align: left;
    }

    i {
      @include medium(11);
      margin-left: 4px;
    }
  }

  @include en-mobile-banner-large {
    @include medium(10);
    padding: 0px 30px;
    height: 50px;
    // letter-spacing: 0.5pt;

    .signup-banner-inner {
      justify-content: space-between;
      max-width: 342px;
    }

    p {
      text-align: left;
    }

    i {
      @include medium(11);
      margin-left: 4px;
    }
  }

  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
}
</style>
