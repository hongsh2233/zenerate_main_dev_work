<template>
  <div
    class="mx-auto flex h-fit w-[320px] min-w-[320px] flex-col overflow-hidden rounded-10 bg-white shadow-200 md:h-[360px] md:w-[708px] md:flex-row lg:h-[456px] lg:min-w-[900px] lg:flex-row"
  >
    <div
      class="flex items-center bg-primary px-24 pt-30 pb-38 md:min-w-[354px] lg:min-w-[450px]"
    >
      <slot name="description"></slot>
    </div>

    <div
      class="flex flex-col items-center justify-center bg-white px-32 pt-36 pb-52 md:px-50 lg:px-62"
    >
      <slot name="form-title"></slot>

      <div class="form mt-16 mb-12 w-full lg:mt-26 lg:mb-16">
        <div class="form-row">
          <div
            class="input-wrapper first-name"
            :class="{ error: SignUpForm.firstName.valid === false }"
          >
            <p class="error-message">Please enter name.</p>
            <input
              type="text"
              placeholder="First Name"
              autocomplete="new-firstname"
              v-model="SignUpForm.firstName.value"
              @blur="(v) => validation('firstName')"
            />
          </div>
          <div
            class="input-wrapper last-name"
            :class="{ error: SignUpForm.lastName.valid === false }"
          >
            <p class="error-message">Please enter name.</p>
            <input
              type="text"
              placeholder="Last Name"
              autocomplete="new-lastname"
              v-model="SignUpForm.lastName.value"
              @blur="(v) => validation('lastName')"
            />
          </div>
        </div>
        <div class="form-row">
          <div
            class="input-wrapper email"
            :class="{ error: SignUpForm.email.valid === false }"
          >
            <p class="error-message">Invalid email address format.</p>
            <input
              type="text"
              placeholder="Enter Email"
              autocomplete="new-email"
              inputmode="email"
              v-model="SignUpForm.email.value"
              @blur="(v) => validation('email')"
            />
          </div>
        </div>
        <div class="form-row">
          <div
            class="input-wrapper company"
            :class="{ error: SignUpForm.company.valid === false }"
          >
            <p class="error-message">Please enter company name.</p>
            <input
              type="text"
              placeholder="Enter Company"
              autocomplete="new-company"
              v-model="SignUpForm.company.value"
              @blur="(v) => validation('company')"
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        class="submit-button"
        :disabled="!canSubmitForm"
        :class="{ disabled: !canSubmitForm }"
        @click="submitForm"
      >
        <DotSpinnerWhite
          v-if="loading"
          :loading="true"
          class="!mx-auto !w-fit"
        />
        <span v-else> Submit</span>
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import Validation from '/Utils/Validation'
import DotSpinnerWhite from './ui/DotSpinnerWhite.vue'

const SignUpForm = ref({
  firstName: {
    value: '',
    validator: Validation.string,
    valid: null,
  },
  lastName: {
    value: '',
    validator: Validation.string,
    valid: null,
  },
  email: {
    value: '',
    validator: Validation.email,
    valid: null,
  },
  company: {
    value: '',
    validator: Validation.string,
    valid: null,
  },
})

const canSubmitForm = computed(
  () =>
    Object.keys(SignUpForm.value).every((key) => SignUpForm.value[key].valid) ||
    loading.value
)

const loading = ref(false)

const validation = (item: string) => {
  const inputValue = SignUpForm.value[item].value
  SignUpForm.value[item].valid =
    SignUpForm.value[item].validator(inputValue) && inputValue.trim() !== ''
}

const submitForm = () => {
  // TOOD
  console.log('SUBMIT')
  loading.value = true
}
</script>
<style lang="scss" scoped>
.form {
  input {
    width: 100%;
    height: 50px;
    border: solid 1px theme('colors.gray.350');
    border-radius: 6px;
    padding: 0 16px;
    &::placeholder {
      font-size: 16px;
    }

    @include en-tablet {
      height: 40px;
      padding: 0 13px;
      &::placeholder {
        font-size: 13px;
      }
    }
    @include en-mobile {
      height: 40px;
      padding: 0 13px;
      &::placeholder {
        font-size: 13px;
      }
    }
  }

  .form-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  .input-wrapper {
    width: 100%;
    &:not(:last-child) {
      margin-right: 4px;
    }

    .error-message {
      height: 0;
      overflow: hidden;
      margin-bottom: 4px;
      font-size: 10px;
      color: transparent;
    }

    &.first-name,
    &.last-name {
      .error-message {
        height: fit-content;
      }
    }

    &.error {
      input {
        border: solid 1px theme('colors.red.400');
      }
      .error-message {
        color: theme('colors.red.500');
        height: fit-content;
      }
    }
  }
}

.submit-button {
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  height: 48px;
  min-height: 48px;
  border-radius: 6px;
  color: white;
  background-color: theme('colors.primary.DEFAULT');
  &:hover {
    background-color: theme('colors.core.700');
  }
  &.disabled {
    background-color: theme('colors.gray.350');
    cursor: not-allowed;
  }

  @include en-tablet {
    font-size: 13px;
    height: 36px;
    min-height: 36px;
  }
  @include en-mobile {
    font-size: 13px;
    height: 36px;
    min-height: 36px;
  }
}
</style>
