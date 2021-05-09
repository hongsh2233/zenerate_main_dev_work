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
        class="fold-news fold-item news hover-pointer"
        @click="toggleFold(2)"
        :class="{ active: currentFold === 2 }"
      >
        <div class="fold-title">
          <span class="title-number">02</span>
          <span class="title-text">{{ $t('module.fold.news.category') }}</span>
        </div>
        <FoldNews
          :active="currentFold === 2"
          :classProp="`hidden-tablet hidden-mobile`"
        />
      </div>

      <div
        class="fold-program fold-item program hover-pointer colored"
        @click="toggleFold(3)"
        :class="{ active: currentFold === 3 }"
      >
        <div class="fold-title program">
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
.fold-inner {
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding-top: 24px;
  @include relative;
  @include flex();
  .fold-item {
    height: 100%;
    transition: all 0.5s ease;
    @include desktop {
      width: 120px;
      @include flex;
      flex-wrap: nowrap;
      &.active,
      &:first-child ~ &:last-child {
        width: 807.1px;
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
      width: 119px;
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
          @include bold(32);
        }
        @include tablet {
          @include bold(24);
        }
        @include mobile {
          @include bold(15);
        }
      }
      .title-number {
        @include desktop {
          padding-top: 48px;
        }
        @include tablet {
          @include bold(32);
        }
        @include mobile {
          @include bold(24);
        }
      }
      .title-text {
        writing-mode: vertical-rl;
        text-orientation: sideways;
        transform: rotate(180deg);
        @include vertical-center;
        @include desktop {
          padding-top: 48px;
        }
      }
    }
  }
  .content-item {
    @include desktop {
      height: 100%;
      width: 688px;
      padding: 48px;
    }
    @include tablet {
      width: 100%;
      padding: 24px;
      @include absolute(left 0 top 304px);
      height: 600px;
    }
    @include mobile {
      width: 100%;
      padding: 12px;
      @include absolute(left 0 top 200px);
      height: 450px;
    }

    &.program .item-header .header-item.active {
      color: $navy;
    }

    &.contact .item-header .header-item.active {
      color: $main;
    }
    .item-header {
      @include flex($justify: space-between);
      padding-right: 24px;
      @include bold(32);
      @include tablet {
        margin-top: 24px;
      }
      @include mobile {
        @include bold(20);
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
      @include tablet {
        margin-top: 60px;
      }
      @include mobile {
        margin-top: 40px;
      }
    }
    .intro {
      @include flex($justify: space-between);
      .content-left {
        flex: 1;
        margin-right: 36px;
        @include mobile {
          margin-right: 8px;
        }
        .left-title {
          @include bold(24);
          color: white;
          margin-bottom: 24px;
          @include mobile {
            @include bold(15);
          }
        }
        .left-content {
          @include medium(24);
          color: white;
          @include mobile {
            @include medium(15);
          }
          &.en {
            font-size: 20px;
            @include mobile {
              font-size: 15px;
            }
          }
        }
      }
      .content-right {
        width: 121px;
        @include mobile {
          width: 63px;
        }
        .right-circle {
          width: 121px;
          height: 121px;
          @include border-set(1px, $white, 50%);
          @include flex;
          @include mobile {
            width: 63px;
            height: 63px;
            padding: 8px;
          }
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
          padding: 16px;
          text-align: center;
          span {
            @include bold(24);
            color: white;
            @include mobile {
              @include bold(15);
            }
          }
          &.en {
            span {
              font-size: 20px;
              @include mobile {
                font-size: 11px;
              }
            }
          }
        }
      }
    }
    .timeline {
      .timeline-item {
        margin-bottom: 4px;
        @include flex;
        color: white;
        @include medium(24);
        @include mobile {
          @include medium(15);
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
      .team-item {
        @include flex;
        .item-desc {
          width: 220px;
          @include bold(24);
          color: white;
          margin-bottom: 24px;
          @include mobile {
            @include bold(15);
            width: 160px;
          }
        }
        .item-work {
          flex: 1;
          color: white;
          @include medium(24);
          @include mobile {
            @include medium(15);
          }
        }
      }
    }
    .news {
      padding-right: 48px;
      @include mobile {
        padding-right: 24px;
      }
      .news-title {
        @include bold(24);
        margin-bottom: 24px;
        color: white;
        @include mobile {
          @include bold(15);
        }
      }
      .news-content {
        color: white;
        @include medium(24);
        @include mobile {
          @include medium(15);
        }
      }
    }
    .program {
      padding-right: 48px;
      @include mobile {
        padding-right: 24px;
      }
      color: $navy;
      .program-block {
        margin-bottom: 32px;
        .block-title {
          @include bold(24);
          margin-bottom: 24px;
          @include mobile {
            @include bold(15);
          }
        }
        .block-content {
          @include medium(24);
          @include mobile {
            @include medium(15);
          }
        }
      }
    }
    .contact {
      color: $main;
      .contact-title {
        margin-bottom: 32px;
        @include mobile {
          margin-botom: 16px;
        }
        p {
          @include bold(50);
          @include mobile {
            @include bold(32);
          }
        }
      }
      .contact-content {
        margin-bottom: 88px;
        @include mobile {
          margin-bottom: 44px;
        }
        p {
          @include medium(24);
          @include mobile {
            @include bold(20);
          }
        }
      }
      .contact-link {
        @include mobile {
          text-align: center;
        }
        button {
          width: 206px;
          height: 36px;
          border-radius: 20px;
          background: $main;
          color: $white;
          @include bold(15);
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
    background: #a3b4ff;
  }
  .contact {
    background: #d3dbff;
  }
}
</style>
