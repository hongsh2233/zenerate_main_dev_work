<template>
  <div id="fullpage-contact">
    <section class="section section-contact">
      <div class="contact-hero-wrapper">
        <div class="hero-text-wrapper">
          <p class="title">Contact Us</p>
          <p class="text">We'd love to hear from you</p>
        </div>
        <div class="contact-form-wrapper" :class="{ done: sendEmailStatus }">
          <transition name="fade">
            <div class="contact-form-success" v-if="sendEmailStatus">
              <div class="contact-form-inner">
                <img
                  data-aos="fade-up"
                  data-aos-offset="-1500"
                  data-aos-duration="500"
                  data-aos-anchor-placement="bottom-bottom"
                  src="/en/img/contact_submit_done.png"
                  alt=""
                />
                <div
                  class="inner-content"
                  data-aos="fade-up"
                  data-aos-offset="-1500"
                  data-aos-delay="500"
                  data-aos-duration="500"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <p class="content-heading">Successfully submitted!</p>
                  <p class="content-text">
                    We've received your message and will get back to you soon.
                  </p>
                  <button
                    class="content-button"
                    @click="router.push({ name: 'en-landing' })"
                  >
                    Go to Home
                  </button>
                </div>
              </div>
            </div>
          </transition>
          <div class="form-text">
            <div class="form-left">
              <div class="label-text">
                <p class="label-title">First Name</p>
                <input
                  type="text"
                  v-model="contactForm.firstName.value"
                  @blur="(v) => validation('firstName')"
                />
                <p
                  class="label-error"
                  :class="{ active: contactForm.firstName.valid === false }"
                >
                  Please Enter!
                </p>
              </div>
              <div class="label-text">
                <p class="label-title">Company</p>
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
            </div>
            <div class="form-right">
              <div class="label-text">
                <p class="label-title">Last Name</p>
                <input
                  type="text"
                  v-model="contactForm.lastName.value"
                  @blur="(v) => validation('lastName')"
                />
                <p
                  class="label-error"
                  :class="{ active: contactForm.lastName.valid === false }"
                >
                  Please Enter!
                </p>
              </div>
              <SelectInput
                placeholder="Select"
                :items="items"
                title="Inquiries"
                :skipTranslate="true"
                :selected="contactForm.buildings.value"
                :valid="contactForm.buildings.valid"
                @onSelect="
                  (v) => (
                    (contactForm.buildings.value = v), validation('buildings')
                  )
                "
              />
              <SelectInput
                placeholder="Select"
                :items="items"
                title="Inquiries"
                :skipTranslate="true"
                :selected="contactForm.role.value"
                :valid="contactForm.role.valid"
                @onSelect="
                  (v) => ((contactForm.role.value = v), validation('role'))
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

          <div class="form-send-wrapper">
            <div class="dummy" ref="dummy"></div>
            <button
              class="form-send hover-pointer"
              :class="{ disabled: sendEmailStatus }"
              @click="sendForm"
            >
              {{ sendEmailStatus ? 'DONE' : 'SUBMIT' }}
            </button>
          </div>
        </div>
      </div>
      <div class="section section-footer">
        <Footer />
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMeta } from 'vue-meta'
import Store from '/Store/index'
import ApiService from '/Services/api'
import Validation from '/Utils/Validation'
import Footer from '/Components/EN/Footer.vue'
import SelectInput from '/Components/SelectInput.vue'

const fullpage = computed(() => Store.state.root.FullPage)

onMounted(() => {
  if (fullpage.value) {
    fullpage.value.destroy()
  }
})

type Item = {
  id: number
  value: string
  label: string
  ref?: string
}

