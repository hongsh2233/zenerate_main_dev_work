<template>
  <Teleport to="body">
    <div class="newsletter-modal-wrapper">
      <div class="letter-buttons-wrapper">
        <button class="close" @click="close">
          <i class="material-icons">close</i>
        </button>
      </div>
      <div class="letter-title">
        <span>{{ $t('newsletter.title') }}</span>
      </div>
      <div class="letter-input">
        <input
          type="text"
          placeholder="Your email address"
          v-model="emailForm.email_address"
        />
        <span class="submit hover-pointer" @click="submit">{{
          $t('newsletter.submit')
        }}</span>
      </div>
      <!-- <div class="letter-allow">
        <label
          for=""
          class="label-check hover-pointer"
          @click="($evt) => toggleAllow(null)"
        >
          <input type="checkbox" v-model="emailForm.allow" />
          <i class="material-icons"></i>
          <span>{{ $t('newsletter.email') }}</span>
        </label>
        <span class="see hover-pointer" @click="toggleEmailDesc">{{
          $t('newsletter.description')
        }}</span>
      </div> -->
    </div>
  </Teleport>
</template>
<script lang="ts" setup>
import { defineEmit, ref } from 'vue'
import ApiService from '/Services/api'
import Swal from 'sweetalert2'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const emit = defineEmit(['close'])

const close = () => {
  emit('close')
}

const emailForm = ref({
  allow: true,
  email_address: '',
})
const toggleAllow = (flag) => {
  if (flag != null) emailForm.value.allow = flag
  emailForm.value.allow = !emailForm.value.allow
}

const toggleEmailDesc = () => {
  Swal.fire({
    customClass: {
      title: 'swal-title-desc',
      content: 'swal-content-desc',
      popup: 'swal-popup-desc',
    },
    title: '이메일 수집 동의',
    text: `제너레잇은 서비스 이용시 이용자로부터
아래와 같은 개인정보를 수집하고 있습니다.
이용자는 본 개인정보 수집 및 이용 동의서에
따른 동의 시, ‘필요한 최소한의 정보 외에
개인정보' 수집 및 이용에 동의하지 아니할
권리가 있습니다.
개인정보 취급 및 처리에 대한 상세한 사항은
사이트 하단의 ‘개인정보 처리방침'을 참조하십시오.
`,
    confirmButtonText: '확인',
  })
}

const submit = async () => {
  console.log(emailForm.value)
  if (!emailForm.value.allow) return
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  console.log(emailRegex.test(emailForm.value.email_address))
  if (!emailRegex.test(emailForm.value.email_address)) return
  ApiService.SUBSCRIBE(emailForm.value).then((res) => {
    Swal.fire({
      customClass: {
        title: 'swal-title-done',
        content: 'swal-content-done',
        popup: 'swal-popup-done',
        confirmButton: 'swal-confirm-done',
      },
      titleText: '신청 완료되었습니다',
      text: `월간 제너레잇은 매달 셋째주 수요일에 발송됩니다. 앞으로 제너레잇의 다양한 새소식과\n비즈니스 인사이트를 전해드릴게요! 받지 못하신 경우 스팸 메일함을 확인해주세요.`,
      confirmButtonText: '확인',
    }).then(() => {
      emit('close')
    })
  })
}
</script>
<style lang="scss" scoped>

.newsletter-modal-wrapper {
  position: fixed;
  z-index: 1059;
  right: 16px;
  @include mobile {
    right: calc((100vw - 260px) / 2);
    left: calc((100vw - 260px) / 2);
  }
  @include desktop {
    right: MAX(0.1px, calc((100vw - 1175px) / 2));
  }
  top: 100px;
  width: 260px;
  height: 124px;
  border-radius: 12px;
  @include border-set(1px, $fogged, 12px);
  background: $white;
  color: $main;
  padding: 12px 24px;
  .letter-buttons-wrapper {
    width: 100%;
    text-align: right;
    @include absolute(right 10px top 10px);
    button {
      border: none;
      background-color: transparent;
      i {
        font-size: 20px;
        color: $main;
      }
    }
  }
  .letter-title {
    width: 100%;
    text-align: left;
    margin-bottom: 12px;
    span {
      @include bold(16);
    }
  }
  .letter-input {
    @include flex;
    padding-bottom: 10px;
    input {
      flex: 1;
      border: none;
      @include medium(12);
      border-bottom: solid 1px $main;
      padding: 2px;
      background: transparent;
      color: $main;
      width: 100%;
      border-radius: 0px;
      &::placeholder {
        color: $fogged;
      }
    }
    span {
      border-radius: 12px;
      width: 64px;
      @include bold(12);
      padding: 3px 5px;
      text-align: center;
      margin-left: 8px;
      &:hover{
        background-color: rgba($main, 0.1);
      }
    }
  }
  .letter-allow {
    text-align: right;
    input,
    i,
    span {
      color: $fogged;
      vertical-align: middle;
    }
    i {
      margin-right: 8px;
      &::before {
        color: $fogged;
      }
    }
    .see {
      @include medium(12);
      padding-bottom: 2px;
      vertical-align: bottom;
      // text-decoration: underline;
      border-bottom: solid 1px $fogged;
      margin-left: 12px;
    }
  }
}
</style>
