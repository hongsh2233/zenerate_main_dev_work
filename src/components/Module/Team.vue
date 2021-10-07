<template>
  <div class="module-team-wrapper module-item-wrapper">
    <div class="team-inner">
      <div class="team-title">
        <div class="title-caption caption-large hover-pointer">
          <router-link :to="{ name: 'About', hash: '#team' }">
            <span>{{ $t('module.team.caption') }}</span>
          </router-link>
        </div>
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
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<style lang="scss" scoped>
.team-inner {
  padding-top: 24px;
  width: 100%;
  height: 100%;
  display: grid;
  cursor: default;
  @include desktop {
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
      height: auto;
      margin-top: auto;
    }
    .title-caption {
      height: 40px;
      @include vertical-center;
      margin-bottom: 4px;
    }
    .title-date {
      margin-bottom: 4px;
      color: rgba($black-1, 0.4);
      @include vertical-center;
      @include desktop {
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
      }
      @include mobile {
        @include medium(12);
        margin-bottom: 24px;
      }
    }
  }
  .team-image {
    grid-area: image;
    background-position-x: center;
    background-position-y: top;
    background-size: cover;
    @include desktop {
      height: 275px;
      margin-top: 24px;
    }
    @include tablet {
      height: 360px;
      object-fit: contain;
    }
    @include mobile {
      height: 250px;
      object-fit: contain;
      margin-bottom: 16px;
    }
  }
}
</style>
