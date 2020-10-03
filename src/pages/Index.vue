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
            v-show="!imgDataUrl"
            field="img"
            @crop-success="cropSuccess"
            @crop-upload-success="cropUploadSuccess"
            @crop-upload-fail="cropUploadFail"
            v-model="show"
            :width="300"
            :height="300"
            url="/upload"
            :params="params"
            lang-type="en"
            :lang-ext="langExtend"
            :headers="headers"
            img-format="png"
            ref="uploader"
          ></my-upload>
          <img :src="imgDataUrl" v-show="imgDataUrl" />
        </div>
        <div class="photo-shooting" v-show="!imgDataUrl">
          지금 바로 찍을래요
        </div>
        <van-button type="default" @click.prevent="customCallPrepareUpload"
          >다음
        </van-button>
      </q-step>

      <q-step class="step-11" title="11" :name="11">
        <div class="finish">
          <div class="profile-image">
            <svg
              width="183"
              height="183"
              viewBox="0 0 183 183"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <circle cx="91.5" cy="91.5" r="91.5" fill="#C4C4C4" />
              <circle cx="91.5" cy="91.5" r="91.5" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0"
                    transform="translate(0 -0.25) scale(0.00409836)"
                  />
                </pattern>
                <image
                  id="image0"
                  width="244"
                  height="366"
                  xlink:href="data:image/jpeg;base64,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"
                />
              </defs>
            </svg>
          </div>
          <div class="point-text">회원가입 완료</div>
          <div class="title">궁금한 게 더 있어요!</div>
          <div class="sub">
            조금 더 알려주시면 더욱 좋은 인연을<br />찾아드릴수 있을 것 같아요!
          </div>
        </div>

        <button type="button" class="now">조금 더 알려주기</button>
        <button type="button" class="later">나중에 할래요</button>
      </q-step>
    </q-stepper>
  </q-page>
</template>

<script>
import { T } from "../store/module-example/types";
import { Toast } from "vant";

import myUpload from "vue-image-crop-upload";
export default {
  data() {
    return {
      step: 9,
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
          .vicp-wrap {
            position: relative;
            padding: 0;
            width: 100%;
            height: 100%;
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
            /* display: none; */
          }
          .vicp-preview {
            // 삭제버튼
            display: none;
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
          height: 40vh;
          .van-uploader__upload {
            width: 256px;
            height: 242px;
            background: #f5f5f5;
            border-radius: 16px;
            margin: 0px;
          }
        }
        .photo-shooting {
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
        .van-button {
          margin-top: 40px;
        }
        .photo-crop {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      &.step-11 {
        .q-stepper__step-inner {
          padding: 0 16px;
        }
        text-align: center;
        .finish {
          display: flex;
          height: 70vh;
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
            margin-bottom: 70px;
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
