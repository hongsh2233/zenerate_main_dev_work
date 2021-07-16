<template>
  <div class="career-list-wrapper" v-if="locale != 'en'">
    <transition name="fade" mode="out-in">
      <CareerContent
        v-if="careerId != -1"
        @onSelect="(v) => (careerId = v)"
        :careerId="careerId"
      ></CareerContent>
    </transition>
    <transition name="fade" mode="out-in">
      <div class="career-list" v-if="careerId === -1">
        <div class="career-item">
          <!-- <div class="item-date">2021. 00. 00 ~ 2021. 00. 00</div> -->
          <div
            class="item-title hover-pointer"
            @click=";[(careerId = 0), scrollTop()]"
          >
            백엔드 개발자 (경력)
            <div class="arrow-right"></div>
          </div>
        </div>
        <div class="career-item">
          <!-- <div class="item-date">2021. 00. 00 ~ 2021. 00. 00</div> -->
          <div
            class="item-title hover-pointer"
            @click=";[(careerId = 1), scrollTop()]"
          >
            프론트엔드 개발자 (경력)
            <div class="arrow-right"></div>
          </div>
        </div>
        <div class="career-item">
          <!-- <div class="item-date">2021. 00. 00 ~ 2021. 00. 00</div> -->
          <div
            class="item-title hover-pointer"
            @click=";[(careerId = 2), scrollTop()]"
          >
            데이터 분석
            <div class="arrow-right"></div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
import CareerContent from './CareerContent.vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
import { ref } from 'vue'
const careerId = ref(-1)
console.log(careerId.value)
const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
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
