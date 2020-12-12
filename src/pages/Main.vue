<template>
  <q-page class="main-page">
    <div class="main-title">이런 친구는 어때요?</div>
    <div class="user-card">
      <svg
        viewBox="0 0 343 469"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <rect width="343" height="469" rx="24" fill="#C4C4C4" />
        <rect width="343" height="469" rx="24" fill="url(#pattern0)" />
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use
              xlink:href="#image0"
              transform="translate(0 -0.0478919) scale(0.0016835 0.00123122)"
            />
          </pattern>
        </defs>
      </svg>

      <div class="infomation"></div>
      <div class="hashtag"></div>
    </div>
    <div class="choice">
      <svg
        width="82"
        height="83"
        viewBox="0 0 82 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <circle cx="39" cy="39.0977" r="36" fill="white" />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.1194 52.0194C28.0671 53.9671 31.225 53.9671 33.1728 52.0194L39.0411 46.151L44.9659 52.0758C46.9136 54.0235 50.0715 54.0235 52.0193 52.0758C53.967 50.1281 53.967 46.9702 52.0193 45.0224L46.0945 39.0977L52.0193 33.1729C53.967 31.2251 53.967 28.0672 52.0193 26.1195C50.0715 24.1718 46.9136 24.1718 44.9659 26.1195L39.0411 32.0443L33.1727 26.1759C31.225 24.2282 28.0671 24.2282 26.1194 26.1759C24.1716 28.1236 24.1716 31.2816 26.1194 33.2293L31.9877 39.0977L26.1194 44.966C24.1716 46.9137 24.1716 50.0717 26.1194 52.0194Z"
          fill="#D2CDCD"
        />
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0.0976562"
            width="82"
            height="82"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.891667 0 0 0 0 0.880521 0 0 0 0 0.880521 0 0 0 1 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
      <svg
        width="83"
        height="83"
        viewBox="0 0 83 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <rect
            x="3.80493"
            y="3"
            width="72.1951"
            height="72.1951"
            rx="36.0976"
            fill="url(#paint0_linear)"
          />
          <rect
            x="49.8464"
            y="19.8457"
            width="20.1988"
            height="36.5812"
            rx="10.0994"
            transform="rotate(40.2482 49.8464 19.8457)"
            fill="#FF96A2"
          />
          <rect
            x="14.6342"
            y="34.9468"
            width="20.1988"
            height="36.5812"
            rx="10.0994"
            transform="rotate(-45 14.6342 34.9468)"
            fill="#FFBCC4"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0.804932"
            y="0"
            width="82.1951"
            height="82.1951"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.891667 0 0 0 0 0.880521 0 0 0 0 0.880521 0 0 0 1 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="68.4562"
            y1="66.2412"
            x2="12.9703"
            y2="7.51219"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF4259" />
            <stop offset="1" stop-color="#FE7F8E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </q-page>
</template>

<script>
import { T } from "../store/module-example/types";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getAllUsers();
  },
  methods: {
    getAllUsers() {
      const successCb = (userList) => {
        console.log(userList);
        this.loading = false;
      };
      const errorCb = (errorMessage) => {
        this.loading = false;
      };
      this.loading = true;
      this.$store.dispatch(T.GET_USER_DATA, {
        data: {},
        successCb,
        errorCb,
      });
    },
  },
};
</script>

<style lang="scss">
.main-page {
  padding: 0 20px;
  margin-bottom: 60px;
  .main-title {
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 38px;
    display: flex;
    align-items: center;
    margin-bottom: 48px;
    margin-top: 50px;
    color: #000000;
  }
  .choice {
    margin-top: 26px;
    display: flex;
    justify-content: center;
  }
}
</style>
