<template>
  <div
    class="content-item program"
    v-show="props.active"
    :class="[props.active && active, classProp]"
  >
    <div class="item-header">
      <div
        class="header-item hover-pointer"
        :class="{ active: programTab === 'consulting' }"
        @click="toggleProgramTab('consulting')"
      >
        {{ $t('module.fold.program.headers.consulting') }}
      </div>

      <div
        class="header-item hover-pointer"
        :class="{ active: programTab === 'websolution' }"
        @click="toggleProgramTab('websolution')"
      >
        {{ $t('module.fold.program.headers.websolution') }}
      </div>
      <div class="header-item fake hidden-mobile"></div>
    </div>
    <div class="item-content program" v-show="programTab === 'consulting'">
      <div class="program-block">
        <div class="program-title">
          {{ $t('module.fold.program.contents.consulting.title[0]') }}
        </div>
        <div class="block-title">
          {{ $t('module.fold.program.contents.consulting.subtitle[0]') }}
        </div>
        <div class="block-content">
          {{ $t('module.fold.program.contents.consulting.contents[0]') }}
        </div>
      </div>
      <hr />
      <div class="program-block">
        <div class="block-title">
          {{ $t('module.fold.program.contents.consulting.subtitle[1]') }}
        </div>
        <div class="block-content">
          {{ $t('module.fold.program.contents.consulting.contents[1]') }}
        </div>
      </div>
    </div>
    <div class="item-content program" v-show="programTab === 'websolution'">
      <div class="program-block">
        <div class="program-title">
          {{ $t('module.fold.program.contents.websolution.title[0]') }}
        </div>
        <div class="block-title">
          {{ $t('module.fold.program.contents.websolution.subtitle[0]') }}
        </div>
        <div class="block-content">
          {{ $t('module.fold.program.contents.websolution.contents[0]') }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const props = defineProps({
  active: Boolean,
  classProp: String,
})
const programTab = ref('consulting')
const toggleProgramTab = (idx) => {
  programTab.value = idx
}
</script>

<style lang="scss" scoped></style>
