<template>
  <q-page class="drink-page">
    <van-nav-bar
      title="음주"
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
          :class="{ 'is-active': this.loginUser.drinking === 'DT00' }"
          @click="() => changeValue('DT00')"
        >
          술을 못해요
        </li>
        <li
          :class="{ 'is-active': this.loginUser.drinking === 'DT01' }"
          @click="() => changeValue('DT01')"
        >
          가끔 해요
        </li>
        <li
          :class="{ 'is-active': this.loginUser.drinking === 'DT02' }"
          @click="() => changeValue('DT02')"
        >
          적당히 마셔요
        </li>
        <li
          :class="{ 'is-active': this.loginUser.drinking === 'DT03' }"
          @click="() => changeValue('DT03')"
        >
          많이 마셔요
        </li>
        <li
          :class="{ 'is-active': this.loginUser.drinking === 'DT04' }"
          @click="() => changeValue('DT04')"
        >
          술고래에요
        </li>
        <li
          :class="{ 'is-active': this.loginUser.drinking === 'DT05' }"
          @click="() => changeValue('DT05')"
        >
          조금씩 자주 마셔요
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
      this.$store.dispatch(T.UPDATE_DRINKING, {
        data: {
          uid: this.loginUser.uid,
          drinking: selectValue,
        },
      });
    },
  },
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
