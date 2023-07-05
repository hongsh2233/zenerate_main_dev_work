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
      <div class="form mt-20 mb-12 w-full">
        <div class="form-row">
          <div class="input-wrapper">
            <p
              class="error-message"
              :class="{ active: contactForm.firstName.valid === false }"
            >
              Please enter name.
            </p>
            <input
              type="text"
              placeholder="First Name"
              autocomplete="new-firstname"
              v-model="contactForm.firstName.value"
              @blur="(v) => validation('firstName')"
            />
          </div>
          <div class="input-wrapper">
            <p
              class="error-message"
              :class="{ active: contactForm.lastName.valid === false }"
            >
              Please enter name.
            </p>
            <input
              type="text"
              placeholder="Last Name"
              autocomplete="new-lastname"
              v-model="contactForm.lastName.value"
              @blur="(v) => validation('lastName')"
            />
          </div>
        </div>
        <div class="form-row">
          <div
            class="input-wrapper email-input"
            :class="contactForm.email.value == '' ? 'empty' : ''"
          >
            <p
              class="error-message"
              :class="{ active: contactForm.email.valid === false }"
            >
              Invalid email address format.
            </p>
            <input
              type="text"
              placeholder="Enter Email"
              autocomplete="new-email"
              inputmode="email"
              v-model="contactForm.email.value"
              @blur="(v) => validation('email')"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="input-wrapper">
            <p
              class="error-message"
              :class="{ active: contactForm.company.valid === false }"
            >
              Please enter company name.
            </p>
            <input
              type="text"
              placeholder="Enter Company"
              autocomplete="new-company"
              v-model="contactForm.company.value"
              @blur="(v) => validation('company')"
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        class="text-13-medium h-36 min-h-36 w-full rounded-6 bg-primary text-white duration-300 hover:bg-core-700 lg:text-16-medium lg:h-48"
      >
        Submit
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Validation from '/Utils/Validation'

// Signup Form
const contactForm = ref({
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

const validation = (item: string) => {
  contactForm[item].valid = contactForm[item].validator(contactForm[item].value)
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

    .input-wrapper {
      width: 100%;
      &:not(:last-child) {
        margin-right: 4px;
      }

      .error-message {
        font-size: 10px;
        color: theme('colors.red.500');
      }
    }
  }
}
</style>
