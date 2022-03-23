<template>
  <div class="layout-en" id="layout-en">
    <!-- <div
      class="signup-banner"
      @click="goSignUp"
      v-show="path !== '/pre-launch-signup'"
    >
      <span>WANT TO KNOW WHEN WE LAUNCH? NOTIFY ME</span>
      <i class="material-icons"> east </i>
    </div> -->
    <Header
      @toggleDrawer="toggleDrawer"
      :showDrawer="showDrawer"
      v-show="path !== '/pre-launch-signup'"
    ></Header>
    <transition name="fade">
      <Drawer v-if="showDrawer" @close="toggleDrawer" />
    </transition>
    <router-view v-slot="{ Component }">
      <section class="section-en">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </section>
    </router-view>
  </div>
</template>
<script lang="ts" setup>
import Header from '/Components/EN/Header.vue'
import Footer from '/Components/EN/Footer.vue'
import Drawer from '/Components/EN/Drawer.vue'
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const path = computed(() => route.path)
const goSignUp = () => {
  toggleDrawer(false)
  router.push('/pre-launch-signup')
}

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

  i {
    @include semi-bold(13);
    @include medium(18);
    margin-left: 8px;
  }

  @include en-mobile {
    @include medium(11);
    letter-spacing: 0.5pt;

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
