<template>
  <div
    class="content-item news"
    v-show="props.active"
    :class="[props.active && active, classProp]"
  >
    <div class="item-header">
      <div
        class="header-item hover-pointer"
        :class="{ active: newsTab === 1 }"
        @click="toggleNewsTab(1)"
      >
        {{ $t('module.fold.news.headers.1') }}
      </div>

      <div
        class="header-item hover-pointer"
        :class="{ active: newsTab === 2 }"
        @click="toggleNewsTab(2)"
      >
        {{ $t('module.fold.news.headers.2') }}
      </div>
      <div
        class="header-item hover-pointer"
        :class="{ active: newsTab === 3 }"
        @click="toggleNewsTab(3)"
      >
        {{ $t('module.fold.news.headers.3') }}
      </div>
      <div class="header-item fake hidden-mobile"></div>
    </div>
    <div class="item-content news" v-show="newsTab === 1">
      <div class="news-title">
        {{ $t('module.fold.news.contents.1.title[0]') }}
      </div>
      <div class="news-content">
        {{ $t('module.fold.news.contents.1.contents[0]') }}
      </div>
    </div>
    <div class="item-content news" v-show="newsTab === 2">
      <div class="news-title">
        {{ $t('module.fold.news.contents.2.title[0]') }}
      </div>
      <div class="news-content">
        {{ $t('module.fold.news.contents.2.contents[0]') }}
      </div>
    </div>
    <div class="item-content news" v-show="newsTab === 3">
      <div class="news-title">
        {{ $t('module.fold.news.contents.3.title[0]') }}
      </div>
      <div class="news-content">
        {{ $t('module.fold.news.contents.3.contents[0]') }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineEmit, defineProps, ref } from 'vue'
const props = defineProps({
  active: Boolean,
  classProp: String,
})
const newsTab = ref(1)
const toggleNewsTab = (idx) => {
  newsTab.value = idx
}
</script>

<style lang="scss" scoped></style>
