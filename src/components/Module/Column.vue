<template>
  <div class="module-column-wrapper module-item-wrapper">
    <div class="column-inner">
      <div class="title-caption caption-large">
        {{ $t('module.column.caption') }}
      </div>
      <div class="column-thumb">
        <a
          href="https://zenerate.medium.com/it-%EA%B8%B0%EB%B0%98-%EB%B6%80%EB%8F%99%EC%82%B0-%EC%86%94%EB%A3%A8%EC%85%98%EC%9D%98-%ED%98%84%EC%9E%AC-3bcff2e490cf"
          class="href"
        >
          <img src="/img/main_left.jpg" alt="" class="thumb" />
        </a>
      </div>
      <div class="column-title">
        <div class="title-text">
          <a
            href="https://zenerate.medium.com/it-%EA%B8%B0%EB%B0%98-%EB%B6%80%EB%8F%99%EC%82%B0-%EC%86%94%EB%A3%A8%EC%85%98%EC%9D%98-%ED%98%84%EC%9E%AC-3bcff2e490cf"
            target="_blank"
          >
            <p>{{ $t('module.column.title[0]') }}</p>
            <p>{{ $t('module.column.title[1]') }}</p>
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
            <span class="item-date">{{ $d(blog.pubDate, 'short') }}</span>
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
  const isIOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/i)
  blogList.value = getBlogListRes.data.body.data.items.map((blog) => {
    // if (isIOS) {
    let arr = blog.pubDate.split(/[- :]/)
    blog.pubDate = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5])
    // } else {
    //   blog.pubDate = new Date(blog.pubDate)
    // }
    return blog
  })
})
</script>
<style lang="scss" scoped>
.column-inner {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .title-caption {
    line-height: 40px;
  }
  @include flex($dir: column);
  @include desktop {
  }
  @include tablet {
    padding-right: 12px;
    padding-bottom: 24px;
  }
  .column-thumb {
    @include desktop {
      width: 412px;
    }
    width: 100%;
    overflow: hidden;
    margin-bottom: 24px;
    text-align: left;
    .thumb {
      margin: 12px auto 0px auto;
      width: 100%;
      object-fit: contain;
      @include desktop {
        max-height: 312px;
        height: 312px;
      }
      @include tablet {
        max-height: 412px;
        height: auto;
      }
      @include mobile {
        max-height: 400px;
      }
    }
  }
  .column-title {
    width: 100%;
    @include desktop {
      margin-bottom: 80px;
    }
    @include tablet {
      margin-bottom: 16px;
      height: 360px;
    }
    @include mobile {
      margin-bottom: 36px;
    }
    .title-caption {
      color: $main;
      @include desktop {
        @include bold(16);
        margin-bottom: 24px;
      }
      @include tablet {
        @include bold(16);
      }
      @include mobile {
        @include bold(16);
      }
    }
    .title-text {
      margin-bottom: 40px;
      @include desktop {
        @include bold(28);
      }
      @include tablet {
        @include bold(28);
      }
      @include mobile {
        margin-bottom: 24px;
        @include bold(20);
      }
    }
    .title-detail {
      @include desktop {
        @include medium(16);
      }
      @include tablet {
        @include medium(16);
      }
      @include mobile {
        @include medium(12);
      }
    }
  }
  .column-insight {
    width: 100%;
    margin-top: auto;
    @include flex($dir: column, $justify: flex-start);
    @include desktop {
      height: 280px;
    }
    @include tablet {
      height: 240px;
    }

    .insight-caption {
      color: $main;
    }

    .insight-date {
      @include medium(12);
      color: rgba($black-1, 0.4);
      height: 48px;
      @include vertical-center;
    }
    .insight-items-wrapper {
      padding-right: 8px;
      width: 100%;
      .insight-item {
        width: 100%;
        @include flex($justify: space-between);
        .item-title {
          flex: 1;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          @include medium(16);
          @include mobile {
            @include medium(12);
          }
          margin-bottom: 4px;
        }
        .item-date {
          vertical-align: middle;
          @include medium(12);
          @include mobile {
            @include medium(12);
          }
        }
      }
    }
  }
}
</style>
