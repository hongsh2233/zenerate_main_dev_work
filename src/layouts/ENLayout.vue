<template>
  <div class="layout-en" id="layout-en">
    <button
      type="button"
      class="signup-banner"
      v-show="path !== '/beta' && path !== '/ed1'"
      @click="
        () => {
          router.push({
            name: 'en-modular',
            query: getCurrentUtmQuery(router),
          })
        }
      "
    >
      <div class="signup-banner-inner">
        <p>
          <span>Try out Zenerate Modular for FREE!</span>
        </p>
        <IconBase
          icon-name="arrow-right"
          :width="20"
          :height="20"
          iconColor="white"
          class="ml-8"
        />
      </div>
    </button>

    <Header
      v-show="path !== '/beta' && path !== '/ed1'"
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

    <transition name="fade">
      <CalendlyPopup
        v-if="showCalendlyPopup"
        :trigger="calendlyPopupTrigger"
        @close="() => toggleCalendlyPopup(false)"
      />
    </transition>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted, watch, nextTick, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Emitter from '/Libraries/bus'
import { getCurrentUtmQuery } from '/Utils/index'
import useDebounce from '/Composables/useDebounce'
import { MENU_EVENT } from '/Constants/eventConstant'
import Header from '/Components/EN/Header.vue'
import Footer from '/Components/EN/Footer.vue'
import Drawer from '/Components/EN/Drawer.vue'
import CalendlyPopup from '/Components/EN/CalendlyPopup.vue'
import { Button, IconBase } from '/Components/EN'

const route = useRoute()
const router = useRouter()
const path = computed(() => route.path)

// ---------------- try popup ----------------
const showTryPopup = ref(true)
const toggleTryPopup = (flag?: boolean) => {
  const f = flag == null ? !showTryPopup.value : flag
  showTryPopup.value = f
}
Emitter.on(MENU_EVENT.TOGGLE_TRY_POPUP, (v) => toggleTryPopup(v))

// ---------------- calendly popup ----------------
const showCalendlyPopup = ref(false)
const calendlyPopupTrigger = ref<'zenapp' | 'header' | 'laststrip'>(null)
const toggleCalendlyPopup = (option) => {
  const f = option.flag == null ? !showCalendlyPopup.value : option.flag
  calendlyPopupTrigger.value = f ? option.trigger : null
  showCalendlyPopup.value = f
}
Emitter.on(MENU_EVENT.TOGGLE_CALENDLY_POPUP, (option) =>
  toggleCalendlyPopup(option)
)

// ---------------- header scroll transparent ----------------
const transparentHeader = ref(true)
const observerHandler = (entries: any[]) => {
  entries.forEach((entry: { isIntersecting: any }) => {
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

  nextTick(() => {
    window.addEventListener('resize', () => {})
  })
})

// ---------------- drawer : mobile, tablet  ----------------
const showDrawer = ref(false)
const toggleDrawer = (flag = undefined) => {
  showDrawer.value = flag == null ? !showDrawer.value : flag
}

const BREAKPOINT = 1024
const viewWidth = ref()
const toggleDrawerByViewWidth = useDebounce(() => {
  viewWidth.value = window.innerWidth
  if (viewWidth.value >= BREAKPOINT) {
    showDrawer.value = false
  }
}, 200)
onMounted(() => {
  nextTick(() => {
    window.addEventListener('resize', toggleDrawerByViewWidth)
  })
})
onUnmounted(() => {
  window.removeEventListener('resize', toggleDrawerByViewWidth)
})

watch(
  () => showDrawer.value,
  () => {
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
)
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
  min-width: 320px;
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

  @include en-mobile-banner-large {
    @include medium(13);
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
  }

  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
}
</style>
