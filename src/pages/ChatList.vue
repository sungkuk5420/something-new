<template>
  <q-page class="chat-list-page">
    <div class="chat-list-title">채팅 목록</div>
    <div class="list" v-show="chatList.length != 0">
      <ul>
        <van-swipe-cell v-for="(currentChat,index) in chatList" :key="index">
          <li class="chat first" @click="moveToChatRoom">
            <div class="user-image">
             <img :src="currentChat.chatImage" alt="" srcset="">
            </div>
            <div class="chat__user-preview">
              <div class="chat__user-preview__name">{{currentChat.name}}</div>
              <div class="chat__user-preview__latest-massage">{{currentChat.latestMassage}}</div>
            </div>
            <div class="chat__user-timeline">
              <div class="chat__user-timeline__time">{{currentChat.time}}</div>
              <div class="chat__user-timeline__badge-count" v-show="currentChat.badgeCount!=0">{{currentChat.badgeCount}}</div>
            </div>
          </li>
          <template #right>
            <van-button square text="나가기" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
      </ul>
    </div>
    <div class="list-none" v-show="chatList.length == 0">
      <svg
        width="118"
        height="97"
        viewBox="0 0 118 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M75.8571 62.1169C75.8571 76.4763 64.2165 88.1169 49.8571 88.1169L29.8833 88.1169L18.1186 95.9601C14.7958 98.1754 10.3449 95.7933 10.3451 91.7997L10.3455 82.8777C4.06136 78.1318 -2.28882e-05 70.5986 -2.28882e-05 62.1169V55.5C-1.52588e-05 41.1406 11.6406 29.5 26 29.5L49.8571 29.5C64.2165 29.5 75.8571 41.1406 75.8571 55.5V62.1169Z"
            fill="#FFBCC4"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.2856 45.6428C25.2856 60.0023 36.9262 71.6429 51.2856 71.6429H80.0706L97.5826 83.3176C100.905 85.5329 105.356 83.1508 105.356 79.1572L105.356 67.9549C112.93 63.411 118 55.1189 118 45.6428V26C118 11.6406 106.359 0 91.9999 0L51.2856 3.13375e-06C36.9262 3.76142e-06 25.2856 11.6406 25.2856 26V45.6428Z"
            fill="#FE7F8E"
          />
          <circle cx="52.6785" cy="35.8214" r="6.32143" fill="white" />
          <circle cx="71.6427" cy="35.8214" r="6.32143" fill="white" />
          <circle cx="90.6067" cy="35.8214" r="6.32143" fill="white" />
        </g>
      </svg>
      <div class="title">대화 중인 친구가 없어요!</div>
      <div class="title-sub">대화할 친구를 찾으러 가볼까요?</div>
      <div class="friend-button" @click="getChatList">친구 추천 받기</div>
    </div>
  </q-page>
</template>

<script>
import { authService, fireStore } from "src/fbase";
import mixin from "./Mixin";
export default {
  mixins: [mixin],
  data() {
    return {
      chatList: [],
      allChatMemberList: [],
    };
  },
  mounted(){
    setTimeout(() => {
      this.getChatList(); 
    }, 500);
  },
  methods: {
    getChatList() {
      const user = authService.currentUser;
      console.log(user.uid)
      
      fireStore
        .collection("chats")
        .where("members", "array-contains", user.uid)
        .get()
        .then((snapshot) => {
          snapshot.docs.map(item=>{
            return item.data().members.map(i=>{
              const allChatMemberListUids = this.allChatMemberList.map(i=>i.uid)
              if(allChatMemberListUids.indexOf(i.uid) == -1){
                this.allChatMemberList.push(i)
              }
            })
          })
          console.log("allChatMemberList",this.allChatMemberList)
          this.getAllUserByUids(this.allChatMemberList).then(result=>{
            this.allChatMemberList = result;
            let chatList = snapshot.docs
              .map((doc) => {
                const yourInfoUid = doc.data().members.filter(i=>i!=user.uid)[0]
                const yourInfo = this.allChatMemberList.filter(i=>i.uid==yourInfoUid)[0]
              return {
                id: doc.id,
                ...doc.data(),
                chatImage:yourInfo.profileImage,
                name:yourInfo.name,
              }})
              this.chatList = chatList
          });
        });
    },
    moveToChatRoom() {
      this.$router.push("/chat");
    },
  },
};
</script>

<style lang="scss">
.chat-list-page {
  padding: 0 24px;
  padding-top: 50px;
  padding-bottom: 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
  .chat-list-title {
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 38px;
    display: flex;
    align-items: center;
    margin-bottom: 35px;
    color: #000000;
  }
  .list {
    ul {
      .van-swipe-cell__right {
        display: flex;
        align-items: center;
      }
      .van-button--danger {
        background: #fe7f8e;
        border-radius: 8px;
        border: none;
        height: 64px;
      }
      .first {
        padding-top: 0px;
      }
      .chat {
        display: flex;
        padding-bottom: 18px;
        padding-top: 18px;
        border-bottom: 1px solid #ece8e8;
        align-items: center;

        .user-image {
          flex: 2;
          display: flex;
          justify-content: center;
          img{
            width: 60px;
            height: 60px;
            border-radius: 50%;
          }
        }
        &__user-preview {
          flex: 6;
          padding-left: 5px;
          &__name {
            font-family: Noto Sans KR;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 21px;
            display: flex;
            align-items: center;
            color: #000000;
          }
          &__latest-massage {
            font-family: Noto Sans CJK KR;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            color: #747070;
          }
        }
        &__user-timeline {
          flex: 2;
          display: flex;
          flex-direction: column;
          align-items: center;

          &__time {
            font-family: Noto Sans CJK KR;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            color: #747070;
            margin-bottom: 3px;
          }
          &__badge-count {
            font-family: Noto Sans KR;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 18px;
            color: #ffffff;
            background: #ff4259;
            border-radius: 8px;
            width: 35px;
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }

  .list-none {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding-bottom: 50px;
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
}
</style>
