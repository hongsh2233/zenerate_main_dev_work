<template>
  <div class="career-content-wrapper">
    <div
      class="career-content"
      v-if="route.params.careerKey === 'product-planner'"
    >
      <div class="image-wrapper">
        <!-- <img src="/img/career.png" alt="career" /> -->
        <div class="mx-auto w-full max-w-[1200px]">
          <video
            class="w-full"
            :autoplay="true"
            :muted="true"
            :loop="true"
            :playsinline="true"
            src="/public/en/landing/landing_hero_background.mp4"
            alt=""
          />
        </div>
      </div>
      <div class="career-content-title">
        <span>건축 프로덕트 기획자</span>
        <!-- <button @click="goToApply">지원하기</button> -->
      </div>
      <div class="content-item">
        <div class="content-item-title">주요 업무</div>
        <p class="content-item-subtitle">
          제너레잇의 프로덕트 기획자는 기획팀에서 다음과 같은 업무를 수행합니다.
        </p>
        <ul class="content-item-content">
          <li>프로덕트의 새기능 구상 및 기존 기능의 개선 사항 도출</li>
          <li>
            건축 디자인 자동화에 필요한 건물 유형, 평면, 법규 등에 관한 리서치
          </li>
          <li>기획안과 리서치 내용의 시각화(Figma) 및 문서화</li>
          <li>
            사용자 데이터 분석(Hotjar, Google Analytics)과 이에 따른 문제점 및
            개선 사항 도출
          </li>
          <li>
            프로덕트의 에러 리포트, 사용성 점검(Quality Assurance) 및 알파
            테스트(Alpha Test)
          </li>
          <li>
            프로덕트 업데이트 뉴스레터, 튜토리얼 및 홍보 컨텐츠 기획 및 제작
          </li>
          <li>
            소프트웨어개발 및 디자인팀과의 긴밀한 협업을 통한 프로덕트 개발
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">자격 요건</div>
        <ul class="content-item-content">
          <li>건축설계 전공, 학위 소지 혹은 관련 경력</li>
          <li>
            영어 문서를 수월하게 읽고 작성할 수 있고 리서치가 가능한 수준의 영어
            실력
          </li>
          <li>
            데이터분석, 벤치마킹, 프로덕트 테스트 등을 통해 프로덕트의 개선점을
            제안할 수 있는 능력
          </li>
          <li>우수한 리서치 및 문서 정리 능력</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">우대 사항</div>
        <ul class="content-item-content">
          <li>미국 건축 설계 경험</li>

          <li>건축 설계 자동화 프로젝트에 참여 혹은 이에 준하는 경험</li>
          <li>소프트웨어 기획 경험 및 피그마 사용을 통한 업무 경험</li>
          <li>원어민 수준의 영어 능력</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">혜택 및 복지</div>
        <ul class="content-item-content">
          <li>최신 사양 컴퓨터 및 듀얼모니터 제공</li>
          <li>점심 및 간식 제공</li>
          <li>연말 1주일 정도의 전직원 리프레시 휴가</li>
          <li>4대 보험, 퇴직금 등의 기본 사항</li>
          <li>중소기업 소득세 감면, 청년 내일채움공제 지원기업</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">근무 장소</div>
        <ul class="content-item-content">
          <li>
            서울시 송파구 올림픽로 362, 5층 (잠실역 5분, 몽촌토성역 3분 거리)
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">지원 절차</div>
        <ul class="content-item-content">
          <li>지원 → 서류전형 → 면접(실무면접 포함) → 최종 합격</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">지원 및 문의</div>
        <ul class="content-item-content">
          <li>
            <a href="mailto:apply@zenerate.ai" class="link-text"
              >apply@zenerate.ai</a
            >
            로 이력서 및 포트폴리오를 제출해주세요.
          </li>
          <li>
            채용 및 업무에 대해 궁금한 점이 있으시면
            <a href="https://forms.gle/ohmH3b7VyxU9uM1z7" class="link-text"
              >이 링크</a
            >로 커피챗 신청도 가능합니다☕☕
          </li>
        </ul>
      </div>

      <button class="back-button" @click="() => goBack()">
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
    <!-- Urban Data Analyst -->
    <div
      class="career-content"
      v-if="route.params.careerKey === 'urban-data-analyst'"
    >
      <div class="image-wrapper">
        <img src="/img/career.png" alt="career" />
      </div>
      <div class="career-content-title">
        <span>Urban Data Analyst</span>
        <!-- <button @click="goToApply">지원하기</button> -->
      </div>
      <div class="content-item">
        <div class="content-item-title">주요 업무</div>
        <p class="content-item-subtitle">
          이 직무는 데이터와 AI 기반의 웹 어플리케이션 프로덕트에 쓰이는 데이터
          퀄리티를 관리하고, 지속적인 에러 트래킹과 프로세스 개선, 업무 자동화를
          함께 기획하고 문제를 해결해나가는 역할입니다. 구체적으로는 하단 업무
          중 일부를 수행하게 됩니다.
        </p>
        <ul class="content-item-content">
          <li>
            프로덕트에 사용되는 미국 건물 인허가(city planning entitlement &
            permit)와 관련한 데이터 digitization 업무 수행
          </li>
          <li>데이터 퀄리티 유지를 위한 테스트 방법과 프로세스 기획 서포트</li>
          <li>데이터 업데이트 관리를 위한 자동화/최적화 업무 기획 서포트</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">자격 요건</div>
        <ul class="content-item-content">
          <li>꼼꼼하고 책임감 있는 분</li>
          <li>영어 문서 독해에 어려움이 없는 분</li>
          <li>Excel 활용 능력이 우수한 분</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">우대 사항</div>
        <ul class="content-item-content">
          <li>도시공학/도시계획 관련 전공자 우대</li>
          <li>인허가 관련 프로젝트 또는 경력이 있으신 분</li>
          <li>영어로 의사소통에 어려움이 없으신 분</li>
          <li>SQL 또는 Python 사용 경험이 있으신 분</li>
          <li>Jira, Confluence 사용 경험이 있으신 분</li>
          <li>
            주기적으로 업데이트 되는 제품에서 데이터 품질 관리와 프로세스 개선
            경험이 있으신 분
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">혜택, 복지, 업무 환경</div>
        <ul class="content-item-content">
          <li>
            업무 시간을 자율적으로 운영하는 유연근무제 (코어타임 : 10-17시)
          </li>
          <li>최신 사양 장비 및 듀얼모니터 제공</li>
          <li>점심 식대 지원</li>
          <li>추석, 연말 기간 전직원 refresh 휴가</li>
          <li>4대 보험, 퇴직금 등의 기본 사항</li>
          <li>중소기업 소득세 감면, 청년 내일채움공제 지원기업</li>
          <li>사무실은 송파구 몽촌토성역 3분 이내 거리에 위치해있습니다.</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">지원 방법</div>
        <ul class="content-item-content">
          <li>서류전형 → 면접(직무) → 면접(컬쳐) → 처우협의 → 최종 합격</li>
          <li>
            서류전형의 이력서, 포트폴리오는 양식 제한 없이 자유롭게
            제출해주세요.
          </li>
          <li>서류 합격시 접수 1주일 내에 개별 연락 드리겠습니다.</li>
          <li>
            제출 및 문의사항은 hkang@zenerate.ai 로 메일 남겨주시기 부탁드립니다
            :)
          </li>
        </ul>
      </div>

      <button class="back-button" @click="() => goBack()">
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
    <!-- 컴퓨테이셔널 디자이너 - A -->
    <div
      class="career-content"
      v-if="route.params.careerKey === 'computational-designer-a'"
    >
      <div class="image-wrapper">
        <img src="/img/career.png" alt="career" />
      </div>
      <div class="career-content-title">
        <span>컴퓨테이셔널 디자이너 - A</span>
        <!-- <button @click="goToApply">지원하기</button> -->
      </div>
      <div class="content-item">
        <div class="content-item-title">주요 업무</div>
        <p class="content-item-subtitle">
          컴퓨테이셔널 디자이너는 아래의 업무 중 일부를 수행합니다.
        </p>
        <ul class="content-item-content">
          <li>
            프로젝트에서 설계를 자동화 할 수 있는 부분을 찾아 서비스 개발 팀원
            분들이 구현할 수 있도록 기획합니다.
          </li>
          <li>
            다양한 타입의 건물에 대한 매스 생성, 건물 배치, 세대 평면 생성
            로직을 리서치하고 구현합니다.
          </li>
          <li>리서치 내용을 시각화하고 문서화 합니다.</li>
          <li>
            건축 법규 정보를 건물 생성에 활용할 수 있도록 구조화하고 수집
            합니다.
          </li>
          <li>
            구현한 기능을 서비스 개발 팀원 분들과 협업하여 서비스에 적용하고
            유지보수 합니다.
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">자격 요건</div>
        <ul class="content-item-content">
          <li>건축 설계 자동화에 대한 열정과 비전을 가지고 있으신 분</li>
          <li>
            건축 실무 혹은 시행사 근무 경력 2년 이상 혹은 이에 준하는 경험이
            있으신 분
          </li>
          <li>
            Rhino3D, Revit 등의 3D 소프트웨어에서 노드형 프로그래밍 혹은
            스크립팅 기능을 활용해본 경험이 있으신 분
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">우대 사항</div>
        <ul class="content-item-content">
          <li>건축사 자격을 보유하고 계신 분</li>
          <li>
            건축 설계 자동화 분야의 프로젝트에 참여해 보았거나, 이에 준하는
            경험이 있으신 분
          </li>
          <li>
            Python, C#, C++, JavaScript 혹은 기타 프로그래밍 언어를 1가지 이상
            능숙하게 사용하실 수 있는 분
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">혜택 및 복지</div>
        <ul class="content-item-content">
          <li>최신 사양 장비 및 듀얼모니터 제공</li>
          <li>점심 식대 지원</li>
          <li>연말 기간 전직원 refresh 휴가</li>
          <li>4대 보험, 퇴직금 등의 기본 사항</li>
          <li>중소기업 소득세 감면, 청년 내일채움공제 지원기업</li>
          <li>송파구 몽촌토성역 3분 이내 거리에 사무실 위치</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">지원 절차</div>
        <ul class="content-item-content">
          <li>서류전형 → 면접(직무) → 면접(컬쳐) → 처우협의 → 최종 합격</li>
          <li>
            서류전형의 이력서, 포트폴리오는 양식 제한 없이 자유롭게
            제출해주세요.
          </li>
          <li>서류 합격시 접수 1주일 내에 개별 연락 드리겠습니다.</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">지원 및 문의</div>
        <ul class="content-item-content">
          <li>
            <a href="mailto:apply@zenerate.ai" class="link-text"
              >apply@zenerate.ai</a
            >
            로 이력서를 제출해주세요.
          </li>
          <li>
            채용 및 업무에 대해 궁금한 점이 있으시면
            <a href="https://forms.gle/LEGbTJy8hLLHvNWJ9" class="link-text"
              >이 링크</a
            >로 커피챗 신청도 가능합니다☕☕
          </li>
        </ul>
      </div>

      <button class="back-button" @click="() => goBack()">
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
    <!-- 컴퓨테이셔널 디자이너 - B -->
    <div
      class="career-content"
      v-if="route.params.careerKey === 'computational-designer-b'"
    >
      <div class="image-wrapper">
        <img src="/img/career.png" alt="career" />
      </div>
      <div class="career-content-title">
        <span>컴퓨테이셔널 디자이너 - B</span>
        <!-- <button @click="goToApply">지원하기</button> -->
      </div>
      <div class="content-item">
        <div class="content-item-title">주요 업무</div>
        <p class="content-item-subtitle">
          컴퓨테이셔널 디자이너는 아래의 업무 중 일부를 수행합니다.
        </p>
        <ul class="content-item-content">
          <li>
            다양한 타입의 건물에 대한 매스 생성, 건물 배치, 세대 평면 생성
            로직을 리서치하고 구현합니다.
          </li>
          <li>
            리서치 내용을 도형 라이브러리를 사용하여 시각화하고 문서화 합니다.
          </li>
          <li>
            구현한 기능을 서비스 개발 팀원 분들과 협업하여 서비스에 적용합니다.
          </li>
          <li>
            언급되어 있는 주요 업무 외에 팀에 기여할 수 있는 역할에 대하여
            논의가 가능하니, 궁금하신 점이 있으시면 편하게 공지 하단의 링크를
            통해 커피챗 신청 부탁드립니다.
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">자격 요건</div>
        <ul class="content-item-content">
          <li>건축 설계 자동화에 대한 열정과 비전을 가지고 있으신 분</li>
          <li>
            Rhino3D, Revit 등의 3D 소프트웨어에서 노드형 프로그래밍 혹은
            스크립팅 경험 권장
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">우대 사항</div>
        <ul class="content-item-content">
          <li>
            주차장 설계 자동화와 같은 설계 자동화 분야의 프로젝트를 진행해본
            경험이 있으신 분
          </li>
          <li>웹 서비스 개발에 기획/개발 역할로 참여해본 적 있으신 분</li>
          <li>
            Git을 사용하여 개발팀과 협업해보았거나 오픈소스에 기여해본 경험이
            있으신 분
          </li>
          <li>
            이산수학, 계산 기하 분야에 관심이 있거나, 알고리즘 문제 풀이에
            관심이 있으신 분
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">참고 사항</div>
        <ul class="content-item-content">
          <li>업무 논의 후 학업 병행, 파트타임 근무도 가능합니다.</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">혜택 및 복지</div>
        <ul class="content-item-content">
          <li>최신 사양 장비 및 듀얼모니터 제공</li>
          <li>점심 식대 지원</li>
          <li>연말 기간 전직원 refresh 휴가</li>
          <li>4대 보험, 퇴직금 등의 기본 사항</li>
          <li>중소기업 소득세 감면, 청년 내일채움공제 지원기업</li>
          <li>송파구 몽촌토성역 3분 이내 거리에 사무실 위치</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">지원 절차</div>
        <ul class="content-item-content">
          <li>서류전형 → 면접(직무) → 면접(컬쳐) → 처우협의 → 최종 합격</li>
          <li>
            서류전형의 이력서, 포트폴리오는 양식 제한 없이 자유롭게
            제출해주세요.
          </li>
          <li>서류 합격시 접수 1주일 내에 개별 연락 드리겠습니다.</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">지원 및 문의</div>
        <ul class="content-item-content">
          <li>
            <a href="mailto:apply@zenerate.ai" class="link-text"
              >apply@zenerate.ai</a
            >
            로 이력서를 제출해주세요.
          </li>
          <li>
            채용 및 업무에 대해 궁금한 점이 있으시면
            <a href="https://forms.gle/LEGbTJy8hLLHvNWJ9" class="link-text"
              >이 링크</a
            >로 커피챗 신청도 가능합니다.
          </li>
        </ul>
      </div>

      <button class="back-button" @click="() => goBack()">
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
    <div
      class="career-content"
      v-if="route.params.careerKey === 'frontend-developer'"
    >
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
          <li>
            현재 운영중인 웹 어플리케이션의 신규 기능 설계, 개발 및 유지보수를
            담당하는 팀의 업무를 맡아 진행합니다.
          </li>
          <li>
            Vue.js 3를 메인 프레임워크로 하여 필요한 컴포넌트 및 로직을
            개발합니다.
          </li>
          <li>
            사용자가 상호작용 가능한 지도 위에 각종 데이터 및 3D 도형을 시각화
            합니다.
          </li>
          <li>디자이너와 Figma를 사용하여 협업합니다.</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">자격 요건</div>
        <ul class="content-item-content">
          <li>나이 / 성별 / 학력 / 전공 무관</li>
          <li>
            3년 이상의 웹 프론트엔드 개발 경력 또는 이에 준하는 경험이 있으신 분
          </li>
          <li>JavaScript에 대한 깊은 이해가 있으신 분</li>
          <li>HTML, CSS 등 마크업에 대한 이해가 있으신 분</li>
          <li>HTTP 통신과 RESTful API에 대해 이해가 있으신 분</li>
          <li>
            Vue, React, Angular와 같은 프론트엔드 라이브러리 또는 프레임워크에
            대한 이해가 있으신 분
          </li>
          <li>웹 어플리케이션의 생명 주기에 대한 이해가 있으신 분</li>
          <li>git에 대한 기본적인 사용법을 알고 있으신 분</li>
          <li>
            개발팀 및 그 외 부서와의 원활한 커뮤니케이션을 통한 협업이 가능하신
            분
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">우대 사항</div>
        <ul class="content-item-content">
          <li>반응형 웹 개발에 대한 경험이 있으신 분</li>
          <li>
            정적 타입 언어를 사용해 보았거나, TypeScript에 대한 이해가 있으신 분
          </li>
          <li>AWS 등 클라우드 환경에서 개발 경험이 있으신 분</li>
          <li>대규모 웹 어플리케이션의 개발 경험이 있으신 분</li>
          <li>웹 서비스의 최적화에 대해 깊이 고민해보신 분</li>
          <li>D3.js 등을 활용한 데이터 시각화 경험이 있으신 분</li>
          <li>GeoJSON과 같은 GIS 데이터 포맷을 다뤄본 경험이 있으신 분</li>
          <li>
            Mapbox, Leaflet 등의 지도 관련 라이브러리를 통한 개발 경험이 있으신
            분
          </li>
          <li>
            Konva, PixiJS를 사용해 보았거나 HTML Canvas를 사용한 2D 시각화 관련
            경험이 있으신 분
          </li>
          <li>
            Three.js등의 라이브러리를 사용해 보았거나 Webgl를 사용한 3D 시각화
            관련 경험이 있으신 분
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">이렇게 일해요</div>
        <div class="content-item-content content-item-content-nolist">
          <div class="caption-large">기술 스택</div>
          <p>TypeScript, Vue.js 3, Vite, CSS, HTML</p>
          <div class="caption-large">협업 환경</div>
          <p>Slack, Notion, Jira를 이용해 협업해요!</p>
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">혜택 및 복지</div>
        <ul class="content-item-content">
          <li>최신 사양 장비 및 듀얼모니터 제공</li>
          <li>점심 식대 지원</li>
          <li>연말 기간 전직원 refresh 휴가</li>
          <li>4대 보험, 퇴직금 등의 기본 사항</li>
          <li>중소기업 소득세 감면, 청년 내일채움공제 지원기업</li>
          <li>송파구 몽촌토성역 3분 이내 거리에 사무실 위치</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">지원 절차</div>
        <ul class="content-item-content">
          <li>간편지원 > 3일 이내 인터뷰 진행 > 1주일 이내 최종 합격 통지</li>
        </ul>
      </div>

      <button class="back-button" @click="() => goBack()">
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
    <!-- Backend -->
    <div
      class="career-content"
      v-if="route.params.careerKey === 'backend-developer'"
    >
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
          <li>웹서비스의 백엔드 설계 및 개발을 담당합니다.</li>
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
            JavaScript, TypeScript, Express.js, TypeORM, TypeDI, Python, Oracle
            Cloud, MySQL, Redis, Docker
          </p>
          <div class="caption-large">협업 환경</div>
          <p>Slack, Notion, Jira를 이용해 협업합니다</p>
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">혜택 및 복지</div>
        <ul class="content-item-content">
          <li>최신 사양 장비 및 듀얼모니터 제공</li>
          <li>점심 식대 지원</li>
          <li>연말 기간 전직원 refresh 휴가</li>
          <li>4대 보험, 퇴직금 등의 기본 사항</li>
          <li>중소기업 소득세 감면, 청년 내일채움공제 지원기업</li>
          <li>송파구 몽촌토성역 3분 이내 거리에 사무실 위치</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">지원 절차</div>
        <ul class="content-item-content">
          <li>간편지원 > 3일 이내 인터뷰 진행 > 1주일 이내 최종 합격 통지</li>
        </ul>
      </div>

      <button class="back-button" @click="() => goBack()">
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
    <div
      class="career-content"
      v-if="route.params.careerKey === 'data-analyst'"
    >
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
        <div class="content-item-title">혜택 및 복지</div>
        <ul class="content-item-content">
          <li>최신 사양 장비 및 듀얼모니터 제공</li>
          <li>점심 식대 지원</li>
          <li>연말 기간 전직원 refresh 휴가</li>
          <li>4대 보험, 퇴직금 등의 기본 사항</li>
          <li>중소기업 소득세 감면, 청년 내일채움공제 지원기업</li>
          <li>송파구 몽촌토성역 3분 이내 거리에 사무실 위치</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">지원 절차</div>
        <ul class="content-item-content">
          <li>간편지원 > 3일 이내 인터뷰 진행 > 1주일 이내 최종 합격 통지</li>
        </ul>
      </div>
      <button class="back-button" @click="() => goBack()">
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
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const goBack = () => {
  scrollTop()
  router.push('/kr/main/career')
}

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

    .content-item-subtitle {
      @include medium(16);
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

  .link-text {
    color: $main;
    text-decoration: underline;
  }
}
</style>
