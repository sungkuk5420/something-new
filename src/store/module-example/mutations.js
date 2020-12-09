import { T } from "./types";

export const mutations = {
  [T.TYPE](state, data) {
    state.data = data;
  },
  [T.USER_LOGIN](state, data) {
    state.currentUser = data.userInfo.name;
  },
  [T.USER_LOG_OUT](state, data) {
    state.currentUser = data;
  },
  [T.CHAT_ADD_DATA](state, data) {
    state.chatData.push(data);
  }
};
