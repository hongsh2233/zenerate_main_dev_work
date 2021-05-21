<template>
  <div class="module-team-wrapper module-item-wrapper">
    <div class="team-inner">
      <div class="team-title">
        <div class="title-caption caption-large hover-pointer" @click="router.push('/main/team')">
          <span>{{ $t('module.team.caption') }}</span>
        </div>
        <div class="spacer"></div>
        <div class="title-date">2017 - 2021</div>
        <div class="title-content">
          {{ $t('module.team.contents[0]') }}
        </div>
      </div>
      <div
        class="team-image"
        style="background-image: url('/img/main_team.png')"
      ></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {useRouter} from 'vue-router'
const router = useRouter()
</script>
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
      'title'
      'image';
  }

  .team-title {
    grid-area: title;
    @include tablet {
      height: 302px;
      margin-top: auto;
    }
    .title-date {
      @include desktop {
        @include medium(15);
        color: $grey-2;
      }

      margin-bottom: 28px;
    }
    .title-content {
      padding-right: 12px;
      @include medium(20);
      @include tablet {
        @include medium(20);
      }
      @include mobile {
        @include medium(15);
        margin-bottom: 24px;
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
      height: 266px;
      margin-top: auto;
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
