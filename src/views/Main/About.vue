<template>
  <div class="section-about">
    <div class="about-animation-wrapper">
      <img src="/img/zenerate.webp" alt="" />
    </div>
    <div
      class="about-overview-wrapper about-wrapper"
      :class="{ en: locale === 'en' }"
    >
      <div class="overview-title about-title">
        <!-- <span class="colored" v-if="locale === 'en'">Zenerate</span> -->
        <span class="colored" v-if="locale === 'en'">{{
          $t('about.allPossibilities')
        }}</span>
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
        <p :class="{ en: locale === 'en' }">
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
          <div class="mission-content-arrow">
            <i class="material-icons">arrow_downward</i>
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
        <span class="colored" :class="{ en: locale === 'en' }">{{
          $t('about.timeline.title[1]')
        }}</span>
        <span>{{ $t('about.timeline.title[2]') }}</span>
      </div>
      <div class="timeline-item-wrapper">
        <div class="timeline-spacer-wrapper hidden-mobile">
          <div class="timeline-start">
            <p>2018</p>
            <p>2019</p>
            <p>2020</p>
          </div>
          <div class="timeline-spacer"></div>
          <div class="timeline-end">2021</div>
        </div>
        <div class="timeline-left-wrapper hidden-mobile">
          <div
            class="timeline-item left"
            v-for="(item, i) in leftItem"
            :key="i"
          >
            <div
              class="content"
              data-aos="zoom-in-up"
              data-aos-offset="0"
              data-aos-duration="300"
            >
              <div class="item-year">{{ item.year }}</div>
              <p
                v-for="(line, idx) in locale == 'ko' ? item.kr : item.en"
                :key="idx"
              >
                {{ line }}
              </p>
            </div>
          </div>
        </div>
        <div class="timeline-right-wrapper hidden-mobile">
          <div
            class="timeline-item right"
            v-for="(item, i) in rightItem"
            :key="i"
          >
            <div
              class="content"
              data-aos="zoom-in-up"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false"
            >
              <div class="item-year">{{ item.year }}</div>
              <p
                v-for="(line, idx) in locale == 'ko' ? item.kr : item.en"
                :key="idx"
              >
                {{ line }}
              </p>
            </div>
          </div>
        </div>
        <div class="timeline-item-mobile-wrapper hidden-desktop hidden-tablet">
          <div
            class="timeline-item"
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
              data-aos-once="false"
            >
              <div class="item-year">{{ item.year }}</div>
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
    </div>
  </div>
  <div class="section-team" id="team">
    <div class="team-contents">
      <div class="contents-title">{{ $t('main.team.title') }}</div>
      <div
        class="team-image"
        :style="{ 'background-image': `url('/img/team_${currentTab}.jpg')` }"
      ></div>
      <div class="contents-tab-wrapper">
        <div
          class="contents-tab hover-pointer"
          :class="{ active: currentTab === 'all' }"
          @click="toggleTab('all')"
        >
          {{ $t('main.team.menu.zenerate') }}
        </div>
        <div class="horizontal-spacer"></div>
        <div
          class="contents-tab hover-pointer"
          :class="{ active: currentTab === 'marketing' }"
          @click="toggleTab('marketing')"
        >
          {{ $t('main.team.menu.marketing') }}
        </div>
        <div class="horizontal-spacer"></div>
        <div
          class="contents-tab hover-pointer"
          :class="{ active: currentTab === 'product' }"
          @click="toggleTab('product')"
        >
          {{ $t('main.team.menu.product') }}
        </div>
        <div class="horizontal-spacer"></div>
        <div
          class="contents-tab hover-pointer"
          :class="{ active: currentTab === 'it' }"
          @click="toggleTab('it')"
        >
          {{ $t('main.team.menu.it') }}
        </div>
      </div>
      <div class="contents-item-wrapper">
        <transition-group name="fade">
          <div
            class="contents-item"
            v-for="(member, idx) in filteredMember"
            :key="idx"
          >
            <div class="item-image noselect">
              <img :src="`/img/people/${member.img}.gif`" :alt="member.name" />
            </div>
            <div class="item-name">{{ $t(member.name) }}</div>
            <div class="item-desc">{{ $t(member.title) }}</div>
            <div class="item-icons plain">
              <a
                v-if="member.linkedin"
                :href="member.linkedin"
                class="icon-linkedin"
              >
                <img src="/img/logo_linkedin.svg" alt="" />
              </a>
              <a :href="member.github" class="icon-github" v-if="member.github">
                <img src="/img/logo_github.svg" alt="" />
              </a>
            </div>
            <div class="item-icons hovered">
              <a
                :href="member.linkedin"
                class="icon-linkedin"
                v-if="member.linkedin"
              >
                <img src="/img/logo_linkedin_white.svg" alt="" />
              </a>
              <a :href="member.github" class="icon-github" v-if="member.github">
                <img src="/img/logo_github_white.svg" alt="" />
              </a>
            </div>
            <div class="item-covered">
              <span>{{ $t(member.comment) }}</span>
            </div>
          </div>
        </transition-group>
        <div class="contents-item fake"></div>
        <div class="contents-item fake"></div>
        <div class="contents-item fake"></div>
        <div class="contents-item fake"></div>
        <div class="contents-item fake"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { ref, computed, reactive } from 'vue'
