<template>
  <div class="layout-module">
    <Header />
    <div class="grid-item column"><Column></Column></div>
    <div class="grid-item news">news</div>
    <div class="grid-item team">team</div>
    <div class="grid-item explanation">explanation</div>
    <div class="grid-item consulting">consulting</div>
    <div class="grid-item fold">fold</div>
    <div class="grid-item monthly">monthly</div>
    <div class="grid-item program">program</div>
    <div class="grid-item partnership">partnership</div>
    <div class="grid-item youtube">youtube</div>
    <div class="grid-item footer">footer</div>
  </div>
</template>

<script setup lang="ts">
import ApiService from '/Services/api'
// @ts-ignore
import Header from '/Components/Header.vue'
// @ts-ignore
import Column from '/Components/Module/Column.vue'
</script>

<style lang="scss" scoped>
.layout-module {
  margin: 0px;
  width: 100%;
  /** layout setting */

  @include desktop {
    width: 1280px;
    margin: 0px auto;
    padding: 0px 24px;
    padding-top: 105px;
  }
  @include tablet {
    padding: 32px;
    padding-top: 61px;
  }
  @include mobile {
    padding: 28px;
    padding-top: 49px;
  }
  /** grid setting */
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  .grid-item {
    width: 100%;
  }
  .column {
    grid-area: column;
    @include desktop {
      height: 1500px;
    }
    @include tablet {
      height: 1000px;
    }
    @include mobile {
      height: 580px;
    }
  }
  .news {
    grid-area: news;
    background: blue;
    @include desktop {
      height: 1500px;
    }
    @include tablet {
      height: 300px;
    }
    @include mobile {
      height: 260px;
    }
  }
  .team {
    grid-area: team;
    background: green;
    @include desktop {
      height: 600px;
    }
    @include tablet {
      height: 700px;
    }
    @include mobile {
      height: 520px;
    }
  }
  .consulting {
    grid-area: consulting;
    background: coral;
    @include desktop {
      height: 600px;
    }
    @include tablet {
      height: 350px;
    }
    @include mobile {
      height: 200px;
    }
  }
  .explanation {
    grid-area: explanation;
    background: orchid;
    @include desktop {
      height: 300px;
    }
    @include tablet {
      height: 300px;
    }
    @include mobile {
      height: 300px;
    }
  }
  .fold {
    grid-area: fold;
    background: purple;
    @include desktop {
      height: 600px;
    }
    @include tablet {
      height: 1050px;
    }
    @include mobile {
      height: 590px;
    }
  }
  .monthly {
    grid-area: monthly;
    background: yellow;
    @include desktop {
      height: 880px;
    }
    @include tablet {
      height: 440px;
    }
    @include mobile {
      height: 224px;
    }
  }
  .program {
    grid-area: program;
    background: cyan;
    @include desktop {
      height: 440px;
    }
    @include tablet {
      height: 300px;
    }
    @include mobile {
      height: 224px;
    }
  }
  .partnership {
    grid-area: partnership;
    background: navy;
    @include desktop {
      height: 440px;
    }
    @include tablet {
      height: 440px;
    }
    @include mobile {
      height: 192px;
    }
  }
  .youtube {
    grid-area: youtube;
    background: magenta;
    @include desktop {
      height: 440px;
    }
    @include tablet {
      height: 350px;
    }
    @include mobile {
      height: 160px;
    }
  }
  .footer {
    grid-area: footer;
    background: black;
    @include desktop {
      height: 178px;
    }
    @include tablet {
      height: 178px;
    }
    @include mobile {
      height: 178px;
    }
  }

  @include desktop {
    grid-template-areas:
      'column column column column news news explanation explanation explanation explanation'
      'column column column column news news consulting consulting consulting consulting'
      'column column column column news news team team team team'
      'fold fold fold fold fold fold fold fold fold fold'
      'monthly monthly monthly monthly program program program program partnership partnership'
      'monthly monthly monthly monthly youtube youtube youtube youtube youtube youtube'
      'footer footer footer footer footer footer footer footer footer footer';
  }
  @include tablet {
    grid-template-areas:
      'column column column column column explanation explanation explanation explanation explanation'
      'column column column column column team team team team team'
      'consulting consulting consulting consulting consulting consulting consulting consulting consulting consulting'
      'news news news news news news news news news news'
      'fold fold fold fold fold fold fold fold fold fold'
      'monthly monthly monthly monthly monthly partnership partnership partnership partnership partnership'
      'program program program program program program program program program program'
      'youtube youtube youtube youtube youtube youtube youtube youtube youtube youtube'
      'footer footer footer footer footer footer footer footer footer footer';
  }
  @include mobile {
    grid-template-areas:
      'column column column column column column column column column column'
      'explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation'
      'consulting consulting consulting consulting consulting consulting consulting consulting consulting consulting'
      'team team team team team team team team team team'
      'news news news news news news news news news news'
      'fold fold fold fold fold fold fold fold fold fold'
      'monthly monthly monthly monthly monthly monthly monthly monthly monthly monthly'
      'program program program program program program program program program program'
      'partnership partnership partnership partnership partnership partnership partnership partnership partnership partnership'
      'youtube youtube youtube youtube youtube youtube youtube youtube youtube youtube'
      'footer footer footer footer footer footer footer footer footer footer';
  }
}
</style>
