<template>
  <q-page class="main-page">
    <div class="main-title">이런 친구는 어때요?</div>
    <div class="user-card-wrapper">
      <div
        class="user-card"
        v-for="(currentUser, index) in userList
          .filter((item) => item.profileImage != '')
          .slice(0, 3)"
        :key="currentUser.uid"
        :style="`bottom:calc(2vh + ${
          index * 39 - 3 * (index * index)
        }px); z-index:-${index}; transform:scale(${1 - 0.09 * index});`"
      >
        <div
          class="profile-image"
          :style="`background-image:url('${currentUser.profileImage}')`"
        ></div>

        <div class="user-card__name">{{ currentUser.name }}</div>
        <div class="user-card__age-wapper">
          <div class="user-card__age-wapper__age">
            {{ new Date().getFullYear() - currentUser.birthYear }}세
          </div>
          <svg
            width="12"
            height="17"
            viewBox="0 0 12 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 8.12579C5.43168 8.12579 4.88663 7.90703 4.48477 7.51765C4.08291 7.12827 3.85714 6.60015 3.85714 6.04948C3.85714 5.49882 4.08291 4.9707 4.48477 4.58132C4.88663 4.19194 5.43168 3.97318 6 3.97318C6.56832 3.97318 7.11337 4.19194 7.51523 4.58132C7.91709 4.9707 8.14286 5.49882 8.14286 6.04948C8.14286 6.32215 8.08743 6.59214 7.97974 6.84405C7.87205 7.09596 7.71421 7.32485 7.51523 7.51765C7.31625 7.71045 7.08002 7.86339 6.82004 7.96774C6.56005 8.07208 6.2814 8.12579 6 8.12579ZM6 0.23584C4.4087 0.23584 2.88258 0.848347 1.75736 1.93862C0.632141 3.02889 0 4.50761 0 6.04948C0 10.4097 6 16.8463 6 16.8463C6 16.8463 12 10.4097 12 6.04948C12 4.50761 11.3679 3.02889 10.2426 1.93862C9.11742 0.848347 7.5913 0.23584 6 0.23584Z"
              fill="#FF576B"
            />
          </svg>
          <div class="user-card__age-wapper__km">
            {{ currentUser.location }}
          </div>
        </div>
        <div class="user-card__hash-tag-wapper">
          <div
            v-if="currentUser.hobbies.length > 0"
            class="user-card__hash-tag-wapper__tag"
            v-for="hobbyName in currentUser.hobbies.slice(0, 2)"
          >
            {{ hobbyName }}
          </div>
          <div
            v-if="currentUser.personalities.length > 0"
            class="user-card__hash-tag-wapper__tag"
          >
            {{ currentUser.personalities[0] }}
          </div>
        </div>
      </div>
    </div>
    <div class="choice">
      <svg
        style="width: 72px; height: 72px; margin-right: 35px"
        width="82"
        height="83"
        viewBox="0 0 82 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <circle cx="39" cy="39.0977" r="36" fill="white" />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.1194 52.0194C28.0671 53.9671 31.225 53.9671 33.1728 52.0194L39.0411 46.151L44.9659 52.0758C46.9136 54.0235 50.0715 54.0235 52.0193 52.0758C53.967 50.1281 53.967 46.9702 52.0193 45.0224L46.0945 39.0977L52.0193 33.1729C53.967 31.2251 53.967 28.0672 52.0193 26.1195C50.0715 24.1718 46.9136 24.1718 44.9659 26.1195L39.0411 32.0443L33.1727 26.1759C31.225 24.2282 28.0671 24.2282 26.1194 26.1759C24.1716 28.1236 24.1716 31.2816 26.1194 33.2293L31.9877 39.0977L26.1194 44.966C24.1716 46.9137 24.1716 50.0717 26.1194 52.0194Z"
          fill="#D2CDCD"
        />
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0.0976562"
            width="82"
            height="82"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.891667 0 0 0 0 0.880521 0 0 0 0 0.880521 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <svg
        style="width: 72px; height: 72px"
        width="83"
        height="83"
        viewBox="0 0 83 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <rect
            x="3.80493"
            y="3"
            width="72.1951"
            height="72.1951"
            rx="36.0976"
            fill="url(#paint0_linear)"
          />
          <rect
            x="49.8464"
            y="19.8457"
            width="20.1988"
            height="36.5812"
            rx="10.0994"
            transform="rotate(40.2482 49.8464 19.8457)"
            fill="#FF96A2"
          />
          <rect
            x="14.6342"
            y="34.9468"
            width="20.1988"
            height="36.5812"
            rx="10.0994"
            transform="rotate(-45 14.6342 34.9468)"
            fill="#FFBCC4"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0.804932"
            y="0"
            width="82.1951"
            height="82.1951"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.891667 0 0 0 0 0.880521 0 0 0 0 0.880521 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="68.4562"
            y1="66.2412"
            x2="12.9703"
            y2="7.51219"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF4259" />
            <stop offset="1" stop-color="#FE7F8E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </q-page>
</template>

<script>
import { T } from "../store/module-example/types";
import { mapGetters } from "vuex";
import shuffle from "lodash/shuffle";
export default {
  data() {
    return {
      userList: [],
    };
  },
  computed: {
    ...mapGetters({
      loginUser: "getLoginUser",
    }),
  },
  mounted() {
    this.getAllUsers();
  },
  methods: {
    getAllUsers() {
      const successCb = (userList) => {
        const shuffleUserList = shuffle(userList);
        const shuffleFilterList = shuffle(
          shuffleUserList.filter(
            (user) => user.gender !== this.loginUser.gender
          )
        );
        this.userList = shuffleFilterList.slice(0, 8);
        this.loading = false;
      };
      const errorCb = (errorMessage) => {
        this.loading = false;
      };
      this.loading = true;
      this.$store.dispatch(T.GET_USER_DATA, {
        data: {},
        successCb,
        errorCb,
      });
    },
  },
};
</script>

<style lang="scss">
.main-page {
  height: 100vh;
  overflow: hidden;
  .main-title {
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 38px;
    display: flex;
    align-items: center;
    margin-bottom: 2vh;
    margin-top: 5vh;
    color: #000000;
    margin-left: 15px;
  }
  .choice {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: calc(50px + 2vh);
    width: 100%;
  }
  .user-card-wrapper {
    position: relative;
    height: calc(100% - (50px + 26vh));
    display: flex;
    flex: none;
    justify-content: center;
    overflow: hidden;
  }
  .user-card {
    max-width: 345px;
    color: #ffffff;
    background: #ddd;
    border-radius: 24px;
    position: absolute;
    border: 1px solid #fff;
    width: calc(63% + (13vh));
    height: calc(100% - 7vh);
    max-height: 469px;
    .profile-image {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
      border-radius: 24px;
    }
    &__name {
      position: absolute;
      font-weight: bold;
      font-size: 24px;
      line-height: 35px;
      display: flex;
      align-items: center;
      bottom: 90px;
      left: 25px;
    }
    &__age-wapper {
      position: absolute;
      bottom: 60px;
      left: 25px;
      display: flex;
      &__age {
        font-size: 20px;
        line-height: 30px;
        display: flex;
        align-items: center;
      }
      svg {
        margin: 5px 5px 0 15px;
      }
      &__km {
        font-size: 18px;
        line-height: 27px;
      }
    }
    &__hash-tag-wapper {
      position: absolute;
      bottom: 20px;
      left: 25px;
      display: flex;
      &__tag {
        background: rgba(0, 0, 0, 0.44);
        border: 1px solid #ffffff;
        box-sizing: border-box;
        border-radius: 24px;
        padding: 4px 10px;
        margin-right: 8px;
      }
    }
  }
}
</style>
