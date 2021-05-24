<template>
  <div class="module-column-wrapper module-item-wrapper">
    <div class="column-inner">
      <div class="column-thumb">
        <img src="/img/main_left.jpg" alt="" class="thumb" />
      </div>
      <div class="column-title">
        <div class="title-caption caption-large">
          {{ $t('module.column.caption') }}
        </div>
        <div class="title-text">
          <a
            href="https://zenerate.medium.com/it-%EA%B8%B0%EB%B0%98-%EB%B6%80%EB%8F%99%EC%82%B0-%EC%86%94%EB%A3%A8%EC%85%98%EC%9D%98-%ED%98%84%EC%9E%AC-3bcff2e490cf"
            target="_blank"
          >
            {{ $t('module.column.title') }}
          </a>
        </div>
        <div class="title-detail">
          {{ $t('module.column.contents[0]') }}
        </div>
      </div>
      <div class="column-insight">
        <div class="insight-caption caption-large">
          {{ $t('module.column.insight') }}
        </div>
        <div class="spacer"></div>
        <div class="insight-date">August - December 2020</div>
        <div class="insight-items-wrapper">
          <a
            class="insight-item"
            v-for="blog in sortedBlogList"
            :key="blog.guid"
            target="_blank"
            :href="blog.link"
          >
            <span class="item-title">{{ blog.title }}</span>
            <span class="item-date">{{
              $d(new Date(blog.pubDate), 'short')
            }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import ApiService from '/Services/api'

const blogList = ref([])
const sortedBlogList = computed(() => {
  return blogList.value.slice(0, 5)
})

onMounted(async () => {
  const getBlogListRes = await ApiService.GET_RSS_FEED()
  blogList.value = getBlogListRes.data.body.data.items
  console.log(blogList.value)
})
</script>
<style lang="scss" scoped>
.column-inner {
  width: 100%;
  height: 100%;
  @include flex($dir: column);
  @include desktop {
    padding-right: 24px;
  }
  @include tablet {
    padding-right: 12px;
    padding-bottom: 56px;
  }
  .column-thumb {
    @include desktop {
      height: 670px;
    }
    width: 100%;
    overflow: hidden;
    margin-bottom: 24px;
    text-align: center;
    .thumb {
      margin: 0px auto;
      @include desktop {
        height: 670px;
      }
      @include tablet {
        height: 436px;
      }
      @include mobile {
        height: 450px;
      }
    }
  }
  .column-title {
    width: 100%;
    @include desktop {
      margin-bottom: 24px;
    }
    @include tablet {
      margin-bottom: 16px;
    }
    @include mobile {
      margin-bottom: 36px;
    }
    .title-caption {
      color: $main;
      @include desktop {
        margin-bottom: 24px;
      }
      @include tablet {
        @include bold(16);
      }
      @include mobile {
        @include bold(16);
      }
      margin-bottom: 12px;
    }
    .title-text {
      margin-bottom: 24px;
      @include desktop {
        padding-right: 12px;
        @include bold(48);
      }
      @include tablet {
        @include bold(40);
      }
      @include mobile {
        @include bold(24);
      }
    }
    .title-detail {
      @include desktop {
        @include medium(20);
      }
      @include tablet {
        @include medium(20);
      }
      @include mobile {
        @include medium(20);
      }
    }
  }
  .column-insight {
    width: 100%;
    margin-top: auto;
    @include flex($dir: column, $justify: flex-end);
    @include desktop {
      height: 315px;
    }

    .insight-caption {
      color: $main;
    }

    .insight-date {
      @include medium(15);
      color: $grey-2;
      margin-bottom: 28px;
    }
    .insight-items-wrapper {
      padding-right: 8px;
      .insight-item {
        @include flex($justify: space-between);
        .item-title {
          @include medium(16);
          @include mobile {
            @include medium(14);
          }
          margin-bottom: 8px;
        }
        .item-date {
          vertical-align: middle;
          @include medium(14);
          @include mobile {
            @include medium(12);
          }
        }
      }
    }
  }
}
</style>
