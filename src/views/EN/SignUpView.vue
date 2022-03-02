<template>
  <div id="fullpage-signup">
    <section class="section-signup">
      <div class="signup-wrapper">
        <div
          class="header-logo hover-pointer"
          @click="router.push({ name: 'en-landing' })"
        >
          <img class="logo" src="/img/logo_white.svg" alt="logo" />
        </div>
        <div class="signup-header-wrapper" :class="{ done: sendEmailStatus }">
          <div class="signup-text-wrapper">
            <p class="title">
              <span>The biggest&nbsp;</span><span>game-changer&nbsp;</span>
              <span>in the&nbsp;</span>real estate industry<br />
              is almost here.
            </p>
            <p class="text">
              <strong>Zenerate</strong> upwards of 10,000 designs
              <span>&nbsp;to maximize profit&nbsp;</span
              ><span> up to 26%&nbsp;</span
              ><span>while saving weeks worth of time</span>
            </p>
          </div>
          <p class="guide hidden-tablet hidden-mobile">
            <strong>Sign up</strong> and we’ll send you an email <br />
            when Zenerate launches!
          </p>
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
        <div
          class="go-to-bottom hidden-desktop"
          :class="{ done: sendEmailStatus }"
        >
          <svg
            width="26"
            height="54"
            viewBox="0 0 26 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.1855 1.58081V53.1937"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24.9909 41.396L13.1856 53.1939L1.3877 41.396"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <transition name="fade">
          <div class="signup-form-wrapper" v-if="!sendEmailStatus">
            <h2 class="form-title">Let me know<br />when Zenerate launches!</h2>
            <div class="form-text">
              <div class="form-row">
                <div class="label-text">
                  <input
                    type="text"
                    placeholder="First name"
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
                  <input
                    type="text"
                    placeholder="Last name"
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
              </div>
              <div class="form-row">
                <div class="label-text email-input">
                  <input
                    type="text"
                    placeholder="Email"
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
              <div class="form-row">
                <div class="label-text">
                  <input
                    type="text"
                    placeholder="Company"
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
              <div class="form-row">
                <div class="label-text">
                  <input
                    type="text"
                    placeholder="City"
                    v-model="contactForm.city.value"
                    @blur="(v) => validation('city')"
                  />
                  <p
                    class="label-error"
                    :class="{ active: contactForm.city.valid === false }"
                  >
                    Please Enter!
                  </p>
                </div>
                <div class="label-text">
                  <input
                    type="text"
                    placeholder="State / Region"
                    v-model="contactForm.state.value"
                    @blur="(v) => validation('state')"
                  />
                  <p
                    class="label-error"
                    :class="{ active: contactForm.state.valid === false }"
                  >
                    Please Enter!
                  </p>
                </div>
              </div>
              <div class="form-row">
                <div class="label-text">
                  <input
                    type="text"
                    placeholder="Country / Region"
                    v-model="contactForm.country.value"
                    @blur="(v) => validation('country')"
                  />
                  <p
                    class="label-error"
                    :class="{ active: contactForm.country.valid === false }"
                  >
                    Please Enter!
                  </p>
                </div>
                <div class="label-text">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    v-model="contactForm.phone.value"
                    @blur="(v) => validation('phone')"
                  />
                  <p
                    class="label-error"
                    :class="{ active: contactForm.phone.valid === false }"
                  >
                    Please Enter!
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
                    v-model="contactForm.promotion.value"
                    @blur="(v) => validation('promotion')"
                  />
                  <p
                    class="label-error"
                    :class="{ active: contactForm.promotion.valid === false }"
                  >
                    Please enter Valid Code!
                  </p>
                </div>
              </div>

              <p class="form-promotion-guide">
                <span
                  >* Promotion code holders will receive exclusive&nbsp;</span
                ><span>premium access&nbsp;</span>
                <span>for 14 days upon launch.&nbsp;</span>
                <span>That’s a $1,000 value for you to use free &nbsp;</span
                ><span>with no credit card required.</span>
              </p>
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
        </transition>
        <transition name="fade">
          <div
            class="signup-form-wrapper"
            v-if="sendEmailStatus"
            data-aos="fade-up"
            data-aos-offset="-1500"
            data-aos-delay="500"
            data-aos-duration="500"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div class="check-wrapper">
              <div class="circle">
                <div class="circle-block"></div>
              </div>
              <i class="material-icons"> done </i>
            </div>
            <p class="thank-title">
              <span>Thanks</span> <span>for Signing Up!</span>
            </p>
            <div class="thank-text">
              <span class="purpose"
                >We’ll send you an email once we launch.</span
              >
              <p>
                <span> Until then, please follow us&nbsp;</span>
                <span>on our LinkedIn Page</span> <br />
                for more updates, news and insights.
              </p>
            </div>
            <div class="form-send-wrapper">
              <div class="dummy" ref="dummy"></div>
              <button class="form-send hover-pointer" @click="goLinkedIn">
                FOLLOW US
              </button>
            </div>

            <p class="beta-guide">
              If you want to check out our beta version
              <a href="http://app.zenerate.ai">click here.</a>
            </p>
            <p class="beta-guide-b">
              Guides and demos will be provided upon official launch.
            </p>
          </div>
        </transition>
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
import SelectInput from '/Components/EN/SignUpSelectInput.vue'

