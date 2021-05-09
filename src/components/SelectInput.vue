<template>
  <div class="input-select-wrapper">
    <input type="text" class="dummy" ref="dummy" />
    <div class="input-select hover-pointer" @click="toggleDropDown()">
      <span
        :class="{
          selected: props.selected && props.selected.length > 0,
          placholder: !props.selected || props.selected.length === 0,
        }"
        >{{
          props.selected && props.selected.length > 0
            ? props.selected
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
          @click="onSelect(item.value)"
          :key="idx"
        >
          <span>{{ item.value }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, defineProps, defineEmit } from 'vue'

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
    type: String,
    defualt() {
      return ''
    },
  },
})

const emit = defineEmit(['onSelect'])

const onSelect = (value) => {
  emit('onSelect', value)
  toggleDropDown(false)
}

const showDropdown = ref(false)
const toggleDropDown = (flag) => {
  console.log(flag)
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
  height: 43px;
  border: solid 2px $main;
  width: 100%;
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
    padding: 8px 12px 4px;
    display: flex;
    justify-content: space-between;
    span {
      color: $main;
      @include medium(18);
    }
    i {
      color: $main;
      font-size: 30px;
    }
  }
}
.input-select-dropdown {
  border: solid 2px $main;
  border-top: none;
  width: calc(100% + 4px);
  @include absolute(left -2px top 41px);
  background: $white;
  .input-select-dropdown-item {
    width: 100%;
    color: $main;
    @include medium(18);
    padding: 6px 12px;
    &:hover {
      background-color: $main;
      color: $white;
    }
  }
}
</style>
