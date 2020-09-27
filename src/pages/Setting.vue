<template>
  <q-page class="setting-page">
    <div class="mypage-title">내 정보</div>
    <div class="mypage-info">
      <div class="info-img">
        <svg
          width="66"
          height="66"
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g filter="url(#filter0_d)">
            <circle cx="33" cy="29" r="23" fill="#C4C4C4" />
            <circle cx="33" cy="29" r="23" fill="url(#pattern0)" />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0"
              y="0"
              width="66"
              height="66"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0"
                transform="translate(-0.254098) scale(0.0163934)"
              />
            </pattern>
            <image
              id="image0"
              width="92"
              height="61"
              xlink:href="data:image/jpeg;base64,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"
            />
          </defs>
        </svg>
      </div>
      <div class="info-text">
        <div class="nickname">고구마</div>
        <div class="email">something@gmail.com</div>
      </div>
      <div class="info-button">
        <button type="button" onclick="location.href = '#' ">
          프로필 관리
        </button>
      </div>
    </div>
    <div class="mypage-list">
      <ul>
        <li>
          <a href="#">
            <div class="mypage-list-title">알림 설정</div>
            <div class="mypage-list-button">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path opacity="0.3" d="M1 1L7 7L1 13" stroke="black" />
              </svg>
            </div>
          </a>
        </li>
        <li>
          <a href="#" @click="logOut">
            <div class="mypage-list-title">로그아웃</div>
            <div class="mypage-list-button">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path opacity="0.3" d="M1 1L7 7L1 13" stroke="black" />
              </svg>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="mypage-list-title">회원탈퇴</div>
          </a>
        </li>
      </ul>
    </div>
  </q-page>
</template>

<script>
import { T } from "../store/module-example/types";
import { Toast } from "vant";

export default {
  data() {
    return {};
  },
  methods: {
    logOut(event) {
      event.preventDefault();

      let isLogin = false;

      const thisObj = this;
      const successCb = (result) => {
        // 완료함수
        thisObj.$router.push({ path: "/" });
        Toast.success("로그아웃 성공");
      };

      const errorCb = (result) => {
        // 실패함수
        Toast.fail("로그아웃 실패");
      };
      thisObj.$store.dispatch(T.USER_LOG_OUT, {
        data: { isLogin },
        successCb,
        errorCb,
      });
    },
  },
};
</script>

<style lang="scss">
.setting-page {
  padding: 0 14px;
  .mypage-title {
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 38px;
    display: flex;
    align-items: center;
    margin-bottom: 35px;
    color: #000000;
  }
  .mypage-info {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ece8e8;
    padding: 10px 0;
  }
  .info-img {
    flex: 1;
  }
  .info-text {
    flex: 2;
  }
  .info-text .nickname {
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #121214;
  }
  .info-text .email {
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #747070;
  }
  .info-button button {
    flex: 1;
    background: #ffedef;
    border-radius: 16px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;
    color: #ff576b;
    padding: 7px 15px;
    text-align: center;
    border: none;
  }
  .mypage-list ul li {
    display: flex;
    align-items: center;

    border-bottom: 1px solid #ece8e8;
  }
  .mypage-list ul li:last-child {
    border-bottom: none;
    text-align: center;
  }
  .mypage-list ul li:last-child .mypage-list-title {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* grey / 600 */

    color: #747070;
  }
  .mypage-list ul li a {
    width: 100%;
    display: flex;
    padding: 25px 15px;
  }
  .mypage-list-title {
    flex: 8;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 1.1;

    /* darkBackground */

    color: #121214;
  }
  .mypage-list-button {
    flex: 2;
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }
}
</style>