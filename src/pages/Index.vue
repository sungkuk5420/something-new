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
        <q-input
          type="password"
          filled
          v-model="password"
          label="・・・・・・"
        />

        <van-button
          type="default"
          :loading="loading"
          loading-text="로그인"
          @click="
            () => {
              //userLogin();
              $refs.stepper.next();
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
      <q-step class="step-5" title="5" :name="5">
        <div class="main-title">성별을 알려주세요!</div>
        <div class="main-title-sub">회원님에 대해 알고 싶어요 :)</div>
        <van-radio-group v-model="radio">
          <van-radio name="1" @click="$refs.stepper.next()">남성</van-radio>
          <van-radio name="2" @click="$refs.stepper.next()">여성</van-radio>
        </van-radio-group>
      </q-step>

      <q-step class="step-6" title="6" :name="6">
        <div class="main-title">어디 사시나요?</div>
        <div class="main-title-sub">회원님에 대해 알고 싶어요 :)</div>
        <van-picker title="위치" :columns="areaColumns" item-height="60">
        </van-picker>
        <van-button type="default" @click="$refs.stepper.next()"
          >다음
        </van-button>
      </q-step>

      <q-step class="step-7" title="7" :name="7">
        <div class="main-title">언제 태어나셨나요?</div>
        <div class="main-title-sub">회원님에 대해 알고 싶어요 :)</div>
        <van-picker title="년도" :columns="yearsColumns" item-height="60">
        </van-picker>
        <van-button type="default" @click="$refs.stepper.next()"
          >다음
        </van-button>
      </q-step>

      <q-step class="step-8" title="8" :name="8">
        <div class="main-title">뭐라고 부르면 좋을까요?</div>
        <div class="main-title-sub">닉네임을 알려주세요</div>
        <q-input filled v-model="name" label="ex. 귀요미" />
        <div class="discription">마땅한 닉네임이 생각나지 않으세요?</div>
        <div class="discription-point">닉네임 추천받기</div>
        <van-button type="default" @click="$refs.stepper.next()"
          >다음
        </van-button>
      </q-step>
      <q-step class="step-9" title="9" :name="9">
        <div class="main-title">프로필 사진을 등록해주세요!</div>
        <div class="main-title-sub">자신있는 사진을 올려주세요!</div>
        <div class="photo-uproad">
          <my-upload
            field="img"
            :class="!imgDataUrl ? 'is-show' : ''"
            @crop-success="cropSuccess"
            @crop-upload-success="cropUploadSuccess"
            @crop-upload-fail="cropUploadFail"
            v-model="show"
            :width="300"
            :height="300"
            :params="params"
            lang-type="en"
            :lang-ext="langExtend"
            :headers="headers"
            img-format="png"
            ref="uploader"
          >
          </my-upload>
          <img class="preview-image" :src="imgDataUrl" v-show="imgDataUrl" />
          <div class="photo-shooting" v-show="!imgDataUrl">
            지금 바로 찍을래요
          </div>
        </div>
        <van-button
          type="default"
          v-show="!imgDataUrl"
          @click.prevent="customCallPrepareUpload"
          >다음
        </van-button>
        <van-button
          type="default"
          v-show="imgDataUrl"
          @click="$refs.stepper.next()"
          >다음
        </van-button>
      </q-step>

      <q-step class="step-10" title="10" :name="10">
        <div class="finish">
          <div class="profile-image">
            <img class="preview-image" :src="imgDataUrl" />
          </div>
          <div class="point-text">회원가입 완료</div>
          <div class="title">궁금한 게 더 있어요!</div>
          <div class="sub">
            조금 더 알려주시면 더욱 좋은 인연을<br />찾아드릴수 있을 것 같아요!
          </div>
        </div>

        <button type="button" class="now" @click="registerUser">
          조금 더 알려주기
        </button>
        <button type="button" class="later" @click="registerUser">
          나중에 할래요
        </button>
      </q-step>
    </q-stepper>
  </q-page>
</template>

<script>
import { T } from "../store/module-example/types";
import { mapGetters } from "vuex";
import { Toast } from "vant";

