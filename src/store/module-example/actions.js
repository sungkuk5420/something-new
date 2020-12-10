import { T } from "./types";
import { ajaxActions } from "./ajaxActions";
import {authService} from "src/fbase";
import {Toast} from "vant";

export const actions = {
  [T.AJAX_ACTION]({ commit }, { data = {}, successCb, errorCb }) {
    console.log(`store action [T.AJAX_ACTION] joinUser = ${data}`);
    ajaxActions.joinUser(
      data,
      results => {
        console.log(`action / AJAX_ACTION / success`);
        console.log(" reults=", results);
        commit(T.ACTION, results);
        if (successCb) {
          successCb(results);
        }
      },
      res => {
        console.log(`action / AJAX_ACTION / error`, res);
        commit(T.AJAX_ACTION);
        if (errorCb) {
          errorCb();
        }
      }
    );
  },
  [T.ACTION]({ commit }, { data = {}, successCb, errorCb }) {
    console.log(`store action [T.ACTION] data`);
    console.log(data);
    commit(T.ACTION, data);
  },
  async [T.USER_LOGIN]({ commit }, { data, successCb, errorCb }) {
    console.log(`store action [T.USER_LOGIN] data`);
    console.log(data);
    try {
      const loginResult = await authService.signInWithEmailAndPassword(data.email, data.password)
      if (loginResult) {
        successCb(loginResult)
      }
    } catch (e) {
      if (e.code !== 'auth/user-not-found') Toast.fail('입력하신 회원정보를 다시 확인해주시기 바랍니다.')
      errorCb(e.code)
    }
  },
  async [T.USER_LOG_OUT]({ commit }, { data = {}, successCb, errorCb }) {
    console.log(`store action [T.USER_LOG_OUT] data`);
    console.log(data);
    try {
      const logOutResult = await authService.signOut();
      if (logOutResult) {
        successCb()
      }
    } catch (e) {
      errorCb()
    }
  },
  [T.CHAT_ADD_DATA]({ commit }, data) {
    console.log(`store action [T.CHAT_ADD_DATA] data`);
    console.log(data);

    commit(T.CHAT_ADD_DATA, data);
  },
  async [T.REGISTER_USER]({commit},{ data, successCb, errorCb}) {
    console.log(`store action [T.REGISTER_USER] data : ${JSON.stringify(data)}`);
    try {
      const registerResult = await authService.createUserWithEmailAndPassword(data.email, data.password)
      if (registerResult) {
        successCb(registerResult);
        console.log(`store action [T.REGISTER_USER] success data : ${JSON.stringify(registerResult)}`);
      }
    } catch (e) {
      console.log(`store action [T.REGISTER_USER] error : ${JSON.stringify(e)}`);
      errorCb()
    }
  }
};
