<template>
  <q-page class="profile-introduce-page">
    <van-nav-bar
      title="Title"
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

    <div class="main-containe">
      <input type="text" />
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
}
</style>
