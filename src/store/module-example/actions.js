import { T } from "./types";
import { ajaxActions } from "./ajaxActions";

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
  [T.USER_LOGIN]({ commit }, { data = {}, successCb, errorCb }) {
    console.log(`store action [T.USER_LOGIN] data`);
    console.log(data);
    if (successCb) {
      setTimeout(() => {
        successCb(data);
        commit(T.USER_LOGIN, data);
      }, 2000);
    }
  },
  [T.USER_LOG_OUT]({ commit }, { data = {}, successCb, errorCb }) {
    console.log(`store action [T.USER_LOG_OUT] data`);
    console.log(data);

    if (successCb) {
      setTimeout(() => {
        successCb(data);
        commit(T.USER_LOG_OUT, data.userCheck);
      }, 2000)
    }
  },
  [T.CHAT_ADD_DATA]({ commit }, data) {
    console.log(`store action [T.CHAT_ADD_DATA] data`);
    console.log(data);

    commit(T.CHAT_ADD_DATA, data);
  }
};
