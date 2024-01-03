<template>
  <div class="module-team-wrapper module-item-wrapper">
    <div class="team-inner">
      <div class="team-title">
        <div class="title-caption caption-large hover-pointer">
          <router-link :to="{ name: 'About', hash: '#team' }">
            <span>{{ $t('module.team.caption') }}</span>
          </router-link>
        </div>
        <div class="title-date">2017 - 2024</div>
        <div class="title-content">
          {{ $t('module.team.contents[0]') }}
        </div>
      </div>
      <!-- <div
        class="team-image"
        style="background-image: url('/img/main_team_new.jpg')"
      ></div> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<style lang="scss" scoped>
.team-inner {
  width: 100%;
  height: 100%;
  cursor: default;

  .team-title {
    @include tablet {
      height: auto;
      margin-top: auto;
    }
    .title-caption {
      height: 32px;
      @include vertical-center;
    }
    .title-date {
      color: rgba($black-1, 0.4);
      @include vertical-center;
      @include desktop {
        @include medium(12);
        height: 48px;
      }
      @include tablet {
        @include medium(12);
        height: 48px;
      }
      @include mobile {
        @include medium(12);
      }
    }
    .title-content {
      @include medium(16);
      @include tablet {
        @include medium(16);
        padding-bottom: 24px;
      }
      @include mobile {
        @include medium(12);
        margin-bottom: 24px;
      }
    }
  }
}
</style>
