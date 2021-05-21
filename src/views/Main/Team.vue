<template>
  <div class="section-team">
    <div
      class="team-image"
      :style="{ 'background-image': `url('/img/team_${currentTab}.jpg')` }"
    ></div>
    <div class="team-contents">
      <div class="contents-title">{{ $t('main.team.title') }}</div>
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
            class="contents-item hover-pointer"
            v-for="(member, idx) in filteredMember"
            :key="idx"
          >
            <div class="item-image noselect">
              <img :src="`/img/people/${member.img}.gif`" :alt="member.name" />
            </div>
            <div class="item-name">{{ $t(member.name) }}</div>
            <div class="item-desc">{{ $t(member.title) }}</div>
            <div class="item-covered">
              {{ $t(member.comment) }}
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
import { computed, reactive, ref } from 'vue'
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
  },
  {
    name: 'main.team.name.jgh',
    title: 'main.team.job.jgh',
    comment: 'main.team.comment.jgh',
    img: 'jgh',
    team: 'it',
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
  },
  {
    name: 'main.team.name.lsh',
    title: 'main.team.job.lsh',
    comment: 'main.team.comment.lsh',
    img: 'lsh',
    team: 'product',
  },
  {
    name: 'main.team.name.swj',
    title: 'main.team.job.swj',
    comment: 'main.team.comment.swj',
    img: 'swj',
    team: 'marketing',
  },
])

const filteredMember = computed(() => {
  if (currentTab.value === 'all') return memberList
  return memberList.filter((f) => f.team === currentTab.value)
})
</script>
<style lang="scss" scoped>
.section-team {
  padding: 24px 0px 80px 0px;
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
      height: 300px;
    }
    @include mobile {
      height: 200px;
    }
  }
  .team-contents {
    .contents-title {
      @include bold(32);
      margin-bottom: 24px;
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
        // @include border-set(2px, #dcdcdc, 24px);
        @include desktop {
          width: 380px;
          height: 380px;
        }

        @include tablet {
          width: 300px;
          height: 300px;
        }
        @include mobile {
          width: 240px;
          height: 240px;
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
            width: 200px;
            height: 200px;
          }

          @include tablet {
            width: 160px;
            height: 160px;
          }
          @include mobile {
            width: 124px;
            height: 124px;
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
            font-size: 18px;
          }
        }
        .item-desc {
          @include medium(15);
          color: rgba($black, 0.5);
          @include mobile {
            font-size: 12px;
          }
        }
        .item-covered {
          opacity: 0;
          @include absolute(left 0 top 0);
          width: 100%;
          height: 100%;
          border-radius: 20px;
          background: rgba($black, 0.6);
          z-index: 4;
          @include vertical-center;
          padding: 0px 24px;
          @include medium(24);
          color: $white;
          @include mobile {
            font-size: 18px;
          }
        }
        &:hover .item-covered {
          opacity: 1;
        }
      }
    }
  }
}
</style>
