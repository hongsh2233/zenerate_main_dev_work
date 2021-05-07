<template>
  <div class="module-monthly-wrapper module-item-wrapper">
    <div class="monthly-inner">
      <div class="monthly-title">
        <span class="hidden-mobile hidden-tablet">월간 제너 레잇</span>
        <span class="hidden-desktop">월간 제너레잇</span>
      </div>
      <div class="spacer hidden-desktop"></div>
      <div class="monthly-caption caption-large hidden-tablet hidden-mobile">
        월간지 구독
      </div>
      <div class="monthly-caption caption-small hidden-desktop">
        월간지 구독
      </div>

      <div class="spacer hidden-mobile hidden-tablet"></div>
      <div class="monthly-subscription">
        <div class="subscription-title">
          <span
            >매월 현재 건축자동화 트렌드와 제너레잇 소식을 이메일로
            발송해드립니다.</span
          >
          <span class="hidden-desktop"
            >게시물은 수시로 <span class="notion hover-pointer">노션</span>에서
            확인하실 수 있습니다.</span
          >
        </div>
        <div class="subscription-button hover-pointer">구독 신청하기</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" scoped></script>
<style lang="scss" scoped>
.monthly-inner {
  width: 100%;
  height: 100%;
  padding-top: 48px;
  @include desktop {
    padding-right: 12px;
  }
  @include tablet {
    padding-top: 48px;
    padding-right: 12px;
  }
  @include mobile {
    padding-top: 24px;
  }

  .monthly-title {
    @include desktop {
      padding-right: 24px;
      @include medium(68);
      margin-bottom: 36px;
    }
    @include tablet {
      @include medium(50);
      margin-bottom: 24px;
    }
    @include mobile {
      @include medium(32);
      margin-bottom: 16px;
    }
  }
  @include mobile {
    .monthly-caption {
      font-size: 24px;
    }
  }
  .monthly-subscription {
    padding-right: 12px;
    @include desktop {
      .subscription-title {
        @include medium(24);
        margin-bottom: 32px;
      }
      .subscription-button {
        @include bold(24);
      }
    }
    @include tablet {
      .subscription-title {
        @include medium(24);
        margin-bottom: 24px;
        .notion {
          font-weight: $bold;
        }
      }
      .subscription-button {
        @include bold(24);
      }
    }
    @include mobile {
      .subscription-title {
        @include medium(15);
        margin-bottom: 16px;
        .notion {
          font-weight: $bold;
        }
      }
      .subscription-button {
        @include bold(15);
      }
    }
  }
}
</style>
