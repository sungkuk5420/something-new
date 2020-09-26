<template>
  <q-page class="user-location-page">
    <van-nav-bar
      title="위치"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
    </van-nav-bar>
    <div class="picker-place">
      <van-picker
        title="위치"
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
        item-height="60"
      >
      </van-picker>
      <div class="button-wrapper">
        <button type="button" class="button-save">저장</button>
      </div>
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
<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      columns: [
        "서울",
        "경기",
        "광주",
        "대구",
        "대전",
        "부산",
        "울산",
        "인천",
        "세종",
        "강원",
        "경남",
        "경북",
        "전남",
        "전북",
        "제주",
        "충남",
        "충북",
      ],
    };
  },
  methods: {
    onConfirm(value, index) {
      Toast(`Value: ${value}, Index: ${index}`);
    },
    onChange(picker, value, index) {
      Toast(`Value: ${value}, Index: ${index}`);
    },
    onCancel() {
      Toast("Cancel");
    },
  },
};
</script>
<style lang="scss">
.user-location-page {
  .van-icon-arrow-left::before {
    color: #000;
  }
  .van-nav-bar {
    border-bottom: none;
  }
  .picker-place {
    padding: 0 17px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .button-wrapper {
      padding: 0 20px;
      bottom: 20px;
      left: 0;
      position: fixed;
      width: 100%;
      .button-save {
        background: #fe7f8e;
        border-radius: 8px;
        color: #fff;
        border: none;
        font-family: Noto Sans CJK KR;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 108.5%;
        width: 100%;
        height: 56px;
        /* or 17px */
      }
    }
    .van-picker {
      /* margin-bottom: 80px; */
    }
    .van-picker-column__item .van-ellipsis {
      font-family: Noto Sans CJK KR;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      color: #121214;
    }
  }
}
</style>