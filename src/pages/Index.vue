<template>
  <q-page class="index-page">
    <q-stepper v-model="step" ref="stepper" color="primary" animated>
      <q-step class="step-1" title="1" :name="1">
        <div class="logo">
          <svg
            width="180"
            height="146"
            viewBox="0 0 180 146"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="125.242"
              y="0.09375"
              width="71.5203"
              height="129.527"
              rx="35.7601"
              transform="rotate(40.2482 125.242 0.09375)"
              fill="#FF96A2"
            />
            <rect
              x="0.5625"
              y="53.5647"
              width="71.5202"
              height="129.527"
              rx="35.7601"
              transform="rotate(-45 0.5625 53.5647)"
              fill="#FFBCC4"
            />
          </svg>
        </div>
        <div class="main-text">나와 맞는 이성</div>
        <div class="main-text">설레는 만남</div>
        <div class="sub-text">곧 설레는 인연을 찾아드릴께요!</div>
        <div class="footer">
          <van-button type="default" @click="$refs.stepper.next()"
            >이메일로 바로 시작하기
          </van-button>
          <div class="footer__text">
            계속 진행하면 something의 서비스 약관 및
          </div>
          <div class="footer__text">개인정보 보호정책에 동의합니다.</div>
        </div>
      </q-step>

      <q-step class="step-2" title="2" :name="2">
        <div class="main-text">이메일을 입력해주세요 :)</div>
        <div class="sub-text">로그인 또는 회원가입에 필요합니다.</div>
        <q-input filled v-model="name" label="example@gmail.com" />
        <van-button type="default" @click="$refs.stepper.next()"
          >다음
        </van-button>
      </q-step>

      <q-step class="step-3" title="3" :name="3">
        <div class="main-text">비밀번호를 입력해주세요.</div>
        <div class="sub-text">다시 방문해 주셨군요!</div>
        <q-input type="password" filled v-model="name" label="・・・・・・" />

        <van-button
          type="default"
          :loading="loading"
          loading-text="로그인"
          @click="
            () => {
              userLogin();
            }
          "
          >로그인
        </van-button>
      </q-step>

      <q-step class="step-4" title="4" :name="4">
        <div class="main-text">비밀번호를 입력해주세요.</div>
        <div class="sub-text">회원가입을 진행합니다 :)</div>
        <q-input type="password" filled v-model="name" label="・・・・・・" />

        <van-button type="default" @click="$refs.stepper.next()"
          >로그인
        </van-button>
      </q-step>
    </q-stepper>
  </q-page>
</template>

<script>
import { T } from "../store/module-example/types";
import { Toast } from "vant";
export default {
  data() {
    return {
      step: 1,
      name: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    userLogin() {
      let isLogin = true;

      const thisObj = this;
      const successCb = (result) => {
        // 완료함수
        thisObj.$router.push({ path: "/userList" });
        thisObj.loading = false;
      };
      const errorCb = () => {
        //실패함수
        thisObj.loading = false;
      };
      thisObj.loading = true;
      thisObj.$store.dispatch(T.USER_LOGIN, {
        data: { isLogin },
        successCb,
        errorCb,
      });
    },
  },
};
</script>

<style lang="scss">
.index-page {
  .q-stepper,
  .q-stepper__content,
  .q-stepper__step-content,
  .q-stepper__step-inner {
    width: 100%;
    height: 100%;
    flex: 1;
    position: fixed;
  }
  .q-stepper {
    display: flex;
    box-shadow: none;
    &__header {
      display: none;
    }
    &__step-inner {
      padding: 0;
    }
    &__step {
      &.step-1 {
        .q-stepper__step-inner {
          display: flex;
          justify-content: center;
          flex-direction: column;
          .sub-text {
            margin-bottom: 25vh;
          }
        }
        padding-top: 0;
        .main-text,
        .sub-text {
          text-align: center;
        }
      }
      &.step-2,
      &.step-3,
      &.step-4 {
        padding-top: 12vh;
        .q-stepper__step-inner {
          padding-left: 17px;
          padding-right: 17px;
        }
        .van-button {
          margin-top: 215px;
        }
      }
    }
  }
  .logo {
    text-align: center;
    margin-bottom: 29px;
  }
  .main-text {
    font-weight: bold;
    font-size: 28px;
    line-height: 41px;
    color: #121214;
    text-align: left;
    letter-spacing: -2.5px;
  }
  .sub-text {
    font-size: 14px;
    line-height: 21px;
    color: #747070;
    text-align: left;
    margin-top: 9px;
    letter-spacing: -1px;
  }
  .van-button {
    margin-bottom: 68px;
    width: 100%;
    margin-bottom: 9vh;
  }
  .footer {
    position: fixed;
    bottom: 14px;
    margin: auto;
    padding: 0 17px;
    left: 0;
    right: 0;
    &__text {
      font-size: 9px;
      text-align: center;
      color: #888888;
    }
  }
}
</style>
