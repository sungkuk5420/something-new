<template>
  <q-page class="user-tall-page">
    <van-nav-bar
      title="키"
      left-arrow
      @click-left="
        () => {
          $router.push('/user-profile');
        }
      "
    >
    </van-nav-bar>
    <div class="picker-place">
      <van-picker
        title="키"
        :columns="columns"
        @change="onChange"
        item-height="60"
      >
      </van-picker>
      <div class="button-wrapper">
        <button type="button" class="button-save" @click="saveHeight">
          저장
        </button>
      </div>
    </div>
  </q-page>
</template>

<script>
import { T } from "src/store/module-example/types";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      selectHeight: 140,
    };
  },
  computed: {
    columns() {
      const minHeight = 139;
      const maxHeight = 200;
      return Array(maxHeight - minHeight)
        .fill("")
        .map((v, idx) => maxHeight - idx)
        .reverse();
    },
    ...mapGetters({
      loginUser: "getCurrentUser",
    }),
  },
  methods: {
    onChange(_, value) {
      this.selectHeight = value;
    },
    async saveHeight() {
      await this.$store.dispatch(T.UPDATE_HEIGHT, {
        data: { height: this.selectHeight, uid: this.loginUser.uid },
      });
      await this.$router.push("/user-profile");
    },
  },
};
</script>
<style lang="scss">
.user-tall-page {
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
      bottom: 70px;
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
      margin-bottom: 122px;
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
