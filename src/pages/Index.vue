<template>
  <q-page class="index-page">
    <van-nav-bar
      title=""
      left-arrow
      @click-left="backFunc"
      v-show="step!=1 "
    ></van-nav-bar>
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
            >이메일로 바로 시작하기</van-button
          >
          <div class="footer__text">
            계속 진행하면 something의 서비스 약관 및
          </div>
          <div class="footer__text">개인정보 보호정책에 동의합니다.</div>
        </div>
      </q-step>

      <q-step class="step-2" title="2" :name="2">
        <div class="main-text">이메일을 입력해주세요 :)</div>
        <div class="sub-text">로그인 또는 회원가입에 필요합니다.</div>
        <q-input
          v-on:keyup.enter="checkStep2"
          filled
          v-model="email"
          label="example@gmail.com"
          ref="emailInput"
        />
        <van-button type="default" @click="checkStep2">다음</van-button>
      </q-step>
      <q-step class="step-3" title="3" :name="3">
        <div class="main-text">비밀번호를 입력해주세요.</div>
        <div class="sub-text">다시 방문해 주셨군요!</div>
        <q-input
          type="password"
          filled
          v-model="password"
          label="・・・・・・"
          ref="passwordInput"
        />
        <van-button
          v-on:keyup.enter="checkuserLoginStep2"
          type="default"
          :loading="loading"
          loading-text="로그인"
          @click="userLogin"
          >로그인</van-button
        >
      </q-step>
      <q-step class="step-4" title="4" :name="4">
        <div class="main-text">비밀번호를 입력해주세요.</div>
        <div class="sub-text">회원가입을 진행합니다 :)</div>
        <q-input
          v-on:keyup.enter="checkStep4"
          type="password"
          filled
          v-model="password"
          label="・・・・・・"
        />
        <van-button type="default" @click="checkStep4">다음</van-button>
      </q-step>
      <q-step class="step-5" title="5" :name="5">
        <div class="main-title">성별을 알려주세요!</div>
        <div class="main-title-sub">회원님에 대해 알고 싶어요 :)</div>
        <van-radio-group v-model="gender">
          <van-radio name="men" @click="$refs.stepper.next()">남성</van-radio>
          <van-radio name="woman" @click="$refs.stepper.next()">여성</van-radio>
        </van-radio-group>
      </q-step>
      <q-step class="step-6" title="6" :name="6">
        <div class="main-title">어디 사시나요?</div>
        <div class="main-title-sub">회원님에 대해 알고 싶어요 :)</div>
        <van-picker
          title="위치"
          :columns="locations"
          item-height="60"
          @change="changeLocation"
        ></van-picker>
        <van-button type="default" @click="$refs.stepper.next()"
          >다음</van-button
        >
      </q-step>
      <q-step class="step-7" title="7" :name="7">
        <div class="main-title">언제 태어나셨나요?</div>
        <div class="main-title-sub">회원님에 대해 알고 싶어요 :)</div>
        <van-picker
          title="년도"
          :columns="yearsColumns"
          item-height="60"
          @change="changeYear"
        ></van-picker>
        <van-button type="default" @click="checkStep7">다음</van-button>
      </q-step>
      <q-step class="step-8" title="8" :name="8">
        <div class="main-title">뭐라고 부르면 좋을까요?</div>
        <div class="main-title-sub">닉네임을 알려주세요</div>
        <q-input
          v-on:keyup.enter="checkStep8"
          filled
          v-model="name"
          label="ex. 귀요미"
          ref="nameInput"
        />
        <div class="discription">마땅한 닉네임이 생각나지 않으세요?</div>
        <div class="discription-point">닉네임 추천받기</div>
        <van-button type="default" @click="checkStep8">다음</van-button>
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
          ></my-upload>
          <img class="preview-image" :src="imgDataUrl" v-show="imgDataUrl" />
          <div
            class="photo-shooting"
            v-show="!imgDataUrl"
            @click="captureImage"
          >
            지금 바로 찍을래요
          </div>
        </div>
        <van-button
          type="default"
          v-show="!imgDataUrl"
          @click.prevent="customCallPrepareUpload"
          >다음</van-button
        >
        <van-button type="default" v-show="imgDataUrl" @click="registerUser"
          >다음</van-button
        >
      </q-step>

      <q-step class="step-10" title="10" :name="10">
        <div class="finish">
          <div class="profile-image">
            <img class="preview-image" :src="imgDataUrl" />
          </div>
          <div class="point-text">회원가입 완료</div>
          <div class="title">궁금한 게 더 있어요!</div>
          <div class="sub">
            조금 더 알려주시면 더욱 좋은 인연을
            <br />찾아드릴수 있을 것 같아요!
          </div>
        </div>

        <button type="button" class="now" @click="userLogin">
          조금 더 알려주기
        </button>
        <button type="button" class="later" @click="userLogin">
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
import firebase from "firebase/app";
import "firebase/firestore";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";

const { Camera } = Plugins;

