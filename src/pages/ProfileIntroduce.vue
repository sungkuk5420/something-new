<template>
  <q-page class="profile-introduce-page">
    <van-nav-bar
      class="top-nav-title"
      title="한줄소개"
      right-text="Button"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
        <svg
          width="10"
          height="15"
          viewBox="0 0 10 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 1L2 7.5L9 14" stroke="black" stroke-width="2" />
        </svg>
      </template>
      <template #right>
        <span class="top-nav-save">저장</span>
      </template>
    </van-nav-bar>
    <div class="main-paragraph">한 줄 소개를 입력해주세요</div>
    <div class="submain-paragraph">회원님의 매력을 간단하게 소개해주세요</div>

    <div class="main-container">
      <input id="intro" type="text" />
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.profile-introduce-page {
  .top-nav-title {
    margin-top: 25px;
  }
  .top-nav-save {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #e76765;
  }
  .main-paragraph {
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-top: 40px;
    /* 20pt / 500 */
    font-family: Noto Sans KR;
    font-style: nomal;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    /* identical to box height, or 160% */

    /* $text / 80 (base) */
    color: #3c3c3c;
  }
  .submain-paragraph {
    /* 회원님의 매력을 간단하게 소개해주세요. */
    display: flex;
    align-items: center;
    margin: 20px;

    /* 14pt / 400 */
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    /* $text / 80 (base) */
    color: #3c3c3c;
  }
  .main-container input#intro {
    display: flex;
    align-items: center;
    margin-left: 25px;
    margin-top: 35px;
    /* grey / 50 */
    background: #f9f8f8;
    border-radius: 8px;
    border: none;
    border-right: 0px;
    border-top: 0px;
    boder-left: 0px;
    boder-bottom: 0px;
    height: 48px;
    width: 325px;
    left: 25px;
    top: 246px;
  }
}
</style>
