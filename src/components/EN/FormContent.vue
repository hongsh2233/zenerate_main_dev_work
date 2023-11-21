<template>
  <div v-if="!formSubmitted" class="form-wrapper">
    <div class="form mt-10 mb-0 w-full">
      <div
        v-if="
          contentList.includes('firstName') || contentList.includes('lastName')
        "
        class="form-row"
      >
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
            @input="(v) => validation('firstName')"
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
            @input="(v) => validation('lastName')"
          />
        </div>
      </div>
      <div v-if="contentList.includes('email')" class="form-row">
        <div
          class="input-wrapper email"
          :class="{ error: SignUpForm.email.valid === false }"
        >
          <p class="error-message">Invalid email address format.</p>
          <input
            type="text"
            placeholder="Enter Work Email"
            autocomplete="new-email"
            inputmode="email"
            v-model="SignUpForm.email.value"
            @input="(v) => validation('email')"
          />
        </div>
      </div>
      <div v-if="contentList.includes('company')" class="form-row">
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
            @input="(v) => validation('company')"
          />
        </div>
      </div>
      <div v-if="contentList.includes('jobTitle')" class="form-row">
        <div
          class="input-wrapper job-title"
          :class="{ error: SignUpForm.jobTitle.valid === false }"
        >
          <p class="error-message">Please enter job title.</p>
          <input
            type="text"
            placeholder="Enter Job Title"
            autocomplete="new-job-title"
            v-model="SignUpForm.jobTitle.value"
            @input="(v) => validation('jobTitle')"
          />
        </div>
      </div>
      <div v-if="contentList.includes('address')" class="form-row">
        <div
          class="input-wrapper address"
          :class="{ error: SignUpForm.address.valid === false }"
        >
          <p class="error-message">Please enter address.</p>
          <input
            type="text"
            placeholder="Address (Los Angeles only)"
            autocomplete="new-address"
            v-model="SignUpForm.address.value"
            @input="(v) => validation('address')"
          />
        </div>
      </div>
      <div v-if="contentList.includes('lotSize')" class="form-row">
        <div class="input-wrapper lotSize">
          <input
            type="text"
            placeholder="Lot Size (If known)"
            autocomplete="new-lot-size"
            v-model="SignUpForm.lotSize.value"
          />
        </div>
      </div>
      <div v-if="contentList.includes('message')" class="form-row">
        <div class="input-wrapper message">
          <textarea
            type="text"
            :spellcheck="false"
            placeholder="Message (Optional)"
            autocomplete="new-message"
            v-model="SignUpForm.message.value"
          />
        </div>
      </div>
      <div v-if="contentList.includes('projectDetail')" class="form-row">
        <div class="input-wrapper projectDetail">
          <textarea
            type="text"
            :spellcheck="false"
            placeholder="Tell us more about your project.
