<template>
  <section class="section-footer">
    <div class="footer-sns">
      <a href="https://www.instagram.com/zenerate.ai/" class="hover-pointer"
        ><svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 6.66675C9.11594 6.66675 8.2681 7.01794 7.64297 7.64306C7.01785 8.26818 6.66666 9.11603 6.66666 10.0001C6.66666 10.8841 7.01785 11.732 7.64297 12.3571C8.2681 12.9822 9.11594 13.3334 10 13.3334C10.8841 13.3334 11.7319 12.9822 12.357 12.3571C12.9821 11.732 13.3333 10.8841 13.3333 10.0001C13.3333 9.11603 12.9821 8.26818 12.357 7.64306C11.7319 7.01794 10.8841 6.66675 10 6.66675Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6L0 14C0 15.5913 0.632141 17.1174 1.75736 18.2426C2.88258 19.3679 4.4087 20 6 20H14C15.5913 20 17.1174 19.3679 18.2426 18.2426C19.3679 17.1174 20 15.5913 20 14V6C20 4.4087 19.3679 2.88258 18.2426 1.75736C17.1174 0.632141 15.5913 0 14 0L6 0ZM5.33333 10C5.33333 8.76232 5.825 7.57534 6.70017 6.70017C7.57534 5.825 8.76232 5.33333 10 5.33333C11.2377 5.33333 12.4247 5.825 13.2998 6.70017C14.175 7.57534 14.6667 8.76232 14.6667 10C14.6667 11.2377 14.175 12.4247 13.2998 13.2998C12.4247 14.175 11.2377 14.6667 10 14.6667C8.76232 14.6667 7.57534 14.175 6.70017 13.2998C5.825 12.4247 5.33333 11.2377 5.33333 10ZM14.6667 5.33333H16V4H14.6667V5.33333Z"
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
            d="M10 0C4.47768 0 0 4.47768 0 10C0 15.5223 4.47768 20 10 20C15.5223 20 20 15.5223 20 10C20 4.47768 15.5223 0 10 0ZM15.7143 5.66295L14.8036 6.53571C14.7232 6.59598 14.6853 6.6942 14.7009 6.79018V13.2121C14.6853 13.3103 14.7232 13.4085 14.8036 13.4665L15.6964 14.3393V14.5335H11.2143V14.3482L12.1362 13.4531C12.2277 13.3616 12.2277 13.3348 12.2277 13.1987V8.00223L9.66071 14.5112H9.31473L6.32812 8.00223V12.3661C6.30134 12.5491 6.36607 12.7344 6.49554 12.8661L7.69643 14.3192V14.5134H4.28571V14.3192L5.48661 12.8661C5.54988 12.8007 5.59697 12.7214 5.6241 12.6346C5.65123 12.5478 5.65766 12.4558 5.64286 12.3661V7.32143C5.65848 7.1808 5.60491 7.04464 5.49777 6.94866L4.4308 5.66295V5.46875H7.74554L10.3036 11.0826L12.5558 5.47321H15.7143V5.66295Z"
            fill="#161616"
          />
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
        <a href="mailto:help@zenerate.ai">{{ $t('footer.question[1]') }}</a>
      </div>
      <div class="footer-text address">
        <span>{{ $t('footer.address[0]') }}</span>
        <span>{{ $t('footer.address[1]') }}</span>
      </div>
      <div class="footer-text copyright">
        ⓒ Zenerate Inc. All rights reserved.
      </div>
    </div>
  </section>
</template>
<script lang="ts" scoped></script>
<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.section-footer {
  border-top: solid 1px rgba(196, 196, 196, 0.3);
  padding: 62px 0px;
  color: $main;
  align-items: center;
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
      span:first-child {
        color: black;
        @include bold(11);
        margin-right: 14px;
      }
      span:last-child, a{
        color: rgba(22, 22, 22, 0.4);
        @include medium(11);
      }
      @include medium(14);
      @include mobile {
        font-size: 12px;
      }
      &.copyright {
        @include medium(11);
        margin-top: 8px;
        color: black;
      }
    }
  }
}
</style>
