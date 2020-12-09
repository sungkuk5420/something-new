<template>
  <q-page class="ParticipationList-page">
    <van-tabs v-model="activeName">
      <van-tab title="내가 좋아요" name="a">
        <div class="give">
          <van-search v-model="value" placeholder="Placeholder" />
          <div class="content">
            <ul v-show="giveToLikeList.length != 0">
              <li>
                <div class="image">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <circle cx="30" cy="30" r="30" fill="#C4C4C4" />
                    <circle cx="30" cy="30" r="30" fill="url(#pattern0)" />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlink:href="#image0"
                          transform="translate(0 -0.25188) scale(0.0075188)"
                        />
                      </pattern>
                      <image
                        id="image0"
                        width="133"
                        height="200"
                        xlink:href="data:image/jpeg;base64,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"
                      />
                    </defs>
                  </svg>
                </div>
                <div class="left">
                  <div class="nickname">김냠냠</div>
                  <div class="user-infomation">
                    <div class="user-infomation-age">25</div>
                    <div class="user-infomation-address">경기</div>
                  </div>
                </div>
                <div class="right">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 5.5L5.5 16.5"
                      stroke="#BEBBBB"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.5 5.5L16.5 16.5"
                      stroke="#BEBBBB"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </li>
              <li>
                <div class="image">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <circle cx="30" cy="30" r="30" fill="#C4C4C4" />
                    <circle cx="30" cy="30" r="30" fill="url(#pattern0)" />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlink:href="#image0"
                          transform="translate(0 -0.25188) scale(0.0075188)"
                        />
                      </pattern>
                      <image
                        id="image0"
                        width="133"
                        height="200"
                        xlink:href="data:image/jpeg;base64,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"
                      />
                    </defs>
                  </svg>
                </div>
                <div class="left">
                  <div class="nickname">김냠냠</div>
                  <div class="user-infomation">
                    <div class="user-infomation-age">25</div>
                    <div class="user-infomation-address">경기</div>
                  </div>
                </div>
                <div class="right">
                  <div class="right">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 5.5L5.5 16.5"
                        stroke="#BEBBBB"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.5 5.5L16.5 16.5"
                        stroke="#BEBBBB"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </li>
            </ul>

            <div class="list-none" v-show="giveToLikeList.length == 0">
              <svg
                width="117"
                height="95"
                viewBox="0 0 117 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="80.9817"
                  width="46.4536"
                  height="84.1302"
                  rx="23.2268"
                  transform="rotate(40.2482 80.9817 0)"
                  fill="#BEBBBB"
                />
                <rect
                  y="34.73"
                  width="46.4536"
                  height="84.1302"
                  rx="23.2268"
                  transform="rotate(-45 0 34.73)"
                  fill="#E3E1E1"
                />
              </svg>

              <div class="title">좋아요한 친구가 없어요!</div>
              <div class="title-sub">설레는 인연을 찾으러 가볼까요?</div>
              <div class="friend-button">친구 추천 받으러 가기</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="상대방이 좋아요" name="b">
        <div class="take">
          <van-search v-model="value" placeholder="Placeholder" />
          <div class="content">
            <ul v-show="takeToLikeList.length != 0">
              <li>
                <div class="image">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <circle cx="30" cy="30" r="30" fill="#C4C4C4" />
                    <circle cx="30" cy="30" r="30" fill="url(#pattern0)" />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlink:href="#image0"
                          transform="translate(0 -0.25188) scale(0.0075188)"
                        />
                      </pattern>
                      <image
                        id="image0"
                        width="133"
                        height="200"
                        xlink:href="data:image/jpeg;base64,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"
                      />
                    </defs>
                  </svg>
                </div>
                <div class="left">
                  <div class="nickname">김냠냠</div>
                  <div class="user-infomation">
                    <div class="user-infomation-age">25</div>
                    <div class="user-infomation-address">경기</div>
                  </div>
                </div>
                <div class="right">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 5.5L5.5 16.5"
                      stroke="#BEBBBB"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.5 5.5L16.5 16.5"
                      stroke="#BEBBBB"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </li>
              <li>
                <div class="image">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <circle cx="30" cy="30" r="30" fill="#C4C4C4" />
                    <circle cx="30" cy="30" r="30" fill="url(#pattern0)" />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlink:href="#image0"
                          transform="translate(0 -0.25188) scale(0.0075188)"
                        />
                      </pattern>
                      <image
                        id="image0"
                        width="133"
                        height="200"
                        xlink:href="data:image/jpeg;base64,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"
                      />
                    </defs>
                  </svg>
                </div>
                <div class="left">
                  <div class="nickname">김냠냠</div>
                  <div class="user-infomation">
                    <div class="user-infomation-age">25</div>
                    <div class="user-infomation-address">경기</div>
                  </div>
                </div>
                <div class="right">
                  <div class="right">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 5.5L5.5 16.5"
                        stroke="#BEBBBB"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.5 5.5L16.5 16.5"
                        stroke="#BEBBBB"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </li>
            </ul>

            <div class="list-none" v-show="takeToLikeList.length == 0">
              <svg
                width="117"
                height="95"
                viewBox="0 0 117 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="80.9817"
                  width="46.4536"
                  height="84.1302"
                  rx="23.2268"
                  transform="rotate(40.2482 80.9817 0)"
                  fill="#BEBBBB"
                />
                <rect
                  y="34.73"
                  width="46.4536"
                  height="84.1302"
                  rx="23.2268"
                  transform="rotate(-45 0 34.73)"
                  fill="#E3E1E1"
                />
              </svg>

              <div class="title">좋아요한 친구가 없어요!</div>
              <div class="title-sub">설레는 인연을 찾으러 가볼까요?</div>
              <div class="friend-button">친구 추천 받으러 가기</div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <div class=""></div>
  </q-page>
