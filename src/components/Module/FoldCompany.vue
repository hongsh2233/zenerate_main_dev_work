<template>
  <div
    class="content-item company"
    v-show="props.active"
    :class="[props.active && active, classProp]"
  >
    <div class="item-header">
      <div
        class="header-item hover-pointer"
        :class="{ active: companyTab === 'intro' }"
        @click="toggleCompanyTab('intro')"
      >
        {{ $t('module.fold.company.headers.intro') }}
      </div>
      <div
        class="header-item hover-pointer"
        :class="{ active: companyTab === 'timeline' }"
        @click="toggleCompanyTab('timeline')"
      >
        {{ $t('module.fold.company.headers.timeline') }}
      </div>
      <div
        class="header-item hover-pointer"
        :class="{ active: companyTab === 'team' }"
        @click="toggleCompanyTab('team')"
      >
        {{ $t('module.fold.company.headers.team') }}
      </div>
      <div class="header-item fake hidden-mobile"></div>
    </div>
    <div class="item-content intro" v-show="companyTab === 'intro'">
      <div class="content-left">
        <div class="left-title">
          {{ $t('module.fold.company.contents.intro.title[0]') }}
        </div>
        <div class="left-subtitle">
          <span>
            {{ $t('module.fold.company.contents.intro.subtitle') }}
          </span>
        </div>
        <div class="left-content" :class="{ en: locale === 'en' }">
          <p v-for="i in 6" :key="i">
            {{ $t(`module.fold.company.contents.intro.contents[${i - 1}]`) }}
          </p>
        </div>
      </div>
    </div>
    <div class="item-content timeline" v-show="companyTab === 'timeline'">
      <div class="timeline-item" v-for="i in 8" :key="i">
        <div class="item-date">
          {{ $t(`module.fold.company.contents.timeline.date[${i - 1}]`) }}
        </div>
        <div class="item-content">
          {{ $t(`module.fold.company.contents.timeline.contents[${i - 1}]`) }}
        </div>
      </div>
    </div>
    <div class="item-content team" v-show="companyTab === 'team'">
      <div v-for="idx in 5" class="team-item">
        <div class="item-desc">
          {{ $t(`module.fold.company.contents.team.desc[${idx}]`) }}
        </div>
        <div class="item-work">
          {{ $t(`module.fold.company.contents.team.work[${idx}]`) }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const props = defineProps({
  active: Boolean,
  classProp: String,
})

const companyTab = ref('intro')
const toggleCompanyTab = (idx) => {
  companyTab.value = idx
}
</script>

<style lang="scss" scoped></style>
