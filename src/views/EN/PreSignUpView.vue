<template>
  <div>
    <section class="section-signup">
      <div class="signup-wrapper">
        <div class="signup-header-wrapper" :class="{ done: sendEmailStatus }">
          <div
            class="header-logo hover-pointer"
            @click="() => router.push({ name: 'en-landing' })"
          >
            <img class="logo" src="/img/logo_white.svg" alt="logo" />
          </div>
          <div class="signup-text-wrapper">
            <p class="title">
              <span>Zenerate App</span><span>Beta Tester&nbsp;</span><span>Program&nbsp;</span>
            </p>
            <div class="text-wrapper">
              <IconBase class="icon-check" icon-name="checkmark" icon-color="#FFFFFF" :width="20" :height="20"/>
              <p class="text">Receive early access to the newest version of the Zenerate App</p>
            </div>
            <div class="text-wrapper">
              <IconBase class="icon-check" icon-name="checkmark" icon-color="#FFFFFF" :width="20" :height="20"/>
              <p class="text">Play a direct role in shaping and refining our innovative tool</p>
            </div>
            <div class="text-wrapper">
              <IconBase class="icon-check" icon-name="checkmark" icon-color="#FFFFFF" :width="20" :height="20"/>
              <p class="text">Major discounts upon official launch</p>
            </div>
          </div>
          <!-- <p class="guide hidden-tablet hidden-mobile">
            <strong>Sign up</strong> and we'll send you an email <br />
            when Zenerate launches in new cities!
          </p> -->
          <div class="background-building">
            <div class="left-building"></div>

            <div class="right-background">
              <img
                class="right-squares"
                src="/en/img/signup_background.svg"
                alt="signup"
              />
              <div class="right-building">
                <div class="window"></div>
                <div class="window"></div>
                <div class="window hidden-en-mobile"></div>
                <div class="window hidden-en-mobile"></div>
                <div class="window hidden-en-mobile"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div
          class="go-to-bottom hidden-desktop"
          :class="{ done: sendEmailStatus }"
        >
          <p>
            Sign up below to get<br />
            notified of new cities
          </p>
        </div> -->
        <transition name="fade">
          <div class="signup-form-wrapper" v-if="!sendEmailStatus">
            <h2 class="form-title">Become a Zenerate App<br /><span class="form-title-semibold">Beta Tester</span></h2>
            <div class="form-text">
              <div class="form-row">
                <div class="label-text">
                  <input
                    type="text"
                    placeholder="First name"
                    autocomplete="new-firstname"
                    v-model="contactForm.firstName.value"
                    @blur="(v) => validation('firstName')"
                  />
                  <p
                    class="label-error"
                    :class="{ active: contactForm.firstName.valid === false }"
                  >
                    Please provide a name
                  </p>
                </div>
                <div class="label-text">
                  <input
                    type="text"
                    placeholder="Last name"
                    autocomplete="new-lastname"
                    v-model="contactForm.lastName.value"
                    @blur="(v) => validation('lastName')"
                  />
                  <p
                    class="label-error"
                    :class="{ active: contactForm.lastName.valid === false }"
                  >
                    Please provide a name
                  </p>
                </div>
              </div>
              <div class="form-row">
                <div
                  class="label-text email-input"
                  :class="contactForm.email.value == '' ? 'empty' : ''"
                >
                  <input
                    type="text"
                    placeholder="E-mail"
                    autocomplete="new-email"
                    inputmode="email"
                    v-model="contactForm.email.value"
                    @blur="(v) => validation('email')"
                  />
                  <p
                    class="label-error"
                    :class="{ active: contactForm.email.valid === false }"
                  >
                    Please enter a valid email address
                  </p>
                </div>
              </div>
              <div class="form-row">
                <div class="label-text">
                  <input
                    type="text"
                    placeholder="Company Name"
                    autocomplete="new-company"
                    v-model="contactForm.company.value"
                    @blur="(v) => validation('company')"
                  />
                  <p
                    class="label-error"
                    :class="{ active: contactForm.company.valid === false }"
                  >
                    Please provide your company name
                  </p>
                </div>
              </div>
              <!-- <div class="form-row">
                <div class="label-text">
                  <input
                    type="text"
                    placeholder="City"
                    autocomplete="new-city"
                    v-model="contactForm.city.value"
                    @blur="(v) => validation('city')"
                  />
                  <p
                    class="label-error"
                    :class="{ active: contactForm.city.valid === false }"
                  >
                    Please enter your city
                  </p>
                </div>
                <div class="label-text">
                  <input
                    type="text"
                    placeholder="State / Region"
                    autocomplete="new-state"
                    v-model="contactForm.state.value"
                    @blur="(v) => validation('state')"
                  />
                  <p
                    class="label-error"
                    :class="{ active: contactForm.state.valid === false }"
                  >
                    Please enter your state/region
                  </p>
                </div>
              </div>
              <div class="form-row">
                <div class="label-text">
                  <input
                    type="text"
                    placeholder="Country / Region"
                    autocomplete="new-country"
                    v-model="contactForm.country.value"
                    @blur="(v) => validation('country')"
                  />
                  <p
                    class="label-error"
                    :class="{ active: contactForm.country.valid === false }"
                  >
                    Please enter your country/region
                  </p>
                </div>
                <div class="label-text">
                  <input
                    type="text"
                    inputmode="tel"
                    placeholder="Phone Number"
                    autocomplete="new-phone"
                    v-model="contactForm.phone.value"
                    @blur="(v) => validation('phone')"
                  />
                  <p
                    class="label-error"
                    :class="{ active: contactForm.phone.valid === false }"
                  >
                    Please enter a valid phone number
                  </p>
                </div>
              </div>
              <div class="form-row">
                <SelectInput
                  placeholder="Role"
                  :items="roleItems"
                  title="Role"
                  :skipTranslate="true"
                  :selected="contactForm.role.value"
                  :valid="contactForm.role.valid"
                  @onSelect="
                    (v) => ((contactForm.role.value = v), validation('role'))
                  "
                />
                <SelectInput
                  placeholder="Buildings"
                  :items="buildingsItems"
                  title="Buildings"
                  :skipTranslate="true"
                  :selected="contactForm.buildings.value"
                  :valid="contactForm.buildings.valid"
                  @onSelect="
                    (v) => (
                      (contactForm.buildings.value = v), validation('buildings')
                    )
                  "
                />
              </div>
              <div class="form-row promotion">
                <div class="label-text">
                  <input
                    type="text"
                    placeholder="Promotion Code"
                    autocomplete="new-code"
                    v-model="contactForm.promotion.value"
                    @blur="(v) => validation('promotion')"
                  />
                  <p
                    class="label-error"
                    :class="{ active: contactForm.promotion.valid === false }"
                  >
                    Please enter a valid code
                  </p>
                </div>
              </div> -->
            </div>

            <div class="form-send-wrapper">
              <div class="dummy" ref="dummy"></div>
              <button
                class="form-send submit hover-pointer"
                :disabled="sendEmailStatus || loading"
                :class="{ disabled: sendEmailStatus || loading }"
                @click="sendForm"
              >
              <DotSpinnerWhite v-if="loading" :loading="true" class="submit-spinner"/>
              <span v-else>{{ sendEmailStatus ? 'DONE' : 'SUBMIT' }}</span>
              </button>
            </div>
          </div>
        </transition>
        <transition name="fade">
          <div
            class="signup-form-wrapper thank"
            v-if="sendEmailStatus"
            data-aos="fade-up"
            data-aos-offset="-1500"
            data-aos-delay="500"
            data-aos-duration="500"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div
              class="header-logo hover-pointer hidden-desktop"
              @click="router.push({ name: 'en-landing' })"
            >
              <img class="logo" src="/img/logo_color.svg" alt="logo" />
            </div>
            <div class="check-wrapper">
              <div class="circle">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m121.428.845-.836.845.024.024-22.525 22.892-54.788 55.688a6.006 6.006 0 0 1-7.018 1.136l3.313 2.695 5.004 4.07a6.013 6.013 0 0 0 3.797 1.35 5.99 5.99 0 0 0 4.289-1.795L130 9.17 121.428.845Z"
                    fill="#4848FF"
                  />
                  <path
                    d="m98.07 24.582-50.122 50.94-9.225-7.503-.028-.024-30.41-24.742L.69 52.472l29.596 24.074.028.024 5.971 4.86c.86.436 1.795.659 2.73.659a5.99 5.99 0 0 0 4.289-1.795l54.79-55.684-.023-.028Z"
                    fill="#4848FF"
                    fill-opacity=".4"
                  />
                </svg>
              </div>
            </div>
            <p class="thank-title">
              <span>Thanks</span> <span>for Signing Up!</span>
            </p>
            <div class="thank-text">
              <p class="purpose">We'll be in touch soon!</p>
              <p>
                <span>Until then check out Z-maps!</span>
              </p>
            </div>
            <div class="form-send-wrapper">
              <div class="dummy" ref="dummy"></div>
              <button
                class="form-send hover-pointer"
                @click="goZmaps"
              >
                Try Z-maps
              </button>
            </div>
            <div class="thank-text">
              <p>
                <span>And give us a follow on Linkedin!</span>
              </p>
            </div>
            <div class="form-send-wrapper">
              <div class="dummy" ref="dummy"></div>
              <button
                class="form-send follow hover-pointer"
                @click="goLinkedIn"
              >
                FOLLOW US
              </button>
            </div>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ApiService from '/Services/api'
