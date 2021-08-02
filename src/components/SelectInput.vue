<template>
  <div class="input-select-wrapper">
    <p>{{ props.title || $t('main.contact.form.purpose') }}</p>
    <div class="input-select-container">
      <input type="text" class="dummy" ref="dummy" />

      <div class="input-select hover-pointer" @click="toggleDropDown()">
        <span
          :class="{
            selected: props.selected,
            placeholder: !props.selected,
          }"
          >{{
            props.selected
              ? props.skipTranslate
                ? props.selected.label
                : $t(props.selected.label)
              : props.placeholder || 'Select'
          }}</span
        >
        <i className="material-icons noselect">
          {{ showDropdown ? 'expand_less' : 'expand_more' }}
        </i>
      </div>
      <transition name="slide-up">
        <div class="input-select-dropdown" v-show="showDropdown">
          <div
            class="input-select-dropdown-item hover-pointer"
            v-for="(item, idx) in props.items"
            @click="onSelect(item)"
            :key="idx"
          >
            <span>{{ props.skipTranslate ? item.label : $t(item.label) }}</span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, defineProps, defineEmit } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const props = defineProps({
  placeholder: {
    type: String,
    required: false,
  },
  items: {
    type: Array,
    default() {
      return []
    },
  },
  selected: {
    type: Object,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  skipTranslate: {
    type: Boolean,
    default() {
      return false
    },
  },
})

const emit = defineEmit(['onSelect'])

const onSelect = (value) => {
  console.log(value)
  emit('onSelect', value)
  toggleDropDown(false)
}

const showDropdown = ref(false)
const toggleDropDown = (flag) => {
  if (flag != null) {
    showDropdown.value = flag
  } else {
    showDropdown.value = !showDropdown.value
  }
}

const dummy = ref<HTMLInputElement>(null)

watch(showDropdown, (v) => {
  if (v) {
    dummy.value.focus()
  }
})
</script>
<style lang="scss" scoped>
.input-select-wrapper {
  margin-bottom: 36px;
  width: 100%;
  p {
    @include medium(16);
    color: rgba($black-1, 0.4);
    margin-bottom: 12px;
    @include mobile {
      @include medium(14);
    }
  }
  .input-select-container {
    height: 43px;
    border-radius: 8px;
    width: calc(100% + 2px);
    border: 1px solid rgba(196, 196, 196, 0.6);
    margin-bottom: 16px;
    @include relative;
    .dummy {
      position: absolute;
      width: 0px;
      height: 0px;
      border: none;
      padding: 0;
    }
    .input-select {
      width: 100%;
      padding: 0px 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        @include medium(18);
        @include mobile {
          @include medium(14);
        }
        &.placeholder {
          color: rgba($black-1, 0.4);
        }
      }
      i {
        color: rgba(196, 196, 196, 0.6);
        font-size: 32px;
      }
    }
  }
  .input-select-dropdown {
    border: solid 1px rgba(196, 196, 196, 0.6);
    border-radius: 0px 0px 8px 8px;
    width: calc(100% + 2px);
    @include absolute(left -2px top 41px);
    background: $white;
    .input-select-dropdown-item {
      width: 100%;
      @include medium(18);
      padding: 6px 12px;
      @include mobile {
        @include medium(14);
      }
      &:hover {
        color: $main;
      }
    }
  }
}
</style>
