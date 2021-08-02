<template>
  <div class="section-footer">
    <div class="footer-wrapper">
      <div class="footer-locations">
        <div class="footer-location location-title">
          <p class="title">Locations:</p>
        </div>
        <div class="footer-location location-headquarters">
          <p class="title">Headquarters</p>
          <p class="content">Los Angeles</p>
          <p class="content">555 West 5th Street</p>
          <p class="content">Los Angeles, California</p>
        </div>
        <div class="footer-location location-international">
          <p class="title">International</p>
          <p class="content">Seoul</p>
          <p class="content">Olympic-ro 362, 5F</p>
          <p class="content">Songpa-gu, Seoul</p>
        </div>
      </div>
      <div class="footer-add">
        <p class="copyright">© Zenerate, Inc. 2021. All rights reserved</p>
        <p class="contact">
          <strong>Contact : </strong
          ><a href="mailto:help@zenerate.ai">help@zenerate.ai</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.section-footer {
  margin: 0px 24px;
  padding-top: 20px;
  padding-bottom: 96px;
  border-top: solid 1px rgba($black, 0.5);
  .footer-wrapper {
    @include flex($justify: space-between);
    .footer-locations {
      flex: 1;
      @include flex;
      .footer-location {
        width: 180px;
        margin-right: 60px;
      }
      .footer-add {
        width: 400px;
      }
      p.title {
        @include bold(15);
        margin-bottom: 24px;
      }
      p.content {
        @include regular(15);
        margin-bottom: 4px;
      }
    }
    .footer-add {
      text-align: right;
      p,
      a {
        @include regular(15);
        margin-bottom: 4px;
      }
    }
  }
}
</style>
