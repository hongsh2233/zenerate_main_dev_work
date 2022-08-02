<template>
  <ModalLayout
    class="fixed top-0 left-0"
    showCloseButton
    @close="toggleTryPopup(false)"
  >
    <div
      class="w-[296px] md:w-[640px] lg:w-[924px] h-auto flex flex-col items-center px-28 pt-46 md:px-46"
    >
      <div
        class="grid grid-rows-2 md:grid-cols-[auto_auto] md:grid-rows-2 lg:grid-cols-[auto_auto] lg:grid-rows-[auto_auto]"
      >
        <div class="flex flex-col text-gray-700 mb-50">
          <p
            class="text-m-20-light text-primary w-full text-center md:text-left lg:text-left mb-32 md:mb-34 lg:mb-50 md:text-d-32-light lg:text-d-32-light"
          >
            <span
              class="text-m-20-semibold md:text-d-32-semibold lg:text-d-32-semibold"
            >
              Try Zenerate
            </span>
            for free
          </p>
          <span class="text-14-semibold mb-10">How it works</span>
          <div class="flex flex-col gap-14">
            <div class="flex gap-10">
              <span
                class="flex justify-center items-center mt-1 pt-1 text-white bg-core-500 rounded-[50%] min-w-18 w-18 h-18 text-10 font-semibold"
                >1</span
              >
              <p class="text-m-13-medium">
                Fill out the form and click<br />
                'RECEIVE ACCESS'
              </p>
            </div>
            <div class="flex gap-10">
              <span
                class="flex justify-center items-center mt-1 pt-1 text-white bg-core-500 rounded-[50%] min-w-18 w-18 h-18 text-10 font-semibold"
                >2</span
              >
              <p class="text-m-13-medium">
                The Zenerate Team will<br />
                review your information
              </p>
            </div>
            <div class="flex gap-10">
              <span
                class="flex justify-center items-center mt-1 pt-1 text-white bg-core-500 rounded-[50%] min-w-18 w-18 h-18 text-10 font-semibold"
                >3</span
              >
              <p class="text-m-13-medium">
                We will reach out to you via<br />
                email granting access<br />
                (with the option of<br />
                receiving a quick demo)
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="flex flex-col relative gap-16 mb-40">
            <div class="flex flex-nowrap">
              <Form
                :inputValue="signUpForm.first_name"
                @update:inputValue="(v) => (signUpForm.first_name = v)"
                @blur="() => displayFormValid('first_name')"
                :isValid="true"
                required
                size="large"
                placeholder="First Name"
                typeName="text"
                label="First Name"
                width="w-117"
                direction="col"
                autocomplete="new-first-name"
              />

              <Form
                class="ml-6"
                :inputValue="signUpForm.last_name"
                @update:inputValue="(v) => (signUpForm.last_name = v)"
                @blur="() => displayFormValid('last_name')"
                :isValid="true"
                required
                size="large"
                placeholder="Last Name"
                typeName="text"
                label="Last Name"
                width="w-117"
                direction="col"
                autocomplete="new-first-name"
              />
            </div>
            <Form
              :inputValue="signUpForm.email"
              @update:inputValue="(v) => (signUpForm.email = v)"
              @blur="() => displayFormValid('email')"
              :isValid="signUpForm.email && validStatus.email.status !== false"
              size="large"
              direction="col"
              width="w-[240px]"
              required
              placeholder="Enter Email"
              typeName="email"
              label="Work email"
              autocomplete="new-email"
            >
            </Form>
            <Form
              :inputValue="signUpForm.phone"
              @update:inputValue="(v) => (signUpForm.phone = v)"
              @blur="() => displayFormValid('phone')"
              :isValid="signUpForm.phone && validStatus.phone.status !== false"
              size="large"
              direction="col"
              width="w-[240px]"
              placeholder="123-456.789"
              typeName="tel"
              label="Phone number"
              autocomplete="new-phonenumber"
            >
            </Form>

            <div class="flex flex-nowrap">
              <Form
                :inputValue="signUpForm.city"
                @update:inputValue="(v) => (signUpForm.city = v)"
                @blur="() => displayFormValid('city')"
                :isValid="true"
                size="large"
                placeholder="Los Angeles"
                typeName="text"
                label="City"
                width="w-117"
                direction="col"
                autocomplete="new-first-city"
              />

              <Form
                class="ml-6"
                :inputValue="signUpForm.state"
                @update:inputValue="(v) => (signUpForm.state = v)"
                @blur="() => displayFormValid('state')"
                :isValid="true"
                size="large"
                placeholder="Califonia"
                typeName="text"
                label="State"
                width="w-117"
                direction="col"
                autocomplete="new-state"
              />
            </div>
            <Form
              :inputValue="signUpForm.company"
              @update:inputValue="(v) => (signUpForm.company = v)"
              @blur="() => displayFormValid('company')"
              :isValid="
                signUpForm.company && validStatus.company.status !== false
              "
              size="large"
              direction="col"
              width="w-[240px]"
              placeholder="Zenerate"
              typeName="text"
              label="Company name"
              autocomplete="new-company-name"
            >
            </Form>
            <Form
              :inputValue="signUpForm.website"
              @update:inputValue="(v) => (signUpForm.website = v)"
              @blur="() => displayFormValid('website')"
              :isValid="
                signUpForm.website && validStatus.website.status !== false
              "
              size="large"
              direction="col"
              width="w-[240px]"
              placeholder="www.zenerate.ai"
              typeName="text"
              label="Company website"
              autocomplete="new-company-website"
            >
            </Form>
            <span
              class="text-12-medium text-primary text-right w-full absolute right-0 bottom-[-24px]"
              >*required</span
            >
          </div>
          <Button class="w-[240px]" @click="onClickReceiveAccess">
            Receive Access
          </Button>
        </div>
      </div>
    </div>
  </ModalLayout>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { MENU_EVENT } from '/Constants/eventConstant'
