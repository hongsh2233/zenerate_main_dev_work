<template>
  <section class="section-contact">
    <div class="contact-hero-wrapper">
      <!-- <img src="/en/img/contact_hero.jpg" alt="" /> -->
      <div class="hero-text-wrapper">
        <p class="title">Contact Us</p>
        <p class="text">We'd love to hear from you</p>
      </div>
      <div class="contact-form-wrapper">
        <div class="form-text">
          <div class="form-left">
            <div class="label-text">
              <p class="label-title">Your Company</p>
              <input
                type="text"
                v-model="contactForm.company.value"
                @blur="(v) => validation('company')"
              />
              <p
                class="label-error"
                :class="{ active: contactForm.company.valid === false }"
              >
                Please Enter!
              </p>
            </div>
            <div class="label-text">
              <p class="label-title">Name</p>
              <input
                type="text"
                v-model="contactForm.name.value"
                @blur="(v) => validation('name')"
              />
              <p
                class="label-error"
                :class="{ active: contactForm.name.valid === false }"
              >
                Please Enter!
              </p>
            </div>
          </div>
          <div class="form-right">
            <SelectInput
              placeholder="Select"
              :items="items"
              title="Inqueries"
              :skipTranslate="true"
              :selected="contactForm.purpose.value"
              @onSelect="
                (v) => ((contactForm.purpose.value = v), validation('purpose'))
              "
            />
            <div class="label-text">
              <p class="label-title">Email Address</p>
              <input
                type="text"
                v-model="contactForm.email.value"
                @blur="(v) => validation('email')"
              />
              <p
                class="label-error"
                :class="{ active: contactForm.email.valid === false }"
              >
                Please Enter Valid Email Address!
              </p>
            </div>
          </div>
        </div>
        <div class="label-textarea">
          <p class="label-title">Message</p>
          <textarea
            v-model="contactForm.message.value"
            rows="7"
            @blur="(v) => validation('message')"
          />
        </div>
        <div class="form-send-wrapper">
          <div class="dummy" ref="dummy"></div>
          <button
            class="form-send hover-pointer"
            :class="{ disabled: sendEmailStatus }"
            @click="sendEmail"
          >
            {{ sendEmailStatus ? 'DONE' : 'SUBMIT' }}
          </button>
        </div>
      </div>
    </div>
    <div class="section section-footer fp-auto-height">
      <Footer />
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, ref, onMounted, computed } from 'vue'
import Store from '/Store/index'
import ApiService from '/Services/api'
import Validation from '/Utils/Validation'
import { useRoute } from 'vue-router'
// @ts-ignore
import Footer from '/Components/EN/Footer.vue'

const fullpage = computed(() => Store.state.root.FullPage)

// @ts-ignore
import SelectInput from '/Components/SelectInput.vue'

type Item = {
  id: number
  value: string
  label: string
  ref?: string
}

const items: Item[] = [
  {
    id: 0,
    value: 'demo',
    label: 'Request a Demo',
  },

  {
    id: 1,
    value: 'invest',
    label: 'Investments',
  },
  {
    id: 2,
    value: 'media',
    label: 'Media',
  },
  {
    id: 3,
    value: 'product_service',
    label: 'Product/Service',
  },
  {
    id: 4,
    value: 'careers',
    label: 'Careers',
  },
  {
    id: 5,
    value: 'other',
    label: 'Other',
  },
]
const sendEmailStatus = ref(false)

const contactForm = reactive({
  company: {
    value: '',
    validator: Validation.string,
    valid: null,
  },
  name: {
    value: '',
    validator: Validation.string,
    valid: null,
  },
  email: {
    value: '',
    validator: Validation.email,
    valid: null,
  },
  purpose: {
    value: null,
    validator: (v) => true,
    valid: null,
  },
  message: {
    value: '',
    validator: Validation.string,
    valid: null,
  },
})

const validation = (item: string) => {
  contactForm[item].valid = contactForm[item].validator(contactForm[item].value)
}

const dummy = ref(null)

const sendEmail = async () => {
  if (sendEmailStatus.value == true) return
  dummy.value.focus()
  let isValid = true
  const form = {}
  for (const key in contactForm) {
    if (!contactForm[key].valid) {
      contactForm[key].valid = false
      isValid = false
    } else {
      if (key === 'purpose') {
        form[key] = contactForm[key].value.label
      } else {
        form[key] = contactForm[key].value
      }
    }
  }

  if (!isValid) return
  await ApiService.SEND_EMAIL(form)
  sendEmailStatus.value = true
}

onMounted(() => {
  if (fullpage.value) {
    fullpage.value.destroy()
  }
  const route = useRoute()
  if (route.query && route.query.from === 'demo') {
    contactForm.purpose.value = {
      id: 0,
      value: 'demo',
      label: 'Request a Demo',
    }
  }
})
</script>
<style lang="scss" scoped>
.section-contact {
  @include relative;
  .contact-hero-wrapper {
    @include relative;
    height: 555px;
    padding-top: 100px;
    background-image: url('/en/img/contact_hero.jpg');
    background-size: cover;
    background-origin: center center;
    img {
      width: 100%;
    }
    .hero-text-wrapper {
      @include container;
      padding-top: 40px !important;
      p {
        color: white;
        &.title {
          @include medium(36);
        }
        &.text {
          @include regular(24);
        }
      }
    }
  }
  .contact-form-wrapper {
    padding-top: 52px;
    width: 840px;
    @include absolute(top 260px);
    height: 500px;
    overflow-y: scroll;
    background-color: $white;
    @include elevation-4;
    border-radius: 20px;
    padding: 32px 36px;
    left: 50%;
    transform: translateX(-50%);
    .form-text {
      @include flex;
      .form-left {
        flex: 1;
        margin-right: 64px;
      }
      .form-right {
        flex: 1;
      }
    }
    .label-text {
      width: 100%;
      margin-bottom: 16px;
      input {
        width: 100%;
        height: 42px;
        @include border-set(1px, rgba($grey, 0.6), 6px);
        @include center-vertical();
        padding: 0px 12px;
        @include regular(16);
        color: $black-1;
        &::placeholder {
          color: rgba($black-1, 0.4);
        }
        &:focus {
          border-width: 2px;
        }
      }
    }
    .label-textarea {
      width: 100%;
      margin-bottom: 24px;
      textarea {
        width: 100%;
        height: 84px;
        @include border-set(1px, rgba($grey, 0.6), 6px);
        padding: 4px 12px;
        @include regular(16);
        color: $black-1;
        &::placeholder {
          color: rgba($black-1, 0.4);
        }
        &:focus {
          border-width: 2px;
        }
      }
    }
    .label-text,
    .label-textarea {
      .label-title {
        @include regular(16);
        color: rgba($cr-text-grey, 1);
        margin-bottom: 8px;
      }
      .label-error {
        width: 100%;
        @include regular(12);
        color: transparent;
        text-align: right;
        &.active {
          color: #ff8686;
        }
      }
    }
    .form-send-wrapper {
      width: 100%;
      text-align: center;
      button {
        margin: 0px auto;
        @include button-3(150px, 50px);

        @include border-set(1px, rgba($grey, 0.6), 6px);
      }
    }
    input::placeholder {
      color: $bt-secondary-stroke-disabled;
    }
  }
  .section-footer {
    margin-top: 280px;
  }
}
</style>