const { locale } = useI18n()
import timelineItem from '/Constants/timeline'
const leftItem = ref(
  computed(() => {
    return timelineItem.filter((item, index) => {
      return index % 2 === 1
    })
  })
)
const rightItem = ref(
  computed(() => {
    return timelineItem.filter((item, index) => {
      return index % 2 === 0
    })
  })
)

const currentTab = ref('all')
const toggleTab = (idx) => {
  currentTab.value = idx
}

const memberList = reactive([
  {
    name: 'main.team.name.sbj',
    title: 'main.team.job.sbj',
    comment: 'main.team.comment.sbj',
    img: 'sbj',
    team: 'product',
    linkedin: 'https://www.linkedin.com/in/bongjai-shin-0bb85346/',
  },
  {
    name: 'main.team.name.jgh',
    title: 'main.team.job.jgh',
    comment: 'main.team.comment.jgh',
    img: 'jgh',
    team: 'it',
    linkedin: 'https://www.linkedin.com/in/gahye-jeong-phd-300859132',
  },
  {
    name: 'main.team.name.lh',
    title: 'main.team.job.lh',
    comment: 'main.team.comment.lh',
    img: 'lh',
    team: 'it',
  },
  {
    name: 'main.team.name.kyj',
    title: 'main.team.job.kyj',
    comment: 'main.team.comment.kyj',
    img: 'kyj',
    team: 'product',
  },
  {
    name: 'main.team.name.ysh',
    title: 'main.team.job.ysh',
    comment: 'main.team.comment.ysh',
    img: 'ysh',
    team: 'it',
  },
  {
    name: 'main.team.name.obg',
    title: 'main.team.job.obg',
    comment: 'main.team.comment.obg',
    img: 'obg',
    team: 'it',
    linkedin: 'https://www.linkedin.com/in/beomgyo-oh-abb9201a5/',
    // github: 'https://github.com/Coldsewoo/',
  },
  {
    name: 'main.team.name.lsh',
    title: 'main.team.job.lsh',
    comment: 'main.team.comment.lsh',
    img: 'lsh',
    team: 'product',
  },
  {
    name: 'main.team.name.kdh',
    title: 'main.team.job.kdh',
    comment: 'main.team.comment.kdh',
    img: 'kdh',
    team: 'product',
  },
  {
    name: 'main.team.name.bsh',
    title: 'main.team.job.bsh',
    comment: 'main.team.comment.bsh',
    img: 'bsh',
    team: 'it',
  },
  {
    name: 'main.team.name.psm',
    title: 'main.team.job.psm',
    comment: 'main.team.comment.psm',
    img: 'psm',
    team: 'marketing',
  },
  {
    name: 'main.team.name.ngsa',
    title: 'main.team.job.ngsa',
    comment: 'main.team.comment.ngsa',
    img: 'ngsa',
    team: 'it',
  },
  {
    name: 'main.team.name.psj',
    title: 'main.team.job.psj',
    comment: 'main.team.comment.psj',
    img: 'psj',
    team: 'product',
  },
  {
    name: 'main.team.name.ksh',
    title: 'main.team.job.ksh',
    comment: 'main.team.comment.ksh',
    img: 'ksh',
    team: 'product',
  },
])

