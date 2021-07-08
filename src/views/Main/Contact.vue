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
</script>
<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
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
        p {
          @include bold(50);
          color: $main;
        }
      }
      .contact-form {
        width: 100%;
      }
    }
    @include mobile {
      .contact-title {
        width: 100%;
        margin-bottom: 28px;
        p {
          @include bold(32);
          color: $main;
        }
      }
      .contact-form {
        width: 100%;
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
  }
  input {
    border-radius: 8px;
    width: 100%;
    border: 1px solid rgba(196, 196, 196, 0.6);
    height: 48px;
    font-size: 18px;
    line-height: 1.25;
    padding: 1px 12px;
    &:focus{
      border: 1px solid $main;
    }
  }
  input::placeholder {
    color: $main;
    font-weight: $medium;
  }
  &:focus{
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
  }
  textarea {
    border-radius: 8px;
    font-size: 18px;
    line-height: 125%;
    border: 1px solid rgba(196, 196, 196, 0.6);
    padding: 6px 12px 5px 12px;
    width: 100%;
    &:focus{
      border: 1px solid $main;
    }
  }
  textarea::placeholder {
    color: $main;
    font-weight: $medium;
    font-size: 18px;
  }
}
.contact-send-wrapper{
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
  }
  svg{
    position:absolute;
    bottom: 0;
  }
}
}

</style>
