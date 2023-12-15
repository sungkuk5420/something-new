<template>
  <q-page class="ParticipationList-page">
    <van-tabs v-model="activeName">
      <van-tab title="내가 좋아요" name="a">
        <div class="give">
          <van-search v-model="value" placeholder="Placeholder" />
          <div class="content">
            <ul v-show="giveToLikeList.length != 0">
              <li v-for="currnetGiveToLike in giveToLikeList" :key="currnetGiveToLike">
                <div class="image">
                  <img :src="currnetGiveToLike.targetUser.profileImage" alt="" srcset="">
                </div>
                <div class="left">
                  <div class="nickname">{{ currnetGiveToLike.targetUser.name }}</div>
                  <div class="user-infomation">
                    <div class="user-infomation-age">{{ new Date().getFullYear() - currnetGiveToLike.targetUser.birthYear }}살</div>
                    <div class="user-infomation-address">{{ currnetGiveToLike.targetUser.location }}</div>
                  </div>
                </div>
                <div class="right">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 5.5L5.5 16.5" stroke="#BEBBBB" stroke-width="1.33333" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M5.5 5.5L16.5 16.5" stroke="#BEBBBB" stroke-width="1.33333" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </div>
              </li>
            </ul>

            <div class="list-none" v-show="giveToLikeList.length == 0">
              <svg width="117" height="95" viewBox="0 0 117 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="80.9817" width="46.4536" height="84.1302" rx="23.2268" transform="rotate(40.2482 80.9817 0)"
                  fill="#BEBBBB" />
                <rect y="34.73" width="46.4536" height="84.1302" rx="23.2268" transform="rotate(-45 0 34.73)"
                  fill="#E3E1E1" />
              </svg>

              <div class="title">좋아요한 친구가 없어요!</div>
              <div class="title-sub">설레는 인연을 찾으러 가볼까요?</div>
              <div class="friend-button" @click="loadVoteGiveToHistory">친구 추천 받으러 가기</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="상대방이 좋아요" name="b">
        <div class="take">
          <van-search v-model="value" placeholder="Placeholder" />
          <div class="content">
            <ul v-show="takeToLikeList.length != 0">
              <li v-for="currnetTakeToLike in takeToLikeList">
                <div class="image">
                  <img :src="currnetTakeToLike.targetUser.profileImage" alt="" srcset="">
                </div>
                <div class="left">
                  <div class="nickname">{{ currnetTakeToLike.targetUser.name }}</div>
                  <div class="user-infomation">
                    <div class="user-infomation-age">{{ currnetTakeToLike.targetUser.birthYear }}</div>
                    <div class="user-infomation-address">{{ currnetTakeToLike.targetUser.location }}</div>
                  </div>
                </div>
                <div class="right">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 5.5L5.5 16.5" stroke="#BEBBBB" stroke-width="1.33333" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M5.5 5.5L16.5 16.5" stroke="#BEBBBB" stroke-width="1.33333" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </div>
              </li>
            </ul>

            <div class="list-none" v-show="takeToLikeList.length == 0">
              <svg width="117" height="95" viewBox="0 0 117 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="80.9817" width="46.4536" height="84.1302" rx="23.2268" transform="rotate(40.2482 80.9817 0)"
                  fill="#BEBBBB" />
                <rect y="34.73" width="46.4536" height="84.1302" rx="23.2268" transform="rotate(-45 0 34.73)"
                  fill="#E3E1E1" />
              </svg>

              <div class="title">좋아요한 친구가 없어요!</div>
              <div class="title-sub">설레는 인연을 찾으러 가볼까요?</div>
              <div class="friend-button" @click="loadVoteTakeToHistory">친구 추천 받으러 가기</div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </q-page>
</template>

