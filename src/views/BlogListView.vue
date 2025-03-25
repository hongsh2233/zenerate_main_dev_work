<template>
  <section class="section-contact">
    <div class="blog-visual">
      <div class="blog-visual__inner">
          <p class="title-text">Zenerate Blog: Guide, <strong>Tips and Updates</strong></p>
          <p class="sub-title">Step-by-step guide and the latest insights<br> 
            to enhance your feasibility studies</p>
      </div>
    </div>
    <section class="blog-content">
      <div class="blog-content__inner">
          <div class="blog-search__wrap flex">
              <div class="search-wrap">
                  <label for="">Search Blogs</label>
                  <div class="">
                      <i class="ico-search"></i>
                      <input type="text">
                  </div>
              </div>
              <div class="get-trial-box">
                  <div class="">Get a quick walkthrough and a free trial afterward!</div>
                  <div class="">
                    
                  </div>
              </div>
          </div>
      </div>
    </section>
      <section
      class="z-[1] mx-auto mb-6 mt-[152px] w-[320px] min-w-[320px] md:mb-42 md:mt-[170px] md:w-[644px] lg:absolute lg:ml-100 lg:mt-[200px] lg:w-[440px]"
    >
      <!-- <div>Blog List View</div>
      <router-link
        :to="{ name: 'blog-content', params: { content_id: 'test-content-id' } }"
      >
        <div class="h-100 w-100 bg-primary text-white">to test</div>
      </router-link> -->
    </section>
    <div class="section section-footer fp-auto-height">
      <Footer></Footer>
    </div>
  </section>

</template>

<script lang="ts" setup>
import Footer from '/Components/Footer.vue'
</script>



<style lang="scss" scoped>
.section-contact {
  @include relative;
  min-width: 100%;
  width: 100%;
  padding-top: 111px;
  .blog-visual {
    width: 100%;
    height: calc(218 / 16 * 1rem);
    background-image: url('/img/header_blog_bg_full.png');
    background-position: center center;
    background-repeat: repeat-x;
    .blog-visual__inner {
      width: 100%;
      height: 100%;
      max-width: calc(1200 / 16 * 1rem);
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-content: flex-start;
      justify-content: center;
      color: #fff;
      gap: calc(16 / 16 * 1rem);
      .title-text {
        font-weight: 600;
        font-size: 32px;
        line-height: 135%;
        letter-spacing: 0%;
        font-size: calc(32 / 16 * 1rem);        
      }
      .sub-title {
        font-weight: 400;
        font-size: calc(18 / 16 * 1rem);
        line-height: 135%;
        letter-spacing: 0%;
      }
    }
  }
  .blog-content {
    background: #F4F6F9;
    padding: calc(32 / 16 * 1rem) 0 calc(100 / 16 * 1rem);
    .blog-content__inner {
      min-width: 100%;
      width: 100%;
    }
  }
}
</style>
