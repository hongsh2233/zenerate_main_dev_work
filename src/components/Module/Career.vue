<template>
  <div class="module-career-wrapper module-item-wrapper">
    <div class="module-career-inner">
      <div class="career-caption caption-small hover-pointer">
        {{ $t('module.career.caption') }}
      </div>
      <div class="career-title">
        {{ $t('module.career.title') }}
      </div>
      <div class="career-content">
        <span>{{ $t('module.career.contents[0]') }} </span>
      </div>
      <div class="contact-link">
        <button @click="router.push('/main/contact')">
          {{ $t('module.career.button') }}
        </button>
        <div class="vector-wrapper">
          <svg
            width="689"
            height="28"
            viewBox="0 0 689 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 27H688L661.423 1"
              stroke="#4747FF"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.module-career-inner {
  width: 100%;
  height: 100%;
  padding: 0px;
  padding-left: 56px;
  .career-caption {
    height: 40px;
  }
  .career-title {
    @include desktop {
      @include bold(28);
      margin-bottom: 32px;
    }
  }
  .career-content {
    @include desktop {
      @include medium(16);
      margin-bottom: 28px;
    }
  }
  .contact-link {
    text-align: end;
    position: relative;
    button {
      position: relative;
      z-index: 20;
      color: $main;
      margin-right: 30px;
      @include bold(16);
    }
    .vector-wrapper {
      z-index: 10;
      position: absolute;
      top: 10px;
    }
  }
}
</style>