const fullpage = computed(() => Store.state.root.FullPage)
const sendEmailStatus = ref(false)

onMounted(() => {
  if (fullpage.value) {
    fullpage.value.destroy()
  }
})

const goLinkedIn = () => {
  window.open('http://linkedin.com/company/zenerate', '_blank')
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
    value: 'other',
    label: 'Other',
  },
]

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
    validator: Validation.phone,
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
  promotion: {
    value: '',
    validator: Validation.promotion,
    valid: true,
  },
})

const validation = (item: string) => {
  contactForm[item].valid = contactForm[item].validator(contactForm[item].value)
  console.log('tt', contactForm[item].validator(contactForm[item].value))
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
      validator: Validation.phone,
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
    promotion: {
      value: ' ',
      validator: Validation.promotion,
      valid: true,
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
      if (key === 'buildings' || key === 'role') {
        form[key] = String(contactForm[key].value.label)
      } else {
        form[key] = String(contactForm[key].value)
      }
    }
  }

  console.log('form', form)
  console.log('isvalied', isValid)

  if (!isValid) return
  await ApiService.XSLX_TEST(form)
  resetForm()
  sendEmailStatus.value = true
  // window.open('https://app.zenerate.ai', '_blank')
  // window.location.href = 'en-landing'
}
const router = useRouter()
</script>
<style lang="scss" scoped>
.section-signup {
  @include relative;
  width: 100vw;
  height: 100%;
  font-family: 'Poppins';
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
        height: 93vh;
        min-height: 400px;
        &.done {
          display: none;
        }
      }
      @include en-mobile {
        width: 100%;
        height: 93vh;
        min-height: 340px;
        &.done {
          display: none;
        }
      }

      .guide {
        @include absolute(bottom 40px left 30px);
        @include medium(14);
        width: 276px;
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
          max-width: 440px;
          color: white;
          line-height: 43px;

          text-align: left;
          margin: 0px 0px 26px;

          @include en-tablet {
            @include semi-bold(35);
            max-width: 550px;
            text-align: center;
            line-height: 50px;
          }
          @include en-mobile {
            @include semi-bold(23);
            max-width: 294px;
            line-height: 33px;
            text-align: center;
            span:nth-child(1) {
              display: block;
            }
          }
        }
        .text {
          @include medium(16);
          color: white;
          line-height: 26px;
          max-width: 295px;
          text-align: left;

          @include en-tablet {
            @include medium(15);
            max-width: 450px;
            line-height: 23px;
            text-align: center;
          }
          @include en-mobile {
            @include medium(13);
            max-width: 300px;
            line-height: 20px;
            text-align: center;
          }
        }

        @include en-mobile {
          width: 100%;
        }
      }
    }

    .go-to-bottom {
      @include absolute(top 93vh left 50%);
      @include center-center();
      width: 80px;
      height: 80px;
      background-color: #3a2cdf;
      border-radius: 50%;
      transform: translate(-50%, -40px);
      z-index: 9;
      &.done {
        display: none;
      }

      @include en-mobile {
        width: 62px;
        height: 62px;
        transform: translate(-50%, -31px);

        svg {
          width: 17px;
        }
      }
    }
    .signup-form-wrapper {
      @include elevation-1;
      @include vertical-center();
      width: 50%;
      background-color: $white;
      padding: 0px;
      min-height: 100vh;

      @include en-tablet {
        width: 100%;
        padding: 80px 40px 0px;
        min-height: calc(100vh + 44px);
      }
      @include en-mobile {
        width: 100%;
        padding: 44px 32px 0px;
        min-height: calc(100vh + 44px);
      }

      .check-wrapper {
        @include relative;
        @include center-center;
        margin-bottom: 50px;

        @include en-mobile {
          @include medium(13);
          margin-bottom: 40px;
        }
        .circle {
          @include relative;
          width: 130px;
          height: 130px;
          background-color: #ebedfe;
          border-radius: 50%;
          .circle-block {
            @include absolute(top 10% left 3%);
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: #ebedfe;
            opacity: 0.4;
            z-index: 9;
          }
        }

        i {
          @include absolute(top 50% left 50%);
          @include regular(150);
          color: #4848ff;
          transform: translate(-40%, -60%);
        }

        @include en-mobile {
          .circle {
            width: 110px;
            height: 110px;

            .circle-block {
              @include absolute(top 20px left 10px);
              width: 50px;
              height: 50px;
            }
          }

          i {
            @include regular(120);
          }
        }
      }

      .form-title {
        @include semi-bold(22);
        margin: 50px 0px;
        text-align: center;
        line-height: 31px;

        @include en-tablet {
          @include semi-bold(26);
          line-height: 35px;
        }

        @include en-mobile {
          @include semi-bold(20);
          line-height: 28px;
        }
      }

      .thank-title {
        @include semi-bold(31);
        margin: 0px auto 50px;
        text-align: center;

        @include en-tablet {
          @include semi-bold(33);
          margin-bottom: 45px;
          max-width: 250px;
        }

        @include en-mobile {
          @include semi-bold(28);
          max-width: 210px;
          margin-bottom: 40px;
        }
      }
      .thank-text {
        margin: 0px auto;
        text-align: center;
        .purpose {
          @include semi-bold(16);
          color: #161616;
          margin-bottom: 23px;
          @include en-mobile {
            max-width: 200px;
          }
        }

        p {
          @include medium(15);
          margin: 0px auto 0px;

          @include en-tablet {
            @include medium(15);
          }

          @include en-mobile {
            @include medium(13);
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
            :nth-child(2) {
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
          padding: 0px 12px;
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

        &.email-input {
          &::after {
            @include absolute(bottom 0px left 14px);
            @include medium(10);
            content: '* Work email only';
            color: rgba(92, 109, 255, 0.8);
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
          margin: 50px auto;
          letter-spacing: 0.08em;

          @include en-tablet {
            @include semi-bold(16);
            width: 235px;
            height: 60px;
            margin: 80px auto;
          }

          @include en-mobile {
            width: 100%;
            margin: 44px auto;
            max-width: 240px;
          }
        }
      }

      .beta-guide {
        @include semi-bold(12);
        color: #818181;
        width: 100%;
        margin: 0px auto;
        text-align: center;
        margin-bottom: 0px;

        a {
          color: #4848ff;
          cursor: pointer;

          &:visited {
            color: #4848ff;
          }
        }

        @include en-mobile {
          max-width: 180px;
          line-height: 18px;
          margin-bottom: 18px;
        }
      }

      .beta-guide-b {
        @include regular(12);
        width: 100%;
        margin: 0px auto;
        text-align: center;
        color: #c4c4c4;
        font-style: italic;
        @include en-mobile {
          max-width: 220px;
          line-height: 18px;
        }
      }
    }
  }
}
</style>
