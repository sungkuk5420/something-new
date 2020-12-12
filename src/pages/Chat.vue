<template>
  <q-page class="chat-page">
    <van-nav-bar
      title="고구마"
      left-arrow
      @click-left="
        () => {
          $router.push('/chatList');
        }
      "
    ></van-nav-bar>
    <div class="chat">
      <div class="chat-contents">
        <div class="date-bar">
          <div class="line">
            <hr />
          </div>
          <div class="date">2020년 10월 4일</div>
          <div class="line">
            <hr />
          </div>
        </div>
        <div class="chat-content">
          <div class="chat-line">
            <div class="profile-image">
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <circle cx="19.5" cy="19.5" r="19.5" fill="#C4C4C4" />
                <circle cx="19.5" cy="19.5" r="19.5" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use xlink:href="#image0" transform="translate(0 -0.25) scale(0.0192308)" />
                  </pattern>
                  <image
                    id="image0"
                    width="52"
                    height="78"
                    xlink:href="data:image/jpeg;base64,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"
                  />
                </defs>
              </svg>
            </div>
            <div class="chat-text">
              <div class="line">안녕하세요! 저는 고구마애요</div>
            </div>
          </div>
          <div class="chat-line">
            <div class="profile-image non-image"></div>
            <div class="chat-text chat-last">
              <div class="line">퍽퍽하죠</div>
              <div class="time">12:16</div>
            </div>
          </div>
          <div class="chat-line-mine">
            <div class="chat-text">
              <div class="time">12:16</div>
              <div class="line">반가워요!</div>
            </div>
          </div>
          <div class="chat-line-mine">
            <div class="chat-text">
              <div class="time">12:17</div>
              <div class="line">전 감자애오</div>
            </div>
          </div>
        </div>
      </div>
      <div class="input-box">
        <div class="input-inner">
          <input type="text" name id />
        </div>
        <div class="input-emoticon">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect opacity="0.5" width="32" height="32" rx="8" fill="#E3E1E1" />
            <rect x="23" y="15" width="2" height="14" transform="rotate(90 23 15)" fill="#747070" />
            <rect
              x="17"
              y="23"
              width="2"
              height="14"
              transform="rotate(-180 17 23)"
              fill="#747070"
            />
          </svg>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style lang="scss">
.chat-page {
  background-color: #f9f8f8;
  display: flex;
  flex-direction: column;
  .van-nav-bar .van-icon {
    color: #000;
  }
  .van-hairline--bottom::after {
    border-bottom: none;
  }
  .chat {
    flex: 1;
    // display: flex;
    // align-content: space-around;
    .chat-contents {
      .date-bar {
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 20px 0;
        font-size: 12px;
        .date {
          font-family: Noto Sans CJK KR;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 18px;
          display: flex;
          align-items: center;
          color: #747070;
        }
        .line {
          flex: 1;
          margin: 4px 16px;
          hr {
            border: 0;
            height: 1px;
            background: #ddd;
          }
        }
      }
      .chat-content {
        .chat-line {
          display: flex;
          margin-bottom: 6px;
          .profile-image {
            margin-left: 23px;
            img {
              width: 50%;
              max-width: 160px;
              border-radius: 50%;
              margin-top: 30px;
            }
          }
          .non-image {
            margin-left: 62px;
          }
          .chat-text {
            margin-left: 15px;
            .line {
              height: 43px;
              padding: 0 12px;
              background: #ffffff;
              border: 1px solid #ece8e8;
              box-sizing: border-box;
              box-shadow: 0px 2px 22px rgba(0, 0, 0, 0.08);
              border-radius: 0px 8px 8px 8px;
              font-family: Noto Sans CJK KR;
              font-style: normal;
              font-weight: normal;
              font-size: 14px;
              line-height: 21px;
              display: flex;
              align-items: center;
              color: #121214;
            }
            .time {
              margin-left: 7px;
              padding-bottom: 4px;
              font-family: Noto Sans CJK KR;
              font-style: normal;
              font-weight: normal;
              font-size: 11px;
              line-height: 16px;
              display: flex;
              color: #747070;
              align-items: flex-end;
            }
          }
          .chat-last {
            display: flex;
          }
        }
        .chat-line-mine {
          margin-right: 25px;
          margin-bottom: 4px;
          display: flex;
          justify-content: flex-end;
          .chat-text {
            display: flex;
            .line {
              height: 43px;
              padding: 0 12px;
              background: #fe7f8e;
              box-shadow: 0px 2px 22px rgba(0, 0, 0, 0.08);
              border-radius: 8px 0px 8px 8px;
              font-family: Noto Sans CJK KR;
              font-style: normal;
              font-weight: normal;
              font-size: 14px;
              line-height: 21px;
              display: flex;
              align-items: center;
              color: #ffffff;
            }
            .time {
              margin-right: 7px;
              padding-bottom: 4px;
              font-family: Noto Sans CJK KR;
              font-style: normal;
              font-weight: normal;
              font-size: 11px;
              line-height: 16px;
              display: flex;
              color: #747070;
              align-items: flex-end;
            }
          }
        }
      }
    }
    .input-box {
      position: fixed;
      bottom: 0;
      width: 100%;
      background: white;
      height: 48px;
      display: flex;
      padding-left: 16px;
      display: flex;
      align-items: center;
      .input-inner {
        background: #ffffff;
        border: 1px solid #e3e1e1;
        box-sizing: border-box;
        border-radius: 8px;
        height: 32px;
        flex: 1;
        padding: 0;
        input {
          padding: 0 10px;
          width: 100%;
          height: 32px;
          border: none;
          background: transparent;
        }
      }
      .input-emoticon {
        width: 32px;
        height: 32px;
        background: #e3e1e1;
        opacity: 0.5;
        border-radius: 8px;
        margin-left: 8px;
        margin-right: 16px;
        flex: none;
      }
    }
  }
}
</style>
