<template>
  <section class="section-careers">
    <div id="fullpage">
      <div class="section section-main">
        <div class="main-wrapper">
          <p>Career</p>
          <div>
            <span>Your future with</span>
            <img src="/img/logo.png" alt="" />
          </div>
          <p>
            At Zenerate, placeholder (our unique group of professionals come
            together from a variety of different disciplines to solve
            significant pains in real estate planning.
          </p>
          <p>
            Join Zenerate as we innovate architectural planning and improve
            living standards for your communities.
          </p>
        </div>
      </div>
      <div class="section section-hero" data-percentage="75">
        <div class="hero-wrapper">
          <p>COMPANY CULTURE AND VALUES</p>
          <div>
            <span>Your life with</span>
            <img src="/img/logo.png" alt="" />
          </div>
          <p>
            At Zenerate, placeholder (our unique group of professionals come
            together from a variety of different disciplines to solve
            significant pains in real estate planning.
          </p>
          <p>
            Join Zenerate as we innovate architectural planning and improve
            living standards for your communities.
          </p>
        </div>
      </div>
      <div class="section section-content">
        <div class="content-list-wrapper">
          <div class="list-title">
            <p>We’re Hiring!</p>
          </div>
          <div class="list-wrapper">
            <div class="list-image"></div>
            <div class="list-items"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import Store from '/Store/index'
import { computed, onMounted } from 'vue'
const fp = computed(() => Store.state.root.FullPage)

onMounted(() => {
  fp.value.init('#fullpage', {})
})
</script>
<style lang="scss">
.section-main {
  background-image: url('/en/img/career_main.png');
  background-size: cover;

  .main-wrapper {
    // height: 100%;
    padding-top: 100px;
  }
}
.section-hero {
  background-image: url('/en/img/career_hero.png');
  background-size: cover;

  .hero-wrapper {
    // height: 100%;
    padding-top: 100px;
  }
}
.section-content {
  .content-list-wrapper {
    padding-top: 48px;
    transition: padding 0.5s ease;
  }
  &.active .content-list-wrapper {
    padding-top: 100px;
  }
}
</style>
