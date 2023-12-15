<template>
  <q-page class="chat-page">
    <van-nav-bar title="고구마" left-arrow @click-left="() => {
      $router.push('/chatList');
    }
      "></van-nav-bar>
    <div class="chat" ref="chatsArea">
      <div class="chat-contents">
        <!-- <div class="date-bar">
          <div class="line">
            <hr />
          </div>
          <div class="date">2020년 10월 4일</div>
          <div class="line">
            <hr />
          </div>
        </div> -->
        <div class="chat-content">
          <div :class="'chat-line ' +
            `${loginUser&&loginUser.uid == currentMessage.creatorId ? 'mine' : ''}`
            " v-for="(currentMessage, index) in chats" :key="index">
            <div class="profile-image">
              <img :src="currentMessage.profileImage" alt srcset />
            </div>
            <div class="chat-text">
              <div class="line">{{ currentMessage.text }}</div>
              <div class="time">{{ new Date(currentMessage.createdAt).toLocaleDateString() + ' ' + new
                Date(currentMessage.createdAt).toLocaleTimeString() }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="input-box">
      <div class="input-inner">
        <input type="text" name id v-model="messageInput" v-on:keyup.enter="sendMessage" />
      </div>
      <div class="input-emoticon" @click="sendMessage">
        <img src="~assets/send-icon.png" alt="" srcset="">
      </div>
    </div>
  </q-page>
</template>


<script>
import { T } from "../store/module-example/types";
import { fireStore } from "../fbase";
import { mapGetters } from "vuex";
import mixin from "./Mixin";
export default {
  mixins: [mixin],
  data() {
    return {
      chats: [],
      messageInput: "",
      isFirst: true
    };
  },
  mounted() {
    fireStore
      .collection("chats/ABS1LEtAwASMn69CKIqK/messages")
      .onSnapshot((snapshot) => {
        const chatsArray = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => a.createdAt - b.createdAt);
        this.chats = chatsArray;
        if (this.isFirst) {
          this.isFirst = false
          console.log('mounted');
          console.log(this.$refs.chatsArea.scrollHeight)
          setTimeout(() => {
            this.$refs.chatsArea.scrollTop = this.$refs.chatsArea.scrollHeight;
          }, 0);
        }
      });
  },
  methods: {
    async sendMessage() {
      if (this.messageInput == "") {
        return false;
      }
      await fireStore.collection("chats/ABS1LEtAwASMn69CKIqK/messages").add({
        text: this.messageInput,
        createdAt: Date.now(),
        creatorId: this.loginUser.uid,
        profileImage: this.loginUser.profileImage,
        name: this.loginUser.name,
      });
      if (this.$refs.chatsArea) {
        this.$refs.chatsArea.scrollTop = this.$refs.chatsArea.scrollHeight;
      }
      this.messageInput = "";
    },
    getAllUsers() {
      const successCb = (userList) => {
        this.userList = userList;
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
.chat-page {
  background-color: #f9f8f8;
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex: none;

  .van-nav-bar {
    flex: none;
    height: 46px;
  }

  .van-nav-bar .van-icon {
    color: #000;
  }

  .van-hairline--bottom::after {
    border-bottom: none;
  }

  .chat {
    flex: 1;
    overflow: auto;

    .chat-contents {
      .date-bar {
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 20px 0;
        font-size: 12px;

        .date {
          font-family: Noto Sans CJK KR;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 18px;
          display: flex;
          align-items: center;
          color: #747070;
        }

        .line {
          flex: 1;
          margin: 4px 16px;

          hr {
            border: 0;
            height: 1px;
            background: #ddd;
          }
        }
      }

      .chat-content {
        .chat-line {
          display: flex;
          margin-bottom: 6px;

          .profile-image {
            margin-left: 23px;
            width: 39px;
            height: 39px;
            overflow: hidden;

            img {
              border-radius: 50%;
              width: 100%;
              height: 100%;
            }
          }

          .non-image {
            margin-left: 62px;
          }

          .chat-text {
            display: flex;
            margin-left: 15px;

            .line {
              height: 43px;
              padding: 0 12px;
              background: #ffffff;
              border: 1px solid #ece8e8;
              box-sizing: border-box;
              box-shadow: 0px 2px 22px rgba(0, 0, 0, 0.08);
              border-radius: 0px 8px 8px 8px;
              font-family: Noto Sans CJK KR;
              font-style: normal;
              font-weight: normal;
              font-size: 14px;
              line-height: 21px;
              display: flex;
              align-items: center;
              color: #121214;
            }

            .time {
              margin-left: 7px;
              padding-bottom: 4px;
              font-family: Noto Sans CJK KR;
              font-style: normal;
              font-weight: normal;
              font-size: 11px;
              line-height: 16px;
              display: flex;
              color: #747070;
              align-items: flex-end;
            }
          }

          .chat-last {
            display: flex;
          }
        }

        .chat-line.mine {
          margin-right: 25px;
          margin-bottom: 4px;
          display: flex;
          justify-content: flex-end;

          .chat-text {
            display: flex;
            flex-direction: row-reverse;

            .line {
              height: 43px;
              padding: 0 12px;
              background: #fe7f8e;
              box-shadow: 0px 2px 22px rgba(0, 0, 0, 0.08);
              border-radius: 8px 0px 8px 8px;
              font-family: Noto Sans CJK KR;
              font-style: normal;
              font-weight: normal;
              font-size: 14px;
              line-height: 21px;
              display: flex;
              align-items: center;
              color: #ffffff;
            }

            .time {
              order: 1;
              margin-right: 7px;
              padding-bottom: 4px;
              font-family: Noto Sans CJK KR;
              font-style: normal;
              font-weight: normal;
              font-size: 11px;
              line-height: 16px;
              display: flex;
              color: #747070;
              align-items: flex-end;
            }
          }

          .profile-image {
            display: none;
          }
        }
      }
    }
  }

  .input-box {
    width: 100%;
    background: white;
    height: 48px;
    display: flex;
    flex: none;
    padding-left: 16px;
    align-items: center;

    .input-inner {
      background: #ffffff;
      border: 1px solid #e3e1e1;
      box-sizing: border-box;
      border-radius: 8px;
      height: 32px;
      flex: 1;
      padding: 0;

      input {
        padding: 0 10px;
        width: 100%;
        height: 32px;
        border: none;
        background: transparent;
      }
    }

    .input-emoticon {
      width: 32px;
      height: 32px;
      background: #e3e1e1;
      border-radius: 8px;
      margin-left: 8px;
      margin-right: 16px;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
}
</style>
