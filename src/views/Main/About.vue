<template>
  <div class="section-about">
    <div class="about-animation-wrapper">
      <img src="/img/zenerate.webp" alt="" />
    </div>
    <div class="about-overview-wrapper">
      <div class="overview-title">
        <span class="colored" v-if="locale === 'en'">Zenerate</span>
        <span>&nbsp;{{ $t('about.allPossibilities') }}&nbsp;</span>
        <span class="colored" v-if="locale === 'ko'">제너레잇하다.</span>
      </div>
      <div class="overview-content">
        <p>
          {{ $t('about.comment[0]') }}
        </p>
        <p>
          {{ $t('about.comment[1]') }}
        </p>
      </div>
    </div>
    <div class="about-timeline-wrapper">
      <div class="timeline-spacer"></div>
      <div class="timeline-start"></div>
      <div class="timeline-end"></div>
      <div
        class="timeline-item hidden-mobile hidden-tablet"
        v-for="(item, i) in timelineItem"
        :key="i"
        :class="{
          'timeline-item left': i % 2,
          'timeline-item right': !(i % 2),
          active: item.active,
        }"
      >
        <div
          class="content"
          data-aos="zoom-in-up"
          data-aos-offset="600"
          data-aos-duration="300"
        >
          <p
            v-for="(line, idx) in locale == 'ko' ? item.kr : item.en"
            :key="idx"
          >
            {{ line }}
          </p>
          <i class="material-icons">{{ item.icon }}</i>
        </div>
      </div>
      <div
        class="timeline-item hidden-desktop"
        v-for="(item, i) in timelineItem"
        :key="i"
        :class="{
          'timeline-item left': i % 2,
          'timeline-item right': !(i % 2),
          active: item.active,
        }"
      >
        <div class="content">
          <p
            v-for="(line, idx) in locale == 'ko' ? item.kr : item.en"
            :key="idx"
          >
            {{ line }}
          </p>
          <i class="material-icons">{{ item.icon }}</i>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
import timelineItem from '/Constants/timeline'
</script>
<style lang="scss" scoped>
.section-about {
  padding: 80px 0px;
  .about-animation-wrapper {
    width: 100%;
    img {
      max-width: 100%;
    }
  }
  .about-overview-wrapper {
    width: 100%;
    @include desktop {
      padding: 56px 72px;
    }
    @include tablet {
      padding: 32px 56px;
    }
    @include mobile {
      padding: 24px 48px;
    }
    .overview-title {
      margin-bottom: 16px;
      text-align: center;
      @include desktop {
        @include flex;
        flex-wrap: wrap;
      }
      @include tablet {
        @include flex;
        flex-wrap: wrap;
      }
      span {
        @include desktop {
          @include medium(50);
          width: 100%;
        }
        @include tablet {
          width: 100%;
          @include bold(32);
        }
        @include mobile {
          @include bold(24);
        }
        &.colored {
          font-weight: $bold;
          color: $main;
        }
      }
    }
    .overview-content {
      @include desktop {
        width: 50%;
      }
      @include tablet {
        width: 80%;
      }
      margin: 0px auto;
      text-align: center;
      margin-bottom: 32px;
      p {
        @include desktop {
          margin-bottom: 8px;
          @include medium(26);
        }
        @include tablet {
          margin-bottom: 4px;
          @include medium(24);
        }
        @include mobile {
          margin-bottom: 4px;
          @include medium(14);
        }
      }
    }
  }
  .about-timeline-wrapper {
    @include relative;
    width: 100%;
    padding: 0px 24px;
    padding-top: 108px;
    margin-bottom: 108px;
    @include mobile {
      padding: 0px 4px;
    }
    .timeline-spacer {
      @include absolute(top 0 left 50%);
      width: 0px;
      height: calc(100% + 48px);
      transform: translateX(-50%);
      border-right: 1.5px dashed rgba($main, 0.3);
      @include mobile {
        display: none;
      }
    }
    .timeline-start {
      @include absolute(top 0 left 50%);
      width: 52px;
      height: 52px;
      border-radius: 50%;
      transform: translateX(-50%);
      background: $gradient-blue;
      @include mobile {
        display: none;
      }
    }
    .timeline-end {
      @include absolute(bottom -48px left 50%);
      width: 16px;
      height: 16px;
      border-radius: 50%;
      transform: translateX(-7px);
      background: $gradient-blue;
      @include mobile {
        display: none;
      }
    }
    .timeline-item {
      padding: 10px 40px;
      position: relative;
      background-color: inherit;
      width: 50%;
      @include mobile {
        width: 100%;
      }
      .content {
        width: 328px;
        padding: 20px 24px;
        padding-top: 16px;
        background-color: white;
        position: relative;
        border-radius: 12px;
        text-align: center;
        @include elevation-hover-blue;
        p {
          @include bold(15);
        }
        @include tablet {
          width: 264px;
          p {
            @include medium(14);
          }
        }
        @include mobile {
          width: 248px;
          p {
            @include medium(13);
          }
        }
      }

      &::after {
        content: '';
        position: absolute;
        width: 32px;
        height: 32px;
        right: -16px;
        background-color: $main-3;
        // border: 2px solid #fff;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
        z-index: 1;
      }
      @include mobile {
        &::after,
        &::before {
          display: none;
        }
      }

      &.left {
        left: 0;
        &::before {
          content: ' ';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 96px;
          height: 1px;
          right: 0;
          background: $main-3;
        }
        & .content {
          margin-left: auto;
          padding-left: 64px;
          i {
            @include absolute(top 50% left 24px);
            transform: translateY(-50%);
            color: $main-3;
            font-size: 40px;
          }
        }
        padding-right: 96px;
        @include tablet {
          padding-right: 32px;
          &::before {
            width: 32px;
          }
        }
        @include mobile {
          padding: 16px 0px;
        }
      }

      &.right {
        left: 50%;
        @include mobile {
          left: 5%;
        }
        &::before {
          content: ' ';
          position: absolute;
          width: 96px;
          height: 1px;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          background: $main-3;
        }
        &::after {
          left: -16px;
        }
        & .content {
          margin-right: auto;
          padding-right: 64px;
          i {
            @include absolute(top 50% right 24px);
            transform: translateY(-50%);
            color: $main-3;
            font-size: 40px;
          }
        }
        padding-left: 96px;
        @include tablet {
          padding-left: 32px;
          &::before {
            width: 32px;
          }
        }
        @include mobile {
          padding: 16px 0px;
        }
      }

      &.active {
        &::after,
        &::before {
          background: $gradient-blue;
        }
        .content {
          background: $gradient-blue;
          p,
          span,
          i {
            color: white;
          }
        }
      }
    }
  }
}
</style>
