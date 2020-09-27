import { T } from "./types";

export const mutations = {
  [T.TYPE](state, data) {
    state.data = data;
  },
  [T.USER_LOGIN](state, data) {
    state.isLogin = data;
  },
  [T.USER_LOG_OUT](state, data) {
    state.isLogin = data
  }
};