import myUpload from "vue-image-crop-upload";
export default {
  data() {
    return {
      step: 1,
      name: "",
      password: "",
      loading: false,
      radio: "",
      areaColumns: [
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
      show: true,
      params: {
        token: "123456798",
        name: "avatar",
      },
      langExtend: {
        hint: "프로필 사진 선택하기",
        loading: "업로드중...",
        noSupported:
          "브라우저에서 지원하지 않습니다. IE10+이나 다른 브라우저로 접속해주세요.",
        success: "업로드 성공",
        fail: "업로드 실패",
        preview: "미리보기",
        btn: {
          off: "취소",
          close: "닫기",
          back: "뒤로",
          save: "저장",
        },
        error: {
          onlyImg: "이미지만",
          outOfSize: "이미지 사이즈 제한: ",
          lowestPx: "이미지 사이즈가 너무 작습니다. 최소 사이즈: ",
        },
      },
      headers: {
        smail: "*_~",
      },
      imgDataUrl: "", // the datebase64 url of created image
    };
  },
  components: {
    "my-upload": myUpload,
  },
  computed: {
    ...mapGetters({
      userList: "getUserList",
    }),
    yearsColumns() {
      let returnArray = [];
      for (let i = 0, len = 51; i < len; i++) {
        returnArray.push((1970 + i).toString());
      }
      console.log(returnArray);
      return returnArray;
    },
  },
  methods: {
    customCallPrepareUpload() {
      this.$refs.uploader.prepareUpload();
    },
    /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------");
      this.imgDataUrl = imgDataUrl;
      const thisObj = this;
      console.log(imgDataUrl.trim() == "");
    },
    /**
     * upload success
     *
     * [param] jsonData  server api return data, already json encode
     * [param] field
     */
    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      console.log(jsonData);
      console.log("field: " + field);
    },
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log(status);
      console.log("field: " + field);
    },
    afterRead(file) {
      console.log(file);
    },
    userLogin() {
      const thisObj = this;
      let userCheck = null;
      let userInfo = {
        name: thisObj.name,
        password: thisObj.password,
      };

      userCheck = thisObj.userList.filter(function(user) {
        return user.name === userInfo.name && user.password === userInfo.password;
      });

      const successCb = (result) => {
        // 완료함수
        thisObj.loading = false;
      };
      const errorCb = () => {
        //실패함수
        thisObj.loading = false;
      };

      thisObj.loading = true;
      // if (userCheck.length == 1) {
        thisObj.$store.dispatch(T.USER_LOGIN, {
          data: { userInfo },
          successCb,
          errorCb,
        });
      // } else {
      //   Toast.fail("아이디 비밀번호가 일치하지 않습니다.");
      //   thisObj.loading = false;
      // }
    },
    registerUser() {
      const registerUserData = {
        email: this.name,
        password: this.password,
      }
      const successCb = (result) => {
        // 완료함수
        this.loading = false;
      }
      const errorCb = () => {
        //실패함수
        this.loading = false;
      }
      this.$store.dispatch(T.REGISTER_USER, {
        data: registerUserData,
        successCb,
        errorCb,
      })
    }
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
  .main-title {
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 38px;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    margin-top: 50px;
    color: #000000;
  }
  .main-title-sub {
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #747070;
  }
  .q-stepper,
  .q-stepper__content,
  .q-stepper__step-content,
  .q-stepper__step-inner {
    width: 100%;
    height: 100%;
    flex: 1;
  }
  .van-radio__label {
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    color: #333333;
  }
  .van-radio {
    margin-bottom: 30px;
  }
  .van-radio__icon--round .van-icon {
    color: #c4c4c4;
    margin-right: 8px;
  }

  .van-picker {
    margin: 50px 0;
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
      &.step-5 {
        padding: 0 16px;
        .q-stepper__step-inner {
          display: flex;
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
      &.step-6 {
        .q-stepper__step-inner {
          padding: 0 16px;
        }
        .van-button {
          margin-top: 20px;
        }
      }
      &.step-7 {
        .q-stepper__step-inner {
          padding: 0 16px;
        }
        .van-button {
          margin-top: 20px;
        }
      }
      &.step-8 {
        .q-stepper__step-inner {
          padding: 0 16px;
        }
        .q-stepper__step-inner {
        }
        .van-button {
          margin-top: 60px;
        }
        .discription {
          font-family: Noto Sans CJK KR;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 108.5%;
          color: #585555;
          margin: 15px 0 10px 0;
        }
        .discription-point {
          font-family: Noto Sans CJK KR;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 108.5%;
          color: #ff576b;
        }
      }
      &.step-9 {
        .vue-image-crop-upload {
          position: relative;
          padding: 0;
          width: 250px;
          height: 250px;
          background: white;
          border-radius: 16px;
          display: none;
          &.is-show {
            display: block !important;
          }
          .vicp-wrap {
            position: relative;
            padding: 0;
            width: 100%;
            height: 100%;
            box-shadow: none;
            border-radius: 16px;
          }
          .vicp-hint {
            font-family: Noto Sans CJK KR;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 21px;
            color: #888888;
          }
          .vicp-step1,
          .vicp-step2,
          .vicp-drop-area {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border-radius: 16px;
            border: 0;
          }
          .vicp-range {
            padding: 0 10px;
            margin-top: 25px !important;
            .vicp-range input[type="range"] {
              width: 100%;
            }
            .vicp-icon5 {
              top: -3px !important;
              left: 10px !important ;
            }
            .vicp-icon6 {
              top: -3px !important;
              right: 10px !important ;
            }
          }
          .vicp-close {
            //닫기버튼
            display: none;
          }
          .vicp-operate {
            // 삭제버튼
            display: none;
          }
          .vicp-preview {
            // 삭제버튼
            display: none;
          }
          .vicp-icon1 {
            background: #e6e6e6 !important;
            border-radius: 50%;
            width: 80px;
            height: 80px;
          }
          .vicp-icon1-arrow {
            margin-top: 24px !important;
            width: 3px !important;
            height: 31px !important;
            border-bottom: 15.5px solid #c4c4c4 !important;
            border-left: 0 !important;
            border-right: 0 !important;
            border-top: 15.5px solid #c4c4c4 !important;
            background-color: #c4c4c4 !important;
          }
          .vicp-icon1-body {
            width: 31px !important;
            height: 3px !important;
            margin-top: -15.5px !important;
            background-color: #c4c4c4 !important;
            border-color: #c4c4c4 !important;
          }
          .vicp-icon1-bottom {
            display: none !important;
          }
        }
        .q-stepper__step-inner {
          padding: 0 16px;
        }
        .van-button {
          margin-top: 20px;
        }
        .photo-uproad {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin-top: 60px;
          min-height: 358px;
          .preview-image {
            width: 250px;
            height: 250px;
            border-radius: 16px;
            margin-bottom: 108px;
          }
          .van-uploader__upload {
            width: 256px;
            height: 242px;
            background: #f5f5f5;
            border-radius: 16px;
            margin: 0px;
          }
        }
        .photo-shooting {
          margin-top: 24px;
          font-family: Noto Sans CJK KR;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 24px;
          color: #fe7f8e;
          text-align: center;
          margin-bottom: 60px;
        }
      }
      &.step-10 {
        .q-stepper__step-inner {
          padding: 0 16px;
        }
        .preview-image {
          width: 50%;
          max-width: 160px;
          border-radius: 50%;
          margin-top: 30px;
        }
        text-align: center;
        .finish {
          display: flex;
          height: 75vh;
          flex-direction: column;
          justify-content: center;
          .profile-image {
            margin-bottom: 17px;
          }
          .point-text {
            font-family: Noto Sans CJK KR;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 126.2%;
            text-align: center;
            color: #fe7f8e;
            margin-bottom: 40px;
          }
          .title {
            font-family: Noto Sans CJK KR;
            font-style: normal;
            font-weight: bold;
            font-size: 31px;
            line-height: 126.2%;
            text-align: center;
            color: #121214;
            margin-bottom: 17px;
          }
          .sub {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 26px;
            text-align: center;
            color: #888888;
          }
        }
        .now {
          width: 100%;
          height: 56px;
          color: #fff;
          font-family: Noto Sans CJK KR;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 108.5%;
          border: none;
          background: #fe7f8e;
          border-radius: 8px;
          margin-bottom: 5px;
        }
        .later {
          width: 100%;
          height: 56px;
          color: #fe7f8e;
          font-family: Noto Sans CJK KR;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 108.5%;
          border: none;
          background: none;
          border-radius: 8px;
          margin-bottom: 5px;
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
