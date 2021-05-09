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
          {{ $t('module.column.title') }}
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
          <div class="insight-item">
            <span class="item-title">-싹다 망할거라던 공유오피스</span>
            <span class="item-date">Nov 02</span>
          </div>
          <div class="insight-item">
            <span class="item-title">-싹다 망할거라던 공유오피스</span>
            <span class="item-date">Nov 02</span>
          </div>
          <div class="insight-item">
            <span class="item-title">-싹다 망할거라던 공유오피스</span>
            <span class="item-date">Nov 02</span>
          </div>
          <div class="insight-item">
            <span class="item-title">-싹다 망할거라던 공유오피스</span>
            <span class="item-date">Nov 02</span>
          </div>
          <div class="insight-item">
            <span class="item-title">-싹다 망할거라던 공유오피스</span>
            <span class="item-date">Nov 02</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" script></script>
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
    padding-bottom: 41px;
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
          @include medium(20);
          @include mobile {
            @include medium(15);
          }
          margin-bottom: 8px;
        }
        .item-date {
          @include medium(20);
          @include mobile {
            @include medium(15);
          }
        }
      }
    }
  }
}
</style>
