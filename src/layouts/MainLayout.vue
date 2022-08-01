<template>
  <div class="layout-main">
    <Header @toggleDrawer="toggleDrawer" :showDrawer="showDrawer" />
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <div class="section-main">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
    <Footer />
    <transition name="fade">
      <MenuDrawer
        v-show="showDrawer"
        :showDrawer="showDrawer"
        @toggleDrawer="toggleDrawer"
      />
    </transition>
    <NewsLetterModal
      v-if="showNewsLetterModal"
      @close="showNewsLetterModal = false"
    ></NewsLetterModal>
  </div>
</template>
<script lang="ts" setup>
// @ts-ignore
import Header from '/Components/HeaderMain.vue'
// @ts-ignore
import Footer from '/Components/Footer.vue'
// @ts-ignore
import MenuDrawer from '/Components/MenuDrawer.vue'
// @ts-ignore
import NewsLetterModal from '/Components/NewsLetterModal.vue'

import { ref, onMounted } from 'vue'
const showDrawer = ref(false)

const showNewsLetterModal = ref(false)
const toggleNewsLetterModal = (flag) => {
  if (flag != null) showNewsLetterModal.value = flag
  else showNewsLetterModal.value = !showNewsLetterModal.value
}

const toggleDrawer = (flag) => {
  showDrawer.value = flag
}

const isFirst = ref(true)

onMounted(() => {
  if (isFirst) toggleNewsLetterModal(true)
})
</script>
<style lang="scss">
.layout-main {
  margin: 0px;
  width: 100%;
  @include desktop {
    width: 1280px;
    margin: 0px auto;
    padding: 0px 56px;
    padding-top: 81px;
  }
  @include tablet {
    padding: 32px;
    padding-top: 91px;
  }
  @include mobile {
    padding: 28px;
    padding-top: 69px;
  }
  // .section-main {
  //   @include desktop {
  //     margin-top: 81px;
  //   }
  // }
}
</style>
