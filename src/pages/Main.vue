<template>
  <q-page class="main-page">
    <div class="main-title">이런 친구는 어때요?</div>
    <div class="user-card-wrapper">
      <div :class="`user-card index-${index}`" v-for="(currentUser, index) in allUserListWithOutVoteHistory"
        :key="currentUser.uid" :style="`bottom:calc(2vh + ${index * 39 - 3 * (index * index)
          }px); z-index:-${index}; transform:scale(${1 - 0.09 * index});`">
        <div :class="`bg-area index-${index}`">
          <svg class="nope-icon" width="71" height="71" viewBox="0 0 71 71" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M13.7428 66.8256C18.44 70.1146 24.9142 68.9731 28.2032 64.2758L38.1134 50.1226L52.4011 60.127C57.0984 63.416 63.5725 62.2744 66.8616 57.5772C70.1506 52.88 69.0091 46.4058 64.3118 43.1168L50.0241 33.1124L60.0284 18.8248C63.3175 14.1275 62.1759 7.65337 57.4786 4.36433C52.7814 1.07529 46.3073 2.21685 43.0182 6.91409L33.0139 21.2017L18.8608 11.2916C14.1635 8.00257 7.68937 9.14413 4.40033 13.8414C1.11129 18.5386 2.25285 25.0128 6.95009 28.3018L21.1032 38.2119L11.193 52.3651C7.90401 57.0624 9.04558 63.5365 13.7428 66.8256Z"
              fill="#A4A1A1" />
          </svg>
          <svg class="like-icon" width="266" height="282" viewBox="0 0 266 282" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="173.392" y="102.17" width="39.2608" height="71.1038" rx="19.6304"
              transform="rotate(50.2482 173.392 102.17)" fill="#FF96A2" />
            <defs>
              <filter x="0.89209" y="0.672852" width="272.944" height="280.764" filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="50" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.341176 0 0 0 0 0.419608 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
        <div class="profile-image" :style="`background-image:url('${currentUser.profileImage}')`"></div>

        <div class="user-card__name">{{ currentUser.name }}</div>
        <div class="user-card__age-wapper">
          <div class="user-card__age-wapper__age">
            {{ new Date().getFullYear() - currentUser.birthYear }}세
          </div>
          <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 8.12579C5.43168 8.12579 4.88663 7.90703 4.48477 7.51765C4.08291 7.12827 3.85714 6.60015 3.85714 6.04948C3.85714 5.49882 4.08291 4.9707 4.48477 4.58132C4.88663 4.19194 5.43168 3.97318 6 3.97318C6.56832 3.97318 7.11337 4.19194 7.51523 4.58132C7.91709 4.9707 8.14286 5.49882 8.14286 6.04948C8.14286 6.32215 8.08743 6.59214 7.97974 6.84405C7.87205 7.09596 7.71421 7.32485 7.51523 7.51765C7.31625 7.71045 7.08002 7.86339 6.82004 7.96774C6.56005 8.07208 6.2814 8.12579 6 8.12579ZM6 0.23584C4.4087 0.23584 2.88258 0.848347 1.75736 1.93862C0.632141 3.02889 0 4.50761 0 6.04948C0 10.4097 6 16.8463 6 16.8463C6 16.8463 12 10.4097 12 6.04948C12 4.50761 11.3679 3.02889 10.2426 1.93862C9.11742 0.848347 7.5913 0.23584 6 0.23584Z"
              fill="#FF576B" />
          </svg>
          <div class="user-card__age-wapper__km">
            {{ currentUser.location }}
          </div>
        </div>
        <div class="user-card__hash-tag-wapper" v-if="currentUser && currentUser.hobbies && currentUser.hobbies.length > 0
          ">
          <div class="user-card__hash-tag-wapper__tag" v-for="(hobbyName, index) in currentUser.hobbies.slice(0, 2)"
            :key="`user-card__hash-tag-${index}`">
            {{ hobbyName }}
          </div>
          <div v-if="currentUser.personalities.length > 0" class="user-card__hash-tag-wapper__tag">
            {{ currentUser.personalities[0] }}
          </div>
        </div>
      </div>
    </div>
    <div class="choice" v-show="allUserListWithOutVoteHistory.length != currentIndex">
      <svg @click="handleNope" style="width: 72px; height: 72px; margin-right: 35px" width="82" height="83"
        viewBox="0 0 82 83" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
          <circle cx="39" cy="39.0977" r="36" fill="white" />
        </g>
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M26.1194 52.0194C28.0671 53.9671 31.225 53.9671 33.1728 52.0194L39.0411 46.151L44.9659 52.0758C46.9136 54.0235 50.0715 54.0235 52.0193 52.0758C53.967 50.1281 53.967 46.9702 52.0193 45.0224L46.0945 39.0977L52.0193 33.1729C53.967 31.2251 53.967 28.0672 52.0193 26.1195C50.0715 24.1718 46.9136 24.1718 44.9659 26.1195L39.0411 32.0443L33.1727 26.1759C31.225 24.2282 28.0671 24.2282 26.1194 26.1759C24.1716 28.1236 24.1716 31.2816 26.1194 33.2293L31.9877 39.0977L26.1194 44.966C24.1716 46.9137 24.1716 50.0717 26.1194 52.0194Z"
          fill="#D2CDCD" />
        <defs>
          <filter id="filter0_d" x="0" y="0.0976562" width="82" height="82" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.891667 0 0 0 0 0.880521 0 0 0 0 0.880521 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
      <svg @click="handleLike" style="width: 72px; height: 72px" width="83" height="83" viewBox="0 0 83 83" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
          <rect x="3.80493" y="3" width="72.1951" height="72.1951" rx="36.0976" fill="url(#paint0_linear)" />
          <rect x="49.8464" y="19.8457" width="20.1988" height="36.5812" rx="10.0994"
            transform="rotate(40.2482 49.8464 19.8457)" fill="#FF96A2" />
          <rect x="14.6342" y="34.9468" width="20.1988" height="36.5812" rx="10.0994"
            transform="rotate(-45 14.6342 34.9468)" fill="#FFBCC4" />
        </g>
        <defs>
          <filter id="filter0_d" x="0.804932" y="0" width="82.1951" height="82.1951" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.891667 0 0 0 0 0.880521 0 0 0 0 0.880521 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <linearGradient id="paint0_linear" x1="68.4562" y1="66.2412" x2="12.9703" y2="7.51219"
            gradientUnits="userSpaceOnUse">
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
import { authService, fireStore } from "src/fbase";
import { gsap } from "gsap";
import mixin from "./Mixin";
export default {
  mixins: [mixin],
  data() {
    return {
      userList: [],
      currentIndex: 0,
      allUserListVoteHistory: [],//내가좋아요한 리스트
      allReciveVoteHistory: [],//좋아요 받은 리스트
      allUserListWithOutVoteHistory: [],//내가 좋아요한 사람 이외의 리스트
    };
  },
  computed: {
    ...mapGetters({
      loginUser: "getLoginUser",
    }),
  },
  watch: {
    loginUser(value) {
      if (value) {
        this.getAllUsersWithOutVoteHistory();
      }
    },
  },
  mounted() { },
  methods: {
    replyVote(currentVote,voteValue){
      fireStore
          .collection(`voteHistories`)
          .doc(currentVote.id)
          .set({
            ...currentVote,
            responseVote:voteValue
          })
          .then(function (docRef) {
            console.log(docRef) 
           
          })
          .catch(function (error) {
            if (errorCb) {
              errorCb(error);
            }
          });
    },
    createChat(yourInfo,myInfo){
      fireStore
          .collection(`chats`)
          .add({
            name: `${yourInfo.name},${myInfo.name}`,
            latestMassage: "새로운 메세지를 보내보세요.",
            time: Date.now(),
            members:[yourInfo.uid,myInfo.uid],
            badgeCount: `0`,

          })
          .then(function (docRef) {
            console.log(docRef) 
           
          })
          .catch(function (error) {
            if (errorCb) {
              errorCb(error);
            }
          });
    },
    voteUser(currentTarget, voteValue) {
      const user = authService.currentUser;
      console.log("login user ",user.uid)
      console.log(currentTarget)
      let currentVote = this.allReciveVoteHistory.filter(i=>i.userUid === currentTarget.uid)[0]
      if(currentVote){
        if(voteValue=="like"){
          console.log(user)
          this.getAllUserByUids([user.uid]).then(result=>{
            console.log(result)
            const myInfo = result[0];
            const yourInfo = currentTarget;
            this.createChat(yourInfo,myInfo)
          });
        }
        this.replyVote(currentVote,voteValue);
      }
      this.$store.dispatch(T.ADD_VOTE_HISTORY, {
        data: {
          userUid: this.loginUser.uid,
          targetUid: currentTarget.uid,
          vote: voteValue,
          createdAt: Date.now(),
          responseVote: null,
        },
        successCb: (result) => { },
        errorCb: (errorMessage) => {
          console.log(errorMessage);
        },
      });
    },
    handleNope() {
      console.log(this.currentIndex);
      gsap.to(`.user-card.index-${this.currentIndex}`, {
        x: -200,
        duration: 1.2,
        opacity: 0,
        rotate: -15,
      });
      document
        .querySelector(`.bg-area.index-${this.currentIndex}`)
        .classList.add("nope");
      for (let i = this.currentIndex; i < this.allUserListWithOutVoteHistory.length; i++) {
        const element = this.allUserListWithOutVoteHistory[i];

        gsap.to(`.user-card.index-${i + 1}`, {
          scale: 1 - 0.09 * (i - this.currentIndex),
          duration: 1.2,
          bottom: `${(i - this.currentIndex) * 39 -
            3 * ((i - this.currentIndex) * (i - this.currentIndex))
            }`,
        });
      }
      this.voteUser(this.allUserListWithOutVoteHistory[this.currentIndex], "unlike");
      this.currentIndex += 1;
    },
    handleLike() {
      console.log(this.currentIndex);
      gsap.to(`.user-card.index-${this.currentIndex}`, {
        x: 200,
        duration: 1.2,
        opacity: 0,
        rotate: 15,
      });
      document
        .querySelector(`.bg-area.index-${this.currentIndex}`)
        .classList.add("like");
      for (let i = this.currentIndex; i < this.allUserListWithOutVoteHistory.length; i++) {
        const element = this.allUserListWithOutVoteHistory[i];

        gsap.to(`.user-card.index-${i + 1}`, {
          scale: 1 - 0.09 * (i - this.currentIndex),
          duration: 1.2,
          bottom: `${(i - this.currentIndex) * 39 -
            3 * ((i - this.currentIndex) * (i - this.currentIndex))
            }`,
        });
      }
      this.voteUser(this.allUserListWithOutVoteHistory[this.currentIndex], "like");
      this.currentIndex += 1;
    },
    getAllUsers() {
      const successCb = (userList) => {
        console.log(userList);
        const user = authService.currentUser;
        this.allUserListWithOutVoteHistory = userList.filter(i=>i.uid!=user.uid);
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
    getAllUsersWithOutVoteHistory() {
      function onlyUnique(value, index, array) {
        return array.indexOf(value) === index;
      }
      const user = authService.currentUser;
      console.log(user.uid)
      fireStore
        .collection("voteHistories")
        .orderBy("createdAt", "desc")
        .where("userUid", "==", user.uid)
        .get()
        .then((snapshot) => {
          let voteList = snapshot.docs
            .map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          let allUserList = snapshot.docs
            .map((doc) => (doc.data().targetUid)).filter(onlyUnique);
          console.log("voted users ", allUserList)
          this.allUserListVoteHistory.push(...allUserList, user.uid)
          console.log(this.allUserListVoteHistory)

          this.loadVoteGiveToHistory()
        });
    },
    getAllReciveVote(){
      const user = authService.currentUser;
      console.log(user.uid)
      fireStore
        .collection("voteHistories")
        .orderBy("createdAt", "desc")
        .where("targetUid", "==", user.uid)
        .where("responseVote", "==", null)
        .get()
        .then((snapshot) => {
          let voteList = snapshot.docs
            .map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          console.log("recive voted users ", voteList)
          this.allReciveVoteHistory = voteList;
          console.log("user.uid ", user.uid)
          this.getAllUserByUids(voteList.map(i=>i.userUid)).then(reciveVoteUsers=>{
            console.log("reciveVoteUsers",reciveVoteUsers)
            console.log("this.allUserListWithOutVoteHistory ",this.allUserListWithOutVoteHistory )
            const uids = this.allUserListWithOutVoteHistory;
            if(uids.indexOf(reciveVoteUsers[0].uid)!=-1){
              this.allUserListWithOutVoteHistory.push(...reciveVoteUsers)
            }
          })

        });
    },

    loadVoteGiveToHistory() {
      function onlyUnique(value, index, array) {
        return array.indexOf(value) === index;
      }
      let allUserList = this.allUserListVoteHistory.slice(0);
      if (allUserList.length == 0) {
        this.getAllUsers();
        this.getAllReciveVote();
        return false;
      }
      const promiseFuncs = [];
      console.log("allUserListVoteHistory", this.allUserListVoteHistory)
      while (allUserList.length) {
        let queryUsers = allUserList.slice(0, 10)
        allUserList.splice(0, 10)
        if (queryUsers.length != 0) {
          promiseFuncs.push(
            new Promise((resolve, reject) => {
              fireStore
                .collection("users")
                .where("uid", "not-in", queryUsers)
                .get()
                .then((snapshot) => {
                  const users = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                  }));
                  console.log("query not in ", users)
                  const uniqueUsers = users.filter(item => this.allUserListVoteHistory.indexOf(item.uid) == -1);
                  console.log("allUserListVoteHistory", this.allUserListVoteHistory)
                  console.log("uniqueUsers", uniqueUsers.map(i => i.uid))
                  uniqueUsers.map(item=>{
                    if(this.allUserListWithOutVoteHistory.map(i=>i.uid).indexOf(item.uid) == -1){
                      this.allUserListWithOutVoteHistory.push(item)
                    }
                  })
                  resolve();
                });
            })
          );
        }
      }

      Promise.all(promiseFuncs).then((values) => {
        console.log("allUserListWithOutVoteHistory", this.allUserListWithOutVoteHistory.map(i => i.uid))
        this.getAllReciveVote();
      });
    },//내가 좋아요한사람

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

    .bg-area {
      width: 100%;
      height: 100%;
      position: absolute;
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;
      opacity: 0;

      svg {
        // display: none;
        width: 0;
        height: 0;
      }

      &.nope {
        opacity: 1;
        display: flex;
        flex: none;
        align-items: center;
        justify-content: center;
        background: linear-gradient(180deg,
            #121214 0%,
            rgba(18, 18, 20, 0) 100%);

        .nope-icon {
          transform: rotate(10deg);
          width: auto;
          height: auto;
        }
      }

      &.like {
        opacity: 1;
        display: flex;
        flex: none;
        align-items: center;

        background: linear-gradient(180deg,
            #fe7f8e 0%,
            rgba(255, 66, 89, 0) 100%);

        .like-icon {
          transform: rotate(-7deg);
          width: auto;
          height: auto;
        }
      }
    }

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
