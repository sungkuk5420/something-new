<template>
  <q-page class="user-list-none-page">
    <div class="user-list-none-title">채팅 목록</div>
    <div class="list-none">
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
      <div class="friend-button">친구 추천 받기</div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.user-list-none-page {
  padding: 0 24px;
  .user-list-none-title {
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
  .list-none {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
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
