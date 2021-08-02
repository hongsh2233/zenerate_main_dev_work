<template>
  <section class="section-contact">
    <div class="contact-hero-wrapper">
      <img src="/en/img/contact_hero.png" alt="" />
      <div class="hero-text-wrapper">
        <span>We'd love to hear from you</span>
      </div>
    </div>
    <div class="contact-form-wrapper">
      <div class="form-left">
        <div class="label-text">
          <p>Your Company</p>
          <input type="text" v-model="contactForm.company" />
        </div>
        <div class="label-text">
          <p>Name</p>
          <input type="text" v-model="contactForm.name" />
        </div>
        <div class="label-text">
          <p>Email Address</p>
          <input type="text" v-model="contactForm.email" />
        </div>
      </div>
      <div class="form-right">
        <SelectInput
          placeholder="Select"
          :items="items"
          title="Inqueries"
          :skipTranslate="true"
          :selected="contactForm.purpose"
          @onSelect="(v) => (contactForm.purpose = v)"
        />
        <div class="label-textarea">
          <p>Message</p>
          <textarea v-model="contactForm.message" rows="7" />
        </div>
      </div>
      <div class="form-send-wrapper">
        <button class="form-send hover-pointer" @click="sendEmail">Send</button>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import ApiService from '/Services/api'
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
  company: '',
  name: '',
  email: '',
  inqueries: null,
  message: '',
})

const sendEmail = async () => {
  if (sendEmailStatus.value == true) return
  await ApiService.SEND_EMAIL(contactForm)
  sendEmailStatus.value = true
}
</script>
<style lang="scss" scoped>
.section-contact {
  .contact-hero-wrapper {
    @include relative;
    width: 100vw;
    img {
      width: 100%;
    }
    .hero-text-wrapper {
      @include absolute(bottom 48px);
      left: max(calc((100vw - 1600px) / 2), 96px);
      margin: 0px auto;
      span {
        @include bold(40);
        color: white;
      }
    }
  }
  .contact-form-wrapper {
    max-width: 1600px;
    padding-top: 52px;
    margin: 0px auto;
    margin-bottom: 80px;
    @include flex;
    .form-left {
      flex: 1;
      margin-right: 64px;
    }
    .form-right {
      flex: 1;
    }
    .label-text {
      width: 100%;
      margin-bottom: 32px;
      p {
        @include regular(16);
        color: rgba($black-1, 0.4);
        margin-bottom: 12px;
      }
      input {
        width: 100%;
        height: 48px;
        @include border-set(1px, rgba($grey, 0.6), 6px);
        @include center-vertical();
        padding: 0px 12px;
        @include regular(16);
        color: $black-1;
        &::placeholder {
          color: rgba($black-1, 0.4);
        }
        &:focus {
          border-color: $main;
          border-width: 2px;
        }
      }
    }
    .label-textarea {
      width: 100%;
      margin-bottom: 32px;
      p {
        @include regular(16);
        color: rgba($black-1, 0.4);
        margin-bottom: 12px;
      }
      textarea {
        width: 100%;
        height: 172px;
        @include border-set(1px, rgba($grey, 0.6), 6px);
      }
    }
    .form-send-wrapper {
      width: 100%;
      text-align: right;
      margin-top: 36px;
      button {
        width: 130px;
        height: 40px;
        @include border-set(1px, rgba($grey, 0.6), 6px);
      }
    }
  }
}
</style>
