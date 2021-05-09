<template>
  <section class="section-main-contact">
    <div class="contact-container">
      <div class="contact-title">
        <p>무엇이든</p>
        <p>문의해주세요!</p>
      </div>
      <div class="contact-form">
        <div class="label-text">
          <input type="text" placeholder="이름" v-model="contactForm.name" />
        </div>
        <div class="label-text">
          <input
            type="text"
            placeholder="메일주소"
            v-model="contactForm.email"
          />
        </div>
        <SelectInput
          placeholder="문의목적"
          :items="items"
          :selected="contactForm.purpose"
          @onSelect="(v) => (contactForm.purpose = v)"
        />
        <div class="label-textarea">
          <textarea
            placeholder="메세지"
            v-model="contactForm.message"
            rows="7"
          />
        </div>
        <div class="contact-send">
          <span>보내기</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
// @ts-ignore
import SelectInput from '/Components/SelectInput.vue'

type Item = {
  id: number
  value: string
  ref?: string
}

const items: Item[] = [
  {
    id: 0,
    value: '사업',
  },
  {
    id: 1,
    value: '마케팅',
  },
  {
    id: 2,
    value: '연구',
  },
  {
    id: 3,
    value: '구직',
  },
  {
    id: 4,
    value: '문의',
  },
]

const contactForm = reactive({
  name: '',
  email: '',
  purpose: '',
  message: '',
})
</script>
<style lang="scss" scoped>
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
  input {
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
  textarea {
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
