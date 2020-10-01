<template>
  <q-page class="drink-page">
    <van-nav-bar
      title="음주"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
    </van-nav-bar>

    <div class="list">
      <ul>
        <li>술을 못해요</li>
        <li>가끔 해요</li>
        <li>적당히 마셔요</li>
        <li>많이 마셔요</li>
        <li>술고래에요</li>
        <li>조금씩 자주 마셔요</li>
      </ul>
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
.drink-page {
  .van-icon-arrow-left::before {
    color: #000;
  }
  .list {
    ul {
      li {
        padding: 18px 24px;
        border-bottom: 1px solid #f0f1f3;
        font-family: Noto Sans KR;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #121214;
      }
      li:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