import Validation from '/Utils/Validation'
import Footer from '/Components/EN/Footer.vue'
import SelectInput from '/Components/EN/SignUpSelectInput.vue'
import IconBase from '/Components/EN/ui/IconBase.vue'
import DotSpinnerWhite from '/Components/EN/ui/DotSpinnerWhite.vue'

const loading = ref(false)


// const fullpage = computed(() => Store.state.root.FullPage)
const sendEmailStatus = ref(false)

// onMounted(() => {
//   if (fullpage.value) {
//     fullpage.value.destroy()
//   }
// })

const goZmaps = () => {
  window.open('https://maps.zenerate.ai', '_blank')
}

const goLinkedIn = () => {
  window.open('http://linkedin.com/company/zenerate', '_blank')
}

const goBetaApp = () => {
  window.open('http://app.zenerate.ai', '_blank')
}

type Item = {
  id: number
  value: string
  label: string
  ref?: string
}

const roleItems: Item[] = [
  {
    id: 1,
    value: 'real_estate_developer',
    label: 'Real Estate Developer',
  },
  {
    id: 2,
    value: 'architect',
    label: 'Architect',
  },
  {
    id: 3,
    value: 'general_contractor',
    label: 'General Contractor',
  },
  {
    id: 4,
    value: 'broker',
    label: 'Broker',
  },
  {
    id: 5,
    value: 'financial_institution',
    label: 'Financial Institution',
  },
  {
    id: 6,
    value: 'other',
    label: 'Other',
  },
]

