<template>
  <div class="module-fold-wrapper module-item-wrapper">
    <div class="fold-inner">
      <div
        class="fold-company fold-item company"
        @click="toggleFold(1)"
        :class="{ active: currentFold === 1 }"
      >
        <div class="fold-title hover-pointer">
          <span class="title-number">01</span>
          <span class="title-text">{{
            $t('module.fold.company.category')
          }}</span>
        </div>
        <FoldCompany
          :active="currentFold === 1"
          :classProp="`hidden-tablet hidden-mobile`"
        />
      </div>
      <div
        class="fold-news fold-item news"
        @click="toggleFold(2)"
        :class="{ active: currentFold === 2 }"
      >
        <div class="fold-title hover-pointer">
          <span class="title-number">02</span>
          <span class="title-text">{{ $t('module.fold.news.category') }}</span>
        </div>
        <FoldNews
          :active="currentFold === 2"
          :classProp="`hidden-tablet hidden-mobile`"
        />
      </div>

      <div
        class="fold-program fold-item program colored"
        @click="toggleFold(3)"
        :class="{ active: currentFold === 3 }"
      >
        <div class="fold-title program hover-pointer">
          <span class="title-number">03</span>
          <span class="title-text">{{
            $t('module.fold.program.category')
          }}</span>
        </div>
        <FoldProgram
          :active="currentFold === 3"
          :classProp="`hidden-tablet hidden-mobile`"
        />
      </div>
      <div
        class="fold-contact fold-item contact"
        @click="toggleFold(4)"
        :class="{ active: currentFold === 4 }"
      >
        <div class="fold-title hover-pointer">
          <span class="title-number">04</span>
          <span class="title-text">{{
            $t('module.fold.contact.category')
          }}</span>
        </div>
        <FoldContact
          :active="currentFold === 4"
          :classProp="`hidden-tablet hidden-mobile`"
        />
      </div>
      <component
        :is="currentComponent"
        :active="true"
        :classProp="'hidden-desktop'"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
// @ts-ignore
import FoldCompany from '/Components/Module/FoldCompany.vue'
// @ts-ignore
import FoldNews from '/Components/Module/FoldNews.vue'
// @ts-ignore
import FoldProgram from '/Components/Module/FoldProgram.vue'
// @ts-ignore
import FoldContact from '/Components/Module/FoldContact.vue'

import { ref, nextTick, computed } from 'vue'
const currentFold = ref(1)
const toggleFold = (idx) => {
  console.log(idx)
  currentFold.value = idx
}

