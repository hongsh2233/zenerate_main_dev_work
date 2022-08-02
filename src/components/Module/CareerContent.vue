<template>
  <div class="career-content-wrapper">
    <!-- Backend -->
    <div class="career-content" v-if="props.careerId === 0">
      <div class="image-wrapper">
        <img src="/img/career.png" alt="career" />
      </div>
      <div class="career-content-title">
        <span>백엔드 개발자 (경력)</span>
        <button @click="goToApply">지원하기</button>
      </div>
      <div class="content-item">
        <div class="content-item-title">주요 업무</div>
        <ul class="content-item-content">
          <li>
            2021년 하반기 미국에서 오픈 할 실시간 웹서비스의 백엔드 설계 및
            개발을 담당합니다.
          </li>
          <li>계산 엔진의 성능을 모니터링하고 개선합니다.</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">자격 조건</div>
        <ul class="content-item-content">
          <li>나이 / 성별 / 학력 / 전공 무관</li>
          <li>웹서비스 개발 및 운영 경력이 있으신 분</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">필수 사항</div>
        <ul class="content-item-content">
          <li>git을 사용한 협업 경험이 있는 분</li>
          <li>MySQL, PostgreSQL 등 RDBMS 사용 경험이 있는 분</li>
          <li>node.js 사용 경험이 있는 분</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">우대 사항</div>
        <ul class="content-item-content">
          <li>aws를 활용한 개발 및 운영 경험이 있으면 좋습니다.</li>
          <li>빌드/테스트/배포 자동화 경험이 있으면 좋습니다.</li>
          <li>
            python 사용경험 및 멀티스레드/멀티프로세스에 대한 이해를 갖추신
            분이면 좋습니다.
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">이렇게 일해요</div>
        <div class="content-item-content content-item-content-nolist">
          <div class="caption-large">기술 스택</div>
          <p>
            Vue.js 3, Vite, CSS, HTML, Node.js, Express, Python, Typescript,
            MySQL
          </p>
          <div class="caption-large">개발 환경</div>
          <p>AWS EC2, AWS RDS, AWS S3</p>
          <div class="caption-large">협업 환경</div>
          <p>Slack, Notion, Jira를 이용해 협업합니다</p>
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">지원 절차</div>
        <ul class="content-item-content">
          <li>간편지원 > 3일 이내 인터뷰 진행 > 1주일 이내 최종 합격 통지</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">근무조건 및 업무환경</div>
        <ul class="content-item-content">
          <li>정규직</li>
          <li>휴가 17일</li>
          <li>선택적 근로 시간제</li>
          <li>점심 식사 제공</li>
        </ul>
      </div>
      <button
        class="back-button"
        @click=";[(nowId = -1), onSelect(nowId), scrollTop()]"
      >
        <span>BACK</span>
        <svg
          width="122"
          height="28"
          viewBox="0 0 122 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M121 27H0.999997L27.6886 1"
            stroke="#4747FF"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <!-- Frontend -->
    <div class="career-content" v-if="props.careerId === 1">
      <div class="image-wrapper">
        <img src="/img/career.png" alt="career" />
      </div>
      <div class="career-content-title">
        <span>프론트엔드 개발자 (경력)</span>
        <button @click="goToApply">지원하기</button>
      </div>
      <div class="content-item">
        <div class="content-item-title">주요 업무</div>
        <ul class="content-item-content">
          <li>웹페이지 UI 컴포넌트 구현</li>
          <li>웹페이지 로직 개발 및 성능 개선</li>
          <li>WebGL 기반 2D/3D 데이터 시각화</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">자격 조건</div>
        <ul class="content-item-content">
          <li>나이 / 성별 / 학력 / 전공 무관</li>
          <li>웹서비스 개발 및 운영 경력이 있으신 분</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">필수 사항</div>
        <ul class="content-item-content">
          <li>JavaScript의 이해도가 높은 분</li>
          <li>HTML5, CSS3을 이용, 웹 표준 준수한 프로젝트 경험이 있는 분</li>
          <li>React, Vue 등 웹 프레임워크를 활용한 개발 경험이 있는 분</li>
          <li>Rest API에 대한 전반적인 이해가 있는 분</li>
          <li>Git을 활용한 형상관리 및 협업 경험이 있는 분</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">우대 사항</div>
        <ul class="content-item-content">
          <li>
            Vue.js 또는 React.js 와 같은 프론트엔드 프레임워크를 사용해 완결된
            웹 서비스 개발 경험이 있으신 분
          </li>
          <li>TypeScript 개발 경험이 있으신 분</li>
          <li>새로운 기술에 대한 호기심이 많고, 빠르게 습득할 수 있는 분</li>
          <li>협업과 의사소통이 원활한 분</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">이렇게 일해요</div>
        <div class="content-item-content content-item-content-nolist">
          <div class="caption-large">기술 스택</div>
          <p>Vue.js 3, Vite, CSS, HTML, Node.js, Express, Python, Typescript</p>
          <div class="caption-large">개발 환경</div>
          <p>AWS EC2, AWS RDS, AWS S3</p>
          <div class="caption-large">협업 환경</div>
          <p>Slack, Notion, Jira를 이용해 협업해요!</p>
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">지원 절차</div>
        <ul class="content-item-content">
          <li>간편지원 > 3일 이내 인터뷰 진행 > 1주일 이내 최종 합격 통지</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">근무조건 및 업무환경</div>
        <ul class="content-item-content">
          <li>정규직</li>
          <li>휴가 17일</li>
          <li>선택적 근로 시간제</li>
          <li>점심 식사 제공</li>
        </ul>
      </div>
      <button
        class="back-button"
        @click=";[(nowId = -1), scrollTop(), onSelect(nowId)]"
      >
        <span>BACK</span>
        <svg
          width="122"
          height="28"
          viewBox="0 0 122 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M121 27H0.999997L27.6886 1"
            stroke="#4747FF"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <!-- Data Analysist -->
    <div class="career-content" v-if="props.careerId === 2">
      <div class="image-wrapper">
        <img src="/img/career.png" alt="career" />
      </div>
      <div class="career-content-title">
        <span>데이터 분석</span>
        <button @click="goToApply">지원하기</button>
      </div>
      <div class="content-item">
        <div class="content-item-title">주요 업무</div>
        <ul class="content-item-content">
          <li>
            부동산 개발에 관한 데이터 처리 (geospatial data, 거래내역 데이터
            등등)
          </li>
          <li>분석 모델 기획/개발</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">자격 조건</div>
        <ul class="content-item-content">
          <li>나이 / 성별 / 학력 / 전공 무관</li>
          <li>분석 모델 기획 및 개발 경력이 있으신 분</li>
          <li>Python 을 활용한 데이터 분석 경험이 있으신 분</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">이렇게 일해요</div>
        <div class="content-item-content content-item-content-nolist">
          <div class="caption-large">기술 스택</div>
          <p>Vue.js 3, Vite, CSS, HTML, Node.js, Express, Python, Typescript</p>
          <div class="caption-large">개발 환경</div>
          <p>AWS EC2, AWS RDS, AWS S3</p>
          <div class="caption-large">협업 환경</div>
          <p>Slack, Notion, Jira를 이용해 협업해요!</p>
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">지원 절차</div>
        <ul class="content-item-content">
          <li>간편지원 > 3일 이내 인터뷰 진행 > 1주일 이내 최종 합격 통지</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">근무조건 및 업무환경</div>
        <ul class="content-item-content">
          <li>정규직</li>
          <li>휴가 17일</li>
          <li>선택적 근로 시간제</li>
          <li>점심 식사 제공</li>
        </ul>
      </div>
      <button
        class="back-button"
        @click=";[(nowId = -1), scrollTop(), onSelect(nowId)]"
      >
        <span>BACK</span>
        <svg
          width="122"
          height="28"
          viewBox="0 0 122 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M121 27H0.999997L27.6886 1"
            stroke="#4747FF"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <!-- Management Support -->
    <div class="career-content" v-if="props.careerId === 3">
      <div class="image-wrapper">
        <img src="/img/career.png" alt="career" />
      </div>
      <div class="career-content-title">
        <span>경영 지원</span>
        <!-- <button @click="goToApply">지원하기</button> -->
      </div>
      <div class="content-item">
        <div class="content-item-title">주요 업무</div>
        <ul class="content-item-content">
          <li>재무, 회계 관련 업무 총괄</li>
          <li>정부지원사업 자금 및 일정 관리</li>
          <li>인사 채용 및 직원 관리 관련 업무</li>
          <li>기타 경영지원 전반</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">자격 조건</div>
        <ul class="content-item-content">
          <li>기업에서 경영지원 관련 업무 경험</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">필수 사항</div>
        <ul class="content-item-content">
          <li>워드, 엑셀, 한컴을 이용하여 업무를 수행한 경험이 있으신 분</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">우대 사항</div>
        <ul class="content-item-content">
          <li>경영지원 부서 경력 3년 이상</li>
          <li>꼼꼼하고 체계적이며 의사소통이 원활하신 분</li>
          <li>문서 작업(워드, 엑셀, 한컴)이 뛰어나신 분</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">지원 절차</div>
        <ul class="content-item-content">
          <li>help@zenerate.ai 이메일로 이력서 제출</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">근무조건 및 업무환경</div>
        <ul class="content-item-content">
          <li>정규직</li>
          <li>휴가 17일</li>
          <li>선택적 근로 시간제</li>
          <li>점심 식사 제공</li>
        </ul>
      </div>
      <button
        class="back-button"
        @click=";[(nowId = -1), scrollTop(), onSelect(nowId)]"
      >
        <span>BACK</span>
        <svg
          width="122"
          height="28"
          viewBox="0 0 122 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M121 27H0.999997L27.6886 1"
            stroke="#4747FF"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const emit = defineEmits(['onSelect'])