(ex. 1 story podium parking preferred)"
            autocomplete="new-projectDetail"
            v-model="SignUpForm.projectDetail.value"
          />
        </div>
      </div>
      <div v-if="contentList.includes('interest')" class="form-row mb-8">
        <div class="input-wrapper">
          <div
            class="hover-pointer flex flex-row items-center"
            @click="
              () =>
                (SignUpForm.interest.value =
                  SignUpForm.interest.value === 'MODULAR' ? '' : 'MODULAR')
            "
          >
            <IconBase
              :icon-name="
                SignUpForm.interest.value === 'MODULAR'
                  ? 'checkbox-checked'
                  : 'checkbox'
              "
              :width="16"
              :height="16"
              class="w-16 min-w-16 max-w-16 lg:hidden"
            />
            <IconBase
              :icon-name="
                SignUpForm.interest.value === 'MODULAR'
                  ? 'checkbox-checked'
                  : 'checkbox'
              "
              :width="20"
              :height="20"
              class="hidden w-20 min-w-20 max-w-20 lg:block"
            />
            <span class="ml-8 text-12 md:text-12 lg:text-14"
              >I am interested in an app for modular housing</span
            >
          </div>
        </div>
      </div>
    </div>
    <slot name="additional-text"></slot>
    <button
      type="button"
      class="submit-button"
      :disabled="!canSubmitForm"
      :class="{ disabled: !canSubmitForm }"
      @click="submitForm"
    >
      <DotSpinnerWhite v-if="loading" :loading="true" class="!mx-auto !w-fit" />
      <span v-else>{{ submitBtnText }}</span>
    </button>
  </div>
  <transition v-else name="fade">
    <div class="mt-40 flex flex-col items-center">
      <div class="relative mb-14 h-50 w-50 rounded-50 bg-[#EBEDFE]">
        <svg
          width="43"
          height="35"
          viewBox="0 0 43 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute left-8 top-4"
        >
          <path
            d="M39.6345 0.787109L39.3662 1.10429L39.3739 1.11323L32.1398 9.69946L14.5447 30.5873C14.1699 31.0325 13.6693 31.2603 13.1674 31.2603C12.8671 31.2603 12.5667 31.177 12.2908 31.0131L13.3548 32.0243L14.9619 33.5506C15.3187 33.8886 15.75 34.0569 16.1813 34.0569C16.6831 34.0569 17.1837 33.8306 17.5585 33.3838L42.3877 3.90978L39.6345 0.787109Z"
            fill="#4848FF"
          />
          <path
            d="M32.1342 9.68945L16.0371 28.7963L13.0746 25.9818L13.0656 25.9729L3.299 16.6928L0.860229 20.1505L10.365 29.1805L10.374 29.1894L12.2916 31.0121C12.5676 31.1759 12.868 31.2593 13.1683 31.2593C13.6702 31.2593 14.1708 31.0329 14.5456 30.5862L32.1419 9.69988L32.1342 9.68945Z"
            fill="#4848FF"
            fill-opacity="0.4"
          />
        </svg>
      </div>
      <span class="mb-24 text-24 font-medium lg:text-28">Thank you!</span>
      <slot name="after-submit-text"></slot>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import { PropType, computed, ref } from 'vue'
import router from '/@/router'
import Emitter from '/Libraries/bus'
import ApiService from '/Services/api'
import Validation from '/Utils/Validation'
import { MENU_EVENT } from '/Constants/eventConstant'
import DotSpinnerWhite from './ui/DotSpinnerWhite.vue'
import { IconBase } from '.'

const props = defineProps({
  sheetName: {
    type: String as PropType<SheetName>,
    required: true,
  },
  submitBtnText: {
    type: String,
    default: 'Submit',
  },
})

type SheetName = 'Beta' | 'AIConsulting' | 'Modular' | 'ED1Report'
type InputType =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'company'
  | 'jobTitle'
  | 'address'
  | 'lotSize'
  | 'message'
  | 'projectDetail'
  | 'interest'
const CONTENT_LIST_DICT: Record<SheetName, InputType[]> = {
  Beta: [
    'firstName',
    'lastName',
    'email',
    'company',
    'jobTitle',
    'message',
    'interest',
  ],
  AIConsulting: [
    'firstName',
    'lastName',
    'email',
    'company',
    'jobTitle',
    'message',
  ],
  Modular: ['firstName', 'lastName', 'email', 'company', 'jobTitle', 'message'],
  ED1Report: [
    'firstName',
    'lastName',
    'email',
    'company',
    'address',
    'lotSize',
    'projectDetail',
  ],
}

const sheetName = computed(() => props.sheetName)
const contentList = computed(() => CONTENT_LIST_DICT[sheetName.value])

const SignUpForm = ref<
  Record<
    InputType,
    {
      value: string
      validator?: (v: any) => boolean
      valid: boolean
    }
  >
