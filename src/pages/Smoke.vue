<template>
  <q-page class="smoke-page">
    <van-nav-bar
      title="흡연"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
    </van-nav-bar>

    <div class="list">
      <ul>
        <li>하지 않아요</li>
        <li>가끔 해요</li>
        <li>자주 해요</li>
        <li>비흡연자 앞에서는 하지 않아요</li>
        <li>상대방이 싫어하면 끊을 수 있어요</li>
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
.smoke-page {
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
