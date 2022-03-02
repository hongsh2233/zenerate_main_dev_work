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
        <div class="signup-header-wrapper">
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
        <div class="go-to-bottom hidden-desktop">
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
        <div class="signup-form-wrapper" :class="{ done: sendEmailStatus }">
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
              <div class="label-text">
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
                <input
                  type="text"
                  placeholder="State / Region"
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
                  placeholder="Country / Region"
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
                <input
                  type="text"
                  placeholder="Phone Number"
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
              <SelectInput
                placeholder="Role"
                :items="items"
                title="Role"
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
                placeholder="Buildings"
                :items="items"
                title="Buildings"
                :skipTranslate="true"
                :selected="contactForm.role.value"
                :valid="contactForm.role.valid"
                @onSelect="
                  (v) => ((contactForm.role.value = v), validation('role'))
                "
              />
            </div>
            <div class="form-row promotion">
              <div class="label-text">
                <input
                  type="text"
                  placeholder="Promotion Code"
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

            <div class="form-promotion-guide">
              * Promotion code holders will receive exclusive premium access<br />
              for 14 days upon launch. That’s a $1,000 value for you to use free
              <br />with no credit card required.
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
      <!-- <div class="section section-footer">
        <Footer />
      </div> -->
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
import Arrow from '/Components/EN/Arrow.vue'

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
</script>
<style lang="scss" scoped>
.section-signup {
  @include relative;
  width: 100vw;
  height: 100%;

  font-family: 'Poppins';
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
      min-height: 600px;

      @include en-tablet {
        width: 100%;
        height: 100vh;
        min-height: 400px;
      }
      @include en-mobile {
        width: 100%;
        height: 100vh;
        min-height: 340px;
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
      @include absolute(top 100vh left 50%);
      @include center-center();
      width: 80px;
      height: 80px;
      background-color: #3a2cdf;
      border-radius: 50%;
      transform: translate(-50%, -40px);
      z-index: 9;

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
      width: 50%;
      background-color: $white;
      padding: 95px 40px;

      @include en-tablet {
        width: 100%;
        padding: 120px 40px;
      }
      @include en-mobile {
        width: 100%;
        padding: 90px 32px;
      }

      .form-title {
        @include semi-bold(22);
        margin: 10px 0px 50px 0px;
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
        @include vertical-center();
        width: 380px;
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
        width: 100%;
        input {
          @include medium(13);
          @include center-vertical();
          width: 100%;
          height: 38px;
          padding: 0px 12px;
          border: none;
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
          margin: 0px auto;
          width: 180px;
          height: 45px;
          background: #4848ff;
          color: #fafafc;
          border-radius: 5px;

          @include en-tablet {
            @include semi-bold(16);
            width: 235px;
            height: 60px;
            margin-top: 80px;
          }

          @include en-mobile {
            width: 100%;
            margin-top: 60px;
          }
        }
      }
      input::placeholder {
        color: $bt-secondary-stroke-disabled;
      }
    }
  }
}
</style>