const onSelect = (value) => {
  emit('onSelect', value)
}
const props = defineProps({
  careerId: {
    type: Number,
  },
})
const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}
const goToApply = () => {
  window.open(
    'https://docs.google.com/forms/d/1poAA0R2ZpVIgo22jaRwR3RmjIXZwKiZAoc7lusY2Gc4/viewform?edit_requested=true',
    '_blank'
  )
}
</script>
<style lang="scss" scoped>
.career-content {
  .image-wrapper {
    width: 100%;
    margin-bottom: 40px;
    @include tablet {
      margin-bottom: 30px;
    }
    @include mobile {
      margin-bottom: 20px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .career-content-title {
    @include flex($justify: space-between);
    padding-bottom: 40px;
    border-bottom: solid 1px $grey-3;
    margin-bottom: 40px;
    @include tablet {
      padding-bottom: 30px;
    }
    @include mobile {
      padding-bottom: 30px;
    }
    span {
      @include bold(40);
      line-height: 60px;
      @include tablet {
        @include bold(32);
      }
      @include mobile {
        @include bold(28);
      }
    }
    button {
      margin: auto 0;
      color: white;
      width: 144px;
      height: 48px;
      border-radius: 100px;
      background-color: $main;
      @include tablet {
        width: 100px;
        height: 40px;
        @include medium(14);
      }
      @include mobile {
        width: 80px;
        height: 40px;
        @include medium(12);
      }
    }
  }
  .content-item {
    .content-item-title {
      @include bold(20);
      margin-bottom: 10px;
      @include tablet {
        @include bold(16);
      }
      @include mobile {
        @include bold(14);
      }
    }
    .content-item-content {
      list-style-type: disc;
      margin-left: 28px;
      margin-bottom: 40px;
      @include medium(16);
      color: rgba($black-1, 0.7);
      .caption-large {
        @include bold(16);
        line-height: 40px;
        @include tablet {
          @include bold(14);
        }
        @include mobile {
          @include bold(12);
        }
      }
      @include tablet {
        @include medium(14);
      }
      @include mobile {
        @include medium(12);
      }
    }
    .content-item-content-nolist {
      margin-left: 0px;
      @include tablet {
        p {
          margin-bottom: 12px;
        }
      }
      @include mobile {
        p {
          margin-bottom: 12px;
        }
      }
    }
  }
  .back-button {
    @include center-center;
    margin: 48px auto 6px auto;
    @include bold(16);
    span {
      padding-bottom: 5px;
    }
    color: $main;
    svg {
      position: absolute;
    }
    @include tablet {
      @include bold(14);
    }
    @include mobile {
      @include bold(14);
    }
  }
}
</style>
