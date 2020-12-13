<template>
  <q-page class="user-profile-page">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="~assets/user-image-1.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="~assets/user-image-2.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="~assets/user-image-3.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="~assets/user-image-4.jpg" />
      </van-swipe-item>
    </van-swipe>

    <div class="card-detail">
      <section>
        <!-- 카드 상세 -->
        <!-- <div class="floating-card">
          <div class="normal">
            <div class="left">
              <div class="user-name">김냠냠</div>
              <ul class="user-age-address">
                <li>25세</li>
                <li>서울</li>
              </ul>
            </div>
            <div class="right">
              <div class="button-no">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d)">
                    <circle cx="24" cy="24" r="21" fill="white" />
                  </g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.4862 31.5376C17.6223 32.6737 19.4645 32.6737 20.6006 31.5376L24.0239 28.1143L27.48 31.5704C28.6162 32.7066 30.4583 32.7066 31.5945 31.5704C32.7306 30.4342 32.7306 28.5921 31.5945 27.4559L28.1384 23.9998L31.5944 20.5437C32.7306 19.4076 32.7306 17.5655 31.5944 16.4293C30.4583 15.2931 28.6162 15.2931 27.48 16.4293L24.0239 19.8853L20.6007 16.4621C19.4645 15.3259 17.6224 15.3259 16.4862 16.4621C15.35 17.5983 15.35 19.4404 16.4862 20.5766L19.9094 23.9998L16.4862 27.4231C15.35 28.5593 15.35 30.4014 16.4862 31.5376Z"
                    fill="#D2CDCD"
                  />
                  <defs>
                    <filter
                      id="filter0_d"
                      x="0"
                      y="0"
                      width="52"
                      height="52"
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
                  </defs>
                </svg>
              </div>
              <div class="button-ok">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d)">
                    <rect
                      x="3"
                      y="3"
                      width="42"
                      height="42"
                      rx="21"
                      fill="url(#paint0_linear)"
                    />
                    <rect
                      x="29.7849"
                      y="12.7998"
                      width="11.7508"
                      height="21.2814"
                      rx="5.87539"
                      transform="rotate(40.2482 29.7849 12.7998)"
                      fill="#FF96A2"
                    />
                    <rect
                      x="9.30005"
                      y="21.585"
                      width="11.7508"
                      height="21.2814"
                      rx="5.87539"
                      transform="rotate(-45 9.30005 21.585)"
                      fill="#FFBCC4"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d"
                      x="0"
                      y="0"
                      width="52"
                      height="52"
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
                    <linearGradient
                      id="paint0_linear"
                      x1="40.6113"
                      y1="39.791"
                      x2="8.33203"
                      y2="5.625"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF4259" />
                      <stop offset="1" stop-color="#FE7F8E" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>-->
        <!-- 카드 상세 끝 -->
        <!-- 내가 좋아한 카드  -->
        <!-- <div class="floating-card">
          <div class="give-like">
            <div class="left">
              <div class="user-name">김냠냠</div>
              <ul class="user-age-address">
                <li>25세</li>
                <li>서울</li>
              </ul>
            </div>
            <div class="right">
              <div class="like-button">
                <svg
                  width="30"
                  height="24"
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="20.4973"
                    width="11.7579"
                    height="21.2943"
                    rx="5.87896"
                    transform="rotate(40.2482 20.4973 0)"
                    fill="#FE7F8E"
                  />
                  <rect
                    y="8.79199"
                    width="11.7579"
                    height="21.2943"
                    rx="5.87896"
                    transform="rotate(-45 0 8.79199)"
                    fill="#FFBCC4"
                  />
                </svg>
                <p>좋아요</p>
              </div>
            </div>
          </div>
        </div>-->
        <!-- 내가 좋아한 카드 끝 -->
        <!-- 내가 좋아한 카드  -->
        <div class="floating-card">
          <div class="give-like">
            <div class="left">
              <div class="user-name">
                <span>{{ loginUser.name }}</span>
                <svg
                  style="margin-left: 5px"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 9.50069V12.0007H2.5L9.87333 4.62736L7.37333 2.12736L0 9.50069ZM11.8067 2.69402C12.0667 2.43402 12.0667 2.01402 11.8067 1.75402L10.2467 0.194023C9.98667 -0.0659766 9.56667 -0.0659766 9.30667 0.194023L8.08667 1.41402L10.5867 3.91402L11.8067 2.69402Z"
                    fill="#FE7F8E"
                  />
                </svg>
              </div>
              <ul class="user-age-address">
                <li>{{ new Date().getFullYear() - loginUser.birthYear }}세</li>
                <li>{{ loginUser.location }}</li>
              </ul>
            </div>
            <div class="right">
              <div class="like-div">
                <svg
                  width="30"
                  height="24"
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="20.4973"
                    width="11.7579"
                    height="21.2943"
                    rx="5.87896"
                    transform="rotate(40.2482 20.4973 0)"
                    fill="#FE7F8E"
                  />
                  <rect
                    y="8.79199"
                    width="11.7579"
                    height="21.2943"
                    rx="5.87896"
                    transform="rotate(-45 0 8.79199)"
                    fill="#FFBCC4"
                  />
                </svg>
                <p>1,343</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 내가 좋아한 카드 끝 -->
      </section>
      <section>
        <div class="title">기본 정보</div>
        <div class="content">
          <ul>
            <li>
              <div class="info-title">성별</div>
              <div class="info-description">
                {{ loginUser.gender === "men" ? "남자" : "여자" }}
              </div>
            </li>
            <li>
              <div class="info-title">출생년도</div>
              <div class="info-description">{{ loginUser.birthYear }}</div>
            </li>
            <li @click="$router.push('/user-tall')">
              <div class="info-title">키</div>
              <div class="info-description">
                <span>
                  {{
                    loginUser.height > 0
                      ? `${loginUser.height}cm`
                      : "키를 선택해주세요"
                  }}
                </span>
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
            </li>
            <li @click="$router.push('/user-location')">
              <div class="info-title">위치</div>
              <div class="info-description">
                <span>{{ loginUser.location }}</span>
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
            </li>
          </ul>
        </div>

        <div class="title">추가 정보</div>
        <div class="content">
          <ul>
            <li @click="$router.push('/hobby')">
              <div class="info-title">취미</div>
              <div class="info-description">
                <span>
                  {{
                    loginUser.hobbies.length > 0
                      ? loginUser.hobbies.slice(0, 2).toString()
                      : "취미를 선택해주세요"
                  }}
                </span>
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
            </li>
            <li @click="$router.push('/personality')">
              <div class="info-title">성격</div>
              <div class="info-description">
                <span>
                  {{
                    loginUser.personalities.length > 0
                      ? loginUser.personalities.slice(0, 2).toString()
                      : "성격을 선택해주세요"
                  }}
                </span>
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
            </li>
            <li @click="$router.push('/smoke')">
              <div class="info-title">흡연</div>
              <div class="info-description">
                <span>
                  {{
                    loginUser.smoking !== ""
                      ? smokeType()
                      : "흡연여부를 선택해주세요"
                  }}
                </span>
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
            </li>
            <li @click="$router.push('/drink')">
              <div class="info-title">음주</div>
              <div class="info-description">
                <span>
                  {{
                    loginUser.drinking !== ""
                      ? drinkType()
                      : "음주여부를 선택해주세요"
                  }}
                </span>
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
            </li>
          </ul>
        </div>
      </section>
      <section>
        <!-- 내가 좋아한 카드 시작 -->
        <!-- <div class="give-like-bottom">
          <div class="give-like-bottom-title">
            상대방의 응답을 기다리고 있어요!
          </div>
          <button type="button" class="button-wating">대화하기</button>
        </div>-->

        <!-- 내가 좋아한 카드 끝 -->
        <!-- 나를 좋아한 카드 시작 -->
        <!-- <div class="take-like-bottom">
          <div class="take-like-bottom-title">
            상대방이 종규님의 답변을 기다리고 있어요!
          </div>
          <div class="take-like-bottom-button">
            <svg
              width="66"
              height="66"
              viewBox="0 0 66 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <circle cx="31" cy="31" r="28" fill="white" />
              </g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.9816 41.0501C22.4965 42.565 24.9527 42.565 26.4676 41.0501L31.0319 36.4858L35.64 41.0939C37.155 42.6088 39.6111 42.6088 41.126 41.0939C42.6409 39.579 42.6409 37.1228 41.126 35.6079L36.5179 30.9998L41.126 26.3917C42.6409 24.8768 42.6409 22.4206 41.126 20.9057C39.6111 19.3908 37.1549 19.3908 35.64 20.9057L31.0319 25.5138L26.4676 20.9495C24.9527 19.4346 22.4965 19.4346 20.9816 20.9495C19.4667 22.4644 19.4667 24.9206 20.9816 26.4355L25.5459 30.9998L20.9816 35.5641C19.4667 37.079 19.4667 39.5352 20.9816 41.0501Z"
                fill="#D2CDCD"
              />
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
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="2.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.891667 0 0 0 0 0.880521 0 0 0 0 0.880521 0 0 0 1 0"
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
              </defs>
            </svg>
            <svg
              width="66"
              height="66"
              viewBox="0 0 66 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <rect
                  x="3"
                  y="3"
                  width="56"
                  height="56"
                  rx="28"
                  fill="url(#paint0_linear)"
                />
                <rect
                  x="38.7131"
                  y="16.0664"
                  width="15.6677"
                  height="28.3752"
                  rx="7.83385"
                  transform="rotate(40.2482 38.7131 16.0664)"
                  fill="#FF96A2"
                />
                <rect
                  x="11.3999"
                  y="27.7803"
                  width="15.6677"
                  height="28.3752"
                  rx="7.83385"
                  transform="rotate(-45 11.3999 27.7803)"
                  fill="#FFBCC4"
                />
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
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="2.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.891667 0 0 0 0 0.880521 0 0 0 0 0.880521 0 0 0 1 0"
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
                <linearGradient
                  id="paint0_linear"
                  x1="53.1484"
                  y1="52.0547"
                  x2="10.1094"
                  y2="6.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF4259" />
                  <stop offset="1" stop-color="#FE7F8E" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>-->
        <!-- 나를 좋아한 카드 끝 -->
        <!-- 서로 매칭된 카드 시작 -->
        <!-- <div class="matching-bottom">
          <div class="matching-bottom-title">
            상대방의 응답을 기다리고 있어요!
          </div>
          <button type="button" class="button-matching">대화하기</button>
        </div>-->

        <!-- 서로 매칭된 카드 끝 -->
      </section>
    </div>
  </q-page>
