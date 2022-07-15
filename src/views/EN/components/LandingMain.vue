<template>
  <div class="landing-main-wrapper">
    <div class="bg-gray-50 pt-50">
      <Layout class="gap-42">
        <ListItem
          class="justify-start items-start gap-[38px] md:gap-[46px] md:w-full lg:w-full"
        >
          <div
            class="flex flex-col justify-start items-start gap-[32px] md:gap-[36px]"
          >
            <div
              class="flex flex-col justify-start items-start relative gap-6 md:gap-8 lg:gap-10"
            >
              <p
                class="text-14-semibold md:text-16-semibold lg:text-20-semibold text-left text-core-500"
              >
                Explore ALL possibilities
              </p>
              <p
                class="text-m-26-semibold md:text-t-34-semibold lg:text-d-40-semibold text-left text-black"
              >
                <span>Thousands of </span><br /><span>feasible solutions</span
                ><br /><span>within minutes</span>
              </p>
            </div>
            <div
              class="flex flex-col justify-start items-start relative gap-5 max-w-[260px] md:max-w-[340px] lg:max-w-[440px]"
            >
              <p
                class="text-left text-m-14-regular md:text-t-16-regular lg:text-d-18-regular text-black"
              >
                <span>Zenerate's AI-powered feasibility study tool</span
                ><br /><span>provides thousands of zoning code compliant</span
                ><br /><span
                  >solutions that are optimized to maximize returns.
                </span>
              </p>
              <p
                class="w-[422px] text-left text-m-14-regular md:text-t-16-regular lg:text-d-18-regular text-black"
              >
                <span>No more spending weeks and months </span><br /><span
                  >to come up with 3-5 feasible options </span
                ><br /><span>for development.</span>
              </p>
              <p
                class="text-m-14-regular md:text-t-16-regular lg:text-d-18-regular text-left text-black"
              >
                <span>Now, you can explore all the possibilities </span
                ><br /><span>of a site within minutes. </span>
              </p>
            </div>
          </div>
          <button
            type="button"
            class="primary-button mx-auto text-16 uppercase md:mx-0 lg:mx-0"
          >
            <router-link class="demo-link" :to="{ name: 'en-how-to-use' }">
              How Zenerate works
            </router-link>
          </button>
        </ListItem>
        <div class="image-wrapper w-100vw h-[224px] overflow-hidden">
          <div class="bg-core-400 w-full h-full">
            애니메이션 빌딩 그림 움직이게
          </div>
        </div>
      </Layout>
    </div>

    <div class="bg-white py-90">
      <Layout class="gap-[70px]">
        <ListItem class="items-center">
          <svg
            width="73"
            height="72"
            viewBox="0 0 73 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-[72px] h-[72px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect
              x="4.01123"
              y="25.4667"
              width="53.5111"
              height="31.5333"
              fill="#C5CBFF"
            ></rect>
            <g style="mix-blend-mode: multiply">
              <rect
                x="14.5223"
                y="14"
                width="54.4667"
                height="33.4444"
                fill="#DCDFFF"
              ></rect>
            </g>
            <rect
              x="14.5223"
              y="25.4667"
              width="43"
              height="21.9778"
              fill="#5C6DFF"
            ></rect>
            <path
              d="M46.3883 23.7106H40.4481C38.5938 23.7106 37.0906 25.2138 37.0906 27.0681C37.0906 28.9224 38.5938 30.4256 40.4481 30.4256H43.0308C44.8851 30.4256 46.3883 31.9288 46.3883 33.7831C46.3883 35.6374 44.8851 37.1406 43.0308 37.1406H37.0906"
              stroke="white"
              stroke-width="3"
              stroke-linecap="square"
              stroke-linejoin="round"
            ></path>
            <path
              d="M41.7394 21.6445V22.6776"
              stroke="white"
              stroke-width="3"
              stroke-linecap="square"
              stroke-linejoin="round"
            ></path>
            <path
              d="M41.7394 38.1737V39.2067"
              stroke="white"
              stroke-width="3"
              stroke-linecap="square"
              stroke-linejoin="round"
            ></path>
          </svg>
          <p
            class="text-t-30-semibold md:text-t-34-semibold lg:text-d-42-semibold md-6 lg:mb-8 text-center text-black"
          >
            +12 %
          </p>
          <p
            class="text-[22px] leading-[1.2] md:text-[26px] lg:text-[32px] font-semibold text-center text-black mb-20 lg:mb-30"
          >
            additional<br />returns
          </p>
          <p
            class="text-m-14-regular md:text-t-16-regular lg:text-d-18-regular text-center text-black"
          >
            <span>Users have experienced </span><br /><span
              class="text-m-14-semibold md:text-t-16-semibold lg:text-d-18-semibold"
              >3-26% additional returns </span
            ><br /><span>compared to their original </span><br /><span
              >plans which took them </span
            ><br /><span>weeks or months to create.</span>
          </p>
        </ListItem>
        <ListItem class="items-center">
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-[72px] h-[72px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M56.0714 35.999C56.0714 24.6377 46.8613 15.4276 35.5 15.4276C24.1387 15.4276 14.9286 24.6377 14.9286 35.999L56.0714 35.999Z"
              fill="#DCDFFF"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M35.5 59.999C22.2452 59.999 11.5 49.2539 11.5 35.999C11.5 22.7442 22.2452 11.999 35.5 11.999C48.7548 11.999 59.5 22.7442 59.5 35.999H55.2143C55.2143 25.1111 46.3879 16.2847 35.5 16.2847C24.6121 16.2847 15.7857 25.1111 15.7857 35.999C15.7857 46.8869 24.6121 55.7133 35.5 55.7133L35.5 59.999Z"
              fill="#5C6DFF"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M35.5 11.999C22.2452 11.999 11.5 22.7442 11.5 35.999C11.5 49.2539 22.2452 59.999 35.5 59.999L35.5 55.7133C24.6121 55.7133 15.7857 46.8869 15.7857 35.999C15.7857 25.1111 24.6121 16.2847 35.5 16.2847L35.5 11.999Z"
              fill="#A4AEFF"
            ></path>
            <g style="mix-blend-mode: multiply">
              <rect
                x="47.5"
                y="49.7133"
                width="3.42857"
                height="3.42857"
                fill="#5C6DFF"
              ></rect>
            </g>
            <g style="mix-blend-mode: multiply">
              <rect
                x="52.6429"
                y="43.7133"
                width="3.42857"
                height="3.42857"
                fill="#5C6DFF"
              ></rect>
            </g>
            <g style="mix-blend-mode: multiply">
              <rect
                x="40.6429"
                y="54.8562"
                width="3.42857"
                height="3.42857"
                fill="#5C6DFF"
              ></rect>
            </g>
            <rect
              x="33.7857"
              y="22.2847"
              width="4.28571"
              height="17.1429"
              fill="#A4AEFF"
            ></rect>
            <rect
              x="46.6429"
              y="35.999"
              width="4.28571"
              height="12.8571"
              transform="rotate(90 46.6429 35.999)"
              fill="#5C6DFF"
            ></rect>
            <path
              d="M57.3571 41.1419L50.3052 33.4276L64.4091 33.4276L57.3571 41.1419Z"
              fill="#5C6DFF"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.5 35.999C11.5 49.2539 22.2452 59.999 35.5 59.999L35.5 55.7133C24.6121 55.7133 15.7857 46.8869 15.7857 35.999H11.5Z"
              fill="#A4AEFF"
            ></path>
          </svg>
          <p
            class="text-[24px] leading-[1.2] md:text-[26px] lg:text-[32px] mb-18 md:mb-16 md:mb-23 font-semibold text-center text-black"
          >
            Hundreds of <br />hours saved
          </p>
          <div class="flex flex-col justify-start items-center gap-4">
            <p
              class="text-m-15-semibold mb-16 md:text-16-semibold md:mb-10 lg:mb-20 lg:text-t-22-semibold text-center text-black"
            >
              Cut down on weeks <br />&#x26; months of
            </p>
            <div>
              <div class="flex flex-col justify-start items-start gap-1.5">
                <template v-for="(items, idx) in CONTENT.saved" :key="idx">
                  <div class="flex justify-start relative gap-2.5">
                    <div
                      class="w-16 h-16 rounded-[50%] bg-core-50 mt-3 md:mt-4 lg:mt-6 flex items-center justify-center"
                    >
                      <Icon
                        icon-name="checkmark"
                        icon-color="#4D49F4"
                        :width="12"
                        :height="12"
                      />
                    </div>
                    <p
                      class="text-m-14-regular md:text-t-16-regular lg:text-d-18-regular text-black"
                    >
                      <template v-for="(name, iidx) in items.name" :key="iidx">
                        <br v-if="iidx !== 0" />
                        {{ name }}
                      </template>
                    </p>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </ListItem>
      </Layout>
    </div>

    <div class="bg-[#242B4E] py-90">
      <Layout>
        <ListItem
          class="justify-center md:justify-start lg:justify-start w-[248px] md:w-auto lg:w-auto"
        >
          <p
            class="text-14-semibold mb-6 md:text-16-semibold mb-8 lg:text-20-semibold lg:mb-10 text-left text-core-500"
          >
            Zoning code compliance
          </p>
          <p class="text-left text-white mb-28 md:mr-[76px] lg:mr-[114px]">
            <span
              class="text-m-26-semibold md:text-t-34-medium lg:text-d-40-semibold text-white"
              >Zoning
            </span>
            <span class="text-d-40-regular text-white hidden lg:inline-block"
              >&nbsp;research
            </span>
            <br />
            <span class="text-d-40-regular text-white hidden lg:inline-block">
              done.
            </span>
            <span
              class="text-m-26-regular md:text-t-34-regular text-white lg:hidden w-[280px]"
              >research, done.
            </span>
          </p>
        </ListItem>
        <ListItem
          class="max-w-[248px] md:max-w-full lg:max-w-full md:flex-1 lg:flex-1 gap-12 md:gap-14 lg:gap-14 text-white text-m-14-medium md:text-t-16-medium lg:text-d-18-medium"
        >
          <p>All solutions are zoning code compliant.</p>
          <p>How?</p>
          <p class="w-[255px] md:w-[300px] lg:w-[340px]">
            <span>We have a dedicated </span
            ><span class="font-semibold">&nbsp;Zoning Team</span><br /><span
              >per region that does all the&nbsp;
            </span>
            <span>research&nbsp;</span>
            <span>for you and inputs&nbsp;</span>
            <span>regulations&nbsp;</span>
            <span> into Zenerate's engine. </span>
          </p>
        </ListItem>
      </Layout>
    </div>

    <div class="bg-gray-50">
      <Layout>
        <div class="image-wrapper h-[50vw] bg-core-200">
          overlay & incentives
        </div>
      </Layout>
    </div>
    <div class="bg-white">
      <Layout class="md:gap-9 lg:gap-6 px-0 bg-white items-center">
        <ListItem
          class="w-[320px] h-[210px] px-30 pt-32 pb-30 md:px-36 md:pt-34 md:shadow-100 lg:shadow-100 md:rounded-8 lg:rounded-8 bg-white md:pb-36 lg:px-34 lg:pt-34 lg:pb-36 md:w-[340px] md:h-[244px] lg:w-[358px] lg:h-[260px]"
        >
          <div class="flex flex-col justify-start items-start gap-[18px]">
            <div class="flex justify-between items-center w-full">
              <p
                class="text-m-18-semibold md:text-t-20-semibold lg:text-d-22-semibold text-black"
              >
                <span>Accurate,</span><br /><span>up-to-date</span>
              </p>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-[42px] h-[42px]"
                preserveAspectRatio="none"
              >
                <circle cx="21" cy="21" r="17" fill="#ECEFFF"></circle>
                <path d="M19 0L23 0V8L19 8V0Z" fill="#A4AEFF"></path>
                <path d="M19 34H23V42H19V34Z" fill="#A4AEFF"></path>
                <path d="M34 23L34 19L42 19L42 23L34 23Z" fill="#A4AEFF"></path>
                <path
                  d="M0 23L-1.74846e-07 19L8 19L8 23L0 23Z"
                  fill="#A4AEFF"
                ></path>
                <circle cx="21" cy="21" r="4" fill="#5C6DFF"></circle>
              </svg>
            </div>
            <p
              class="text-m-14-regular text-gray-700 md:text-t-16-regular lg:text-d-18-regular"
            >
              <span>We update our zoning </span><br /><span
                >information monthly so you </span
              ><br /><span>have the most accurate zoning </span><br /><span
                >information available to you.
              </span>
            </p>
          </div>
        </ListItem>
        <ListItem
          class="w-[320px] h-[210px] px-30 pt-32 pb-30 md:px-36 md:pt-34 md:shadow-100 lg:shadow-100 md:rounded-8 lg:rounded-8 bg-white md:pb-36 lg:px-34 lg:pt-34 lg:pb-36 md:w-[340px] md:h-[244px] lg:w-[358px] lg:h-[260px]"
        >
          <div class="flex flex-col justify-start items-start gap-[18px]">
            <div class="flex justify-between items-center w-full">
              <p
                class="text-m-18-semibold md:text-t-20-semibold lg:text-d-22-semibold text-black"
              >
                <span>Overlays &#x26; incentives </span><br /><span
                  >included</span
                >
              </p>
              <svg
                width="44"
                height="42"
                viewBox="0 0 44 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-[44px] h-[41px]"
                preserveAspectRatio="none"
              >
                <g style="mix-blend-mode: multiply">
                  <circle
                    cx="33.5"
                    cy="11"
                    r="10.5"
                    transform="rotate(-180 33.5 11)"
                    fill="#A4AEFF"
                  ></circle>
                </g>
                <g style="mix-blend-mode: multiply">
                  <circle
                    cx="17.5"
                    cy="24"
                    r="17.5"
                    transform="rotate(-180 17.5 24)"
                    fill="#ECEFFF"
                  ></circle>
                </g>
                <g style="mix-blend-mode: multiply">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.5692 7.58105C23.2003 8.6528 23 9.80301 23 11C23 16.799 27.701 21.5 33.5 21.5C33.944 21.5 34.3815 21.4724 34.811 21.419C33.8662 15.0273 29.4656 9.76143 23.5692 7.58105Z"
                    fill="#7D8AFF"
                  ></path>
                </g>
              </svg>
            </div>
            <p
              class="text-m-14-regular text-gray-700 md:text-t-16-regular lg:text-d-18-regular"
            >
              <span>Choose from multiple</span><br /><span
                >overlays and specific city </span
              ><br /><span>plan incentives, all within </span><br /><span
                >the tool.</span
              >
            </p>
          </div>
        </ListItem>
      </Layout>
    </div>
    <div class="bg-white py-60">
      <Layout class="gap-42 relative w-auto">
        <ListItem
          class="justify-start m-auto items-start gap-[310px] md:gap-[106px] lg:gap-[116px] w-[260px] md:w-full lg:w-full"
        >
          <div
            class="flex flex-col justify-start items-start gap-[32px] md:gap-[36px]"
          >
            <div
              class="flex flex-col justify-start items-start relative gap-6 md:gap-8 lg:gap-10"
            >
              <p
                class="text-14-semibold md:text-16-semibold lg:text-20-semibold text-left text-primary"
              >
                Feasibility solutions
              </p>
              <p
                class="text-m-24-regular md:text-t-34-regular lg:text-d-40-regular text-left text-black"
              >
                <span> What's included </span><br /><span>in each</span
                ><br /><span
                  class="text-m-24-semibold md:text-t-34-semibold lg:text-d-40-semibold"
                  >zenerated solution?</span
                >
              </p>
            </div>
          </div>
          <div class="w-full">
            <div
              class="image-wrapper w-[200px] h-[224px] overflow-hidden absolute top-[164px] right-0 md:top-[210px] lg:top-[300px]"
            >
              <div class="bg-core-400 w-full h-full">노트북 그림</div>
            </div>
            <div
              class="grid grid-rows-2 gap-[44px] md:grid-cols-2 lg:grid-cols-2"
            >
              <ListItem class="w-full bg-red-200 gap-30">
                <div
                  class="image-wrapper w-[260px] md:w-[290px] lg:w-[358px] h-[200px] overflow-hidden rounded-8 border-1 border-gray-50 border-solid shadow-200 bg-white"
                >
                  <div class="bg-core-50 w-full h-full">image</div>
                </div>
                <div class="flex flex-col">
                  <p
                    class="text-black text-m-18-semibold mb-10 md:text-t-22-semibold md:mb-16 lg:text-d-24-semibold lg:mb-14"
                  >
                    Detailed floor plans
                  </p>
                  <p
                    class="text-gray-700 text-m-14-regular md:text-t-16-medium lg:text-d-18-medium"
                  >
                    <span>In order to accurately calculate</span><br /><span
                      >expected rent revenue</span
                    ><br /><span>we incorporate market consistent</span
                    ><br /><span>floor plans within our 3D model.</span
                    ><br /><span>Custom floor plans available for</span
                    ><br /><span>input into our engine if needed.</span>
                  </p>
                </div>
              </ListItem>
              <div class="bg-red-50 hidden md:block lg:block"></div>
              <div class="bg-red-50 hidden md:block lg:block"></div>
              <ListItem class="w-full bg-red-200 gap-30">
                <div
                  class="image-wrapper w-[260px] md:w-[290px] lg:w-[358px] h-[200px] overflow-hidden rounded-8 border-1 border-gray-50 border-solid shadow-200 bg-white"
                >
                  <div class="bg-core-50 w-full h-full">image</div>
                </div>
                <div class="flex flex-col">
                  <p
                    class="text-black text-m-18-semibold mb-10 md:text-t-22-semibold md:mb-16 lg:text-d-24-semibold lg:mb-14"
                  >
                    In-depth financial analysis
                  </p>
                  <p
                    class="text-gray-700 text-m-14-regular md:text-t-16-medium lg:text-d-18-medium"
                  >
                    <span>Detailed discounted cash flow</span><br /><span
                      >analysis with adjustable loan</span
                    ><br /><span>assumptions and various metrics</span
                    ><br /><span>based on your own financial models.</span>
                  </p>
                </div>
              </ListItem>
            </div>
          </div>
        </ListItem>
      </Layout>
    </div>
    <div class="bg-gray-50 pt-100 pb-60">
      <Layout class="md:flex-col lg:flex-col">
        <div
          class="flex flex-col justify-start items-start gap-6 md:gap-8 lg:gap-10 mb-[42px] md:mb-[56px] lg:mb-[98px]"
        >
          <p
            class="text-14-semibold md:text-16-semibold lg:text-20-semibold text-primary"
          >
            Who uses Zenerate
          </p>
          <p
            class="text-m-24-medium md:text-t-34-medium lg:text-d-40-medium text-black md:w-[520px] lg:w-[610px]"
          >
            <span>A tool that makes&nbsp;</span
            ><span
              class="text-m-24-semibold md:text-t-34-semibold lg:text-d-40-semibold text-primary"
              >work easier&nbsp;</span
            ><span>and&nbsp;</span
            ><span
              class="text-m-24-semibold md:text-t-34-semibold lg:text-d-40-semibold text-primary"
              >more profitable</span
            ><span>&nbsp;for: </span>
          </p>
        </div>
        <div
          class="grid grid-rows-2 gap-[44px] md:gap-[48px] lg:grid-cols-2 lg:gap-x-90 lg:gap-y-72"
        >
          <ListItem class="gap-6 lg:gap-8">
            <svg
              width="76"
              height="76"
              viewBox="0 0 76 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[76px] h-[76px] relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <rect x="4" y="13" width="29" height="48" fill="#DCDFFF"></rect>
              <rect
                width="16"
                height="24"
                transform="matrix(-1 0 0 1 49 37)"
                fill="#A4AEFF"
              ></rect>
              <rect
                x="10"
                y="20.0001"
                width="5"
                height="5"
                fill="#000729"
              ></rect>
              <rect
                x="21"
                y="20.0004"
                width="5"
                height="5"
                fill="#000729"
              ></rect>
              <rect
                x="10"
                y="30.0001"
                width="5"
                height="5"
                fill="#000729"
              ></rect>
              <rect
                x="21"
                y="30.0004"
                width="5"
                height="5"
                fill="#000729"
              ></rect>
              <rect x="10" y="40" width="5" height="5" fill="#000729"></rect>
              <rect x="21" y="40" width="5" height="5" fill="#000729"></rect>
              <g style="mix-blend-mode: multiply">
                <circle
                  cx="52.799"
                  cy="34.799"
                  r="14"
                  transform="rotate(-45 52.799 34.799)"
                  fill="#DCDFFF"
                ></circle>
              </g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M48.9999 48.2762C46.7659 47.6487 44.6571 46.4561 42.8995 44.6984C40.7275 42.5264 39.4183 39.8183 38.9721 37H48.9999V48.2762Z"
                fill="#000729"
              ></path>
              <rect
                x="56.3345"
                y="41.163"
                width="4"
                height="20"
                rx="2"
                transform="rotate(-45 56.3345 41.163)"
                fill="#5C6DFF"
              ></rect>
            </svg>
            <div
              class="flex flex-col justify-start items-start relative gap-8 md:gap-14 lg:gap-10"
            >
              <p
                class="text-black text-m-18-semibold md:text-t-22-semibold lg:text-d-24-semibold"
              >
                Developers
              </p>
              <p
                class="text-gray-700 text-m-14-medium md:text-t-16-medium lg:text-d-18-medium"
              >
                <span>Gain on average an additional&nbsp;</span
                ><span>12% profit on your projects </span><br /><span
                  >by instantly zenerating site solutions&nbsp;</span
                ><span>beyond what's capable </span><br /><span
                  >within human capacity.</span
                >
              </p>
            </div>
          </ListItem>
          <ListItem class="gap-6 lg:gap-8">
            <svg
              width="76"
              height="76"
              viewBox="0 0 76 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[76px] h-[76px] relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="26" cy="24" r="9" fill="#A4AEFF"></circle>
              <path
                d="M9 51C9 42.1634 16.1634 35 25 35H27C35.8366 35 43 42.1634 43 51V60H9V51Z"
                fill="#DCDFFF"
              ></path>
              <rect x="46" y="31" width="19" height="29" fill="#5C6DFF"></rect>
              <rect x="51" y="35" width="3" height="3" fill="white"></rect>
              <rect x="51" y="41" width="3" height="3" fill="white"></rect>
              <rect x="58" y="41" width="3" height="3" fill="white"></rect>
              <rect x="58" y="35" width="3" height="3" fill="white"></rect>
              <rect x="36" y="47" width="10" height="13" fill="#000729"></rect>
            </svg>
            <div
              class="flex flex-col justify-start items-start gap-8 md:gap-14 lg:gap-10"
            >
              <p
                class="text-black text-m-18-semibold md:text-t-22-semibold lg:text-d-24-semibold"
              >
                Brokers
              </p>
              <p
                class="text-gray-700 text-m-14-medium md:text-t-16-medium lg:text-d-18-medium md:w-[424px]"
              >
                <span>Leverage your position like never&nbsp;</span>
                <span>before by instantly&nbsp;</span>

                <span>and accurately&nbsp;</span>

                <span> evaluating profit potential on sites. </span>
              </p>
            </div>
          </ListItem>
          <ListItem class="gap-6 lg:gap-8">
            <svg
              width="76"
              height="76"
              viewBox="0 0 76 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[76px] h-[76px] relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <rect
                x="7"
                y="11"
                width="36.7348"
                height="36.7348"
                fill="#DCDFFF"
              ></rect>
              <g style="mix-blend-mode: multiply">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.9435 23.2451H66.9999V58.1432L18.9435 23.2451ZM43.4251 31.2545H58.8394V42.6965L43.4251 31.2545Z"
                  fill="#5C6DFF"
                ></path>
              </g>
              <g style="mix-blend-mode: multiply">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M43.7348 23.2451H18.9434L43.7348 41.2485V31.4845L43.425 31.2545H43.7348V23.2451Z"
                  fill="#000729"
                ></path>
              </g>
              <g style="mix-blend-mode: multiply">
                <circle
                  cx="26.5903"
                  cy="53.8555"
                  r="12.1206"
                  transform="rotate(-45 26.5903 53.8555)"
                  fill="#A4AEFF"
                ></circle>
              </g>
              <g style="mix-blend-mode: multiply">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M37.0555 47.7348H16.1252C16.6377 46.8599 17.2693 46.0354 18.0198 45.2849C22.7532 40.5515 30.4275 40.5515 35.1609 45.2849C35.9114 46.0354 36.543 46.8599 37.0555 47.7348Z"
                  fill="#000729"
                ></path>
              </g>
            </svg>
            <div
              class="flex flex-col justify-start items-start gap-8 md:gap-14 lg:gap-10"
            >
              <p
                class="text-black text-m-18-semibold md:text-t-22-semibold lg:text-d-24-semibold"
              >
                Architects
              </p>
              <p
                class="text-gray-700 text-m-14-medium md:text-t-16-medium lg:text-d-18-medium"
              >
                <span
                  >Gain an immediate starting point for your project. Save
                  hundreds of </span
                ><br /><span
                  >hours and win deals by instantly zenerating profit maximized
                  designs </span
                ><br /><span>hat clients want to see.</span>
              </p>
            </div>
          </ListItem>
          <ListItem class="gap-6 lg:gap-8">
            <svg
              width="76"
              height="76"
              viewBox="0 0 76 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[76px] h-[76px] relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <rect x="8" y="28" width="51" height="31" fill="#000729"></rect>
              <g style="mix-blend-mode: multiply">
                <rect
                  x="17"
                  y="17"
                  width="53"
                  height="33"
                  fill="#DCDFFF"
                ></rect>
              </g>
              <rect x="17" y="28" width="42" height="22" fill="#5C6DFF"></rect>
              <path
                d="M47.4172 26.5283H41.8621C40.1279 26.5283 38.7222 28.0757 38.7222 29.9845C38.7222 31.8934 40.1279 33.4408 41.8621 33.4408H44.2774C46.0115 33.4408 47.4172 34.9882 47.4172 36.897C47.4172 38.8058 46.0115 40.3532 44.2774 40.3532H38.7222"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="square"
                stroke-linejoin="round"
              ></path>
              <path
                d="M43.0698 24.4014V25.4648"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="square"
                stroke-linejoin="round"
              ></path>
              <path
                d="M43.0698 41.4167V42.4802"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="square"
                stroke-linejoin="round"
              ></path>
            </svg>
            <div
              class="flex flex-col justify-start items-start gap-8 md:gap-14 lg:gap-10"
            >
              <p
                class="text-black text-m-18-semibold md:text-t-22-semibold lg:text-d-24-semibold"
              >
                Private Equity
              </p>
              <p
                class="text-gray-700 text-m-14-medium md:text-t-16-medium lg:text-d-18-medium"
              >
                <span>Gain deep insight into all the&nbsp;</span
                ><span>possible development solutions and</span><br /><span
                  >make sure that the project you're&nbsp;</span
                ><span>financing is fulfilling its profit potential.</span>
              </p>
            </div>
          </ListItem>
        </div>
      </Layout>
    </div>

    <div class="bg-white pt-90 pb-50">
      <Layout
        class="md:flex-col lg:flex-col items-center gap-63 md:gap-34 lg:gap-40"
      >
        <p
          class="text-black w-[250px] md:w-auto lg:w-auto text-center text-m-22-regular md:text-t-30-regular lg:text-d-32-regular"
        >
          <span>Ready to&nbsp;</span
          ><span class="font-bold md:font-semibold">maximize&nbsp;</span
          ><span class="font-bold md:font-semibold"> your returns</span
          ><br /><span>while saving</span
          ><span>&nbsp;hundreds of hours?&nbsp;</span>
        </p>
        <div class="flex flex-col items-center gap-16">
          <button
            type="button"
            class="primary-button mx-auto text-16 uppercase md:mx-0 lg:mx-0"
          >
            <router-link class="demo-link" :to="{ name: 'en-how-to-use' }">
              Try Zenerate
            </router-link>
          </button>
          <button
            type="button"
            class="text-button mx-auto text-16 uppercase md:mx-0 lg:mx-0 group"
          >
            <router-link
              class="demo-link flex items-center"
              :to="{ name: 'en-how-to-use' }"
            >
              <span class="w-[200px]">Book a quick demo</span>
              <Icon
                icon-name="chevron-right"
                icon-color="484A4F"
                icon-hover-color="#4D49F4"
                icon-active-color="#3E3CCB"
                :width="24"
                :height="24"
              />
            </router-link>
          </button>
        </div>
      </Layout>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import Store from '/Store/index'
import { Icon, Layout, ListItem } from '/Components/EN'

const CONTENT = {
  saved: [
    {
      name: ['Searching for sites'],
      isOneLine: true,
    },
    {
      name: ['Analyzing zoning codes'],
      isOneLine: true,
    },
    {
      name: ['Crunching numbers'],
      isOneLine: true,
    },
    {
      name: ['Requesting or drafting', 'preliminary floor plans'],
      isOneLine: false,
    },
  ],
}
</script>
<style lang="scss" scoped></style>
