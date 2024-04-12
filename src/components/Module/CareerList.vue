<template>
  <div class="career-list-wrapper" v-if="locale != 'en'">
    <transition-group name="fade" mode="out-in">
      <CareerContent v-if="route.name === 'CareerContent'"></CareerContent>
      <div class="career-list" v-else>
        <template v-for="(job, idx) in CAREER_LIST" :key="job.key">
          <div class="career-item">
            <div
              class="item-title hover-pointer"
              @click="() => selectCareer(job.key)"
            >
              {{ job.title }}
              <div class="arrow-right"></div>
            </div>
          </div>
        </template>
      </div>
    </transition-group>
  </div>
</template>
<script setup>
import CareerContent from './CareerContent.vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
const { locale } = useI18n()
const route = useRoute()
const router = useRouter()

const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}

const selectCareer = (key) => {
  router.push(`/kr/main/career/${key}`)
  scrollTop()
}

const CAREER_LIST = [
  // { key: 'urban-data-analyst', title: 'Urban Data Analyst' },
  // { key: 'computational-designer-a', title: '컴퓨테이셔널 디자이너 - A' },
  // { key: 'computational-designer-b', title: '컴퓨테이셔널 디자이너 - B' },
  // { key: 'frontend-developer', title: '프론트엔드 개발자 (경력)' },
  // { key: 'backend-developer', title: '백엔드 개발자 (경력)' },
  // { key: 'data-analyst', title: '데이터 분석' },
  // { key: 'management-support', title: '경영 지원' },
]
</script>
<style lang="scss" scoped>
.career-list-wrapper {
  .career-list {
    @include flex($dir: column, $justify: space-between);
    .career-item {
      height: 130px;
      padding-bottom: 20px;
      .item-date {
        @include medium(12);
        @include vertical-center;
        height: 40px;
        color: $main;
        padding-top: 40px;
        margin-bottom: 16px;
      }
      .item-title {
        @include medium(20);
        line-height: 40px;
        @include tablet {
          @include medium(18);
        }
        @include mobile {
          @include medium(18);
        }
        &:hover {
          color: $main;
          .arrow-right {
            border-top-color: $main;
            &::after {
              background-color: $main;
            }
          }
        }
        .arrow-right {
          width: 100%;
          height: 5px;
          border-top: 1px solid $grey-3;
          margin-top: 20px;
          margin-bottom: 30px;
          transform: rotate(180deg);
          @include tablet {
            margin-top: 15px;
          }
          @include mobile {
            margin-top: 15px;
          }
          &::after {
            content: '';
            display: block;
            width: 1px;
            height: 45px;
            background-color: $grey-3;
            transform: rotate(-45deg) translate(15px, 4px);
          }
        }
      }
    }
  }
}
</style>
