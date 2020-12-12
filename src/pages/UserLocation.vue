<template>
  <q-page class="user-location-page">
    <van-nav-bar
      title="위치"
      left-arrow
      @click-left="
        () => {
          $router.push('/user-profile');
        }
      "
    ></van-nav-bar>
    <div class="picker-place">
      <van-picker title="위치" :columns="locations" @change="onChange" item-height="60"></van-picker>
      <div class="button-wrapper">
        <button type="button" class="button-save" @click="saveLocation">저장</button>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import { T } from "src/store/module-example/types";

export default {
  data() {
    return {
      selectLocation: "서울",
    };
  },
  computed: {
    ...mapGetters({
      locations: "getLocations",
      loginUser: "getLoginUser",
    }),
  },
  methods: {
    onChange(_, value) {
      this.selectLocation = value;
    },
    async saveLocation() {
      await this.$store.dispatch(T.UPDATE_LOCATION, {
        data: { location: this.selectLocation, uid: this.loginUser.uid },
      });
      await this.$router.push("/user-profile");
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