import Emitter from '/Libraries/bus'
import { ModalLayout, Button, Form } from '/Components/EN/index'
import Validator from '/Utils/Validation'

const emits = defineEmits(['toggleTryPopup'])
const toggleTryPopup = (v: boolean) => {
  emits('toggleTryPopup', v)
}

// ---------------- form ----------------

const onClickReceiveAccess = () => {}

type signUpType = {
  first_name: string
  last_name: string
  email: string
  phone?: string
  city?: string
  state?: string
  company?: string
  website?: string
}

const signUpForm = ref<signUpType>({
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  city: '',
  state: '',
  company: '',
  website: '',
})

const signUpFormValidation = computed(() => {
  return {
    first_name: Validator.string(signUpForm.value.first_name, 1, 20),
    last_name: Validator.string(signUpForm.value.last_name, 1, 20),
    email: Validator.email(signUpForm.value.email),
    phone: Validator.string(signUpForm.value.phone, 6, 20),
    city: Validator.string(signUpForm.value.city, 1, 50),
    state: Validator.string(signUpForm.value.city, 1, 50),
    company: Validator.string(signUpForm.value.company, 1, 100),
    website: Validator.string(signUpForm.value.company, 1, 100),
  }
})

const validStatus = ref({
  first_name: {
    key: 'first_name',
    error_message: 'REQUIRED_VALUE',
    status: null,
  },
  last_name: {
    key: 'last_name',
    error_message: 'REQUIRED_VALUE',
    status: null,
  },
  email: { key: 'email', error_message: 'CHECK_EMAIL', status: null },
  phone: {
    key: 'phone',
    error_message: 'REQUIRED_VALUE',
    status: null,
  },
  city: {
    key: 'city',
    error_message: 'REQUIRED_VALUE',
    status: null,
  },
  state: {
    key: 'state',
    error_message: 'REQUIRED_VALUE',
    status: null,
  },
  company: { key: 'company', error_message: 'REQUIRED_VALUE', status: null },
  website: { key: 'website', error_message: 'REQUIRED_VALUE', status: null },
})

const displayFormValid = (key) => {
  validStatus.value[key].status = signUpFormValidation.value[key]
}
</script>
<style lang="scss"></style>
