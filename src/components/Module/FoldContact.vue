<template>
  <div
    class="content-item contact"
    v-show="props.active"
    :class="[props.active && active, classProp]"
  >
    <div class="item-header">
      <div
        class="header-item hover-pointer"
        :class="{ active: contactTab === 'contact' }"
        @click="toggleContactTab('contact')"
      >
        {{ $t('module.fold.contact.headers.contact') }}
      </div>

      <div class="header-item fake hidden-mobile"></div>
    </div>
    <div class="item-content contact">
      <div class="contact-title">
        <p>
          {{ $t('module.fold.contact.contents.contact.title[0]') }}
        </p>
        <p>{{ $t('module.fold.contact.contents.contact.title[1]') }}</p>
      </div>
      <div class="contact-content">
        <p>
          {{ $t('module.fold.contact.contents.contact.contents[0]') }}
        </p>
        <p>
          {{ $t('module.fold.contact.contents.contact.contents[1]') }}
        </p>
      </div>
      <div class="contact-link">
        <button>
          {{ $t('module.fold.contact.contents.contact.button') }}
        </button>
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
const contactTab = ref('contact')
const toggleContactTab = (idx) => {
  contactTab.value = idx
}
</script>

<style lang="scss" scoped></style>
