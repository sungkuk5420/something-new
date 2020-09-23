<template>
  <q-page class="index-page">
    <div class="logo">
      <svg
        width="180"
        height="146"
        viewBox="0 0 180 146"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="125.242"
          y="0.09375"
          width="71.5203"
          height="129.527"
          rx="35.7601"
          transform="rotate(40.2482 125.242 0.09375)"
          fill="#FF96A2"
        />
        <rect
          x="0.5625"
          y="53.5647"
          width="71.5202"
          height="129.527"
          rx="35.7601"
          transform="rotate(-45 0.5625 53.5647)"
          fill="#FFBCC4"
        />
      </svg>
    </div>
    <div class="main-text">나와 맞는 이성</div>
    <div class="main-text">설레는 만남</div>
    <div class="sub-text">곧 설레는 인연을 찾아드릴께요!</div>
    <div class="footer">
      <van-button type="default">이메일로 바로 시작하기</van-button>
      <div class="footer__text">계속 진행하면 something의 서비스 약관 및</div>
      <div class="footer__text">개인정보 보호정책에 동의합니다.</div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
};
</script>

<style lang="scss">
.index-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .logo {
    text-align: center;
    margin-bottom: 29px;
  }
  .main-text {
    font-weight: bold;
    font-size: 28px;
    line-height: 41px;
    color: #121214;
    text-align: center;
  }
  .sub-text {
    font-size: 14px;
    line-height: 21px;
    color: #747070;
    text-align: center;
    margin-top: 9px;
    margin-bottom: 185px;
  }
  .footer {
    padding: 0 17px;
    position: fixed;
    bottom: 14px;
    margin: auto;
    left: 0;
    right: 0;
    .van-button {
      margin-bottom: 68px;
      width: 100%;
    }
    &__text {
      font-size: 9px;
      text-align: center;
      color: #888888;
    }
  }
}
</style>
