<template>
  <q-page class="chat-room-page">
    <div class="chat_area">
      <h6 class="chat_title">chat-room</h6>
      <ul class="list type_main">
        <li v-for="(list, index) in userChatData" :key="index">
          {{ currentUser }} : {{ list }}
        </li>
      </ul>
      <div class="input_area">
        <input type="text" v-model="chatData" @keyup.enter="chatInput" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { T } from "../store/module-example/types";
import { mapGetters } from "vuex";
import { Field } from "vant";
import { Toast } from "vant";

export default {
  data() {
    return {
      chatData: "",
    };
  },
  computed: {
    ...mapGetters({
      userChatData: "getChatData",
      currentUser: "getCurrentUser",
    }),
  },
  methods: {
    chatInput() {
      const thisObj = this;
      let chatData = thisObj.chatData;

      if (chatData !== "") {
        thisObj.$store.dispatch(T.CHAT_ADD_DATA, chatData);
        thisObj.chatData = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.chat_title {
  text-align: center;
  margin: 0;
  padding: 15px 0;
}
.chat_area .list.type_main {
  text-align: right;
}
.chat_area .list > li {
  padding: 0 10px;
  box-sizing: border-box;
}
.input_area input {
  z-index: 2001;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 35px;
  line-height: 35px;
  padding: 0 10px;
  box-sizing: border-box;
}
</style>