</template>

<script>
export default {
  data() {
    value: "";
    return {
      activeName: "a",
      giveToLikeList: [],
      takeToLikeList: [],
    };
  },
};
</script>

<style lang="scss">
.ParticipationList-page {
  .van-tabs.van-tabs--line {
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
    .van-tabs__content {
      flex: 1;
      display: flex;
      .van-tab__pane {
        height: 100%;
        .give,
        .take {
          height: 100%;
          display: flex;
          flex-direction: column;
          .content {
            display: flex;
            align-items: center;
            width: 100%;
            flex: 1;
            padding-bottom: 60px;
            .list-none {
              margin-bottom: 78px;
            }
          }
        }
      }
    }
  }

  .van-tabs__line {
    background: #fe7f8e;
    width: 50%;
  }
  .give {
    .list-none {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      .title {
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        color: #121214;
        margin-bottom: 12px;
      }
      .title-sub {
        font-family: Apple SD Gothic Neo;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #72717d;
        margin-bottom: 14px;
      }
      .friend-button {
        font-family: Apple SD Gothic Neo;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        color: #ffffff;
        padding: 10px 15px;
        background: #fe7f8e;
        border-radius: 12px;
      }
    }
    .van-search {
      margin-bottom: 14px;
    }
    ul > li {
      margin-bottom: 12px;
      display: flex;
      .left {
        flex: 8;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        padding-left: 26px;
        justify-content: center;
        .nickname {
          font-family: Noto Sans CJK KR;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 24px;
          display: flex;
          align-items: center;
          color: #121214;
        }
        .user-infomation {
          display: flex;
          font-family: Noto Sans CJK KR;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 21px;
          display: flex;
          align-items: center;
          color: #585555;
          .user-infomation-address {
            position: relative;
            padding-left: 10px;
          }
          .user-infomation-address:before {
            content: "";
            width: 3px;
            height: 3px;
            position: absolute;
            left: 3px;
            top: 8px;
            border-radius: 100%;
            background: #585555;
          }
        }
      }
      .right {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .image {
        width: 60px;
        height: 60px;
      }
    }
    .content {
      padding: 0 20px;
    }
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
  }
  .take {
    .list-none {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      .title {
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        color: #121214;
        margin-bottom: 12px;
      }
      .title-sub {
        font-family: Apple SD Gothic Neo;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #72717d;
        margin-bottom: 14px;
      }
      .friend-button {
        font-family: Apple SD Gothic Neo;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        color: #ffffff;
        padding: 10px 15px;
        background: #fe7f8e;
        border-radius: 12px;
      }
    }
    .van-search {
      margin-bottom: 14px;
    }
    ul > li {
      margin-bottom: 12px;
      display: flex;
      .left {
        flex: 8;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        padding-left: 26px;
        justify-content: center;
        .nickname {
          font-family: Noto Sans CJK KR;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 24px;
          display: flex;
          align-items: center;
          color: #121214;
        }
        .user-infomation {
          display: flex;
          font-family: Noto Sans CJK KR;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 21px;
          display: flex;
          align-items: center;
          color: #585555;
          .user-infomation-address {
            position: relative;
            padding-left: 10px;
          }
          .user-infomation-address:before {
            content: "";
            width: 3px;
            height: 3px;
            position: absolute;
            left: 3px;
            top: 8px;
            border-radius: 100%;
            background: #585555;
          }
        }
      }
      .right {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .image {
        width: 60px;
        height: 60px;
      }
    }
    .content {
      padding: 0 20px;
    }
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
  }
}
</style>
