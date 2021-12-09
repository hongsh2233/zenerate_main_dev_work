<template>
  <section class="section-main-contact">
    <div class="contact-container">
      <div class="contact-title">
        <p>{{ $t('main.contact.title[0]') }}</p>
        <p>{{ $t('main.contact.title[1]') }}</p>
      </div>
      <div class="contact-form">
        <div class="label-text">
          <p>{{ $t('main.contact.form.company') }}</p>
          <input type="text" v-model="contactForm.company" />
        </div>
        <div class="label-text">
          <p>{{ $t('main.contact.form.name') }}</p>
          <input type="text" v-model="contactForm.name" />
        </div>
        <div class="label-text">
          <p>{{ $t('main.contact.form.email') }}</p>
          <input type="text" v-model="contactForm.email" />
        </div>

        <SelectInput
          :placeholder="$t('main.contact.form.purpose')"
          :items="items"
          :selected="contactForm.purpose"
          @onSelect="(v) => (contactForm.purpose = v)"
        />
        <div class="label-textarea">
          <p>{{ $t('main.contact.form.message') }}</p>
          <textarea v-model="contactForm.message" rows="7" />
        </div>
        <div class="contact-send-wrapper">
          <div class="contact-send hover-pointer" @click="sendEmail">
            <span>{{
              $t(
                sendEmailStatus
                  ? 'main.contact.form.sent'
                  : 'main.contact.form.send'
              )
            }}</span>
            <svg
              width="146"
              height="28"
              viewBox="0 0 146 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 27H145.5L118.923 1"
                stroke="#4747FF"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import ApiService from '/Services/api'
// @ts-ignore
import SelectInput from '/Components/SelectInput.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

type Item = {
  id: number
  value: string
  label: string
  ref?: string
}

const items: Item[] = [
  {
    id: 0,
    value: 'business',
    label: 'main.contact.form.dropdown.business',
  },
  {
    id: 1,
    value: 'marketing',
    label: 'main.contact.form.dropdown.marketing',
  },
  {
    id: 2,
    value: 'research',
    label: 'main.contact.form.dropdown.research',
  },
  {
    id: 3,
    value: 'career',
    label: 'main.contact.form.dropdown.career',
  },
  {
    id: 4,
    value: 'inquery',
    label: 'main.contact.form.dropdown.inquery',
  },
]
const sendEmailStatus = ref(false)

const contactForm = reactive({
  company: '',
  name: '',
  email: '',
  purpose: null,
  message: '',
})

const sendEmail = async () => {
  if (sendEmailStatus.value == true) return
  const payload = {
    ...contactForm,
    purpose: t(contactForm.purpose.label),
  }
  await ApiService.SEND_EMAIL(payload)
  sendEmailStatus.value = true
}

import { useMeta } from 'vue-meta'
const { meta } = useMeta({
  title: '문의 | 제너레잇',
  description:
    '사업 제휴, 투자, 홍보 및 채용 등에 관해 궁금한 점들을 문의해주세요.',
  htmlAttrs: { lang: 'ko', amp: false },
  link: [{ rel: 'canonical', href: 'https://zenerate.ai/kr/main/contact' }],
  og: {
    url: 'https://zenerate.ai/kr',
    type: 'website',
    title: '문의 | 제너레잇',
    description: `사업 제휴, 투자, 홍보 및 채용 등에 관해 궁금한 점들을 문의해주세요.`,
    tags: '제너레잇',
    keywords: '제너레잇',
    image: 'https://zenerate.ai/img/logo_og.png',
  },
  twitter: {
    title: '문의 | 제너레잇',
  },
})
</script>
<style lang="scss" scoped>
.section-main-contact {
  width: 100%;
  padding: 80px 0px;
  .contact-container {
    @include flex($dir: column);
    @include desktop {
      margin: 0px auto;
      width: 508px;
      .contact-title {
        flex: 1;
        p:first-child {
          text-align: center;
          @include bold(40);
          line-height: 60px;
          margin-bottom: 20px;
        }
        p:last-child {
          text-align: center;
          @include medium(20);
          line-height: 40px;
          color: rgba($black-1, 0.4);
          margin-bottom: 40px;
        }
      }
      .contact-form {
        flex: 1;
      }
    }
    @include tablet {
      .contact-title {
        width: 100%;
        margin-bottom: 28px;
        p:first-child {
          text-align: center;
          @include bold(32);
          line-height: 60px;
          margin-bottom: 20px;
        }
        p:last-child {
          text-align: center;
          @include medium(18);
          line-height: 40px;
          color: rgba($black-1, 0.4);
          margin-bottom: 40px;
        }
      }
      .contact-form {
        margin: 0 auto;
        width: 100%;
        max-width: 700px;
      }
    }
    @include mobile {
      .contact-title {
        width: 100%;
        margin-bottom: 28px;
        p:first-child {
          text-align: center;
          @include bold(32);
          margin-bottom: 20px;
        }
        p:last-child {
          text-align: center;
          @include medium(16);
          line-height: 40px;
          color: rgba($black-1, 0.4);
          margin-bottom: 20px;
        }
      }
      .contact-form {
        margin: 0 auto;
        width: 100%;
        max-width: 380px;
      }
    }
  }
}
.label-text {
  width: 100%;
  text-align: left;
  height: 88px;
  margin-bottom: 60px;
  border-radius: 0px;
  p {
    @include medium(16);
    color: rgba($black-1, 0.4);
    margin-bottom: 12px;
    @include mobile {
      @include medium(14);
    }
  }
  input {
    border-radius: 8px;
    width: 100%;
    border: 1px solid rgba(196, 196, 196, 0.6);
    height: 48px;
    font-size: 18px;
    line-height: 1.25;
    padding: 1px 12px;
    &:focus {
      border: 1px solid $main;
    }
    @include mobile {
      @include medium(16);
    }
  }
  input::placeholder {
    color: $main;
    font-weight: $medium;
  }
  &:focus {
    background-color: red;
  }
}
.label-textarea {
  width: 100%;
  margin-bottom: 40px;
  p {
    @include medium(16);
    color: rgba($black-1, 0.4);
    margin-bottom: 12px;
    @include mobile {
      @include medium(14);
    }
  }
  textarea {
    border-radius: 8px;
    font-size: 18px;
    line-height: 125%;
    border: 1px solid rgba(196, 196, 196, 0.6);
    padding: 6px 12px 5px 12px;
    width: 100%;
    &:focus {
      border: 1px solid $main;
    }
    @include mobile {
      @include medium(16);
    }
  }
}
.contact-send-wrapper {
  margin-bottom: 60px;
  position: relative;
  .contact-send {
    width: 145px;
    margin-top: 8px;
    position: absolute;
    right: 0;
    @include flex($dir: column);
    text-align: center;
    span {
      @include bold(16);
      line-height: 40px;
      color: $main;
      @include mobile {
        @include bold(14);
      }
    }
    svg {
      position: absolute;
      bottom: 0;
      @include mobile {
        bottom: -5px;
      }
    }
  }
}
</style>
