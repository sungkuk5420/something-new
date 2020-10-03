<template>
  <q-page class="hobby-page">
    <van-nav-bar
      title="취미 선택"
      left-arrow
      @click-left="
        () => {
          $router.push('/user-profile');
        }
      "
    >
    </van-nav-bar>
    <div class="hobby">
      <div class="hobby-plus">
        <input type="text" placeholder="직접입력" />
        <div class="plus">추가</div>
      </div>
      <div class="hobby-content">
        <ul>
          <li class="is-active">게임</li>
          <li>낚시</li>
          <li>리그오브레전드</li>
          <li>여행가기</li>
          <li>캠핑</li>
          <li>전시회</li>
          <li>독서</li>
          <li>게임</li>
          <li>낚시</li>
          <li>리그오브레전드</li>
          <li>여행가기</li>
          <li>캠핑</li>
          <li>전시회</li>
          <li>독서</li>
          <li>게임</li>
          <li>낚시</li>
          <li>리그오브레전드</li>
          <li>여행가기</li>
          <li>캠핑</li>
          <li>전시회</li>
          <li>독서</li>
        </ul>
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

<style lang="scss">
.hobby-page {
  .van-nav-bar .van-icon {
    color: #000;
  }
  .van-hairline--bottom::after {
    border-bottom: none;
  }
  .hobby {
    &-plus {
      padding: 24px 16px 16px 16px;
      display: flex;
      border-bottom: 1px solid #ece8e8;
      margin-bottom: 20px;
      input {
        padding-left: 10px;
        background: #f9f8f8;
        border-radius: 8px;
        border: none;
        flex: 8;
        height: 38px;
        &::placeholder {
          font-family: Noto Sans;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 127.3%;
          color: #d2cdcd;
        }
      }
      .plus {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Apple SD Gothic Neo;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 127.3%;
        color: #fe7f8e;
      }
    }

    .hobby-content {
      ul {
        padding: 0 16px;
        display: flex;
        flex-wrap: wrap;
        li {
          padding: 8px 16px;
          background: #f9f8f8;
          border-radius: 8px;
          margin-right: 8px;
          margin-bottom: 8px;
          font-family: Apple SD Gothic Neo;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 127.3%;
          color: #bebbbb;
          &.is-active {
            background: #fe7f8e;
            color: white;
          }
        }
      }
    }
  }
}
</style>
