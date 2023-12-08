<template>
  <section class="section-career">
    <div class="career-title-wrapper">
      <div class="career-title">
        <span>{{ $t('main.career.title') }}</span>
      </div>
      <div class="career-title-explanation">
        프롭테크 스타트업 '제너레잇'에서 부동산 개발 시장의 혁신을 이끌어나갈
        인재를 찾습니다.
      </div>
    </div>
    <CareerList></CareerList>
  </section>
</template>
<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import CareerList from '/Components/Module/CareerList.vue'

const { locale } = useI18n()
const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}

useHead({
  title: `채용 | 제너레잇`,
  htmlAttrs: { lang: 'ko' },
  link: [{ rel: 'canonical', href: 'https://www.zenerate.ai/kr/main/career' }],
  meta: [
    {
      name: `description`,
      content: `글로벌 프롭테크 스타트업 제너레잇과 부동산개발 산업을 함께 바꾸어 나갈 열정적인 인재를 채용합니다.`,
    },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: `채용 | 제너레잇`,
    },
    {
      hid: 'twitter:description',
      property: 'twitter:description',

      content: `글로벌 프롭테크 스타트업 제너레잇과 부동산개발 산업을 함께 바꾸어 나갈 열정적인 인재를 채용합니다.`,
    },
    { name: 'keywords', content: '제너레잇' },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://www.zenerate.ai/img/thumbnail.png',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://www.zenerate.ai/kr/main/career',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: `채용 | 제너레잇`,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: `글로벌 프롭테크 스타트업 제너레잇과 부동산개발 산업을 함께 바꾸어 나갈 열정적인 인재를 채용합니다.`,
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:image:url',
      property: 'og:image:url',
      content: 'https://www.zenerate.ai/img/thumbnail.png',
    },
    {
      hid: 'og:image:type',
      property: 'og:image:type',
      content: 'image/png',
    },
  ],
})
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