const buildingsItems: Item[] = [
  {
    id: 1,
    value: 'multifamily',
    label: 'Multifamily',
  },
  {
    id: 2,
    value: 'office',
    label: 'Office',
  },
  {
    id: 3,
    value: 'hotel',
    label: 'Hotel',
  },
  {
    id: 4,
    value: 'industrial',
    label: 'Industrial',
  },
  {
    id: 5,
    value: 'mixed_use ',
    label: 'Mixed-use ',
  },
  {
    id: 6,
    value: 'other',
    label: 'Other',
  },
]

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
  // city: {
  //   value: '',
  //   validator: Validation.string,
  //   valid: null,
  // },
  // state: {
  //   value: '',
  //   validator: Validation.string,
  //   valid: null,
  // },
  // country: {
  //   value: '',
  //   validator: Validation.string,
  //   valid: null,
  // },
  // phone: {
  //   value: '',
  //   validator: Validation.phone,
  //   valid: null,
  // },
  // role: {
  //   value: null,
  //   validator: (v) => true,
  //   valid: null,
  // },
  // buildings: {
  //   value: null,
  //   validator: (v) => true,
  //   valid: null,
  // },
  // promotion: {
  //   value: '',
  //   validator: Validation.promotion,
  //   valid: true,
  // },
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
    // city: {
    //   value: '',
    //   validator: Validation.string,
    //   valid: null,
    // },
    // state: {
    //   value: '',
    //   validator: Validation.string,
    //   valid: null,
    // },
    // country: {
    //   value: '',
    //   validator: Validation.string,
    //   valid: null,
    // },
    // phone: {
    //   value: '',
    //   validator: Validation.phone,
    //   valid: null,
    // },
    // role: {
    //   value: null,
    //   validator: (v) => true,
    //   valid: null,
    // },
    // buildings: {
    //   value: null,
    //   validator: (v) => true,
    //   valid: null,
    // },
    // promotion: {
    //   value: ' ',
    //   validator: Validation.promotion,
    //   valid: true,
    // },
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
    }
    else {
      // if (key === 'buildings' || key === 'role') {
      //   form[key] = String(contactForm[key].value.label)
      // }
      // else {
        form[key] = String(contactForm[key].value)
      // }
    }
  }

  if (!isValid) return
  try {
    loading.value = true
    await ApiService.XSLX_TEST(form)
    loading.value = false
  } catch (e) {}
  resetForm()
  sendEmailStatus.value = true
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}
const router = useRouter()
</script>
<style lang="scss" scoped>
.section-signup * {
  font-family: 'Poppins' !important;
}
.section-signup {
  @include relative;
  width: 100vw;
  height: 100%;
  letter-spacing: -0.2pt;
  min-height: 100vh;
  .signup-wrapper {
    @include relative;
    @include flex();
    height: 100%;
    padding-top: 0px;

    @include en-tablet {
      flex-direction: column;
    }
    @include en-mobile {
      flex-direction: column;
    }

    .header-logo {
      @include absolute(top 40px left 43px);
      width: 150px;
      z-index: 9999;
      .logo {
        width: 100%;
      }

      @include tablet {
        width: 150px;
      }

      @include mobile {
        @include absolute(top 22px left 20px);
        width: 130px;
      }
    }
    .signup-header-wrapper {
      @include relative();
      width: 50%;
      height: auto;
      min-height: 100vh;
      background-color: #4848ff;

      @include en-tablet {
        width: 100%;
        height: 78vh;
        min-height: 400px;
        &.done {
          display: none;
        }
      }
      @include en-mobile {
        width: 100%;
        height: calc(88vh - 40px);
        min-height: 340px;
        &.done {
          display: none;
        }
      }

      .guide {
        @include absolute(bottom 40px left 30px);
        @include medium(14);
        width: 290px;
        height: 58px;
        color: $white;
        line-height: 21px;
        padding: 8px 8px 8px 11px;
        background: #4848ff;
        z-index: 99;
        box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.15);
      }

      .background-building {
        @include absolute(top 0px left 0px);
        @include flex();
        justify-content: space-between;
        flex-wrap: nowrap;
        align-items: flex-end;
        width: 100%;
        height: 100%;
        z-index: 9;

        .left-building {
          // @include absolute(bottom 0px left 0px);
          width: 39%;
          height: 44%;
          background: #3a2cdf;
          box-shadow: 0px 8px 16px rgba(142, 141, 208, 0.25);
        }

        .right-background {
          @include vertical-center();
          width: 60%;
          height: 100%;
          justify-content: flex-end;
          align-items: flex-end;

          .right-squares {
            margin: 0px 32px 20px 0px;
            width: 60%;

            max-width: 242px;
            @include mobile {
              width: 50%;
              height: auto;
            }
          }
          .right-building {
            @include vertical-center();
            align-items: flex-end;
            justify-content: flex-start;
            width: 100%;
            height: 64%;
            background: #3a2cdf;
            box-shadow: 0px 8px 16px rgba(142, 141, 208, 0.25);
            padding: 28px 32px 0px 0px;
            .window {
              max-width: 242px;
              min-width: 160px;
              width: 60%;
              height: 30px;
              background: #4848ff;
              margin-bottom: 23px;
              @include mobile {
                height: 20px;
              }
            }
          }
        }
      }

      .signup-text-wrapper {
        @include absolute(top 0px left 0px);
        @include vertical-center();
        height: 100%;
        padding-left: 43px;
        z-index: 99;

        @include en-tablet {
          width: 100%;
          padding-left: 0px;
          align-items: center;
        }
        @include en-mobile {
          width: 100%;
          padding-left: 0px;
          align-items: center;
        }

        .title {
          @include semi-bold(31);
          max-width: 325px;
          color: white;
          line-height: 43px;
          text-align: left;
          margin-bottom: 26px;

          @include en-tablet {
            text-align: center;
            margin-bottom: 40px;
          }
          @include en-mobile {
            max-width: 300px;
            text-align: center;
            margin-bottom: 50px;
          }
        }

        .text-wrapper {
          display: flex;
          flex-direction: row;
          align-items: start;
          &:not(:last-child){
            margin-bottom: 12px;
          }

          .icon-check{
            margin: 4px;
          }
        }
        .text {
          @include medium(16);
          color: white;
          line-height: 26px;
          width: 295px;
          text-align: left;
          margin-left: 8px;
        }
      }
    }

    .go-to-bottom {
      @include absolute(top 72vh left 50%);
      @include center-center();
      @include semi-bold(16);
      width: 60vw;
      max-width: 235px;
      height: 60px;
      background-color: #bac5ff;
      border-radius: 5px;
      color: #4848ff;
      text-align: center;
      line-height: 22px;
      transform: translate(-50%, -40px);
      letter-spacing: 0.02em;
      z-index: 9;
      &.done {
        display: none;
      }

      @include en-mobile {
        @include semi-bold(14);
        width: 74vw;
        max-width: 272px;
        height: 9vh;
        top: calc(79vh - 31px);
        line-height: 19px;
      }
    }
    .signup-form-wrapper {
      @include elevation-1;
      @include vertical-center();
      width: 50%;
      background-color: $white;
      padding: 50px 0px;
      min-height: 100vh;

      @include en-tablet {
        order: -1;
        width: 100%;
        padding: 40px 40px 0px;
        min-height: 100vh;
      }
      @include en-mobile {
        order: -1;
        width: 100%;
        padding: 44px 32px 0px;
        height: 100vh;
        min-height: 820px;

        &.thank {
          padding: 74px 32px 0px;
          min-height: 740px;
        }
      }

      .check-wrapper {
        @include relative;
        @include center-center;
        margin-bottom: 52px;

        @include en-mobile {
          @include medium(13);
          margin-bottom: 40px;
        }
        .circle {
          @include relative;
          width: 138px;
          height: 138px;
          background-color: #ebedfe;
          border-radius: 50%;
          svg {
            @include absolute(top 50% left 50%);
            transform: translate(-40%, -60%);
            width: 130px;
            height: 90px;
          }
        }

        @include en-mobile {
          .circle {
            @include relative;
            width: 110px;
            height: 110px;
            svg {
              @include absolute(top 3% left 3%);
              transform: scale(0.8);
            }
          }
        }
      }

      .form-title {
        @include regular(22);
        margin-bottom: 20px;
        text-align: center;
        line-height: 31px;

        .form-title-semibold{
          @include semi-bold(22);
        }
      }

      .thank-title {
        @include semi-bold(31);
        margin: 0px auto 25px;
        text-align: center;

        @include en-tablet {
          @include semi-bold(33);
          margin-bottom: 25px;
        }

        @include en-mobile {
          @include semi-bold(28);
          max-width: 210px;
          margin-bottom: 24px;
        }
      }
      .thank-text {
        margin: 0px auto;
        text-align: center;
        .purpose {
          @include semi-bold(16);
          color: #161616;
          margin-bottom: 60px;
          line-height: 23px;

          @include en-mobile {
            max-width: 244px;
            margin-bottom: 50px;
          }
        }

        p {
          @include medium(15);
          margin: 0px auto 0px;

          .available {
            @include medium(11);
            font-style: italic;
            display: block;
            color: #aaaaaa;
          }

          @include en-tablet {
            @include medium(15);
          }

          @include en-mobile {
            @include medium(13);
            .available {
              @include medium(11);
              font-style: italic;
            }
          }
        }
      }

      .form-text {
        @include vertical-center();
        width: 428px;
        margin: 0px auto;

        .form-promotion-guide {
          @include medium(10);
          color: #aaaaaa;
          line-height: 15px;
        }

        @include en-tablet {
          width: 494px;
        }

        @include en-mobile {
          width: 100%;

          .form-row:not(:first-child) {
            flex-wrap: wrap;
            .label-text:nth-child(2) {
              margin-left: 0px;
            }
            .input-select-wrapper:nth-child(2) {
              margin-left: 0px;
            }
          }
        }

        .form-row {
          @include flex();
          width: 100%;
          flex-wrap: nowrap;

          .label-text:nth-child(2) {
            margin-left: 20px;
          }
          .input-select-wrapper:nth-child(2) {
            margin-left: 20px;
          }

          &.promotion {
            width: 50%;
            @include en-mobile {
              width: 100%;
            }
          }
        }
      }
      .label-text {
        @include relative;
        width: 100%;
        input {
          @include medium(13);
          @include center-vertical();
          width: 100%;
          height: 38px;
          border: 1.5px solid transparent;
          border-bottom: 1.5px solid #e5e5e5;
          color: #161616;
          &::placeholder {
            @include medium(13);
            color: rgba(112, 112, 112, 0.8);
          }
          &:focus {
            border-bottom: 1px solid #c3c8fa;
          }

          @include en-mobile {
            height: 30px;
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
          color: rgba($text-grey, 1);
          margin-bottom: 8px;
        }
        .label-error {
          width: 100%;
          @include regular(10);
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
          @include semi-bold(14);
          width: 180px;
          height: 45px;
          background: #4848ff;
          color: #fafafc;
          border-radius: 5px;
          letter-spacing: 0.08em;
          margin: 16px auto 34px;

          &.follow {
            background: #364a69;
          }

          &:hover {
            color: rgba(#fafafc, 0.6);
          }

          &.submit {
            width: 235px;
            height: 45px;
            margin: 40px auto;

            &:disabled{
              cursor: not-allowed;
            }

            @include en-tablet {
              height: 60px;
              margin: 50px auto;
            }
            @include en-mobile {
              height: 45px;
              margin: 50px auto;
            }

            .submit-spinner{
              width: fit-content;
              margin: 0 auto;
            }
          }
        }
      }
    }
  }
}
</style>
