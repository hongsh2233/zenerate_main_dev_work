<template>
  <div class="section-footer">
    <div class="footer-wrapper">
      <div class="footer-inner">
        <div class="footer-contents-wrapper">
          <div class="footer-locations">
            <div class="footer-location location-title">
              <p class="title">Locations</p>
            </div>
            <div class="footer-location location-headquarters">
              <div class="location-title">
                <p class="title">Headquarters</p>
              </div>
              <div class="location-content">
                <p class="content">Los Angeles</p>
                <p class="content">555 West 5th Street 35F</p>
                <p class="content">Los Angeles, CA 90013</p>
              </div>
            </div>
            <div class="footer-location location-international">
              <div class="location-title">
                <p class="title">International</p>
              </div>
              <div class="location-content">
                <p class="content">Seoul</p>
                <p class="content">Olympic-ro 362, 5F</p>
                <p class="content">Songpa-gu, Seoul 05544</p>
              </div>
            </div>
            
          </div>
          <div class="footer-contact">
            <p class="contact">
              <strong>Contacts </strong>
            </p>
            <p class="contact">
              <a href="mailto:help@zenerate.ai">help@zenerate.ai</a>
            </p>
          </div>
        </div>
        <p class="copyright">© Zenerate, Inc. 2021. All rights reserved</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.section-footer {
  height: 476px;
  padding-top: 80px;
  padding-bottom: 32px;
  background-color: #fafafa;
  .footer-wrapper {
    @include container;
    padding-top: 0 !important;
    .footer-inner {
      padding: 0px 60px;
      .footer-contents-wrapper {
        margin-bottom: 80px;
        @include flex;
        .footer-locations {
          width: 700px;
          .footer-location {
            margin-right: 60px;
            @include flex;
            &:last-child p.title {
              margin-bottom: 0;
            }
            @include en-tablet {
              margin-bottom: 32px;
            }
            @include en-mobile {
              margin-bottom: 32px;
            }
            .footer-add {
              width: 400px;
            }
            p.title {
              @include bold(16);
              width: 100px;
              margin-right: 100px;
              margin-bottom: 72px;
              color: $cr-text-grey;
            }
            p.content {
              @include regular(16);
              color: $cr-fields-description;
            }
            @include en-tablet {
              p.title {
                margin-bottom: 12px;
              }
              &.location-title {
                margin-bottom: 0;
                p.title {
                  margin-bottom: 8px;
                }
              }
            }
            @include en-mobile {
              p.title {
                margin-bottom: 12px;
              }
              &.location-title {
                margin-bottom: 0;
                p.title {
                  margin-bottom: 8px;
                }
              }
            }
          }
        }
        .footer-contact {
          flex: 1;
          p {
            @include bold(16);
            line-height: 24px;
            margin-bottom: 24px;
            color: $cr-text-grey;
          }
          a {
            @include regular(16);
            line-height: 24px;
            color: $cr-fields-description;
          }
          @include en-tablet {
            margin-top: 24px;
          }
          @include en-mobile {
            margin-top: 24px;
          }
        }
      }
      .copyright {
        width: 100%;
        text-align: center;
        @include regular(16);
        color: rgba($cr-fields-description, 0.8);
      }
    }
  }
  @include en-tablet {
    height: auto;
  }
  @include en-mobile {
    height: auto;
  }
}
</style>
