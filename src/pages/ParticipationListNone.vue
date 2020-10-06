<template>
  <q-page class="ParticipationListNone-page">
    <van-tabs v-model="activeName">
      <van-tab title="내가 좋아요" name="a">
        <div class="give">
          <div class="content">
            <div class="list-none">
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
          <div class="content">
            <div class="list-none">
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
    return {};
  }
};
</script>

<style lang="scss">
.ParticipationListNone-page {
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
      height: 80vh;
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
  .take {
    .list-none {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 80vh;
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
}
</style>
