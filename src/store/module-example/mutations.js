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
    state.loginUser = loginUser;
  },
  [T.UPDATE_HEIGHT](state, data) {
    state.loginUser.height = data.height;
  },
  [T.UPDATE_LOCATION](state, data) {
    state.loginUser.location = data.location;
  },
  [T.UPDATE_HOBBIES](state, data) {
    state.loginUser.hobbies = data.hobbies;
  },
  [T.UPDATE_PERSONALITY](state, data) {
    state.loginUser.personalities = data.personalities;
  },
  [T.UPDATE_SMOKING](state, data) {
    state.loginUser.smoking = data.smoking;
  },
  [T.UPDATE_DRINKING](state, data) {
    state.loginUser.drinking = data.drinking;
  },
};