<script>
import { fireStore, authService } from "../fbase";
import { mapGetters } from "vuex";
export default {
  data() {
    value: "";
    return {
      activeName: "a",
      giveToLikeList: [],
      takeToLikeList: [],
      allUserList: []
    };
  },
  computed: {
    ...mapGetters({
      loginUser: "getLoginUser",
    }),
  },
  methods: {
    loadVoteGiveToHistory() {
      function onlyUnique(value, index, array) {
        return array.indexOf(value) === index;
      }
      const user = authService.currentUser;
      console.log(user.uid)
      fireStore
        .collection("voteHistories")
        .orderBy("createdAt", "desc")
        .where("userUid", "==", user.uid)
        .onSnapshot((snapshot) => {
          let voteList = snapshot.docs
            .map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          let allUserList = snapshot.docs
            .map((doc) => (doc.data().targetUid)).filter(onlyUnique);
          console.log("allUserList", allUserList)


          const promiseFuncs = [];


          while (allUserList.length) {
            let queryUsers = allUserList.slice(0, 10)
            allUserList.splice(0, 10)
            if (queryUsers.length != 0) {
              promiseFuncs.push(
                new Promise((resolve, reject) => {
                  fireStore
                    .collection("users")
                    .where("uid", 'in', queryUsers)
                    .onSnapshot((snapshot) => {
                      const users = snapshot.docs.map((doc) => ({
                        ...doc.data(),
                      }));
                      this.allUserList.push(...users)
                      resolve();
                    });
                })
              );
            }
          }

          Promise.all(promiseFuncs).then((values) => {
            console.log(this.allUserList)
            voteList = voteList.map(i => {
              return {
                ...i,
                targetUser: this.allUserList.filter(user => {
                  return user.uid == i.targetUid
                })[0]
              }
            })
            console.log(voteList)
            this.giveToLikeList = voteList;
          });

        });
    },//내가 좋아요한사람
    loadVoteTakeToHistory() {
      function onlyUnique(value, index, array) {
        return array.indexOf(value) === index;
      }
      const user = authService.currentUser;
      console.log(user.uid)
      fireStore
        .collection("voteHistories")
        .orderBy("createdAt", "desc")
        .where("targetUid", "==", user.uid)
        .onSnapshot((snapshot) => {
          let voteList = snapshot.docs
            .map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          let allUserList = snapshot.docs
            .map((doc) => (doc.data().targetUid)).filter(onlyUnique);

          const promiseFuncs = [];


          while (allUserList.length) {
            let queryUsers = allUserList.slice(0, 10)
            allUserList.splice(0, 10)
            if (queryUsers.length != 0) {
              promiseFuncs.push(
                new Promise((resolve, reject) => {
                  fireStore
                    .collection("users")
                    .where("uid", 'in', queryUsers)
                    .onSnapshot((snapshot) => {
                      const users = snapshot.docs.map((doc) => ({
                        ...doc.data(),
                      }));
                      this.allUserList.push(...users)
                      resolve();
                    });
                })
              );
            }
          }

          Promise.all(promiseFuncs).then((values) => {
            console.log(this.allUserList)
            voteList = voteList.map(i => {
              return {
                ...i,
                targetUser: this.allUserList.filter(user => {
                  return user.uid == i.targetUid
                })[0]
              }
            })
            console.log(voteList)
            this.takeToLikeList = voteList;
          });

        });
    } // 좋아요를 받은 사람
  },
  mounted() {
    this.loadVoteGiveToHistory();
    this.loadVoteTakeToHistory();
  },
};
</script>

