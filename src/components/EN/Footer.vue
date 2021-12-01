<template>
  <div class="section-footer">
    <div class="footer-wrapper">
      <div class="footer-inner">
        <div class="footer-contents-wrapper">
          <div class="footer-locations">
            <div class="footer-location location-title">
              <p class="title main-title">Locations</p>
            </div>
            <div class="location-content-wrapper">
              <div class="footer-location location-headquarters">
                <div class="location-title">
                  <p class="title">Headquarters</p>
                </div>
                <div class="location-content">
                  <p class="content">Los Angeles</p>
                  <p class="content">555 West 5th Street, 35F</p>
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
          </div>
          <div class="footer-contact">
            <p class="contact-title">Contact</p>
            <p class="contact">
              <a href="mailto:help@zenerate.ai">help@zenerate.ai</a>
            </p>
          </div>
        </div>
        <div class="term-wrapper">
          <a @click="router.push('/terms-and-conditions')" class="term"
            >Terms and Conditions</a
          >
          <a @click="router.push('/privacy-policy')" class="term"
            >Privacy Policy</a
          >
          <div class="sns-wrapper">
            <p class="copyright">©Zenerate, Inc. 2021. All rights reserved</p>
            <div class="footer-sns">
              <a
                href="https://www.linkedin.com/company/zenerate"
                class="hover-pointer linkedin-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28px"
                  height="28px"
                  viewBox="0 0 20 20"
                  version="1.1"
                >
                  <g id="surface1">
                    <path
                      fill="#161616"
                      d="M 9.972656 0 C 4.464844 0 0 4.464844 0 9.972656 C 0 15.484375 4.464844 19.949219 9.972656 19.949219 C 15.484375 19.949219 19.949219 15.484375 19.949219 9.972656 C 19.949219 4.464844 15.484375 0 9.972656 0 Z M 6.238281 16.726562 L 3.433594 16.726562 L 3.433594 7.707031 L 6.238281 7.707031 Z M 4.835938 6.472656 C 3.9375 6.472656 3.210938 5.746094 3.210938 4.847656 C 3.210938 3.949219 3.9375 3.222656 4.835938 3.222656 C 5.730469 3.222656 6.460938 3.949219 6.460938 4.847656 C 6.460938 5.742188 5.730469 6.472656 4.835938 6.472656 Z M 16.738281 16.726562 L 13.9375 16.726562 L 13.9375 12.339844 C 13.9375 11.292969 13.917969 9.949219 12.480469 9.949219 C 11.023438 9.949219 10.796875 11.085938 10.796875 12.265625 L 10.796875 16.726562 L 7.996094 16.726562 L 7.996094 7.707031 L 10.683594 7.707031 L 10.683594 8.9375 L 10.722656 8.9375 C 11.097656 8.230469 12.011719 7.480469 13.375 7.480469 C 16.214844 7.480469 16.738281 9.351562 16.738281 11.777344 Z M 16.738281 16.726562 "
                    />
                  </g>
                </svg>
              </a>
              <a href="https://www.facebook.com/zenerate/" class="hover-pointer"
                ><svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z"
                    fill="#161616"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<style lang="scss" scoped>
.section-footer {
  background-color: #fafafc;
  padding-top: 52px;
  padding-bottom: 28px;
  .footer-wrapper {
    @include container;
    padding-top: 0 !important;

    @include en-tablet {
      width: auto;
      margin-right: 50px;
    }
    @include en-mobile {
      margin-right: 0px;
    }
    .footer-inner {
      padding: 0px 0px 0px 60px;
      .footer-contents-wrapper {
        @include flex();
        margin-bottom: 108px;

        @include en-tablet {
          justify-content: space-between;
          width: 100%;
        }
        @include en-mobile {
          justify-content: space-between;
          width: 100%;
          margin-bottom: 40px;
        }
        .footer-locations {
          @include flex();
          margin-right: 120px;
          padding-right: 130px;

          @include en-tablet {
            margin-right: 20px;
            padding-right: 0px;
          }
          @include en-mobile {
            margin-right: 0px;
            padding-right: 0px;
          }

          .footer-location {
            @include flex;
            cursor: default;
            &:last-child p.title {
              margin-bottom: 0;
            }
            @include en-tablet {
              margin-bottom: 32px;
            }
            @include en-mobile {
              @include flex();
              flex-direction: column;
              margin-bottom: 32px;
            }
            .footer-add {
              width: 400px;
            }

            .location-content-wrapper {
              @include vertical-center();
            }
            p.title {
              @include bold(16);
              width: 100px;
              margin-right: 80px;
              margin-bottom: 72px;
              color: $cr-text-grey;

              &.main-title {
                color: #161616;
              }
            }
            p.content {
              @include regular(16);
              color: $cr-fields-description;
            }

            @include en-tablet {
              p.title {
                margin-bottom: 12px;
                margin-right: 80px;
              }
              &.location-title {
                margin-bottom: 0;
                p.title {
                  margin-bottom: 8px;
                  margin-right: 80px;
                }
              }
            }
            @include en-mobile {
              p.title {
                @include bold(14);
                width: 70px;
                margin-bottom: 0px;
                margin-right: 8px;
              }
              &.location-title {
                margin-bottom: 0;
                p.title {
                  margin-bottom: 8px;
                  margin-right: 8px;
                }
              }
              p.content {
                @include regular(14);
              }
            }
          }
        }
        .footer-contact {
          @include flex();

          .contact-title {
            width: 100px;
            margin-right: 80px;
            color: #161616;
          }
          p {
            @include bold(16);
            line-height: 24px;
            margin-bottom: 24px;
            color: $cr-text-grey;
            cursor: default;
          }
          a {
            @include regular(16);
            line-height: 24px;
            color: $cr-fields-description;
          }

          @include en-tablet {
            margin-top: 0px;
            .contact-title {
              margin-right: 80px;
            }
          }
          @include en-mobile {
            margin-top: 0px;

            .contact-title {
              @include bold(14);
              width: 70px;
              margin-right: 8px;
            }
            p {
              @include regular(14);
              margin-bottom: 0;
            }
          }
        }
      }

      .sns-wrapper {
        @include absolute(bottom -2px left 0px);
        @include flex($justify: space-between);
        align-items: flex-end;
        width: 100%;
        cursor: default;

        .copyright {
          @include regular(16);
          color: rgba($cr-fields-description, 0.8);
        }

        .footer-sns {
          @include flex($justify: space-between);
          width: 80px;
          margin-right: 10px;
          svg {
            cursor: pointer;
          }
        }

        @include en-tablet {
          bottom: -24px;
        }
        @include en-mobile {
          flex-direction: column;
          align-items: flex-start;
          top: 20px;
          height: 100px;
          .copyright {
            @include regular(14);
            margin-bottom: 32px;
          }
        }
      }

      .term-wrapper {
        @include relative();
        @include flex($justify: center);
        align-items: center;
        width: 100%;
        margin-bottom: 88px;
        z-index: 9;
        .term {
          @include regular(16);
          text-align: center;
          color: rgba($cr-fields-description, 0.8);
          cursor: pointer;
          z-index: 9;

          &:first-child {
            margin-right: 40px;
          }
        }

        @include en-tablet {
          justify-content: flex-start;
        }
        @include en-mobile {
          height: 40px;
          justify-content: flex-start;
          align-items: flex-start;
          margin-bottom: 0px;
          margin-bottom: 160px;

          .term {
            @include regular(14);

            &:first-child {
              margin-right: 20px;
            }
          }
        }
      }

      @include en-mobile {
        padding: 0px 20px;
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
