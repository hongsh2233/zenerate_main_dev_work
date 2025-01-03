<template>
  <section class="section-footer">
    <div class="footer-sns">
      <a
        href="https://www.linkedin.com/company/zenerate"
        class="hover-pointer linkedin-icon"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 20 20"
          version="1.1"
        >
          <g id="surface1">
            <path
              fill="#161616"
              d="M 9.972656 0 C 4.464844 0 0 4.464844 0 9.972656 C 0 15.484375 4.464844 19.949219 9.972656 19.949219 C 15.484375 19.949219 19.949219 15.484375 19.949219 9.972656 C 19.949219 4.464844 15.484375 0 9.972656 0 Z M 6.238281 16.726562 L 3.433594 16.726562 L 3.433594 7.707031 L 6.238281 7.707031 Z M 4.835938 6.472656 C 3.9375 6.472656 3.210938 5.746094 3.210938 4.847656 C 3.210938 3.949219 3.9375 3.222656 4.835938 3.222656 C 5.730469 3.222656 6.460938 3.949219 6.460938 4.847656 C 6.460938 5.742188 5.730469 6.472656 4.835938 6.472656 Z M 16.738281 16.726562 L 13.9375 16.726562 L 13.9375 12.339844 C 13.9375 11.292969 13.917969 9.949219 12.480469 9.949219 C 11.023438 9.949219 10.796875 11.085938 10.796875 12.265625 L 10.796875 16.726562 L 7.996094 16.726562 L 7.996094 7.707031 L 10.683594 7.707031 L 10.683594 8.9375 L 10.722656 8.9375 C 11.097656 8.230469 12.011719 7.480469 13.375 7.480469 C 16.214844 7.480469 16.738281 9.351562 16.738281 11.777344 Z M 16.738281 16.726562 "
            />
          </g>
        </svg>
      </a>
      <a href="https://zenerate.medium.com/" class="hover-pointer"
        ><svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0C4.47768 0 0 4.47768 0 10C0 15.5223 4.47768 20 10 20C15.5223 20 20 15.5223 20 10C20 4.47768 15.5223 0 10 0ZM15.7143 5.66295L14.8036 6.53571C14.7232 6.59598 14.6853 6.6942 14.7009 6.79018V13.2121C14.6853 13.3103 14.7232 13.4085 14.8036 13.4665L15.6964 14.3393V14.5335H11.2143V14.3482L12.1362 13.4531C12.2277 13.3616 12.2277 13.3348 12.2277 13.1987V8.00223L9.66071 14.5112H9.31473L6.32812 8.00223V12.3661C6.30134 12.5491 6.36607 12.7344 6.49554 12.8661L7.69643 14.3192V14.5134H4.28571V14.3192L5.48661 12.8661C5.54988 12.8007 5.59697 12.7214 5.6241 12.6346C5.65123 12.5478 5.65766 12.4558 5.64286 12.3661V7.32143C5.65848 7.1808 5.60491 7.04464 5.49777 6.94866L4.4308 5.66295V5.46875H7.74554L10.3036 11.0826L12.5558 5.47321H15.7143V5.66295Z"
            fill="#161616"
          />
        </svg>
      </a>
      <a href="https://www.facebook.com/zenerate/" class="hover-pointer"
        ><svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z"
            fill="#161616"
          />
        </svg>
      </a>
    </div>
    <div class="footer-text-wrapper">
      <div class="footer-text ceo">
        <span>{{ $t('footer.CEO[0]') }}</span
        ><span>{{ $t('footer.CEO[1]') }}</span>
      </div>
      <div class="footer-text mail">
        <span>{{ $t('footer.question[0]') }}</span>
        <a href="mailto:help@zenerate.ai">help@zenerate.ai</a>
      </div>
      <div class="footer-text address">
        <span>{{ $t('footer.address[0]') }}</span>
        <span>{{ $t('footer.address[1]') }}</span>
      </div>
      <div class="footer-text copyright">
        © Zenerate, Inc. 2025. All rights reserved.
      </div>
    </div>
  </section>
</template>
<script lang="ts" scoped></script>
<style lang="scss" scoped>
.section-footer {
  border-top: solid 1px rgba(196, 196, 196, 0.3);
  padding: 62px 0px;
  color: $main;
  align-items: center;
  @include mobile {
    padding: 30px 0px;
  }
  .footer-sns {
    margin-bottom: 25px;
    width: 96px;
    @include flex($justify: space-between);
    a {
      @include mobile {
        font-size: 12px;
      }
    }
  }
  .footer-text-wrapper {
    .footer-text {
      display: grid;
      grid-template-columns: 60px 1fr;
      span:first-child {
        color: black;
        @include bold(11);
      }
      span:last-child,
      a {
        color: rgba(22, 22, 22, 0.4);
        @include medium(11);
      }
      @include medium(14);
      @include mobile {
        font-size: 12px;
      }
    }
    .copyright {
      display: block;
      @include medium(11);
      margin-top: 8px;
      color: black;
    }
  }
}
</style>