<style lang="scss">
.ParticipationList-page {
  .van-tabs__nav--line {
    overflow: hidden;
  }

  .van-tabs__wrap {
    overflow: visible;
    flex: 0;
    height: 44px !important;

    .van-tab {
      height: 44px !important;
    }
  }

  .van-tabs.van-tabs--line {
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;

    .van-tabs__content {
      flex: 1;
      display: flex;

      .van-tab__pane {
        height: 100%;

        .give,
        .take {
          height: 100%;
          display: flex;
          flex-direction: column;

          .content {
            display: flex;
            align-items: center;
            width: 100%;
            flex: 1;
            padding-bottom: 60px;

            .list-none {
              margin-bottom: 78px;
            }
          }
        }
      }
    }
  }

  .van-tabs__line {
    background: #fe7f8e;
    width: 50%;
  }

  .give {
    .list-none {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;

      .title {
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        color: #121214;
        margin-bottom: 12px;
      }

      .title-sub {
        font-family: Apple SD Gothic Neo;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #72717d;
        margin-bottom: 14px;
      }

      .friend-button {
        font-family: Apple SD Gothic Neo;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        color: #ffffff;
        padding: 10px 15px;
        background: #fe7f8e;
        border-radius: 12px;
      }
    }

    .van-search {
      margin-bottom: 14px;
    }

    ul {
      width: 100%;
    }

    ul>li {
      margin-bottom: 12px;
      display: flex;
      width: 100%;

      .left {
        flex: 8;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        padding-left: 26px;
        justify-content: center;

        .nickname {
          font-family: Noto Sans CJK KR;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 24px;
          display: flex;
          align-items: center;
          color: #121214;
        }

        .user-infomation {
          display: flex;
          font-family: Noto Sans CJK KR;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 21px;
          display: flex;
          align-items: center;
          color: #585555;

          .user-infomation-address {
            position: relative;
            padding-left: 10px;
          }

          .user-infomation-address:before {
            content: "";
            width: 3px;
            height: 3px;
            position: absolute;
            left: 3px;
            top: 8px;
            border-radius: 100%;
            background: #585555;
          }
        }
      }

      .right {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .image {
        img {
          border-radius: 50%;
          width: 60px;
          height: 60px;
        }
      }
    }

    .content {
      padding: 0 20px;
    }

    .user-name {
      font-family: Noto Sans CJK KR;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: #121214;
    }

    .user-age-address {
      font-family: Noto Sans CJK KR;
      font-style: normal;
      font-weight: normal;
      display: flex;
      font-size: 14px;
      line-height: 21px;
      color: #747070;

      li {
        position: relative;
        padding-right: 10px;
      }

      li:before {
        content: "";
        position: absolute;
        width: 3px;
        height: 3px;
        background: #747070;
        right: 3px;
        border-radius: 100%;
        top: 9px;
      }

      li:last-child:before {
        display: none;
      }
    }
  }

  .take {
    .list-none {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;

      .title {
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        color: #121214;
        margin-bottom: 12px;
      }

      .title-sub {
        font-family: Apple SD Gothic Neo;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #72717d;
        margin-bottom: 14px;
      }

      .friend-button {
        font-family: Apple SD Gothic Neo;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        color: #ffffff;
        padding: 10px 15px;
        background: #fe7f8e;
        border-radius: 12px;
      }
    }

    .van-search {
      margin-bottom: 14px;
    }

    ul>li {
      margin-bottom: 12px;
      display: flex;

      .left {
        flex: 8;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        padding-left: 26px;
        justify-content: center;

        .nickname {
          font-family: Noto Sans CJK KR;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 24px;
          display: flex;
          align-items: center;
          color: #121214;
        }

        .user-infomation {
          display: flex;
          font-family: Noto Sans CJK KR;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 21px;
          display: flex;
          align-items: center;
          color: #585555;

          .user-infomation-address {
            position: relative;
            padding-left: 10px;
          }

          .user-infomation-address:before {
            content: "";
            width: 3px;
            height: 3px;
            position: absolute;
            left: 3px;
            top: 8px;
            border-radius: 100%;
            background: #585555;
          }
        }
      }

      .right {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .image {
        width: 60px;
        height: 60px;
      }
    }

    .content {
      padding: 0 20px;
    }

    .user-name {
      font-family: Noto Sans CJK KR;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: #121214;
    }

    .user-age-address {
      font-family: Noto Sans CJK KR;
      font-style: normal;
      font-weight: normal;
      display: flex;
      font-size: 14px;
      line-height: 21px;
      color: #747070;

      li {
        position: relative;
        padding-right: 10px;
      }

      li:before {
        content: "";
        position: absolute;
        width: 3px;
        height: 3px;
        background: #747070;
        right: 3px;
        border-radius: 100%;
        top: 9px;
      }

      li:last-child:before {
        display: none;
      }
    }
  }
}
</style>
