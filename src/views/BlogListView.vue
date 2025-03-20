<template>
  <section
    class="z-[1] mx-auto mb-6 mt-[152px] w-[320px] min-w-[320px] md:mb-42 md:mt-[170px] md:w-[644px] lg:absolute lg:ml-100 lg:mt-[200px] lg:w-[440px]"
  >
    <div>Blog List View</div>
    <router-link
      :to="{ name: 'blog-content', params: { content_id: 'test-content-id' } }"
    >
      <div class="h-100 w-100 bg-primary text-white">to test</div>
    </router-link>
  </section>
</template>
<script lang="ts" setup />
<style lang="scss" scoped></style>
