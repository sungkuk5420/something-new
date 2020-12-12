<template>
  <q-page class="chat-list-page">
    <div class="chat-list-title">채팅 목록</div>
    <div class="list" v-show="chatList.length != 0">
      <ul>
        <van-swipe-cell v-for="(currentChat,index) in chatList" :key="index">
          <li class="chat first" @click="moveToChatRoom">
            <div class="user-image">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <circle cx="22" cy="22" r="22" fill="#C4C4C4" />
                <circle cx="22" cy="22" r="22" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use xlink:href="#image0" transform="translate(0 -0.245763) scale(0.0169492)" />
                  </pattern>
                  <image
                    id="image0"
                    width="59"
                    height="88"
                    xlink:href="data:image/jpeg;base64,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"
                  />
                </defs>
              </svg>
            </div>
            <div class="chat__user-preview">
              <div class="chat__user-preview__name">{{currentChat.name}}</div>
              <div class="chat__user-preview__latest-massage">{{currentChat.latestMassage}}</div>
            </div>
            <div class="chat__user-timeline">
              <div class="chat__user-timeline__time">{{currentChat.time}}</div>
              <div class="chat__user-timeline__badge-count">{{currentChat.badgeCount}}</div>
            </div>
          </li>
          <template #right>
            <van-button square text="나가기" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
      </ul>
    </div>
    <div class="list-none" v-show="chatList.length == 0">
      <svg
        width="118"
        height="97"
        viewBox="0 0 118 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M75.8571 62.1169C75.8571 76.4763 64.2165 88.1169 49.8571 88.1169L29.8833 88.1169L18.1186 95.9601C14.7958 98.1754 10.3449 95.7933 10.3451 91.7997L10.3455 82.8777C4.06136 78.1318 -2.28882e-05 70.5986 -2.28882e-05 62.1169V55.5C-1.52588e-05 41.1406 11.6406 29.5 26 29.5L49.8571 29.5C64.2165 29.5 75.8571 41.1406 75.8571 55.5V62.1169Z"
            fill="#FFBCC4"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.2856 45.6428C25.2856 60.0023 36.9262 71.6429 51.2856 71.6429H80.0706L97.5826 83.3176C100.905 85.5329 105.356 83.1508 105.356 79.1572L105.356 67.9549C112.93 63.411 118 55.1189 118 45.6428V26C118 11.6406 106.359 0 91.9999 0L51.2856 3.13375e-06C36.9262 3.76142e-06 25.2856 11.6406 25.2856 26V45.6428Z"
            fill="#FE7F8E"
          />
          <circle cx="52.6785" cy="35.8214" r="6.32143" fill="white" />
          <circle cx="71.6427" cy="35.8214" r="6.32143" fill="white" />
          <circle cx="90.6067" cy="35.8214" r="6.32143" fill="white" />
        </g>
      </svg>
      <div class="title">대화 중인 친구가 없어요!</div>
      <div class="title-sub">대화할 친구를 찾으러 가볼까요?</div>
      <div class="friend-button" @click="getChatList">친구 추천 받기</div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      chatList: [],
    };
  },
  methods: {
    getChatList() {
      this.chatList = [
        {
          name: "테스트 유저1",
          latestMassage: "안녕하세요! 저는 고구마에요!",
          time: `1분전`,
          badgeCount: `1`,
        },
        {
          name: "테스트 유저2",
          latestMassage: "안녕하세요! 저는 고구마에요!",
          time: `2분전`,
          badgeCount: `2`,
        },
        {
          name: "테스트 유저3",
          latestMassage: "안녕하세요! 저는 고구마에요!",
          time: `3분전`,
          badgeCount: `3`,
        },
        {
          name: "테스트 유저4",
          latestMassage: "안녕하세요! 저는 고구마에요!",
          time: `4분전`,
          badgeCount: `4`,
        },
      ];
    },
    moveToChatRoom() {
      this.$router.push("/chat");
    },
  },
};
</script>

<style lang="scss">
.chat-list-page {
  padding: 0 24px;
  padding-top: 50px;
  padding-bottom: 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
  .chat-list-title {
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
  .list {
    ul {
      .van-swipe-cell__right {
        display: flex;
        align-items: center;
      }
      .van-button--danger {
        background: #fe7f8e;
        border-radius: 8px;
        border: none;
        height: 64px;
      }
      .first {
        padding-top: 0px;
      }
      .chat {
        display: flex;
        padding-bottom: 18px;
        padding-top: 18px;
        border-bottom: 1px solid #ece8e8;
        align-items: center;

        .user-image {
          flex: 2;
          display: flex;
          justify-content: center;
        }
        &__user-preview {
          flex: 6;
          padding-left: 5px;
          &__name {
            font-family: Noto Sans KR;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 21px;
            display: flex;
            align-items: center;
            color: #000000;
          }
          &__latest-massage {
            font-family: Noto Sans CJK KR;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            color: #747070;
          }
        }
        &__user-timeline {
          flex: 2;
          display: flex;
          flex-direction: column;
          align-items: center;

          &__time {
            font-family: Noto Sans CJK KR;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            color: #747070;
            margin-bottom: 3px;
          }
          &__badge-count {
            font-family: Noto Sans KR;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 18px;
            color: #ffffff;
            background: #ff4259;
            border-radius: 8px;
            width: 35px;
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }

  .list-none {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding-bottom: 50px;
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
}
</style>