export default {
  data() {
    return {
      nowYear: new Date().getUTCFullYear(),
      step: 1,
      name: "",
      email: "",
      gender: "",
      birthYear: 0,
      password: "",
      location: "서울",
      selectYear: 1970,
      loading: false,
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
      locations: "getLocations",
    }),
    yearsColumns() {
      const years = Array(this.nowYear - (this.nowYear - 51))
        .fill("")
        .map((v, idx) => this.nowYear - idx);
      return years.reverse();
    },
  },
  mounted() {},
  methods: {
    backFunc() {
      if(this.step == 4) {
        this.$refs.stepper.goTo(2);
      } else {
        this.$refs.stepper.previous();
      }
    },
    emailIsValid(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    changeLocation(_, value) {
      this.location = value;
    },
    changeYear(_, value) {
      this.selectYear = value;
    },
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
      console.log(imgDataUrl);
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
    checkStep2() {
      if (!this.email) {
        Toast.fail("이메일을 입력해주세요.");
        this.$refs.emailInput.focus();
        return;
      } else if (!this.emailIsValid(this.email)) {
        Toast.fail("이메일 양식이 틀립니다. 다시 입력해주세요.");
        this.$refs.emailInput.focus();
        return;
      }

      const successCb = (userList) => {
        this.name = this.email.split("@")[0];
        if (userList.length === 0) {
          this.step = 4; // 회원가입
        } else {
          this.$refs.stepper.next(); // 로그인
        }
        this.loading = false;
      };
      const errorCb = (errorMessage) => {
        this.loading = false;
      };
      this.loading = true;
      this.$store.dispatch(T.GET_USER_DATA, {
        data: {
          where: ["email", "==", this.email],
        },
        successCb,
        errorCb,
      });
    },
    checkStep4() {
      if (!this.password) {
        Toast.fail("비밀번호를 입력해주세요.");
        this.$refs.passwordInput.focus();
        return;
      }
      if(this.password.length < 6) {
        Toast.fail("비밀번호를 6자리이상 입력해주세요.");
      } else {
        this.$refs.stepper.next();
      }
    },
    checkStep7() {
      this.birthYear = this.selectYear;
      this.$refs.stepper.next();
    },
    checkStep8() {
      if (!this.name) {
        Toast.fail("닉네임을 입력해주세요.");
        this.$refs.nameInput.focus();
        return;
      }
      this.$refs.stepper.next();
    },
    userLogin() {
      const userInfo = {
        email: this.email,
        password: this.password,
      };

      const successCb = (result) => {
        // 완료함수
        this.loading = false;
      };
      const errorCb = (errorMessage) => {
        //실패함수
        this.loading = false;
      };
      this.loading = true;
      this.$store.dispatch(T.USER_LOGIN, {
        data: userInfo,
        successCb,
        errorCb,
      });
    },
    registerUser() {
      const registerUserData = {
        birthYear: this.birthYear,
        location: this.location,
        gender: this.gender,
        email: this.email,
        password: this.password,
        profileImage: this.imgDataUrl,
        comment: "",
        height: 0,
        name: this.name,
        uid: "",
        hobbies: [],
        personalities: [],
        smoking: "",
        drinking: "",
      };
      console.log(registerUserData);
      const successCb = async (userData) => {
        console.log("회원가입완료!!");
        if (this.imgDataUrl) {
          console.log("이미지등록시작!!");
          const profileImageStorageRef = firebase
            .storage()
            .ref(`profileImage/${userData.uid}.png`);
          try {
            const snapshot = await profileImageStorageRef.putString(
              this.imgDataUrl,
              "data_url"
            );
            const imageDownloadUrl = await snapshot.ref.getDownloadURL();
            console.log("이미지등록완료!!!!");
            const updateUserData = {
              ...userData,
              profileImage: imageDownloadUrl,
            };
            await this.$store.dispatch(T.UPSERT_USER_INTO_FIRESTORE, {
              data: {
                userData: updateUserData,
              },
              successCb: (result) => {
                console.log("유저정보 업데이트완료!!!!");
                this.$refs.stepper.next();
                this.loading = false;
              },
              errorCb: (errorMessage) => {
                console.log(errorMessage);
                Toast.fail(`가입 실패.${error}`);
                this.loading = false;
              },
            });
          } catch (e) {
            // 이미지파일 등록실패
          }
        }
      };
      const errorCb = (error) => {
        Toast.fail(`가입 실패.${error}`);
        this.loading = false;
      };
      this.loading = true;
      this.$store.dispatch(T.REGISTER_USER, {
        data: {
          registerUserData,
        },
        successCb,
        errorCb,
      });
    },
    async captureImage() {
      const image = await Camera.getPhoto({
        quality: 90,
        source: CameraSource.Camera,
        resultType: CameraResultType.DataUrl,
      });
      console.log("captureImage image", image.dataUrl);
      this.imgDataUrl = image.dataUrl;
    },
  },
};
</script>

<style lang="scss">
.index-page {
  .van-picker-column {
    overflow: auto;
  }
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
