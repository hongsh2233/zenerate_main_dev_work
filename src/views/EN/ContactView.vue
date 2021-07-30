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
      </div>
      <div class="label-text">
        <p>Name</p>
        <input type="text" v-model="contactForm.name" />
      </div>
      <div class="label-text">
        <p>Email Address</p>
        <input type="text" v-model="contactForm.email" />
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
      <div class="contact-send-wrapper">
        <div class="contact-send hover-pointer" @click="sendEmail">
          <span>Send</span>
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
}
</style>
