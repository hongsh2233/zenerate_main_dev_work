<template>
  <div class="section-about">
    <div class="about-animation-wrapper">
      <img src="/img/zenerate.webp" alt="" />
    </div>
    <div class="about-overview-wrapper about-wrapper">
      <div class="overview-title about-title">
        <span class="colored" v-if="locale === 'en'">Zenerate</span>
        <span>&nbsp;{{ $t('about.allPossibilities') }}&nbsp;</span>
        <span class="colored" v-if="locale === 'ko'"
          >제너레잇<span>하다.</span></span
        >
      </div>
      <div class="overview-content">
        <p>
          {{ $t('about.comment[0]') }}
        </p>
        <p>
          {{ $t('about.comment[1]') }}
        </p>
        <p>
          {{ $t('about.comment[2]') }}
        </p>
      </div>
    </div>
    <div class="about-mission-wrapper about-wrapper">
      <div class="mission-caption caption-large">Our Mission</div>
      <div class="mission-title about-title">
        {{ $t('about.mission.title') }}
      </div>
      <div class="mission-content-wrapper">
        <div class="mission-content" v-for="i in 3" :key="i">
          <div class="mission-content-up">
            <p>{{ $t(`about.mission.content[${4 * i - 4}]`) }}</p>
            <p>{{ $t(`about.mission.content[${4 * i - 3}]`) }}</p>
          </div>
          <div class="mission-content-down">
            <p>{{ $t(`about.mission.content[${4 * i - 2}]`) }}</p>
            <p>{{ $t(`about.mission.content[${4 * i - 1}]`) }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="about-tech-wrapper about-wrapper">
      <div class="tech-caption caption-large">Our Technology</div>
      <div class="tech-title about-title">{{ $t('about.tech.title') }}</div>
      <div class="tech-content-wrapper">
        <div class="tech-content">
          <img src="/img/service_consulting_2.png" alt="consulting" />
          <div class="content-block">
            <div class="caption-large tech-content-caption">
              {{ $t('about.tech.content[0].caption') }}
            </div>
            <div class="tech-content-title">
              {{ $t('about.tech.content[0].title') }}
            </div>
            <div class="tech-content-content">
              {{ $t('about.tech.content[0].content') }}
            </div>
          </div>
        </div>
        <div class="tech-content">
          <img src="/img/service_consulting_1.png" alt="consulting" />
          <div class="content-block">
            <div class="caption-large tech-content-caption">
              {{ $t('about.tech.content[1].caption') }}
            </div>
            <div class="tech-content-title">
              {{ $t('about.tech.content[1].title') }}
            </div>
            <div class="tech-content-content">
              {{ $t('about.tech.content[1].content') }}
            </div>
          </div>
        </div>
        <div class="tech-content">
          <img src="/img/service_web.png" alt="web service" />
          <div class="content-block">
            <div class="caption-large tech-content-caption">
              {{ $t('about.tech.content[2].caption') }}
            </div>
            <div class="tech-content-title">
              {{ $t('about.tech.content[2].title') }}
            </div>
            <div class="tech-content-content">
              {{ $t('about.tech.content[2].content') }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-partner-wrapper about-wrapper">
      <div class="partner-title about-title">
        <span>{{ $t('about.partner.title[0]') }}</span>
        <span class="colored">{{ $t('about.partner.title[1]') }}</span>
        <span>{{ $t('about.partner.title[2]') }}</span>
      </div>
      <div class="partner-explanation">
        {{ $t('about.partner.content[0]') }}
      </div>
      <div class="partner-content-wrapper">
        <div class="partner-content">
          <div class="partner-content-title">
            {{ $t('about.partner.content[1]') }}
          </div>
          <div class="partner-image-group">
            <div>
              <img src="/img/partner_1.png" alt="partner" />
              <img src="/img/partner_2.png" alt="partner" />
              <img src="/img/partner_4.png" alt="partner" />
              <img src="/img/partner_5.png" alt="partner" />
            </div>
            <div>
              <img src="/img/partner_6.png" alt="partner" />
              <img src="/img/partner_11.png" alt="partner" />
              <img src="/img/partner_3.png" alt="partner" />
            </div>
          </div>
        </div>
        <div class="partner-content">
          <div class="partner-content-title">
            {{ $t('about.partner.content[2]') }}
          </div>
          <div class="partner-image-group">
            <img src="/img/partner_7.png" alt="partner" />
            <img src="/img/partner_10.png" alt="partner" />
            <img src="/img/partner_12.png" alt="partner" />
            <img src="/img/partner_9.png" alt="partner" />
            <img src="/img/partner_8.png" alt="partner" />
          </div>
        </div>
      </div>
    </div>
    <div class="about-timeline-wrapper about-wrapper">
      <div class="timeline-title about-title">
        <span>{{ $t('about.timeline.title[0]') }}</span>
        <span class="colored">{{ $t('about.timeline.title[1]') }}</span>
        <span>{{ $t('about.timeline.title[2]') }}</span>
      </div>
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
          data-aos-offset="0"
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
@import '../../assets/scss/variables.scss';
.section-about {
  padding: 80px 0px;
  @include mobile {
    padding: 40px 0px;
  }
  .about-animation-wrapper {
    width: 100%;
    img {
      max-width: 100%;
      width: 1166px;
      height: 640px;
    }
  }
  .about-wrapper {
    text-align: center;
    margin-bottom: 120px;
    .caption-large {
      @include bold(16);
      line-height: 40px;
    }
    .about-title {
      margin-bottom: 40px;
      text-align: center;
      @include desktop {
        @include flex($justify: center);
        flex-wrap: wrap;
        @include bold(40);
        line-height: 60px;
      }
      .colored {
        font-weight: $bold;
        color: $main;
      }
    }
  }
  .about-overview-wrapper {
    width: 100%;
    margin: 0 auto;
    @include desktop {
      padding: 56px 0px;
      width: 496px;
    }
    @include tablet {
      padding: 32px 56px;
    }
    @include mobile {
      padding: 24px 48px;
    }

    .overview-title {
      margin-bottom: 40px;
      text-align: center;
      @include desktop {
        @include flex($justify: center);
        flex-wrap: wrap;
      }
      @include tablet {
        @include flex;
        flex-wrap: wrap;
      }
      span {
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
          span {
            color: $black;
          }
        }
      }
    }
    .overview-content {
      @include desktop {
        width: 100%;
      }
      @include tablet {
        width: 80%;
      }
      margin: 0px auto;
      text-align: center;
      margin-bottom: 32px;
      p {
        &:last-child {
          padding-top: 24px;
        }
        @include desktop {
          margin-bottom: 8px;
          @include medium(20);
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
  .about-mission-wrapper {
    .mission-title {
      margin-bottom: 70px;
    }
    .mission-content-wrapper {
      @include flex($justify: center);
      .mission-content {
        width: 216px;
        margin: 0 30px;
        @include medium(20);
        .mission-content-up {
          padding-bottom: 40px;
          border-bottom: solid 1px $main;
          color: rgba($black-1, 0.4);
        }
        .mission-content-down {
          padding-top: 40px;
        }
      }
    }
  }
  .about-tech-wrapper {
    .tech-content-wrapper {
      width: 733px;
      margin: 0 auto;
      .tech-content {
        @include flex();
        margin-bottom: 48px;
        img {
          width: 124px;
          margin-right: 28px;
        }
        .content-block {
          text-align: left;
          .tech-content-title {
            @include bold(28);
            margin-bottom: 12px;
          }
          .tech-content-content {
            @include medium(16);
          }
        }
      }
    }
  }
  .about-partner-wrapper {
    .partner-title {
      span{
        margin: 0px 5px;
      }
    }
    .partner-explanation {
      @include medium(20);
      margin-bottom: 56px;
    }
    .partner-content-wrapper {
      .partner-content {
        margin-bottom: 40px;
        .partner-content-title {
          @include bold(16);
          line-height: 40px;
          background-color: $grey-3;
          border-radius: 60px;
          width: 140px;
          margin: 0 auto;
        }
        .partner-image-group {
          img {
            width: 164px;
            margin: 0px 10px;
          }
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
    .timeline-title{
      span{
        margin: 0 5px;
      }
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