</template>

<script>
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
    smokeType() {
      switch (this.loginUser.smoking) {
        case "ST00":
          return "비흡연";
        case "ST01":
          return "가끔";
        case "ST02":
          return "자주";
        case "ST03":
          return "비흡연자 앞에서 안함";
        case "ST04":
          return "상대방이 싫어하면 금연";
        default:
          break;
      }
    },
    drinkType() {
      switch (this.loginUser.drinking) {
        case "DT00":
          return "못함";
        case "DT01":
          return "가끔";
        case "DT02":
          return "적당히";
        case "DT03":
          return "많이";
        case "DT04":
          return "술고래";
        case "DT05":
          return "조금씩 자주";
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss">
.user-profile-page {
  .van-swipe {
    max-width: 100%;
    max-height: 375px;
  }
  .van-swipe__indicators {
    top: 50px;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .card-detail {
    padding-bottom: 80px;
    background: #f9f8f8;
    .title {
      font-family: Noto Sans CJK KR;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 21px;
      display: flex;
      align-items: center;
      color: #747070;
      padding: 0 20px;
      margin-bottom: 8px;
    }
    .content {
      margin-bottom: 20px;
      ul {
        border-top: 1px solid #ece8e8;
        border-bottom: 1px solid #ece8e8;
        padding: 0 16px;
        background: #fff;
        li {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #ece8e8;
          position: relative;
          padding: 20px 40px 20px 10px;

          .info-title {
            font-family: Noto Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 22px;
            color: #121214;
          }
          .info-description {
            display: flex;
            align-items: center;
            span {
              font-family: Noto Sans;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 22px;
              color: #747070;
            }
            svg {
              position: absolute;
              right: 20px;
            }
          }
        }
        li:last-child {
          border-bottom: none;
        }
      }
    }
  }
  /*플로팅 타이틀 공통*/
  .floating-card {
    background: #ffffff;
    box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.08);
    border-radius: 16px;
    margin: 0 16px;
    padding: 20px 25px;
    position: relative;
    top: -41px;
    .user-name {
      font-family: Noto Sans CJK KR;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: #121214;
    }
    .user-age-address {
      font-family: Noto Sans CJK KR;
      font-style: normal;
      font-weight: normal;
      display: flex;
      font-size: 14px;
      line-height: 21px;
      color: #747070;
      li {
        position: relative;
        padding-right: 10px;
      }
      li:before {
        content: "";
        position: absolute;
        width: 3px;
        height: 3px;
        background: #747070;
        right: 3px;
        border-radius: 100%;
        top: 9px;
      }
      li:last-child:before {
        display: none;
      }
    }
    .right {
      display: flex;
      align-items: center;
    }
    .like-div {
      display: flex;
      align-items: center;
      svg {
        height: 20px;
      }
    }
  }

  /* 카드 상세 */
  .normal {
    display: flex;
    justify-content: space-between;
    .right {
      display: flex;
    }
  }

  /* 내가 좋아한 카드  */
  .give-like {
    display: flex;
    justify-content: space-between;
    .right {
      p {
        font-family: Noto Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 14px;
        margin-bottom: 0;
        color: #fe7f8e;
      }
    }
  }
  /* 내가 좋아한 카드 하단 */
  .give-like-bottom {
    padding: 0 18px;
    margin-top: 30px;
    .give-like-bottom-title {
      font-family: Noto Sans CJK KR;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 108.5%;
      color: #ff576b;
      text-align: center;
      margin-bottom: 12px;
    }
    .button-wating {
      background: #d2cdcd;
      border-radius: 8px;
      font-family: Noto Sans CJK KR;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 108.5%;
      color: #747070;
      padding: 20px 0;
      width: 100%;
      border: none;
    }
  }
  /* 나를 좋아한 카드 하단*/
  .take-like-bottom {
    padding: 0 18px;
    margin-top: 30px;
    .take-like-bottom-title {
      font-family: Noto Sans CJK KR;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 108.5%;
      color: #ff576b;
      text-align: center;
      margin-bottom: 12px;
    }
    .take-like-bottom-button {
      display: flex;
      justify-content: center;
    }
  }
  /* 서로 매칭된 카드 하단 */
  .matching-bottom {
    padding: 0 18px;
    margin-top: 30px;
    .matching-bottom-title {
      font-family: Noto Sans CJK KR;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 108.5%;
      color: #ff576b;
      text-align: center;
      margin-bottom: 12px;
    }
    .button-matching {
      background: #fe7f8e;
      border-radius: 8px;
      font-family: Noto Sans CJK KR;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 108.5%;
      color: #fff;
      padding: 20px 0;
      width: 100%;
      border: none;
    }
  }
}
</style>
