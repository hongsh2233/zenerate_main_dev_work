<template>
  <div class="layout-en">
    <Header></Header>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <section class="section-en">
          <component :is="Component" />
        </section>
      </transition>
    </router-view>
    <Footer />
  </div>
</template>
<script lang="ts" setup>
//@ts-ignore
import Header from '/Components/EN/Header.vue'
//@ts-ignore
import Footer from '/Components/EN/Footer.vue'

</script>
<style lang="scss">
.layout-en {
  overflow-x: hidden;
}

.layout-en,
.layout-en * {
  font-family: 'Montserrat', sans-serif !important;
  line-height: 125% !important;
  letter-spacing: -0.015em !important;
}
</style>
