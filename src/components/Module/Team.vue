<template>
  <div class="module-team-wrapper module-item-wrapper">
    <div class="team-inner">
      <div class="team-title">
        <div class="title-caption caption-large">
          <span>팀소개</span>
        </div>
        <div class="spacer"></div>
        <div class="title-content">
          2020년 5월, 건축디자이너 신봉재와 인공지능 개발자이자 수학박사인
          정가혜가 공동 창업하여 현재 엔지니어, 디자이너 등 총 8명으로 구성되어
          있습니다.
        </div>
      </div>
      <div
        class="team-image"
        style="background-image: url('/img/main_team.jpg')"
      ></div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.team-inner {
  padding-top: 24px;
  width: 100%;
  height: 100%;
  display: grid;

  @include desktop {
    padding-left: 24px;
    grid-template-areas:
      'title'
      'image';
  }
  @include tablet {
    padding-left: 12px;
    grid-template-areas:
      'image'
      'title';
  }
  @include mobile {
    padding: 24px 0px;
    grid-template-areas:
      'image'
      'title';
  }

  .team-title {
    grid-area: title;
    .title-content {
      padding-right:12px;
      @include medium(24);
      @include tablet {
        @include medium(24);
      }
      @include mobile {
        @include medium(15);
      }
    }
  }
  .team-image {
    grid-area: image;
    width: 100%;
    background-position-x: center;
    background-position-y: top;
    background-size: cover;
    @include desktop {
      height: 300px;
    }
    @include tablet {
      height: 360px;
    }
    @include mobile {
      height: 320px;
      margin-bottom: 16px;
    }
  }
}
</style>