const currentComponent = computed(() => {
  switch (currentFold.value) {
    case 1:
      return FoldCompany
      break
    case 2:
      return FoldNews
      break
    case 3:
      return FoldProgram
      break
    case 4:
      return FoldContact
      break
    default:
      return FoldCompany
      break
  }
})
</script>
<style lang="scss">
@import '../../assets/scss/variables.scss';
.fold-inner {
  overflow: hidden;
  width: 100%;
  height: 612px;
  padding-top: 24px;
  @include relative;
  @include flex();
  @include tablet {
    height: 100%;
  }
  @include mobile {
    height: 680px;
  }
  .fold-item {
    height: 100%;
    transition: all 0.5s ease;
    @include desktop {
      width: 88px;
      @include flex;
      flex-wrap: nowrap;
      &.active,
      &:first-child ~ &:last-child {
        width: 895px;
      }
    }
    @include tablet {
      width: 25%;
      height: 280px;
    }
    @include mobile {
      width: 25%;
      height: 176px;
    }
    .fold-title {
      height: 100%;
      width: 88px;
      @include tablet {
        width: 100%;
        padding: 24px;
      }
      @include mobile {
        width: 100%;
        padding: 12px;
      }
      overflow-x: hidden;
      @include flex($dir: column, $justify: space-between);
      text-align: center;
      span {
        color: white;
        @include desktop {
          @include medium(24);
        }
        @include tablet {
          @include bold(24);
        }
        @include mobile {
          @include bold(14);
        }
      }
      .title-number {
        @include desktop {
          @include bold(16);
          padding-top: 36px;
        }
        @include tablet {
          @include bold(32);
        }
        @include mobile {
          @include bold(14);
        }
      }
      .title-text {
        @include prefix(writing-mode, vertical-rl);
        @include prefix(text-orientation, sideways);
        @include prefix(transform, rotate(180deg));
        @include vertical-center;
        @include desktop {
          padding-top: 36px;
        }
      }
    }
  }
  .content-item {
    @include desktop {
      height: 100%;
      width: 935px;
      padding: 36px;
    }
    @include tablet {
      width: 100%;
      padding: 24px;
      @include absolute(left 0 top 304px);
      height: 580px;
    }
    @include mobile {
      width: 100%;
      padding: 12px;
      @include absolute(left 0 top 200px);
      height: 500px;
    }

    &.program .item-header .header-item.active {
      color: $main-4;
    }

    &.contact .item-header .header-item.active {
      color: $main;
    }
    .item-header {
      @include flex($justify: space-between);
      padding-right: 24px;
      margin-left: 85px;
      @include bold(20);
      @include tablet {
        margin-top: 24px;
        margin-left: 48px;
        width: 100%;
      }
      @include mobile {
        @include bold(14);
        margin-left: 0px;
        margin-top: 16px;
      }
      .header-item {
        &.fake {
          height: 0;
          margin: 0;
          border: none;
        }
        padding: 0px 16px;
        transition: color 0.3s ease;
        color: rgba(white, 50%);
        &.active {
          color: rgba(white, 1);
        }
      }

      @include desktop {
        margin-bottom: 64px;
      }
    }
    .item-content {
      padding-left: 16px;
      width: 100%;
      margin-top: 60px;
      @include tablet {
        padding: 0px 48px;
        width: 100%;
      }
      @include mobile {
        margin-top: 30px;
        padding-left: 0px;
      }
    }
    .intro {
      @include flex($justify: space-between);
      .content-left {
        flex: 1;
        margin-left: 85px;
        @include mobile {
          margin-right: 16px;
          margin-left: 16px;
          margin-bottom: 10px;
        }
        @include tablet {
          margin-left: 16px;
        }
        .left-title {
          @include bold(28);
          color: white;
          margin-bottom: 8px;
          @include mobile {
            @include bold(14);
          }
        }
        .left-subtitle {
          @include medium(24);
          color: white;
          margin-bottom: 40px;
          @include mobile {
            @include bold(14);
          }
        }
        .left-content {
          @include medium(20);
          color: white;
          @include desktop {
            width: 552px;
          }
          @include mobile {
            @include medium(12);
          }
          &.en {
            font-size: 20px;
            @include mobile {
              font-size: 12px;
            }
          }
        }
      }
    }
    .timeline {
      margin-top: 80px;
      @include tablet {
        width: 100%;
      }
      .timeline-item {
        margin-left: 85px;
        margin-bottom: 4px;
        @include flex;
        color: white;
        @include medium(24);
        @include mobile {
          @include medium(12);
          margin-left: 16px;
          margin-right: 16px;
        }
        @include tablet {
          margin-left: 16px;
        }
        .item-date {
          margin-right: 12px;
          width: 120px;
          @include mobile {
            width: 60px;
          }
        }
        .item-content {
          margin-top: 0;
          flex: 1;
          word-break: break-all;
        }
      }
    }
    .team {
      margin-top: 80px;
      .team-item {
        @include flex;
        margin-left: 85px;
        @include mobile {
          margin-left: 16px;
          margin-right: 16px;
        }
        @include tablet {
          margin-left: 16px;
        }
        .item-desc {
          width: 220px;
          @include bold(24);
          color: white;
          margin-bottom: 24px;
          @include mobile {
            @include bold(12);
            width: 100px;
          }
        }
        .item-work {
          flex: 1;
          color: white;
          @include medium(24);
          @include mobile {
            text-align: right;
            @include medium(12);
          }
        }
      }
    }
    .news {
      margin-left: 85px;
      padding-right: 48px;
      @include desktop {
        width: auto;
      }
      @include mobile {
        padding-right: 24px;
        margin-left: 16px;
      }
      @include tablet {
        margin-left: 16px;
      }
      .news-title {
        @include bold(28);
        margin-bottom: 8px;
        color: white;
        @include mobile {
          @include bold(14);
        }
      }
      .news-date {
        color: white;
        margin-bottom: 24px;
        @include medium(16);
        @include mobile {
          @include medium(14);
        }
      }
      .news-content {
        color: white;
        @include medium(20);
        @include mobile {
          @include medium(12);
        }
      }
    }
    .program {
      padding-right: 48px;
      margin-left: 85px;
      width: 552px;
      @include mobile {
        padding-right: 24px;
        margin-left: 16px;
        width: 100%;
      }
      @include tablet {
        margin-left: 16px;
        width: 100%;
      }
      color: $navy;
      .program-block {
        width: 100%;
        margin-bottom: 32px;
        .program-title {
          @include bold(28);
          margin-bottom: 32px;
          @include mobile {
            @include bold(16);
            margin-bottom: 16px;
          }
        }
        .block-title {
          @include medium(24);
          margin-bottom: 16px;
          @include mobile {
            @include bold(14);
            margin-bottom: 8px;
          }
        }
        .block-content {
          @include medium(20);
          margin-bottom: 20px;
          @include mobile {
            @include medium(12);
            margin-bottom: 16px;
          }
        }
      }
      hr {
        background-color: $main-4;
        height: 1px;
        border: transparent;
        margin-bottom: 20px;
      }
    }
    .contact {
      color: $main;
      margin-left: 85px;
      width: 100%;
      @include mobile {
        margin-left: 16px;
      }
      @include tablet {
        margin-left: 24px;
      }
      .contact-title {
        margin-bottom: 32px;
        @include mobile {
          margin-bottom: 16px;
        }
        p {
          @include bold(32);
          line-height: 60px;
          @include mobile {
            @include bold(28);
          }
        }
      }
      .contact-content {
        margin-bottom: 88px;
        @include mobile {
          margin-bottom: 44px;
        }
        p {
          @include medium(20);
          @include mobile {
            @include bold(14);
          }
        }
      }
      .contact-link {
        text-align: end;
        width: 100%;
        position: relative;
        @include desktop {
          width: 556px;
        }
        @include mobile {
          text-align: center;
          width: 90%;
        }
        button {
          position: absolute;
          right: 15px;
          z-index: 20;
          background: #d6e4ff;
          color: $main;
          margin-right: 20px;
          @include bold(14);
        }
        .vector-wrapper {
          z-index: 10;
          position: absolute;
          top: 10px;
          width: 100%;
          .arrow-right {
            z-index: 20;
            width: 100%;
            height: 5px;
            border-top: 1px solid $main;
            margin-top: 20px;
            margin-bottom: 30px;
            transform: rotate(180deg);
            &::after {
              content: '';
              display: block;
              width: 1px;
              height: 45px;
              background-color: $main;
              transform: rotate(-45deg) translate(15px, 4px);
            }
          }
          @include mobile {
          }
        }
      }
    }
  }
  .company {
    background: $main;
  }
  .news {
    background: #8097ff;
  }
  .program {
    background: #b9caff;
  }
  .contact {
    background: #d6e4ff;
  }
}
</style>