const items: Item[] = [
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

/*   const temp = {
    firstName: 'aa',
    lastName: 'bb',
    email: 'test@gmail.com',
    company: 'zenerate',
    city: 'seoul',
    state: 'seoul',
    country: 'korea',
    phone: '821012341234',
    role: 'bbb',
    buildings: '1',
  }
*/
const contactForm = reactive({
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
  city: {
    value: '',
    validator: Validation.string,
    valid: null,
  },
  state: {
    value: '',
    validator: Validation.string,
    valid: null,
  },
  country: {
    value: '',
    validator: Validation.string,
    valid: null,
  },
  phone: {
    value: '',
    validator: Validation.string,
    valid: null,
  },
  role: {
    value: null,
    validator: (v) => true,
    valid: null,
  },
  buildings: {
    value: null,
    validator: (v) => true,
    valid: null,
  },
})

const validation = (item: string) => {
  contactForm[item].valid = contactForm[item].validator(contactForm[item].value)
}

const resetForm = () => {
  Object.assign(contactForm, {
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
    city: {
      value: '',
      validator: Validation.string,
      valid: null,
    },
    state: {
      value: '',
      validator: Validation.string,
      valid: null,
    },
    country: {
      value: '',
      validator: Validation.string,
      valid: null,
    },
    phone: {
      value: '',
      validator: Validation.string,
      valid: null,
    },
    role: {
      value: null,
      validator: (v) => true,
      valid: null,
    },
    buildings: {
      value: null,
      validator: (v) => true,
      valid: null,
    },
  })
}

const dummy = ref(null)

const sendForm = async () => {
  if (sendEmailStatus.value == true) return
  dummy.value.focus()
  let isValid = true
  const form = {}
  for (const key in contactForm) {
    if (!contactForm[key].valid) {
      contactForm[key].valid = false
      isValid = false
    } else {
      if (key === 'buildings' || 'role') {
        form[key] = contactForm[key].value.label
      } else {
        form[key] = contactForm[key].value
      }
    }
  }

  console.log('form', form)
  console.log('isvalied', isValid)

  if (!isValid) return
  //   await ApiService.XSLX_TEST(form)
  resetForm()
  sendEmailStatus.value = true
  window.open('https://app.zenerate.ai', '_blank')
  window.location.href = 'en-landing'
}
const router = useRouter()

const { meta } = useMeta({
  title: 'Contact Us | Zenerate',
  description: `We'd love to hear from you. Please email us for inquiries at help@zenerate.ai`,
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content: `We'd love to hear from you. Please email us for inquiries at help@zenerate.ai`,
    },
  ],
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai/contact' }],
  og: {
    url: 'https://www.zenerate.ai/contact',
    type: 'website',
    title: 'Contact Us | Zenerate',
    description: `We'd love to hear from you. Please email us for inquiries at help@zenerate.ai`,
    tags: 'zenerate',
    keywords: 'zenerate',
    image: 'https://www.zenerate.ai/img/logo_og.png',
  },
  twitter: {
    title: 'Contact Us | Zenerate',
  },
})
</script>
<style lang="scss" scoped>
.section-contact {
  @include relative;
  width: 100%;
  height: 100%;
  .contact-hero-wrapper {
    @include relative;
    height: 555px;
    padding-top: 100px;
    background-image: url('/en/img/contact_hero.png');
    background-size: cover;
    background-origin: center center;
    img {
      width: 100%;
    }
    @include en-tablet {
      padding-top: 40px;
      margin-bottom: 540px;
    }
    @include en-mobile {
      padding-top: 40px;
      margin-bottom: 540px;
    }
    .hero-text-wrapper {
      @include container;
      padding-top: 40px !important;
      p {
        color: white;
        &.title {
          @include medium(36);

          @include en-tablet {
            @include medium(30);
          }
          @include en-mobile {
            @include medium(24);
          }
        }
        &.text {
          @include regular(24);
          @include en-tablet {
            @include regular(20);
          }
          @include en-mobile {
            @include regular(16);
          }
        }
      }
      @include en-tablet-big {
        width: 940px;
      }
      @include en-tablet-small {
        width: 620px;
      }
      @include en-mobile {
        width: calc(100% - 20px);
        padding: 0px 20px;
      }
    }
  }
  .contact-form-wrapper {
    padding-top: 52px;
    width: 840px;
    @include absolute(top 260px);
    height: 500px;
    overflow-y: auto;
    background-color: $white;
    @include elevation-1;
    border-radius: 20px;
    padding: 32px 36px;
    left: 50%;
    transform: translateX(-50%);
    @include en-tablet-big {
      top: 190px;
      width: 940px;
      height: auto;
    }
    @include en-tablet-small {
      top: 190px;
      width: 620px;
      height: auto;
    }
    @include en-mobile {
      top: 168px;
      width: calc(100% - 40px);
      height: auto;
    }
    .contact-form-success {
      @include absolute(left 0 top 0);
      width: 100%;
      overflow: hidden;
      height: 100%;
      background-color: $white;
      @include center-center;
      z-index: 1000;
      border-radius: 18px;

      .contact-form-inner {
        text-align: center;
        img {
          width: 120px;
          height: 120px;
          margin-bottom: 30px;
        }
        .content-heading {
          @include medium(32);
          color: $black;
        }
        .content-text {
          @include medium(24);
          color: $text-grey;
        }
        button {
          margin: 0px auto;
          margin-top: 30px;
          @include button-4;
        }
      }
    }
    .form-text {
      @include flex;
      .form-left {
        flex: 1;
        margin-right: 64px;
      }
      .form-right {
        flex: 1;
      }
      @include en-tablet {
        display: block;
        .form-left {
          margin-right: 0px;
          flex: none;
        }
        .form-right {
          flex: none;
        }
      }
      @include en-mobile {
        display: block;
        .form-left {
          margin-right: 0px;
          flex: none;
        }
        .form-right {
          flex: none;
        }
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
      @include en-tablet {
        margin-bottom: 8px;
      }
      @include en-mobile {
        margin-bottom: 8px;
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
        color: rgba($text-grey, 1);
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
    margin-top: 250px;
  }
}
</style>
