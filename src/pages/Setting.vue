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
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0" transform="translate(-0.254098) scale(0.0163934)" />
            </pattern>
            <image id="image0" width="92" height="61" :href="loginUser.profileImage" />
          </defs>
        </svg>
      </div>
      <div class="info-text">
        <div class="nickname">{{ loginUser.name }}</div>
        <div class="email">{{ loginUser.email }}</div>
      </div>
      <div class="info-button">
        <button type="button" @click="$router.push('/user-profile')">프로필 관리</button>
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
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      loginUser: "getLoginUser",
    }),
  },
  methods: {
    logOut(event) {
      event.preventDefault();

      let userCheck = null;

      const thisObj = this;
      const successCb = (result) => {
        // 완료함수
        Toast.success("로그아웃 성공");
      };

      const errorCb = (result) => {
        // 실패함수
        Toast.fail("로그아웃 실패");
      };
      thisObj.$store.dispatch(T.USER_LOG_OUT, {
        data: { userCheck },
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
    margin-top: 50px;
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
