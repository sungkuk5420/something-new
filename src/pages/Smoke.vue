<template>
  <q-page class="smoke-page">
    <van-nav-bar
      title="흡연"
      left-arrow
      @click-left="
        () => {
          $router.push('/user-profile');
        }
      "
    >
    </van-nav-bar>

    <div class="list">
      <ul>
        <li
          :class="{ 'is-active': this.loginUser.smoking === 'ST00' }"
          @click="() => changeValue('ST00')"
        >
          하지 않아요
        </li>
        <li
          :class="{ 'is-active': this.loginUser.smoking === 'ST01' }"
          @click="() => changeValue('ST01')"
        >
          가끔 해요
        </li>
        <li
          :class="{ 'is-active': this.loginUser.smoking === 'ST02' }"
          @click="() => changeValue('ST02')"
        >
          자주 해요
        </li>
        <li
          :class="{ 'is-active': this.loginUser.smoking === 'ST03' }"
          @click="() => changeValue('ST03')"
        >
          비흡연자 앞에서는 하지 않아요
        </li>
        <li
          :class="{ 'is-active': this.loginUser.smoking === 'ST04' }"
          @click="() => changeValue('ST04')"
        >
          상대방이 싫어하면 끊을 수 있어요
        </li>
      </ul>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import { T } from "src/store/module-example/types";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      loginUser: "getLoginUser",
    }),
  },
  methods: {
    changeValue(selectValue) {
      this.$store.dispatch(T.UPDATE_SMOKING, {
        data: {
          uid: this.loginUser.uid,
          smoking: selectValue,
        },
      });
    },
  },
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
        &.is-active {
          color: #ff576b;
        }
      }
      li:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
