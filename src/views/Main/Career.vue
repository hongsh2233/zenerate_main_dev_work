<template>
  <section class="section-career">
    <div class="career-title-wrapper">
      <div class="career-title">
        <span>{{ $t('main.career.title') }}</span>
      </div>
      <div class="career-title-explanation">
        글로벌 스타트업 제너레잇과 건축 설계 자동화를 이끌어 갈 인재분들의 많은
        지원을 기다립니다!
      </div>
    </div>
    <CareerList></CareerList>
  </section>
</template>
<script lang="ts" setup>
// @ts-ignore
import CareerList from '/Components/Module/CareerList.vue'
import { onMounted, ref, computed } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import ApiService from '/Services/api'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}
</script>

<style lang="scss" scoped>

.section-career {
  padding: 80px 0px;
  @include desktop {
    padding: 80px 40px;
  }
  @include relative;
  .career-title-wrapper {
    @include flex($dir: column);
    margin-bottom: 48px;
    @include tablet {
      margin-bottom: 32px;
    }
    @include mobile {
      margin-bottom: 32px;
    }
    .career-title {
      margin-bottom: 20px;
      span {
        @include bold(40);
        line-height: 60px;
      }
      @include tablet {
        span {
          @include bold(32);
        }
        margin-bottom: 20px;
      }
      @include mobile {
        span {
          @include bold(32);
        }
        margin-bottom: 20px;
      }
    }
    .career-title-explanation {
      color: rgba($black-1, 0.4);
      @include medium(20);
      @include tablet {
        @include medium(16);
      }
      @include mobile {
        @include medium(14);
      }
    }
    // .career-category-wrapper {
    //   @include center-center;
    //   button {
    //     @include bold(16);
    //     line-height: 40px;
    //     background-color: rgba($grey-3, 0.5);
    //     padding: 4px 20px;
    //     margin-right: 28px;
    //     border-radius: 100px;
    //     &:hover {
    //       background-color: $grey-3;
    //     }
    //   }
    // }
  }
}
</style>
