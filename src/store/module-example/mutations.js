import { T } from "./types";

export const mutations = {
  [T.TYPE](state, data) {
    state.data = data;
  },
  [T.USER_LOGIN](state, data) {
    state.loginUser = data.userInfo.name;
  },
  [T.USER_LOG_OUT](state, data) {
    state.loginUser = data;
  },
  [T.CHAT_ADD_DATA](state, data) {
    state.chatData.push(data);
  },
  [T.SET_USER_DATA_ON_SOTRE](state, loginUser) {
    state.loginUser = loginUser
  },
  [T.UPDATE_HEIGHT](state, height) {
    state.loginUser.height = height
  }
};