const filteredMember = computed(() => {
  if (currentTab.value === 'all') return memberList
  return memberList.filter((f) => f.team === currentTab.value)
})

import { useMeta } from 'vue-meta'
const { meta } = useMeta({
  title: '회사소개 | 제너레잇',
  description:
    '제너레잇은 건축, 인공지능, 소프트웨어 분야에서 최고의 전문가들로 이루어진 팀입니다. 산업에 대한 통찰력과 최고의 기술력으로 전세계에서 유일하게 부동산 개발수익을 극대화하는 솔루션을 제공하고 있습니다.',
  htmlAttrs: { lang: 'ko' },
  link: [{ rel: 'canonical', href: 'https://zenerate.ai/kr/main/about' }],
  og: {
    url: 'https://zenerate.ai/kr/main/about',
    type: 'website',
    title: '회사소개 | 제너레잇',
    description: `제너레잇은 건축, 인공지능, 소프트웨어 분야에서 최고의 전문가들로 이루어진 팀입니다. 산업에 대한 통찰력과 최고의 기술력으로 전세계에서 유일하게 부동산 개발수익을 극대화하는 솔루션을 제공하고 있습니다.`,
    tags: '제너레잇',
    keywords: '제너레잇',
    image: 'https://zenerate.ai/img/logo_og.png',
  },
  twitter: {
    title: '회사소개 | 제너레잇',
  },
})
</script>
<style lang="scss" scoped>
.section-about {
  padding: 80px 0px 0px;

  @include mobile {
    padding: 40px 0px;
  }
  .about-animation-wrapper {
    width: 100%;
    img {
      width: 100%;
      object-fit: contain;
    }
    @include mobile {
      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
  }
  .about-wrapper {
    text-align: center;
    margin-bottom: 140px;
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
      @include mobile {
        margin-bottom: 40px;
        @include flex($justify: center);
        flex-wrap: wrap;
        @include bold(24);
      }
      @include tablet {
        @include flex($justify: center);
        flex-wrap: wrap;
        @include bold(32);
        line-height: 60px;
      }
      .colored {
        font-weight: $bold;
        color: $main;
      }
      &.tech-title {
        @include desktop {
          width: 70%;
          margin: 0px auto;
          margin-bottom: 40px;
        }
      }
    }
  }
  .about-overview-wrapper {
    width: 100%;
    margin: 0 auto;
    @include desktop {
      padding: 56px 0px 140px 0px;
      width: 496px;
      &.en {
        width: 650px;
      }
    }
    @include tablet {
      padding: 56px 56px 140px 56px;
    }
    @include mobile {
      padding: 24px 48px;
      margin-bottom: 96px;
    }

    .overview-title {
      margin-bottom: 40px;
      text-align: center;
      @include desktop {
        @include flex($justify: center);
        flex-wrap: wrap;
      }
      @include tablet {
        @include flex($justify: center);
        flex-wrap: wrap;
      }
      span {
        @include tablet {
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
      @include mobile {
        width: 100%;
      }
      margin: 0px auto;
      text-align: center;
      margin-bottom: 32px;
      p {
        &:last-child {
          padding-top: 24px;
        }
        &.en {
          &:last-child {
            padding-top: 0px;
          }
        }
        @include desktop {
          margin-bottom: 8px;
          @include medium(20);
        }
        @include tablet {
          margin-bottom: 4px;
          @include medium(16);
        }
        @include mobile {
          margin-bottom: 4px;
          @include medium(14);
          &:last-child {
            padding-top: 14px;
          }
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
      @include tablet {
        width: 80%;
        margin: 0 auto;
        @include flex($justify: space-around);
      }
      @include mobile {
        width: 100%;
        @include flex($justify: space-around);
      }
      .mission-content {
        width: 216px;
        margin: 0 30px;
        // @include flex($dir: column);
        @include medium(20);
        .mission-content-up {
          height: 130px;
          padding-bottom: 24px;
          color: rgba($black-1, 0.4);
          @include vertical-center;
        }
        .mission-content-arrow {
          font-size: 24px;
          font-weight: 200;
          transform: scaleY(1.15);
          color: $main;
        }
        .mission-content-down {
          // font-weight: $bold;
          padding-top: 24px;
          @include vertical-center;
        }
        @include tablet {
          width: 160px;
          margin: 0;
          @include medium(16);
        }
        @include mobile {
          width: 120px;
          margin: 0;
          @include medium(14);
          .mission-content-up {
            padding-bottom: 30px;
            color: rgba($black-1, 0.4);
          }
          .mission-content-down {
            padding-top: 30px;
          }
        }
      }
    }
  }
  .about-tech-wrapper {
    .tech-content-wrapper {
      width: 768px;
      margin: 0 auto;
      @include tablet {
        width: 80%;
      }
      @include mobile {
        width: 100%;
      }
      .tech-content {
        @include flex();
        margin-bottom: 48px;
        @include tablet {
          width: 100%;
        }
        @include mobile {
          width: 100%;
        }
        img {
          width: 124px;
          margin-right: 28px;
          object-fit: contain;
          @include tablet {
            width: 124px;
            object-fit: contain;
            margin-right: 24px;
          }
          @include mobile {
            width: 100px;
            object-fit: contain;
            margin-right: 24px;
          }
        }
        .content-block {
          text-align: left;
          width: calc(100% - 152px);
          @include tablet {
            width: calc(100% - 148px);
          }
          @include mobile {
            width: calc(100% - 124px);
          }
          .tech-content-title {
            @include bold(28);
            margin-bottom: 12px;
          }
          .tech-content-content {
            @include medium(16);
          }
          @include tablet {
            .tech-content-title {
              @include bold(20);
              margin-bottom: 8px;
            }
            .tech-content-content {
              @include medium(16);
            }
          }
          @include mobile {
            .tech-content-title {
              @include bold(14);
              margin-bottom: 8px;
            }
            .tech-content-content {
              @include medium(12);
            }
          }
        }
      }
    }
  }
  .about-partner-wrapper {
    @include tablet {
      width: 80%;
      margin: 0 auto 140px auto;
    }
    .partner-title {
      span {
        margin-right: 10px;
        &:nth-child(2) {
          margin-right: 0px;
        }
      }
    }
    .partner-explanation {
      @include medium(20);
      margin-bottom: 56px;
      @include tablet {
        @include medium(16);
      }
      @include mobile {
        @include medium(14);
        margin-bottom: 32px;
      }
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
          margin: 0 auto 12px auto;
          @include tablet {
            margin-bottom: 12px;
            @include bold(14);
            line-height: 32px;
          }
          @include mobile {
            margin-bottom: 12px;
            @include bold(14);
            line-height: 32px;
          }
        }
        .partner-image-group {
          div {
            @include tablet {
              display: inline;
            }
            @include mobile {
              display: inline;
            }
            img {
              width: 164px;
              margin: 0px 10px;
              @include mobile {
                width: 124px;
                margin: 0px 10px;
              }
            }
          }
          img {
            width: 164px;
            margin: 0px 10px;
            @include mobile {
              width: 124px;
              margin: 0px 10px;
            }
          }
        }
      }
    }
  }
  .about-timeline-wrapper {
    @include relative;
    width: 100%;
    padding: 0px 24px;
    padding-top: 0;
    margin-bottom: 108px;
    @include tablet {
      width: 80%;
      margin: 0 auto 108px auto;
    }
    @include mobile {
      padding: 0px 4px;
    }
    .timeline-title {
      @include tablet {
        margin-bottom: 60px;
      }
      span {
        margin-right: 10px;
      }
      span:nth-child(2) {
        margin: 0;
        &.en {
          margin-right: 10px;
        }
      }
      @include desktop {
        span:nth-child(1) {
          width: 100%;
        }
      }
    }
    .timeline-item-wrapper {
      position: relative;
      @include flex($justify: space-around);
      @include tablet {
      }
      .timeline-spacer-wrapper {
        @include absolute(top 0 left 50%);
        @include flex($dir: column);
        width: 96px;
        height: calc(100% + 50px);
        transform: translateX(-50%);
        .timeline-start {
          @include flex($dir: column, $justify: space-around);
          height: 200px;
          margin-bottom: 10px;
          @include mobile {
            display: none;
          }
          p {
            @include bold(40);
            color: #b9caff;
            &:first-child {
              color: #d6e4ff;
            }
            &:last-child {
              color: #8097ff;
            }
            @include tablet {
              @include bold(32);
            }
          }
        }
        .timeline-spacer {
          border-right: 1.5px solid $main;
          transform: translateX(-50%);
          margin: 0 auto;
          width: 1px;
          height: 100%;
          flex: 1;
          @include mobile {
            display: none;
          }
          &::after {
            display: block;
            position: absolute;
            bottom: 0;
            content: '';
            border-right: 1.5px solid $main;
            width: 100%;
            height: 50px;
            transform: translate(18px, 11%) rotate(45deg);
            @include tablet {
              height: 30px;
              transform: translate(10px, 11%) rotate(45deg);
            }
          }
        }
        .timeline-end {
          color: $main;
          padding-top: 24px;
          @include bold(40);
          @include tablet {
            @include bold(32);
          }
          @include mobile {
            display: none;
          }
        }
      }
      .timeline-left-wrapper {
        @include desktop {
          padding-top: 70px;
        }
        @include tablet {
          padding-top: 80px;
        }
      }
      .timeline-left-wrapper,
      .timeline-right-wrapper {
        .timeline-item {
          position: relative;
          .content {
            padding: 12px 12px;
            margin-bottom: 45px;
            width: 288px;
            padding-top: 0px;
            position: relative;
            border-radius: 12px;
            text-align: center;
            @include elevation-box-grey;
            .item-year {
              @include medium(10);
              color: rgba($black-1, 0.4);
              line-height: 48px;
            }
            p {
              @include medium(16);
            }
            @include tablet {
              width: 200px;
              p {
                @include medium(14);
              }
            }
          }

          &.left {
            .content {
              .item-year {
                text-align: right;
              }
              p {
                text-align: right;
              }
            }
            &.content {
              margin-left: auto;
              padding-left: 64px;
            }

            @include tablet {
              padding-right: 32px;
              &::before {
                width: 32px;
              }
            }
          }

          &.right {
            .content {
              .item-year {
                text-align: left;
              }
              p {
                text-align: left;
              }
            }
            &::after {
              left: -16px;
            }
            & .content {
              margin-right: auto;
            }
            padding-left: 60px;
            @include tablet {
              padding-left: 32px;
              &::before {
                width: 32px;
              }
            }
          }
        }
      }
      @include mobile {
        .timeline-item-mobile-wrapper {
          .timeline-item {
            position: relative;
            .content {
              width: 248px;
              height: 100%;
              padding: 16px;
              border-radius: 12px;
              margin-bottom: 20px;
              @include elevation-box-grey;
              .item-year {
                color: rgba($black-1, 0.4);
                @include medium(10);
              }
              p {
                @include medium(12);
              }
              i {
                margin-top: 6px;
                color: rgba($main, 0.4);
              }
            }
            &.left {
              position: relative;
              left: 20%;
            }
            &.right {
              left: -20%;
            }
          }
        }
      }
    }
  }
}
.section-team {
  padding: 104px 0px 80px 0px;
  .team-image {
    width: 100%;
    overflow: hidden;
    margin-bottom: 24px;
    text-align: center;
    background-size: cover;
    background-position: center;
    @include desktop {
      height: 500px;
    }
    @include tablet {
      height: 380px;
    }
    @include mobile {
      height: 240px;
    }
  }
  .team-contents {
    .contents-title {
      @include bold(40);
      margin-bottom: 32px;
      text-align: center;
      @include tablet {
        @include bold(32);
      }
      @include mobile {
        @include bold(24);
      }
    }
    .contents-tab-wrapper {
      margin-bottom: 40px;
      @include flex;
      .contents-tab {
        width: 100px;
        text-align: center;
        @include medium(15);
        &.active {
          font-weight: $bold;
          border-bottom: solid 4px $main;
          padding-bottom: 8px;
        }
        @include mobile {
          width: 60px;
          font-size: 12px;
        }
      }
      .horizontal-spacer {
        width: 1px;
        height: 24px;
        background-color: $black;
        margin: 0px 16px;
        @include mobile {
          margin: 0px 8px;
        }
      }
    }
    .contents-item-wrapper {
      @include flex($justify: space-evenly);
      border-radius: 24px;
      .contents-item {
        @include relative;
        background-color: #fafafa;
        text-align: center;
        margin-bottom: 28px;
        padding: 24px;
        border-radius: 24px;
        // @include border-set(2px, #dcdcdc, 24px);
        @include desktop {
          width: 380px;
          height: 380px;
          // @include vertical-center();
        }

        @include tablet {
          width: 310px;
          height: 310px;
        }
        @include mobile {
          @include vertical-center();
          width: 270px;
          height: 270px;
        }
        &.fake {
          height: 0px;
          border: none;
          margin: 0;
          padding: 0;
        }
        .item-image {
          margin: 0px auto;
          margin-bottom: 8px;

          @include desktop {
            width: 124px;
            height: 124px;
            margin-top: 38px;
            margin-bottom: 16px;
          }

          @include tablet {
            width: 124px;
            height: 124px;
            margin-top: 8px;
            margin-bottom: 4px;
          }

          @include mobile {
            width: 124px;
            height: 124px;
            margin-bottom: 4px;
          }

          img {
            width: 100%;
            height: 100%;
          }
        }
        .item-name {
          @include bold(24);
          margin-bottom: 8px;
          @include mobile {
            font-size: 16px;
          }
        }
        .item-desc {
          @include medium(15);
          color: rgba($black, 0.5);
          margin-bottom: 20px;
          @include tablet {
            margin-bottom: 8px;
          }
          @include mobile {
            font-size: 11px;
            margin-bottom: 8px;
          }
        }
        .item-covered {
          @include absolute(left 0 top 0);
          width: 100%;
          height: 100%;
          border-radius: 20px;
          background: rgba($black, 0.4);
          z-index: 4;
          padding: 0px 48px;
          @include vertical-center;
          @include medium(24);
          color: $white;
          @include mobile {
            font-size: 18px;
          }
        }
        .item-icons {
          @include relative;
          z-index: 5;
          a {
            img {
              width: 32px;
              height: 32px;
              @include mobile {
                width: 24px;
                height: 24px;
              }
            }
          }
        }
        .plain {
          display: block;
        }
        .hovered {
          display: none;
        }
        .item-covered {
          opacity: 0;
        }
        &:hover {
          .plain {
            display: none;
          }
          .hovered {
            display: block;
          }
          .item-covered {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
