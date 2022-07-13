<template>
  <div class="layout-en" id="layout-en">
    <!-- <div
      class="signup-banner"
      @click="goDemoSignUp"
      v-show="path !== '/pre-launch-signup'"
    >
      <p>SIGN UP FOR A PRODUCT DEMO</p>
      <i class="material-icons"> east </i>
    </div> -->

    <Header
      v-show="path !== '/pre-launch-signup'"
      :showDrawer="showDrawer"
      :transparent="transparentHeader"
      @toggleDrawer="toggleDrawer"
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
import Header from '/Components/EN/Header.vue'
import Footer from '/Components/EN/Footer.vue'
import Drawer from '/Components/EN/Drawer.vue'

const route = useRoute()
const router = useRouter()
const path = computed(() => route.path)
const goDemoSignUp = () => {
  toggleDrawer(false)
  router.push('/demo-signup')
}

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

  observer.observe(sentinalEl)
})

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
  @include flex();
  @include medium(13);
  @include fixed(top 0px left 0);
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  height: 35px;
  background: #4848ff;
  color: #ffffff;
  transition: color 0.1s ease-in-out;
  cursor: pointer;
  z-index: 1000;
  letter-spacing: 1pt;

  p {
    line-height: 14px;
  }

  i {
    @include semi-bold(13);
    @include medium(18);
    margin-left: 8px;
  }

  @include en-mobile {
    @include medium(11);
    padding: 0px 20px;
    // letter-spacing: 0.5pt;
    // justify-content: space-between;

    i {
      @include medium(11);
      margin-left: 4px;
      // display: none;
    }
  }

  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
}

.layout-en,
.layout-en * {
  font-family: 'Inter', 'Roboto', sans-serif;
}
</style>
