<template>
  <section class="section-main-contact">
    <div class="contact-container">
      <div class="contact-title">
        <p>{{ $t('main.contact.title[0]') }}</p>
        <p>{{ $t('main.contact.title[1]') }}</p>
      </div>
      <div class="contact-form">
        <div class="label-text">
          <input
            type="text"
            :placeholder="$t('main.contact.form.name')"
            v-model="contactForm.name"
          />
        </div>
        <div class="label-text">
          <input
            type="text"
            :placeholder="$t('main.contact.form.email')"
            v-model="contactForm.email"
          />
        </div>
        <SelectInput
          :placeholder="$t('main.contact.form.purpose')"
          :items="items"
          :selected="contactForm.purpose"
          @onSelect="(v) => (contactForm.purpose = v)"
        />
        <div class="label-textarea">
          <textarea
            :placeholder="$t('main.contact.form.message')"
            v-model="contactForm.message"
            rows="7"
          />
        </div>
        <div class="contact-send" @click="sendEmail">
          <span>{{
            $t(
              sendEmailStatus
                ? 'main.contact.form.sent'
                : 'main.contact.form.send'
            )
          }}</span>
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
@import "../../assets/scss/variables.scss";
.section-main-contact {
  width: 100%;
  padding: 80px 0px;

  .contact-container {
    @include flex;
    @include desktop {
      .contact-title {
        flex: 1;
        p {
          @include bold(50);
          color: $main;
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
  height: 43px;
  margin-bottom: 16px;
  border-radius: 0px;

  input {
    border-radius: 0px;
    width: 100%;
    border: none;
    border: solid 2px $main;
    height: 100%;
    font-size: 18px;
    line-height: 1.25;
    padding: 1px 12px;
    color: $main;
  }
  input::placeholder {
    color: $main;
    font-weight: $medium;
  }
}
.label-textarea {
  width: 100%;
  border-radius: 0px;
  textarea {
    border-radius: 0px;
    font-size: 18px;
    line-height: 125%;
    border: solid 2px $main;
    padding: 6px 12px 5px 12px;
    width: 100%;
    color: $main;
  }
  textarea::placeholder {
    color: $main;
    font-weight: $medium;
    font-size: 18px;
  }
}
.contact-send {
  padding-left: 12px;
  margin-top: 8px;
  span {
    @include bold(20);
    color: $main;
    text-decoration: underline;
  }
}
</style>
