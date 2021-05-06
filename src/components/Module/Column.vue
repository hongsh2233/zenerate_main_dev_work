<template>
  <div class="module-column-wrapper module-item-wrapper">
    <div class="column-inner">
      <div class="column-thumb">
        <img src="/img/main_left.jpg" alt="" class="thumb" />
      </div>
      <div class="column-title">
        <div class="title-caption">칼럼 소식</div>
        <div class="title-text">
          [건축과 사회] 2020년 33호 제너레잇 인터뷰 기고!
        </div>
      </div>
      <div class="column-insight">
        <div class="insight-caption">인사이트</div>
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
  @include flex($dir: column, $justify: space-between);
  @include desktop {
    padding-right: 24px;
  }
  @include tablet {
    padding-right: 12px;
  }
  .column-thumb {
    flex: 3;
    margin-bottom: 24px;
    .thumb {
      max-width: 100%;
      margin: 0px auto;
      @include desktop {
        height: 670px;
      }
      @include tablet {
        height: 436px;
      }
    }
  }
  .column-title {
    flex: 2;
    width: 100%;
    @include desktop {
      margin-bottom: 24px;
    }
    @include tablet {
      margin-bottom: 16px;
    }
    .title-caption {
      color: $main;
      @include desktop {
        @include bold(24);
      }
      @include tablet {
        @include bold(16);
      }
      margin-bottom: 12px;
    }
    .title-text {
      @include desktop {
        @include bold(68);
      }
      @include tablet {
        @include bold(40);
      }
    }
  }
  .column-insight {
    flex: 2;
    width: 100%;
    margin-bottom: 48px;
    .insight-caption {
      color: $main;
      @include bold(24);
      margin-bottom: 12px;
    }
    .spacer {
      width: 100%;
      height: 0;
      border-bottom: solid 1px $main;
      margin: 8px 0px;
    }
    .insight-date {
      @include medium(24);
      color: $grey-2;
      margin-bottom: 16px;
    }
    .insight-items-wrapper {
      padding-right: 8px;
      .insight-item {
        @include flex($justify: space-between);
        .item-title {
          @include medium(20);
        }
        .item-date {
          @include medium(20);
        }
      }
    }
  }
}
</style>