>({
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
  jobTitle: {
    value: '',
    validator: Validation.string,
    valid: null,
  },
  address: {
    value: '',
    validator: Validation.string,
    valid: null,
  },
  lotSize: {
    value: '',
    valid: true,
  },
  message: {
    value: '',
    valid: true,
  },
  projectDetail: {
    value: '',
    valid: true,
  },
  interest: {
    value: '',
    valid: true,
  },
})

const canSubmitForm = computed(
  () =>
    Object.keys(SignUpForm.value)
      .filter((key) => contentList.value.includes(key as InputType))
      .every((key) => SignUpForm.value[key].valid) || loading.value
)

const loading = ref(false)
const formSubmitted = ref(false)

const validation = (item: string) => {
  const inputValue = SignUpForm.value[item].value
  SignUpForm.value[item].valid =
    SignUpForm.value[item].validator(inputValue) && inputValue.trim() !== ''
}

const submitForm = async () => {
  const form = {}
  for (const key in SignUpForm.value) {
    if (contentList.value.includes(key as InputType)) {
      form[key] = String(SignUpForm.value[key].value)
    }
  }

  const emailForm = {
    ...form,
    name:
      SignUpForm.value.firstName.value + ' ' + SignUpForm.value.lastName.value,
  }

  const currentParams = { ...router.currentRoute.value.query }
  for (const key of ['utm_source', 'utm_medium']) {
    form[key] = currentParams[key]
  }

  try {
    loading.value = true

    if (sheetName.value === 'Modular') {
      Emitter.emit(MENU_EVENT.TOGGLE_CALENDLY_POPUP, {
        flag: true,
        trigger: 'modularlandingpage',
      })
    }

    await ApiService.XSLX_TEST(sheetName.value, form)
    await ApiService.SEND_EMAIL(emailForm)

    if (sheetName.value === 'ED1Report') {
      const activeCampaignForm = {
        email: SignUpForm.value.email.value,
        firstName: SignUpForm.value.firstName.value,
        lastName: SignUpForm.value.lastName.value,
        company: SignUpForm.value.company.value,
        ed1_address: SignUpForm.value.address.value,
        ed1_lot_size: SignUpForm.value.lotSize.value,
        ed1_message: SignUpForm.value.projectDetail.value,
        tag: 'ed1_report',
      }

      await ApiService.ACTIVE_CAMPAIGN(activeCampaignForm)
    }

    loading.value = false
    formSubmitted.value = true
  } catch (e) {}
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
    font-size: 16px;
    &::placeholder {
      font-size: 16px;
    }

    @include en-tablet {
      height: 40px;
      padding: 0 13px;
      font-size: 13px;
      &::placeholder {
        font-size: 13px;
      }
    }
    @include en-mobile {
      height: 40px;
      padding: 0 13px;
      font-size: 13px;
      &::placeholder {
        font-size: 13px;
      }
    }
  }

  textarea {
    width: 100%;
    height: 100px;
    border: solid 1px theme('colors.gray.350');
    border-radius: 6px;
    padding: 14px 16px;
    font: inherit;
    resize: none;
    font-size: 16px;
    &::placeholder {
      font-size: 16px;
    }

    @include en-tablet {
      height: 80px;
      padding: 11px 13px;
      font-size: 13px;
      &::placeholder {
        font-size: 13px;
      }
    }
    @include en-mobile {
      height: 80px;
      padding: 11px 13px;
      font-size: 13px;
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
      color: transparent;
      font-size: 12px;

      @include en-tablet {
        font-size: 10px;
      }

      @include en-mobile {
        font-size: 10px;
      }
    }

    &.first-name,
    &.last-name {
      .error-message {
        height: fit-content;
        margin-bottom: 4px;
      }
    }

    &.error {
      input {
        border: solid 1px theme('colors.red.400');
      }
      .error-message {
        color: theme('colors.red.500');
        height: fit-content;
        margin-bottom: 4px;
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
